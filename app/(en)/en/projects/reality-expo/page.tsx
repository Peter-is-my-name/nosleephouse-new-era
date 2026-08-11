import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import RealityExpoCase from '@/components/cases/RealityExpoCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('en', 'reality-expo')

export default function RealityExpoPage() {
  return (
    <SiteShell locale="en" altHref={caseHref('cs', 'reality-expo')} mainId="top">
      <RealityExpoCase locale="en" />
    </SiteShell>
  )
}
