import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://nosleephouse.cz'

const CASE_STUDIES = ['reality-expo', 'aparsia', 'duopet', 'jun-matcha']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const cases: MetadataRoute.Sitemap = CASE_STUDIES.map((slug) => ({
    url: `${SITE}/projekty/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    { url: SITE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/projekty`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...cases,
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...posts,
    { url: `${SITE}/gdpr`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
