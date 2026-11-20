import type { MetadataRoute } from 'next'
import { LOCALES, type Locale } from './i18n'
import {
  absolute,
  blogHref,
  caseHref,
  gdprHref,
  homeHref,
  pathsFor,
  postHref,
  projectsHref,
  CASE_SLUGS,
  type LocalePaths,
} from './routes'
import { getAllPosts, getPostSlugs } from './blog'

/**
 * Sitemap of ONE domain: every page of `locale`, each with reciprocal
 * hreflang alternates pointing at the sister pages on the other domains.
 *
 * The paid-traffic landing pages (/reklama, /ai-kreativy, …) are deliberately
 * absent: they are noindex, not part of the organic site.
 */
function alternates(paths: LocalePaths) {
  const languages: Record<string, string> = {}
  for (const l of LOCALES) languages[l] = absolute(paths[l], l)
  languages['x-default'] = absolute(paths.cs, 'cs')
  return { languages }
}

export function buildSitemap(locale: Locale): MetadataRoute.Sitemap {
  // Fixed date of the last content update (a moving `new Date()` would tell
  // crawlers that every page changes on every fetch). Bump on real updates.
  const now = new Date('2026-11-12')
  const url = (p: string) => absolute(p, locale)
  const entries: MetadataRoute.Sitemap = []

  const home = pathsFor(homeHref)
  entries.push({ url: url(home[locale]), lastModified: now, changeFrequency: 'weekly', priority: 1, alternates: alternates(home) })

  const projects = pathsFor(projectsHref)
  entries.push({ url: url(projects[locale]), lastModified: now, changeFrequency: 'monthly', priority: 0.9, alternates: alternates(projects) })

  for (const slug of CASE_SLUGS) {
    const p = pathsFor((l) => caseHref(l, slug))
    entries.push({ url: url(p[locale]), lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: alternates(p) })
  }

  const blog = pathsFor(blogHref)
  entries.push({ url: url(blog[locale]), lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: alternates(blog) })

  for (const post of getAllPosts(locale)) {
    const slugs = getPostSlugs(post.id)
    const p = pathsFor((l) => postHref(l, slugs[l]))
    entries.push({ url: url(p[locale]), lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.7, alternates: alternates(p) })
  }

  const gdpr = pathsFor(gdprHref)
  entries.push({ url: url(gdpr[locale]), lastModified: now, changeFrequency: 'yearly', priority: 0.3, alternates: alternates(gdpr) })

  return entries
}
