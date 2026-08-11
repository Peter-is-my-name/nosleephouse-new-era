/**
 * Case-study copy, per locale.
 *
 * Server-only content: these objects are imported by the case-study page
 * components (all Server Components), so neither locale reaches the client
 * bundle. Section chrome ("Brief", "Results", …) lives in the UI dictionary
 * instead, because it is shared by all four studies.
 *
 * Strings may use `rich()` markup: `**bold**`, `[[accent]]`, `\n`.
 */

import type { Locale } from '../i18n'

type Numbered = { num: string; title: string; body: string }
type Result = { value: string; label: string }
type Testimonial = { quote: string; name: string; role: string }

type CaseMeta = {
  heroHeading: string
  heroDesc: string
  client: string
  year: string
  industry: string
  services: string[]
}

/** Layout shared by Reality EXPO, Aparsia and JUN Matcha. */
export type StandardCase = CaseMeta & {
  briefHeading: string
  briefBody: [string, string]
  challengeHeading: string
  challenges: Numbered[]
  solutionHeading: string
  solutionBody: [string, string]
  gallery: [string, string]
  deliverables: Numbered[]
  results: Result[]
  testimonial?: Testimonial
}

/** The DUOPET study uses the CaseStudyV2 layout. */
export type DuopetCase = CaseMeta & {
  chips: string[]
  leadStatement: string
  leadBody: [string, string]
  problemsHeading: string
  problems: (Numbered & { impact: string })[]
  goalStatement: string
  goalSub: string
  approachHeading: string
  steps: { label: string; body: string }[]
  delivered: string[]
  resultsHeading: string
  heroResult: Result
  results: Result[]
  testimonial: Testimonial
}

/* ── Reality EXPO ──────────────────────────────────────────── */

