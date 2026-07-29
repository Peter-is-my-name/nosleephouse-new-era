import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieDialog from '@/components/CookieDialog'
import RevealInit from '@/components/RevealInit'
import BlogArticle from '@/components/blog/BlogArticle'
import { getAllPosts, getPost } from '@/lib/blog'

const SITE = 'https://nosleephouse.cz'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Článek nenalezen' }

  return {
    title: post.title,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | nosleephouse™`,
      description: post.seoDescription,
      url: `${SITE}/blog/${post.slug}`,
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

function wordCount(post: NonNullable<ReturnType<typeof getPost>>): number {
  return post.content.reduce((n, b) => {
    if (b.type === 'p' || b.type === 'h2') return n + b.text.split(/\s+/).length
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length
    if (b.type === 'quote') return n + b.text.split(/\s+/).length
    return n
  }, 0)
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'cs-CZ',
    wordCount: wordCount(post),
    keywords: post.keywords.join(', '),
    articleSection: post.tags[0],
    author: { '@type': 'Person', name: post.author, jobTitle: post.authorRole },
    publisher: {
      '@type': 'Organization',
      name: 'nosleephouse',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/icon-nsh.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` },
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Domů', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <BlogArticle post={post} />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  )
}
