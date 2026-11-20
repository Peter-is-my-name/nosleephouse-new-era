import type { MetadataRoute } from 'next'
import { buildSitemap } from '@/lib/sitemap'

/**
 * /sitemap.xml of www.nosleephouse.cz. The .sk and .com domains get their own
 * (app/(sk)/sk/sitemap.ts, app/(en)/en/sitemap.ts) via the middleware rewrite.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap('cs')
}
