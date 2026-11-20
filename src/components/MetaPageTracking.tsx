"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMetaEvent } from "@/lib/metaPixel";

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/pricing": "Pricing",
  "/contact": "Contact",
};

/**
 * Sends a Meta ViewContent event for every page a visitor sees. The base
 * pixel only fires PageView on the first load, so client-side navigations
 * also send their own PageView here.
 */
export default function MetaPageTracking() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!pathname) return;
    if (!firstLoad.current) trackMetaEvent("PageView");
    firstLoad.current = false;

    trackMetaEvent("ViewContent", {
      content_name: PAGE_NAMES[pathname] ?? pathname,
      content_category: "Bookkeeping services",
    });
  }, [pathname]);

  return null;
}
