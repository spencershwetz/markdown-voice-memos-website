import type { MetadataRoute } from "next";
import { getLocalizedPath, locales, siteUrl } from "./siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
      url: `${siteUrl}${getLocalizedPath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === "en-US" ? 1 : 0.8,
    }));
}
