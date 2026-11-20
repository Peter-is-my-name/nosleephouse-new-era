import type { Metadata } from 'next'
import { OG_LOCALE, SCHEMA_LANG, SITE_URLS, type Locale } from './i18n'
import { getDictionary } from './dictionaries'
import {
  absolute,
  blogHref,
  caseHref,
  gdprHref,
  homeHref,
  languageAlternates,
  pathsFor,
  postHref,
  projectsHref,
  routeAlternates,
  type CaseSlug,
} from './routes'
import { CASE_METADATA } from './content/cases'
import { PROJECT_MEDIA } from './content/projectMedia'
import { getPost, getPostSlugs } from './blog'

/* ── social share images (1200×630, generated in public/assets/og) ── */
const OG_W = 1200
const OG_H = 630
export const OG_DEFAULT = '/assets/og/default.jpg'
/** 1200×630 share image derived from a content image: /assets/x/name.ext → /assets/og/name.jpg */
export const ogImageFor = (src: string) => `/assets/og/${src.split('/').pop()!.replace(/\.[a-z]+$/i, '')}.jpg`
const ogImages = (url: string, alt: string) => [{ url, width: OG_W, height: OG_H, alt }]
const twitterCard = (title: string, description: string, image: string) => ({
  card: 'summary_large_image' as const,
  title,
  description,
  images: [image],
})

/**
 * Root metadata for a locale. Each locale has its own root layout and its own
 * domain (.cz / .sk / .com), so each gets its own metadataBase, title template,
 * description and og:locale.
 */
export function buildRootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta

  return {
    metadataBase: new URL(SITE_URLS[locale]),
    title: {
      default: t.titleDefault,
      template: t.titleTemplate,
    },
    description: t.siteDescription,
    // Favicon + Apple icon come from the file conventions app/icon.svg and
    // app/apple-icon.png. The brand logo PNG lives at /icon-nsh.png.
    verification: {
      // Meta (Facebook) Business domain verification — renders
      // <meta name="facebook-domain-verification" ...> in <head> on every page.
      other: {
        'facebook-domain-verification': 'jh93n908qqyjbbiaar4802u66z6a5x',
      },
    },
    // No `alternates` here on purpose: root metadata is inherited by every page
    // that does not set its own, which would give /reklama, /coming-soon and the
    // thank-you pages a canonical pointing at the homepage. The homepage sets
    // its own canonical + hreflang via `buildHomeMetadata`.
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      url: absolute(homeHref(locale), locale),
      siteName: 'nosleephouse™',
      title: t.titleDefault,
      description: t.siteDescription,
      images: ogImages(OG_DEFAULT, t.ogImageAlt),
    },
    twitter: {
      card: 'summary_large_image',
      title: t.titleDefault,
      description: t.siteDescriptionShort,
      images: [OG_DEFAULT],
    },
  }
}

/** Organization + WebSite JSON-LD emitted once per page by the root layout. */
export function buildSiteJsonLd(locale: Locale) {
  const t = getDictionary(locale).meta
  const SITE_URL = SITE_URLS[locale]

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      // One organisation behind all three domains: shared @id links them.
      '@id': `${SITE_URLS.cs}/#organization`,
      name: 'nosleephouse™',
      alternateName: 'nosleephouse',
      url: SITE_URL,
      logo: `${SITE_URL}/icon-nsh.png`,
      description: t.siteDescriptionShort,
      email: 'info@nosleephouse.com',
      telephone: '+420734565323',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bratislava',
        addressCountry: 'SK',
      },
      sameAs: [
        ...Object.values(SITE_URLS).filter((u) => u !== SITE_URL),
        'https://www.instagram.com/nosleephouse/',
        'https://www.linkedin.com/company/nosleephouse',
        'https://www.facebook.com/profile.php?id=61581980980548',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'nosleephouse™',
      url: absolute(homeHref(locale), locale),
      inLanguage: SCHEMA_LANG[locale],
      publisher: { '@id': `${SITE_URLS.cs}/#organization` },
    },
  ]
}

/* ── per-page metadata builders ─────────────────────────────── */

export function buildHomeMetadata(locale: Locale): Metadata {
  return {
    alternates: {
      canonical: homeHref(locale),
      languages: languageAlternates(pathsFor(homeHref)),
    },
  }
}

export function buildProjectsMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta.projects
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: projectsHref(locale),
      languages: routeAlternates('projects'),
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: absolute(projectsHref(locale), locale),
      locale: OG_LOCALE[locale],
      type: 'website',
      images: ogImages(OG_DEFAULT, t.ogTitle),
    },
    twitter: twitterCard(t.ogTitle, t.ogDescription, OG_DEFAULT),
  }
}