const REALITY_EXPO: Record<Locale, StandardCase> = {
  cs: {
    heroHeading: 'Reality EXPO:\nBranding, Web\na [[kampaň.]]',
    heroDesc:
      'Organizátoři Reality Expo nás oslovili s výzvou, která spojila tři věci najednou: vizuální identitu eventu, funkční web a digitální kampaň, která přivedla rekordní návštěvnost. Vše spuštěno za čtyři týdny.',
    client: 'Reality Expo',
    year: '2025',
    industry: 'Nemovitosti · Event',
    services: ['Branding', 'Web Design', 'Development', 'Kampaň'],
    briefHeading: 'Veletrh, který\npotřeboval\n[[silný hlas.]]',
    briefBody: [
      'Reality Expo je realitní event v srdci Bratislavy. V ikonické Staré tržnici se každoročně potkávají tisíce lidí řešících bydlení s předními odborníky v oboru. Organizátoři nás oslovili s jasným zadáním: kompletní digitální transformace, od brand identity přes web až po výkonnostní kampaně.',
      'Žádné kompromisy. Žádná generická šablona. Identita, web i kampaně postavené na míru pro akci, která si to zaslouží.',
    ],
    challengeHeading: 'Tři problémy,\njedno [[řešení.]]',
    challenges: [
      {
        num: '01',
        title: 'Generická značka',
        body: 'Vizuální identita nekomunikovala prémiovost ani důvěryhodnost, kterou akce tohoto rozsahu potřebuje.',
      },
      {
        num: '02',
        title: 'Web bez konverzí',
        body: 'Návštěvníci si web prohlédli a odešli. Registrace byla schovaná, cesta k akci nejasná a nikdo ji nevedl k akci.',
      },
      {
        num: '03',
        title: 'Neefektivní kampaně',
        body: 'PPC běželo bez segmentace publika, což vedlo k vysokým nákladům na akvizici a nízké návratnosti investice.',
      },
    ],
    solutionHeading: 'Ne víc reklamy.\nSystém, který\n[[fungoval.]]',
    solutionBody: [
      'Vytvořili jsme vlastní typografický systém a ikonografii, které daly Reality EXPO jasnou vizuální identitu. Nový web jsme postavili kolem jednoho cíle, registrace. Každý prvek stránky vedl k akci.',
      'PPC kampaně jsme přestavěli od základu s přesnou segmentací publika, takže reklama cílila jen na lidi s reálným zájmem, ne na náhodné kliky.',
    ],
    gallery: ['Brand identita', 'Reality EXPO 2025 na místě'],
    deliverables: [
      {
        num: '01',
        title: 'Brand Identity',
        body: 'Logo, barevný systém, typografie a grafický jazyk Reality EXPO. Profesionální estetika, která zaujme developery, investory i kupující.',
      },
      {
        num: '02',
        title: 'Webová stránka',
        body: 'Přehledný web postavený kolem jednoho cíle: registrace. Spuštěn za 4 týdny od briefu, bez jediného odkladu.',
      },
      {
        num: '03',
        title: 'PPC kampaně',
        body: 'Segmentované kampaně s přesným cílením, tedy méně plýtvání rozpočtem, víc kvalifikovaných registrací.',
      },
      {
        num: '04',
        title: 'Event materiály',
        body: 'Vizuály pro tiskoviny, signage a prezentaci akce na místě, jednotný vizuální jazyk od webu až po vstupní bránu.',
      },
      {
        num: '05',
        title: 'Social Media',
        body: 'Obsahová strategie a vizuály pro sociální sítě, které držely publikum v obraze před akcí i během ní.',
      },
    ],
    results: [
      { value: '4200+', label: 'registrovaných účastníků' },
      { value: '2,1×', label: 'vyšší konverzní poměr webu' },
      { value: '−38 %', label: 'nižší náklady na registraci' },
      { value: '12×', label: 'návratnost investice' },
    ],
    testimonial: {
      quote:
        '„S Petrem a Martinem spolupracujeme přes 2 roky. Přístup k projektu byl od začátku profesionální: jasná komunikace, výsledky, které překonaly očekávání. Web spustili přesně v termínu a běží bezchybně. Doporučuji každému, kdo hledá agenturní výsledky s lidským přístupem.“',
      name: 'Jakub Haidari',
      role: 'Marketing nehnuteľností, Reality EXPO',
    },
  },
  en: {
    heroHeading: 'Reality EXPO:\nBranding, website\nand [[campaign.]]',
    heroDesc:
      'The Reality Expo organisers came to us with a challenge that combined three things at once: the visual identity of the event, a website that works, and a digital campaign that brought record attendance. All launched in four weeks.',
    client: 'Reality Expo',
    year: '2025',
    industry: 'Real estate · Event',
    services: ['Branding', 'Web design', 'Development', 'Campaign'],
    briefHeading: 'A fair that\nneeded a\n[[strong voice.]]',
    briefBody: [
      'Reality Expo is a real-estate event in the heart of Bratislava. Every year the iconic Stará tržnica market hall brings together thousands of people looking for a home and the leading experts in the field. The organisers came to us with a clear brief: a complete digital transformation, from brand identity through the website to performance campaigns.',
      'No compromises. No generic template. An identity, a website and campaigns built specifically for an event that deserves them.',
    ],
    challengeHeading: 'Three problems,\none [[solution.]]',
    challenges: [
      {
        num: '01',
        title: 'A generic brand',
        body: 'The visual identity communicated neither the premium feel nor the credibility an event of this scale needs.',
      },
      {
        num: '02',
        title: 'A website without conversions',
        body: 'Visitors looked at the site and left. Registration was buried, the path to action unclear, and nothing guided anyone towards it.',
      },
      {
        num: '03',
        title: 'Inefficient campaigns',
        body: 'PPC ran without audience segmentation, which meant high acquisition costs and a poor return on investment.',
      },
    ],
    solutionHeading: 'Not more ads.\nA system that\n[[worked.]]',
    solutionBody: [
      'We created a custom typographic system and iconography that gave Reality EXPO a clear visual identity. We built the new website around a single goal: registration. Every element on the page led towards that action.',
      'We rebuilt the PPC campaigns from the ground up with precise audience segmentation, so the ads reached only people with genuine interest rather than random clicks.',
    ],
    gallery: ['Brand identity', 'Reality EXPO 2025 on site'],
    deliverables: [
      {
        num: '01',
        title: 'Brand identity',
        body: 'The logo, colour system, typography and graphic language of Reality EXPO. A professional aesthetic that appeals to developers, investors and buyers alike.',
      },
      {
        num: '02',
        title: 'Website',
        body: 'A clear website built around one goal: registration. Launched 4 weeks after the brief, without a single delay.',
      },
      {
        num: '03',
        title: 'PPC campaigns',
        body: 'Segmented campaigns with precise targeting — less budget wasted, more qualified registrations.',
      },
      {
        num: '04',
        title: 'Event materials',
        body: 'Visuals for print, signage and the on-site presentation — one visual language from the website through to the entrance gate.',
      },
      {
        num: '05',
        title: 'Social media',
        body: 'Content strategy and visuals for social media that kept the audience in the loop before and during the event.',
      },
    ],
    results: [
      { value: '4200+', label: 'registered attendees' },
      { value: '2.1×', label: 'higher website conversion rate' },
      { value: '−38 %', label: 'lower cost per registration' },
      { value: '12×', label: 'return on investment' },
    ],
    testimonial: {
      quote:
        '“We have been working with Peter and Martin for over 2 years. Their approach was professional from day one: clear communication and results that exceeded expectations. They launched the site exactly on schedule and it runs flawlessly. I recommend them to anyone looking for agency results with a human touch.”',
      name: 'Jakub Haidari',
      role: 'Real-estate marketing, Reality EXPO',
    },
  },
}

