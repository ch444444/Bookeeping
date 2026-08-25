"use client";

import { useEffect } from "react";
import { fireBookingConversion } from "@/lib/gtag";

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
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
