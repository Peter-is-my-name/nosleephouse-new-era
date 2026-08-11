import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import ProjectsPage from '@/components/ProjectsPage'
import { projectsHref } from '@/lib/routes'
import { buildProjectsMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildProjectsMetadata('cs')

export default function ProjektyPage() {
  return (
    <SiteShell locale="cs" altHref={projectsHref('en')} mainId="top">
      <ProjectsPage locale="cs" />
    </SiteShell>
  )
}
