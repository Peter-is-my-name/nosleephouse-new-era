/**
 * Blog data source. No CMS: posts live here as typed data so pages can be
 * statically generated with full control over SEO (metadata, JSON-LD, OG).
 *
 * Posts are stored per locale. Translations of the same article share an `id`,
 * which is what pairs them for hreflang and the language switcher — the URL
 * slug itself is localized.
 *
 * The Reality EXPO posts are derived from the nosleephouse Instagram carousel
 * about the second year of the partnership; the rest are evergreen articles.
 */

import { LOCALES, type Locale } from './i18n'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; author: string; role?: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  /** stable across locales — pairs an article with its translation */
  id: string
  /** localized URL slug */
  slug: string
  title: string
  /** short teaser shown on cards + as meta description fallback */
  excerpt: string
  /** ~150–160 char meta description tuned for search */
  seoDescription: string
  keywords: string[]
  cover: string
  coverAlt: string
  author: string
  authorRole: string
  /** ISO date, used for <time> + schema */
  date: string
  /** human date, localized */
  dateLabel: string
  readingMinutes: number
  tags: string[]
  content: Block[]
}

const AUTHOR = 'Lukáš Čičvák'
const AUTHOR_ROLE_CS = 'Zakladatel & prodejce'
const AUTHOR_ROLE_EN = 'Founder & sales'
const AUTHOR_2 = 'Vratko Varga'
const AUTHOR_2_ROLE_CS = 'Zakladatel & designér'
const AUTHOR_2_ROLE_EN = 'Founder & designer'

/* ── Czech ─────────────────────────────────────────────────── */

