import { trackMetaEvent } from "@/lib/metaPixel";

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

/**
 * Google Ads conversion labels for clicks on the home page phone number and
 * email link. Create one conversion action per click type in Google Ads
 * (Goals > Conversions > Website, set up manually), mark them Secondary so
 * they are reported but not used for bidding, and paste each label here.
 * While a label is empty, that click is not sent.
 */
export const ADS_PHONE_CLICK_SEND_TO = "AW-17804973985/vcLGCMLhtLsdEKGviapC";
export const ADS_EMAIL_CLICK_SEND_TO = "AW-17804973985/IN6JCLqotrsdEKGviapC";

/** Reports a click on a tel: or mailto: link as a Google Ads conversion. */
export function fireContactClickConversion(kind: "phone" | "email") {
  if (typeof window === "undefined") return;

  const sendTo =
    kind === "phone" ? ADS_PHONE_CLICK_SEND_TO : ADS_EMAIL_CLICK_SEND_TO;
  if (!sendTo) return;

  let gtag = window.gtag;

  if (typeof gtag !== "function") {
    // Reuse the dataLayer the base tag already created; never load a second one.
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag = gtag;
  }

  // Beacon transport so the hit is not lost when the phone or mail app opens.
  gtag("event", "conversion", { send_to: sendTo, transport_type: "beacon" });

  sendMetaClickLead(kind);
}

/**
 * Also reports the click to Meta as a Lead - at most once per click type per
 * browser session, so someone tapping the number three times is one lead.
 */
function sendMetaClickLead(kind: "phone" | "email") {
  const key = `nsb_meta_${kind}_lead_sent`;
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // Blocked storage: send anyway rather than lose the lead.
  }
  trackMetaEvent("Lead", {
    content_name: kind === "phone" ? "Phone click" : "Email click",
  });
}
