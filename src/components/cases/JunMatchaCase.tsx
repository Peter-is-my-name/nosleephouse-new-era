import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import './CaseStudy.css';

/* ─── data ─────────────────────────────────────────────────── */

const SERVICES = ['Logo', 'Brand Identity', 'Visual System', 'Packaging'] as const;

const CHALLENGES = [
  {
    num: '01',
    title: 'Přeplněná kategorie',
    body: 'Matcha bary dnes rostou jako houby po dešti. Většina vypadá stejně, generická zeleň a asijská klišé. JUN musel na první pohled vyčnívat.',
  },
  {
    num: '02',
    title: 'Značka od nuly',
    body: 'Žádné logo, žádná identita, žádné povědomí. Všechno se muselo postavit od základů a hned působit jako zavedená, sebevědomá značka.',
  },
  {
    num: '03',
    title: 'Musí fungovat všude',
    body: 'Identita musela sedět na šálku, na obalu, na cedulích v podniku i ve feedu na Instagramu. Jeden systém, mnoho míst a jediný dojem.',
  },
] as const;

const DELIVERABLES = [
  {
    num: '01',
    title: 'Logo systém',
    body: 'Minimalistické logo inspirované japonskou kaligrafií a geometrií. Rozpoznatelné na první pohled a funkční v jakékoli velikosti.',
  },
  {
    num: '02',
    title: 'Brand Guidelines',
    body: 'Jasná pravidla pro barvy, typografii a použití značky. Aby JUN působil konzistentně, ať už vizuál tvoří kdokoli.',
  },
  {
    num: '03',
    title: 'Packaging Design',
    body: 'Obaly, kelímky a materiály, které z každého drinku dělají malý zážitek hodný sdílení na sítích.',
  },
  {
    num: '04',
    title: 'Social Media šablony',
    body: 'Sada šablon pro Instagram, se kterou je feed konzistentní a vizuálně silný, bez práce navíc při každém příspěvku.',
  },
  {
    num: '05',
    title: 'Interiérové označení',
    body: 'Cedule a vizuální prvky do prostoru baru, které plynule navazují na celou identitu značky.',
  },
] as const;

const RESULTS = [
  { value: '4,9★', label: 'hodnocení na Google' },
  { value: '2800+', label: 'sledujících za první měsíc' },
  { value: '3 týdny', label: 'od briefu po finální identitu' },
  { value: '1×', label: 'ucelený vizuální systém' },
] as const;

export default function JunMatchaCase() {
  return (
    <>
      {/* ── 1. HERO — big image + clean layout ────────────── */}
      <section className="cs-hero">
        <div className="cs-hero-bg" aria-hidden="true">
          <Image
            src="/assets/reklama/junmatcha.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
        </div>
        <div className="cs-hero-overlay" aria-hidden="true" />

        <div className="container cs-hero-inner">
          <div className="cs-hero-text">
            <h1 className="cs-hero-heading">
              JUN:<br />
              Silná značka<br />od <span className="accent">nuly.</span>
            </h1>

            <p className="cs-hero-desc">
              JUN je specialty matcha bar v centru Prahy, který spojuje japonskou kulturu
              matchy s hravými recepturami po česku. Vytvořili jsme kompletní vizuální
              identitu, od loga přes obaly až po Instagram. Stejně výraznou jako jejich matcha.
            </p>
          </div>

          <div className="cs-hero-meta" role="list">
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Klient</span>
              <span className="cs-meta-value">JUN Matcha Bar</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Rok</span>
              <span className="cs-meta-value">2025</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Odvětví</span>
              <span className="cs-meta-value">Gastro · Café</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Služby</span>
              <span className="cs-meta-value">{SERVICES.join(' · ')}</span>
            </div>
            <div className="cs-meta-col cs-meta-col--cta" role="listitem">
              <a
                href="https://www.instagram.com/junmatchabar"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-live-link"
              >
                Zobrazit na Instagramu
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BRIEF — 2-column editorial ────────────────── */}
      <section className="cs-brief">
        <div className="container cs-brief-grid">
          <div className="cs-brief-left">
            <p className="cs-section-label reveal">Zadání</p>
            <h2 className="cs-brief-heading reveal">
              Značka, kterou<br />
              si lidé<br />
              <span className="accent">zapamatují.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              JUN otevíral v centru Prahy jako specialty matcha bar. Nová značka, žádná
              historie, žádné povědomí. Zakladatelé přišli s jasnou vizí: autentická,
              moderní identita, která bude stejně silná v kavárně, na obalech i na Instagramu.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Matcha je dnes všude. Úkolem bylo vytvořit značku, která se v přeplněné
              kategorii neztratí a na první pohled řekne: tohle je prémiová, promyšlená matcha.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. CHALLENGE ──────────────────────────────────── */}
      <section className="cs-challenge">
        <div className="container">
          <p className="cs-section-label reveal">Výzva</p>
          <h2 className="cs-challenge-heading reveal">
            Tři problémy,<br />jedno <span className="accent">řešení.</span>
          </h2>
          <div className="cs-deliv-grid cs-challenge-grid">
            {CHALLENGES.map((c, i) => (
              <div
                key={c.num}
                className="cs-deliv-item reveal"
                style={{ '--d': `${i * 0.09}s` } as CSSProperties}
              >
                <span className="cs-deliv-num">{c.num}</span>
                <h3 className="cs-deliv-title">{c.title}</h3>
                <p className="cs-deliv-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3b. SOLUTION ──────────────────────────────────── */}
      <section className="cs-brief cs-solution">
        <div className="container cs-brief-grid">
          <div className="cs-brief-left">
            <p className="cs-section-label reveal">Řešení</p>
            <h2 className="cs-brief-heading reveal">
              Minimalismus<br />
              s <span className="accent">charakterem.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              Navrhli jsme minimalistický logo systém inspirovaný japonskou kaligrafií a
              geometrií. Barevná paleta spojuje zemité tóny s jemnou zelení matchy. Čistě,
              prémiově a bez klišé.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Celý vizuální systém jsme postavili tak, aby se dal škálovat napříč všemi
              kanály. Od šálku po Instagram funguje jako jeden konzistentní celek.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3c. GALLERY — placeholders, to be replaced with real assets ── */}
      <section className="cs-gallery">
        <div className="container cs-gallery-grid">
          <div className="cs-gallery-item reveal-scale">
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder: Logo systém</span>
            </div>
          </div>
          <div
            className="cs-gallery-item reveal-scale"
            style={{ '--d': '0.08s' } as CSSProperties}
          >
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder: Packaging &amp; bar</span>
            </div>
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
          <a href="/projekty/duopet" className="cs-next-card reveal-scale">
            <div className="cs-next-media">
              <Image
                src="/assets/reklama/duopetcz.jpeg"
                alt="DUOPET"
                fill
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectPosition: 'center 32%' }}
              />
            </div>
            <div className="cs-next-info">
              <span className="cs-next-brand">DUOPET · 2024</span>
              <h3 className="cs-next-title">
                DUOPET: Čistý web, který vyzdvihl recyklaci plastů
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
