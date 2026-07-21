import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://markdownvoicememos.com/sitemap.xml",
    host: "https://markdownvoicememos.com",
  };
}
