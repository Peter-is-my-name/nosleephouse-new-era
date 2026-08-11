import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import RealityExpoCase from '@/components/cases/RealityExpoCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('cs', 'reality-expo')

export default function RealityExpoPage() {
  return (
    <SiteShell locale="cs" altHref={caseHref('en', 'reality-expo')} mainId="top">
      <RealityExpoCase locale="cs" />
    </SiteShell>
  )
}
