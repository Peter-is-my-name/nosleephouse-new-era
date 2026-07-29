import type { Metadata } from 'next'
import ReklamaHeader from '@/components/reklama/ReklamaHeader'
import ReklamaHero from '@/components/reklama/ReklamaHero'
import LogosMarquee from '@/components/LogosMarquee'
import Reviews from '@/components/Reviews'
import WhyPartner from '@/components/reklama/WhyPartner'
import LeadForm from '@/components/reklama/LeadForm'
import Results from '@/components/reklama/Results'
import FAQ from '@/components/reklama/FAQ'
import FinalCTA from '@/components/reklama/FinalCTA'
import ReklamaFooter from '@/components/reklama/ReklamaFooter'
import RevealInit from '@/components/RevealInit'

export const metadata: Metadata = {
  title: 'Získejte nárůst poptávek díky modernímu webu za 7 dní',
  description:
    'Moderní web, který přivádí zákazníky, od návrhu po spuštění za 7 dní. Rezervujte si nezávaznou konzultaci zdarma. Odpovíme do 24 hodin.',
}

export default function ReklamaPage() {
  return (
    <>
      <ReklamaHeader />
      <main>
        <ReklamaHero />
        <LogosMarquee />
        <Reviews />
        <WhyPartner />
        <LeadForm />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <ReklamaFooter />
      <RevealInit />
    </>
  )
}
