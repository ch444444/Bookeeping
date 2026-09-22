"use client";

import Script from "next/script";
import { ReactNode } from "react";

export const CALENDLY_URL = "https://calendly.com/vasili-northshorebookkeeping/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface BookACallButtonProps {
  className?: string;
  children: ReactNode;
}

/**
 * "Book a Call" button. Opens Calendly as a popup on this site instead of a
 * new tab, which is what lets us hear Calendly's event_scheduled message and
 * record a booking conversion.
 *
 * If the Calendly widget script has not loaded (blocked, slow, JS off), the
 * link still opens the scheduler in a new tab as before - booking always
 * works, tracking is the part that degrades.
 */
export default function BookACallButton({
  className,
  children,
}: BookACallButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Leave open-in-new-tab clicks to the browser.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (typeof window === "undefined" || !window.Calendly) return;

    e.preventDefault();
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    </>
  );
}
