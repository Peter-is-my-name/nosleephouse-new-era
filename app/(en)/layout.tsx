import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import RootHtml from '@/components/RootHtml'
import { buildRootMetadata } from '@/lib/siteMeta'
import '../globals.css'

/** English root layout — everything below it is served under /en. */
export const metadata: Metadata = buildRootMetadata('en')

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <RootHtml locale="en">{children}</RootHtml>
}
