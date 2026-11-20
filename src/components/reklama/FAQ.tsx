'use client'
import { useState, type CSSProperties } from 'react'
import type { Locale } from '@/lib/i18n'
import { FUNNEL_UI } from '@/lib/funnel/ui'
import './FAQ.css'

const FAQS = [
  {
    q: 'Kolik to stojí?',
    a: 'Každý projekt je jiný. Po úvodní konzultaci vám připravíme konkrétní cenovou nabídku. Uvádíme cenu předem: žádné skryté poplatky, žádná nepříjemná překvapení.',
  },
  {
    q: 'Jak dlouho to trvá?',
    a: 'Standardní weby a landing pages spouštíme do 7 pracovních dnů od schválení podkladů a designu. Větší projekty (e-shopy, komplexní aplikace) trvají úměrně déle. Harmonogram vždy upřesníme předem.',
  },
  {
    q: 'Už web mám. Můžete jen marketing?',
    a: 'Rozhodně. Můžeme spravovat vaše Meta a Google reklamy, optimalizovat konverze nebo dělat SEO i na existujícím webu. Často ale zjistíme, že stránky potřebují drobné úpravy pro lepší výsledky. Tyto návrhy s vámi vždy konzultujeme.',
  },
  {
    q: 'Musím se zavázat na dlouho?',
    a: 'Ne. Konzultace je zdarma a nezávazná. Projekty řešíme na jednorázové bázi nebo formou měsíčního retaineru podle vašich potřeb. Spolupráci můžete kdykoli ukončit, kontrolu máte plně ve svých rukou.',
  },
  {
    q: 'Děláte i reklamu po spuštění webu?',
    a: 'Ano, to je naše specializace. Navrhujeme kreativy, spravujeme kampaně na Meta (Facebook/Instagram) a Google, optimalizujeme rozpočty. Postupně jsme přešli na měsíční spolupráci s klienty, protože efektivně řešíme i jejich reklamy a bannery.',
  },
]

function Row({ q, a, num }: { q: string; a: string; num: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-row${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="faq-num">{num}</span>
        <span className="faq-q-text">{q}</span>
        <span className="faq-icon" aria-hidden="true">
          <span className="faq-icon-bar faq-icon-h" />
          <span className="faq-icon-bar faq-icon-v" />
        </span>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export type FaqItem = { q: string; a: string }

export default function FAQ({
  items = FAQS,
  lead = 'Nenašli jste odpověď? Napište nám, odpovíme do 24 hodin.',
  locale = 'cs',
}: { items?: readonly FaqItem[]; lead?: string; locale?: Locale } = {}) {
  const ui = FUNNEL_UI[locale].faq
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="faq">
      <div className="container faq-grid">
        <div className="faq-head reveal">
          <h2 className="faq-heading">
            {ui.heading[0]} <span className="accent">{ui.heading[1]}</span>
          </h2>
          <p className="faq-lead">{lead}</p>
          <a href="#konzultace" onClick={toForm} className="faq-link">
            {ui.ask}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="faq-list reveal" style={{ '--d': '0.1s' } as CSSProperties}>
          {items.map((f, i) => (
            <Row key={f.q} q={f.q} a={f.a} num={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </section>
  )
}
