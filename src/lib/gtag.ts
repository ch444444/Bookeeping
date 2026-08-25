export const ADS_CONVERSION_SEND_TO = "AW-17804973985/sgg2CJja_c4cEKGviapC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fires the Google Ads conversion after a contact form submission succeeds.
 *
 * If the gtag() helper is not defined yet, this rebuilds it on top of the
 * global dataLayer that the base tag in the root layout already created,
 * rather than skipping the conversion. It never loads a second base tag.
 */
export function fireContactConversion() {
  if (typeof window === "undefined") return;

  let gtag = window.gtag;

  if (typeof gtag !== "function") {
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag = gtag;
  }

  gtag("event", "conversion", { send_to: ADS_CONVERSION_SEND_TO });
}

/** Google Ads "Book appointment" conversion (completed Calendly booking). */
export const ADS_BOOKING_SEND_TO = "AW-17804973985/Tan_CPfYpeccEKGviapC";

const BOOKING_FIRED_KEY = "nsb_booking_conversion_fired";

// Guards against Calendly delivering event_scheduled more than once (repeat
// postMessages, or a remounted listener) within the same page view.
let bookingFired = false;

/**
 * Fires the Google Ads booking conversion once a Calendly appointment has
 * actually been scheduled - never on a click that merely opens Calendly.
 *
 * Deduped per browser session, so a repeated calendly.event_scheduled event
 * cannot report the same booking twice.
 *
 * This deliberately repeats the gtag lookup from fireContactConversion()
 * instead of sharing it, so the already-tested contact conversion is left
 * exactly as it is.
 */
export function fireBookingConversion() {
  if (typeof window === "undefined") return;
  if (bookingFired) return;

  try {
    if (window.sessionStorage.getItem(BOOKING_FIRED_KEY)) {
      bookingFired = true;
      return;
    }
  } catch {
    // Private mode / blocked storage: the in-memory guard still applies.
  }

  bookingFired = true;
  try {
    window.sessionStorage.setItem(BOOKING_FIRED_KEY, "1");
  } catch {
    // Ignore - not being able to remember this must not block the conversion.
  }

  let gtag = window.gtag;

  if (typeof gtag !== "function") {
    // Reuse the dataLayer the base tag already created; never load a second one.
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag = gtag;
  }

  gtag("event", "conversion", {
    send_to: ADS_BOOKING_SEND_TO,
    value: 1.0,
    currency: "USD",
  });
}
