import type { Dictionary } from './cs'

/**
 * Slovak UI dictionary. Typed against the Czech reference, so a missing or
 * misspelled key fails the build.
 */
export const sk: Dictionary = {
  /* ── shared ─────────────────────────────────────────────── */
  common: {
    bookCall: 'Dohodnúť si stretnutie zdarma',
    caseStudy: 'Prípadová štúdia',
    viewCaseStudy: 'Zobraziť prípadovú štúdiu',
    backToProjects: 'Späť na projekty',
    backHome: 'Späť na hlavnú stránku',
    ourProjects: 'Naše projekty',
    letsWork: 'Poďme spolupracovať',
  },

  langSwitch: {
    label: 'Zmeniť jazyk',
    to: 'EN',
    toName: 'English',
  },

  /* ── header ─────────────────────────────────────────────── */
  header: {
    homeAria: 'nosleephouse: domovská stránka',
    mainNavAria: 'Hlavná navigácia',
    mobileNavAria: 'Mobilná navigácia',
    menuAria: 'Menu',
    closeMenuAria: 'Zavrieť menu',
    cta: 'Naše projekty',
    nav: {
      home: 'Domov',
      projects: 'Naše projekty',
      services: 'Služby',
      about: 'O nás',
      blog: 'Blog',
    },
    dropdownAria: 'Naše služby',
    servicesEyebrow: 'Naše služby',
    sectorsEyebrow: 'Špecializujeme sa na',
    services: [
      'Tvorba webov & vývoj',
      'Grafický dizajn',
      'Vizuálna identita',
      'Marketing & rast',
      'AI automatizácia & AI kreatívy',
    ],
    sectors: [
      {
        label: 'Reality & nehnuteľnosti',
        sub: 'Weby pre maklérov, realitné kancelárie a developerské projekty',
      },
      {
        label: 'Developerské projekty',
        sub: 'Digitálne prezentácie bytovej aj komerčnej výstavby',
      },
      {
        label: 'Konferencie, veľtrhy & podujatia',
        sub: 'Registračné weby a digitálne identity pre živé podujatia',
      },
    ],
  },

  /* ── hero ───────────────────────────────────────────────── */
  hero: {
    ratingOn: 'Hodnotenie na',
    ratingAria: 'Hodnotenie 5 z 5',
    line1: 'Digitálny partner',
    line2: 'pre majiteľov [[firiem]]',
    sub: 'Weby na mieru, ktoré vašej firme prinášajú **skutočných klientov**.',
    cta: 'Získať cenovú ponuku zdarma',
    imageAlt: 'Tím nosleephouse na veľtrhu',
    badgeProjects: '**150+** zrealizovaných projektov od roku 2019',
    badgeTeam: '**8** seniorných odborníkov v tíme',
  },

  /* ── logos marquee ──────────────────────────────────────── */
  logos: {
    ariaLabel: 'Partneri a médiá',
  },

  /* ── services ───────────────────────────────────────────── */
  services: {
    heading: 'Služby, ktoré\n[[spolu fungujú]]',
    items: [
      {
        title: 'Tvorba webov & vývoj',
        desc: 'Staviame weby, ktoré budujú vašu autoritu a menia návštevníkov na platiacich klientov.',
        tags: ['Firemný web', 'E-shop', 'Landing page'],
      },
      {
        title: 'Marketing & rast',
        desc: 'Cielené kampane zamerané na stabilný prísun dopytov a maximalizáciu zisku.',
        tags: ['Google ADS', 'Meta ADS', 'SEO'],
      },
      {
        title: 'Grafický dizajn',
        desc: 'Ostrý vizuálny obsah, vďaka ktorému bude vaša značka okamžite vyčnievať z davu.',
        tags: ['Logo', 'Print', 'Prezentácie'],
      },
      {
        title: 'Vizuálna identita',
        desc: 'Komplexná vizuálna identita, ktorá vašej značke dodá jasný, konzistentný a zapamätateľný charakter.',
        tags: ['Brand Identity', 'Vizuálny štýl', 'Reklama'],
      },
      {
        title: 'AI automatizácia & AI kreatívy',
        desc: 'Prepojíme vaše systémy a zbavíme vás rutiny, aby ste sa mohli sústrediť na to, čo vás baví.',
        tags: ['Zapier', 'n8n', 'Make', 'AI kreatíva'],
      },
    ],
  },

  /* ── projects (shared brand + title copy) ───────────────── */
  projects: {
    'reality-expo': {
      brand: 'Reality Expo',
      title: 'Reality EXPO: Branding, web a kampaň, ktoré rozbehli celý veľtrh',
      category: 'Branding',
      tags: ['Branding', 'Web'],
    },
    aparsia: {
      brand: 'Aparsia',
      title: 'Aparsia: Viacjazyčný web, ktorý otvára realitný trh svetu',
      category: 'Web',
      tags: ['Web', 'UX/UI'],
    },
    duopet: {
      brand: 'DUOPET',
      title: 'DUOPET: Čistý web, ktorý vyzdvihol recykláciu plastov',
      category: 'Web',
      tags: ['Web'],
    },
    'jun-matcha': {
      brand: 'JUN',
      title:
        'JUN Matcha: Čistá vizuálna identita, ktorá od nuly postavila silnú značku prémiovej matchy',
      category: 'Identita',
      tags: ['Identita', 'Branding'],
    },
  },

  /* ── portfolio (homepage) ───────────────────────────────── */
  portfolio: {
    heading: 'Vybrané projekty\nz nášho [[portfólia.]]',
    lead: 'Za sebou máme **150+ projektov z rôznych odvetví** a stále nás to baví. Aby ste tu nestrávili celý deň, vybrali sme tie najnovšie.',
    viewAll: 'Zobraziť všetky projekty',
  },

  /* ── features / process ─────────────────────────────────── */
  features: {
    heading: 'Ako prebieha\n[[spolupráca?]]',
    desc: [
      'V roku 2026 vám web sám osebe výsledky nezaručí. Naše riešenia len minulý rok priniesli našim klientom **stovky kvalifikovaných dopytov** a **nových zákazníkov**.',
      'Vďaka výsledkom a práci úzkeho tímu špecialistov nám vybudovanie funkčného akvizičného systému zverilo už **87+ klientov** v Česku aj na Slovensku.',
    ],
    steps: [
      {
        title: 'Strategický hovor',
        heading: 'Konzultácia je prvým krokom k výsledkom',
        body: [
          '**Prejdeme si vaše podnikanie, ciele a možnosti** a uvidíme, či vám dokážeme reálne pomôcť.',
          'Vážime si **váš čas rovnako ako ten svoj**. Naše kapacity sú obmedzené, preto si vyberáme projekty, ktorým dokážeme priniesť **maximálnu hodnotu** a **výsledky**.',
        ],
      },
      {
        title: 'Analýza a stratégia',
        heading: 'Vytvoriť predvídateľný systém na získavanie klientov nie je otázkou lotérie',
        body: [
          'Stabilné výsledky nie sú otázkou šťastia, ale **stratégie, znalostí** a **overeného systému**.',
          'Preštudujeme si vašu cieľovú skupinu, zmapujeme konkurenciu a odhalíme vzorce správania, ktoré sa opakujú. Cieľom nie je vytvoriť len pekný web, ale riešenie, ktoré vám spoľahlivo zabezpečí výsledky.',
        ],
      },
      {
        title: 'Tvorba webu',
        heading: 'Cesta k ziskovému kliknutiu',
        body: [
          'Každá sekcia aj detail má svoj účel. Web netvoríme izolovane, ale ako súčasť **celkového systému, ktorý vedie používateľa k akcii**.',
          'Výsledkom nie je len reprezentatívny dizajn, ale predvídateľný nástroj na **získavanie nových klientov**.',
        ],
      },
      {
        title: 'Akvizícia a výkon',
        heading: 'Cesta k návratnosti',
        body: [
          'Premeníme váš web na predvídateľný ziskový systém na získavanie klientov a zabezpečíme, aby sa vám **investícia do digitálneho zázemia vrátila**.',
          'Vďaka tomuto prístupu dlhodobo udržiavame **maximálnu spokojnosť našich partnerov** a pomáhame im ovládnuť ich trh.',
        ],
      },
      {
        title: 'Rast a optimalizácia',
        heading: 'Váš rast je naša priorita',
        body: [
          '**Pravidelne** analyzujeme výsledky a zavádzame vylepšenia, ktoré zvyšujú konverzný pomer webu a efektivitu kampaní.',
          'Neriešime len „správu“, ale aktívne navrhujeme **nové cesty k získavaniu klientov** a k rozširovaniu vášho vplyvu.',
        ],
      },
    ],
    ctaLabel: 'Poďme spolupracovať',
    ctaHeading: 'Máte projekt, ktorý si zaslúži\n[[skutočné výsledky?]]',
    ctaButton: 'Dohodnúť si bezplatný hovor',
  },

  /* ── reviews carousel ───────────────────────────────────── */
  reviews: {
    sectionAria: 'Recenzie klientov',
    label: 'Recenzie',
    heading: 'Príbehy našich [[klientov]]',
    prevAria: 'Predchádzajúca recenzia',
    nextAria: 'Ďalšia recenzia',
    items: [
      {
        name: 'Dominika Donovalová',
        role: 'Majiteľka realitnej kancelárie,',
        quote:
          '„Chalani boli skvelí od prvého kontaktu. Celý proces bol rýchly, komunikácia bezproblémová a výsledný web presne odráža môj štýl. Páčilo sa mi, že nevytvárali len pekný web, ale rozmýšľali o tom, čo nám prinesie klientov. Výsledky to potvrdili.“',
      },
      {
        name: 'Jakub Haidari',
        role: 'Marketing nehnuteľností,',
        quote:
          '„S Petrom a Martinom spolupracujeme viac ako 2 roky. Prístup k projektu bol od začiatku profesionálny: jasná komunikácia, výsledky, ktoré prekonali očakávania. Web spustili presne v termíne a beží bezchybne. Odporúčam každému, kto hľadá agentúrne výsledky s ľudským prístupom.“',
      },
      {
        name: 'Radek Bareš',
        role: 'Majiteľ recyklačnej firmy,',
        quote:
          '„Profesionálny prístup, rýchle spustenie a hlavne web, ktorý skutočne privádza nových klientov. Organická návštevnosť sa do 3 mesiacov zdvojnásobila. Oceňujem, že neskončili spustením, ale priebežne optimalizujú.“',
      },
      {
        name: 'Jonathan Hill',
        role: 'Kuchár & podnikateľ,',
        quote:
          '„Leo pre nás navrhol krásnu brand identitu, logo, menu aj vizuály pre sociálne siete. Zákazníci si to pochvaľujú. Aj web je krásne spracovaný, chalanov môžem len odporučiť.“',
      },
    ],
  },

  /* ── about ──────────────────────────────────────────────── */
  about: {
    heading: 'Digitálnymi partnermi\npre firmy sme už\n[[viac ako 7 rokov]]',
    text: 'Za sedem rokov sme sa naučili jednu vec: dobrý web vzniká z **dobrého vzťahu s klientom**, nie zo zadania v tabuľke. Preto s vami hovoríme priamo a predovšetkým sa snažíme váš biznis pochopiť, od prvého stretnutia až po spustenie.',
    cta: 'Zistiť viac o nosleephouse',
    imageAlt: 'Tím nosleephouse',
  },

  /* ── contact form ───────────────────────────────────────── */
  contact: {
    heading: 'Začnite získavať\n[[viac dopytov]]',
    firstName: 'Meno *',
    firstNamePlaceholder: 'Ján',
    lastName: 'Priezvisko *',
    lastNamePlaceholder: 'Novák',
    email: 'E-mail *',
    emailPlaceholder: 'vas@email.sk',
    phone: 'Telefón *',
    phonePlaceholder: '903 123 456',
    prefixAria: 'Predvoľba',
    messageLabel: 'S čím vám môžeme pomôcť?',
    messagePlaceholder:
      'Stačí pár viet o vašom projekte alebo cieli. Ozveme sa do 24 hodín.',
    gdpr: 'Údaje použijeme len na vybavenie vášho dopytu. E-mail si uložíme hneď po vyplnení, aby sme sa vám mohli ozvať, aj keď formulár nedokončíte. Podrobnosti nájdete v',
    gdprLink: 'zásadách ochrany osobných údajov',
    submit: 'Chcem viac dopytov',
    submitting: 'Odosielam…',
    errors: {
      firstName: 'Vyplňte meno.',
      lastName: 'Vyplňte priezvisko.',
      email: 'Zadajte platný e-mail.',
      phone: 'Zadajte platné telefónne číslo.',
    },
    sideTitle: 'Je to súrne? Volajte alebo píšte.',
    founders: [
      {
        role: 'Zakladateľ & obchodník',
        reason: 'K stavu projektu a ďalším otázkam:',
      },
      {
        role: 'Zakladateľ & grafický dizajnér',
        reason: 'K grafickému dizajnu:',
      },
    ],
  },

  /* ── blog carousel on the homepage ──────────────────────── */
  blogSection: {
    heading: 'Prečítajte si náš [[blog]]',
    readAll: 'Čítať všetko',
    prevAria: 'Predchádzajúce články',
    nextAria: 'Ďalšie články',
  },

  /* ── footer ─────────────────────────────────────────────── */
  footer: {
    exploreHead: 'Rozhliadnite sa',
    exploreLinks: ['Domov', 'O nás', 'Kontakt', 'Kariéra'],
    servicesHead: 'Služby',
    contactLabel: 'Kontakt',
    cta: 'Cenová ponuka zdarma',
    copyright: 'Copyright © nosleephouse™ 2026',
  },

  /* ── cookie banner ──────────────────────────────────────── */
  cookies: {
    dialogAria: 'Informácie o cookies',
    title: 'Informácie o cookies',
    text: 'Aby sme vám mohli poskytovať čo najlepšie služby, používame cookies na ukladanie informácií o zariadení a na prístup k nim. Súhlasom umožníte spracovanie údajov, napríklad o správaní na webe.',
    details: 'Zobraziť podrobnosti',
    decline: 'Odmietnuť',
    acceptAll: 'Prijať všetko',
    modalTitle: 'Nastavenia cookies',
    closeAria: 'Zavrieť',
    intro:
      'Cookies sú malé textové súbory ukladané vo vašom zariadení. Niektoré pomáhajú webu fungovať, iné nám umožňujú prispôsobiť obsah alebo pochopiť, ako web používate. Voľba je na vás.',
    allowSelection: 'Povoliť výber',
    allowAll: 'Povoliť všetko',
    categories: {
      necessary: {
        label: 'Nevyhnutné',
        desc: 'Nevyhnutné cookies pomáhajú, aby bola stránka použiteľná, pretože umožňujú základné funkcie, ako je navigácia na stránke. Webová stránka bez týchto cookies nemôže správne fungovať.',
      },
      preferences: {
        label: 'Preferenčné',
        desc: 'Preferenčné cookies umožňujú webovej stránke zapamätať si informácie, ktoré menia jej správanie alebo vzhľad, napríklad preferovaný jazyk.',
      },
      statistics: {
        label: 'Štatistické',
        desc: 'Štatistické cookies nám pomáhajú pochopiť, ako návštevníci používajú naše webové stránky. Informácie zbierajú a zdieľajú anonymne.',
      },
      marketing: {
        label: 'Marketingové',
        desc: 'Marketingové cookies sa používajú na sledovanie návštevníkov na webových stránkach. Cieľom je zobrazovať reklamu, ktorá je relevantná a zaujímavá pre konkrétneho používateľa.',
      },
    },
  },

  /* ── projects listing page ──────────────────────────────── */
  projectsPage: {
    label: 'Naše projekty',
    heading: 'Viac ako 150 projektov.\nKaždý s [[príbehom.]]',
    sub: 'Od startupov po etablované firmy. Weby, e-shopy, brandingy a vizuálne identity, ktoré skutočne fungujú.',
    filtersAria: 'Filter projektov',
    filterAll: 'Všetko',
    filters: ['Web', 'Branding', 'Identita', 'UX/UI'],
    empty: 'V tejto kategórii nie sú žiadne projekty.',
    ctaLabel: 'Poďme spolupracovať',
    ctaHeading: 'Máte nápad\nna [[projekt?]]',
    ctaSub: 'Ozvite sa. Porozprávame sa o tom, ako posunúť váš web na ďalšiu úroveň.',
  },

  /* ── blog listing + article chrome ──────────────────────── */
  blog: {
    label: 'Blog',
    heading: 'Novinky, tipy a\n[[príbehy z praxe]]',
    sub: 'Ako staviame weby, vedieme kampane a pomáhame firmám rásť. Bez zbytočných rečí, s reálnymi výsledkami od reálnych klientov.',
    readingSuffix: 'min čítania',
    crumbsAria: 'Navigačná cesta',
    crumbHome: 'Domov',
    ctaLabel: 'Poďme spolupracovať',
    ctaHeading: 'Chcete aj vy výsledky,\nnie iba [[sľuby?]]',
    ctaSub: 'Napíšte nám a urobíme z vášho projektu niečo, o čom sa bude hovoriť.',
    relatedLabel: 'Ďalšie z blogu',
    readArticle: 'Čítať článok',
  },

  /* ── thank-you page ─────────────────────────────────────── */
  thankYou: {
    heading: 'Rezervujte si svoj termín konzultácie nižšie 👇',
    sub: 'Berte to čo najvážnejšie. Každý deň máme len niekoľko stretnutí a skutočne vám chceme priniesť hodnotu, preto si vyberte termín, keď sa nám budete môcť na 100 % venovať.',
    noSlot: 'Ak vám žiadny termín nevyhovuje, ozveme sa vám sami.',
    back: '← Späť na hlavnú stránku',
  },

  /* ── error states ───────────────────────────────────────── */
  notFound: {
    text: 'Táto stránka neexistuje.',
    cta: 'Späť domov',
  },
  error: {
    heading: 'Niečo sa pokazilo.',
    cta: 'Skúsiť znova',
  },

  /* ── case-study section chrome (shared by all 4) ────────── */
  caseChrome: {
    client: 'Klient',
    year: 'Rok',
    industry: 'Odvetvie',
    services: 'Služby',
    viewLive: 'Zobraziť web naživo',
    viewInstagram: 'Zobraziť na Instagrame',
    brief: 'Zadanie',
    challenge: 'Výzva',
    solution: 'Riešenie',
    whatWeMade: 'Čo sme vytvorili',
    results: 'Výsledky',
    resultsHeading: 'Čísla,\nktoré [[hovoria.]]',
    testimonial: 'Referencia',
    nextProject: 'Ďalší projekt',
    ctaLabel: 'Poďme spolupracovať',
    ctaHeading: 'Čaká vás\npodobný [[projekt?]]',
    ctaSub: 'Nezáväzne. Bez prezentácie. Porozprávame sa o vašich cieľoch.',
    placeholder: 'Placeholder',
    clientCameWith: 'S čím klient prišiel',
    problemsLabel: 'Problémy, ktoré sme riešili',
    consequence: 'Dôsledok',
    goal: 'Cieľ',
    whatWeDelivered: 'Čo sme dodali',
  },

  /* ── page metadata ──────────────────────────────────────── */
  meta: {
    titleDefault: 'nosleephouse™ | Digitálna agentúra',
    titleTemplate: '%s | nosleephouse™',
    siteDescription:
      'Digitálna agentúra na najvyššej úrovni. Vlastný kód, unikátny dizajn, AI riešenia a branding. Spúšťame za 7 dní.',
    siteDescriptionShort:
      'Digitálna agentúra na najvyššej úrovni. Vlastný kód, unikátny dizajn, AI riešenia a branding.',
    ogImageAlt: 'nosleephouse™: tím na veľtrhu',
    projects: {
      title: 'Naše projekty',
      description:
        'Viac ako 150 projektov z rôznych odvetví: weby, e-shopy, branding a vizuálne identity. Pozrite sa, čo dokážeme.',
      ogTitle: 'Naše projekty | nosleephouse™',
      ogDescription:
        'Viac ako 150 projektov z rôznych odvetví: weby, e-shopy, branding a vizuálne identity.',
    },
    blog: {
      title: 'Blog',
      description:
        'Novinky, tipy a príbehy z praxe nosleephouse™. Ako staviame weby, vedieme kampane a pomáhame firmám rásť, s reálnymi výsledkami od reálnych klientov.',
      ogTitle: 'Blog | nosleephouse™',
      ogDescription:
        'Novinky, tipy a príbehy z praxe. Ako staviame weby a vedieme kampane, ktoré prinášajú výsledky.',
      blogName: 'nosleephouse™ blog',
      notFound: 'Článok sa nenašiel',
    },
    gdpr: {
      title: 'Zásady ochrany osobných údajov',
      description:
        'Ako nosleephouse s.r.o. zhromažďuje, používa a chráni vaše osobné údaje v súlade s GDPR a zákonom č. 18/2018 Z. z.',
    },
    thankYou: {
      title: 'Ďakujeme za dopyt, rezervujte si termín konzultácie',
    },
  },
}