export function buildCaseMetadata(locale: Locale, slug: CaseSlug): Metadata {
  const t = CASE_METADATA[locale][slug]
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: caseHref(locale, slug),
      languages: routeAlternates('projects', `/${slug}`),
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: absolute(caseHref(locale, slug), locale),
      locale: OG_LOCALE[locale],
      type: 'article',
      images: ogImages(ogImageFor(PROJECT_MEDIA[slug].img), t.ogTitle),
    },
    twitter: twitterCard(t.ogTitle, t.ogDescription, ogImageFor(PROJECT_MEDIA[slug].img)),
  }
}

export function buildBlogMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta.blog
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: blogHref(locale),
      languages: routeAlternates('blog'),
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: absolute(blogHref(locale), locale),
      locale: OG_LOCALE[locale],
      type: 'website',
      images: ogImages(OG_DEFAULT, t.ogTitle),
    },
    twitter: twitterCard(t.ogTitle, t.ogDescription, OG_DEFAULT),
  }
}

export function buildPostMetadata(locale: Locale, slug: string): Metadata {
  const post = getPost(locale, slug)
  if (!post) return { title: getDictionary(locale).meta.blog.notFound }

  const slugs = getPostSlugs(post.id)
  return {
    // Article titles are long already; the brand suffix would push them past
    // ~60 characters and get truncated in search results.
    title: { absolute: post.title },
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: postHref(locale, post.slug),
      languages: languageAlternates(pathsFor((l) => postHref(l, slugs[l]))),
    },
    openGraph: {
      title: `${post.title} | nosleephouse™`,
      description: post.seoDescription,
      url: absolute(postHref(locale, post.slug), locale),
      locale: OG_LOCALE[locale],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: ogImages(ogImageFor(post.cover), post.coverAlt),
    },
    twitter: twitterCard(post.title, post.seoDescription, ogImageFor(post.cover)),
  }
}

export function buildGdprMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta.gdpr
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: gdprHref(locale),
      languages: routeAlternates('gdpr'),
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: absolute(gdprHref(locale), locale),
      locale: OG_LOCALE[locale],
      type: 'website',
      images: ogImages(OG_DEFAULT, t.title),
    },
    twitter: twitterCard(t.title, t.description, OG_DEFAULT),
  }
}

/**
 * Paid landing pages and their thank-you pages: noindex, but with their own
 * share preview (og:url must not point at the homepage, or Facebook counts
 * shares of the ad page against the homepage).
 */
export function buildLandingMetadata(
  locale: Locale,
  path: string,
  meta: { title: string; description: string },
  image: string = OG_DEFAULT
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: false, follow: false },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absolute(path, locale),
      locale: OG_LOCALE[locale],
      type: 'website',
      siteName: 'nosleephouse™',
      images: ogImages(image, meta.title),
    },
    twitter: twitterCard(meta.title, meta.description, image),
  }
}

/* ── JSON-LD builders ───────────────────────────────────────── */

export function buildBlogListingJsonLd(locale: Locale, posts: ReturnType<typeof getPost>[]) {
  const t = getDictionary(locale)
  const SITE_URL = SITE_URLS[locale]
  const abs = (p: string) => absolute(p, locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t.meta.blog.blogName,
      url: abs(blogHref(locale)),
      inLanguage: SCHEMA_LANG[locale],
      publisher: { '@type': 'Organization', name: 'nosleephouse', url: SITE_URL },
      blogPost: posts.filter(Boolean).map((p) => ({
        '@type': 'BlogPosting',
        headline: p!.title,
        url: abs(postHref(locale, p!.slug)),
        datePublished: p!.date,
        dateModified: p!.date,
        author: { '@type': 'Person', name: p!.author },
        image: `${SITE_URL}${p!.cover}`,
        description: p!.seoDescription,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.blog.crumbHome, item: abs(homeHref(locale)) },
        { '@type': 'ListItem', position: 2, name: t.blog.label, item: abs(blogHref(locale)) },
      ],
    },
  ]
}

export function buildPostJsonLd(locale: Locale, slug: string) {
  const post = getPost(locale, slug)
  if (!post) return []
  const t = getDictionary(locale)
  const SITE_URL = SITE_URLS[locale]
  const abs = (p: string) => absolute(p, locale)

  const wordCount = post.content.reduce((n, b) => {
    if (b.type === 'p' || b.type === 'h2') return n + b.text.split(/\s+/).length
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length
    if (b.type === 'quote') return n + b.text.split(/\s+/).length
    return n
  }, 0)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription,
      image: `${SITE_URL}${post.cover}`,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: SCHEMA_LANG[locale],
      wordCount,
      keywords: post.keywords.join(', '),
      articleSection: post.tags[0],
      author: { '@type': 'Person', name: post.author, jobTitle: post.authorRole },
      publisher: {
        '@type': 'Organization',
        name: 'nosleephouse',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-nsh.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': abs(postHref(locale, post.slug)) },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.blog.crumbHome, item: abs(homeHref(locale)) },
        { '@type': 'ListItem', position: 2, name: t.blog.label, item: abs(blogHref(locale)) },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: abs(postHref(locale, post.slug)),
        },
      ],
    },
  ]
}
