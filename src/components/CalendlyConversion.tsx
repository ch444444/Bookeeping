"use client";

import { useEffect } from "react";
import { fireBookingConversion } from "@/lib/gtag";
import { trackMetaEvent } from "@/lib/metaPixel";

const META_BOOKING_KEY = "nsb_meta_booking_lead_sent";
let metaBookingSent = false;

/** Sends one Meta Lead per browser session for a Calendly booking. */
function sendMetaBookingLead() {
  if (metaBookingSent) return;
  try {
    if (window.sessionStorage.getItem(META_BOOKING_KEY)) {
      metaBookingSent = true;
      return;
    }
    window.sessionStorage.setItem(META_BOOKING_KEY, "1");
  } catch {
    // Blocked storage: the in-memory guard still applies.
  }
  metaBookingSent = true;
  trackMetaEvent("Lead", { content_name: "Calendly booking" });
}

function isCalendlyOrigin(origin: string) {
  try {
    const { hostname } = new URL(origin);
    return hostname === "calendly.com" || hostname.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

/**
 * Listens for Calendly's postMessage events from the embedded scheduler and
 * reports the Google Ads booking conversion when - and only when - an
 * appointment was actually scheduled. Opening or browsing Calendly sends
 * other events (profile_page_viewed, date_and_time_selected) that are ignored.
 */
export default function CalendlyConversion() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!isCalendlyOrigin(event.origin)) return;

      const data = event.data as { event?: unknown } | null;
      if (!data || typeof data !== "object") return;
      if (data.event !== "calendly.event_scheduled") return;

      fireBookingConversion();
      sendMetaBookingLead();
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