const POSTS_CS: BlogPost[] = [
  {
    id: 'reality-expo-2025',
    slug: 'reality-expo-2025-full-servis',
    title: 'Jak vypadá skutečný full servis: Reality EXPO 2025',
    excerpt:
      'S Reality EXPO spolupracujeme druhým rokem. Co začalo jako grafika, se rozrostlo v kompletní partnerství od digitálu až po fyzickou produkci.',
    seoDescription:
      'Případ Reality EXPO 2025: jak nosleephouse pokrylo kompletní servis od PPC kampaní přes web až po motion design na obrazovkách po celé Bratislavě.',
    keywords: [
      'Reality EXPO 2025',
      'full servis marketing',
      'PPC kampaně',
      'event marketing',
      'nosleephouse',
      'digitální agentura',
    ],
    cover: '/assets/reklama/reality-expo-event.webp',
    coverAlt: 'Tým nosleephouse na veletrhu Reality EXPO 2025 v Bratislavě',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_CS,
    date: '2026-07-24',
    dateLabel: '24. července 2026',
    readingMinutes: 5,
    tags: ['Případová studie', 'Event marketing'],
    content: [
      {
        type: 'p',
        text: 'S týmem Reality EXPO spolupracujeme už druhým rokem. Co začalo jako spolupráce na grafice, se postupně rozrostlo do komplexního partnerství, ve kterém pokrýváme prakticky vše, od digitálu až po fyzickou produkci na místě.',
      },
      {
        type: 'p',
        text: 'Reality EXPO je největší realitní event svého druhu v Bratislavě. V ikonické Staré tržnici se každoročně potkávají tisíce lidí řešících bydlení s předními odborníky v oboru. Pro druhý ročník jsme dostali jasné zadání: postarat se o celý digitální i vizuální zážitek tak, aby dával smysl jako jeden celek.',
      },
      { type: 'h2', text: 'Co jsme pro Reality EXPO 2025 zajistili' },
      {
        type: 'list',
        items: [
          'PPC kampaně na Google Ads i Meta Ads s přesným cílením na návštěvníky.',
          'Průběžný vývoj a optimalizaci webu po celou dobu příprav.',
          'Veškeré tiskové materiály a grafické výstupy pro event.',
          'Reklamu v magazínu Forbes.',
          'Motion design kampaň na obrazovkách po celé Bratislavě.',
        ],
      },
      {
        type: 'image',
        src: '/assets/reklama/why-4.jpg',
        alt: 'Vizuální identita a branding Reality EXPO 2025',
        caption: 'Jednotný vizuální jazyk od webu přes tiskoviny až po velkoplošné obrazovky.',
      },
      {
        type: 'p',
        text: 'Tohle je přesně ten typ spolupráce, který máme nejraději. Když klient důvěřuje jednomu týmu s celým projektem, můžeme dodat výsledek, který dává smysl jako celek, ne jako hromada nesouvisejících výstupů od pěti různých dodavatelů.',
      },
      {
        type: 'quote',
        text: 'Spolupracujeme už přes rok a musím velice pochválit jejich přístup i komunikaci. Kdykoliv jsem napsal, často i s krátkým deadlinem, dokázali vše doručit. Doporučuji každému, kdo chce zviditelnit svůj projekt.',
        author: 'Jakub Haidari',
        role: 'Marketing nemovitostí a pořadatel Reality EXPO',
      },
      {
        type: 'p',
        text: 'Chcete i vy výsledky, ne jen sliby? Napište nám a uděláme z vašeho projektu něco, o čem se bude mluvit.',
      },
    ],
  },

  {
    id: 'website-cost-2026',
    slug: 'kolik-stoji-web-na-miru-2026',
    title: 'Kolik stojí web na míru v roce 2026? Kompletní přehled',
    excerpt:
      'Cena webu se pohybuje v řádech desítek tisíc a rozdíly jsou obrovské. Vysvětlíme, co cenu určuje, kolik reálně zaplatíte a jak poznat, že se investice vrátí.',
    seoDescription:
      'Kolik stojí web na míru v roce 2026? Přehled cen podle typu webu, co cenu ovlivňuje a jak poznat, že se investice do webu vyplatí.',
    keywords: ['kolik stojí web', 'cena webu', 'web na míru cena', 'tvorba webu cena', 'web pro firmu'],
    cover: '/assets/reklama/aparsia.png',
    coverAlt: 'Moderní firemní web na notebooku',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_CS,
    date: '2026-07-28',
    dateLabel: '28. července 2026',
    readingMinutes: 6,
    tags: ['Web', 'Průvodce'],
    content: [
      {
        type: 'p',
        text: 'Kolik stojí web? Nejčastější otázka, kterou dostáváme. A zároveň ta nejzáludnější, protože poctivá odpověď zní: záleží. Rozdíl mezi šablonou za pár tisíc a webem na míru, který firmě reálně vydělává, je propastný. Pojďme si to rozebrat na rovinu.',
      },
      { type: 'h2', text: 'Co cenu webu určuje' },
      {
        type: 'list',
        items: [
          'Rozsah: kolik stránek a sekcí web má.',
          'Na míru, nebo šablona: originální design a vlastní kód proti hotové šabloně.',
          'Funkce: e-shop, rezervační systém, napojení na CRM nebo AI nástroje.',
          'Obsah: copywriting, fotografie a grafické podklady.',
          'SEO a rychlost: příprava webu tak, aby ho lidé i vyhledávače našli.',
          'Následná péče: úpravy, aktualizace a průběžná optimalizace.',
        ],
      },
      { type: 'h2', text: 'Orientační ceny podle typu webu' },
      {
        type: 'p',
        text: 'Následující čísla berte jako vodítko, ne jako pevný ceník. Každý projekt je jiný, ale zhruba takto vypadá rozpětí na českém trhu.',
      },
      {
        type: 'list',
        items: [
          'Prezentační jednostránkový web: od cca 15 000 Kč.',
          'Firemní vícestránkový web na míru: zhruba 30 000 až 80 000 Kč.',
          'E-shop nebo web s pokročilými funkcemi: od 80 000 Kč výše.',
        ],
      },
      { type: 'h2', text: 'Proč nejlevnější varianta bývá nejdražší' },
      {
        type: 'p',
        text: 'Levný web z šablony vás na první pohled potěší cenou. Problém přijde později: pomalé načítání, mizerná pozice ve vyhledávačích a design, který nikoho nepřesvědčí. Web, který nepřivádí zákazníky, není úspora. Je to náklad, který nic nevrací.',
      },
      {
        type: 'p',
        text: 'Dobře postavený web se naopak chová jako investice. Pracuje pro vás nonstop, buduje důvěru a mění návštěvníky v poptávky. Otázka tedy není, kolik web stojí, ale kolik vám vydělá.',
      },
      {
        type: 'quote',
        text: 'Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila.',
        author: 'Radek Bareš',
        role: 'Majitel recyklační firmy, DUOPET',
      },
      {
        type: 'p',
        text: 'Chcete vědět, kolik by stál web přesně pro vás? Ozvěte se a připravíme nezávaznou cenovou nabídku na míru.',
      },
    ],
  },

  {
    id: 'losing-customers',
    slug: '7-znaku-ze-vas-web-ztraci-zakazniky',
    title: '7 znaků, že váš web ztrácí zákazníky (a jak to spravit)',
    excerpt:
      'Web může vypadat hezky a přesto tiše odhánět zákazníky. Tady je 7 varovných signálů, na které si dát pozor, a jak každý z nich napravit.',
    seoDescription:
      '7 znaků, že váš web ztrácí zákazníky: pomalé načítání, nejasná výzva k akci, špatná mobilní verze a další. Zjistěte, jak je opravit.',
    keywords: ['web ztrácí zákazníky', 'konverze webu', 'proč web nefunguje', 'optimalizace webu', 'výzva k akci'],
    cover: '/assets/reklama/junmatcha.png',
    coverAlt: 'Zákazník prohlížející web na mobilu',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_CS,
    date: '2026-07-21',
    dateLabel: '21. července 2026',
    readingMinutes: 5,
    tags: ['Web', 'Konverze'],
    content: [
      {
        type: 'p',
        text: 'Web může vypadat na první pohled skvěle a přesto den co den tiše odhání zákazníky. Většina majitelů firem o tom ani neví. Tady je sedm signálů, které to prozradí.',
      },
      { type: 'h2', text: '1. Web se načítá pomalu' },
      {
        type: 'p',
        text: 'Každá vteřina navíc stojí konverze. Pokud se web načítá déle než tři vteřiny, velká část lidí odejde dřív, než vůbec něco uvidí.',
      },
      { type: 'h2', text: '2. Není jasné, co má návštěvník udělat' },
      {
        type: 'p',
        text: 'Dobrý web vede k jedné akci: poptat, koupit, zavolat. Když je výzev pět nebo žádná, návštěvník se ztratí a odejde.',
      },
      { type: 'h2', text: '3. Na mobilu je to k nepoužití' },
      {
        type: 'p',
        text: 'Většina lidí přijde z telefonu. Pokud se na mobilu rozjíždí text a tlačítka se špatně mačkají, přicházíte o většinu zákazníků.',
      },
      { type: 'h2', text: '4. Web nevzbuzuje důvěru' },
      {
        type: 'p',
        text: 'Chybí reference, čísla, reálné fotky nebo kontakt. Bez důvěry si u vás nikdo neobjedná, ať je nabídka jakkoli dobrá.',
      },
      { type: 'h2', text: '5. Texty mluví o vás, ne o zákazníkovi' },
      {
        type: 'p',
        text: 'Návštěvníka nezajímá, jak jste skvělí. Zajímá ho, co z toho bude mít on. Otočte úhel pohledu a konverze porostou.',
      },
      { type: 'h2', text: '6. Web nikdo nenajde' },
      {
        type: 'p',
        text: 'Krásný web bez SEO je billboard v lese. Pokud vás Google ani AI vyhledávače neznají, návštěvnost nepřijde sama.',
      },
      { type: 'h2', text: '7. Roky se s ním nic nedělo' },
      {
        type: 'p',
        text: 'Web není socha. Trh se mění, technologie se mění a web, který se roky neupravoval, dnes spíš brzdí, než pomáhá.',
      },
      {
        type: 'p',
        text: 'Poznáváte svůj web ve dvou a více bodech? Většinu z nich jde opravit rychleji, než čekáte. Ozvěte se a projdeme to spolu.',
      },
    ],
  },

  {
    id: 'website-in-7-days',
    slug: 'web-za-7-dni-nas-proces',
    title: 'Web za 7 dní: jak funguje náš proces od návrhu po spuštění',
    excerpt:
      'Spustit web za sedm dní není kouzlo, ale disciplína. Ukazujeme náš proces krok za krokem, od prvního hovoru až po ostrý web, který přivádí poptávky.',
    seoDescription:
      'Jak spustíme web za 7 dní: náš proces krok za krokem od úvodní konzultace přes návrh a vývoj až po spuštění a optimalizaci.',
    keywords: ['web za 7 dní', 'tvorba webu proces', 'rychlá tvorba webu', 'jak vzniká web', 'spuštění webu'],
    cover: '/assets/blog/web-proces.jpg',
    coverAlt: 'Pracovní stůl s notebookem při tvorbě webu',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_CS,
    date: '2026-07-14',
    dateLabel: '14. července 2026',
    readingMinutes: 5,
    tags: ['Web', 'Proces'],
    content: [
      {
        type: 'p',
        text: 'Sedm dní od zadání po ostrý web zní jako marketingový slib. U nás je to reálný proces, který stojí na jasných krocích a nula zbytečném čekání. Takhle to probíhá.',
      },
      { type: 'h2', text: 'Den 1: Konzultace a cíl' },
      {
        type: 'p',
        text: 'Začínáme rozhovorem, ne dotazníkem. Potřebujeme pochopit váš byznys, zákazníky a jediný cíl, který má web splnit. Bez toho je i krásný web k ničemu.',
      },
      { type: 'h2', text: 'Den 2 až 3: Návrh a struktura' },
      {
        type: 'p',
        text: 'Připravíme strukturu a vizuální návrh na míru. Žádná šablona, žádné kompromisy. Každá sekce má svůj úkol a vede návštěvníka k akci.',
      },
      { type: 'h2', text: 'Den 4 až 5: Vývoj' },
      {
        type: 'p',
        text: 'Návrh měníme v rychlý, čistě nakódovaný web. Kód píšeme sami, takže máme plnou kontrolu nad rychlostí i výsledkem.',
      },
      { type: 'h2', text: 'Den 6: Obsah a SEO' },
      {
        type: 'p',
        text: 'Doplníme texty, které prodávají, a web připravíme pro vyhledávače. Rychlost, popisky, struktura. Aby vás lidé i AI našli.',
      },
      { type: 'h2', text: 'Den 7: Spuštění' },
      {
        type: 'p',
        text: 'Web jde naostro. A tím to nekončí. Sledujeme čísla a web dál ladíme, protože spuštění je začátek, ne cíl.',
      },
      {
        type: 'stats',
        items: [
          { value: '7', label: 'dní od zadání po spuštění' },
          { value: '0', label: 'šablon, vše na míru' },
          { value: '1', label: 'jasný cíl každého webu' },
        ],
      },
      {
        type: 'p',
        text: 'Chcete web, který nebude půl roku ve vývoji? Domluvte si nezávaznou konzultaci.',
      },
    ],
  },

  {
    id: 'seo-basics',
    slug: 'seo-zaklady-pro-majitele-firem',
    title: 'SEO základy pro majitele firem: jak vás najdou na Googlu i v AI',
    excerpt:
      'SEO nemusí být věda. Vysvětlíme základy srozumitelně: co rozhoduje o tom, jestli vás lidé najdou na Googlu a nově i v AI vyhledávačích.',
    seoDescription:
      'SEO základy pro majitele firem: jak funguje vyhledávání na Googlu i v AI, co ovlivňuje pozice a jak začít, aby vás zákazníci našli.',
    keywords: ['SEO pro firmy', 'SEO základy', 'optimalizace pro vyhledávače', 'AI vyhledávání', 'jak být první na Google'],
    cover: '/assets/reklama/why-4.jpg',
    coverAlt: 'Vyhledávání a SEO pro firmy',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_CS,
    date: '2026-07-06',
    dateLabel: '6. července 2026',
    readingMinutes: 6,
    tags: ['SEO', 'Průvodce'],
    content: [
      {
        type: 'p',
        text: 'SEO zní jako obor pro zasvěcené. Ve skutečnosti jde o jednoduchou věc: pomoct vyhledávačům pochopit, čemu se věnujete, a přesvědčit je, že jste důvěryhodní. Tady jsou základy bez balastu.',
      },
      { type: 'h2', text: 'Jak vyhledávače přemýšlejí' },
      {
        type: 'p',
        text: 'Google i novější AI vyhledávače hledají nejlepší odpověď na dotaz. Odměňují weby, které jsou rychlé, srozumitelné, dobře strukturované a mají obsah, kterému se dá věřit.',
      },
      { type: 'h2', text: 'Tři pilíře, na kterých to stojí' },
      {
        type: 'list',
        items: [
          'Technika: rychlost, mobilní verze, čistý kód a správná struktura stránek.',
          'Obsah: texty, které odpovídají na to, co lidé reálně hledají.',
          'Autorita: odkazy, reference a signály, že jste ve svém oboru důvěryhodní.',
        ],
      },
      { type: 'h2', text: 'Nový hráč: AI vyhledávání' },
      {
        type: 'p',
        text: 'Zákazníci se stále častěji ptají rovnou ChatGPT nebo Perplexity. Ty citují weby, které jsou jasně napsané a mají strukturovaná data. Kdo na to myslí dnes, získává náskok.',
      },
      { type: 'h2', text: 'Čím začít' },
      {
        type: 'p',
        text: 'Nemusíte hned řešit vše. Začněte rychlostí webu, jasnými popisky stránek a jedním kvalitním článkem na téma, které vaši zákazníci hledají. Zbytek se dá stavět postupně.',
      },
      {
        type: 'p',
        text: 'Chcete web, který vás v hledání posune nahoru? Postavíme ho tak od základu. Ozvěte se.',
      },
    ],
  },

  {
    id: 'investment-not-cost',
    slug: 'web-neni-naklad-ale-investice',
    title: 'Web není náklad, ale investice. Proč to změní vaše rozhodování',
    excerpt:
      'Dokud web berete jako nutný výdaj, budete šetřit na nesprávném místě. Ukazujeme, proč se vyplatí obrátit úhel pohledu a co to udělá s vaším byznysem.',
    seoDescription:
      'Proč brát web jako investici, ne jako náklad. Jak správné rozhodování o webu ovlivní růst firmy a návratnost celé investice.',
    keywords: ['web jako investice', 'návratnost webu', 'hodnota webu', 'web pro byznys', 'investice do webu'],
    cover: '/assets/reklama/duopetcz.jpeg',
    coverAlt: 'Web jako investice do růstu firmy',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_CS,
    date: '2026-06-30',
    dateLabel: '30. června 2026',
    readingMinutes: 4,
    tags: ['Byznys', 'Strategie'],
    content: [
      {
        type: 'p',
        text: 'Zeptejte se dvou majitelů firem na web a dostanete dvě odpovědi. Jeden řeší, jak ho udělat co nejlevněji. Druhý řeší, kolik mu web přinese. Ten druhý skoro vždycky vyhraje. Tady je proč.',
      },
      { type: 'h2', text: 'Náklad se škrtá, investice se rozvíjí' },
      {
        type: 'p',
        text: 'Když web berete jako náklad, hledáte, kde ušetřit. Levnější šablona, žádné SEO, žádná péče. Výsledkem je web, který nic nedělá. Když ho berete jako investici, ptáte se, co vám vrátí, a rozhodujete se úplně jinak.',
      },
      { type: 'h2', text: 'Web pracuje, i když vy spíte' },
      {
        type: 'p',
        text: 'Dobrý web je nejlepší obchodník ve firmě. Nespí, nebere dovolenou a osloví člověka přesně ve chvíli, kdy vaši službu hledá. To se u nákladu neděje.',
      },
      {
        type: 'quote',
        text: 'Líbilo se mi, že nevytvářeli jen hezký web. Přemýšleli nad tím, co nám přinese klienty. Výsledky to potvrdily.',
        author: 'Dominika Donovalová',
        role: 'Majitelka realitní kanceláře, aparsia.cz',
      },
      { type: 'h2', text: 'Jak poznat investici, která dává smysl' },
      {
        type: 'p',
        text: 'Nejde o to utratit co nejvíc. Jde o to investovat do věcí, které přivádějí zákazníky: rychlost, jasná cesta k poptávce, důvěryhodnost a viditelnost ve vyhledávání. Zbytek je hezký, ale druhotný.',
      },
      {
        type: 'p',
        text: 'Chcete web, který se chová jako investice, ne jako položka v účetnictví? Pojďme se o tom pobavit.',
      },
    ],
  },
]