/* ── Aparsia ───────────────────────────────────────────────── */

const APARSIA: Record<Locale, StandardCase> = {
  cs: {
    heroHeading: 'Aparsia:\nWeb, admin\na [[CRM.]]',
    heroDesc:
      'Aparsia zprostředkovává investice do bulharských nemovitostí. Potřebovali kompletní digitální řešení: reprezentativní web pro investory, admin portál a CRM pro interní tým. Vše postavené na míru a spuštěné za šest týdnů.',
    client: 'Aparsia s.r.o.',
    year: '2025',
    industry: 'Nemovitosti · Investice',
    services: ['UI/UX Design', 'Development', 'Admin Panel', 'SEO'],
    briefHeading: 'Platforma,\nkteré musí\n[[věřit.]]',
    briefBody: [
      'Aparsia otevírá Čechům a Slovákům dveře k nemovitostem v Bulharsku. Apartmány u moře, horské byty i investiční příležitosti, to vše s právním servisem a podporou v jejich jazyce. Oslovili nás s jasným cílem: kompletní digitální řešení od webu přes admin portál až po CRM.',
      'Web musel působit důvěryhodně na první pohled a zároveň dát internímu týmu nástroje pro každodenní správu nemovitostí a klientů. Žádné kompromisy.',
    ],
    challengeHeading: 'Dva světy,\njeden [[systém.]]',
    challenges: [
      {
        num: '01',
        title: 'Důvěra na dálku',
        body: 'Koupit nemovitost v cizí zemi vyžaduje důvěru. Web ji musel vzbudit hned na první pohled a provést zájemce celým procesem.',
      },
      {
        num: '02',
        title: 'Dva typy uživatelů',
        body: 'Web sloužil investorům hledajícím transparentnost i internímu týmu, který potřebuje efektivní nástroje. Dva odlišné světy v jednom systému.',
      },
      {
        num: '03',
        title: 'Mezinárodní dosah',
        body: 'Zájemci z Česka, Slovenska i zahraničí. Jeden web musel fungovat ve více jazycích, bez kompromisů v obsahu a přehlednosti.',
      },
    ],
    solutionHeading: 'Dvě vrstvy,\njeden\n[[systém.]]',
    solutionBody: [
      'Navrhli jsme dvouvrstvé řešení: veřejný web s důrazem na konverzi a důvěru, a soukromý admin portál s plnou kontrolou nad nemovitostmi, klienty i dokumentací. Celý systém stojí na Next.js s vlastním backendem.',
      'Web jsme lokalizovali do několika jazyků, aby oslovil investory napříč trhy. Rychlý, přehledný a postavený tak, aby proměnil návštěvníka v reálnou poptávku.',
    ],
    gallery: ['Web Aparsia', 'Admin portál'],
    deliverables: [
      {
        num: '01',
        title: 'Firemní web',
        body: 'Reprezentativní vícejazyčný web zaměřený na konverzi a důvěru. Přehledný katalog nemovitostí a jasná cesta k poptávce.',
      },
      {
        num: '02',
        title: 'Admin portál',
        body: 'Soukromé rozhraní s plnou kontrolou nad nemovitostmi, klienty a dokumentací. Efektivní nástroje pro každodenní provoz.',
      },
      {
        num: '03',
        title: 'CRM integrace',
        body: 'Propojení webu a admin portálu do jednoho systému. Poptávky, klienti i nemovitosti přehledně na jednom místě.',
      },
      {
        num: '04',
        title: 'SEO optimalizace',
        body: 'Technické i obsahové SEO ve všech jazykových verzích. Web, který vyhledávače najdou a doporučí správným lidem.',
      },
      {
        num: '05',
        title: 'Mobilní responzivita',
        body: 'Plynulý zážitek na každém zařízení, od telefonu po desktop. Rychlé načítání a čistý design, který nezdržuje.',
      },
    ],
    results: [
      { value: '3×', label: 'více poptávek měsíčně' },
      { value: '98', label: 'Lighthouse skóre' },
      { value: '4', label: 'jazykové verze webu' },
      { value: '100 %', label: 'spokojenost klienta' },
    ],
    testimonial: {
      quote:
        '„Martin byl skvělý od prvého kontaktu. Celý proces byl rychlý, komunikace bezproblémová a výsledný web přesně odráží můj styl. Líbilo se mi, že nevytvářeli jen hezký web. Přemýšleli nad tím, co nám přinese klienty. Výsledky to potvrdily.“',
      name: 'Dominika Donovalová',
      role: 'Podnikatelka, Aparsia',
    },
  },
  en: {
    heroHeading: 'Aparsia:\nWebsite, admin\nand [[CRM.]]',
    heroDesc:
      'Aparsia brokers investments in Bulgarian property. They needed a complete digital solution: a representative website for investors, an admin portal and a CRM for the internal team. All custom-built and launched in six weeks.',
    client: 'Aparsia s.r.o.',
    year: '2025',
    industry: 'Real estate · Investment',
    services: ['UI/UX design', 'Development', 'Admin panel', 'SEO'],
    briefHeading: 'A platform\npeople have\nto [[trust.]]',
    briefBody: [
      'Aparsia opens the door to Bulgarian property for Czech and Slovak buyers. Seaside apartments, mountain flats and investment opportunities, all with legal support in their own language. They came to us with a clear goal: a complete digital solution, from the website through an admin portal to a CRM.',
      'The website had to feel trustworthy at first glance and at the same time give the internal team the tools to manage properties and clients day to day. No compromises.',
    ],
    challengeHeading: 'Two worlds,\none [[system.]]',
    challenges: [
      {
        num: '01',
        title: 'Trust at a distance',
        body: 'Buying property in another country takes trust. The website had to earn it at first glance and guide the buyer through the entire process.',
      },
      {
        num: '02',
        title: 'Two kinds of user',
        body: 'The site served investors looking for transparency and an internal team that needs efficient tools. Two different worlds in one system.',
      },
      {
        num: '03',
        title: 'International reach',
        body: 'Buyers from Czechia, Slovakia and further afield. One website had to work in several languages without compromising content or clarity.',
      },
    ],
    solutionHeading: 'Two layers,\none\n[[system.]]',
    solutionBody: [
      'We designed a two-layer solution: a public website focused on conversion and trust, and a private admin portal with full control over properties, clients and documentation. The whole system runs on Next.js with a custom backend.',
      'We localised the website into several languages so it reaches investors across markets. Fast, clear and built to turn a visitor into a real enquiry.',
    ],
    gallery: ['The Aparsia website', 'Admin portal'],
    deliverables: [
      {
        num: '01',
        title: 'Company website',
        body: 'A representative multilingual website focused on conversion and trust. A clear property catalogue and an obvious path to an enquiry.',
      },
      {
        num: '02',
        title: 'Admin portal',
        body: 'A private interface with full control over properties, clients and documentation. Efficient tools for day-to-day operations.',
      },
      {
        num: '03',
        title: 'CRM integration',
        body: 'The website and the admin portal joined into a single system. Enquiries, clients and properties all in one place.',
      },
      {
        num: '04',
        title: 'SEO optimisation',
        body: 'Technical and content SEO across every language version. A website search engines find and recommend to the right people.',
      },
      {
        num: '05',
        title: 'Mobile responsiveness',
        body: 'A smooth experience on every device, from phone to desktop. Fast loading and a clean design that never gets in the way.',
      },
    ],
    results: [
      { value: '3×', label: 'more enquiries per month' },
      { value: '98', label: 'Lighthouse score' },
      { value: '4', label: 'language versions of the site' },
      { value: '100 %', label: 'client satisfaction' },
    ],
    testimonial: {
      quote:
        '“Martin was great from the very first contact. The whole process was fast, communication was effortless and the final website reflects my style exactly. What I liked most was that they were not just making a pretty website. They thought about what would bring us clients. The results proved them right.”',
      name: 'Dominika Donovalová',
      role: 'Entrepreneur, Aparsia',
    },
  },
}

