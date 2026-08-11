import type { MetadataRoute } from 'next'
import { LOCALES, type Locale } from '@/lib/i18n'
import {
  absolute,
  blogHref,
  caseHref,
  gdprHref,
  homeHref,
  postHref,
  projectsHref,
  CASE_SLUGS,
} from '@/lib/routes'
import { getAllPosts, getPostSlugs } from '@/lib/blog'

/**
 * Every localized page, with reciprocal `alternates.languages` so Google sees
 * the hreflang pairs in the sitemap as well as in the page head.
 *
 * The /reklama funnel is deliberately absent: it is a noindex paid-traffic
 * landing page, not part of the organic site.
 */

function alternatesFor(paths: Record<Locale, string>) {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[locale] = absolute(paths[locale])
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    entries.push({
      url: absolute(homeHref(locale)),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: alternatesFor({ cs: homeHref('cs'), en: homeHref('en') }),
    })

    entries.push({
      url: absolute(projectsHref(locale)),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: alternatesFor({ cs: projectsHref('cs'), en: projectsHref('en') }),
    })

    for (const slug of CASE_SLUGS) {
      entries.push({
        url: absolute(caseHref(locale, slug)),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: alternatesFor({ cs: caseHref('cs', slug), en: caseHref('en', slug) }),
      })
    }

    entries.push({
      url: absolute(blogHref(locale)),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: alternatesFor({ cs: blogHref('cs'), en: blogHref('en') }),
    })

    for (const post of getAllPosts(locale)) {
      const slugs = getPostSlugs(post.id)
      entries.push({
        url: absolute(postHref(locale, post.slug)),
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesFor({
          cs: postHref('cs', slugs.cs),
          en: postHref('en', slugs.en),
        }),
      })
    }

    entries.push({
      url: absolute(gdprHref(locale)),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: alternatesFor({ cs: gdprHref('cs'), en: gdprHref('en') }),
    })
  }

  return entries
}
