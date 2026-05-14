import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "./analytics";
import "./globals.css";
import { getContent, languageAlternates, locales, siteUrl } from "./siteContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const content = getContent("en-US");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.title,
    template: "%s | Markdown Voice Memos",
  },
  description: content.description,
  applicationName: "Markdown Voice Memos",
  keywords: content.keywords,
  alternates: {
    canonical: siteUrl,
    languages: languageAlternates,
  },
  openGraph: {
    title: content.title,
    description: content.ogDescription,
    url: siteUrl,
    siteName: "Markdown Voice Memos",
    images: [
      {
        url: "/product/library.png",
        width: 1284,
        height: 2778,
        alt: content.imageAlts.library,
      },
    ],
    locale: content.ogLocale,
    alternateLocale: locales
      .filter((locale) => locale !== "en-US")
      .map((locale) => getContent(locale).ogLocale),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.ogDescription,
    images: ["/product/library.png"],
  },
  appleWebApp: {
    title: "Markdown Voice Memos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        {children}
        <VercelAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
