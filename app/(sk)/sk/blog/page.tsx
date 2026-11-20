import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import BlogListing from '@/components/blog/BlogListing'
import { getAllPosts } from '@/lib/blog'
import { blogHref, pathsFor } from '@/lib/routes'
import { buildBlogMetadata, buildBlogListingJsonLd } from '@/lib/siteMeta'

export const metadata: Metadata = buildBlogMetadata('sk')

export default function BlogPage() {
  const jsonLd = buildBlogListingJsonLd('sk', getAllPosts('sk'))

  return (
    <>
      <SiteShell locale="sk" alternates={pathsFor(blogHref)}>
        <BlogListing locale="sk" />
      </SiteShell>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  )
}
