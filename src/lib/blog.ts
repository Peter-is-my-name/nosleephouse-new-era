/**
 * Blog data source. No CMS — posts live here as typed data so pages can be
 * statically generated with full control over SEO (metadata, JSON-LD, OG).
 *
 * All three posts are currently about the Reality EXPO 2025 collaboration
 * (placeholder set — will be diversified later). Content is derived from the
 * nosleephouse Instagram carousel about the second year of the partnership.
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

const AUTHOR = 'Martin Bujňák'
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
        text: 'S týmem Reality EXPO spolupracujeme už druhým rokem. Co začalo jako spolupráce na grafice, se postupně rozrostlo do komplexního partnerství, ve kterém pokrýváme prakticky vše — od digitálu až po fyzickou produkci na místě.',
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
    slug: 'reality-expo-2025-v-cislech',
    title: 'Reality EXPO 2025 v číslech: 2× návštěvnost a 250+ výstupů',
    excerpt:
      'Druhý ročník Reality EXPO přinesl dvojnásobnou návštěvnost, přes 250 grafických výstupů a reklamu ve Forbes. A to celé jeden tým, nula externích dodavatelů.',
    seoDescription:
      'Výsledky Reality EXPO 2025 v číslech: 2× vyšší návštěvnost, 250+ tiskových a grafických výstupů, reklama ve Forbes a kampaně na Google i Meta Ads.',
    keywords: [
      'Reality EXPO výsledky',
      'event marketing čísla',
      'návštěvnost eventu',
      'grafické výstupy',
      'Forbes reklama',
      'nosleephouse',
    ],
    cover: '/assets/reklama/why-4.jpg',
    coverAlt: 'Branding a tiskové materiály Reality EXPO 2025',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE,
    date: '2026-07-17',
    dateLabel: '17. července 2026',
    readingMinutes: 4,
    tags: ['Případová studie', 'Výsledky'],
    content: [
      {
        type: 'p',
        text: 'Čísla řeknou víc než tisíc slov. Druhý ročník Reality EXPO 2025 jsme posunuli o level výš — a tady je přehled toho nejdůležitějšího, co jsme společně s pořadateli dokázali.',
      },
      {
        type: 'stats',
        items: [
          { value: '2×', label: 'vyšší návštěvnost oproti minulému ročníku' },
          { value: '250+', label: 'unikátních tiskových a grafických výstupů' },
          { value: '1', label: 'tým, nula externích dodavatelů' },
        ],
      },
      { type: 'h2', text: 'Digitál, který přivedl lidi' },
      {
        type: 'p',
        text: 'Z digitálu jsme zajistili desítky reklamních bannerů pro Google a Meta Ads. Kampaně jsme stavěli okolo jediného cíle: přivést na event co nejvíce správných lidí. A navíc jsme navrhli i reklamu do magazínu Forbes.',
      },
      {
        type: 'image',
        src: '/assets/reklama/reality-expo-event.webp',
        alt: 'Reality EXPO 2025, veletrh plný návštěvníků ve Staré tržnici',
        caption: 'Dvojnásobná návštěvnost oproti prvnímu ročníku.',
      },
      { type: 'h2', text: 'Proč to fungovalo' },
      {
        type: 'p',
        text: 'Klíč byl v jednotě. Když PPC kampaně, web, tiskoviny i venkovní reklama vznikají pod jednou střechou, mluví stejným jazykem. Výsledek pak není součet dílčích výstupů, ale jeden konzistentní zážitek, který si návštěvník zapamatuje.',
      },
      {
        type: 'quote',
        text: 'Děkujeme. 10/10, doporučujeme.',
        author: 'Tým Reality EXPO',
        role: 'realityexpo.sk',
      },
    ],
  },
  {
    slug: 'od-ppc-po-motion-design-kampan-pro-event',
    title: 'Od PPC po motion design: kompletní kampaň pro event',
    excerpt:
      'Reklamní bannery pro Google a Meta, tisk, Forbes i motion design na velkoplošných obrazovkách po celé Bratislavě. Ukazujeme, co všechno obnáší full servis.',
    seoDescription:
      'Jak vypadá kompletní kampaň pro event: PPC na Google a Meta Ads, tiskové materiály, reklama ve Forbes a motion design na DOOH obrazovkách v Bratislavě.',
    keywords: [
      'motion design kampaň',
      'DOOH reklama Bratislava',
      'PPC Google Meta Ads',
      'event kampaň',
      'kompletní marketing',
      'nosleephouse',
    ],
    cover: '/assets/reklama/reality-expo-event.webp',
    coverAlt: 'Motion design kampaň Reality EXPO na velkoplošné obrazovce v Bratislavě',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE,
    date: '2026-07-10',
    dateLabel: '10. července 2026',
    readingMinutes: 5,
    tags: ['Případová studie', 'Kampaně'],
    content: [
      {
        type: 'p',
        text: 'Kompletní kampaň pro event není jen pár příspěvků na sociální sítě. Je to promyšlený systém, kde každý kanál posiluje ten druhý. U Reality EXPO 2025 jsme to vzali od začátku do konce.',
      },
      { type: 'h2', text: 'Digitál: bannery pro Google a Meta Ads' },
      {
        type: 'p',
        text: 'Základ tvořily desítky reklamních bannerů pro Google a Meta Ads. Každá varianta měla jasný úkol a přesné cílení, takže rozpočet šel jen na lidi s reálným zájmem o event.',
      },
      { type: 'h2', text: 'Tisk a Forbes' },
      {
        type: 'p',
        text: 'K digitálu patří i to hmatatelné. Připravili jsme veškeré tiskové materiály a grafické výstupy a navíc navrhli reklamu do magazínu Forbes, která značce dodala prestiž.',
      },
      { type: 'h2', text: 'Motion design po celé Bratislavě' },
      {
        type: 'p',
        text: 'Pustili jsme se i do motion designu. Vytvořili jsme reklamní kampaň, která běžela celý měsíc na velkoplošných obrazovkách po celé Bratislavě. Statická reklama zaujme, pohyb zaujme víc.',
      },
      {
        type: 'image',
        src: '/assets/reklama/reality-expo-event.webp',
        alt: 'Velkoplošná obrazovka s motion design kampaní Reality EXPO v Bratislavě',
        caption: 'Motion kampaň běžela měsíc na DOOH obrazovkách po celém městě.',
      },
      {
        type: 'p',
        text: 'Když všechny tyto části vznikají pod jednou střechou, výsledek dává smysl jako celek. A přesně to odlišuje kampaň, která funguje, od hromady nesouvisejících výstupů.',
      },
    ],
  },
]

const CZ_MONTHS = [
  'ledna', 'února', 'března', 'dubna', 'května', 'června',
  'července', 'srpna', 'září', 'října', 'listopadu', 'prosince',
]
function shiftDate(iso: string, days: number): { date: string; dateLabel: string } {
  const d = new Date(iso)
  d.setUTCDate(d.getUTCDate() - days)
  const date = d.toISOString().slice(0, 10)
  return { date, dateLabel: `${d.getUTCDate()}. ${CZ_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}` }
}

// TEMP: demo copies so the carousel has enough posts to scroll. This duplicate
// content is only here to preview the UI — replace with real, unique posts.
const DEMO_COPIES: BlogPost[] = POSTS.map((p, i) => ({
  ...p,
  slug: `${p.slug}-2`,
  ...shiftDate(p.date, 28 + i * 7),
}))

const ALL_POSTS: BlogPost[] = [...POSTS, ...DEMO_COPIES]

export function getAllPosts(): BlogPost[] {
  return [...ALL_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug)
}
