import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import './CaseStudy.css';

/* ─── data ─────────────────────────────────────────────────── */

const SERVICES = ['Branding', 'Web Design', 'Development', 'Kampaň'] as const;

const DELIVERABLES = [
  {
    num: '01',
    title: 'Brand Identity',
    body: 'Logo, barevný systém, typografie a grafický jazyk Reality EXPO — profesionální estetika, která zaujme developery, investory i kupující.',
  },
  {
    num: '02',
    title: 'Web & UX',
    body: 'Přehledný web s registracemi vystavovatelů, harmonogramem a mapou stánků. Spuštěn za 4 týdny od briefu, bez jediného odkladu.',
  },
  {
    num: '03',
    title: 'Digitální kampaň',
    body: 'Cílená online kampaň zvýšila dosah 3× oproti předchozímu ročníku a přivedla o 40 % více online registrací.',
  },
] as const;

const RESULTS = [
  { value: '3×', label: 'vyšší digitální dosah oproti předchozímu ročníku' },
  { value: '+40 %', label: 'nárůst online registrací návštěvníků' },
  { value: '4 týdny', label: 'od briefu k ostrému spuštění webu' },
] as const;

export default function RealityExpoCase() {
  return (
    <>
      {/* ── 1. HERO — all project info lives here ────────── */}
      <section className="cs-hero">
        <div className="container cs-hero-inner">

          {/* top nav row */}
          <div className="cs-hero-nav">
            <Link href="/projekty" className="cs-back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Projekty
            </Link>
            <span className="cs-index">01 / 04</span>
          </div>

          {/* main text block */}
          <div className="cs-hero-text">
            <div className="cs-hero-service-row">
              {SERVICES.map((s, i) => (
                <span key={s} className="cs-hero-service">
                  {s}
                  {i < SERVICES.length - 1 && <span className="cs-dot" aria-hidden="true" />}
                </span>
              ))}
            </div>

            <h1 className="cs-hero-heading">
              Reality EXPO:<br />
              Branding, Web<br />a <span className="accent">kampaň.</span>
            </h1>

            <p className="cs-hero-desc">
              Weinhold Legal nás oslovila s výzvou, která spojila tři věci najednou:
              vizuální identitu veletrhu, funkční web a digitální kampaň, která dovezla
              rekordní návštěvnost. Vše spuštěno za čtyři týdny.
            </p>
          </div>

          {/* bottom meta bar */}
          <div className="cs-hero-meta" role="list">
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Klient</span>
              <span className="cs-meta-value">Weinhold Legal</span>
            </div>
            <span className="cs-meta-sep" aria-hidden="true" />
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Rok</span>
              <span className="cs-meta-value">2024</span>
            </div>
            <span className="cs-meta-sep" aria-hidden="true" />
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Odvětví</span>
              <span className="cs-meta-value">Nemovitosti · Právo</span>
            </div>
            <span className="cs-meta-sep" aria-hidden="true" />
            <div className="cs-meta-col cs-meta-col--cta" role="listitem">
              <a
                href="https://weinholdlegal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-live-link"
              >
                Zobrazit web živě
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. ARTWORK — images after all context ────────── */}
      <section className="cs-artwork">
        <div className="cs-artwork-main">
          <Image
            src="/assets/portfolio/reality-expo.jpg"
            alt="Reality EXPO — výsledný web"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
          />
        </div>
        <div className="container cs-artwork-caption">
          <span>Weinhold Legal × Reality EXPO</span>
          <span>Praha · 2024</span>
        </div>
      </section>

      {/* ── 3. BRIEF — 2-column editorial ────────────────── */}
      <section className="cs-brief">
        <div className="container cs-brief-grid">
          <div className="cs-brief-left">
            <p className="cs-section-label reveal">Zadání</p>
            <h2 className="cs-brief-heading reveal">
              Veletrh, který<br />
              potřeboval<br />
              <span className="accent">silný hlas.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              Reality EXPO je každoroční veletrh nemovitostí v Praze, kde se setkávají
              developeři, investoři a kupující. Weinhold Legal — přední česká právní firma
              specializující se na real estate — nás oslovila s jasnou výzvou: vytvořit
              silnou identitu pro veletrh, funkční web a kampaň, která přiláká rekordní návštěvnost.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Veletrh potřeboval vizuální jazyk, který zaujme v přesyceném trhu a zároveň
              jasně komunikuje profesionální zázemí Weinhold Legal. Žádné kompromisy.
              Žádná generická šablona. Identita postavená na míru.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. DELIVERABLES ──────────────────────────────── */}
      <section className="cs-deliverables">
        <div className="container">
          <p className="cs-section-label reveal">Co jsme vytvořili</p>
          <div className="cs-deliv-grid">
            {DELIVERABLES.map((d, i) => (
              <div
                key={d.num}
                className="cs-deliv-item reveal"
                style={{ '--d': `${i * 0.09}s` } as CSSProperties}
              >
                <span className="cs-deliv-num">{d.num}</span>
                <h3 className="cs-deliv-title">{d.title}</h3>
                <p className="cs-deliv-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RESULTS ───────────────────────────────────── */}
      <section className="cs-results">
        <div className="container">
          <p className="cs-section-label reveal">Výsledky</p>
          <h2 className="cs-results-heading reveal">
            Čísla,<br />která <span className="accent">mluví.</span>
          </h2>
          <div className="cs-results-grid">
            {RESULTS.map((r, i) => (
              <div
                key={r.label}
                className="cs-result reveal-scale"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <div className="cs-result-value">{r.value}</div>
                <div className="cs-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. NEXT PROJECT ──────────────────────────────── */}
      <section className="cs-next">
        <div className="container">
          <p className="cs-section-label">Další projekt</p>
          <a href="/projekty/aparsia" className="cs-next-card reveal-scale">
            <div className="cs-next-media">
              <Image
                src="/assets/portfolio/aparsia.jpg"
                alt="Aparsia"
                fill
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
            <div className="cs-next-info">
              <span className="cs-next-brand">DARAMIS · 2024</span>
              <h3 className="cs-next-title">
                Aparsia: Vícejazyčný web, který otevírá realitní trh světu
                <ArrowRight size={20} />
              </h3>
              <span className="cs-next-cta">
                Zobrazit případovou studii
                <ArrowRight size={12} />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────── */}
      <section className="cs-cta">
        <div className="container cs-cta-inner">
          <div>
            <p className="cs-cta-label">Pojďme spolupracovat</p>
            <h2 className="cs-cta-heading">
              Čeká vás<br />podobný <span className="accent">projekt?</span>
            </h2>
            <p className="cs-cta-sub">
              Nezávazně. Bez prezentace. Pobavíme se o vašich cílech.
            </p>
          </div>
          <div className="cs-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Domluvit schůzku zdarma
              <ArrowRight size={10} />
            </Link>
            <Link href="/projekty" className="btn btn-outline">
              Zpět na projekty
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
