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
      absolute: content.title,
    },
    description: content.description,
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
          url: "/product/library.png",
          width: 1284,
          height: 2778,
          alt: content.imageAlts.library,
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
      images: ["/product/library.png"],
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
