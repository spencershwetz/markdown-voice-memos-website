"use client";

import { useState } from "react";
import {
  browserLanguageLocaleMap,
  getLocalizedPath,
  languageLabels,
  languageSelectorLocales,
  type Locale,
} from "./siteContent";
import styles from "./page.module.css";

const promptDismissKey = "markdown-voice-memos-language-prompt-dismissed";

function matchBrowserLocale(): Locale | undefined {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  const languageTags = navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const tag of languageTags) {
    const normalized = tag.toLowerCase();
    if (normalized.startsWith("zh-hant") || normalized.includes("-tw")) {
      return "zh-Hant";
    }
    if (normalized.startsWith("zh-hans") || normalized.includes("-cn")) {
      return "zh-Hans";
    }
    if (normalized.startsWith("es-mx")) {
      return "es-MX";
    }
    if (normalized.startsWith("fr-ca")) {
      return "fr-CA";
    }
    if (normalized.startsWith("pt-br")) {
      return "pt-BR";
    }

    const locale = browserLanguageLocaleMap[normalized.split("-")[0]];
    if (locale) {
      return locale;
    }
  }

  return undefined;
}

function goToLocale(locale: Locale) {
  window.location.href = getLocalizedPath(locale);
}

export function LanguageSelector({ currentLocale }: { currentLocale: Locale }) {
  const [promptState, setPromptState] = useState(() => {
    const dismissed =
      typeof sessionStorage === "undefined" ||
      sessionStorage.getItem(promptDismissKey) === "true";

    return {
      suggestedLocale: matchBrowserLocale(),
      isDismissed: dismissed,
    };
  });

  const suggestedLocale = promptState.suggestedLocale;
  const shouldShowPrompt =
    Boolean(suggestedLocale) &&
    suggestedLocale !== currentLocale &&
    !promptState.isDismissed;

  return (
    <div className={styles.languageTools}>
      {shouldShowPrompt && suggestedLocale ? (
        <div className={styles.languagePrompt}>
          <span>View in {languageLabels[suggestedLocale]}?</span>
          <button type="button" onClick={() => goToLocale(suggestedLocale)}>
            Switch
          </button>
          <button
            type="button"
            aria-label="Dismiss language suggestion"
            onClick={() => {
              sessionStorage.setItem(promptDismissKey, "true");
              setPromptState((state) => ({
                ...state,
                isDismissed: true,
              }));
            }}
          >
            x
          </button>
        </div>
      ) : null}
      <div className={styles.languageSelector}>
        <label htmlFor="language-select">Language</label>
        <select
          value={currentLocale}
          id="language-select"
          name="language"
          aria-label="Language"
          onChange={(event) => goToLocale(event.target.value as Locale)}
        >
          {languageSelectorLocales.map((locale) => (
            <option key={locale} value={locale}>
              {languageLabels[locale]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
