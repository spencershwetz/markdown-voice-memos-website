import Image from "next/image";
import { AppStoreLink } from "./AppStoreLink";
import { LanguageSelector } from "./LanguageSelector";
import styles from "./page.module.css";
import {
  appStoreUrl,
  getContent,
  siteUrl,
  type HomeContent,
} from "./siteContent";

export default function Home() {
  return <HomePage content={getContent("en-US")} />;
}

export function HomePage({ content }: { content: HomeContent }) {
  const pageUrl =
    content.locale === "en-US" ? siteUrl : `${siteUrl}/${content.locale}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Markdown Voice Memos",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS, iPadOS, watchOS",
    inLanguage: content.lang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Apple native iOS 26 SpeechTranscriber transcription",
      "On-device Parakeet v3 transcription",
      "36 localized app languages",
      "Markdown export with YAML frontmatter",
      "Apple Watch recording and playback",
    ],
    description: content.description,
    url: pageUrl,
    downloadUrl: appStoreUrl,
    image: `${siteUrl}/product/app-icon.png`,
    screenshot: [
      `${siteUrl}/product/library.png`,
      `${siteUrl}/product/transcript.png`,
      `${siteUrl}/product/markdown-export.png`,
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: content.lang,
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className={styles.page} lang={content.lang} dir={content.dir}>
        <LanguageSelector currentLocale={content.locale} />
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Image
              src="/product/app-icon.png"
              alt={content.imageAlts.appIcon}
              width={82}
              height={82}
              className={styles.appIcon}
              priority
            />
            <p className={styles.kicker}>{content.heroKicker}</p>
            <h1>{content.heroTitle}</h1>
            <p className={styles.lede}>{content.heroLede}</p>
            <div className={styles.actions}>
              <AppStoreLink
                className={styles.appStoreBadge}
                href={appStoreUrl}
                location={`home-hero-${content.locale}`}
                locale={content.locale}
                aria-label={content.downloadCta}
              />
              <a className={styles.secondaryAction} href="#workflow">
                {content.workflowCta}
              </a>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label={content.imageAlts.screenshots}>
            <Image
              src="/product/library.png"
              alt={content.imageAlts.library}
              width={1284}
              height={2778}
              className={`${styles.phoneShot} ${styles.phoneMain}`}
              priority
            />
            <Image
              src="/product/transcript.png"
              alt={content.imageAlts.transcript}
              width={1284}
              height={2778}
              className={`${styles.phoneShot} ${styles.phoneBehind}`}
            />
          </div>
        </section>

        <section id="workflow" className={styles.workflow}>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>{content.workflowKicker}</p>
            <h2>{content.workflowTitle}</h2>
          </div>
          <div className={styles.workflowGrid}>
            {content.features.map((feature) => (
              <div className={styles.feature} key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.showcase}>
          <Image
            src="/product/markdown-export.png"
            alt={content.imageAlts.markdown}
            width={1284}
            height={2778}
            className={styles.showcaseImage}
          />
          <div className={styles.showcaseCopy}>
            <p className={styles.kicker}>{content.notesKicker}</p>
            <h2>{content.notesTitle}</h2>
            <p>{content.notesBody}</p>
          </div>
        </section>

        <section className={styles.showcaseAlt}>
          <div className={styles.showcaseCopy}>
            <p className={styles.kicker}>{content.searchKicker}</p>
            <h2>{content.searchTitle}</h2>
            <p>{content.searchBody}</p>
          </div>
          <Image
            src="/product/map.png"
            alt={content.imageAlts.map}
            width={1284}
            height={2778}
            className={styles.showcaseImage}
          />
        </section>

        <section className={styles.faq}>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>{content.faqKicker}</p>
            <h2>{content.faqTitle}</h2>
          </div>
          <div className={styles.faqList}>
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2>{content.finalCta}</h2>
          <AppStoreLink
            className={styles.appStoreBadge}
            href={appStoreUrl}
            location={`final-cta-${content.locale}`}
            locale={content.locale}
            aria-label={content.downloadCta}
          />
        </section>
      </main>
    </>
  );
}
