import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieDialog from '@/components/CookieDialog'
import RevealInit from '@/components/RevealInit'
import BlogListing from '@/components/blog/BlogListing'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://nosleephouse.cz'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Novinky, tipy a příběhy z praxe nosleephouse™. Jak stavíme weby, vedeme kampaně a pomáháme firmám růst, s reálnými výsledky od reálných klientů.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | nosleephouse™',
    description: 'Novinky, tipy a příběhy z praxe. Jak stavíme weby a vedeme kampaně, které přinášejí výsledky.',
    url: `${SITE}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'nosleephouse™ blog',
    url: `${SITE}/blog`,
    inLanguage: 'cs-CZ',
    publisher: { '@type': 'Organization', name: 'nosleephouse', url: SITE },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.date,
      author: { '@type': 'Person', name: p.author },
      image: `${SITE}${p.cover}`,
      description: p.seoDescription,
    })),
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Domů', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <BlogListing />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  )
}
