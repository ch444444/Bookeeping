"use client";

import { AnchorHTMLAttributes } from "react";
import { fireContactClickConversion } from "@/lib/gtag";

interface TrackedContactLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  kind: "phone" | "email";
}

/**
 * A tel: or mailto: link that reports the click as a Google Ads conversion.
 * Lets server components (like the footer) track clicks without becoming
 * client components themselves.
 */
export default function TrackedContactLink({
  kind,
  onClick,
  ...props
}: TrackedContactLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        fireContactClickConversion(kind);
        onClick?.(e);
      }}
    />
  );
}
