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
