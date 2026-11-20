import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/SiteShell'
import BlogArticle from '@/components/blog/BlogArticle'
import { getAllPosts, getPost, getPostSlugs } from '@/lib/blog'
import { pathsFor, postHref } from '@/lib/routes'
import { buildPostMetadata, buildPostJsonLd } from '@/lib/siteMeta'

export function generateStaticParams() {
  return getAllPosts('en').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return buildPostMetadata('en', slug)
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost('en', slug)
  if (!post) notFound()

  const jsonLd = buildPostJsonLd('en', slug)
  const slugs = getPostSlugs(post.id)

  return (
    <>
      <SiteShell locale="en" alternates={pathsFor((l) => postHref(l, slugs[l]))}>
        <BlogArticle post={post} locale="en" />
      </SiteShell>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  )
}
