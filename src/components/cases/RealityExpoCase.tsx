import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import './CaseStudy.css';

/* ─── data ─────────────────────────────────────────────────── */

const SERVICES = ['Branding', 'Web Design', 'Development', 'Kampaň'] as const;

const CHALLENGES = [
  {
    num: '01',
    title: 'Generická značka',
    body: 'Vizuální identita nekomunikovala prémiovost ani důvěryhodnost, kterou akce tohoto rozsahu potřebuje.',
  },
  {
    num: '02',
    title: 'Web bez konverzí',
    body: 'Návštěvníci si web prohlédli a odešli. Registrace byla schovaná, cesta k akci nejasná a nikdo ji nevedl k akci.',
  },
  {
    num: '03',
    title: 'Neefektivní kampaně',
    body: 'PPC běželo bez segmentace publika — vysoké náklady na akvizici a nízká návratnost investice.',
  },
] as const;

const DELIVERABLES = [
  {
    num: '01',
    title: 'Brand Identity',
    body: 'Logo, barevný systém, typografie a grafický jazyk Reality EXPO — profesionální estetika, která zaujme developery, investory i kupující.',
  },
  {
    num: '02',
    title: 'Webová stránka',
    body: 'Přehledný web postavený kolem jednoho cíle: registrace. Spuštěn za 4 týdny od briefu, bez jediného odkladu.',
  },
  {
    num: '03',
    title: 'PPC kampaně',
    body: 'Segmentované kampaně s přesným cílením — méně plýtvání rozpočtem, víc kvalifikovaných registrací.',
  },
  {
    num: '04',
    title: 'Event materiály',
    body: 'Vizuály pro tiskoviny, signage a prezentaci akce na místě — jednotný vizuální jazyk od webu až po vstupní bránu.',
  },
  {
    num: '05',
    title: 'Social Media',
    body: 'Obsahová strategie a vizuály pro sociální sítě, které držely publikum v obraze před akcí i během ní.',
  },
] as const;

const RESULTS = [
  { value: '4200+', label: 'registrovaných účastníků' },
  { value: '2,1×', label: 'vyšší konverzní poměr webu' },
  { value: '−38 %', label: 'nižší náklady na registraci' },
  { value: '12×', label: 'návratnost investice' },
] as const;

export default function RealityExpoCase() {
  return (
    <>
      {/* ── 1. HERO — all project info lives here ────────── */}
      <section className="cs-hero">
        {/* full-bleed background image */}
        <div className="cs-hero-bg" aria-hidden="true">
          <Image
            src="/assets/portfolio/reality-expo.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
          />
        </div>
        <div className="cs-hero-overlay" aria-hidden="true" />

        <div className="container cs-hero-inner">

          {/* main text block */}
          <div className="cs-hero-text">
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

          {/* bottom meta bar — no dividing lines */}
          <div className="cs-hero-meta" role="list">
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Klient</span>
              <span className="cs-meta-value">Weinhold Legal</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Rok</span>
              <span className="cs-meta-value">2024</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Odvětví</span>
              <span className="cs-meta-value">Nemovitosti · Právo</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Služby</span>
              <span className="cs-meta-value">{SERVICES.join(' · ')}</span>
            </div>
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

      {/* ── 2. BRIEF — 2-column editorial ────────────────── */}
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
              Reality EXPO je největší realitní veletrh na Slovensku — místo, kde se
              každoročně potkávají tisíce kupujících, prodávajících a developerů.
              Weinhold Legal, klíčový partner akce, nás oslovil s jasným zadáním:
              kompletní digitální transformace, od brand identity přes web až po
              výkonnostní kampaně.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Žádné kompromisy. Žádná generická šablona. Identita, web i kampaně
              postavené na míru pro akci, která si to zaslouží.
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
              Ne víc reklamy.<br />
              Systém, který<br />
              <span className="accent">fungoval.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              Vytvořili jsme vlastní typografický systém a ikonografii, které daly
              Reality EXPO jasnou vizuální identitu. Nový web jsme postavili kolem
              jednoho cíle — registrace: každý prvek stránky vedl k akci.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              PPC kampaně jsme přestavěli od základu s přesnou segmentací publika,
              takže reklama cílila jen na lidi s reálným zájmem — ne na náhodné kliky.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3c. GALLERY — placeholders, to be replaced with real assets ── */}
      <section className="cs-gallery">
        <div className="container cs-gallery-grid">
          <div className="cs-gallery-item reveal-scale">
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder — Brand identita</span>
            </div>
          </div>
          <div
            className="cs-gallery-item reveal-scale"
            style={{ '--d': '0.08s' } as CSSProperties}
          >
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder — Reality EXPO 2024 na místě</span>
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

      {/* ── 5b. TESTIMONIAL ────────────────────────────────── */}
      <section className="cs-testimonial">
        <div className="container cs-testimonial-inner">
          <p className="cs-section-label reveal">Reference</p>
          <blockquote className="cs-testimonial-quote reveal">
            „S Petrem a Martinem spolupracujeme přes 2 roky. Přístup k projektu byl
            od začátku profesionální: jasná komunikace, výsledky, které překonaly
            očekávání. Web spustili přesně v termínu a běží bezchybně. Doporučuji
            každému, kdo hledá agenturní výsledky s lidským přístupem.“
          </blockquote>
          <div className="cs-testimonial-author reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            <Image
              className="cs-testimonial-avatar"
              src="/assets/testimonials/jakub.jpg"
              alt="Jakub Haidari"
              width={56}
              height={56}
            />
            <div>
              <span className="cs-testimonial-name">Jakub Haidari</span>
              <span className="cs-testimonial-role">Marketing nehnuteľností, Reality EXPO</span>
            </div>
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
