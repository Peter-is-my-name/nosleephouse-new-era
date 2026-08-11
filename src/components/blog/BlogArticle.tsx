import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '../icons'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { rich } from '@/lib/rich'
import { blogHref, caseHref, contactHref, homeHref, postHref } from '@/lib/routes'
import type { BlogPost, Block } from '@/lib/blog'
import { getAllPosts } from '@/lib/blog'
import './blog-pages.css'

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="ba-h2" key={i}>
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="ba-p" key={i}>
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul className="ba-list" key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <figure className="ba-figure" key={i}>
          <div className="ba-figure-media">
            <Image src={block.src} alt={block.alt} fill sizes="(max-width: 800px) 100vw, 760px" />
          </div>
          {block.caption && <figcaption className="ba-figcaption">{block.caption}</figcaption>}
        </figure>
      )
    case 'quote':
      return (
        <blockquote className="ba-quote" key={i}>
          <p className="ba-quote-text">{block.text}</p>
          <footer className="ba-quote-author">
            <span className="ba-quote-name">{block.author}</span>
            {block.role && <span className="ba-quote-role">{block.role}</span>}
          </footer>
        </blockquote>
      )
    case 'stats':
      return (
        <div className="ba-stats" key={i}>
          {block.items.map((s, j) => (
            <div className="ba-stat" key={j}>
              <div className="ba-stat-value">{s.value}</div>
              <div className="ba-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      )
  }
}

export default function BlogArticle({ post, locale }: { post: BlogPost; locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.blog
  const related = getAllPosts(locale)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article className="ba">
        <div className="container ba-head">
          <nav className="ba-crumbs" aria-label={t.crumbsAria}>
            <Link href={homeHref(locale)}>{t.crumbHome}</Link>
            <span aria-hidden="true">/</span>
            <Link href={blogHref(locale)}>{t.label}</Link>
          </nav>

          <div className="ba-tags">
            {post.tags.map((tag) => (
              <span className="ba-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="ba-title">{post.title}</h1>

          <div className="ba-meta">
            <span className="ba-meta-author">{post.author}</span>
            <span className="ba-meta-dot" aria-hidden="true" />
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="ba-meta-dot" aria-hidden="true" />
            <span>
              {post.readingMinutes} {t.readingSuffix}
            </span>
          </div>
        </div>

        <div className="container">
          <div className="ba-cover">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 1100px) 100vw, 1040px" />
          </div>
        </div>

        <div className="container ba-body">{post.content.map(renderBlock)}</div>
      </article>

      {/* CTA */}
      <section className="ba-cta">
        <div className="container ba-cta-inner">
          <div>
            <p className="ba-cta-label">{t.ctaLabel}</p>
            <h2 className="ba-cta-heading">{rich(t.ctaHeading)}</h2>
            <p className="ba-cta-sub">{t.ctaSub}</p>
          </div>
          <div className="ba-cta-actions">
            <Link href={contactHref(locale)} className="btn btn-primary">
              {d.common.bookCall}
              <ArrowRight size={10} />
            </Link>
            <Link href={caseHref(locale, 'reality-expo')} className="btn btn-outline">
              {d.common.viewCaseStudy}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="ba-related">
          <div className="container">
            <p className="cs-section-label">{t.relatedLabel}</p>
            <div className="ba-related-grid">
              {related.map((p) => (
                <Link key={p.slug} href={postHref(locale, p.slug)} className="ba-related-card">
                  <div className="ba-related-media">
                    <Image src={p.cover} alt={p.coverAlt} fill loading="lazy" sizes="(max-width: 760px) 100vw, 50vw" />
                  </div>
                  <div className="ba-related-body">
                    <h3 className="ba-related-title">{p.title}</h3>
                    <span className="ba-related-cta">
                      {t.readArticle}
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
