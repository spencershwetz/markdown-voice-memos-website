import { appStoreBadgeAssets } from "./storeBadgeAssets";

export const siteUrl = "https://markdownvoicememos.com";

export const appStoreUrl = "https://apps.apple.com/app/id6754059256";

export const contentLocales = [
  "ar",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "es-MX",
  "fi",
  "fr",
  "fr-CA",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "ms",
  "nb",
  "nl",
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
] as const;

export const locales = [
  "ar-SA",
  "ca",
  "cs",
  "da",
  "de-DE",
  "el",
  "en-AU",
  "en-CA",
  "en-GB",
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
] as const;

type ContentLocale = (typeof contentLocales)[number];
export type Locale = (typeof locales)[number];

export const languageLabels: Record<Locale, string> = {
  "ar-SA": "العربية",
  ca: "Catala",
  cs: "Cestina",
  da: "Dansk",
  "de-DE": "Deutsch",
  el: "Ελληνικά",
  "en-AU": "English (Australia)",
  "en-CA": "English (Canada)",
  "en-GB": "English (UK)",
  "en-US": "English",
  "es-ES": "Espanol",
  "es-MX": "Espanol (Mexico)",
  fi: "Suomi",
  "fr-CA": "Francais (Canada)",
  "fr-FR": "Francais",
  he: "עברית",
  hi: "हिन्दी",
  hr: "Hrvatski",
  hu: "Magyar",
  id: "Indonesia",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  ms: "Melayu",
  "nl-NL": "Nederlands",
  no: "Norsk",
  pl: "Polski",
  "pt-BR": "Portugues (Brasil)",
  "pt-PT": "Portugues (Portugal)",
  ro: "Romana",
  ru: "Русский",
  sk: "Slovencina",
  sv: "Svenska",
  th: "ไทย",
  tr: "Turkce",
  uk: "Українська",
  vi: "Tieng Viet",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

export const languageSelectorLocales = [
  "en-US",
  "ar-SA",
  "ca",
  "cs",
  "da",
  "de-DE",
  "el",
  "es-ES",
  "es-MX",
  "fi",
  "fr-FR",
  "fr-CA",
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
] as const satisfies readonly Locale[];

export const browserLanguageLocaleMap: Record<string, Locale> = {
  ar: "ar-SA",
  ca: "ca",
  cs: "cs",
  da: "da",
  de: "de-DE",
  el: "el",
  en: "en-US",
  es: "es-ES",
  fi: "fi",
  fr: "fr-FR",
  he: "he",
  hi: "hi",
  hr: "hr",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  ms: "ms",
  nl: "nl-NL",
  no: "no",
  nb: "no",
  pl: "pl",
  pt: "pt-PT",
  ro: "ro",
  ru: "ru",
  sk: "sk",
  sv: "sv",
  th: "th",
  tr: "tr",
  uk: "uk",
  vi: "vi",
  zh: "zh-Hans",
};

export type HomeContent = {
  locale: Locale;
  lang: string;
  dir?: "ltr" | "rtl";
  ogLocale: string;
  title: string;
  description: string;
  ogDescription: string;
  keywords: string[];
  heroKicker: string;
  heroTitle: string;
  heroLede: string;
  downloadCta: string;
  workflowCta: string;
  workflowKicker: string;
  workflowTitle: string;
  features: Array<{ title: string; body: string }>;
  notesKicker: string;
  notesTitle: string;
  notesBody: string;
  searchKicker: string;
  searchTitle: string;
  searchBody: string;
  faqKicker: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  finalCta: string;
  finalButton: string;
  imageAlts: {
    appIcon: string;
    library: string;
    transcript: string;
    markdown: string;
    map: string;
    screenshots: string;
  };
};

const commonKeywords = [
  "Markdown Voice Memos",
  "voice recorder markdown",
  "voice memos transcription",
  "on-device transcription app",
  "iOS 26 transcription",
  "Parakeet v3 transcription",
  "multilingual transcription app",
  "Obsidian voice notes",
  "audio to markdown",
  "Apple Watch voice recorder",
  "iOS voice recorder",
  "iPad voice recorder app",
  "iPhone voice recorder app",
  "spatial audio voice recorder",
];

export const supportedLanguageNames = [
  "Arabic",
  "Catalan",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Finnish",
  "French",
  "French (Canada)",
  "German",
  "Greek",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Malay",
  "Norwegian Bokmal",
  "Polish",
  "Portuguese (Brazil)",
  "Portuguese (Portugal)",
  "Romanian",
  "Russian",
  "Slovak",
  "Spanish",
  "Spanish (Mexico)",
  "Swedish",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Vietnamese",
];

const fallbackImageAlts = {
  appIcon: "Markdown Voice Memos app icon",
  library: "Markdown Voice Memos recording library",
  transcript: "On-device transcript view in Markdown Voice Memos",
  markdown: "Markdown export settings for voice memos",
  map: "Map view showing recorded voice memos by location",
  screenshots: "App screenshots",
};

const en: HomeContent = {
  locale: "en-US",
  lang: "en",
  ogLocale: "en_US",
  title:
    "Markdown Voice Memos | iOS Voice Recorder with On-Device Transcription",
  description:
    "Markdown Voice Memos is an iOS voice recorder for iPhone, iPad, and Apple Watch that transcribes speech on device and exports clean Markdown notes for Obsidian, Logseq, Notion, and iCloud Drive workflows.",
  ogDescription:
    "Turn iPhone, iPad, and Apple Watch recordings into private, searchable Markdown notes.",
  keywords: commonKeywords,
  heroKicker: "iOS voice recorder for Markdown notes",
  heroTitle: "Markdown Voice Memos",
  heroLede:
    "Record audio on iPhone, iPad, or Apple Watch, transcribe it on device, and turn every memo into a clean Markdown note for your knowledge base.",
  downloadCta: "Download on the App Store",
  workflowCta: "See workflow",
  workflowKicker: "From recording to notes",
  workflowTitle: "Capture the thought. Keep the transcript. Export the note.",
  features: [
    {
      title: "On-device transcription",
      body: "Record speech on iPhone or iPad and get searchable transcripts without sending audio to a server.",
    },
    {
      title: "Markdown export",
      body: "Generate clean Markdown notes with YAML frontmatter for Obsidian, Logseq, Notion, or any notes workflow.",
    },
    {
      title: "Record from anywhere",
      body: "Start from iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, the Action Button, or Live Activity controls.",
    },
    {
      title: "Spatial and lossless audio",
      body: "Choose compact recordings, Apple Lossless, stereo, or Spatial Audio on supported iPhones.",
    },
  ],
  notesKicker: "Built for note systems",
  notesTitle: "Markdown files that behave like real notes.",
  notesBody:
    "Customize frontmatter, include transcript text, link audio, and save recordings in the app or a folder such as iCloud Drive.",
  searchKicker: "Find what you said",
  searchTitle: "Search recordings by transcript, title, or place.",
  searchBody:
    "Browse a library of recordings, open exact transcript moments, or use the map view when location context matters.",
  faqKicker: "Questions",
  faqTitle: "Private, searchable voice notes for iOS and Apple Watch.",
  faqs: [
    {
      question: "Does Markdown Voice Memos work with Obsidian?",
      answer:
        "Yes. It exports Markdown files with customizable YAML frontmatter, so recordings can fit into Obsidian, Logseq, Notion, or a plain folder workflow.",
    },
    {
      question: "Is transcription private?",
      answer:
        "Transcription and smart title features run on device. Your recordings and transcripts stay on your iPhone or iPad unless you choose to export or share them.",
    },
    {
      question: "Is Markdown Voice Memos an iOS app?",
      answer:
        "Yes. Markdown Voice Memos is built for iPhone and iPad, with Apple Watch recording and playback support.",
    },
    {
      question: "Can I record from Apple Watch?",
      answer:
        "Yes. You can record and play back from Apple Watch, and recordings sync with the iPhone app.",
    },
  ],
  finalCta: "Turn voice memos into Markdown notes.",
  finalButton: "Get Markdown Voice Memos",
  imageAlts: fallbackImageAlts,
};

const localized: Record<Exclude<ContentLocale, "en">, Omit<HomeContent, "locale">> = {
  ar: {
    lang: "ar",
    dir: "rtl",
    ogLocale: "ar",
    title: "Markdown Voice Memos | مسجل صوت iOS مع نسخ على الجهاز",
    description:
      "Markdown Voice Memos هو مسجل صوت لأجهزة iPhone وiPad وApple Watch ينسخ الكلام على الجهاز ويصدر ملاحظات Markdown نظيفة لسير عمل Obsidian وLogseq وNotion وiCloud Drive.",
    ogDescription:
      "حوّل تسجيلات iPhone وiPad وApple Watch إلى ملاحظات Markdown خاصة وقابلة للبحث.",
    keywords: commonKeywords,
    heroKicker: "مسجل صوت iOS لملاحظات Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "سجّل الصوت على iPhone أو iPad أو Apple Watch، وانسخه على الجهاز، وحوّل كل مذكرة إلى ملاحظة Markdown نظيفة لقاعدة معرفتك.",
    downloadCta: "تنزيل من App Store",
    workflowCta: "عرض سير العمل",
    workflowKicker: "من التسجيل إلى الملاحظات",
    workflowTitle: "التقط الفكرة. احتفظ بالنص. صدّر الملاحظة.",
    features: [
      {
        title: "نسخ على الجهاز",
        body: "سجّل الكلام على iPhone أو iPad واحصل على نصوص قابلة للبحث من دون إرسال الصوت إلى خادم.",
      },
      {
        title: "تصدير Markdown",
        body: "أنشئ ملاحظات Markdown نظيفة مع واجهة YAML أمامية لـ Obsidian أو Logseq أو Notion أو أي سير عمل للملاحظات.",
      },
      {
        title: "سجّل من أي مكان",
        body: "ابدأ من iPhone أو iPad أو Apple Watch أو Siri أو الاختصارات أو مركز التحكم أو زر الإجراء أو عناصر Live Activity.",
      },
      {
        title: "صوت مكاني وبدون فقد",
        body: "اختر تسجيلات مدمجة أو Apple Lossless أو ستيريو أو Spatial Audio على أجهزة iPhone المدعومة.",
      },
    ],
    notesKicker: "مصمم لأنظمة الملاحظات",
    notesTitle: "ملفات Markdown تتصرف مثل ملاحظات حقيقية.",
    notesBody:
      "خصص الواجهة الأمامية، وأدرج نص النسخ، واربط الصوت، واحفظ التسجيلات في التطبيق أو في مجلد مثل iCloud Drive.",
    searchKicker: "اعثر على ما قلته",
    searchTitle: "ابحث في التسجيلات حسب النص أو العنوان أو المكان.",
    searchBody:
      "تصفح مكتبة التسجيلات، وافتح لحظات محددة في النص، أو استخدم عرض الخريطة عندما تكون معلومات الموقع مهمة.",
    faqKicker: "أسئلة",
    faqTitle: "ملاحظات صوتية خاصة وقابلة للبحث لـ iOS وApple Watch.",
    faqs: [
      {
        question: "هل يعمل Markdown Voice Memos مع Obsidian؟",
        answer:
          "نعم. يصدر ملفات Markdown مع واجهة YAML قابلة للتخصيص، حتى تناسب التسجيلات Obsidian أو Logseq أو Notion أو سير عمل مجلد عادي.",
      },
      {
        question: "هل النسخ خاص؟",
        answer:
          "تعمل ميزات النسخ والعناوين الذكية على الجهاز. تبقى تسجيلاتك ونصوصك على iPhone أو iPad إلا إذا اخترت تصديرها أو مشاركتها.",
      },
      {
        question: "هل Markdown Voice Memos تطبيق iOS؟",
        answer:
          "نعم. صمم Markdown Voice Memos لأجهزة iPhone وiPad، مع دعم التسجيل والتشغيل على Apple Watch.",
      },
      {
        question: "هل يمكنني التسجيل من Apple Watch؟",
        answer:
          "نعم. يمكنك التسجيل والتشغيل من Apple Watch، وتتم مزامنة التسجيلات مع تطبيق iPhone.",
      },
    ],
    finalCta: "حوّل المذكرات الصوتية إلى ملاحظات Markdown.",
    finalButton: "احصل على Markdown Voice Memos",
    imageAlts: {
      appIcon: "أيقونة تطبيق Markdown Voice Memos",
      library: "مكتبة تسجيلات Markdown Voice Memos",
      transcript: "عرض النص على الجهاز في Markdown Voice Memos",
      markdown: "إعدادات تصدير Markdown للمذكرات الصوتية",
      map: "عرض خريطة يوضح المذكرات الصوتية المسجلة حسب الموقع",
      screenshots: "لقطات شاشة التطبيق",
    },
  },
  ca: {
    lang: "ca",
    ogLocale: "ca",
    title: "Markdown Voice Memos | Gravadora de veu per a iOS amb transcripcio local",
    description:
      "Markdown Voice Memos es una gravadora de veu per a iPhone, iPad i Apple Watch que transcriu al dispositiu i exporta notes Markdown netes per a Obsidian, Logseq, Notion i iCloud Drive.",
    ogDescription:
      "Converteix gravacions d'iPhone, iPad i Apple Watch en notes Markdown privades i cercables.",
    keywords: commonKeywords,
    heroKicker: "Gravadora de veu iOS per a notes Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Grava audio a l'iPhone, l'iPad o l'Apple Watch, transcriu-lo al dispositiu i converteix cada nota de veu en una nota Markdown neta per a la teva base de coneixement.",
    downloadCta: "Descarrega a l'App Store",
    workflowCta: "Veure el flux",
    workflowKicker: "De la gravacio a les notes",
    workflowTitle: "Captura la idea. Conserva la transcripcio. Exporta la nota.",
    features: [
      {
        title: "Transcripcio al dispositiu",
        body: "Grava veu a l'iPhone o l'iPad i obtens transcripcions cercables sense enviar l'audio a cap servidor.",
      },
      {
        title: "Exportacio Markdown",
        body: "Genera notes Markdown netes amb capcalera YAML per a Obsidian, Logseq, Notion o qualsevol flux de notes.",
      },
      {
        title: "Grava des de qualsevol lloc",
        body: "Comenca des de l'iPhone, l'iPad, l'Apple Watch, Siri, Dreceres, el Centre de control, el boto d'accio o els controls de Live Activity.",
      },
      {
        title: "Audio espacial i sense perdua",
        body: "Tria gravacions compactes, Apple Lossless, estereo o Spatial Audio en iPhones compatibles.",
      },
    ],
    notesKicker: "Fet per a sistemes de notes",
    notesTitle: "Fitxers Markdown que es comporten com notes reals.",
    notesBody:
      "Personalitza la capcalera, inclou la transcripcio, enllaca l'audio i desa les gravacions a l'app o en una carpeta com iCloud Drive.",
    searchKicker: "Troba el que has dit",
    searchTitle: "Cerca gravacions per transcripcio, titol o lloc.",
    searchBody:
      "Explora una biblioteca de gravacions, obre moments exactes de la transcripcio o usa el mapa quan el context de ubicacio importa.",
    faqKicker: "Preguntes",
    faqTitle: "Notes de veu privades i cercables per a iOS i Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funciona amb Obsidian?",
        answer:
          "Si. Exporta fitxers Markdown amb capcalera YAML personalitzable, aixi les gravacions encaixen amb Obsidian, Logseq, Notion o una carpeta normal.",
      },
      {
        question: "La transcripcio es privada?",
        answer:
          "La transcripcio i els titols intel.ligents funcionen al dispositiu. Les gravacions i transcripcions es queden a l'iPhone o l'iPad tret que decideixis exportar-les o compartir-les.",
      },
      {
        question: "Markdown Voice Memos es una app iOS?",
        answer:
          "Si. Markdown Voice Memos esta feta per a iPhone i iPad, amb suport de gravacio i reproduccio a l'Apple Watch.",
      },
      {
        question: "Puc gravar des de l'Apple Watch?",
        answer:
          "Si. Pots gravar i reproduir des de l'Apple Watch, i les gravacions se sincronitzen amb l'app de l'iPhone.",
      },
    ],
    finalCta: "Converteix notes de veu en notes Markdown.",
    finalButton: "Obtens Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  cs: {
    lang: "cs",
    ogLocale: "cs_CZ",
    title: "Markdown Voice Memos | iOS diktafon s prepisem primo v zarizeni",
    description:
      "Markdown Voice Memos je iOS diktafon pro iPhone, iPad a Apple Watch, ktery prepisuje rec primo v zarizeni a exportuje ciste poznamky Markdown pro Obsidian, Logseq, Notion a iCloud Drive.",
    ogDescription:
      "Premente nahravky z iPhonu, iPadu a Apple Watch na soukrome, prohledavatelne poznamky Markdown.",
    keywords: commonKeywords,
    heroKicker: "iOS diktafon pro poznamky Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Nahravejte zvuk na iPhonu, iPadu nebo Apple Watch, prepisujte ho primo v zarizeni a z kazde nahravky vytvorte cistou poznamku Markdown.",
    downloadCta: "Stahnout z App Storu",
    workflowCta: "Zobrazit postup",
    workflowKicker: "Od nahravky k poznamkam",
    workflowTitle: "Zachytte myslenku. Ulozte prepis. Exportujte poznamku.",
    features: [
      {
        title: "Prepis v zarizeni",
        body: "Nahravejte rec na iPhonu nebo iPadu a ziskejte prohledavatelne prepisy bez odesilani zvuku na server.",
      },
      {
        title: "Export Markdown",
        body: "Vytvarejte ciste poznamky Markdown s YAML frontmatterem pro Obsidian, Logseq, Notion nebo libovolny poznamkovy system.",
      },
      {
        title: "Nahravani odkudkoli",
        body: "Spustte nahravani z iPhonu, iPadu, Apple Watch, Siri, Zkratek, Ovladaciho centra, Akcniho tlacitka nebo Live Activity.",
      },
      {
        title: "Prostorovy a bezeztratovy zvuk",
        body: "Vyberte kompaktni nahravky, Apple Lossless, stereo nebo Spatial Audio na podporovanych iPhonech.",
      },
    ],
    notesKicker: "Postaveno pro poznamkove systemy",
    notesTitle: "Soubory Markdown, ktere se chovaji jako skutecne poznamky.",
    notesBody:
      "Prizpusobte frontmatter, pridejte text prepisu, odkazte zvuk a ukladejte nahravky v aplikaci nebo ve slozce jako iCloud Drive.",
    searchKicker: "Najdete, co jste rekli",
    searchTitle: "Hledejte nahravky podle prepisu, nazvu nebo mista.",
    searchBody:
      "Prochazejte knihovnu nahravek, otevrete presne okamziky v prepisu nebo pouzijte mapu, kdyz zalezi na poloze.",
    faqKicker: "Otazky",
    faqTitle: "Soukrome, prohledavatelne hlasove poznamky pro iOS a Apple Watch.",
    faqs: [
      {
        question: "Funguje Markdown Voice Memos s Obsidianem?",
        answer:
          "Ano. Exportuje soubory Markdown s prizpusobitelnym YAML frontmatterem, takze nahravky zapadnou do Obsidianu, Logseku, Notionu nebo bezne slozky.",
      },
      {
        question: "Je prepis soukromy?",
        answer:
          "Prepis i chytre nazvy bezi v zarizeni. Nahravky a prepisy zustavaji na iPhonu nebo iPadu, pokud je sami neexportujete nebo nesdilite.",
      },
      {
        question: "Je Markdown Voice Memos aplikace pro iOS?",
        answer:
          "Ano. Markdown Voice Memos je pro iPhone a iPad a podporuje nahravani i prehravani na Apple Watch.",
      },
      {
        question: "Mohu nahravat z Apple Watch?",
        answer:
          "Ano. Z Apple Watch muzete nahravat i prehravat a nahravky se synchronizuji s aplikaci pro iPhone.",
      },
    ],
    finalCta: "Premente hlasove poznamky na poznamky Markdown.",
    finalButton: "Ziskat Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  da: {
    lang: "da",
    ogLocale: "da_DK",
    title: "Markdown Voice Memos | iOS-stemmeoptager med transskription pa enheden",
    description:
      "Markdown Voice Memos er en iOS-stemmeoptager til iPhone, iPad og Apple Watch, der transskriberer tale pa enheden og eksporterer rene Markdown-noter til Obsidian, Logseq, Notion og iCloud Drive.",
    ogDescription:
      "Gor optagelser fra iPhone, iPad og Apple Watch til private, sogbare Markdown-noter.",
    keywords: commonKeywords,
    heroKicker: "iOS-stemmeoptager til Markdown-noter",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Optag lyd pa iPhone, iPad eller Apple Watch, transskriber den pa enheden, og gor hvert memo til en ren Markdown-note.",
    downloadCta: "Hent i App Store",
    workflowCta: "Se arbejdsgang",
    workflowKicker: "Fra optagelse til noter",
    workflowTitle: "Fang tanken. Behold transskriptionen. Eksporter noten.",
    features: [
      {
        title: "Transskription pa enheden",
        body: "Optag tale pa iPhone eller iPad og fa sogbare transskriptioner uden at sende lyd til en server.",
      },
      {
        title: "Markdown-eksport",
        body: "Lav rene Markdown-noter med YAML-frontmatter til Obsidian, Logseq, Notion eller enhver notestruktur.",
      },
      {
        title: "Optag hvor som helst",
        body: "Start fra iPhone, iPad, Apple Watch, Siri, Genveje, Kontrolcenter, handlingsknappen eller Live Activity-kontroller.",
      },
      {
        title: "Spatial og tabsfri lyd",
        body: "Vaelg kompakte optagelser, Apple Lossless, stereo eller Spatial Audio pa understottede iPhones.",
      },
    ],
    notesKicker: "Bygget til notesystemer",
    notesTitle: "Markdown-filer, der opforer sig som rigtige noter.",
    notesBody:
      "Tilpas frontmatter, medtag transskription, link lyd, og gem optagelser i appen eller i en mappe som iCloud Drive.",
    searchKicker: "Find det, du sagde",
    searchTitle: "Sog i optagelser efter transskription, titel eller sted.",
    searchBody:
      "Gennemse optagelser, abn praecise transskriptionsojeblikke, eller brug kortvisning, nar placering betyder noget.",
    faqKicker: "Sporgsmal",
    faqTitle: "Private, sogbare stemmenoter til iOS og Apple Watch.",
    faqs: [
      {
        question: "Virker Markdown Voice Memos med Obsidian?",
        answer:
          "Ja. Appen eksporterer Markdown-filer med tilpasselig YAML-frontmatter, sa optagelser passer til Obsidian, Logseq, Notion eller en almindelig mappe.",
      },
      {
        question: "Er transskription privat?",
        answer:
          "Transskription og smarte titler korer pa enheden. Dine optagelser og transskriptioner bliver pa din iPhone eller iPad, medmindre du eksporterer eller deler dem.",
      },
      {
        question: "Er Markdown Voice Memos en iOS-app?",
        answer:
          "Ja. Markdown Voice Memos er bygget til iPhone og iPad med optagelse og afspilning pa Apple Watch.",
      },
      {
        question: "Kan jeg optage fra Apple Watch?",
        answer:
          "Ja. Du kan optage og afspille fra Apple Watch, og optagelser synkroniseres med iPhone-appen.",
      },
    ],
    finalCta: "Gor stemmememoer til Markdown-noter.",
    finalButton: "Hent Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  de: {
    lang: "de",
    ogLocale: "de_DE",
    title: "Markdown Voice Memos | iOS-Sprachrekorder mit lokaler Transkription",
    description:
      "Markdown Voice Memos ist ein iOS-Sprachrekorder fur iPhone, iPad und Apple Watch, der Sprache auf dem Gerat transkribiert und saubere Markdown-Notizen fur Obsidian, Logseq, Notion und iCloud Drive exportiert.",
    ogDescription:
      "Verwandle Aufnahmen von iPhone, iPad und Apple Watch in private, durchsuchbare Markdown-Notizen.",
    keywords: commonKeywords,
    heroKicker: "iOS-Sprachrekorder fur Markdown-Notizen",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Nimm Audio auf iPhone, iPad oder Apple Watch auf, transkribiere es lokal und verwandle jedes Memo in eine saubere Markdown-Notiz.",
    downloadCta: "Im App Store laden",
    workflowCta: "Workflow ansehen",
    workflowKicker: "Von Aufnahme zu Notiz",
    workflowTitle: "Gedanken festhalten. Transkript behalten. Notiz exportieren.",
    features: [
      {
        title: "Transkription auf dem Gerat",
        body: "Nimm Sprache auf iPhone oder iPad auf und erhalte durchsuchbare Transkripte, ohne Audio an einen Server zu senden.",
      },
      {
        title: "Markdown-Export",
        body: "Erzeuge saubere Markdown-Notizen mit YAML-Frontmatter fur Obsidian, Logseq, Notion oder jeden Notiz-Workflow.",
      },
      {
        title: "Uberall aufnehmen",
        body: "Starte auf iPhone, iPad, Apple Watch, Siri, Kurzbefehlen, Kontrollzentrum, Aktionstaste oder Live-Activity-Steuerung.",
      },
      {
        title: "Spatial Audio und verlustfrei",
        body: "Wahle kompakte Aufnahmen, Apple Lossless, Stereo oder Spatial Audio auf unterstutzten iPhones.",
      },
    ],
    notesKicker: "Fur Notizsysteme gebaut",
    notesTitle: "Markdown-Dateien, die sich wie echte Notizen verhalten.",
    notesBody:
      "Passe Frontmatter an, fug Transkripttext ein, verlinke Audio und speichere Aufnahmen in der App oder in einem Ordner wie iCloud Drive.",
    searchKicker: "Finde, was du gesagt hast",
    searchTitle: "Suche Aufnahmen nach Transkript, Titel oder Ort.",
    searchBody:
      "Durchsuche deine Bibliothek, offne genaue Transkriptmomente oder nutze die Kartenansicht, wenn der Ort wichtig ist.",
    faqKicker: "Fragen",
    faqTitle: "Private, durchsuchbare Sprachnotizen fur iOS und Apple Watch.",
    faqs: [
      {
        question: "Funktioniert Markdown Voice Memos mit Obsidian?",
        answer:
          "Ja. Es exportiert Markdown-Dateien mit anpassbarem YAML-Frontmatter, damit Aufnahmen in Obsidian, Logseq, Notion oder einen normalen Ordner passen.",
      },
      {
        question: "Ist die Transkription privat?",
        answer:
          "Transkription und smarte Titel laufen auf dem Gerat. Deine Aufnahmen und Transkripte bleiben auf iPhone oder iPad, bis du sie exportierst oder teilst.",
      },
      {
        question: "Ist Markdown Voice Memos eine iOS-App?",
        answer:
          "Ja. Markdown Voice Memos ist fur iPhone und iPad gebaut und unterstutzt Aufnahme und Wiedergabe auf der Apple Watch.",
      },
      {
        question: "Kann ich mit der Apple Watch aufnehmen?",
        answer:
          "Ja. Du kannst von der Apple Watch aufnehmen und wiedergeben; die Aufnahmen synchronisieren mit der iPhone-App.",
      },
    ],
    finalCta: "Verwandle Sprachmemos in Markdown-Notizen.",
    finalButton: "Markdown Voice Memos laden",
    imageAlts: en.imageAlts,
  },
  el: {
    lang: "el",
    ogLocale: "el_GR",
    title: "Markdown Voice Memos | Εγγραφή φωνής iOS με μεταγραφή στη συσκευή",
    description:
      "Το Markdown Voice Memos είναι εφαρμογή εγγραφής φωνής για iPhone, iPad και Apple Watch που μεταγράφει ομιλία στη συσκευή και εξάγει καθαρές σημειώσεις Markdown για Obsidian, Logseq, Notion και iCloud Drive.",
    ogDescription:
      "Μετατρέψτε εγγραφές από iPhone, iPad και Apple Watch σε ιδιωτικές, αναζητήσιμες σημειώσεις Markdown.",
    keywords: commonKeywords,
    heroKicker: "Εγγραφή φωνής iOS για σημειώσεις Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Ηχογραφήστε σε iPhone, iPad ή Apple Watch, μεταγράψτε στη συσκευή και μετατρέψτε κάθε memo σε καθαρή σημείωση Markdown.",
    downloadCta: "Λήψη από το App Store",
    workflowCta: "Δείτε τη ροή",
    workflowKicker: "Από εγγραφή σε σημειώσεις",
    workflowTitle: "Κρατήστε την ιδέα. Κρατήστε τη μεταγραφή. Εξάγετε τη σημείωση.",
    features: [
      {
        title: "Μεταγραφή στη συσκευή",
        body: "Ηχογραφήστε ομιλία σε iPhone ή iPad και αποκτήστε αναζητήσιμες μεταγραφές χωρίς αποστολή ήχου σε server.",
      },
      {
        title: "Εξαγωγή Markdown",
        body: "Δημιουργήστε καθαρές σημειώσεις Markdown με YAML frontmatter για Obsidian, Logseq, Notion ή οποιαδήποτε ροή σημειώσεων.",
      },
      {
        title: "Εγγραφή από παντού",
        body: "Ξεκινήστε από iPhone, iPad, Apple Watch, Siri, Συντομεύσεις, Κέντρο ελέγχου, Action Button ή Live Activity.",
      },
      {
        title: "Χωρικός και lossless ήχος",
        body: "Επιλέξτε συμπαγείς εγγραφές, Apple Lossless, stereo ή Spatial Audio σε υποστηριζόμενα iPhone.",
      },
    ],
    notesKicker: "Φτιαγμένο για συστήματα σημειώσεων",
    notesTitle: "Αρχεία Markdown που λειτουργούν σαν πραγματικές σημειώσεις.",
    notesBody:
      "Προσαρμόστε frontmatter, συμπεριλάβετε μεταγραφή, συνδέστε ήχο και αποθηκεύστε εγγραφές στην εφαρμογή ή σε φάκελο όπως το iCloud Drive.",
    searchKicker: "Βρείτε τι είπατε",
    searchTitle: "Αναζήτηση εγγραφών με μεταγραφή, τίτλο ή τοποθεσία.",
    searchBody:
      "Περιηγηθείτε στη βιβλιοθήκη εγγραφών, ανοίξτε ακριβείς στιγμές της μεταγραφής ή χρησιμοποιήστε τον χάρτη όταν η τοποθεσία έχει σημασία.",
    faqKicker: "Ερωτήσεις",
    faqTitle: "Ιδιωτικές, αναζητήσιμες φωνητικές σημειώσεις για iOS και Apple Watch.",
    faqs: [
      {
        question: "Λειτουργεί το Markdown Voice Memos με το Obsidian;",
        answer:
          "Ναι. Εξάγει αρχεία Markdown με προσαρμόσιμο YAML frontmatter, ώστε οι εγγραφές να ταιριάζουν σε Obsidian, Logseq, Notion ή απλό φάκελο.",
      },
      {
        question: "Είναι ιδιωτική η μεταγραφή;",
        answer:
          "Η μεταγραφή και οι έξυπνοι τίτλοι εκτελούνται στη συσκευή. Οι εγγραφές και οι μεταγραφές μένουν στο iPhone ή iPad εκτός αν τις εξαγάγετε ή τις μοιραστείτε.",
      },
      {
        question: "Είναι το Markdown Voice Memos εφαρμογή iOS;",
        answer:
          "Ναι. Είναι φτιαγμένο για iPhone και iPad, με υποστήριξη εγγραφής και αναπαραγωγής στο Apple Watch.",
      },
      {
        question: "Μπορώ να ηχογραφήσω από Apple Watch;",
        answer:
          "Ναι. Μπορείτε να ηχογραφήσετε και να αναπαράγετε από Apple Watch και οι εγγραφές συγχρονίζονται με την εφαρμογή iPhone.",
      },
    ],
    finalCta: "Μετατρέψτε φωνητικά memo σε σημειώσεις Markdown.",
    finalButton: "Αποκτήστε το Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  es: {
    lang: "es",
    ogLocale: "es_ES",
    title: "Markdown Voice Memos | Grabadora de voz iOS con transcripcion local",
    description:
      "Markdown Voice Memos es una grabadora de voz para iPhone, iPad y Apple Watch que transcribe en el dispositivo y exporta notas Markdown limpias para Obsidian, Logseq, Notion e iCloud Drive.",
    ogDescription:
      "Convierte grabaciones de iPhone, iPad y Apple Watch en notas Markdown privadas y buscables.",
    keywords: commonKeywords,
    heroKicker: "Grabadora de voz iOS para notas Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Graba audio en iPhone, iPad o Apple Watch, transcribelo en el dispositivo y convierte cada memo en una nota Markdown limpia.",
    downloadCta: "Descargar en App Store",
    workflowCta: "Ver flujo",
    workflowKicker: "De grabacion a notas",
    workflowTitle: "Captura la idea. Conserva la transcripcion. Exporta la nota.",
    features: [
      {
        title: "Transcripcion en el dispositivo",
        body: "Graba voz en iPhone o iPad y consigue transcripciones buscables sin enviar audio a un servidor.",
      },
      {
        title: "Exportacion Markdown",
        body: "Genera notas Markdown limpias con YAML frontmatter para Obsidian, Logseq, Notion o cualquier flujo de notas.",
      },
      {
        title: "Graba desde cualquier lugar",
        body: "Inicia desde iPhone, iPad, Apple Watch, Siri, Atajos, Centro de control, Boton de accion o controles de Live Activity.",
      },
      {
        title: "Audio espacial y sin perdida",
        body: "Elige grabaciones compactas, Apple Lossless, estereo o Spatial Audio en iPhones compatibles.",
      },
    ],
    notesKicker: "Hecho para sistemas de notas",
    notesTitle: "Archivos Markdown que se comportan como notas reales.",
    notesBody:
      "Personaliza frontmatter, incluye texto de transcripcion, enlaza audio y guarda grabaciones en la app o en una carpeta como iCloud Drive.",
    searchKicker: "Encuentra lo que dijiste",
    searchTitle: "Busca grabaciones por transcripcion, titulo o lugar.",
    searchBody:
      "Explora una biblioteca de grabaciones, abre momentos exactos de la transcripcion o usa el mapa cuando importe el contexto de ubicacion.",
    faqKicker: "Preguntas",
    faqTitle: "Notas de voz privadas y buscables para iOS y Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funciona con Obsidian?",
        answer:
          "Si. Exporta archivos Markdown con YAML frontmatter personalizable para que las grabaciones encajen en Obsidian, Logseq, Notion o una carpeta normal.",
      },
      {
        question: "La transcripcion es privada?",
        answer:
          "La transcripcion y los titulos inteligentes se ejecutan en el dispositivo. Tus grabaciones y transcripciones se quedan en tu iPhone o iPad salvo que decidas exportarlas o compartirlas.",
      },
      {
        question: "Markdown Voice Memos es una app iOS?",
        answer:
          "Si. Markdown Voice Memos esta creada para iPhone y iPad, con grabacion y reproduccion en Apple Watch.",
      },
      {
        question: "Puedo grabar desde Apple Watch?",
        answer:
          "Si. Puedes grabar y reproducir desde Apple Watch, y las grabaciones se sincronizan con la app de iPhone.",
      },
    ],
    finalCta: "Convierte memos de voz en notas Markdown.",
    finalButton: "Obtener Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "es-MX": {
    lang: "es-MX",
    ogLocale: "es_MX",
    title: "Markdown Voice Memos | Grabadora de voz iOS con transcripcion local",
    description:
      "Markdown Voice Memos es una grabadora de voz para iPhone, iPad y Apple Watch que transcribe en el dispositivo y exporta notas Markdown limpias para Obsidian, Logseq, Notion e iCloud Drive.",
    ogDescription:
      "Convierte grabaciones de iPhone, iPad y Apple Watch en notas Markdown privadas y faciles de buscar.",
    keywords: commonKeywords,
    heroKicker: "Grabadora de voz iOS para notas Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Graba audio en iPhone, iPad o Apple Watch, transcribelo en el dispositivo y convierte cada memo en una nota Markdown limpia para tu base de conocimiento.",
    downloadCta: "Descargar en App Store",
    workflowCta: "Ver flujo",
    workflowKicker: "De la grabacion a las notas",
    workflowTitle: "Captura la idea. Conserva la transcripcion. Exporta la nota.",
    features: [
      {
        title: "Transcripcion en el dispositivo",
        body: "Graba voz en iPhone o iPad y consigue transcripciones buscables sin enviar audio a un servidor.",
      },
      {
        title: "Exportacion Markdown",
        body: "Genera notas Markdown limpias con YAML frontmatter para Obsidian, Logseq, Notion o cualquier flujo de notas.",
      },
      {
        title: "Graba desde cualquier lugar",
        body: "Inicia desde iPhone, iPad, Apple Watch, Siri, Atajos, Centro de control, Boton de accion o controles de Live Activity.",
      },
      {
        title: "Audio espacial y sin perdida",
        body: "Elige grabaciones compactas, Apple Lossless, estereo o Spatial Audio en iPhones compatibles.",
      },
    ],
    notesKicker: "Hecho para sistemas de notas",
    notesTitle: "Archivos Markdown que se comportan como notas reales.",
    notesBody:
      "Personaliza frontmatter, incluye texto de transcripcion, enlaza audio y guarda grabaciones en la app o en una carpeta como iCloud Drive.",
    searchKicker: "Encuentra lo que dijiste",
    searchTitle: "Busca grabaciones por transcripcion, titulo o lugar.",
    searchBody:
      "Explora una biblioteca de grabaciones, abre momentos exactos de la transcripcion o usa el mapa cuando importe el contexto de ubicacion.",
    faqKicker: "Preguntas",
    faqTitle: "Notas de voz privadas y buscables para iOS y Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funciona con Obsidian?",
        answer:
          "Si. Exporta archivos Markdown con YAML frontmatter personalizable para que las grabaciones encajen en Obsidian, Logseq, Notion o una carpeta normal.",
      },
      {
        question: "La transcripcion es privada?",
        answer:
          "La transcripcion y los titulos inteligentes se ejecutan en el dispositivo. Tus grabaciones y transcripciones se quedan en tu iPhone o iPad salvo que decidas exportarlas o compartirlas.",
      },
      {
        question: "Markdown Voice Memos es una app iOS?",
        answer:
          "Si. Markdown Voice Memos esta creada para iPhone y iPad, con grabacion y reproduccion en Apple Watch.",
      },
      {
        question: "Puedo grabar desde Apple Watch?",
        answer:
          "Si. Puedes grabar y reproducir desde Apple Watch, y las grabaciones se sincronizan con la app de iPhone.",
      },
    ],
    finalCta: "Convierte memos de voz en notas Markdown.",
    finalButton: "Obtener Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  fi: {
    lang: "fi",
    ogLocale: "fi_FI",
    title: "Markdown Voice Memos | iOS-aaninauhuri laitteen sisaisella litteroinnilla",
    description:
      "Markdown Voice Memos on iOS-aaninauhuri iPhonelle, iPadille ja Apple Watchille. Se litteroi puheen laitteessa ja vie siistit Markdown-muistiinpanot Obsidianiin, Logseqiin, Notioniin ja iCloud Driveen.",
    ogDescription:
      "Muuta iPhonen, iPadin ja Apple Watchin tallenteet yksityisiksi, haettaviksi Markdown-muistiinpanoiksi.",
    keywords: commonKeywords,
    heroKicker: "iOS-aaninauhuri Markdown-muistiinpanoihin",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Tallenna aanta iPhonella, iPadilla tai Apple Watchilla, litteroi se laitteessa ja muuta jokainen memo siistiksi Markdown-muistiinpanoksi.",
    downloadCta: "Lataa App Storesta",
    workflowCta: "Katso työnkulku",
    workflowKicker: "Tallenteesta muistiinpanoksi",
    workflowTitle: "Tallenna ajatus. Sailyta litterointi. Vie muistiinpano.",
    features: [
      {
        title: "Litterointi laitteessa",
        body: "Tallenna puhetta iPhonella tai iPadilla ja saat haettavat litteroinnit ilman, etta aanta lahetetaan palvelimelle.",
      },
      {
        title: "Markdown-vienti",
        body: "Luo siistit Markdown-muistiinpanot YAML-frontmatterilla Obsidianiin, Logseqiin, Notioniin tai mihin tahansa muistiinpanotyohon.",
      },
      {
        title: "Tallenna mistä tahansa",
        body: "Aloita iPhonesta, iPadista, Apple Watchista, Sirista, Pikakomennoista, Ohjauskeskuksesta, Toimintopainikkeesta tai Live Activity -saatoimista.",
      },
      {
        title: "Tila- ja havioton aani",
        body: "Valitse kompaktit tallenteet, Apple Lossless, stereo tai Spatial Audio tuetuilla iPhoneilla.",
      },
    ],
    notesKicker: "Rakennettu muistiinpanojarjestelmille",
    notesTitle: "Markdown-tiedostot, jotka toimivat kuin oikeat muistiinpanot.",
    notesBody:
      "Mukauta frontmatteria, sisallyta litterointi, linkita aani ja tallenna tallenteet appiin tai kansioon kuten iCloud Driveen.",
    searchKicker: "Loyda sanomasi",
    searchTitle: "Hae tallenteita litteroinnin, otsikon tai paikan mukaan.",
    searchBody:
      "Selaa tallennekirjastoa, avaa tarkat kohdat litteroinnista tai kayta karttaa, kun sijainti on olennainen.",
    faqKicker: "Kysymykset",
    faqTitle: "Yksityiset, haettavat aanimuistiinpanot iOS:lle ja Apple Watchille.",
    faqs: [
      {
        question: "Toimiiko Markdown Voice Memos Obsidianin kanssa?",
        answer:
          "Kyllä. Se vie Markdown-tiedostoja mukautettavalla YAML-frontmatterilla, joten tallenteet sopivat Obsidianiin, Logseqiin, Notioniin tai tavalliseen kansioon.",
      },
      {
        question: "Onko litterointi yksityista?",
        answer:
          "Litterointi ja alykkäät otsikot toimivat laitteessa. Tallenteet ja litteroinnit pysyvat iPhonessa tai iPadissa, ellei niita vieda tai jaeta.",
      },
      {
        question: "Onko Markdown Voice Memos iOS-appi?",
        answer:
          "Kyllä. Markdown Voice Memos on tehty iPhonelle ja iPadille, ja se tukee tallennusta ja toistoa Apple Watchilla.",
      },
      {
        question: "Voinko tallentaa Apple Watchilla?",
        answer:
          "Kyllä. Voit tallentaa ja toistaa Apple Watchilla, ja tallenteet synkronoituvat iPhone-appiin.",
      },
    ],
    finalCta: "Muuta aanimemot Markdown-muistiinpanoiksi.",
    finalButton: "Hanki Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  fr: {
    lang: "fr",
    ogLocale: "fr_FR",
    title: "Markdown Voice Memos | Enregistreur vocal iOS avec transcription locale",
    description:
      "Markdown Voice Memos est un enregistreur vocal iOS pour iPhone, iPad et Apple Watch qui transcrit la parole sur l'appareil et exporte des notes Markdown propres pour Obsidian, Logseq, Notion et iCloud Drive.",
    ogDescription:
      "Transformez vos enregistrements iPhone, iPad et Apple Watch en notes Markdown privees et consultables.",
    keywords: commonKeywords,
    heroKicker: "Enregistreur vocal iOS pour notes Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Enregistrez sur iPhone, iPad ou Apple Watch, transcrivez sur l'appareil et transformez chaque memo en note Markdown propre.",
    downloadCta: "Telecharger sur l'App Store",
    workflowCta: "Voir le flux",
    workflowKicker: "De l'enregistrement aux notes",
    workflowTitle: "Capturez l'idee. Gardez la transcription. Exportez la note.",
    features: [
      {
        title: "Transcription sur l'appareil",
        body: "Enregistrez la parole sur iPhone ou iPad et obtenez des transcriptions consultables sans envoyer l'audio a un serveur.",
      },
      {
        title: "Export Markdown",
        body: "Generez des notes Markdown propres avec frontmatter YAML pour Obsidian, Logseq, Notion ou tout flux de notes.",
      },
      {
        title: "Enregistrez partout",
        body: "Demarrez depuis iPhone, iPad, Apple Watch, Siri, Raccourcis, Centre de controle, bouton Action ou controles Live Activity.",
      },
      {
        title: "Audio spatial et sans perte",
        body: "Choisissez des enregistrements compacts, Apple Lossless, stereo ou Spatial Audio sur les iPhone compatibles.",
      },
    ],
    notesKicker: "Concu pour les systemes de notes",
    notesTitle: "Des fichiers Markdown qui se comportent comme de vraies notes.",
    notesBody:
      "Personnalisez le frontmatter, incluez la transcription, liez l'audio et enregistrez dans l'app ou dans un dossier comme iCloud Drive.",
    searchKicker: "Retrouvez ce que vous avez dit",
    searchTitle: "Recherchez par transcription, titre ou lieu.",
    searchBody:
      "Parcourez votre bibliotheque, ouvrez les moments exacts d'une transcription ou utilisez la carte quand le contexte de lieu compte.",
    faqKicker: "Questions",
    faqTitle: "Notes vocales privees et consultables pour iOS et Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos fonctionne-t-il avec Obsidian ?",
        answer:
          "Oui. Il exporte des fichiers Markdown avec frontmatter YAML personnalisable, pour Obsidian, Logseq, Notion ou un simple dossier.",
      },
      {
        question: "La transcription est-elle privee ?",
        answer:
          "La transcription et les titres intelligents s'executent sur l'appareil. Vos enregistrements et transcriptions restent sur votre iPhone ou iPad sauf si vous les exportez ou les partagez.",
      },
      {
        question: "Markdown Voice Memos est-il une app iOS ?",
        answer:
          "Oui. Markdown Voice Memos est concu pour iPhone et iPad, avec prise en charge de l'enregistrement et de la lecture sur Apple Watch.",
      },
      {
        question: "Puis-je enregistrer depuis l'Apple Watch ?",
        answer:
          "Oui. Vous pouvez enregistrer et lire depuis l'Apple Watch, et les enregistrements se synchronisent avec l'app iPhone.",
      },
    ],
    finalCta: "Transformez vos memos vocaux en notes Markdown.",
    finalButton: "Obtenir Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "fr-CA": {
    lang: "fr-CA",
    ogLocale: "fr_CA",
    title: "Markdown Voice Memos | Enregistreur vocal iOS avec transcription locale",
    description:
      "Markdown Voice Memos est un enregistreur vocal pour iPhone, iPad et Apple Watch qui transcrit sur l'appareil et exporte des notes Markdown propres pour Obsidian, Logseq, Notion et iCloud Drive.",
    ogDescription:
      "Transformez vos enregistrements iPhone, iPad et Apple Watch en notes Markdown privees et faciles a rechercher.",
    keywords: commonKeywords,
    heroKicker: "Enregistreur vocal iOS pour notes Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Enregistrez sur iPhone, iPad ou Apple Watch, transcrivez localement et transformez chaque memo en note Markdown propre.",
    downloadCta: "Telecharger dans l'App Store",
    workflowCta: "Voir le flux",
    workflowKicker: "De l'enregistrement aux notes",
    workflowTitle: "Capturez l'idee. Gardez la transcription. Exportez la note.",
    features: [
      {
        title: "Transcription sur l'appareil",
        body: "Enregistrez la parole sur iPhone ou iPad et obtenez des transcriptions consultables sans envoyer l'audio a un serveur.",
      },
      {
        title: "Export Markdown",
        body: "Generez des notes Markdown propres avec frontmatter YAML pour Obsidian, Logseq, Notion ou tout flux de notes.",
      },
      {
        title: "Enregistrez partout",
        body: "Demarrez depuis iPhone, iPad, Apple Watch, Siri, Raccourcis, Centre de controle, bouton Action ou controles Live Activity.",
      },
      {
        title: "Audio spatial et sans perte",
        body: "Choisissez des enregistrements compacts, Apple Lossless, stereo ou Spatial Audio sur les iPhone compatibles.",
      },
    ],
    notesKicker: "Concu pour les systemes de notes",
    notesTitle: "Des fichiers Markdown qui se comportent comme de vraies notes.",
    notesBody:
      "Personnalisez le frontmatter, incluez la transcription, liez l'audio et enregistrez dans l'app ou dans un dossier comme iCloud Drive.",
    searchKicker: "Retrouvez ce que vous avez dit",
    searchTitle: "Recherchez par transcription, titre ou lieu.",
    searchBody:
      "Parcourez votre bibliotheque, ouvrez les moments exacts d'une transcription ou utilisez la carte quand le contexte de lieu compte.",
    faqKicker: "Questions",
    faqTitle: "Notes vocales privees et consultables pour iOS et Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos fonctionne-t-il avec Obsidian ?",
        answer:
          "Oui. Il exporte des fichiers Markdown avec frontmatter YAML personnalisable, pour Obsidian, Logseq, Notion ou un simple dossier.",
      },
      {
        question: "La transcription est-elle privee ?",
        answer:
          "La transcription et les titres intelligents s'executent sur l'appareil. Vos enregistrements et transcriptions restent sur votre iPhone ou iPad sauf si vous les exportez ou les partagez.",
      },
      {
        question: "Markdown Voice Memos est-il une app iOS ?",
        answer:
          "Oui. Markdown Voice Memos est concu pour iPhone et iPad, avec prise en charge de l'enregistrement et de la lecture sur Apple Watch.",
      },
      {
        question: "Puis-je enregistrer depuis l'Apple Watch ?",
        answer:
          "Oui. Vous pouvez enregistrer et lire depuis l'Apple Watch, et les enregistrements se synchronisent avec l'app iPhone.",
      },
    ],
    finalCta: "Transformez vos memos vocaux en notes Markdown.",
    finalButton: "Obtenir Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  he: {
    lang: "he",
    dir: "rtl",
    ogLocale: "he_IL",
    title: "Markdown Voice Memos | מקליט קול ל-iOS עם תמלול במכשיר",
    description:
      "Markdown Voice Memos הוא מקליט קול ל-iPhone, iPad ו-Apple Watch שמתמלל דיבור במכשיר ומייצא הערות Markdown נקיות עבור Obsidian, Logseq, Notion ו-iCloud Drive.",
    ogDescription:
      "הפכו הקלטות מ-iPhone, iPad ו-Apple Watch להערות Markdown פרטיות וניתנות לחיפוש.",
    keywords: commonKeywords,
    heroKicker: "מקליט קול iOS להערות Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "הקליטו שמע ב-iPhone, iPad או Apple Watch, תמללו במכשיר, והפכו כל מזכר להערת Markdown נקייה.",
    downloadCta: "הורדה מה-App Store",
    workflowCta: "הצגת זרימת העבודה",
    workflowKicker: "מהקלטה להערות",
    workflowTitle: "לכדו את הרעיון. שמרו את התמלול. יצאו את ההערה.",
    features: [
      {
        title: "תמלול במכשיר",
        body: "הקליטו דיבור ב-iPhone או iPad וקבלו תמלולים ניתנים לחיפוש בלי לשלוח שמע לשרת.",
      },
      {
        title: "יצוא Markdown",
        body: "צרו הערות Markdown נקיות עם YAML frontmatter עבור Obsidian, Logseq, Notion או כל תהליך הערות.",
      },
      {
        title: "הקלטה מכל מקום",
        body: "התחילו מ-iPhone, iPad, Apple Watch, Siri, קיצורים, מרכז הבקרה, כפתור הפעולה או פקדי Live Activity.",
      },
      {
        title: "שמע מרחבי וללא אובדן",
        body: "בחרו הקלטות קומפקטיות, Apple Lossless, סטריאו או Spatial Audio במכשירי iPhone נתמכים.",
      },
    ],
    notesKicker: "נבנה למערכות הערות",
    notesTitle: "קבצי Markdown שמתנהגים כמו הערות אמיתיות.",
    notesBody:
      "התאימו frontmatter, כללו טקסט תמלול, קשרו שמע ושמרו הקלטות באפליקציה או בתיקייה כמו iCloud Drive.",
    searchKicker: "מצאו מה אמרתם",
    searchTitle: "חפשו הקלטות לפי תמלול, כותרת או מקום.",
    searchBody:
      "עיינו בספריית הקלטות, פתחו רגעים מדויקים בתמלול או השתמשו במפה כשחשוב ההקשר של המיקום.",
    faqKicker: "שאלות",
    faqTitle: "הערות קוליות פרטיות וניתנות לחיפוש עבור iOS ו-Apple Watch.",
    faqs: [
      {
        question: "האם Markdown Voice Memos עובד עם Obsidian?",
        answer:
          "כן. הוא מייצא קבצי Markdown עם YAML frontmatter הניתן להתאמה, כך שהקלטות יתאימו ל-Obsidian, Logseq, Notion או לתיקייה רגילה.",
      },
      {
        question: "האם התמלול פרטי?",
        answer:
          "תמלול וכותרות חכמות רצים במכשיר. ההקלטות והתמלולים נשארים ב-iPhone או iPad אלא אם תבחרו לייצא או לשתף.",
      },
      {
        question: "האם Markdown Voice Memos היא אפליקציית iOS?",
        answer:
          "כן. Markdown Voice Memos בנויה ל-iPhone ול-iPad, עם תמיכה בהקלטה ובהשמעה ב-Apple Watch.",
      },
      {
        question: "אפשר להקליט מ-Apple Watch?",
        answer:
          "כן. אפשר להקליט ולהשמיע מ-Apple Watch, וההקלטות מסתנכרנות עם אפליקציית iPhone.",
      },
    ],
    finalCta: "הפכו מזכרים קוליים להערות Markdown.",
    finalButton: "קבלו את Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  hi: {
    lang: "hi",
    ogLocale: "hi_IN",
    title: "Markdown Voice Memos | डिवाइस पर ट्रांसक्रिप्शन वाला iOS वॉइस रिकॉर्डर",
    description:
      "Markdown Voice Memos iPhone, iPad और Apple Watch के लिए iOS वॉइस रिकॉर्डर है, जो डिवाइस पर भाषण को ट्रांसक्राइब करता है और Obsidian, Logseq, Notion तथा iCloud Drive के लिए साफ Markdown नोट्स निर्यात करता है।",
    ogDescription:
      "iPhone, iPad और Apple Watch रिकॉर्डिंग को निजी, खोजने योग्य Markdown नोट्स में बदलें।",
    keywords: commonKeywords,
    heroKicker: "Markdown नोट्स के लिए iOS वॉइस रिकॉर्डर",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "iPhone, iPad या Apple Watch पर ऑडियो रिकॉर्ड करें, उसे डिवाइस पर ट्रांसक्राइब करें और हर memo को साफ Markdown नोट में बदलें।",
    downloadCta: "App Store से डाउनलोड करें",
    workflowCta: "वर्कफ्लो देखें",
    workflowKicker: "रिकॉर्डिंग से नोट्स तक",
    workflowTitle: "विचार कैप्चर करें। ट्रांसक्रिप्ट रखें। नोट निर्यात करें।",
    features: [
      {
        title: "डिवाइस पर ट्रांसक्रिप्शन",
        body: "iPhone या iPad पर भाषण रिकॉर्ड करें और ऑडियो को सर्वर पर भेजे बिना खोजने योग्य ट्रांसक्रिप्ट पाएं।",
      },
      {
        title: "Markdown निर्यात",
        body: "Obsidian, Logseq, Notion या किसी भी नोट वर्कफ्लो के लिए YAML frontmatter के साथ साफ Markdown नोट्स बनाएं।",
      },
      {
        title: "कहीं से भी रिकॉर्ड करें",
        body: "iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, Action Button या Live Activity controls से शुरू करें।",
      },
      {
        title: "Spatial और lossless ऑडियो",
        body: "समर्थित iPhones पर compact recordings, Apple Lossless, stereo या Spatial Audio चुनें।",
      },
    ],
    notesKicker: "नोट सिस्टम के लिए बनाया गया",
    notesTitle: "Markdown फाइलें जो असली नोट्स की तरह काम करती हैं।",
    notesBody:
      "frontmatter कस्टमाइज़ करें, ट्रांसक्रिप्ट टेक्स्ट शामिल करें, ऑडियो लिंक करें और रिकॉर्डिंग को ऐप या iCloud Drive जैसे फोल्डर में सेव करें।",
    searchKicker: "जो कहा उसे ढूंढें",
    searchTitle: "रिकॉर्डिंग को ट्रांसक्रिप्ट, शीर्षक या स्थान से खोजें।",
    searchBody:
      "रिकॉर्डिंग लाइब्रेरी ब्राउज़ करें, ट्रांसक्रिप्ट के सटीक पल खोलें या जब स्थान का संदर्भ जरूरी हो तो map view इस्तेमाल करें।",
    faqKicker: "प्रश्न",
    faqTitle: "iOS और Apple Watch के लिए निजी, खोजने योग्य वॉइस नोट्स।",
    faqs: [
      {
        question: "क्या Markdown Voice Memos Obsidian के साथ काम करता है?",
        answer:
          "हाँ। यह कस्टमाइज़ करने योग्य YAML frontmatter वाली Markdown फाइलें निर्यात करता है, इसलिए रिकॉर्डिंग Obsidian, Logseq, Notion या साधारण फोल्डर में फिट होती हैं।",
      },
      {
        question: "क्या ट्रांसक्रिप्शन निजी है?",
        answer:
          "ट्रांसक्रिप्शन और smart title फीचर डिवाइस पर चलते हैं। आपकी रिकॉर्डिंग और ट्रांसक्रिप्ट iPhone या iPad पर रहती हैं, जब तक आप उन्हें निर्यात या साझा नहीं करते।",
      },
      {
        question: "क्या Markdown Voice Memos iOS ऐप है?",
        answer:
          "हाँ। Markdown Voice Memos iPhone और iPad के लिए बना है, और Apple Watch recording तथा playback support करता है।",
      },
      {
        question: "क्या मैं Apple Watch से रिकॉर्ड कर सकता हूँ?",
        answer:
          "हाँ। आप Apple Watch से रिकॉर्ड और playback कर सकते हैं, और रिकॉर्डिंग iPhone ऐप से sync होती हैं।",
      },
    ],
    finalCta: "वॉइस memos को Markdown notes में बदलें।",
    finalButton: "Markdown Voice Memos पाएं",
    imageAlts: en.imageAlts,
  },
  hr: {
    lang: "hr",
    ogLocale: "hr_HR",
    title: "Markdown Voice Memos | iOS snimac glasa s prijepisom na uredaju",
    description:
      "Markdown Voice Memos je iOS snimac glasa za iPhone, iPad i Apple Watch koji prepisuje govor na uredaju i izvozi ciste Markdown biljeske za Obsidian, Logseq, Notion i iCloud Drive.",
    ogDescription:
      "Pretvorite snimke s iPhonea, iPada i Apple Watcha u privatne Markdown biljeske koje je lako pretrazivati.",
    keywords: commonKeywords,
    heroKicker: "iOS snimac glasa za Markdown biljeske",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Snimajte zvuk na iPhoneu, iPadu ili Apple Watchu, prepisite ga na uredaju i svaki memo pretvorite u cistu Markdown biljesku.",
    downloadCta: "Preuzmi na App Storeu",
    workflowCta: "Pogledaj tijek rada",
    workflowKicker: "Od snimke do biljeske",
    workflowTitle: "Uhvatite misao. Sacuvajte prijepis. Izvezite biljesku.",
    features: [
      {
        title: "Prijepis na uredaju",
        body: "Snimajte govor na iPhoneu ili iPadu i dobijte pretrazive prijepise bez slanja zvuka na server.",
      },
      {
        title: "Markdown izvoz",
        body: "Stvarajte ciste Markdown biljeske s YAML frontmatterom za Obsidian, Logseq, Notion ili bilo koji sustav biljeski.",
      },
      {
        title: "Snimanje odasvud",
        body: "Pokrenite s iPhonea, iPada, Apple Watcha, Siri, Precaca, Kontrolnog centra, Akcijskog gumba ili Live Activity kontrola.",
      },
      {
        title: "Prostorni i bezgubitni zvuk",
        body: "Odaberite kompaktne snimke, Apple Lossless, stereo ili Spatial Audio na podrzanim iPhone uredajima.",
      },
    ],
    notesKicker: "Izradeno za sustave biljeski",
    notesTitle: "Markdown datoteke koje se ponasaju kao prave biljeske.",
    notesBody:
      "Prilagodite frontmatter, ukljucite tekst prijepisa, povezite zvuk i spremite snimke u aplikaciju ili mapu kao iCloud Drive.",
    searchKicker: "Pronadite sto ste rekli",
    searchTitle: "Pretrazujte snimke po prijepisu, naslovu ili mjestu.",
    searchBody:
      "Pregledajte biblioteku snimki, otvorite tocne trenutke prijepisa ili koristite kartu kada je lokacija vazna.",
    faqKicker: "Pitanja",
    faqTitle: "Privatne, pretrazive glasovne biljeske za iOS i Apple Watch.",
    faqs: [
      {
        question: "Radi li Markdown Voice Memos s Obsidianom?",
        answer:
          "Da. Izvozi Markdown datoteke s prilagodljivim YAML frontmatterom, pa snimke odgovaraju Obsidianu, Logsequ, Notionu ili obicnoj mapi.",
      },
      {
        question: "Je li prijepis privatan?",
        answer:
          "Prijepis i pametni naslovi rade na uredaju. Snimke i prijepisi ostaju na iPhoneu ili iPadu osim ako ih ne izvezete ili podijelite.",
      },
      {
        question: "Je li Markdown Voice Memos iOS aplikacija?",
        answer:
          "Da. Markdown Voice Memos je za iPhone i iPad, uz podrsku za snimanje i reprodukciju na Apple Watchu.",
      },
      {
        question: "Mogu li snimati s Apple Watcha?",
        answer:
          "Da. Mozete snimati i reproducirati s Apple Watcha, a snimke se sinkroniziraju s iPhone aplikacijom.",
      },
    ],
    finalCta: "Pretvorite glasovne memo zapise u Markdown biljeske.",
    finalButton: "Preuzmi Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  hu: {
    lang: "hu",
    ogLocale: "hu_HU",
    title: "Markdown Voice Memos | iOS hangrogzito eszkozon futo atirassal",
    description:
      "A Markdown Voice Memos iPhone, iPad es Apple Watch hangrogzito, amely az eszkozon irja at a beszedet, es tiszta Markdown jegyzeteket exportal Obsidian, Logseq, Notion es iCloud Drive munkafolyamatokhoz.",
    ogDescription:
      "Alakitsd az iPhone, iPad es Apple Watch felveteleket privat, keresheto Markdown jegyzetekke.",
    keywords: commonKeywords,
    heroKicker: "iOS hangrogzito Markdown jegyzetekhez",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Rogzits hangot iPhone-on, iPaden vagy Apple Watchon, irasd at az eszkozon, es alakits minden memot tiszta Markdown jegyzette.",
    downloadCta: "Letoltes az App Store-bol",
    workflowCta: "Munkafolyamat megnezese",
    workflowKicker: "Felveteltol a jegyzetig",
    workflowTitle: "Rogzitsd a gondolatot. Orizd meg az atiratot. Exportald a jegyzetet.",
    features: [
      {
        title: "Atiras az eszkozon",
        body: "Rogzits beszedet iPhone-on vagy iPaden, es kapj keresheto atiratokat anelkul, hogy a hang szerverre kerulne.",
      },
      {
        title: "Markdown export",
        body: "Keszits tiszta Markdown jegyzeteket YAML frontmatterrel Obsidian, Logseq, Notion vagy barmilyen jegyzetfolyamat szamara.",
      },
      {
        title: "Rogzites barhonnan",
        body: "Indits iPhone-rol, iPadrol, Apple Watchrol, Siribol, Parancsokbol, Vezerlokozpontbol, Muvelet gombbal vagy Live Activity vezerlokkel.",
      },
      {
        title: "Terbeli es vesztesegmentes hang",
        body: "Valassz kompakt felveteleket, Apple Losslesst, sztereot vagy Spatial Audiot tamogatott iPhone-okon.",
      },
    ],
    notesKicker: "Jegyzetrendszerekhez keszult",
    notesTitle: "Markdown fajlok, amelyek igazi jegyzetkent mukodnek.",
    notesBody:
      "Szabd testre a frontmattert, illeszd be az atiratot, linkeld a hangot, es mentsd a felveteleket az appban vagy egy mappaban, peldaul iCloud Drive-ban.",
    searchKicker: "Talald meg, amit mondtal",
    searchTitle: "Keress felvetelben atirat, cim vagy hely alapjan.",
    searchBody:
      "Bongeszd a felvetelkonyvtarat, nyiss meg pontos atiratpillanatokat, vagy hasznald a terkepet, amikor szamit a hely.",
    faqKicker: "Kerdesek",
    faqTitle: "Privat, keresheto hangjegyzetek iOS-re es Apple Watchra.",
    faqs: [
      {
        question: "Mukodik a Markdown Voice Memos az Obsidiannal?",
        answer:
          "Igen. Testreszabhato YAML frontmatterrel exportal Markdown fajlokat, igy a felvetelek illeszkednek Obsidian, Logseq, Notion vagy sima mappa munkafolyamatba.",
      },
      {
        question: "Privat az atiras?",
        answer:
          "Az atiras es az okos cimadas az eszkozon fut. A felvetelek es atiratok az iPhone-on vagy iPaden maradnak, hacsak nem exportalod vagy osztod meg oket.",
      },
      {
        question: "A Markdown Voice Memos iOS app?",
        answer:
          "Igen. iPhone-ra es iPadre keszult, Apple Watch felvetel- es lejatszastamogatassal.",
      },
      {
        question: "Rogzithetek Apple Watchrol?",
        answer:
          "Igen. Apple Watchrol rogzithet es lejatszhatsz, a felvetelek pedig szinkronizalodnak az iPhone appal.",
      },
    ],
    finalCta: "Alakitsd a hangmemokat Markdown jegyzetekke.",
    finalButton: "Markdown Voice Memos letoltese",
    imageAlts: en.imageAlts,
  },
  id: {
    lang: "id",
    ogLocale: "id_ID",
    title: "Markdown Voice Memos | Perekam suara iOS dengan transkripsi di perangkat",
    description:
      "Markdown Voice Memos adalah perekam suara iOS untuk iPhone, iPad, dan Apple Watch yang menyalin ucapan di perangkat dan mengekspor catatan Markdown rapi untuk Obsidian, Logseq, Notion, dan iCloud Drive.",
    ogDescription:
      "Ubah rekaman iPhone, iPad, dan Apple Watch menjadi catatan Markdown privat yang mudah dicari.",
    keywords: commonKeywords,
    heroKicker: "Perekam suara iOS untuk catatan Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Rekam audio di iPhone, iPad, atau Apple Watch, transkripsikan di perangkat, lalu ubah setiap memo menjadi catatan Markdown yang rapi.",
    downloadCta: "Unduh di App Store",
    workflowCta: "Lihat alur kerja",
    workflowKicker: "Dari rekaman ke catatan",
    workflowTitle: "Tangkap ide. Simpan transkrip. Ekspor catatan.",
    features: [
      {
        title: "Transkripsi di perangkat",
        body: "Rekam ucapan di iPhone atau iPad dan dapatkan transkrip yang bisa dicari tanpa mengirim audio ke server.",
      },
      {
        title: "Ekspor Markdown",
        body: "Buat catatan Markdown rapi dengan YAML frontmatter untuk Obsidian, Logseq, Notion, atau alur catatan apa pun.",
      },
      {
        title: "Rekam dari mana saja",
        body: "Mulai dari iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, Action Button, atau kontrol Live Activity.",
      },
      {
        title: "Audio spasial dan lossless",
        body: "Pilih rekaman ringkas, Apple Lossless, stereo, atau Spatial Audio di iPhone yang didukung.",
      },
    ],
    notesKicker: "Dibuat untuk sistem catatan",
    notesTitle: "File Markdown yang terasa seperti catatan nyata.",
    notesBody:
      "Sesuaikan frontmatter, sertakan teks transkrip, tautkan audio, dan simpan rekaman di app atau folder seperti iCloud Drive.",
    searchKicker: "Temukan yang Anda ucapkan",
    searchTitle: "Cari rekaman berdasarkan transkrip, judul, atau tempat.",
    searchBody:
      "Jelajahi pustaka rekaman, buka momen transkrip yang tepat, atau gunakan tampilan peta saat konteks lokasi penting.",
    faqKicker: "Pertanyaan",
    faqTitle: "Catatan suara privat dan mudah dicari untuk iOS dan Apple Watch.",
    faqs: [
      {
        question: "Apakah Markdown Voice Memos bekerja dengan Obsidian?",
        answer:
          "Ya. App ini mengekspor file Markdown dengan YAML frontmatter yang bisa disesuaikan, sehingga rekaman cocok untuk Obsidian, Logseq, Notion, atau folder biasa.",
      },
      {
        question: "Apakah transkripsi privat?",
        answer:
          "Transkripsi dan judul pintar berjalan di perangkat. Rekaman dan transkrip tetap di iPhone atau iPad kecuali Anda mengekspor atau membagikannya.",
      },
      {
        question: "Apakah Markdown Voice Memos app iOS?",
        answer:
          "Ya. Markdown Voice Memos dibuat untuk iPhone dan iPad, dengan dukungan rekam dan putar di Apple Watch.",
      },
      {
        question: "Bisakah saya merekam dari Apple Watch?",
        answer:
          "Ya. Anda bisa merekam dan memutar dari Apple Watch, dan rekaman tersinkron dengan app iPhone.",
      },
    ],
    finalCta: "Ubah memo suara menjadi catatan Markdown.",
    finalButton: "Dapatkan Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  it: {
    lang: "it",
    ogLocale: "it_IT",
    title: "Markdown Voice Memos | Registratore vocale iOS con trascrizione locale",
    description:
      "Markdown Voice Memos e un registratore vocale iOS per iPhone, iPad e Apple Watch che trascrive sul dispositivo ed esporta note Markdown pulite per Obsidian, Logseq, Notion e iCloud Drive.",
    ogDescription:
      "Trasforma le registrazioni di iPhone, iPad e Apple Watch in note Markdown private e ricercabili.",
    keywords: commonKeywords,
    heroKicker: "Registratore vocale iOS per note Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Registra audio su iPhone, iPad o Apple Watch, trascrivilo sul dispositivo e trasforma ogni memo in una nota Markdown pulita.",
    downloadCta: "Scarica su App Store",
    workflowCta: "Vedi flusso",
    workflowKicker: "Dalla registrazione alle note",
    workflowTitle: "Cattura l'idea. Conserva la trascrizione. Esporta la nota.",
    features: [
      {
        title: "Trascrizione sul dispositivo",
        body: "Registra voce su iPhone o iPad e ottieni trascrizioni ricercabili senza inviare audio a un server.",
      },
      {
        title: "Esportazione Markdown",
        body: "Genera note Markdown pulite con YAML frontmatter per Obsidian, Logseq, Notion o qualsiasi flusso di note.",
      },
      {
        title: "Registra ovunque",
        body: "Avvia da iPhone, iPad, Apple Watch, Siri, Comandi Rapidi, Centro di Controllo, tasto Azione o controlli Live Activity.",
      },
      {
        title: "Audio spaziale e lossless",
        body: "Scegli registrazioni compatte, Apple Lossless, stereo o Spatial Audio sugli iPhone supportati.",
      },
    ],
    notesKicker: "Pensato per sistemi di note",
    notesTitle: "File Markdown che si comportano come vere note.",
    notesBody:
      "Personalizza il frontmatter, includi il testo della trascrizione, collega l'audio e salva le registrazioni nell'app o in una cartella come iCloud Drive.",
    searchKicker: "Trova cio che hai detto",
    searchTitle: "Cerca registrazioni per trascrizione, titolo o luogo.",
    searchBody:
      "Sfoglia una libreria di registrazioni, apri momenti esatti della trascrizione o usa la mappa quando conta il contesto del luogo.",
    faqKicker: "Domande",
    faqTitle: "Note vocali private e ricercabili per iOS e Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funziona con Obsidian?",
        answer:
          "Si. Esporta file Markdown con YAML frontmatter personalizzabile, cosi le registrazioni si adattano a Obsidian, Logseq, Notion o a una cartella semplice.",
      },
      {
        question: "La trascrizione e privata?",
        answer:
          "Trascrizione e titoli intelligenti funzionano sul dispositivo. Registrazioni e trascrizioni restano su iPhone o iPad a meno che tu scelga di esportarle o condividerle.",
      },
      {
        question: "Markdown Voice Memos e un'app iOS?",
        answer:
          "Si. Markdown Voice Memos e progettata per iPhone e iPad, con supporto registrazione e riproduzione su Apple Watch.",
      },
      {
        question: "Posso registrare da Apple Watch?",
        answer:
          "Si. Puoi registrare e riprodurre da Apple Watch, e le registrazioni si sincronizzano con l'app iPhone.",
      },
    ],
    finalCta: "Trasforma memo vocali in note Markdown.",
    finalButton: "Ottieni Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  ja: {
    lang: "ja",
    ogLocale: "ja_JP",
    title: "Markdown Voice Memos | オンデバイス文字起こし対応のiOSボイスレコーダー",
    description:
      "Markdown Voice Memosは、iPhone、iPad、Apple Watch向けのiOSボイスレコーダーです。音声をデバイス上で文字起こしし、Obsidian、Logseq、Notion、iCloud Drive向けのきれいなMarkdownノートとして書き出せます。",
    ogDescription:
      "iPhone、iPad、Apple Watchの録音を、プライベートで検索できるMarkdownノートに変換します。",
    keywords: commonKeywords,
    heroKicker: "MarkdownノートのためのiOSボイスレコーダー",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "iPhone、iPad、Apple Watchで録音し、デバイス上で文字起こしして、すべてのメモをきれいなMarkdownノートに変換します。",
    downloadCta: "App Storeでダウンロード",
    workflowCta: "ワークフローを見る",
    workflowKicker: "録音からノートへ",
    workflowTitle: "思いつきを記録。文字起こしを保存。ノートを書き出し。",
    features: [
      {
        title: "オンデバイス文字起こし",
        body: "iPhoneやiPadで音声を録音し、サーバーに音声を送らずに検索可能な文字起こしを作成します。",
      },
      {
        title: "Markdown書き出し",
        body: "Obsidian、Logseq、Notion、または任意のノート環境向けに、YAML frontmatter付きのきれいなMarkdownノートを生成します。",
      },
      {
        title: "どこからでも録音",
        body: "iPhone、iPad、Apple Watch、Siri、ショートカット、コントロールセンター、アクションボタン、Live Activityから開始できます。",
      },
      {
        title: "空間オーディオとロスレス",
        body: "対応iPhoneでは、コンパクト録音、Apple Lossless、ステレオ、Spatial Audioを選べます。",
      },
    ],
    notesKicker: "ノートシステム向け",
    notesTitle: "本物のノートのように扱えるMarkdownファイル。",
    notesBody:
      "frontmatterをカスタマイズし、文字起こし本文を含め、音声をリンクし、録音をアプリ内またはiCloud Driveなどのフォルダに保存できます。",
    searchKicker: "話した内容を見つける",
    searchTitle: "文字起こし、タイトル、場所で録音を検索。",
    searchBody:
      "録音ライブラリを閲覧し、文字起こしの正確な瞬間を開き、場所の文脈が重要なときはマップ表示を使えます。",
    faqKicker: "よくある質問",
    faqTitle: "iOSとApple Watch向けのプライベートで検索可能な音声ノート。",
    faqs: [
      {
        question: "Markdown Voice MemosはObsidianで使えますか？",
        answer:
          "はい。カスタマイズ可能なYAML frontmatter付きMarkdownファイルを書き出せるため、Obsidian、Logseq、Notion、通常のフォルダ運用に合わせられます。",
      },
      {
        question: "文字起こしはプライベートですか？",
        answer:
          "文字起こしとスマートタイトルはデバイス上で動作します。書き出しや共有を選ばない限り、録音と文字起こしはiPhoneまたはiPadに残ります。",
      },
      {
        question: "Markdown Voice MemosはiOSアプリですか？",
        answer:
          "はい。iPhoneとiPad向けに作られており、Apple Watchでの録音と再生にも対応しています。",
      },
      {
        question: "Apple Watchから録音できますか？",
        answer:
          "はい。Apple Watchから録音と再生ができ、録音はiPhoneアプリと同期されます。",
      },
    ],
    finalCta: "ボイスメモをMarkdownノートに変換。",
    finalButton: "Markdown Voice Memosを入手",
    imageAlts: en.imageAlts,
  },
  ko: {
    lang: "ko",
    ogLocale: "ko_KR",
    title: "Markdown Voice Memos | 기기 내 전사 기능이 있는 iOS 음성 녹음기",
    description:
      "Markdown Voice Memos는 iPhone, iPad, Apple Watch용 iOS 음성 녹음기로, 음성을 기기에서 전사하고 Obsidian, Logseq, Notion, iCloud Drive용 깔끔한 Markdown 노트로 내보냅니다.",
    ogDescription:
      "iPhone, iPad, Apple Watch 녹음을 비공개 검색 가능한 Markdown 노트로 바꿉니다.",
    keywords: commonKeywords,
    heroKicker: "Markdown 노트를 위한 iOS 음성 녹음기",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "iPhone, iPad 또는 Apple Watch에서 오디오를 녹음하고, 기기에서 전사한 뒤, 모든 memo를 깔끔한 Markdown 노트로 바꾸세요.",
    downloadCta: "App Store에서 다운로드",
    workflowCta: "워크플로 보기",
    workflowKicker: "녹음에서 노트까지",
    workflowTitle: "생각을 담고, 전사를 보관하고, 노트를 내보내세요.",
    features: [
      {
        title: "기기 내 전사",
        body: "iPhone 또는 iPad에서 음성을 녹음하고 오디오를 서버로 보내지 않고 검색 가능한 전사를 얻습니다.",
      },
      {
        title: "Markdown 내보내기",
        body: "Obsidian, Logseq, Notion 또는 어떤 노트 워크플로에도 맞는 YAML frontmatter 포함 Markdown 노트를 만듭니다.",
      },
      {
        title: "어디서나 녹음",
        body: "iPhone, iPad, Apple Watch, Siri, 단축어, 제어 센터, 동작 버튼 또는 Live Activity 컨트롤에서 시작하세요.",
      },
      {
        title: "공간 및 무손실 오디오",
        body: "지원되는 iPhone에서 compact recording, Apple Lossless, stereo 또는 Spatial Audio를 선택하세요.",
      },
    ],
    notesKicker: "노트 시스템을 위해 제작",
    notesTitle: "진짜 노트처럼 작동하는 Markdown 파일.",
    notesBody:
      "frontmatter를 맞춤 설정하고, 전사 텍스트를 포함하고, 오디오를 연결하며, 녹음을 앱이나 iCloud Drive 같은 폴더에 저장하세요.",
    searchKicker: "말한 내용을 찾기",
    searchTitle: "전사, 제목 또는 장소로 녹음을 검색하세요.",
    searchBody:
      "녹음 라이브러리를 탐색하고, 전사의 정확한 순간을 열거나, 위치 맥락이 중요할 때 지도 보기를 사용하세요.",
    faqKicker: "질문",
    faqTitle: "iOS와 Apple Watch를 위한 비공개 검색 가능 음성 노트.",
    faqs: [
      {
        question: "Markdown Voice Memos는 Obsidian과 함께 작동하나요?",
        answer:
          "예. 맞춤 설정 가능한 YAML frontmatter가 있는 Markdown 파일을 내보내므로 Obsidian, Logseq, Notion 또는 일반 폴더 워크플로에 맞출 수 있습니다.",
      },
      {
        question: "전사는 비공개인가요?",
        answer:
          "전사와 스마트 제목 기능은 기기에서 실행됩니다. 내보내기나 공유를 선택하지 않는 한 녹음과 전사는 iPhone 또는 iPad에 남습니다.",
      },
      {
        question: "Markdown Voice Memos는 iOS 앱인가요?",
        answer:
          "예. Markdown Voice Memos는 iPhone과 iPad용이며 Apple Watch 녹음 및 재생을 지원합니다.",
      },
      {
        question: "Apple Watch에서 녹음할 수 있나요?",
        answer:
          "예. Apple Watch에서 녹음하고 재생할 수 있으며 녹음은 iPhone 앱과 동기화됩니다.",
      },
    ],
    finalCta: "음성 memo를 Markdown 노트로 바꾸세요.",
    finalButton: "Markdown Voice Memos 받기",
    imageAlts: en.imageAlts,
  },
  ms: {
    lang: "ms",
    ogLocale: "ms_MY",
    title: "Markdown Voice Memos | Perakam suara iOS dengan transkripsi pada peranti",
    description:
      "Markdown Voice Memos ialah perakam suara iOS untuk iPhone, iPad dan Apple Watch yang menyalin pertuturan pada peranti dan mengeksport nota Markdown bersih untuk Obsidian, Logseq, Notion dan iCloud Drive.",
    ogDescription:
      "Tukar rakaman iPhone, iPad dan Apple Watch kepada nota Markdown peribadi yang boleh dicari.",
    keywords: commonKeywords,
    heroKicker: "Perakam suara iOS untuk nota Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Rakam audio pada iPhone, iPad atau Apple Watch, transkripsi pada peranti dan tukar setiap memo menjadi nota Markdown yang bersih.",
    downloadCta: "Muat turun di App Store",
    workflowCta: "Lihat aliran kerja",
    workflowKicker: "Daripada rakaman kepada nota",
    workflowTitle: "Tangkap idea. Simpan transkrip. Eksport nota.",
    features: [
      {
        title: "Transkripsi di perangkat",
        body: "Rekam ucapan di iPhone atau iPad dan dapatkan transkrip yang bisa dicari tanpa mengirim audio ke server.",
      },
      {
        title: "Ekspor Markdown",
        body: "Buat catatan Markdown rapi dengan YAML frontmatter untuk Obsidian, Logseq, Notion, atau alur catatan apa pun.",
      },
      {
        title: "Rekam dari mana saja",
        body: "Mulai dari iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, Action Button, atau kontrol Live Activity.",
      },
      {
        title: "Audio spasial dan lossless",
        body: "Pilih rekaman ringkas, Apple Lossless, stereo, atau Spatial Audio di iPhone yang didukung.",
      },
    ],
    notesKicker: "Dibina untuk sistem nota",
    notesTitle: "Fail Markdown yang berfungsi seperti nota sebenar.",
    notesBody:
      "Sesuaikan frontmatter, sertakan teks transkrip, pautkan audio dan simpan rakaman dalam app atau folder seperti iCloud Drive.",
    searchKicker: "Cari apa yang anda katakan",
    searchTitle: "Cari rakaman mengikut transkrip, tajuk atau tempat.",
    searchBody:
      "Layari pustaka rakaman, buka detik transkrip yang tepat atau gunakan paparan peta apabila konteks lokasi penting.",
    faqKicker: "Soalan",
    faqTitle: "Nota suara peribadi dan boleh dicari untuk iOS dan Apple Watch.",
    faqs: [
      {
        question: "Adakah Markdown Voice Memos berfungsi dengan Obsidian?",
        answer:
          "Ya. Ia mengeksport fail Markdown dengan YAML frontmatter yang boleh disesuaikan, jadi rakaman sesuai untuk Obsidian, Logseq, Notion atau folder biasa.",
      },
      {
        question: "Adakah transkripsi peribadi?",
        answer:
          "Transkripsi dan tajuk pintar berjalan pada peranti. Rakaman dan transkrip kekal pada iPhone atau iPad kecuali anda mengeksport atau berkongsinya.",
      },
      {
        question: "Adakah Markdown Voice Memos app iOS?",
        answer:
          "Ya. Markdown Voice Memos dibina untuk iPhone dan iPad, dengan sokongan rakaman dan main balik pada Apple Watch.",
      },
      {
        question: "Bolehkah saya merakam dari Apple Watch?",
        answer:
          "Ya. Anda boleh merakam dan memainkan dari Apple Watch, dan rakaman disegerakkan dengan app iPhone.",
      },
    ],
    finalCta: "Tukar memo suara kepada nota Markdown.",
    finalButton: "Dapatkan Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  nb: {
    lang: "nb",
    ogLocale: "nb_NO",
    title: "Markdown Voice Memos | iOS-taleopptaker med transkripsjon pa enheten",
    description:
      "Markdown Voice Memos er en iOS-taleopptaker for iPhone, iPad og Apple Watch som transkriberer tale pa enheten og eksporterer rene Markdown-notater til Obsidian, Logseq, Notion og iCloud Drive.",
    ogDescription:
      "Gjor opptak fra iPhone, iPad og Apple Watch om til private, sokbare Markdown-notater.",
    keywords: commonKeywords,
    heroKicker: "iOS-taleopptaker for Markdown-notater",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Ta opp lyd pa iPhone, iPad eller Apple Watch, transkriber pa enheten og gjor hvert memo til et rent Markdown-notat.",
    downloadCta: "Last ned i App Store",
    workflowCta: "Se arbeidsflyt",
    workflowKicker: "Fra opptak til notater",
    workflowTitle: "Fang tanken. Behold transkripsjonen. Eksporter notatet.",
    features: [
      {
        title: "Transkripsjon pa enheten",
        body: "Ta opp tale pa iPhone eller iPad og fa sokbare transkripsjoner uten a sende lyd til en server.",
      },
      {
        title: "Markdown-eksport",
        body: "Lag rene Markdown-notater med YAML-frontmatter for Obsidian, Logseq, Notion eller en hvilken som helst notatflyt.",
      },
      {
        title: "Ta opp fra hvor som helst",
        body: "Start fra iPhone, iPad, Apple Watch, Siri, Snarveier, Kontrollsenter, handlingsknappen eller Live Activity-kontroller.",
      },
      {
        title: "Romlig og tapsfri lyd",
        body: "Velg kompakte opptak, Apple Lossless, stereo eller Spatial Audio pa stottede iPhoner.",
      },
    ],
    notesKicker: "Bygget for notatsystemer",
    notesTitle: "Markdown-filer som oppforer seg som ekte notater.",
    notesBody:
      "Tilpass frontmatter, inkluder transkripsjon, lenk lyd og lagre opptak i appen eller i en mappe som iCloud Drive.",
    searchKicker: "Finn det du sa",
    searchTitle: "Sok i opptak etter transkripsjon, tittel eller sted.",
    searchBody:
      "Bla gjennom opptaksbiblioteket, apne noyaktige transkripsjonsokeblikk eller bruk kartvisning nar stedskontekst betyr noe.",
    faqKicker: "Sporsmal",
    faqTitle: "Private, sokbare talenotater for iOS og Apple Watch.",
    faqs: [
      {
        question: "Fungerer Markdown Voice Memos med Obsidian?",
        answer:
          "Ja. Det eksporterer Markdown-filer med tilpassbar YAML-frontmatter, slik at opptak passer i Obsidian, Logseq, Notion eller en vanlig mappe.",
      },
      {
        question: "Er transkripsjon privat?",
        answer:
          "Transkripsjon og smarte titler kjorer pa enheten. Opptak og transkripsjoner blir pa iPhone eller iPad med mindre du eksporterer eller deler dem.",
      },
      {
        question: "Er Markdown Voice Memos en iOS-app?",
        answer:
          "Ja. Markdown Voice Memos er laget for iPhone og iPad, med opptak og avspilling pa Apple Watch.",
      },
      {
        question: "Kan jeg ta opp fra Apple Watch?",
        answer:
          "Ja. Du kan ta opp og spille av fra Apple Watch, og opptak synkroniseres med iPhone-appen.",
      },
    ],
    finalCta: "Gjor talememoer om til Markdown-notater.",
    finalButton: "Skaff Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  nl: {
    lang: "nl",
    ogLocale: "nl_NL",
    title: "Markdown Voice Memos | iOS-voicerecorder met transcriptie op het apparaat",
    description:
      "Markdown Voice Memos is een iOS-voicerecorder voor iPhone, iPad en Apple Watch die spraak op het apparaat transcribeert en nette Markdown-notities exporteert voor Obsidian, Logseq, Notion en iCloud Drive.",
    ogDescription:
      "Zet opnames van iPhone, iPad en Apple Watch om in prive, doorzoekbare Markdown-notities.",
    keywords: commonKeywords,
    heroKicker: "iOS-voicerecorder voor Markdown-notities",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Neem audio op met iPhone, iPad of Apple Watch, transcribeer op het apparaat en verander elke memo in een nette Markdown-notitie.",
    downloadCta: "Download in de App Store",
    workflowCta: "Bekijk workflow",
    workflowKicker: "Van opname naar notities",
    workflowTitle: "Leg de gedachte vast. Bewaar het transcript. Exporteer de notitie.",
    features: [
      {
        title: "Transcriptie op het apparaat",
        body: "Neem spraak op met iPhone of iPad en krijg doorzoekbare transcripties zonder audio naar een server te sturen.",
      },
      {
        title: "Markdown-export",
        body: "Genereer nette Markdown-notities met YAML-frontmatter voor Obsidian, Logseq, Notion of elke notitieworkflow.",
      },
      {
        title: "Neem overal op",
        body: "Start vanaf iPhone, iPad, Apple Watch, Siri, Opdrachten, Bedieningspaneel, actieknop of Live Activity-bediening.",
      },
      {
        title: "Ruimtelijke en lossless audio",
        body: "Kies compacte opnames, Apple Lossless, stereo of Spatial Audio op ondersteunde iPhones.",
      },
    ],
    notesKicker: "Gemaakt voor notitiesystemen",
    notesTitle: "Markdown-bestanden die werken als echte notities.",
    notesBody:
      "Pas frontmatter aan, neem transcripttekst op, koppel audio en bewaar opnames in de app of in een map zoals iCloud Drive.",
    searchKicker: "Vind wat je zei",
    searchTitle: "Zoek opnames op transcript, titel of plaats.",
    searchBody:
      "Blader door je opnamebibliotheek, open exacte transcriptmomenten of gebruik de kaart wanneer locatiecontext belangrijk is.",
    faqKicker: "Vragen",
    faqTitle: "Prive, doorzoekbare spraaknotities voor iOS en Apple Watch.",
    faqs: [
      {
        question: "Werkt Markdown Voice Memos met Obsidian?",
        answer:
          "Ja. Het exporteert Markdown-bestanden met aanpasbare YAML-frontmatter, zodat opnames passen in Obsidian, Logseq, Notion of een gewone map.",
      },
      {
        question: "Is transcriptie prive?",
        answer:
          "Transcriptie en slimme titels draaien op het apparaat. Je opnames en transcripties blijven op je iPhone of iPad tenzij je ze exporteert of deelt.",
      },
      {
        question: "Is Markdown Voice Memos een iOS-app?",
        answer:
          "Ja. Markdown Voice Memos is gebouwd voor iPhone en iPad, met opname en afspelen op Apple Watch.",
      },
      {
        question: "Kan ik opnemen vanaf Apple Watch?",
        answer:
          "Ja. Je kunt opnemen en afspelen vanaf Apple Watch, en opnames synchroniseren met de iPhone-app.",
      },
    ],
    finalCta: "Zet spraakmemo's om in Markdown-notities.",
    finalButton: "Download Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  pl: {
    lang: "pl",
    ogLocale: "pl_PL",
    title: "Markdown Voice Memos | Rejestrator glosu iOS z transkrypcja na urzadzeniu",
    description:
      "Markdown Voice Memos to rejestrator glosu iOS dla iPhone'a, iPada i Apple Watch, ktory transkrybuje mowe na urzadzeniu i eksportuje czyste notatki Markdown dla Obsidian, Logseq, Notion i iCloud Drive.",
    ogDescription:
      "Zamien nagrania z iPhone'a, iPada i Apple Watch w prywatne, przeszukiwalne notatki Markdown.",
    keywords: commonKeywords,
    heroKicker: "Rejestrator glosu iOS do notatek Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Nagrywaj audio na iPhonie, iPadzie lub Apple Watch, transkrybuj na urzadzeniu i zmieniaj kazde memo w czysta notatke Markdown.",
    downloadCta: "Pobierz z App Store",
    workflowCta: "Zobacz przeplyw",
    workflowKicker: "Od nagrania do notatek",
    workflowTitle: "Uchwyc mysl. Zachowaj transkrypcje. Eksportuj notatke.",
    features: [
      {
        title: "Transkrypcja na urzadzeniu",
        body: "Nagrywaj mowe na iPhonie lub iPadzie i otrzymuj przeszukiwalne transkrypcje bez wysylania audio na serwer.",
      },
      {
        title: "Eksport Markdown",
        body: "Tworz czyste notatki Markdown z YAML frontmatter dla Obsidian, Logseq, Notion lub dowolnego systemu notatek.",
      },
      {
        title: "Nagrywaj z dowolnego miejsca",
        body: "Zacznij z iPhone'a, iPada, Apple Watch, Siri, Skrotow, Centrum sterowania, przycisku akcji lub kontrolek Live Activity.",
      },
      {
        title: "Dzwiek przestrzenny i bezstratny",
        body: "Wybieraj kompaktowe nagrania, Apple Lossless, stereo lub Spatial Audio na obslugiwanych iPhone'ach.",
      },
    ],
    notesKicker: "Stworzone dla systemow notatek",
    notesTitle: "Pliki Markdown, ktore dzialaja jak prawdziwe notatki.",
    notesBody:
      "Dostosuj frontmatter, dodaj tekst transkrypcji, polacz audio i zapisuj nagrania w aplikacji lub folderze, np. iCloud Drive.",
    searchKicker: "Znajdz to, co powiedziales",
    searchTitle: "Szukaj nagran wedlug transkrypcji, tytulu lub miejsca.",
    searchBody:
      "Przegladaj biblioteke nagran, otwieraj dokladne momenty transkrypcji albo uzywaj mapy, gdy wazny jest kontekst miejsca.",
    faqKicker: "Pytania",
    faqTitle: "Prywatne, przeszukiwalne notatki glosowe dla iOS i Apple Watch.",
    faqs: [
      {
        question: "Czy Markdown Voice Memos dziala z Obsidian?",
        answer:
          "Tak. Eksportuje pliki Markdown z konfigurowalnym YAML frontmatter, wiec nagrania pasuja do Obsidian, Logseq, Notion lub zwyklego folderu.",
      },
      {
        question: "Czy transkrypcja jest prywatna?",
        answer:
          "Transkrypcja i inteligentne tytuly dzialaja na urzadzeniu. Nagrania i transkrypcje zostaja na iPhonie lub iPadzie, chyba ze je wyeksportujesz lub udostepnisz.",
      },
      {
        question: "Czy Markdown Voice Memos to aplikacja iOS?",
        answer:
          "Tak. Markdown Voice Memos jest dla iPhone'a i iPada, z obsluga nagrywania i odtwarzania na Apple Watch.",
      },
      {
        question: "Czy moge nagrywac z Apple Watch?",
        answer:
          "Tak. Mozesz nagrywac i odtwarzac z Apple Watch, a nagrania synchronizuja sie z aplikacja iPhone.",
      },
    ],
    finalCta: "Zamien notatki glosowe w notatki Markdown.",
    finalButton: "Pobierz Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "pt-BR": {
    lang: "pt-BR",
    ogLocale: "pt_BR",
    title: "Markdown Voice Memos | Gravador de voz iOS com transcricao no dispositivo",
    description:
      "Markdown Voice Memos e um gravador de voz para iPhone, iPad e Apple Watch que transcreve no dispositivo e exporta notas Markdown limpas para Obsidian, Logseq, Notion e iCloud Drive.",
    ogDescription:
      "Transforme gravacoes de iPhone, iPad e Apple Watch em notas Markdown privadas e pesquisaveis.",
    keywords: commonKeywords,
    heroKicker: "Gravador de voz iOS para notas Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Grave audio no iPhone, iPad ou Apple Watch, transcreva no dispositivo e transforme cada memo em uma nota Markdown limpa.",
    downloadCta: "Baixar na App Store",
    workflowCta: "Ver fluxo",
    workflowKicker: "Da gravacao as notas",
    workflowTitle: "Capture a ideia. Guarde a transcricao. Exporte a nota.",
    features: [
      {
        title: "Transcricao no dispositivo",
        body: "Grave fala no iPhone ou iPad e obtenha transcricoes pesquisaveis sem enviar audio para um servidor.",
      },
      {
        title: "Exportacao Markdown",
        body: "Gere notas Markdown limpas com YAML frontmatter para Obsidian, Logseq, Notion ou qualquer fluxo de notas.",
      },
      {
        title: "Grave de qualquer lugar",
        body: "Comece pelo iPhone, iPad, Apple Watch, Siri, Atalhos, Central de Controle, Botao de Acao ou controles de Live Activity.",
      },
      {
        title: "Audio espacial e sem perdas",
        body: "Escolha gravacoes compactas, Apple Lossless, estereo ou Spatial Audio em iPhones compativeis.",
      },
    ],
    notesKicker: "Feito para sistemas de notas",
    notesTitle: "Arquivos Markdown que funcionam como notas reais.",
    notesBody:
      "Personalize frontmatter, inclua o texto da transcricao, vincule audio e salve gravacoes no app ou em uma pasta como o iCloud Drive.",
    searchKicker: "Encontre o que voce disse",
    searchTitle: "Pesquise gravacoes por transcricao, titulo ou lugar.",
    searchBody:
      "Navegue pela biblioteca de gravacoes, abra momentos exatos da transcricao ou use o mapa quando o contexto de localizacao importar.",
    faqKicker: "Perguntas",
    faqTitle: "Notas de voz privadas e pesquisaveis para iOS e Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funciona com Obsidian?",
        answer:
          "Sim. Ele exporta arquivos Markdown com YAML frontmatter personalizavel, para que as gravacoes se encaixem no Obsidian, Logseq, Notion ou em uma pasta comum.",
      },
      {
        question: "A transcricao e privada?",
        answer:
          "Transcricao e titulos inteligentes rodam no dispositivo. Suas gravacoes e transcricoes ficam no iPhone ou iPad, a menos que voce escolha exportar ou compartilhar.",
      },
      {
        question: "Markdown Voice Memos e um app iOS?",
        answer:
          "Sim. Markdown Voice Memos foi criado para iPhone e iPad, com suporte a gravacao e reproducao no Apple Watch.",
      },
      {
        question: "Posso gravar pelo Apple Watch?",
        answer:
          "Sim. Voce pode gravar e reproduzir pelo Apple Watch, e as gravacoes sincronizam com o app do iPhone.",
      },
    ],
    finalCta: "Transforme memos de voz em notas Markdown.",
    finalButton: "Obter Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "pt-PT": {
    lang: "pt-PT",
    ogLocale: "pt_PT",
    title: "Markdown Voice Memos | Gravador de voz iOS com transcricao no dispositivo",
    description:
      "Markdown Voice Memos e um gravador de voz para iPhone, iPad e Apple Watch que transcreve no dispositivo e exporta notas Markdown limpas para Obsidian, Logseq, Notion e iCloud Drive.",
    ogDescription:
      "Transforme gravacoes de iPhone, iPad e Apple Watch em notas Markdown privadas e pesquisaveis.",
    keywords: commonKeywords,
    heroKicker: "Gravador de voz iOS para notas Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Grave audio no iPhone, iPad ou Apple Watch, transcreva-o no dispositivo e transforme cada memo numa nota Markdown limpa.",
    downloadCta: "Descarregar na App Store",
    workflowCta: "Ver fluxo",
    workflowKicker: "Da gravacao as notas",
    workflowTitle: "Capture a ideia. Guarde a transcricao. Exporte a nota.",
    features: [
      {
        title: "Transcricao no dispositivo",
        body: "Grave fala no iPhone ou iPad e obtenha transcricoes pesquisaveis sem enviar audio para um servidor.",
      },
      {
        title: "Exportacao Markdown",
        body: "Gere notas Markdown limpas com YAML frontmatter para Obsidian, Logseq, Notion ou qualquer fluxo de notas.",
      },
      {
        title: "Grave de qualquer lugar",
        body: "Comece pelo iPhone, iPad, Apple Watch, Siri, Atalhos, Central de Controlo, Botao de Acao ou controlos de Live Activity.",
      },
      {
        title: "Audio espacial e sem perdas",
        body: "Escolha gravacoes compactas, Apple Lossless, estereo ou Spatial Audio em iPhones compativeis.",
      },
    ],
    notesKicker: "Criado para sistemas de notas",
    notesTitle: "Ficheiros Markdown que funcionam como notas reais.",
    notesBody:
      "Personalize frontmatter, inclua o texto da transcricao, ligue o audio e guarde gravacoes na app ou numa pasta como iCloud Drive.",
    searchKicker: "Encontre o que disse",
    searchTitle: "Pesquise gravacoes por transcricao, titulo ou local.",
    searchBody:
      "Navegue pela biblioteca de gravacoes, abra momentos exatos da transcricao ou use o mapa quando o contexto de localizacao for importante.",
    faqKicker: "Perguntas",
    faqTitle: "Notas de voz privadas e pesquisaveis para iOS e Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos funciona com Obsidian?",
        answer:
          "Sim. Exporta ficheiros Markdown com YAML frontmatter personalizavel, para que as gravacoes se ajustem ao Obsidian, Logseq, Notion ou a uma pasta comum.",
      },
      {
        question: "A transcricao e privada?",
        answer:
          "A transcricao e os titulos inteligentes correm no dispositivo. As suas gravacoes e transcricoes ficam no iPhone ou iPad, a menos que as exporte ou partilhe.",
      },
      {
        question: "Markdown Voice Memos e uma app iOS?",
        answer:
          "Sim. Markdown Voice Memos foi criada para iPhone e iPad, com suporte de gravacao e reproducao no Apple Watch.",
      },
      {
        question: "Posso gravar pelo Apple Watch?",
        answer:
          "Sim. Pode gravar e reproduzir pelo Apple Watch, e as gravacoes sincronizam com a app do iPhone.",
      },
    ],
    finalCta: "Transforme memos de voz em notas Markdown.",
    finalButton: "Obter Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  ro: {
    lang: "ro",
    ogLocale: "ro_RO",
    title: "Markdown Voice Memos | Reportofon iOS cu transcriere pe dispozitiv",
    description:
      "Markdown Voice Memos este un reportofon iOS pentru iPhone, iPad si Apple Watch care transcrie vorbirea pe dispozitiv si exporta note Markdown curate pentru Obsidian, Logseq, Notion si iCloud Drive.",
    ogDescription:
      "Transforma inregistrarile de pe iPhone, iPad si Apple Watch in note Markdown private si cautabile.",
    keywords: commonKeywords,
    heroKicker: "Reportofon iOS pentru note Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Inregistreaza audio pe iPhone, iPad sau Apple Watch, transcrie pe dispozitiv si transforma fiecare memo intr-o nota Markdown curata.",
    downloadCta: "Descarca din App Store",
    workflowCta: "Vezi fluxul",
    workflowKicker: "De la inregistrare la note",
    workflowTitle: "Captureaza ideea. Pastreaza transcrierea. Exporta nota.",
    features: [
      {
        title: "Transcriere pe dispozitiv",
        body: "Inregistreaza vorbire pe iPhone sau iPad si obtine transcrieri cautabile fara a trimite audio catre un server.",
      },
      {
        title: "Export Markdown",
        body: "Genereaza note Markdown curate cu YAML frontmatter pentru Obsidian, Logseq, Notion sau orice flux de note.",
      },
      {
        title: "Inregistreaza de oriunde",
        body: "Porneste de pe iPhone, iPad, Apple Watch, Siri, Scurtaturi, Centrul de control, butonul Actiune sau controalele Live Activity.",
      },
      {
        title: "Audio spatial si fara pierderi",
        body: "Alege inregistrari compacte, Apple Lossless, stereo sau Spatial Audio pe iPhone-uri compatibile.",
      },
    ],
    notesKicker: "Creat pentru sisteme de note",
    notesTitle: "Fisiere Markdown care se comporta ca note reale.",
    notesBody:
      "Personalizeaza frontmatter, include textul transcrierii, leaga audio si salveaza inregistrari in aplicatie sau intr-un folder precum iCloud Drive.",
    searchKicker: "Gaseste ce ai spus",
    searchTitle: "Cauta inregistrari dupa transcriere, titlu sau loc.",
    searchBody:
      "Rasfoieste biblioteca de inregistrari, deschide momente exacte din transcriere sau foloseste harta cand conteaza locatia.",
    faqKicker: "Intrebari",
    faqTitle: "Note vocale private si cautabile pentru iOS si Apple Watch.",
    faqs: [
      {
        question: "Functioneaza Markdown Voice Memos cu Obsidian?",
        answer:
          "Da. Exporta fisiere Markdown cu YAML frontmatter personalizabil, astfel incat inregistrarile se potrivesc in Obsidian, Logseq, Notion sau intr-un folder simplu.",
      },
      {
        question: "Transcrierea este privata?",
        answer:
          "Transcrierea si titlurile inteligente ruleaza pe dispozitiv. Inregistrarile si transcrierile raman pe iPhone sau iPad, cu exceptia cazului in care le exporti sau le partajezi.",
      },
      {
        question: "Markdown Voice Memos este o aplicatie iOS?",
        answer:
          "Da. Markdown Voice Memos este creat pentru iPhone si iPad, cu suport de inregistrare si redare pe Apple Watch.",
      },
      {
        question: "Pot inregistra de pe Apple Watch?",
        answer:
          "Da. Poti inregistra si reda de pe Apple Watch, iar inregistrarile se sincronizeaza cu aplicatia iPhone.",
      },
    ],
    finalCta: "Transforma memo-urile vocale in note Markdown.",
    finalButton: "Obtine Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  ru: {
    lang: "ru",
    ogLocale: "ru_RU",
    title: "Markdown Voice Memos | Диктофон iOS с расшифровкой на устройстве",
    description:
      "Markdown Voice Memos — диктофон для iPhone, iPad и Apple Watch, который расшифровывает речь на устройстве и экспортирует чистые Markdown-заметки для Obsidian, Logseq, Notion и iCloud Drive.",
    ogDescription:
      "Превращайте записи с iPhone, iPad и Apple Watch в приватные Markdown-заметки с поиском.",
    keywords: commonKeywords,
    heroKicker: "Диктофон iOS для Markdown-заметок",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Записывайте звук на iPhone, iPad или Apple Watch, расшифровывайте его на устройстве и превращайте каждую запись в чистую Markdown-заметку.",
    downloadCta: "Скачать в App Store",
    workflowCta: "Посмотреть процесс",
    workflowKicker: "От записи к заметкам",
    workflowTitle: "Зафиксируйте мысль. Сохраните текст. Экспортируйте заметку.",
    features: [
      {
        title: "Расшифровка на устройстве",
        body: "Записывайте речь на iPhone или iPad и получайте текст с поиском, не отправляя аудио на сервер.",
      },
      {
        title: "Экспорт Markdown",
        body: "Создавайте чистые Markdown-заметки с YAML frontmatter для Obsidian, Logseq, Notion или любого рабочего процесса заметок.",
      },
      {
        title: "Запись откуда угодно",
        body: "Запускайте с iPhone, iPad, Apple Watch, Siri, Команд, Пункта управления, кнопки действия или элементов Live Activity.",
      },
      {
        title: "Пространственный и lossless-звук",
        body: "Выбирайте компактные записи, Apple Lossless, стерео или Spatial Audio на поддерживаемых iPhone.",
      },
    ],
    notesKicker: "Создано для систем заметок",
    notesTitle: "Markdown-файлы, которые ведут себя как настоящие заметки.",
    notesBody:
      "Настраивайте frontmatter, включайте текст расшифровки, связывайте аудио и сохраняйте записи в приложении или папке, например iCloud Drive.",
    searchKicker: "Найдите то, что сказали",
    searchTitle: "Ищите записи по тексту, названию или месту.",
    searchBody:
      "Просматривайте библиотеку записей, открывайте точные моменты расшифровки или используйте карту, когда важен контекст места.",
    faqKicker: "Вопросы",
    faqTitle: "Приватные голосовые заметки с поиском для iOS и Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos работает с Obsidian?",
        answer:
          "Да. Приложение экспортирует Markdown-файлы с настраиваемым YAML frontmatter, поэтому записи подходят для Obsidian, Logseq, Notion или обычной папки.",
      },
      {
        question: "Расшифровка приватна?",
        answer:
          "Расшифровка и умные заголовки работают на устройстве. Записи и тексты остаются на iPhone или iPad, если вы не экспортируете или не делитесь ими.",
      },
      {
        question: "Markdown Voice Memos — это приложение iOS?",
        answer:
          "Да. Markdown Voice Memos создано для iPhone и iPad, с поддержкой записи и воспроизведения на Apple Watch.",
      },
      {
        question: "Можно записывать с Apple Watch?",
        answer:
          "Да. Вы можете записывать и воспроизводить с Apple Watch, а записи синхронизируются с приложением iPhone.",
      },
    ],
    finalCta: "Превратите голосовые memo в Markdown-заметки.",
    finalButton: "Получить Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  sk: {
    lang: "sk",
    ogLocale: "sk_SK",
    title: "Markdown Voice Memos | iOS diktafon s prepisom v zariadeni",
    description:
      "Markdown Voice Memos je iOS diktafon pre iPhone, iPad a Apple Watch, ktory prepisuje rec v zariadeni a exportuje ciste Markdown poznamky pre Obsidian, Logseq, Notion a iCloud Drive.",
    ogDescription:
      "Premente nahravky z iPhonu, iPadu a Apple Watch na sukromne, prehladavatelne Markdown poznamky.",
    keywords: commonKeywords,
    heroKicker: "iOS diktafon pre Markdown poznamky",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Nahravajte zvuk na iPhone, iPad alebo Apple Watch, prepisujte ho v zariadeni a kazde memo zmente na cistu Markdown poznamku.",
    downloadCta: "Stiahnut z App Storu",
    workflowCta: "Zobrazit postup",
    workflowKicker: "Od nahravky k poznamkam",
    workflowTitle: "Zachytte myslienku. Uchovajte prepis. Exportujte poznamku.",
    features: [
      {
        title: "Prepis v zariadeni",
        body: "Nahravajte rec na iPhone alebo iPad a ziskajte prehladavatelne prepisy bez odosielania zvuku na server.",
      },
      {
        title: "Export Markdown",
        body: "Vytvarajte ciste Markdown poznamky s YAML frontmatterom pre Obsidian, Logseq, Notion alebo lubovolny poznamkovy system.",
      },
      {
        title: "Nahravanie odkialkolvek",
        body: "Spustite nahravanie z iPhonu, iPadu, Apple Watch, Siri, Skratiek, Ovladacieho centra, Akcneho tlacidla alebo Live Activity.",
      },
      {
        title: "Priestorovy a bezstratovy zvuk",
        body: "Vyberte kompaktne nahravky, Apple Lossless, stereo alebo Spatial Audio na podporovanych iPhoneoch.",
      },
    ],
    notesKicker: "Postavene pre poznamkove systemy",
    notesTitle: "Markdown subory, ktore sa spravaju ako skutocne poznamky.",
    notesBody:
      "Prisposobte frontmatter, zahrnte text prepisu, prepojte zvuk a ukladajte nahravky v aplikacii alebo priecinku ako iCloud Drive.",
    searchKicker: "Najdite, co ste povedali",
    searchTitle: "Hladajte nahravky podla prepisu, nazvu alebo miesta.",
    searchBody:
      "Prechadzajte kniznicu nahravok, otvarajte presne momenty prepisu alebo pouzite mapu, ked zalezi na polohe.",
    faqKicker: "Otazky",
    faqTitle: "Sukromne, prehladavatelne hlasove poznamky pre iOS a Apple Watch.",
    faqs: [
      {
        question: "Funguje Markdown Voice Memos s Obsidianom?",
        answer:
          "Ano. Exportuje subory Markdown s prisposobitelnym YAML frontmatterom, takze nahravky zapadnu do Obsidianu, Logseku, Notionu alebo bezneho priecinka.",
      },
      {
        question: "Je prepis sukromny?",
        answer:
          "Prepis aj mudre nazvy bezia v zariadeni. Nahravky a prepisy zostavaju na iPhone alebo iPade, pokial ich sami neexportujete alebo nezdielete.",
      },
      {
        question: "Je Markdown Voice Memos aplikacia pre iOS?",
        answer:
          "Ano. Markdown Voice Memos je pre iPhone a iPad a podporuje nahravanie aj prehravanie na Apple Watch.",
      },
      {
        question: "Mozem nahravat z Apple Watch?",
        answer:
          "Ano. Z Apple Watch mozete nahravat aj prehravat a nahravky sa synchronizuju s aplikaciou pre iPhone.",
      },
    ],
    finalCta: "Premente hlasove memo na Markdown poznamky.",
    finalButton: "Ziskat Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  sv: {
    lang: "sv",
    ogLocale: "sv_SE",
    title: "Markdown Voice Memos | iOS-rostdiktafon med transkribering pa enheten",
    description:
      "Markdown Voice Memos ar en iOS-rostdiktafon for iPhone, iPad och Apple Watch som transkriberar tal pa enheten och exporterar rena Markdown-anteckningar for Obsidian, Logseq, Notion och iCloud Drive.",
    ogDescription:
      "Gor inspelningar fran iPhone, iPad och Apple Watch till privata, sokbara Markdown-anteckningar.",
    keywords: commonKeywords,
    heroKicker: "iOS-rostdiktafon for Markdown-anteckningar",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Spela in ljud pa iPhone, iPad eller Apple Watch, transkribera pa enheten och gor varje memo till en ren Markdown-anteckning.",
    downloadCta: "Hamta pa App Store",
    workflowCta: "Se arbetsflode",
    workflowKicker: "Fran inspelning till anteckningar",
    workflowTitle: "Fanga tanken. Bevara transkriptionen. Exportera anteckningen.",
    features: [
      {
        title: "Transkribering pa enheten",
        body: "Spela in tal pa iPhone eller iPad och fa sokbara transkriptioner utan att skicka ljud till en server.",
      },
      {
        title: "Markdown-export",
        body: "Skapa rena Markdown-anteckningar med YAML-frontmatter for Obsidian, Logseq, Notion eller valfritt anteckningsflode.",
      },
      {
        title: "Spela in var som helst",
        body: "Starta fran iPhone, iPad, Apple Watch, Siri, Genvagar, Kontrollcenter, aktionsknappen eller Live Activity-kontroller.",
      },
      {
        title: "Rumsligt och forlustfritt ljud",
        body: "Valj kompakta inspelningar, Apple Lossless, stereo eller Spatial Audio pa iPhone-modeller som stods.",
      },
    ],
    notesKicker: "Byggt for anteckningssystem",
    notesTitle: "Markdown-filer som beter sig som riktiga anteckningar.",
    notesBody:
      "Anpassa frontmatter, inkludera transkription, lanka ljud och spara inspelningar i appen eller i en mapp som iCloud Drive.",
    searchKicker: "Hitta det du sade",
    searchTitle: "Sok inspelningar efter transkription, titel eller plats.",
    searchBody:
      "Bladdra i inspelningsbiblioteket, oppna exakta transkriptionsogonblick eller anvand kartvyn nar platskontext spelar roll.",
    faqKicker: "Fragor",
    faqTitle: "Privata, sokbara rostanteckningar for iOS och Apple Watch.",
    faqs: [
      {
        question: "Fungerar Markdown Voice Memos med Obsidian?",
        answer:
          "Ja. Det exporterar Markdown-filer med anpassningsbart YAML-frontmatter, sa inspelningar passar Obsidian, Logseq, Notion eller en vanlig mapp.",
      },
      {
        question: "Ar transkriberingen privat?",
        answer:
          "Transkribering och smarta titlar kors pa enheten. Dina inspelningar och transkriptioner stannar pa iPhone eller iPad om du inte exporterar eller delar dem.",
      },
      {
        question: "Ar Markdown Voice Memos en iOS-app?",
        answer:
          "Ja. Markdown Voice Memos ar byggd for iPhone och iPad, med stod for inspelning och uppspelning pa Apple Watch.",
      },
      {
        question: "Kan jag spela in fran Apple Watch?",
        answer:
          "Ja. Du kan spela in och spela upp fran Apple Watch, och inspelningar synkas med iPhone-appen.",
      },
    ],
    finalCta: "Gor rostmemon till Markdown-anteckningar.",
    finalButton: "Hamta Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  th: {
    lang: "th",
    ogLocale: "th_TH",
    title: "Markdown Voice Memos | เครื่องบันทึกเสียง iOS พร้อมถอดความบนอุปกรณ์",
    description:
      "Markdown Voice Memos คือเครื่องบันทึกเสียง iOS สำหรับ iPhone, iPad และ Apple Watch ที่ถอดเสียงบนอุปกรณ์และส่งออกโน้ต Markdown ที่สะอาดสำหรับ Obsidian, Logseq, Notion และ iCloud Drive",
    ogDescription:
      "เปลี่ยนเสียงบันทึกจาก iPhone, iPad และ Apple Watch ให้เป็นโน้ต Markdown ส่วนตัวที่ค้นหาได้",
    keywords: commonKeywords,
    heroKicker: "เครื่องบันทึกเสียง iOS สำหรับโน้ต Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "บันทึกเสียงบน iPhone, iPad หรือ Apple Watch ถอดความบนอุปกรณ์ แล้วเปลี่ยนทุก memo ให้เป็นโน้ต Markdown ที่สะอาด",
    downloadCta: "ดาวน์โหลดบน App Store",
    workflowCta: "ดูเวิร์กโฟลว์",
    workflowKicker: "จากการบันทึกสู่โน้ต",
    workflowTitle: "เก็บไอเดียไว้ เก็บข้อความถอดเสียงไว้ ส่งออกเป็นโน้ต",
    features: [
      {
        title: "ถอดความบนอุปกรณ์",
        body: "บันทึกเสียงพูดบน iPhone หรือ iPad และรับข้อความถอดเสียงที่ค้นหาได้โดยไม่ส่งเสียงไปยังเซิร์ฟเวอร์",
      },
      {
        title: "ส่งออก Markdown",
        body: "สร้างโน้ต Markdown ที่สะอาดพร้อม YAML frontmatter สำหรับ Obsidian, Logseq, Notion หรือเวิร์กโฟลว์โน้ตใดๆ",
      },
      {
        title: "บันทึกได้จากทุกที่",
        body: "เริ่มจาก iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, Action Button หรือปุ่มควบคุม Live Activity",
      },
      {
        title: "เสียง Spatial และ lossless",
        body: "เลือกการบันทึกแบบกะทัดรัด, Apple Lossless, stereo หรือ Spatial Audio บน iPhone ที่รองรับ",
      },
    ],
    notesKicker: "สร้างมาเพื่อระบบโน้ต",
    notesTitle: "ไฟล์ Markdown ที่ทำงานเหมือนโน้ตจริง",
    notesBody:
      "ปรับแต่ง frontmatter ใส่ข้อความถอดเสียง ลิงก์เสียง และบันทึกไฟล์ในแอปหรือโฟลเดอร์อย่าง iCloud Drive",
    searchKicker: "ค้นหาสิ่งที่คุณพูด",
    searchTitle: "ค้นหาเสียงบันทึกตามข้อความถอดเสียง ชื่อ หรือสถานที่",
    searchBody:
      "เรียกดูคลังเสียงบันทึก เปิดช่วงเวลาที่ต้องการในข้อความถอดเสียง หรือใช้มุมมองแผนที่เมื่อบริบทสถานที่สำคัญ",
    faqKicker: "คำถาม",
    faqTitle: "โน้ตเสียงส่วนตัวที่ค้นหาได้สำหรับ iOS และ Apple Watch",
    faqs: [
      {
        question: "Markdown Voice Memos ใช้กับ Obsidian ได้ไหม?",
        answer:
          "ได้ แอปส่งออกไฟล์ Markdown พร้อม YAML frontmatter ที่ปรับแต่งได้ จึงใช้กับ Obsidian, Logseq, Notion หรือโฟลเดอร์ธรรมดาได้",
      },
      {
        question: "การถอดความเป็นส่วนตัวไหม?",
        answer:
          "การถอดความและชื่ออัจฉริยะทำงานบนอุปกรณ์ เสียงบันทึกและข้อความถอดเสียงจะอยู่บน iPhone หรือ iPad เว้นแต่คุณเลือกส่งออกหรือแชร์",
      },
      {
        question: "Markdown Voice Memos เป็นแอป iOS หรือไม่?",
        answer:
          "ใช่ Markdown Voice Memos สร้างสำหรับ iPhone และ iPad พร้อมรองรับการบันทึกและเล่นบน Apple Watch",
      },
      {
        question: "บันทึกจาก Apple Watch ได้ไหม?",
        answer:
          "ได้ คุณสามารถบันทึกและเล่นจาก Apple Watch และเสียงบันทึกจะซิงค์กับแอป iPhone",
      },
    ],
    finalCta: "เปลี่ยน voice memos ให้เป็นโน้ต Markdown",
    finalButton: "รับ Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  tr: {
    lang: "tr",
    ogLocale: "tr_TR",
    title: "Markdown Voice Memos | Cihazda transkripsiyonlu iOS ses kaydedici",
    description:
      "Markdown Voice Memos, iPhone, iPad ve Apple Watch icin bir iOS ses kaydedicidir; konusmayi cihazda metne cevirir ve Obsidian, Logseq, Notion ve iCloud Drive icin temiz Markdown notlari disa aktarir.",
    ogDescription:
      "iPhone, iPad ve Apple Watch kayitlarini ozel, aranabilir Markdown notlarina donusturun.",
    keywords: commonKeywords,
    heroKicker: "Markdown notlari icin iOS ses kaydedici",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "iPhone, iPad veya Apple Watch'ta ses kaydedin, cihazda metne cevirin ve her memoyu temiz bir Markdown notuna donusturun.",
    downloadCta: "App Store'dan indir",
    workflowCta: "Is akisini gor",
    workflowKicker: "Kayittan nota",
    workflowTitle: "Fikri yakala. Transkripti sakla. Notu disa aktar.",
    features: [
      {
        title: "Cihazda transkripsiyon",
        body: "iPhone veya iPad'de konusma kaydedin ve sesi sunucuya gondermeden aranabilir transkriptler alin.",
      },
      {
        title: "Markdown disa aktarimi",
        body: "Obsidian, Logseq, Notion veya herhangi bir not akisi icin YAML frontmatter iceren temiz Markdown notlari olusturun.",
      },
      {
        title: "Her yerden kaydet",
        body: "iPhone, iPad, Apple Watch, Siri, Kestirmeler, Denetim Merkezi, Eylem Dugmesi veya Live Activity kontrollerinden baslatin.",
      },
      {
        title: "Uzamsal ve kayipsiz ses",
        body: "Desteklenen iPhone'larda kompakt kayit, Apple Lossless, stereo veya Spatial Audio secin.",
      },
    ],
    notesKicker: "Not sistemleri icin tasarlandi",
    notesTitle: "Gercek notlar gibi davranan Markdown dosyalari.",
    notesBody:
      "Frontmatter'i ozellestirin, transkript metnini ekleyin, sesi baglayin ve kayitlari uygulamada veya iCloud Drive gibi bir klasorde saklayin.",
    searchKicker: "Ne soyledigini bul",
    searchTitle: "Kayitlari transkript, baslik veya yere gore ara.",
    searchBody:
      "Kayit kutuphanesine goz atin, transkriptteki kesin anlari acin veya konum onemliyse harita gorunumunu kullanin.",
    faqKicker: "Sorular",
    faqTitle: "iOS ve Apple Watch icin ozel, aranabilir ses notlari.",
    faqs: [
      {
        question: "Markdown Voice Memos Obsidian ile calisir mi?",
        answer:
          "Evet. Ozellestirilebilir YAML frontmatter iceren Markdown dosyalari disa aktarir; kayitlar Obsidian, Logseq, Notion veya normal klasor akisiniza uyar.",
      },
      {
        question: "Transkripsiyon ozel mi?",
        answer:
          "Transkripsiyon ve akilli basliklar cihazda calisir. Kayitlar ve transkriptler, siz disa aktarmadikca veya paylasmadikca iPhone ya da iPad'inizde kalir.",
      },
      {
        question: "Markdown Voice Memos bir iOS uygulamasi mi?",
        answer:
          "Evet. Markdown Voice Memos iPhone ve iPad icin yapildi; Apple Watch kayit ve oynatma destegi vardir.",
      },
      {
        question: "Apple Watch'tan kayit yapabilir miyim?",
        answer:
          "Evet. Apple Watch'tan kayit yapabilir ve oynatabilirsiniz; kayitlar iPhone uygulamasiyla senkronize olur.",
      },
    ],
    finalCta: "Ses memolarini Markdown notlarina donustur.",
    finalButton: "Markdown Voice Memos'u al",
    imageAlts: en.imageAlts,
  },
  uk: {
    lang: "uk",
    ogLocale: "uk_UA",
    title: "Markdown Voice Memos | Диктофон iOS з транскрипцією на пристрої",
    description:
      "Markdown Voice Memos — диктофон для iPhone, iPad і Apple Watch, який транскрибує мовлення на пристрої та експортує чисті Markdown-нотатки для Obsidian, Logseq, Notion і iCloud Drive.",
    ogDescription:
      "Перетворюйте записи з iPhone, iPad і Apple Watch на приватні Markdown-нотатки з пошуком.",
    keywords: commonKeywords,
    heroKicker: "Диктофон iOS для Markdown-нотаток",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Записуйте аудіо на iPhone, iPad або Apple Watch, транскрибуйте його на пристрої та перетворюйте кожен memo на чисту Markdown-нотатку.",
    downloadCta: "Завантажити в App Store",
    workflowCta: "Переглянути процес",
    workflowKicker: "Від запису до нотаток",
    workflowTitle: "Зафіксуйте думку. Збережіть транскрипт. Експортуйте нотатку.",
    features: [
      {
        title: "Транскрипція на пристрої",
        body: "Записуйте мовлення на iPhone або iPad і отримуйте текст із пошуком, не надсилаючи аудіо на сервер.",
      },
      {
        title: "Експорт Markdown",
        body: "Створюйте чисті Markdown-нотатки з YAML frontmatter для Obsidian, Logseq, Notion або будь-якого робочого процесу нотаток.",
      },
      {
        title: "Запис звідусіль",
        body: "Запускайте з iPhone, iPad, Apple Watch, Siri, Команд, Пункта керування, кнопки дії або елементів Live Activity.",
      },
      {
        title: "Просторовий і lossless-звук",
        body: "Обирайте компактні записи, Apple Lossless, стерео або Spatial Audio на підтримуваних iPhone.",
      },
    ],
    notesKicker: "Створено для систем нотаток",
    notesTitle: "Markdown-файли, що поводяться як справжні нотатки.",
    notesBody:
      "Налаштовуйте frontmatter, додавайте текст транскрипції, пов'язуйте аудіо та зберігайте записи в застосунку або папці, наприклад iCloud Drive.",
    searchKicker: "Знайдіть те, що сказали",
    searchTitle: "Шукайте записи за транскриптом, назвою або місцем.",
    searchBody:
      "Переглядайте бібліотеку записів, відкривайте точні моменти транскрипції або використовуйте карту, коли важливий контекст місця.",
    faqKicker: "Запитання",
    faqTitle: "Приватні голосові нотатки з пошуком для iOS і Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos працює з Obsidian?",
        answer:
          "Так. Застосунок експортує Markdown-файли з налаштовуваним YAML frontmatter, тому записи підходять для Obsidian, Logseq, Notion або звичайної папки.",
      },
      {
        question: "Транскрипція приватна?",
        answer:
          "Транскрипція та розумні заголовки працюють на пристрої. Записи й тексти залишаються на iPhone або iPad, якщо ви не експортуєте чи не ділитеся ними.",
      },
      {
        question: "Markdown Voice Memos — це застосунок iOS?",
        answer:
          "Так. Markdown Voice Memos створено для iPhone і iPad, із підтримкою запису й відтворення на Apple Watch.",
      },
      {
        question: "Можна записувати з Apple Watch?",
        answer:
          "Так. Ви можете записувати й відтворювати з Apple Watch, а записи синхронізуються із застосунком iPhone.",
      },
    ],
    finalCta: "Перетворіть голосові memo на Markdown-нотатки.",
    finalButton: "Отримати Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  vi: {
    lang: "vi",
    ogLocale: "vi_VN",
    title: "Markdown Voice Memos | Trinh ghi am iOS voi phien am tren thiet bi",
    description:
      "Markdown Voice Memos la trinh ghi am iOS cho iPhone, iPad va Apple Watch, phien am giong noi tren thiet bi va xuat ghi chu Markdown sach cho Obsidian, Logseq, Notion va iCloud Drive.",
    ogDescription:
      "Bien ban ghi tu iPhone, iPad va Apple Watch thanh ghi chu Markdown rieng tu, co the tim kiem.",
    keywords: commonKeywords,
    heroKicker: "Trinh ghi am iOS cho ghi chu Markdown",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "Ghi am tren iPhone, iPad hoac Apple Watch, phien am tren thiet bi va bien moi memo thanh mot ghi chu Markdown sach.",
    downloadCta: "Tai ve tren App Store",
    workflowCta: "Xem quy trinh",
    workflowKicker: "Tu ban ghi den ghi chu",
    workflowTitle: "Ghi lai y tuong. Giu ban phien am. Xuat ghi chu.",
    features: [
      {
        title: "Phien am tren thiet bi",
        body: "Ghi am loi noi tren iPhone hoac iPad va nhan ban phien am co the tim kiem ma khong gui audio len may chu.",
      },
      {
        title: "Xuat Markdown",
        body: "Tao ghi chu Markdown sach voi YAML frontmatter cho Obsidian, Logseq, Notion hoac bat ky quy trinh ghi chu nao.",
      },
      {
        title: "Ghi am tu moi noi",
        body: "Bat dau tu iPhone, iPad, Apple Watch, Siri, Shortcuts, Control Center, Action Button hoac dieu khien Live Activity.",
      },
      {
        title: "Audio khong gian va lossless",
        body: "Chon ban ghi gon nhe, Apple Lossless, stereo hoac Spatial Audio tren iPhone duoc ho tro.",
      },
    ],
    notesKicker: "Duoc tao cho he thong ghi chu",
    notesTitle: "Tep Markdown hoat dong nhu ghi chu thuc su.",
    notesBody:
      "Tuy chinh frontmatter, them van ban phien am, lien ket audio va luu ban ghi trong app hoac thu muc nhu iCloud Drive.",
    searchKicker: "Tim dieu ban da noi",
    searchTitle: "Tim ban ghi theo phien am, tieu de hoac dia diem.",
    searchBody:
      "Duyet thu vien ban ghi, mo dung khoanh khac trong ban phien am hoac dung ban do khi ngu canh vi tri quan trong.",
    faqKicker: "Cau hoi",
    faqTitle: "Ghi chu giong noi rieng tu, co the tim kiem cho iOS va Apple Watch.",
    faqs: [
      {
        question: "Markdown Voice Memos co dung voi Obsidian khong?",
        answer:
          "Co. Ung dung xuat tep Markdown voi YAML frontmatter co the tuy chinh, nen ban ghi phu hop voi Obsidian, Logseq, Notion hoac mot thu muc thong thuong.",
      },
      {
        question: "Phien am co rieng tu khong?",
        answer:
          "Phien am va tieu de thong minh chay tren thiet bi. Ban ghi va ban phien am o lai tren iPhone hoac iPad tru khi ban xuat hoac chia se.",
      },
      {
        question: "Markdown Voice Memos co phai app iOS khong?",
        answer:
          "Co. Markdown Voice Memos duoc tao cho iPhone va iPad, co ho tro ghi va phat tren Apple Watch.",
      },
      {
        question: "Toi co the ghi am tu Apple Watch khong?",
        answer:
          "Co. Ban co the ghi va phat tu Apple Watch, va ban ghi se dong bo voi app iPhone.",
      },
    ],
    finalCta: "Bien voice memos thanh ghi chu Markdown.",
    finalButton: "Tai Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "zh-Hans": {
    lang: "zh-Hans",
    ogLocale: "zh_CN",
    title: "Markdown Voice Memos | 支持本机转写的 iOS 录音机",
    description:
      "Markdown Voice Memos 是适用于 iPhone、iPad 和 Apple Watch 的 iOS 录音应用，可在设备上转写语音，并为 Obsidian、Logseq、Notion 和 iCloud Drive 导出干净的 Markdown 笔记。",
    ogDescription:
      "将 iPhone、iPad 和 Apple Watch 录音变成私密、可搜索的 Markdown 笔记。",
    keywords: commonKeywords,
    heroKicker: "用于 Markdown 笔记的 iOS 录音机",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "在 iPhone、iPad 或 Apple Watch 上录音，在设备上转写，并把每条 memo 变成干净的 Markdown 笔记。",
    downloadCta: "在 App Store 下载",
    workflowCta: "查看流程",
    workflowKicker: "从录音到笔记",
    workflowTitle: "捕捉想法。保留转写。导出笔记。",
    features: [
      {
        title: "设备端转写",
        body: "在 iPhone 或 iPad 上录制语音，获得可搜索的转写文本，无需把音频发送到服务器。",
      },
      {
        title: "Markdown 导出",
        body: "为 Obsidian、Logseq、Notion 或任何笔记流程生成带 YAML frontmatter 的干净 Markdown 笔记。",
      },
      {
        title: "随处录音",
        body: "可从 iPhone、iPad、Apple Watch、Siri、快捷指令、控制中心、操作按钮或 Live Activity 控件开始。",
      },
      {
        title: "空间音频与无损音频",
        body: "在支持的 iPhone 上选择紧凑录音、Apple Lossless、立体声或 Spatial Audio。",
      },
    ],
    notesKicker: "为笔记系统打造",
    notesTitle: "像真实笔记一样工作的 Markdown 文件。",
    notesBody:
      "自定义 frontmatter，包含转写文本，链接音频，并将录音保存在应用内或 iCloud Drive 等文件夹中。",
    searchKicker: "找到你说过的话",
    searchTitle: "按转写、标题或地点搜索录音。",
    searchBody:
      "浏览录音库，打开转写中的精确时刻，或在位置上下文重要时使用地图视图。",
    faqKicker: "问题",
    faqTitle: "适用于 iOS 和 Apple Watch 的私密、可搜索语音笔记。",
    faqs: [
      {
        question: "Markdown Voice Memos 可以配合 Obsidian 使用吗？",
        answer:
          "可以。它会导出带可自定义 YAML frontmatter 的 Markdown 文件，因此录音可适配 Obsidian、Logseq、Notion 或普通文件夹流程。",
      },
      {
        question: "转写是私密的吗？",
        answer:
          "转写和智能标题功能在设备上运行。除非你选择导出或分享，录音和转写会留在 iPhone 或 iPad 上。",
      },
      {
        question: "Markdown Voice Memos 是 iOS 应用吗？",
        answer:
          "是。Markdown Voice Memos 为 iPhone 和 iPad 构建，并支持 Apple Watch 录音和播放。",
      },
      {
        question: "可以从 Apple Watch 录音吗？",
        answer:
          "可以。你可以从 Apple Watch 录音和播放，录音会与 iPhone 应用同步。",
      },
    ],
    finalCta: "把语音 memo 变成 Markdown 笔记。",
    finalButton: "获取 Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
  "zh-Hant": {
    lang: "zh-Hant",
    ogLocale: "zh_TW",
    title: "Markdown Voice Memos | 支援裝置端轉寫的 iOS 錄音機",
    description:
      "Markdown Voice Memos 是適用於 iPhone、iPad 和 Apple Watch 的 iOS 錄音 App，可在裝置上轉寫語音，並為 Obsidian、Logseq、Notion 和 iCloud Drive 匯出乾淨的 Markdown 筆記。",
    ogDescription:
      "將 iPhone、iPad 和 Apple Watch 錄音變成私密、可搜尋的 Markdown 筆記。",
    keywords: commonKeywords,
    heroKicker: "用於 Markdown 筆記的 iOS 錄音機",
    heroTitle: "Markdown Voice Memos",
    heroLede:
      "在 iPhone、iPad 或 Apple Watch 上錄音，在裝置上轉寫，並把每則 memo 變成乾淨的 Markdown 筆記。",
    downloadCta: "在 App Store 下載",
    workflowCta: "查看流程",
    workflowKicker: "從錄音到筆記",
    workflowTitle: "捕捉想法。保留轉寫。匯出筆記。",
    features: [
      {
        title: "裝置端轉寫",
        body: "在 iPhone 或 iPad 上錄製語音，取得可搜尋的轉寫文字，無需將音訊傳送到伺服器。",
      },
      {
        title: "Markdown 匯出",
        body: "為 Obsidian、Logseq、Notion 或任何筆記流程產生帶 YAML frontmatter 的乾淨 Markdown 筆記。",
      },
      {
        title: "隨處錄音",
        body: "可從 iPhone、iPad、Apple Watch、Siri、捷徑、控制中心、動作按鈕或 Live Activity 控制項開始。",
      },
      {
        title: "空間音訊與無損音訊",
        body: "在支援的 iPhone 上選擇緊湊錄音、Apple Lossless、立體聲或 Spatial Audio。",
      },
    ],
    notesKicker: "為筆記系統打造",
    notesTitle: "像真實筆記一樣運作的 Markdown 檔案。",
    notesBody:
      "自訂 frontmatter，包含轉寫文字，連結音訊，並將錄音儲存在 App 內或 iCloud Drive 等資料夾中。",
    searchKicker: "找到你說過的話",
    searchTitle: "依轉寫、標題或地點搜尋錄音。",
    searchBody:
      "瀏覽錄音庫，開啟轉寫中的精確時刻，或在位置情境重要時使用地圖檢視。",
    faqKicker: "問題",
    faqTitle: "適用於 iOS 和 Apple Watch 的私密、可搜尋語音筆記。",
    faqs: [
      {
        question: "Markdown Voice Memos 可以搭配 Obsidian 使用嗎？",
        answer:
          "可以。它會匯出帶可自訂 YAML frontmatter 的 Markdown 檔案，因此錄音可適配 Obsidian、Logseq、Notion 或普通資料夾流程。",
      },
      {
        question: "轉寫是私密的嗎？",
        answer:
          "轉寫和智慧標題功能在裝置上執行。除非你選擇匯出或分享，錄音和轉寫會留在 iPhone 或 iPad 上。",
      },
      {
        question: "Markdown Voice Memos 是 iOS App 嗎？",
        answer:
          "是。Markdown Voice Memos 為 iPhone 和 iPad 打造，並支援 Apple Watch 錄音和播放。",
      },
      {
        question: "可以從 Apple Watch 錄音嗎？",
        answer:
          "可以。你可以從 Apple Watch 錄音和播放，錄音會與 iPhone App 同步。",
      },
    ],
    finalCta: "把語音 memo 變成 Markdown 筆記。",
    finalButton: "取得 Markdown Voice Memos",
    imageAlts: en.imageAlts,
  },
};

