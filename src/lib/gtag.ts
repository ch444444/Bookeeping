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
export function fireContactConversion(source: string) {
  if (typeof window === "undefined") return;

  let gtag = window.gtag;

  if (typeof gtag !== "function") {
    console.warn(
      `[ads-conversion] gtag() unavailable on ${source}; queueing via dataLayer`
    );
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag = gtag;
  }

  console.log(
    `[ads-conversion] firing conversion from ${source}`,
    ADS_CONVERSION_SEND_TO
  );
  gtag("event", "conversion", { send_to: ADS_CONVERSION_SEND_TO });
}
