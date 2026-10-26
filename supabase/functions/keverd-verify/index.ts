const DEFAULT_ALLOWED_ORIGINS = [
  "https://securecloudx.xyz",
  "https://www.securecloudx.xyz",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const EVENT_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ACTIONS = new Set(["allow", "soft_challenge", "hard_challenge", "block"]);

function allowedOrigins(): Set<string> {
  const configuredOrigins = Deno.env.get("KEVERD_ALLOWED_ORIGINS")
    ?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([...DEFAULT_ALLOWED_ORIGINS, ...(configuredOrigins ?? [])]);
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Vary": "Origin",
  });

  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Headers", "authorization, x-client-info, apikey, content-type");
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  }

  return new Response(JSON.stringify(body), { status, headers });
}

Deno.serve(async (req) => {
  const origin = req.headers.get("Origin");
  const origins = allowedOrigins();

  if (origin && !origins.has(origin)) {
    return jsonResponse({ error: "Origin not allowed." }, 403, null);
  }

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin ?? "",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Vary": "Origin",
      },
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405, origin);
  }

  let body: { eventId?: unknown } | null;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Request body must be valid JSON." }, 400, origin);
  }

  if (
    !body ||
    typeof body !== "object" ||
    typeof body.eventId !== "string" ||
    !EVENT_ID_PATTERN.test(body.eventId)
  ) {
    return jsonResponse({ error: "A valid Keverd event ID is required." }, 400, origin);
  }

  const secretKey = Deno.env.get("KEVERD_SECRET_API_KEY");
  if (!secretKey || !/^kv_sk_(test|live)_/.test(secretKey)) {
    console.error("KEVERD_SECRET_API_KEY is missing or invalid.");
    return jsonResponse({ error: "Keverd verification is not configured." }, 500, origin);
  }

  let keverdResponse: Response;
  try {
    keverdResponse = await fetch("https://api.keverd.com/v2/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Secret-API-Key": secretKey,
      },
      body: JSON.stringify({ event_id: body.eventId }),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("Keverd verification request failed:", error);
    return jsonResponse({ error: "Keverd verification is unavailable." }, 502, origin);
  }

  if (!keverdResponse.ok) {
    console.error("Keverd verification returned HTTP status:", keverdResponse.status);
    return jsonResponse({ error: "Keverd verification is unavailable." }, 502, origin);
  }

  let result: { action?: unknown } | null;
  try {
    result = await keverdResponse.json();
  } catch {
    console.error("Keverd verification returned an invalid JSON response.");
    return jsonResponse({ error: "Keverd returned an invalid verification response." }, 502, origin);
  }

  if (
    !result ||
    typeof result !== "object" ||
    typeof result.action !== "string" ||
    !ACTIONS.has(result.action)
  ) {
    console.error("Keverd verification returned an unsupported action.");
    return jsonResponse({ error: "Keverd returned an invalid verification action." }, 502, origin);
  }

  return jsonResponse({ action: result.action }, 200, origin);
});