export const languageAlternates = Object.fromEntries([
  ["x-default", siteUrl],
  ["en-US", siteUrl],
  ...locales
    .filter((locale) => locale !== "en-US")
    .map((locale) => [locale, `${siteUrl}/${locale}`]),
]);

const localeContentFallbacks: Record<Locale, ContentLocale> = {
  "ar-SA": "ar",
  ca: "ca",
  cs: "cs",
  da: "da",
  "de-DE": "de",
  el: "el",
  "en-AU": "en",
  "en-CA": "en",
  "en-GB": "en",
  "en-US": "en",
  "es-ES": "es",
  "es-MX": "es-MX",
  fi: "fi",
  "fr-CA": "fr-CA",
  "fr-FR": "fr",
  he: "he",
  hi: "hi",
  hr: "hr",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  ms: "ms",
  "nl-NL": "nl",
  no: "nb",
  pl: "pl",
  "pt-BR": "pt-BR",
  "pt-PT": "pt-PT",
  ro: "ro",
  ru: "ru",
  sk: "sk",
  sv: "sv",
  th: "th",
  tr: "tr",
  uk: "uk",
  vi: "vi",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getBadgeAsset(locale: Locale) {
  return appStoreBadgeAssets[locale];
}

export function getContent(locale: Locale = "en-US"): HomeContent {
  const contentLocale = localeContentFallbacks[locale];

  if (contentLocale === "en") {
    return {
      ...en,
      locale,
    };
  }

  return {
    locale,
    ...localized[contentLocale],
  };
}

export function getLocalizedPath(locale: Locale): string {
  return locale === "en-US" ? "/" : `/${locale}`;
}
