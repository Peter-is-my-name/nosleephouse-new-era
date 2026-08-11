/**
 * Czech UI dictionary — the reference locale.
 *
 * `Dictionary` is derived from this object, so every other locale is
 * type-checked against it and a missing key is a build error.
 *
 * Copy may use the markup understood by `rich()`:
 *   `**bold**`, `[[accent]]`, `\n` for a line break.
 *
 * Long-form content (case studies, blog posts, the GDPR policy) lives in
 * `src/lib/content/*` instead, so it never reaches the client bundle.
 */

export const cs = {
  /* ── shared ─────────────────────────────────────────────── */
  common: {
    bookCall: 'Domluvit schůzku zdarma',
    caseStudy: 'Případová studie',
    viewCaseStudy: 'Zobrazit případovou studii',
    backToProjects: 'Zpět na projekty',
    backHome: 'Zpět na hlavní stránku',
    ourProjects: 'Naše projekty',
    letsWork: 'Pojďme spolupracovat',
  },

  langSwitch: {
    /** aria-label on the switcher */
    label: 'Změnit jazyk',
    /** label of the language the switcher navigates TO */
    to: 'EN',
    toName: 'English',
  },

  /* ── header ─────────────────────────────────────────────── */
  header: {
    homeAria: 'nosleephouse — domů',
    mainNavAria: 'Hlavní navigace',
    mobileNavAria: 'Mobilní navigace',
    menuAria: 'Menu',
    closeMenuAria: 'Zavřít menu',
    cta: 'Naše projekty',
    nav: {
      home: 'Domů',
      projects: 'Naše projekty',
      services: 'Služby',
      about: 'O nás',
      blog: 'Blog',
    },
    dropdownAria: 'Naše služby',
    servicesEyebrow: 'Naše služby',
    sectorsEyebrow: 'Specializujeme se na',
    services: [
      'Tvorba webů & vývoj',
      'Grafický Design',
      'Vizuální Identita',
      'Marketing & Růst',
      'AI Automatizace & AI Kreativy',
    ],
    sectors: [
      {
        label: 'Reality & Nemovitosti',
        sub: 'Weby pro makléře, realitní kanceláře a developerské projekty',
      },
      {
        label: 'Developerské projekty',
        sub: 'Digitální prezentace bytových i komerčních výstaveb',
      },
      {
        label: 'Konference, Veletrhy & Akce',
        sub: 'Registrační weby a digitální identity pro živé události',
      },
    ],
  },

  /* ── hero ───────────────────────────────────────────────── */
  hero: {
    ratingOn: 'Hodnocení na',
    ratingAria: 'Hodnocení 5 z 5',
    line1: 'Digitální partner',
    line2: 'pro majitele [[firem]]',
    sub: 'Weby na míru, které vaší firmě přinášejí **skutečné klienty**.',
    cta: 'Získat cenový návrh zdarma',
    imageAlt: 'Tým nosleephouse na veletrhu',
    badgeProjects: '**150+** realizovaných projektů od roku 2019',
    badgeTeam: '**8** seniorních odborníků v týmu',
  },

  /* ── logos marquee ──────────────────────────────────────── */
  logos: {
    ariaLabel: 'Partneři a média',
  },

  /* ── services ───────────────────────────────────────────── */
  services: {
    heading: 'Služby, které\n[[spolu fungují]]',
    items: [
      {
        title: 'Tvorba webů & vývoj',
        desc: 'Stavíme weby, které budují vaši autoritu a mění návštěvníky v platící klienty.',
        tags: ['Firemní web', 'E-shop', 'Landing page'],
      },
      {
        title: 'Marketing & Růst',
        desc: 'Cílené kampaně zaměřené na stabilní přísun poptávek a maximalizaci zisku.',
        tags: ['Google ADS', 'Meta ADS', 'SEO'],
      },
      {
        title: 'Grafický Design',
        desc: 'Ostrý vizuální obsah, díky kterému vaše značka okamžitě vystoupí z davu.',
        tags: ['Logo', 'Print', 'Prezentace'],
      },
      {
        title: 'Vizuální Identita',
        desc: 'Komplexní vizuální identita, která vaší značce dá jasný, konzistentní a zapamatovatelný charakter.',
        tags: ['Brand Identity', 'Vizuální styl', 'Reklama'],
      },
      {
        title: 'AI Automatizace & AI Kreativy',
        desc: 'Propojíme vaše systémy a zbavíme vás rutiny, abyste se mohli soustředit na to, co vás baví.',
        tags: ['Zapier', 'n8n', 'Make', 'AI Kreativa'],
      },
    ],
  },

  /* ── projects (shared brand + title copy) ───────────────── */
  projects: {
    'reality-expo': {
      brand: 'Reality Expo',
      title: 'Reality EXPO: Branding, Web a kampaň, které rozjely celý veletrh',
      category: 'Branding',
      tags: ['Branding', 'Web'],
    },
    aparsia: {
      brand: 'Aparsia',
      title: 'Aparsia: Vícejazyčný web, který otevírá realitní trh světu',
      category: 'Web',
      tags: ['Web', 'UX/UI'],
    },
    duopet: {
      brand: 'DUOPET',
      title: 'DUOPET: Čistý web, který vyzdvihl recyklaci plastů',
      category: 'Web',
      tags: ['Web'],
    },
    'jun-matcha': {
      brand: 'JUN',
      title:
        'JUN Matcha: Čistá vizuální identita, která od nuly postavila silnou značku prémiové matchy',
      category: 'Identita',
      tags: ['Identita', 'Branding'],
    },
  },

  /* ── portfolio (homepage) ───────────────────────────────── */
  portfolio: {
    heading: 'Vybrané projekty\nz našeho [[portfolia.]]',
    lead: 'Za sebou máme **150+ projektů z různých odvětví** a pořád nás to baví. Abyste tu nestrávili celý den, tady jsou ty nejnovější.',
    viewAll: 'Zobrazit všechny projekty',
  },

  /* ── features / process ─────────────────────────────────── */
  features: {
    heading: 'Jak probíhá\n[[spolupráce?]]',
    desc: [
      'V roce 2026 vám web sám o sobě výsledky nezaručí. Naše řešení jen loni přivedla klientům **stovky kvalifikovaných poptávek** a **klientů**.',
      'Díky výsledkům a práci úzkého týmu specialistů nám vybudování funkčního akvizičního systému svěřilo již přes **100+ klientů** po celé ČR.',
    ],
    steps: [
      {
        title: 'Strategický hovor',
        heading: 'Konzultace je prvním krokem k výsledkům',
        body: [
          '**Probereme vaše podnikání, cíle a možnosti** – a uvidíme, zda vám dokážeme reálně pomoci.',
          'Vážíme si **vašeho času stejně jako svého**. Naše kapacity jsou omezené, proto si vybíráme projekty, kterým dokážeme doručit **maximální hodnotu** a **výsledky**.',
        ],
      },
      {
        title: 'Analýza a strategie',
        heading: 'Vytvořit předvídatelný systém pro získávání klientů není otázkou loterie',
        body: [
          'Stabilní výsledky nejsou otázkou štěstí, ale **strategie, znalostí** a **ověřeného systému**.',
          'Prostudujeme si vaši cílovou skupinu, zmapujeme konkurenci a odhalíme vzorce chování, které se opakují. Cíl není vytvořit jen hezký web, ale řešení, které vám spolehlivě zajistí výsledky.',
        ],
      },
      {
        title: 'Tvorba webu',
        heading: 'Cesta k ziskovému kliknutí',
        body: [
          'Každá sekce i detail má svůj účel. Web netvoříme izolovaně, ale jako součást **celkového systému vedoucího uživatele k akci**.',
          'Výsledkem je nejen reprezentativní design, ale předvídatelný nástroj pro **získávání nových klientů**.',
        ],
      },
      {
        title: 'Akvizice a výkon',
        heading: 'Cesta k návratnosti',
        body: [
          'Proměníme váš web v předvídatelný ziskový systém pro získávání klientů – zajistíme, aby se vám **investice do digitálního zázemí vrátila**.',
          'Díky tomuto přístupu držíme dlouhodobě **maximální spokojenost našich partnerů** a pomáháme jim ovládnout jejich trh.',
        ],
      },
      {
        title: 'Růst a optimalizace',
        heading: 'Váš růst je naše priorita',
        body: [
          '**Pravidelně** analyzujeme výsledky a implementujeme vylepšení, které zvyšují konverzní poměr webu a efektivitu kampaní.',
          'Neřešíme jen „správu", ale aktivně navrhujeme **nové cesty k získávání klientů** a rozšiřování vašeho vlivu.',
        ],
      },
    ],
    ctaLabel: 'Pojďme spolupracovat',
    ctaHeading: 'Máte projekt, který si zaslouží\n[[skutečné výsledky?]]',
    ctaButton: 'Domluvit bezplatný hovor',
  },

  /* ── reviews carousel ───────────────────────────────────── */
  reviews: {
    sectionAria: 'Recenze klientů',
    label: 'Recenze',
    heading: 'Příběhy našich [[klientů]]',
    prevAria: 'Předchozí recenze',
    nextAria: 'Další recenze',
    items: [
      {
        name: 'Dominika Donovalová',
        role: 'Majitelka realitní kanceláře,',
        quote:
          '„Kluci byli skvělí od prvního kontaktu. Celý proces byl rychlý, komunikace bezproblémová a výsledný web přesně odráží můj styl. Líbilo se mi, že nevytvářeli jen hezký web, ale přemýšleli nad tím, co nám přinese klienty. Výsledky to potvrdily.“',
      },
      {
        name: 'Jakub Haidari',
        role: 'Marketing nehnuteľností,',
        quote:
          '„S Petrem a Martinem spolupracujeme přes 2 roky. Přístup k projektu byl od začátku profesionální: jasná komunikace, výsledky, které překonaly očekávání. Web spustili přesně v termínu a běží bezchybně. Doporučuji každému, kdo hledá agenturní výsledky s lidským přístupem.“',
      },
      {
        name: 'Radek Bareš',
        role: 'Majitel recyklační firmy,',
        quote:
          '„Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila. Oceňuji, že neskončili spuštěním, ale průběžně optimalizují.“',
      },
      {
        name: 'Filip Polanský',
        role: 'Majitel firmy,',
        quote:
          '„Hledali jsme partu, která rozumí technologii i designu zároveň. nosleephouse je přesně to. Dodali komplexní design i vývoj dashboardu, včetně AI web appek pro urychlení našich procesů. Spolupráce byla efektivní a výsledek překvapil i naše investory.“',
      },
      {
        name: 'Jonathan Hill',
        role: 'Kuchař & podnikatel,',
        quote:
          '„Leo pro nás navrhl krásnou brand identitu, logo, menu i vizuály pro sociální sítě. Zákazníci si to pochvalují. Web krásně zpracovaný taky, kluky mohu jenom doporučit.“',
      },
    ],
  },

  /* ── about ──────────────────────────────────────────────── */
  about: {
    heading: 'Digitálními partnery\npro firmy jsme už\n[[přes 7 let]]',
    text: 'Za sedm let jsme se naučili jednu věc: dobrý web vzniká z **dobrého vztahu s klientem**, ne ze zadání v tabulce. Proto s vámi mluvíme přímo, a hlavně musíme váš biznis pochopit od první schůzky po spuštění.',
    cta: 'Zjistit více o nosleephouse',
    imageAlt: 'Tým nosleephouse',
  },

  /* ── contact form ───────────────────────────────────────── */
  contact: {
    heading: 'Začněte získávat\n[[více poptávek]]',
    firstName: 'Jméno *',
    firstNamePlaceholder: 'Honza',
    lastName: 'Příjmení *',
    lastNamePlaceholder: 'Novák',
    email: 'E-mail *',
    emailPlaceholder: 'vas@email.cz',
    phone: 'Telefon *',
    phonePlaceholder: '608 123 456',
    prefixAria: 'Předvolba',
    messageLabel: 'S čím vám můžeme pomoci?',
    messagePlaceholder:
      'Stačí pár vět o vašem projektu nebo cíli. Ozveme se do 24 hodin.',
    gdpr: 'Odesláním souhlasíte se zpracováním osobních údajů za účelem kontaktování.',
    submit: 'Chci více poptávek',
    submitting: 'Odesílám…',
    errors: {
      firstName: 'Vyplňte jméno.',
      lastName: 'Vyplňte příjmení.',
      email: 'Zadejte platný e-mail.',
      phone: 'Zadejte platné číslo (9 číslic).',
    },
    sideTitle: 'Spěchá to? Volejte nebo pište.',
    founders: [
      {
        role: 'Zakladatel & prodejce',
        reason: 'Kvůli stavu projektu a dalších otázek:',
      },
      {
        role: 'Zakladatel & grafický dizajnér',
        reason: 'Kvůli grafickýmu dizajnu:',
      },
    ],
  },

  /* ── blog carousel on the homepage ──────────────────────── */
  blogSection: {
    heading: 'Přečtěte si náš [[blog]]',
    readAll: 'Číst všechno',
    prevAria: 'Předchozí články',
    nextAria: 'Další články',
  },

  /* ── footer ─────────────────────────────────────────────── */
  footer: {
    exploreHead: 'Rozhlédněte se',
    exploreLinks: ['Domů', 'O nás', 'Kontakt', 'Kariéra'],
    servicesHead: 'Služby',
    contactLabel: 'Kontakt',
    cta: 'Nacenění zdarma',
    copyright: 'Copyright © nosleephouse™ 2026',
  },

  /* ── cookie banner ──────────────────────────────────────── */
  cookies: {
    dialogAria: 'Informace o cookies',
    title: 'Informace o cookies',
    text: 'Pro co nejlepší služby používáme cookies k ukládání a přístupu k informacím o zařízení. Souhlasem umožníte zpracování údajů, jako je chování na webu.',
    details: 'Zobrazit detaily',
    decline: 'Odmítnout',
    acceptAll: 'Přijmout vše',
    modalTitle: 'Nastavení cookies',
    closeAria: 'Zavřít',
    intro:
      'Cookies jsou malé textové soubory ukládané na vašem zařízení. Některé pomáhají webu fungovat, jiné nám umožní personalizovat obsah nebo pochopit, jak web používáte. Volba je na vás.',
    allowSelection: 'Povolit výběr',
    allowAll: 'Povolit vše',
    categories: {
      necessary: {
        label: 'Nutné',
        desc: 'Nutné cookies pomáhají, aby byla stránka použitelná tak, že umožní základní funkce jako navigace stránky. Webová stránka nemůže správně fungovat bez těchto cookies.',
      },
      preferences: {
        label: 'Preferenční',
        desc: 'Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk.',
      },
      statistics: {
        label: 'Statistické',
        desc: 'Statistické cookies nám pomáhají, abychom porozuměli, jak návštěvníci používají naše webové stránky. Anonymně sbírají a sdílují informace.',
      },
      marketing: {
        label: 'Marketingové',
        desc: 'Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele.',
      },
    },
  },

  /* ── projects listing page ──────────────────────────────── */
  projectsPage: {
    label: 'Naše projekty',
    heading: 'Přes 80 projektů.\nKaždý s [[příběhem.]]',
    sub: 'Od startupů po etablované firmy. Weby, e-shopy, brandingy a vizuální identity, které skutečně fungují.',
    filtersAria: 'Filtr projektů',
    filterAll: 'Vše',
    filters: ['Web', 'Branding', 'Identita', 'UX/UI'],
    empty: 'Žádné projekty v této kategorii.',
    ctaLabel: 'Pojďme spolupracovat',
    ctaHeading: 'Máte projekt\nna [[mysli?]]',
    ctaSub: 'Ozvěte se. Pobavíme se o tom, jak váš web posunout na další úroveň.',
  },

  /* ── blog listing + article chrome ──────────────────────── */
  blog: {
    label: 'Blog',
    heading: 'Novinky, tipy a\n[[příběhy z praxe]]',
    sub: 'Jak stavíme weby, vedeme kampaně a pomáháme firmám růst. Bez omáčky, s reálnými výsledky od reálných klientů.',
    readingSuffix: 'min čtení',
    crumbsAria: 'Drobečková navigace',
    crumbHome: 'Domů',
    ctaLabel: 'Pojďme spolupracovat',
    ctaHeading: 'Chcete i vy výsledky,\nne jen [[sliby?]]',
    ctaSub: 'Napište nám a uděláme z vašeho projektu něco, o čem se bude mluvit.',
    relatedLabel: 'Další z blogu',
    readArticle: 'Číst článek',
  },

  /* ── thank-you page ─────────────────────────────────────── */
  thankYou: {
    heading: 'Rezervujte si svůj termín konzultace níže 👇',
    sub: 'Berte to vážně, jak je to jen možné. Každý den máme jen několik setkání a skutečně vám chceme předat hodnotu, takže si vyberte termín, kdy máte 100 % čas.',
    noSlot: 'Pokud termín nevyhovuje, ozveme se vám sami.',
    back: '← Zpět na hlavní stránku',
  },

  /* ── error states ───────────────────────────────────────── */
  notFound: {
    text: 'Tato stránka neexistuje.',
    cta: 'Zpět domů',
  },
  error: {
    heading: 'Něco se pokazilo.',
    cta: 'Zkusit znovu',
  },

  /* ── case-study section chrome (shared by all 4) ────────── */
  caseChrome: {
    client: 'Klient',
    year: 'Rok',
    industry: 'Odvětví',
    services: 'Služby',
    viewLive: 'Zobrazit web živě',
    viewInstagram: 'Zobrazit na Instagramu',
    brief: 'Zadání',
    challenge: 'Výzva',
    solution: 'Řešení',
    whatWeMade: 'Co jsme vytvořili',
    results: 'Výsledky',
    resultsHeading: 'Čísla,\nkterá [[mluví.]]',
    testimonial: 'Reference',
    nextProject: 'Další projekt',
    ctaLabel: 'Pojďme spolupracovat',
    ctaHeading: 'Čeká vás\npodobný [[projekt?]]',
    ctaSub: 'Nezávazně. Bez prezentace. Pobavíme se o vašich cílech.',
    placeholder: 'Placeholder',
    /* DUOPET-only (CaseStudyV2 layout) */
    clientCameWith: 'S čím klient přišel',
    problemsLabel: 'Problémy, které jsme řešili',
    consequence: 'Důsledek',
    goal: 'Cíl',
    whatWeDelivered: 'Co jsme dodali',
  },

  /* ── page metadata ──────────────────────────────────────── */
  meta: {
    titleDefault: 'nosleephouse™ — Digitální agentura',
    titleTemplate: '%s | nosleephouse™',
    siteDescription:
      'Digitální agentura na nejvyšší úrovni. Vlastní kód, unikátní design, AI řešení a branding. Spouštíme za 7 dní.',
    siteDescriptionShort:
      'Digitální agentura na nejvyšší úrovni. Vlastní kód, unikátní design, AI řešení a branding.',
    ogImageAlt: 'nosleephouse™ — Tým na veletrhu',
    projects: {
      title: 'Naše projekty',
      description:
        'Přes 80 projektů z různých odvětví — weby, e-shopy, branding a vizuální identity. Podívejte se, co umíme.',
      ogTitle: 'Naše projekty | nosleephouse™',
      ogDescription:
        'Přes 80 projektů z různých odvětví — weby, e-shopy, branding a vizuální identity.',
    },
    blog: {
      title: 'Blog',
      description:
        'Novinky, tipy a příběhy z praxe nosleephouse™. Jak stavíme weby, vedeme kampaně a pomáháme firmám růst, s reálnými výsledky od reálných klientů.',
      ogTitle: 'Blog | nosleephouse™',
      ogDescription:
        'Novinky, tipy a příběhy z praxe. Jak stavíme weby a vedeme kampaně, které přinášejí výsledky.',
      blogName: 'nosleephouse™ blog',
      notFound: 'Článek nenalezen',
    },
    gdpr: {
      title: 'Zásady ochrany osobných údajov',
      description:
        'Ako nosleephouse s.r.o. zhromažďuje, používa a chráni vaše osobné údaje v súlade s GDPR a zákonom č. 18/2018 Z. z.',
    },
    thankYou: {
      title: 'Děkujeme za poptávku, rezervujte si termín konzultace',
    },
  },
}

/**
 * Deliberately NOT `as const`: the widened type is what other locales are
 * checked against, so `en.ts` must match the shape without matching the
 * literal Czech strings.
 */
export type Dictionary = typeof cs
