/**
 * Locale primitives shared by every localized page and component.
 *
 * One locale per domain:
 *   www.nosleephouse.cz  → Czech   (cs)
 *   www.nosleephouse.sk  → Slovak  (sk)
 *   www.nosleephouse.com → English (en)
 *
 * Every domain uses clean, unprefixed URLs (`/`, `/projekty`, `/blog`, …).
 * Physically the Czech pages live at the app root, English under app/(en)/en
 * and Slovak under app/(sk)/sk; `middleware.ts` rewrites each domain's URLs to
 * the right tree. On localhost / preview hosts the locale comes from a cookie
 * that is set by visiting `/cs`, `/sk` or `/en` once.
 */

export const LOCALES = ['cs', 'sk', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'cs'

/** Canonical origin of each locale (apex domains 308-redirect to www). */
export const SITE_URLS: Record<Locale, string> = {
  cs: 'https://www.nosleephouse.cz',
  sk: 'https://www.nosleephouse.sk',
  en: 'https://www.nosleephouse.com',
}

/** Czech origin, the default market. Prefer `SITE_URLS[locale]`. */
export const SITE_URL = SITE_URLS.cs

/** Production hostnames (bare, without www) mapped to their locale. */
export const DOMAIN_LOCALE: Record<string, Locale> = {
  'nosleephouse.cz': 'cs',
  'nosleephouse.sk': 'sk',
  'nosleephouse.com': 'en',
}

/** value for the <html lang> attribute */
export const HTML_LANG: Record<Locale, string> = { cs: 'cs', sk: 'sk', en: 'en' }

/** value for og:locale */
export const OG_LOCALE: Record<Locale, string> = { cs: 'cs_CZ', sk: 'sk_SK', en: 'en_GB' }

/** BCP-47 tag used in schema.org `inLanguage` */
export const SCHEMA_LANG: Record<Locale, string> = { cs: 'cs-CZ', sk: 'sk-SK', en: 'en' }

/** hreflang value used in <link rel="alternate"> */
export const HREF_LANG: Record<Locale, string> = { cs: 'cs', sk: 'sk', en: 'en' }

/** Short label + native name for the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { cs: 'CZ', sk: 'SK', en: 'EN' }
export const LOCALE_NAME: Record<Locale, string> = {
  cs: 'Čeština',
  sk: 'Slovenčina',
  en: 'English',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}
