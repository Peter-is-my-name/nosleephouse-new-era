import type { Metadata } from 'next'
import { OG_LOCALE, SCHEMA_LANG, SITE_URL, type Locale } from './i18n'
import { getDictionary } from './dictionaries'
import {
  absolute,
  blogHref,
  caseHref,
  gdprHref,
  homeHref,
  languageAlternates,
  postHref,
  projectsHref,
  routeAlternates,
  type CaseSlug,
} from './routes'
import { CASE_METADATA } from './content/cases'
import { getPost, getPostSlugs } from './blog'

/**
 * Root metadata for a locale. Each locale has its own root layout (Czech at the
 * unprefixed URLs, English under /en), so each gets its own title template,
 * description and og:locale.
 */
export function buildRootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta

  return {
    metadataBase: new URL(SITE_URL),
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
      url: `${SITE_URL}${homeHref(locale) === '/' ? '' : homeHref(locale)}`,
      siteName: 'nosleephouse™',
      title: t.titleDefault,
      description: t.siteDescription,
      images: [
        {
          url: '/assets/hero.jpg',
          width: 1200,
          height: 630,
          alt: t.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.titleDefault,
      description: t.siteDescriptionShort,
      images: ['/assets/hero.jpg'],
    },
  }
}

/** Organization + WebSite JSON-LD emitted once per page by the root layout. */
export function buildSiteJsonLd(locale: Locale) {
  const t = getDictionary(locale).meta

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
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
        'https://www.instagram.com/nosleephouse/',
        'https://www.linkedin.com/company/nosleephouse',
        'https://www.facebook.com/profile.php?id=61581980980548',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'nosleephouse™',
      url: `${SITE_URL}${homeHref(locale) === '/' ? '' : homeHref(locale)}`,
      inLanguage: SCHEMA_LANG[locale],
      publisher: { '@type': 'Organization', name: 'nosleephouse™', url: SITE_URL },
    },
  ]
}

/* ── per-page metadata builders ─────────────────────────────── */

export function buildHomeMetadata(locale: Locale): Metadata {
  return {
    alternates: {
      canonical: homeHref(locale),
      languages: languageAlternates({ cs: homeHref('cs'), en: homeHref('en') }),
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
      url: absolute(projectsHref(locale)),
      locale: OG_LOCALE[locale],
      type: 'website',
    },
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
      url: absolute(caseHref(locale, slug)),
      locale: OG_LOCALE[locale],
      type: 'article',
    },
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
      url: absolute(blogHref(locale)),
      locale: OG_LOCALE[locale],
      type: 'website',
    },
  }
}

export function buildPostMetadata(locale: Locale, slug: string): Metadata {
  const post = getPost(locale, slug)
  if (!post) return { title: getDictionary(locale).meta.blog.notFound }

  const slugs = getPostSlugs(post.id)
  return {
    title: post.title,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: postHref(locale, post.slug),
      languages: languageAlternates({
        cs: postHref('cs', slugs.cs),
        en: postHref('en', slugs.en),
      }),
    },
    openGraph: {
      title: `${post.title} | nosleephouse™`,
      description: post.seoDescription,
      url: absolute(postHref(locale, post.slug)),
      locale: OG_LOCALE[locale],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seoDescription,
      images: [post.cover],
    },
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
  }
}

/* ── JSON-LD builders ───────────────────────────────────────── */

export function buildBlogListingJsonLd(locale: Locale, posts: ReturnType<typeof getPost>[]) {
  const t = getDictionary(locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t.meta.blog.blogName,
      url: absolute(blogHref(locale)),
      inLanguage: SCHEMA_LANG[locale],
      publisher: { '@type': 'Organization', name: 'nosleephouse', url: SITE_URL },
      blogPost: posts.filter(Boolean).map((p) => ({
        '@type': 'BlogPosting',
        headline: p!.title,
        url: absolute(postHref(locale, p!.slug)),
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
        { '@type': 'ListItem', position: 1, name: t.blog.crumbHome, item: absolute(homeHref(locale)) },
        { '@type': 'ListItem', position: 2, name: t.blog.label, item: absolute(blogHref(locale)) },
      ],
    },
  ]
}

export function buildPostJsonLd(locale: Locale, slug: string) {
  const post = getPost(locale, slug)
  if (!post) return []
  const t = getDictionary(locale)

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
      mainEntityOfPage: { '@type': 'WebPage', '@id': absolute(postHref(locale, post.slug)) },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.blog.crumbHome, item: absolute(homeHref(locale)) },
        { '@type': 'ListItem', position: 2, name: t.blog.label, item: absolute(blogHref(locale)) },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: absolute(postHref(locale, post.slug)),
        },
      ],
    },
  ]
}
