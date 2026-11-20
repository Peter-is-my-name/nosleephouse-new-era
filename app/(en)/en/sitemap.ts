import type { MetadataRoute } from 'next'
import { buildSitemap } from '@/lib/sitemap'

/** Served as /sitemap.xml on this locale's own domain (via middleware). */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap('en')
}
