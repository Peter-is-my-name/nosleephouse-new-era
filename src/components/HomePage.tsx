import Hero from './Hero'
import LogosMarquee from './LogosMarquee'
import Services from './Services'
import Portfolio from './Portfolio'
import Features from './Features'
import Reviews from './Reviews'
import About from './About'
import ContactCTA from './ContactCTA'
import BlogSection from './BlogSection'
import SiteShell from './SiteShell'
import type { Locale } from '@/lib/i18n'
import { getAllPosts } from '@/lib/blog'

/** The homepage, shared by both locales. */
export default function HomePage({ locale, altHref }: { locale: Locale; altHref: string }) {
  // Narrowed here so the full blog content never crosses into the client bundle
  // via the BlogSection carousel.
  const posts = getAllPosts(locale).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    cover: p.cover,
    coverAlt: p.coverAlt,
    author: p.author,
    date: p.date,
    dateLabel: p.dateLabel,
  }))

  return (
    <SiteShell locale={locale} altHref={altHref}>
      <Hero locale={locale} />
      <LogosMarquee locale={locale} />
      <Services locale={locale} />
      <Portfolio locale={locale} />
      <Features locale={locale} />
      <Reviews locale={locale} />
      <About locale={locale} />
      <ContactCTA locale={locale} />
      <BlogSection locale={locale} posts={posts} />
    </SiteShell>
  )
}
