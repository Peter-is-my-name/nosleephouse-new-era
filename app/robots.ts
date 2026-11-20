import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { DOMAIN_LOCALE, SITE_URLS, type Locale } from '@/lib/i18n'

/**
 * One robots.txt, answered per domain: each domain points at its own sitemap.
 *
 * Landing and thank-you pages are NOT disallowed on purpose: they carry
 * `noindex`, and a crawler can only see that tag if it may fetch the page
 * (a blocked URL can still be indexed as a bare link).
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = ((await headers()).get('host') ?? '').split(':')[0].replace(/^www\./, '')
  const locale: Locale = DOMAIN_LOCALE[host] ?? 'cs'
  const origin = SITE_URLS[locale]

  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  }
}
