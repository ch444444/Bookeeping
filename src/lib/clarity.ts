/**
 * Microsoft Clarity - session recordings and heatmaps.
 *
 * Paste the project ID from Clarity (Settings > Overview > Project ID).
 * While it is empty, the Clarity script is not loaded at all.
 */
export const CLARITY_PROJECT_ID = "zhujr4sheg";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Tags the current Clarity session with a named event (e.g. "Phone click"),
 * so recordings of visitors who became leads can be filtered in Clarity.
 */
export function trackClarityEvent(name: string) {
  if (typeof window === "undefined" || !CLARITY_PROJECT_ID) return;
  try {
    window.clarity?.("event", name);
  } catch {
    // Never let tracking break the page.
  }
}
