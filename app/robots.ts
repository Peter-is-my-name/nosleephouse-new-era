import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/i18n'
import { thankYouHref } from '@/lib/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // thank-you pages are transactional, not for search
      disallow: [
        '/reklama/dotaznik-odeslany',
        thankYouHref('cs'),
        thankYouHref('en'),
        '/coming-soon',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
