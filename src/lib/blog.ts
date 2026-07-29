/**
 * Blog data source. No CMS: posts live here as typed data so pages can be
 * statically generated with full control over SEO (metadata, JSON-LD, OG).
 *
 * The Reality EXPO posts are derived from the nosleephouse Instagram carousel
 * about the second year of the partnership; the rest are evergreen articles.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; author: string; role?: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'list'; items: string[] }

export type BlogPost = {
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
  /** human date, Czech */
  dateLabel: string
  readingMinutes: number
  tags: string[]
  content: Block[]
}

const AUTHOR = 'Lukáš Čičvák'
const AUTHOR_ROLE = 'Zakladatel & prodejce'

export const POSTS: BlogPost[] = [
  {
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
    authorRole: AUTHOR_ROLE,
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
    authorRole: AUTHOR_ROLE,
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
    slug: '7-znaku-ze-vas-web-ztraci-zakazniky',
    title: '7 znaků, že váš web ztrácí zákazníky (a jak to spravit)',
    excerpt:
      'Web může vypadat hezky a přesto tiše odhánět zákazníky. Tady je 7 varovných signálů, na které si dát pozor, a jak každý z nich napravit.',
    seoDescription:
      '7 znaků, že váš web ztrácí zákazníky: pomalé načítání, nejasná výzva k akci, špatná mobilní verze a další. Zjistěte, jak je opravit.',
    keywords: ['web ztrácí zákazníky', 'konverze webu', 'proč web nefunguje', 'optimalizace webu', 'výzva k akci'],
    cover: '/assets/reklama/junmatcha.png',
    coverAlt: 'Zákazník prohlížející web na mobilu',
    author: 'Vratko Varga',
    authorRole: 'Zakladatel & designér',
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
    slug: 'web-za-7-dni-nas-proces',
    title: 'Web za 7 dní: jak funguje náš proces od návrhu po spuštění',
    excerpt:
      'Spustit web za sedm dní není kouzlo, ale disciplína. Ukazujeme náš proces krok za krokem, od prvního hovoru až po ostrý web, který přivádí poptávky.',
    seoDescription:
      'Jak spustíme web za 7 dní: náš proces krok za krokem od úvodní konzultace přes návrh a vývoj až po spuštění a optimalizaci.',
    keywords: ['web za 7 dní', 'tvorba webu proces', 'rychlá tvorba webu', 'jak vzniká web', 'spuštění webu'],
    cover: '/assets/portfolio/jun.jpg',
    coverAlt: 'Tým nosleephouse při návrhu webu',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE,
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
    authorRole: AUTHOR_ROLE,
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
    slug: 'web-neni-naklad-ale-investice',
    title: 'Web není náklad, ale investice. Proč to změní vaše rozhodování',
    excerpt:
      'Dokud web berete jako nutný výdaj, budete šetřit na nesprávném místě. Ukazujeme, proč se vyplatí obrátit úhel pohledu a co to udělá s vaším byznysem.',
    seoDescription:
      'Proč brát web jako investici, ne jako náklad. Jak správné rozhodování o webu ovlivní růst firmy a návratnost celé investice.',
    keywords: ['web jako investice', 'návratnost webu', 'hodnota webu', 'web pro byznys', 'investice do webu'],
    cover: '/assets/reklama/duopetcz.jpeg',
    coverAlt: 'Web jako investice do růstu firmy',
    author: 'Vratko Varga',
    authorRole: 'Zakladatel & designér',
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

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
