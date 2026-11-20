import type { Metadata } from 'next'
import AutomationLanding from '@/components/funnel/pages/AutomationLanding'
import { getAutomationCopy } from '@/lib/funnel'
import { lpHref } from '@/lib/routes'
import { buildLandingMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildLandingMetadata('sk', lpHref('sk', 'adAutomation'), getAutomationCopy('sk').meta)

export default function Page() {
  return <AutomationLanding locale="sk" />
}
