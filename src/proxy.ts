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

function localizedPath(locale: string) {
  return locale === "en-US" ? "/" : `/${locale}`;
}

export function proxy(request: NextRequest) {
  const requestedLanguage = request.nextUrl.searchParams.get("language");

  if (!requestedLanguage || !selectableLocales.has(requestedLanguage)) {
    return NextResponse.next();
  }

  const targetPath = localizedPath(requestedLanguage);

  if (request.nextUrl.pathname === targetPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  url.searchParams.delete("language");

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
