import type { MetadataRoute } from 'next'

const SITE = 'https://nosleephouse.cz'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // thank-you pages are transactional, not for search
      disallow: ['/reklama/dotaznik-odeslany', '/dotaznik-odeslany-2', '/coming-soon'],
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
