import ReklamaHeader from '../../reklama/ReklamaHeader'
import LogosMarquee from '../../LogosMarquee'
import Reviews from '../../Reviews'
import LeadForm from '../../reklama/LeadForm'
import FAQ from '../../reklama/FAQ'
import FinalCTA from '../../reklama/FinalCTA'
import ReklamaFooter from '../../reklama/ReklamaFooter'
import RevealInit from '../../RevealInit'
import AkHero from '../../ai-kreativy/AkHero'
import AkProblem from '../../ai-kreativy/AkProblem'
import AkShowcase from '../../ai-kreativy/AkShowcase'
import AkProcess from '../../ai-kreativy/AkProcess'
import { rich } from '@/lib/rich'
import type { Locale } from '@/lib/i18n'
import { lpThanksHref } from '@/lib/routes'
import { contentCategory, getCreativesCopy, SERVICE_NAME } from '@/lib/funnel'
import '../Funnel.css'

/** AI creatives landing page in any locale. */
export default function CreativesLanding({ locale }: { locale: Locale }) {
  const c = getCreativesCopy(locale)
  return (
    <>
      <ReklamaHeader badge={c.header.badge} ctaLabel={c.header.cta} />
      <main>
        <AkHero c={c.hero} />
        <LogosMarquee locale={locale} />
        <AkProblem c={c.problem} cta={c.hero.cta} />
        <AkShowcase c={c.showcase} locale={locale} />
        <AkProcess c={c.process} cta={c.hero.cta} />
        <Reviews locale={locale} />
        <LeadForm
          locale={locale}
          source={locale === 'cs' ? 'ai-kreativy-form' : `ai-kreativy-form-${locale}`}
          service={SERVICE_NAME['ai-kreativy']}
          contentCategory={contentCategory('ai-kreativy', locale)}
          redirectTo={lpThanksHref(locale, 'adCreatives')}
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
