import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import BlogListing from '@/components/blog/BlogListing'
import { getAllPosts } from '@/lib/blog'
import { blogHref } from '@/lib/routes'
import { buildBlogMetadata, buildBlogListingJsonLd } from '@/lib/siteMeta'

export const metadata: Metadata = buildBlogMetadata('en')

export default function BlogPage() {
  const jsonLd = buildBlogListingJsonLd('en', getAllPosts('en'))

  return (
    <>
      <SiteShell locale="en" altHref={blogHref('cs')}>
        <BlogListing locale="en" />
      </SiteShell>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  )
}
