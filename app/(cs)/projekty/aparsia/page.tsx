import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import AparsiaCase from '@/components/cases/AparsiaCase'
import { caseHref, pathsFor } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('cs', 'aparsia')

export default function AparsiaPage() {
  return (
    <SiteShell locale="cs" alternates={pathsFor((l) => caseHref(l, 'aparsia'))} mainId="top">
      <AparsiaCase locale="cs" />
    </SiteShell>
  )
}
