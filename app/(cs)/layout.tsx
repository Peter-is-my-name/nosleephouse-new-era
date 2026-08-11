import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import RootHtml from '@/components/RootHtml'
import { buildRootMetadata } from '@/lib/siteMeta'
import '../globals.css'

/**
 * Czech root layout. Czech is the default locale and keeps the original,
 * unprefixed URLs; English lives under /en with its own root layout so that
 * <html lang> is correct in the server-rendered HTML.
 */
export const metadata: Metadata = buildRootMetadata('cs')

export default function CsRootLayout({ children }: { children: ReactNode }) {
  return <RootHtml locale="cs">{children}</RootHtml>
}
