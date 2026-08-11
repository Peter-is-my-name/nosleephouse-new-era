/**
 * Single source of truth for every localized URL on the site.
 *
 * Czech paths are unprefixed (the original URLs), English paths live under
 * `/en` with translated segments. Anything that links between pages must go
 * through these helpers so the language switcher, hreflang tags and the
 * sitemap can never drift apart from the actual routes.
 */

import { LOCALES, SITE_URL, type Locale } from './i18n'

/** Case-study slugs are shared across locales — they are brand names. */
export const CASE_SLUGS = ['reality-expo', 'aparsia', 'duopet', 'jun-matcha'] as const
export type CaseSlug = (typeof CASE_SLUGS)[number]

const PREFIX: Record<Locale, string> = { cs: '', en: '/en' }

const SEGMENTS = {
  home: { cs: '', en: '' },
  projects: { cs: '/projekty', en: '/projects' },
  blog: { cs: '/blog', en: '/blog' },
  gdpr: { cs: '/gdpr', en: '/gdpr' },
  thankYou: { cs: '/dotaznik-odeslany-2', en: '/thank-you' },
} as const

export type RouteKey = keyof typeof SEGMENTS

export function route(locale: Locale, key: RouteKey, sub = ''): string {
  const path = `${PREFIX[locale]}${SEGMENTS[key][locale]}${sub}`
  return path === '' ? '/' : path
}

export const homeHref = (locale: Locale) => route(locale, 'home')
export const projectsHref = (locale: Locale) => route(locale, 'projects')
export const caseHref = (locale: Locale, slug: string) => route(locale, 'projects', `/${slug}`)
export const blogHref = (locale: Locale) => route(locale, 'blog')
export const postHref = (locale: Locale, slug: string) => route(locale, 'blog', `/${slug}`)
export const gdprHref = (locale: Locale) => route(locale, 'gdpr')
export const thankYouHref = (locale: Locale) => route(locale, 'thankYou')

/** In-page anchors on the homepage — used by every CTA across the site. */
export function homeAnchor(locale: Locale, hash: string): string {
  const home = homeHref(locale)
  return `${home === '/' ? '' : home}/#${hash}`.replace('//#', '/#')
}

export const contactHref = (locale: Locale) => homeAnchor(locale, 'contact')

export const absolute = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

/**
 * `alternates.languages` map for Next.js metadata. Pass the path of the page
 * in each locale; every localized page must supply both so hreflang is
 * reciprocal (Google ignores one-way annotations).
 */
export function languageAlternates(paths: Record<Locale, string>) {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[locale] = paths[locale]
  // Czech is the default market — it also serves as x-default.
  languages['x-default'] = paths.cs
  return languages
}

/** Convenience for pages that exist under the same route key in both locales. */
export function routeAlternates(key: RouteKey, sub = '') {
  return languageAlternates({ cs: route('cs', key, sub), en: route('en', key, sub) })
}
