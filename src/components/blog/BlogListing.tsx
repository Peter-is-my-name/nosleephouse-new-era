import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '../icons'
import { getAllPosts } from '@/lib/blog'
import './blog-pages.css'

export default function BlogListing() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bl-hero">
        <div className="container">
          <p className="bl-label">Blog</p>
          <h1 className="bl-title">
            Novinky, tipy a<br />
            <span className="accent">příběhy z praxe</span>
          </h1>
          <p className="bl-sub">
            Jak stavíme weby, vedeme kampaně a pomáháme firmám růst. Bez omáčky, s reálnými
            výsledky od reálných klientů.
          </p>
        </div>
        <div className="bl-hero-rule" aria-hidden="true" />
      </section>

      <section className="bl-body">
        <div className="container">
          <div className="bl-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card">
                <div className="bl-card-media">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  <span className="bl-card-badge" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-tags">
                    {post.tags.slice(0, 1).map((t) => (
                      <span className="bl-card-tag" key={t}>
                        {t}
                      </span>
                    ))}
                    <span className="bl-card-reading">{post.readingMinutes} min čtení</span>
                  </div>
                  <h2 className="bl-card-title">{post.title}</h2>
                  <p className="bl-card-excerpt">{post.excerpt}</p>
                  <div className="bl-card-meta">
                    <span className="bl-card-author">{post.author}</span>
                    <span className="bl-card-dot" aria-hidden="true" />
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