/* ── JUN Matcha ────────────────────────────────────────────── */

const JUN_MATCHA: Record<Locale, StandardCase> = {
  cs: {
    heroHeading: 'JUN:\nSilná značka\nod [[nuly.]]',
    heroDesc:
      'JUN je specialty matcha bar v centru Prahy, který spojuje japonskou kulturu matchy s hravými recepturami po česku. Vytvořili jsme kompletní vizuální identitu, od loga přes obaly až po Instagram. Stejně výraznou jako jejich matcha.',
    client: 'JUN Matcha Bar',
    year: '2025',
    industry: 'Gastro · Café',
    services: ['Logo', 'Brand Identity', 'Visual System', 'Packaging'],
    briefHeading: 'Značka, kterou\nsi lidé\n[[zapamatují.]]',
    briefBody: [
      'JUN otevíral v centru Prahy jako specialty matcha bar. Nová značka, žádná historie, žádné povědomí. Zakladatelé přišli s jasnou vizí: autentická, moderní identita, která bude stejně silná v kavárně, na obalech i na Instagramu.',
      'Matcha je dnes všude. Úkolem bylo vytvořit značku, která se v přeplněné kategorii neztratí a na první pohled řekne: tohle je prémiová, promyšlená matcha.',
    ],
    challengeHeading: 'Tři problémy,\njedno [[řešení.]]',
    challenges: [
      {
        num: '01',
        title: 'Přeplněná kategorie',
        body: 'Matcha bary dnes rostou jako houby po dešti. Většina vypadá stejně, generická zeleň a asijská klišé. JUN musel na první pohled vyčnívat.',
      },
      {
        num: '02',
        title: 'Značka od nuly',
        body: 'Žádné logo, žádná identita, žádné povědomí. Všechno se muselo postavit od základů a hned působit jako zavedená, sebevědomá značka.',
      },
      {
        num: '03',
        title: 'Musí fungovat všude',
        body: 'Identita musela sedět na šálku, na obalu, na cedulích v podniku i ve feedu na Instagramu. Jeden systém, mnoho míst a jediný dojem.',
      },
    ],
    solutionHeading: 'Minimalismus\ns [[charakterem.]]',
    solutionBody: [
      'Navrhli jsme minimalistický logo systém inspirovaný japonskou kaligrafií a geometrií. Barevná paleta spojuje zemité tóny s jemnou zelení matchy. Čistě, prémiově a bez klišé.',
      'Celý vizuální systém jsme postavili tak, aby se dal škálovat napříč všemi kanály. Od šálku po Instagram funguje jako jeden konzistentní celek.',
    ],
    gallery: ['Logo systém', 'Packaging & bar'],
    deliverables: [
      {
        num: '01',
        title: 'Logo systém',
        body: 'Minimalistické logo inspirované japonskou kaligrafií a geometrií. Rozpoznatelné na první pohled a funkční v jakékoli velikosti.',
      },
      {
        num: '02',
        title: 'Brand Guidelines',
        body: 'Jasná pravidla pro barvy, typografii a použití značky. Aby JUN působil konzistentně, ať už vizuál tvoří kdokoli.',
      },
      {
        num: '03',
        title: 'Packaging Design',
        body: 'Obaly, kelímky a materiály, které z každého drinku dělají malý zážitek hodný sdílení na sítích.',
      },
      {
        num: '04',
        title: 'Social Media šablony',
        body: 'Sada šablon pro Instagram, se kterou je feed konzistentní a vizuálně silný, bez práce navíc při každém příspěvku.',
      },
      {
        num: '05',
        title: 'Interiérové označení',
        body: 'Cedule a vizuální prvky do prostoru baru, které plynule navazují na celou identitu značky.',
      },
    ],
    results: [
      { value: '4,9★', label: 'hodnocení na Google' },
      { value: '2800+', label: 'sledujících za první měsíc' },
      { value: '3 týdny', label: 'od briefu po finální identitu' },
      { value: '1×', label: 'ucelený vizuální systém' },
    ],
  },
  en: {
    heroHeading: 'JUN:\nA strong brand\nfrom [[zero.]]',
    heroDesc:
      'JUN is a specialty matcha bar in central Prague that blends Japanese matcha culture with playful Czech recipes. We created the complete visual identity, from the logo through packaging to Instagram. As distinctive as their matcha.',
    client: 'JUN Matcha Bar',
    year: '2025',
    industry: 'Food & drink · Café',
    services: ['Logo', 'Brand identity', 'Visual system', 'Packaging'],
    briefHeading: 'A brand people\nactually\n[[remember.]]',
    briefBody: [
      'JUN was opening in central Prague as a specialty matcha bar. A new brand, no history, no awareness. The founders came with a clear vision: an authentic, modern identity that would be just as strong in the café, on the packaging and on Instagram.',
      'Matcha is everywhere these days. The task was to create a brand that does not get lost in a crowded category and says at first glance: this is premium, considered matcha.',
    ],
    challengeHeading: 'Three problems,\none [[solution.]]',
    challenges: [
      {
        num: '01',
        title: 'A crowded category',
        body: 'Matcha bars are popping up everywhere. Most of them look the same — generic green and Asian clichés. JUN had to stand out immediately.',
      },
      {
        num: '02',
        title: 'A brand from zero',
        body: 'No logo, no identity, no awareness. Everything had to be built from the ground up and feel like an established, confident brand straight away.',
      },
      {
        num: '03',
        title: 'It has to work everywhere',
        body: 'The identity had to sit on a cup, on packaging, on signage in the bar and in an Instagram feed. One system, many places, a single impression.',
      },
    ],
    solutionHeading: 'Minimalism\nwith [[character.]]',
    solutionBody: [
      'We designed a minimalist logo system inspired by Japanese calligraphy and geometry. The colour palette combines earthy tones with the soft green of matcha. Clean, premium and free of clichés.',
      'We built the entire visual system so it scales across every channel. From the cup to Instagram it works as one consistent whole.',
    ],
    gallery: ['Logo system', 'Packaging & bar'],
    deliverables: [
      {
        num: '01',
        title: 'Logo system',
        body: 'A minimalist logo inspired by Japanese calligraphy and geometry. Recognisable at a glance and functional at any size.',
      },
      {
        num: '02',
        title: 'Brand guidelines',
        body: 'Clear rules for colour, typography and brand usage, so JUN stays consistent no matter who creates the visuals.',
      },
      {
        num: '03',
        title: 'Packaging design',
        body: 'Packaging, cups and materials that turn every drink into a small experience worth sharing on social media.',
      },
      {
        num: '04',
        title: 'Social media templates',
        body: 'A set of Instagram templates that keep the feed consistent and visually strong, with no extra work per post.',
      },
      {
        num: '05',
        title: 'Interior signage',
        body: 'Signs and visual elements for the bar space that follow on seamlessly from the rest of the brand identity.',
      },
    ],
    results: [
      { value: '4.9★', label: 'rating on Google' },
      { value: '2800+', label: 'followers in the first month' },
      { value: '3 weeks', label: 'from brief to final identity' },
      { value: '1×', label: 'coherent visual system' },
    ],
  },
}

