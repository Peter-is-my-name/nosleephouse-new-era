import type { Metadata } from 'next'
import ThankYou from '@/components/reklama/ThankYou'
import { getDictionary } from '@/lib/dictionaries'
import { getAutomationCopy } from '@/lib/funnel'
import { lpHref, lpThanksHref } from '@/lib/routes'
import { buildLandingMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildLandingMetadata('cs', lpThanksHref('cs', 'adAutomation'), {
  title: getDictionary('cs').meta.thankYou.title,
  description: getAutomationCopy('cs').meta.description,
})

/* Separate thank-you URL per funnel and locale → URL-based custom conversion in Meta. */
export default function ThankYouPage() {
  return <ThankYou locale="cs" backHref={lpHref('cs', 'adAutomation')} analysis />
}