/* ── English ───────────────────────────────────────────────── */

const POSTS_EN: BlogPost[] = [
  {
    id: 'reality-expo-2025',
    slug: 'reality-expo-2025-full-service',
    title: 'What real full service looks like: Reality EXPO 2025',
    excerpt:
      'We are in our second year with Reality EXPO. What started as graphic design grew into a complete partnership, from digital all the way to physical production.',
    seoDescription:
      'The Reality EXPO 2025 case: how nosleephouse covered the full service, from PPC campaigns and the website to motion design on screens across Bratislava.',
    keywords: [
      'Reality EXPO 2025',
      'full service marketing',
      'PPC campaigns',
      'event marketing',
      'nosleephouse',
      'digital agency',
    ],
    cover: '/assets/reklama/reality-expo-event.webp',
    coverAlt: 'The nosleephouse team at the Reality EXPO 2025 fair in Bratislava',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_EN,
    date: '2026-07-24',
    dateLabel: '24 July 2026',
    readingMinutes: 5,
    tags: ['Case study', 'Event marketing'],
    content: [
      {
        type: 'p',
        text: 'We have been working with the Reality EXPO team for two years now. What began as a collaboration on graphics gradually grew into a comprehensive partnership in which we cover practically everything, from digital through to physical production on site.',
      },
      {
        type: 'p',
        text: 'Reality EXPO is the largest real-estate event of its kind in Bratislava. Every year the iconic Stará tržnica market hall brings together thousands of people looking for a home and the leading experts in the field. For the second edition we got a clear brief: take care of the entire digital and visual experience so that it works as one coherent whole.',
      },
      { type: 'h2', text: 'What we delivered for Reality EXPO 2025' },
      {
        type: 'list',
        items: [
          'PPC campaigns on Google Ads and Meta Ads with precise targeting of attendees.',
          'Continuous development and optimisation of the website throughout the run-up.',
          'All print materials and graphic output for the event.',
          'Advertising in Forbes magazine.',
          'A motion design campaign on screens across Bratislava.',
        ],
      },
      {
        type: 'image',
        src: '/assets/reklama/why-4.jpg',
        alt: 'Visual identity and branding for Reality EXPO 2025',
        caption:
          'One visual language, from the website through print to the large-format screens.',
      },
      {
        type: 'p',
        text: 'This is exactly the kind of collaboration we like best. When a client trusts one team with the whole project, we can deliver a result that makes sense as a whole, rather than a pile of unrelated output from five different suppliers.',
      },
      {
        type: 'quote',
        text: 'We have been working together for over a year and I have to praise both their approach and their communication. Whenever I got in touch, often with a short deadline, they delivered. I recommend them to anyone who wants to get their project noticed.',
        author: 'Jakub Haidari',
        role: 'Real-estate marketing and organiser of Reality EXPO',
      },
      {
        type: 'p',
        text: 'Do you want results too, not just promises? Write to us and we will turn your project into something people talk about.',
      },
    ],
  },

  {
    id: 'website-cost-2026',
    slug: 'how-much-does-a-custom-website-cost-2026',
    title: 'How much does a custom website cost in 2026? A complete overview',
    excerpt:
      'Website prices run into the tens of thousands and the differences are enormous. We explain what drives the price, what you will really pay and how to tell the investment will pay off.',
    seoDescription:
      'How much does a custom website cost in 2026? An overview of prices by website type, what affects the price and how to tell the investment will pay off.',
    keywords: [
      'how much does a website cost',
      'website price',
      'custom website cost',
      'web design pricing',
      'website for business',
    ],
    cover: '/assets/reklama/aparsia.png',
    coverAlt: 'A modern company website on a laptop',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_EN,
    date: '2026-07-28',
    dateLabel: '28 July 2026',
    readingMinutes: 6,
    tags: ['Web', 'Guide'],
    content: [
      {
        type: 'p',
        text: 'How much does a website cost? It is the question we get most often. It is also the trickiest, because the honest answer is: it depends. The gap between a cheap template and a custom website that genuinely earns money for a company is enormous. Let us break it down straight.',
      },
      { type: 'h2', text: 'What drives the price of a website' },
      {
        type: 'list',
        items: [
          'Scope: how many pages and sections the site has.',
          'Custom or template: original design and hand-written code versus an off-the-shelf theme.',
          'Features: e-commerce, a booking system, a CRM connection or AI tools.',
          'Content: copywriting, photography and graphic assets.',
          'SEO and speed: preparing the site so that both people and search engines find it.',
          'Ongoing care: changes, updates and continuous optimisation.',
        ],
      },
      { type: 'h2', text: 'Indicative prices by website type' },
      {
        type: 'p',
        text: 'Treat the following numbers as a guide, not a fixed price list. Every project is different, but this is roughly the range on the Czech market.',
      },
      {
        type: 'list',
        items: [
          'A single-page presentation site: from around CZK 15,000.',
          'A custom multi-page company website: roughly CZK 30,000 to 80,000.',
          'An e-shop or a site with advanced features: from CZK 80,000 upwards.',
        ],
      },
      { type: 'h2', text: 'Why the cheapest option usually ends up the most expensive' },
      {
        type: 'p',
        text: 'A cheap template site looks great on price at first glance. The problem arrives later: slow loading, dismal search rankings and a design that convinces nobody. A website that does not bring in customers is not a saving. It is a cost that returns nothing.',
      },
      {
        type: 'p',
        text: 'A well-built website behaves like an investment instead. It works for you around the clock, builds trust and turns visitors into enquiries. So the question is not what the website costs, but what it will earn you.',
      },
      {
        type: 'quote',
        text: 'A professional approach, a fast launch and above all a website that genuinely brings in new clients. Organic traffic doubled within 3 months.',
        author: 'Radek Bareš',
        role: 'Owner of a recycling company, DUOPET',
      },
      {
        type: 'p',
        text: 'Want to know what a website would cost specifically for you? Get in touch and we will prepare a no-obligation quote.',
      },
    ],
  },

  {
    id: 'losing-customers',
    slug: '7-signs-your-website-is-losing-customers',
    title: '7 signs your website is losing customers (and how to fix it)',
    excerpt:
      'A website can look good and still quietly drive customers away. Here are 7 warning signs to watch for, and how to fix each of them.',
    seoDescription:
      '7 signs your website is losing customers: slow loading, an unclear call to action, a poor mobile version and more. Find out how to fix them.',
    keywords: [
      'website losing customers',
      'website conversion',
      'why my website does not work',
      'website optimisation',
      'call to action',
    ],
    cover: '/assets/reklama/junmatcha.png',
    coverAlt: 'A customer browsing a website on a mobile phone',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_EN,
    date: '2026-07-21',
    dateLabel: '21 July 2026',
    readingMinutes: 5,
    tags: ['Web', 'Conversion'],
    content: [
      {
        type: 'p',
        text: 'A website can look great at first glance and still quietly drive customers away day after day. Most business owners have no idea it is happening. Here are seven signs that give it away.',
      },
      { type: 'h2', text: '1. The site loads slowly' },
      {
        type: 'p',
        text: 'Every extra second costs conversions. If a site takes longer than three seconds to load, a large share of people leave before they see anything at all.',
      },
      { type: 'h2', text: '2. It is not clear what the visitor should do' },
      {
        type: 'p',
        text: 'A good website leads to one action: enquire, buy, call. When there are five calls to action, or none, the visitor gets lost and leaves.',
      },
      { type: 'h2', text: '3. It is unusable on mobile' },
      {
        type: 'p',
        text: 'Most people arrive on a phone. If the text breaks out of the layout and the buttons are hard to tap, you are losing the majority of your customers.',
      },
      { type: 'h2', text: '4. The site does not inspire trust' },
      {
        type: 'p',
        text: 'No testimonials, no numbers, no real photos, no contact details. Without trust nobody will order from you, however good the offer is.',
      },
      { type: 'h2', text: '5. The copy talks about you, not the customer' },
      {
        type: 'p',
        text: 'Visitors do not care how great you are. They care what is in it for them. Flip the perspective and conversions will follow.',
      },
      { type: 'h2', text: '6. Nobody can find the site' },
      {
        type: 'p',
        text: 'A beautiful website without SEO is a billboard in a forest. If neither Google nor the AI search engines know you exist, traffic will not arrive on its own.',
      },
      { type: 'h2', text: '7. Nothing has happened to it for years' },
      {
        type: 'p',
        text: 'A website is not a sculpture. The market changes, technology changes, and a site that has not been touched for years holds you back more than it helps.',
      },
      {
        type: 'p',
        text: 'Recognise your website in two or more of these? Most of them can be fixed faster than you would expect. Get in touch and we will go through it together.',
      },
    ],
  },

  {
    id: 'website-in-7-days',
    slug: 'website-in-7-days-our-process',
    title: 'A website in 7 days: how our process works from design to launch',
    excerpt:
      'Launching a website in seven days is not magic, it is discipline. Here is our process step by step, from the first call to a live site that brings in enquiries.',
    seoDescription:
      'How we launch a website in 7 days: our process step by step, from the first consultation through design and development to launch and optimisation.',
    keywords: [
      'website in 7 days',
      'web design process',
      'fast website build',
      'how a website is made',
      'website launch',
    ],
    cover: '/assets/blog/web-proces.jpg',
    coverAlt: 'A desk with a laptop during a website build',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_EN,
    date: '2026-07-14',
    dateLabel: '14 July 2026',
    readingMinutes: 5,
    tags: ['Web', 'Process'],
    content: [
      {
        type: 'p',
        text: 'Seven days from brief to a live website sounds like a marketing promise. For us it is a real process built on clear steps and zero pointless waiting. Here is how it goes.',
      },
      { type: 'h2', text: 'Day 1: Consultation and goal' },
      {
        type: 'p',
        text: 'We start with a conversation, not a questionnaire. We need to understand your business, your customers and the single goal the website has to achieve. Without that, even a beautiful website is useless.',
      },
      { type: 'h2', text: 'Days 2 to 3: Design and structure' },
      {
        type: 'p',
        text: 'We prepare a custom structure and visual design. No template, no compromises. Every section has a job and leads the visitor towards action.',
      },
      { type: 'h2', text: 'Days 4 to 5: Development' },
      {
        type: 'p',
        text: 'We turn the design into a fast, cleanly coded website. We write the code ourselves, so we have full control over both speed and the end result.',
      },
      { type: 'h2', text: 'Day 6: Content and SEO' },
      {
        type: 'p',
        text: 'We add copy that sells and prepare the site for search engines. Speed, meta descriptions, structure — so that people and AI alike can find you.',
      },
      { type: 'h2', text: 'Day 7: Launch' },
      {
        type: 'p',
        text: 'The website goes live. And that is not the end. We watch the numbers and keep tuning, because launch is the beginning, not the finish line.',
      },
      {
        type: 'stats',
        items: [
          { value: '7', label: 'days from brief to launch' },
          { value: '0', label: 'templates, everything custom' },
          { value: '1', label: 'clear goal for every website' },
        ],
      },
      {
        type: 'p',
        text: 'Want a website that will not sit in development for six months? Book a no-obligation consultation.',
      },
    ],
  },

  {
    id: 'seo-basics',
    slug: 'seo-basics-for-business-owners',
    title: 'SEO basics for business owners: how people find you on Google and in AI',
    excerpt:
      'SEO does not have to be rocket science. We explain the basics in plain language: what decides whether people find you on Google and, increasingly, in AI search.',
    seoDescription:
      'SEO basics for business owners: how search works on Google and in AI, what affects rankings and how to start so customers can find you.',
    keywords: [
      'SEO for business',
      'SEO basics',
      'search engine optimisation',
      'AI search',
      'how to rank first on Google',
    ],
    cover: '/assets/reklama/why-4.jpg',
    coverAlt: 'Search and SEO for businesses',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_EN,
    date: '2026-07-06',
    dateLabel: '6 July 2026',
    readingMinutes: 6,
    tags: ['SEO', 'Guide'],
    content: [
      {
        type: 'p',
        text: 'SEO sounds like a field for insiders. In reality it comes down to something simple: helping search engines understand what you do, and convincing them you are trustworthy. Here are the basics, without the filler.',
      },
      { type: 'h2', text: 'How search engines think' },
      {
        type: 'p',
        text: 'Google and the newer AI search engines are both looking for the best answer to a query. They reward sites that are fast, clear, well structured and carry content you can trust.',
      },
      { type: 'h2', text: 'The three pillars it rests on' },
      {
        type: 'list',
        items: [
          'Technical: speed, the mobile version, clean code and a sound page structure.',
          'Content: copy that answers what people are actually searching for.',
          'Authority: links, references and signals that you are credible in your field.',
        ],
      },
      { type: 'h2', text: 'The new player: AI search' },
      {
        type: 'p',
        text: 'Customers increasingly ask ChatGPT or Perplexity directly. Those tools cite websites that are clearly written and carry structured data. Whoever thinks about it today gets a head start.',
      },
      { type: 'h2', text: 'Where to start' },
      {
        type: 'p',
        text: 'You do not have to solve everything at once. Start with site speed, clear page descriptions and one good article on a topic your customers are searching for. The rest can be built up gradually.',
      },
      {
        type: 'p',
        text: 'Want a website that moves you up the rankings? We build them that way from the ground up. Get in touch.',
      },
    ],
  },

  {
    id: 'investment-not-cost',
    slug: 'a-website-is-an-investment-not-a-cost',
    title: 'A website is an investment, not a cost. Why that changes your decisions',
    excerpt:
      'As long as you see your website as a necessary expense, you will save in the wrong place. Here is why it pays to flip the perspective, and what it does to your business.',
    seoDescription:
      'Why you should treat a website as an investment rather than a cost. How the right decisions about your website affect company growth and overall return.',
    keywords: [
      'website as an investment',
      'website ROI',
      'value of a website',
      'website for business',
      'investing in a website',
    ],
    cover: '/assets/reklama/duopetcz.jpeg',
    coverAlt: 'A website as an investment in company growth',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_EN,
    date: '2026-06-30',
    dateLabel: '30 June 2026',
    readingMinutes: 4,
    tags: ['Business', 'Strategy'],
    content: [
      {
        type: 'p',
        text: 'Ask two business owners about their website and you will get two answers. One is working out how to do it as cheaply as possible. The other is working out how much it will bring in. The second one almost always wins. Here is why.',
      },
      { type: 'h2', text: 'Costs get cut, investments get developed' },
      {
        type: 'p',
        text: 'When you treat a website as a cost, you look for places to save. A cheaper template, no SEO, no upkeep. The result is a website that does nothing. When you treat it as an investment, you ask what it will return, and you decide completely differently.',
      },
      { type: 'h2', text: 'A website works while you sleep' },
      {
        type: 'p',
        text: 'A good website is the best salesperson in the company. It does not sleep, it does not take holidays, and it reaches people exactly when they are looking for your service. Costs do not do that.',
      },
      {
        type: 'quote',
        text: 'What I liked was that they were not just making a pretty website. They thought about what would bring us clients. The results proved them right.',
        author: 'Dominika Donovalová',
        role: 'Owner of a real-estate agency, aparsia.cz',
      },
      { type: 'h2', text: 'How to spot an investment that makes sense' },
      {
        type: 'p',
        text: 'It is not about spending as much as possible. It is about investing in the things that bring customers: speed, a clear path to an enquiry, credibility and visibility in search. The rest is nice, but secondary.',
      },
      {
        type: 'p',
        text: 'Want a website that behaves like an investment rather than a line in the accounts? Let us talk about it.',
      },
    ],
  },
]

const POSTS: Record<Locale, BlogPost[]> = { cs: POSTS_CS, en: POSTS_EN }

export function getAllPosts(locale: Locale): BlogPost[] {
  return [...POSTS[locale]].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return POSTS[locale].find((p) => p.slug === slug)
}

/** Slug of the same article in every locale — used for hreflang alternates. */
export function getPostSlugs(id: string): Record<Locale, string> {
  const slugs = {} as Record<Locale, string>
  for (const locale of LOCALES) {
    slugs[locale] = POSTS[locale].find((p) => p.id === id)?.slug ?? ''
  }
  return slugs
}
