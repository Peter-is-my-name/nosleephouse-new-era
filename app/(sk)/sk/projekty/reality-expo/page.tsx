import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import RealityExpoCase from '@/components/cases/RealityExpoCase'
import { caseHref, pathsFor } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('sk', 'reality-expo')

export default function RealityExpoPage() {
  return (
    <SiteShell locale="sk" alternates={pathsFor((l) => caseHref(l, 'reality-expo'))} mainId="top">
      <RealityExpoCase locale="sk" />
    </SiteShell>
  )
}