/* ── DUOPET (CaseStudyV2 layout) ───────────────────────────── */

const DUOPET: Record<Locale, DuopetCase> = {
  cs: {
    heroHeading: 'DUOPET:\nWeb, dashboard\na [[AI nástroje.]]',
    heroDesc:
      'DUOPET zpracovává a recykluje plasty pro průmysl v celé Evropě. Postavili jsme jim web, který přivádí nové zakázky, a k tomu dashboard a AI aplikace, které zrychlily jejich interní procesy.',
    client: 'DUOPET s.r.o.',
    year: '2024',
    industry: 'Recyklace · Průmysl',
    services: ['Web Design', 'Development', 'Dashboard', 'AI Apps'],
    chips: ['ISO 9001:2015', 'Dodávky do celé Evropy', 'PET · PP · PE · PS · ABS', 'B2B průmysl'],
    leadStatement: 'Velká firma. Web, který to [[neuměl říct.]]',
    leadBody: [
      'DUOPET je certifikovaný zpracovatel plastů. Regranulace, drcení, laboratorní analýzy a dodávky materiálů pro průmysl napříč celou Evropou. Za firmou stojí roky zkušeností a norma ISO 9001:2015.',
      'Jejich původní web ale působil menší a méně důvěryhodně, než jaká DUOPET ve skutečnosti je. Přišli za námi s jasným zadáním: web, který získává zakázky, a interní nástroje, které zrychlí každodenní provoz.',
    ],
    problemsHeading: 'Web, který [[nepracoval.]]',
    problems: [
      {
        num: '01',
        title: 'Web neodpovídal velikosti firmy',
        body: 'Prezentace působila jako malá dílna, ne jako zavedený evropský dodavatel. Vážní zákazníci odcházeli ke konkurenci ještě před prvním kontaktem.',
        impact: 'Ztracená důvěra',
      },
      {
        num: '02',
        title: 'Žádný stabilní přísun poptávek',
        body: 'Web nebyl stavěný na konverzi ani na vyhledávače. Potenciální klienti firmu online prostě nenašli a poptávky nechodily.',
        impact: 'Málo zakázek',
      },
      {
        num: '03',
        title: 'Ruční a zdlouhavé procesy',
        body: 'Interní agenda běžela roztříštěně a mimo systém. Tým ztrácel čas na opakujících se úkonech, které šlo dávno zautomatizovat.',
        impact: 'Pomalý provoz',
      },
    ],
    goalStatement: 'Web, který [[získává zakázky]], a systém, který[[ šetří čas.]]',
    goalSub:
      'Dvě věci najednou: důvěryhodná prezentace navenek a efektivní nástroje dovnitř firmy. Ne jen hezký web, ale skutečný nástroj na růst.',
    approachHeading: 'Design i vývoj\n[[pod jednou střechou.]]',
    steps: [
      {
        label: 'Strategie',
        body: 'Začali jsme analýzou. Kdo jsou zákazníci DUOPETu, co hledají a proč si vyberou právě je. Web jsme postavili kolem reálných zakázek, ne kolem dojmu.',
      },
      {
        label: 'Web & Design',
        body: 'Čistý, sebevědomý web, který na první pohled ukáže rozsah a spolehlivost firmy. Přehledné služby, jasná cesta k poptávce a rychlé načítání.',
      },
      {
        label: 'Dashboard',
        body: 'Administrační dashboard na míru, který sjednotil celou interní agendu do jednoho přehledného prostředí. Konec roztříštěných tabulek.',
      },
      {
        label: 'AI aplikace',
        body: 'Nadstavbové AI aplikace, které automatizují opakující se úkony a zrychlují každodenní procesy týmu. Méně ruční práce, více času na zakázky.',
      },
    ],
    delivered: [
      'Firemní web',
      'UI/UX Design',
      'Dashboard na míru',
      'AI web aplikace',
      'SEO',
      'Průběžná optimalizace',
    ],
    resultsHeading: 'Čísla, [[která mluví.]]',
    heroResult: {
      value: '2×',
      label: 'vyšší organická návštěvnost už během tří měsíců od spuštění',
    },
    results: [
      { value: 'AI', label: 'aplikace, které zrychlily interní procesy' },
      { value: 'EU', label: 'důvěryhodná prezentace pro celou Evropu' },
      { value: '1', label: 'sjednocené prostředí pro celý interní provoz' },
    ],
    testimonial: {
      quote:
        '„Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila. Oceňuji, že neskončili spuštěním, ale průběžně optimalizují.“',
      name: 'Radek Bareš',
      role: 'Majitel firmy, DUOPET',
    },
  },
  en: {
    heroHeading: 'DUOPET:\nWebsite, dashboard\nand [[AI tools.]]',
    heroDesc:
      'DUOPET processes and recycles plastics for industry across Europe. We built them a website that brings in new orders, plus a dashboard and AI applications that sped up their internal processes.',
    client: 'DUOPET s.r.o.',
    year: '2024',
    industry: 'Recycling · Industry',
    services: ['Web design', 'Development', 'Dashboard', 'AI apps'],
    chips: ['ISO 9001:2015', 'Delivery across Europe', 'PET · PP · PE · PS · ABS', 'B2B industry'],
    leadStatement: 'A big company. A website that [[could not say so.]]',
    leadBody: [
      'DUOPET is a certified plastics processor. Regranulation, shredding, laboratory analysis and material supply for industry across Europe. Behind the company are years of experience and ISO 9001:2015 certification.',
      'Their original website, though, came across as smaller and less credible than DUOPET actually is. They came to us with a clear brief: a website that wins orders, and internal tools that speed up day-to-day operations.',
    ],
    problemsHeading: 'A website that [[did not work.]]',
    problems: [
      {
        num: '01',
        title: 'The website did not match the size of the company',
        body: 'The site felt like a small workshop, not an established European supplier. Serious customers went to the competition before ever making contact.',
        impact: 'Lost trust',
      },
      {
        num: '02',
        title: 'No steady flow of enquiries',
        body: 'The website was built neither for conversion nor for search engines. Potential clients simply never found the company online, and enquiries did not come.',
        impact: 'Too few orders',
      },
      {
        num: '03',
        title: 'Manual, time-consuming processes',
        body: 'Internal admin ran in fragments and outside any system. The team lost time on repetitive tasks that could have been automated long ago.',
        impact: 'Slow operations',
      },
    ],
    goalStatement: 'A website that [[wins orders]], and a system that[[ saves time.]]',
    goalSub:
      'Two things at once: a credible presentation outwards and efficient tools inside the company. Not just a nice website, but a genuine growth tool.',
    approachHeading: 'Design and development\n[[under one roof.]]',
    steps: [
      {
        label: 'Strategy',
        body: 'We started with analysis. Who DUOPET customers are, what they look for and why they would choose them. We built the website around real orders, not around impressions.',
      },
      {
        label: 'Web & design',
        body: 'A clean, confident website that shows the scale and reliability of the company at a glance. Clear services, an obvious path to an enquiry and fast loading.',
      },
      {
        label: 'Dashboard',
        body: 'A custom admin dashboard that brought the entire internal workload into one clear environment. No more scattered spreadsheets.',
      },
      {
        label: 'AI applications',
        body: 'Add-on AI applications that automate repetitive tasks and speed up the team’s daily processes. Less manual work, more time for orders.',
      },
    ],
    delivered: [
      'Company website',
      'UI/UX design',
      'Custom dashboard',
      'AI web applications',
      'SEO',
      'Continuous optimisation',
    ],
    resultsHeading: 'Numbers [[that speak.]]',
    heroResult: {
      value: '2×',
      label: 'higher organic traffic within three months of launch',
    },
    results: [
      { value: 'AI', label: 'applications that sped up internal processes' },
      { value: 'EU', label: 'a credible presentation for the whole of Europe' },
      { value: '1', label: 'unified environment for the entire internal operation' },
    ],
    testimonial: {
      quote:
        '“A professional approach, a fast launch and above all a website that genuinely brings in new clients. Organic traffic doubled within 3 months. I appreciate that they did not stop at launch but keep optimising.”',
      name: 'Radek Bareš',
      role: 'Company owner, DUOPET',
    },
  },
}

