import { NextResponse, type NextRequest } from "next/server";

const selectableLocales = new Set([
  "ar-SA",
  "ca",
  "cs",
  "da",
  "de-DE",
  "el",
  "en-US",
  "es-ES",
  "es-MX",
  "fi",
  "fr-CA",
  "fr-FR",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "ms",
  "nl-NL",
  "no",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-Hans",
  "zh-Hant",
]);

/** BCP 47 html lang (+ optional dir) for each site locale. */
const htmlLangByLocale: Record<
  string,
  { lang: string; dir?: "rtl" }
> = {
  "ar-SA": { lang: "ar", dir: "rtl" },
  ca: { lang: "ca" },
  cs: { lang: "cs" },
  da: { lang: "da" },
  "de-DE": { lang: "de" },
  el: { lang: "el" },
  "en-AU": { lang: "en" },
  "en-CA": { lang: "en" },
  "en-GB": { lang: "en" },
  "en-US": { lang: "en" },
  "es-ES": { lang: "es" },
  "es-MX": { lang: "es-MX" },
  fi: { lang: "fi" },
  "fr-CA": { lang: "fr-CA" },
  "fr-FR": { lang: "fr" },
  he: { lang: "he", dir: "rtl" },
  hi: { lang: "hi" },
  hr: { lang: "hr" },
  hu: { lang: "hu" },
  id: { lang: "id" },
  it: { lang: "it" },
  ja: { lang: "ja" },
  ko: { lang: "ko" },
  ms: { lang: "ms" },
  "nl-NL": { lang: "nl" },
  no: { lang: "nb" },
  pl: { lang: "pl" },
  "pt-BR": { lang: "pt-BR" },
  "pt-PT": { lang: "pt-PT" },
  ro: { lang: "ro" },
  ru: { lang: "ru" },
  sk: { lang: "sk" },
  sv: { lang: "sv" },
  th: { lang: "th" },
  tr: { lang: "tr" },
  uk: { lang: "uk" },
  vi: { lang: "vi" },
  "zh-Hans": { lang: "zh-Hans" },
  "zh-Hant": { lang: "zh-Hant" },
};

function localizedPath(locale: string) {
  return locale === "en-US" ? "/" : `/${locale}`;
}

function localeFromPathname(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && segment in htmlLangByLocale && segment !== "en-US") {
    return segment;
  }
  return "en-US";
}

function withLocaleHeaders(request: NextRequest) {
  const locale = localeFromPathname(request.nextUrl.pathname);
  const { lang, dir } = htmlLangByLocale[locale] ?? { lang: "en" };
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-html-lang", lang);
  if (dir) {
    requestHeaders.set("x-html-dir", dir);
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export function proxy(request: NextRequest) {
  const requestedLanguage = request.nextUrl.searchParams.get("language");

  if (!requestedLanguage || !selectableLocales.has(requestedLanguage)) {
    return withLocaleHeaders(request);
  }

  const targetPath = localizedPath(requestedLanguage);

  if (request.nextUrl.pathname === targetPath) {
    return withLocaleHeaders(request);
  }

  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  url.searchParams.delete("language");

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
