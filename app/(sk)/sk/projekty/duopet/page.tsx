import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import DuopetCase from '@/components/cases/DuopetCase'
import { caseHref, pathsFor } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('sk', 'duopet')

export default function DuopetPage() {
  return (
    <SiteShell locale="sk" alternates={pathsFor((l) => caseHref(l, 'duopet'))} mainId="top">
      <DuopetCase locale="sk" />
    </SiteShell>
  )
}