export const getRealityExpoCase = (locale: Locale) => REALITY_EXPO[locale]
export const getAparsiaCase = (locale: Locale) => APARSIA[locale]
export const getJunMatchaCase = (locale: Locale) => JUN_MATCHA[locale]
export const getDuopetCase = (locale: Locale) => DUOPET[locale]

/* ── page metadata per case study ──────────────────────────── */

type CaseMetaTags = { title: string; description: string; ogTitle: string; ogDescription: string }

export const CASE_METADATA: Record<Locale, Record<string, CaseMetaTags>> = {
  cs: {
    'reality-expo': {
      title: 'Reality EXPO: Případová studie',
      description:
        'Branding, web a digitální kampaň pro realitní event Reality Expo v Bratislavě. Reality Expo × nosleephouse™.',
      ogTitle: 'Reality EXPO: Případová studie | nosleephouse™',
      ogDescription:
        'Branding, web a digitální kampaň, které rozjely celý veletrh. Přečtěte si, jak jsme to udělali.',
    },
    aparsia: {
      title: 'Aparsia: Případová studie',
      description:
        'Vícejazyčný web, admin portál a CRM pro zprostředkovatele investic do bulharských nemovitostí. Aparsia × nosleephouse™.',
      ogTitle: 'Aparsia: Případová studie | nosleephouse™',
      ogDescription: 'Web, admin portál a CRM postavené na míru. Přečtěte si, jak jsme to udělali.',
    },
    duopet: {
      title: 'DUOPET: Případová studie',
      description:
        'Web, administrační dashboard a AI aplikace pro evropského zpracovatele plastů. DUOPET × nosleephouse™.',
      ogTitle: 'DUOPET: Případová studie | nosleephouse™',
      ogDescription:
        'Web, který získává zakázky, a interní nástroje, které šetří čas. Přečtěte si, jak jsme to udělali.',
    },
    'jun-matcha': {
      title: 'JUN Matcha: Případová studie',
      description:
        'Kompletní vizuální identita pro specialty matcha bar v centru Prahy, od loga přes obaly až po Instagram. JUN × nosleephouse™.',
      ogTitle: 'JUN Matcha: Případová studie | nosleephouse™',
      ogDescription:
        'Silná značka postavená od nuly. Přečtěte si, jak vznikla vizuální identita JUN.',
    },
  },
  en: {
    'reality-expo': {
      title: 'Reality EXPO: case study',
      description:
        'Branding, website and digital campaign for the Reality Expo real-estate event in Bratislava. Reality Expo × nosleephouse™.',
      ogTitle: 'Reality EXPO: case study | nosleephouse™',
      ogDescription:
        'The branding, website and campaign that carried the whole fair. Read how we did it.',
    },
    aparsia: {
      title: 'Aparsia: case study',
      description:
        'A multilingual website, admin portal and CRM for a broker of Bulgarian property investments. Aparsia × nosleephouse™.',
      ogTitle: 'Aparsia: case study | nosleephouse™',
      ogDescription: 'A website, admin portal and CRM built from scratch. Read how we did it.',
    },
    duopet: {
      title: 'DUOPET: case study',
      description:
        'A website, admin dashboard and AI applications for a European plastics processor. DUOPET × nosleephouse™.',
      ogTitle: 'DUOPET: case study | nosleephouse™',
      ogDescription:
        'A website that wins orders and internal tools that save time. Read how we did it.',
    },
    'jun-matcha': {
      title: 'JUN Matcha: case study',
      description:
        'A complete visual identity for a specialty matcha bar in central Prague, from the logo through packaging to Instagram. JUN × nosleephouse™.',
      ogTitle: 'JUN Matcha: case study | nosleephouse™',
      ogDescription:
        'A strong brand built from zero. Read how the JUN visual identity came about.',
    },
  },
}
