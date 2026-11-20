import ReklamaHeader from '../../reklama/ReklamaHeader'
import ReklamaHero from '../../reklama/ReklamaHero'
import LogosMarquee from '../../LogosMarquee'
import Reviews from '../../Reviews'
import WhyPartner from '../../reklama/WhyPartner'
import LeadForm from '../../reklama/LeadForm'
import Results from '../../reklama/Results'
import FAQ from '../../reklama/FAQ'
import FinalCTA from '../../reklama/FinalCTA'
import ReklamaFooter from '../../reklama/ReklamaFooter'
import RevealInit from '../../RevealInit'
import { rich } from '@/lib/rich'
import type { Locale } from '@/lib/i18n'
import { lpThanksHref } from '@/lib/routes'
import { contentCategory, getWebCopy, SERVICE_NAME } from '@/lib/funnel'

/** /reklama (web in 7 days) in any locale. */
export default function WebLanding({ locale }: { locale: Locale }) {
  const c = getWebCopy(locale)
  return (
    <>
      <ReklamaHeader badge={c.header.badge} ctaLabel={c.header.cta} />
      <main>
        <ReklamaHero c={c.hero} />
        <LogosMarquee locale={locale} />
        <Reviews locale={locale} />
        <WhyPartner c={c.why} cta={c.hero.cta} />
        <LeadForm
          locale={locale}
          source={locale === 'cs' ? 'reklama-inline-form' : `reklama-inline-form-${locale}`}
          service={SERVICE_NAME.web}
          contentCategory={contentCategory('web', locale)}
          redirectTo={lpThanksHref(locale, 'adWeb')}
          liveBadge={c.form.badge}
          heading={rich(c.form.heading)}
          sub={c.form.sub}
          submitLabel={c.form.submit}
          questions={c.form.questions}
        />
        <Results c={c.results} />
        <FAQ locale={locale} items={c.faq.items} lead={c.faq.lead} />
        <FinalCTA locale={locale} offer={rich(c.final.offer)} sub={c.final.sub} ctaLabel={c.final.cta} />
      </main>
      <ReklamaFooter locale={locale} />
      <RevealInit />
    </>
  )
}
