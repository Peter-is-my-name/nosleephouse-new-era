import ReklamaHeader from '../../reklama/ReklamaHeader'
import LogosMarquee from '../../LogosMarquee'
import Reviews from '../../Reviews'
import LeadForm from '../../reklama/LeadForm'
import FAQ from '../../reklama/FAQ'
import FinalCTA from '../../reklama/FinalCTA'
import ReklamaFooter from '../../reklama/ReklamaFooter'
import RevealInit from '../../RevealInit'
import AaHero from '../../ai-automatizace/AaHero'
import AaPain from '../../ai-automatizace/AaPain'
import AaCase from '../../ai-automatizace/AaCase'
import AaBuild from '../../ai-automatizace/AaBuild'
import { rich } from '@/lib/rich'
import type { Locale } from '@/lib/i18n'
import { lpThanksHref } from '@/lib/routes'
import { contentCategory, getAutomationCopy, SERVICE_NAME } from '@/lib/funnel'
import '../Funnel.css'

/** AI automation landing page in any locale. */
export default function AutomationLanding({ locale }: { locale: Locale }) {
  const c = getAutomationCopy(locale)
  return (
    <>
      <ReklamaHeader badge={c.header.badge} ctaLabel={c.header.cta} />
      <main>
        <AaHero c={c.hero} mock={c.mock} />
        <LogosMarquee locale={locale} />
        <AaPain c={c.pain} calc={c.calc} />
        <AaCase c={c.cases} />
        <AaBuild c={c.build} p={c.process} cta={c.hero.cta} />
        <Reviews locale={locale} />
        <LeadForm
          locale={locale}
          source={locale === 'cs' ? 'ai-automatizace-form' : `ai-automatizace-form-${locale}`}
          service={SERVICE_NAME['ai-automatizace']}
          contentCategory={contentCategory('ai-automatizace', locale)}
          redirectTo={lpThanksHref(locale, 'adAutomation')}
          liveBadge={c.form.badge}
          heading={rich(c.form.heading)}
          sub={c.form.sub}
          submitLabel={c.form.submit}
          questions={c.form.questions}
        />
        <FAQ locale={locale} items={c.faq.items} lead={c.faq.lead} />
        <FinalCTA locale={locale} offer={rich(c.final.offer)} sub={c.final.sub} ctaLabel={c.final.cta} />
      </main>
      <ReklamaFooter locale={locale} />
      <RevealInit />
    </>
  )
}
