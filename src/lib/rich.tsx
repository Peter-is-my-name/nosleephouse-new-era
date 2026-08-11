import { Fragment, type ReactNode } from 'react'

/**
 * Renders the tiny markup subset used inside dictionary strings, so that
 * translatable copy can stay plain text instead of JSX:
 *
 *   `**bold**`   → <strong>bold</strong>
 *   `[[accent]]` → <span class="accent">accent</span>  (class is configurable)
 *   `\n`         → <br />
 *
 * Nothing else is interpreted — the input is never treated as HTML.
 */

const TOKEN = /(\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\])/g

function renderLine(line: string, markClass: string): ReactNode[] {
  return line.split(TOKEN).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('[[') && part.endsWith(']]')) {
      return (
        <span className={markClass} key={i}>
          {part.slice(2, -2)}
        </span>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function rich(text: string, markClass = 'accent'): ReactNode {
  const lines = text.split('\n')
  return lines.map((line, i) => (
    <Fragment key={i}>
      {renderLine(line, markClass)}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ))
}

/** Strips the markup so a rich string can be reused in plain-text contexts. */
export function plain(text: string): string {
  return text
    .replace(/\*\*([\s\S]+?)\*\*/g, '$1')
    .replace(/\[\[([\s\S]+?)\]\]/g, '$1')
    .replace(/\n/g, ' ')
}
