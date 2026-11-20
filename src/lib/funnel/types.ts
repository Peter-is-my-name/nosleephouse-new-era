/**
 * Copy shapes of the three paid-traffic landing pages. Czech files are the
 * reference; Slovak and English files must satisfy the same types, so a
 * missing string or a wrong array length is a build error.
 *
 * Strings marked "rich" may use `**bold**`, `[[accent]]` and `\n` (see rich()).
 * House rule: no em-dashes anywhere.
 */

export type Question = {
  label: string
  /** row label in the internal lead e-mail */
  emailLabel: string
  options: string[]
  error: string
}

export type CommonCopy = {
  meta: { title: string; description: string }
  header: { badge: string; cta: string }
  form: {
    badge: string
    /** rich */
    heading: string
    sub: string
    submit: string
    questions: [Question, Question]
  }
  faq: { lead: string; items: { q: string; a: string }[] }
  /** rich */
  final: { offer: string; sub: string; cta: string }
}

/* ── /reklama (web in 7 days) ─────────────────────────────── */
export type WebCopy = CommonCopy & {
  hero: {
    ratingOn: string
    ratingAria: string
    /** rich */
    title: string
    sub: string
    cta: string
    imgAlt: string
    /** rich, e.g. "**150+** realizovaných projektů od roku 2019" */
    badges: [string, string]
  }
  why: { eyebrow: string; heading: string; items: [string, string, string, string] }
  results: {
    /** rich */
    heading: string
    trust: string
    title: string
    text: string
    imgAlt: string
    stats: [Stat, Stat, Stat]
    logosLabel: string
  }
}
export type Stat = { value: string; label: string }

/* ── /ai-kreativy ─────────────────────────────────────────── */
export type CreativesCopy = CommonCopy & {
  hero: {
    ratingOn: string
    ratingAria: string
    pre: string
    /** rich */
    title: string
    sub: string
    cta: string
    note: [string, string]
    visualAria: string
    frontAria: string
    /** rich */
    chips: [string, string, string]
  }
  problem: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    pains: [Pain, Pain, Pain]
    turnKicker: string
    turnTitle: string
    compareAria: string
    colOld: string
    colNew: string
    rows: [string, string, string][]
    ctaNote: string
  }
  showcase: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    play: string
    /** "{brand}" and "{format}" are replaced */
    playAria: string
    demoTag: string
    note: string
    cta: string
    ctaNote: string
    /** same order as VIDEOS in components/ai-kreativy/videos.ts */
    videos: { format: string; hook: string; text: string }[]
  }
  process: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    steps: { when: string; title: string; text: string }[]
    note: string
    getsEyebrow: string
    /** rich */
    getsTitle: string
    gets: { t: string; d: string }[]
    ctaNote: string
  }
}
export type Pain = { title: string; text: string }
export type Plural = { one: string; few: string; other: string; /** decimals in cs/sk (genitive singular) */ many?: string }

/* ── /ai-automatizace ─────────────────────────────────────── */
export type AutomationCopy = CommonCopy & {
  hero: {
    ratingOn: string
    ratingAria: string
    pre: string
    /** rich */
    title: string
    sub: string
    cta: string
    note: [string, string]
    /** "Systémy v ostrém provozu u:" style label before client names */
    usedBy: string
    aiCard: { title: string; fields: [string, string][]; foot: string }
  }
  /** dashboard mock in the hero (invented numbers) */
  mock: {
    url: string
    /** initials in the mock app logo */
    logo: string
    /** job-number prefix on the chart bars, e.g. 'Z-' / 'J-' */
    jobPrefix: string
    nav: string[]
    title: string
    subtitle: string
    kpis: { label: string; value: string; note: string; good?: boolean }[]
    chartTitle: string
    target: string
    invoicesTitle: string
    invoices: [string, string][]
  }
  pain: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    symptoms: string[]
    punch: [string, string]
  }
  calc: {
    kicker: string
    title: string
    docs: string
    minutes: string
    rate: string
    unitPcs: string
    unitMin: string
    /** currency label shown after numbers, e.g. "Kč" / "€" */
    currency: string
    rateMin: number
    rateMax: number
    rateStep: number
    rateDefault: number
    outLabel: string
    /** plural forms (Intl.PluralRules categories; 'many' falls back to 'few') */
    hoursUnits: Plural
    moneyLabel: string
    daysUnits: Plural
    cta: string
    note: string
    /** Intl locale for number formatting */
    numberLocale: string
  }
  cases: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    live: string
    mockNote: string
    cta: string
    ctaNote: string
    kweku: CaseKweku
    delta: CaseDelta
  }
  build: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    items: { t: string; d: string }[]
    /** rich */
    compareTitle: string
    compareAria: string
    colOld: string
    colNew: string
    rows: [string, string, string][]
  }
  process: {
    eyebrow: string
    /** rich */
    title: string
    lead: string
    steps: { when: string; title: string; text: string }[]
    ctaNote: string
  }
}

export type CaseKweku = {
  client: string
  industry: string
  /** rich */
  title: string
  story: string
  tabsAria: string
  tabs: { tab: string; title: string; text: string }[]
  results: [string, string, string]
  /* strings inside the mock panels (invented data) */
  invoice: { file: string; fields: [string, string][]; reject: string; confirm: string }
  margin: { cols: [string, string, string]; rows: [string, string, string, number][]; alert: string }
  leak: { alert: string; costsTitle: string; legend: [string, string, string]; suppliersTitle: string; suppliers: [string, number][] }
  budget: { title: string; rows: [string, number, number][]; legend: [string, string, string] }
  report: {
    file1: string
    file1Note: string
    sheets: string[]
    file2: string
    file2Note: string
    due: [string, string]
    dueValues: [string, string]
  }
}

export type CaseDelta = {
  client: string
  industry: string
  /** rich */
  title: string
  story: string
  features: { t: string; d: string }[]
  results: [string, string, string]
  /* strings inside the mock (illustrative) */
  mock: {
    app: string
    sub: string
    columns: [string, number][]
    postTitle: string
    postMeta: string
    returned: string
    commentsTitle: string
    comments: [string, string][]
    pinHint: string
    upload: string
    progress: string
    calendarTitle: string
    calendarNote: string
  }
}
