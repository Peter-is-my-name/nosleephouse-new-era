import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import RootHtml from '@/components/RootHtml'
import { buildRootMetadata } from '@/lib/siteMeta'
import '../globals.css'

/** Slovak root layout — served on www.nosleephouse.sk (physically under /sk). */
export const metadata: Metadata = buildRootMetadata('sk')

export default function SkRootLayout({ children }: { children: ReactNode }) {
  return <RootHtml locale="sk">{children}</RootHtml>
}
