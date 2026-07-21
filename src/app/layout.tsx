import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "./analytics";
import "./globals.css";
import {
  getContent,
  languageAlternates,
  locales,
  siteUrl,
  truncateMetadataText,
} from "./siteContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const content = getContent("en-US");

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Markdown Voice Memos — voice memos that become clean Markdown notes",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: truncateMetadataText(content.title, 60),
    template: "%s | Markdown Voice Memos",
  },
  description: truncateMetadataText(content.description, 160),
  applicationName: "Markdown Voice Memos",
  keywords: content.keywords,
  alternates: {
    canonical: siteUrl,
    languages: languageAlternates,
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: content.title,
    description: content.ogDescription,
    url: siteUrl,
    siteName: "Markdown Voice Memos",
    images: [ogImage],
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
    images: ["/og.png"],
  },
  appleWebApp: {
    title: "Markdown Voice Memos",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-itunes-app": "app-id=6754059256",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const lang = headerList.get("x-html-lang") ?? "en";
  const dir = headerList.get("x-html-dir");

  return (
    <html lang={lang} dir={dir ?? undefined} className={geistSans.variable}>
      <body>
        {children}
        <VercelAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
