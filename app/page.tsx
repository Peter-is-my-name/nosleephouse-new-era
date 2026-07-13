import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogosMarquee from '@/components/LogosMarquee'
import Services from '@/components/Services'
import WhyWeb from '@/components/WhyWeb'
import Portfolio from '@/components/Portfolio'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import ContactCTA from '@/components/ContactCTA'
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
        <WhyWeb />
        <Portfolio />
        <Features />
        <Testimonials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  )
}
