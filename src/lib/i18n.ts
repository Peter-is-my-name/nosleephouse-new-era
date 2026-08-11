/**
 * Locale primitives shared by every localized page and component.
 *
 * Czech is the default locale and keeps the original, unprefixed URLs
 * (`/`, `/projekty`, `/blog`, …) so existing search rankings stay intact.
 * English lives under the `/en` prefix with translated path segments.
 *
 * The `/reklama` ad funnel is intentionally NOT localized — it is a Czech-only
 * paid-traffic landing page, excluded from the language switcher, hreflang and
 * the sitemap.
 */

export const LOCALES = ['cs', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'cs'

export const SITE_URL = 'https://nosleephouse.cz'

/** value for the <html lang> attribute */
export const HTML_LANG: Record<Locale, string> = { cs: 'cs', en: 'en' }

/** value for og:locale */
export const OG_LOCALE: Record<Locale, string> = { cs: 'cs_CZ', en: 'en_US' }

/** BCP-47 tag used in schema.org `inLanguage` */
export const SCHEMA_LANG: Record<Locale, string> = { cs: 'cs-CZ', en: 'en' }

/** hreflang value used in <link rel="alternate"> */
export const HREF_LANG: Record<Locale, string> = { cs: 'cs', en: 'en' }

export const otherLocale = (locale: Locale): Locale => (locale === 'cs' ? 'en' : 'cs')

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}
