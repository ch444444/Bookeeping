"use client";

import { useEffect } from "react";
import { fireContactClickConversion } from "@/lib/gtag";

const EMAIL = "vasili@northshorebookkeeping.com";
const PHONE_DIGITS = "8473051323";

/**
 * Counts copying the email address or phone number as a lead, the same as
 * clicking the mailto:/tel: link. Many desktop visitors select the address,
 * copy it, and write from their own mail app - which no click ever records.
 */
export function trackContactCopy(text: string) {
  if (text.toLowerCase().includes(EMAIL)) reportCopy("email");
  if (text.replace(/\D/g, "").includes(PHONE_DIGITS)) reportCopy("phone");
}

/** Once per type per browser session - copying the address twice is one lead. */
function reportCopy(kind: "phone" | "email") {
  const key = `nsb_copy_${kind}_sent`;
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // Blocked storage: report anyway rather than lose the lead.
  }
  fireContactClickConversion(kind);
}

export default function CopyContactTracking() {
  useEffect(() => {
    const onCopy = () => {
      const text = document.getSelection()?.toString() ?? "";
      if (text) trackContactCopy(text);
    };
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);

  return null;
}
