/**
 * Meta (Facebook) Pixel + Conversions API.
 *
 * Every event is sent twice with the same event_id: once from the browser
 * (fbq) and once from our server (/api/meta-capi). Meta keeps one copy, and
 * the server copy still gets through when an ad blocker stops the pixel.
 */
import { trackClarityEvent } from "@/lib/clarity";

export const META_PIXEL_ID = "1673844264469790";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type MetaEventName =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "Contact"
  // Custom events, named to match the events set up in Events Manager.
  | "Phone Number Bottom"
  | "Quote Request";

/** Meta standard events go through fbq('track'); anything else is custom. */
const STANDARD_EVENTS = new Set<MetaEventName>([
  "PageView",
  "ViewContent",
  "Lead",
  "Contact",
]);

/** Contact details from a form. Hashed on the server before going to Meta. */
export interface MetaUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

function newEventId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function trackMetaEvent(
  eventName: MetaEventName,
  customData: Record<string, string | number> = {},
  userData: MetaUserData = {}
) {
  if (typeof window === "undefined") return;

  const eventId = newEventId();

  // Tag the Clarity recording too, so lead sessions can be filtered there.
  if (eventName === "Lead") {
    trackClarityEvent(`Lead: ${customData.content_name ?? "unknown"}`);
  }

  // Browser pixel. The base code in the root layout defines fbq (and queues
  // calls until fbevents.js loads), but it runs after hydration, so the first
  // page's event can arrive before fbq exists - wait a little for it.
  const sendBrowser = (triesLeft: number) => {
    if (typeof window.fbq === "function") {
      const method = STANDARD_EVENTS.has(eventName) ? "track" : "trackCustom";
      window.fbq(method, eventName, customData, { eventID: eventId });
    } else if (triesLeft > 0) {
      window.setTimeout(() => sendBrowser(triesLeft - 1), 250);
    }
  };
  sendBrowser(20);

  // Server copy (Conversions API).
  const body = JSON.stringify({
    eventName,
    eventId,
    eventSourceUrl: window.location.href,
    customData,
    userData,
    fbp: readCookie("_fbp"),
    fbc: readCookie("_fbc"),
  });

  try {
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never let tracking break the page.
  }
}

/** Splits "Jane Q Smith" into first and last name for matching. */
export function splitName(fullName: string): Pick<MetaUserData, "firstName" | "lastName"> {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return {};
  if (parts.length === 1) return { firstName: parts[0] };
  return { firstName: parts[0], lastName: parts[parts.length - 1] };
}
