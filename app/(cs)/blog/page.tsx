import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import BlogListing from '@/components/blog/BlogListing'
import { getAllPosts } from '@/lib/blog'
import { blogHref } from '@/lib/routes'
import { buildBlogMetadata, buildBlogListingJsonLd } from '@/lib/siteMeta'

export const metadata: Metadata = buildBlogMetadata('cs')

export default function BlogPage() {
  const jsonLd = buildBlogListingJsonLd('cs', getAllPosts('cs'))

  return (
    <>
      <SiteShell locale="cs" altHref={blogHref('en')}>
        <BlogListing locale="cs" />
      </SiteShell>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  )
}
