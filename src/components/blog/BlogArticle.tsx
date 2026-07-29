import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '../icons'
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

export default function BlogArticle({ post }: { post: BlogPost }) {
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article className="ba">
        <div className="container ba-head">
          <nav className="ba-crumbs" aria-label="Drobečková navigace">
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
          </nav>

          <div className="ba-tags">
            {post.tags.map((t) => (
              <span className="ba-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <h1 className="ba-title">{post.title}</h1>

          <div className="ba-meta">
            <span className="ba-meta-author">{post.author}</span>
            <span className="ba-meta-dot" aria-hidden="true" />
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="ba-meta-dot" aria-hidden="true" />
            <span>{post.readingMinutes} min čtení</span>
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
            <p className="ba-cta-label">Pojďme spolupracovat</p>
            <h2 className="ba-cta-heading">
              Chcete i vy výsledky,<br />ne jen <span className="accent">sliby?</span>
            </h2>
            <p className="ba-cta-sub">
              Napište nám a uděláme z vašeho projektu něco, o čem se bude mluvit.
            </p>
          </div>
          <div className="ba-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Domluvit schůzku zdarma
              <ArrowRight size={10} />
            </Link>
            <Link href="/projekty/reality-expo" className="btn btn-outline">
              Zobrazit případovou studii
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="ba-related">
          <div className="container">
            <p className="cs-section-label">Další z blogu</p>
            <div className="ba-related-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="ba-related-card">
                  <div className="ba-related-media">
                    <Image src={p.cover} alt={p.coverAlt} fill loading="lazy" sizes="(max-width: 760px) 100vw, 50vw" />
                  </div>
                  <div className="ba-related-body">
                    <h3 className="ba-related-title">{p.title}</h3>
                    <span className="ba-related-cta">
                      Číst článek
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
