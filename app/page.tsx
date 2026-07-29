import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogosMarquee from '@/components/LogosMarquee'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Features from '@/components/Features'
import Reviews from '@/components/Reviews'
import About from '@/components/About'
import ContactCTA from '@/components/ContactCTA'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import CookieDialog from '@/components/CookieDialog'
import RevealInit from '@/components/RevealInit'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosMarquee />
        <Services />
        <Portfolio />
        <Features />
        <Reviews />
        <About />
        <ContactCTA />
        <BlogSection />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  )
}
