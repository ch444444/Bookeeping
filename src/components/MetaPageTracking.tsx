"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMetaEvent } from "@/lib/metaPixel";

/**
 * Pages whose visit alone shows buying interest. Everything else (home,
 * about) only counts as a PageView.
 */
const HIGH_INTENT_PAGES: Record<string, string> = {
  "/services": "Services",
  "/contact": "Contact",
};

/** Home page section that counts as a high-intent view once it is seen. */
const PRICING_SECTION_ID = "pricing";

/**
 * Meta page tracking:
 * - PageView on client-side navigations (the base pixel only fires it on
 *   the first load).
 * - ViewContent only for high-intent moments: the Services and Contact
 *   pages, and the pricing section scrolling into view (which also covers
 *   /pricing, since it redirects to /#pricing). The quote form sends its own
 *   ViewContent when it opens.
 */
export default function MetaPageTracking() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!pathname) return;
    if (!firstLoad.current) trackMetaEvent("PageView");
    firstLoad.current = false;

    const pageName = HIGH_INTENT_PAGES[pathname];
    if (pageName) {
      trackMetaEvent("ViewContent", { content_name: pageName });
    }

    // Pricing section: fire once per page view, when at least 30% of it is
    // on screen.
    const section = document.getElementById(PRICING_SECTION_ID);
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackMetaEvent("ViewContent", { content_name: "Pricing" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
