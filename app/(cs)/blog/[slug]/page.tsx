import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/SiteShell'
import BlogArticle from '@/components/blog/BlogArticle'
import { getAllPosts, getPost, getPostSlugs } from '@/lib/blog'
import { postHref } from '@/lib/routes'
import { buildPostMetadata, buildPostJsonLd } from '@/lib/siteMeta'

export function generateStaticParams() {
  return getAllPosts('cs').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return buildPostMetadata('cs', slug)
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost('cs', slug)
  if (!post) notFound()

  const jsonLd = buildPostJsonLd('cs', slug)
  const altSlug = getPostSlugs(post.id).en

  return (
    <>
      <SiteShell locale="cs" altHref={postHref('en', altSlug)}>
        <BlogArticle post={post} locale="cs" />
      </SiteShell>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  )
}
