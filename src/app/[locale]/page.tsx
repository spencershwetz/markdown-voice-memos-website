import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../page";
import {
  getContent,
  getLocalizedPath,
  isLocale,
  languageAlternates,
  locales,
  siteUrl,
  truncateMetadataText,
  type Locale,
} from "../siteContent";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en-US")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en-US") {
    return {};
  }

  const content = getContent(locale);
  const path = getLocalizedPath(locale);

  return {
    title: {
      absolute: truncateMetadataText(content.title, 60),
    },
    description: truncateMetadataText(content.description, 160),
    keywords: content.keywords,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: content.title,
      description: content.ogDescription,
      url: `${siteUrl}${path}`,
      siteName: "Markdown Voice Memos",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Markdown Voice Memos — voice memos that become clean Markdown notes",
        },
      ],
      locale: content.ogLocale,
      alternateLocale: locales
        .filter((candidate) => candidate !== locale)
        .map((candidate) => getContent(candidate as Locale).ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.ogDescription,
      images: ["/og.png"],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en-US") {
    notFound();
  }

  return <HomePage content={getContent(locale)} />;
}
