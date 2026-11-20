/**
 * Single source of truth for every localized URL on the site.
 *
 * Each locale has its own domain, so every path here is UNPREFIXED and only
 * the segments are translated (`/projekty` vs `/projects`). `middleware.ts`
 * maps a domain's clean URL onto the physical route tree. Anything that links
 * between pages must go through these helpers so the language switcher,
 * hreflang tags and the sitemap can never drift apart from the actual routes.
 */

import { LOCALES, SITE_URLS, type Locale } from './i18n'

/** Case-study slugs are shared across locales — they are brand names. */
export const CASE_SLUGS = ['reality-expo', 'aparsia', 'duopet', 'jun-matcha'] as const
export type CaseSlug = (typeof CASE_SLUGS)[number]

const SEGMENTS = {
  home: { cs: '', sk: '', en: '' },
  projects: { cs: '/projekty', sk: '/projekty', en: '/projects' },
  blog: { cs: '/blog', sk: '/blog', en: '/blog' },
  gdpr: { cs: '/gdpr', sk: '/gdpr', en: '/gdpr' },
  thankYou: { cs: '/dotaznik-odeslany-2', sk: '/dotaznik-odoslany-2', en: '/thank-you' },
  /* paid-traffic landing pages (noindex) */
  adWeb: { cs: '/reklama', sk: '/reklama', en: '/offer' },
  adCreatives: { cs: '/ai-kreativy', sk: '/ai-kreativy', en: '/ai-creatives' },
  adAutomation: { cs: '/ai-automatizace', sk: '/ai-automatizacie', en: '/ai-automation' },
} as const satisfies Record<string, Record<Locale, string>>

export type RouteKey = keyof typeof SEGMENTS

/** Thank-you sub-path appended to each landing page. */
export const LP_THANKS: Record<Locale, string> = {
  cs: '/dotaznik-odeslany',
  sk: '/dotaznik-odoslany',
  en: '/thank-you',
}

/** Physical route prefix of a locale's page tree (used by middleware only). */
export const TREE_PREFIX: Record<Locale, string> = { cs: '', sk: '/sk', en: '/en' }

export function route(locale: Locale, key: RouteKey, sub = ''): string {
  const path = `${SEGMENTS[key][locale]}${sub}`
  return path === '' ? '/' : path
}

export const homeHref = (locale: Locale) => route(locale, 'home')
export const projectsHref = (locale: Locale) => route(locale, 'projects')
export const caseHref = (locale: Locale, slug: string) => route(locale, 'projects', `/${slug}`)
export const blogHref = (locale: Locale) => route(locale, 'blog')
export const postHref = (locale: Locale, slug: string) => route(locale, 'blog', `/${slug}`)
export const gdprHref = (locale: Locale) => route(locale, 'gdpr')
export const thankYouHref = (locale: Locale) => route(locale, 'thankYou')
export const lpHref = (locale: Locale, key: 'adWeb' | 'adCreatives' | 'adAutomation') =>
  route(locale, key)
export const lpThanksHref = (locale: Locale, key: 'adWeb' | 'adCreatives' | 'adAutomation') =>
  route(locale, key, LP_THANKS[locale])

/** In-page anchors on the homepage — used by every CTA across the site. */
export function homeAnchor(locale: Locale, hash: string): string {
  const home = homeHref(locale)
  return `${home === '/' ? '' : home}/#${hash}`
}

export const contactHref = (locale: Locale) => homeAnchor(locale, 'contact')

/** Full URL of a path on the domain that serves `locale`. */
export const absolute = (path: string, locale: Locale = 'cs') =>
  `${SITE_URLS[locale]}${path === '/' ? '' : path}`

/**
 * Link target for the language switcher. The explicit `/{locale}` prefix is
 * resolved by middleware: on production it redirects to that locale's domain,
 * on localhost/preview it remembers the locale in a cookie.
 */
export const switchHref = (target: Locale, path: string) =>
  `/${target}${path === '/' ? '' : path}`

/** The same page in every locale (unprefixed paths). */
export type LocalePaths = Record<Locale, string>

export const pathsFor = (fn: (locale: Locale) => string): LocalePaths => ({
  cs: fn('cs'),
  sk: fn('sk'),
  en: fn('en'),
})

/**
 * `alternates.languages` map for Next.js metadata: absolute URLs on each
 * locale's own domain. Every localized page supplies all locales so hreflang
 * stays reciprocal (Google ignores one-way annotations).
 */
export function languageAlternates(paths: LocalePaths) {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[locale] = absolute(paths[locale], locale)
  // Czech is the default market — it also serves as x-default.
  languages['x-default'] = absolute(paths.cs, 'cs')
  return languages
}

/** Convenience for pages that exist under the same route key in every locale. */
export function routeAlternates(key: RouteKey, sub = '') {
  return languageAlternates(pathsFor((l) => route(l, key, sub)))
}
