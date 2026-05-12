// @ts-nocheck — Deno runtime; not checked by VS Code TypeScript
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_URL = "https://securecloudx.xyz";

function escapeHtml(str: string): string {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

Deno.serve(async (req) => {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    // Validate token format (UUID)
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!token || !UUID_RE.test(token)) {
        return new Response(buildPage("Invalid link", "This unsubscribe link is invalid or has expired."), {
            status: 400,
            headers: { "Content-Type": "text/html; charset=utf-8" },
        });
    }

    const safeToken = escapeHtml(token);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data, error } = await supabase
        .from("email_preferences")
        .update({ subscribed: false })
        .eq("unsubscribe_token", token)
        .eq("subscribed", true)   // idempotent: no-op if already unsubscribed
        .select("user_id")
        .maybeSingle();

    if (error) {
        console.error("Unsubscribe error:", error.message);
        return new Response(buildPage("Something went wrong", "We couldn't process your request. Please try again or contact us at securecloudx.learn@gmail.com."), {
            status: 500,
            headers: { "Content-Type": "text/html; charset=utf-8" },
        });
    }

    if (!data) {
        // Token valid format but not found — either already unsubscribed or wrong token
        return new Response(buildPage(
            "Already unsubscribed",
            "You are not currently subscribed to weekly progress emails.",
        ), {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
        });
    }

    return new Response(buildPage(
        "You've been unsubscribed",
        "You will no longer receive weekly progress emails from SecureCloudX.",
    ), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
    });
});

function buildPage(heading: string, message: string): string {
    const safeHeading = escapeHtml(heading);
    const safeMessage = escapeHtml(message);
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeHeading} — SecureCloudX</title>
  <style>
    body { margin: 0; background: #0a0a0f; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 48px 40px; max-width: 440px; text-align: center; }
    .logo { font-size: 12px; font-weight: 700; color: #38bdf8; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 24px; }
    h1 { margin: 0 0 12px; font-size: 22px; color: #f1f5f9; }
    p { margin: 0 0 28px; font-size: 15px; color: #94a3b8; line-height: 1.6; }
    a { display: inline-block; background: #38bdf8; color: #0f172a; padding: 10px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <p class="logo">SecureCloudX</p>
    <h1>${safeHeading}</h1>
    <p>${safeMessage}</p>
    <a href="${SITE_URL}/home">Go to Dashboard</a>
  </div>
</body>
</html>`;
}
