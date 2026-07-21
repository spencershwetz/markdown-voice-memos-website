"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes } from "react";
import { appStoreUrl, getBadgeAsset, type Locale } from "./siteContent";

type AppStoreLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  locale: Locale;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

export function AppStoreLink({
  location,
  locale,
  onClick,
  "aria-label": ariaLabel = "Download Markdown Voice Memos on the App Store",
  ...props
}: AppStoreLinkProps) {
  const badge = getBadgeAsset(locale);

  return (
    <a
      {...props}
      onClick={(event) => {
        track("App Store Click", {
          location,
          app_name: "Markdown Voice Memos",
          outbound_url: appStoreUrl,
        });
        window.gtag?.("event", "app_store_click", {
          location,
          app_name: "Markdown Voice Memos",
          outbound_url: appStoreUrl,
        });
        onClick?.(event);
      }}
      aria-label={ariaLabel}
    >
      <Image
        src={badge.src}
        alt={ariaLabel}
        width={badge.width}
        height={badge.height}
        unoptimized
      />
    </a>
  );
}
