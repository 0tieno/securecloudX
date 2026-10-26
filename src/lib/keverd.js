import { Keverd } from "@keverdjs/agent";

let initializedApiKey;

const EVENT_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function collectKeverdEvent() {
  const apiKey = import.meta.env.VITE_KEVERD_PUBLIC_KEY;
  if (!apiKey || !/^kv_pk_(test|live)_/.test(apiKey)) {
    throw new Error("Keverd's public API key is missing or invalid.");
  }

  if (initializedApiKey !== apiKey) {
    Keverd.init(apiKey);
    initializedApiKey = apiKey;
  }

  const visitor = await Keverd.getVisitorData();
  const eventId = visitor?.event_id ?? visitor?.requestId;
  if (typeof eventId !== "string" || !EVENT_ID_PATTERN.test(eventId)) {
    throw new Error("Keverd did not return a valid event ID.");
  }

  return eventId;
}
