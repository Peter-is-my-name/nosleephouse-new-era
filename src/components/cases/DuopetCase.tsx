import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import './CaseStudy.css';
import './CaseStudyV2.css';

/* ─── data ─────────────────────────────────────────────────── */

const SERVICES = ['Web Design', 'Development', 'Dashboard', 'AI Apps'] as const;

const CONTEXT_CHIPS = [
  'ISO 9001:2015',
  'Dodávky do celé Evropy',
  'PET · PP · PE · PS · ABS',
  'B2B průmysl',
] as const;

const PROBLEMS = [
  {
    num: '01',
    title: 'Web neodpovídal velikosti firmy',
    body: 'Prezentace působila jako malá dílna, ne jako zavedený evropský dodavatel. Vážní zákazníci odcházeli ke konkurenci ještě před prvním kontaktem.',
    impact: 'Ztracená důvěra',
  },
  {
    num: '02',
    title: 'Žádný stabilní přísun poptávek',
    body: 'Web nebyl stavěný na konverzi ani na vyhledávače. Potenciální klienti firmu online prostě nenašli a poptávky nechodily.',
    impact: 'Málo zakázek',
  },
  {
    num: '03',
    title: 'Ruční a zdlouhavé procesy',
    body: 'Interní agenda běžela roztříštěně a mimo systém. Tým ztrácel čas na opakujících se úkonech, které šlo dávno zautomatizovat.',
    impact: 'Pomalý provoz',
  },
] as const;

const STEPS = [
  {
    label: 'Strategie',
    body: 'Začali jsme analýzou. Kdo jsou zákazníci DUOPETu, co hledají a proč si vyberou právě je. Web jsme postavili kolem reálných zakázek, ne kolem dojmu.',
  },
  {
    label: 'Web & Design',
    body: 'Čistý, sebevědomý web, který na první pohled ukáže rozsah a spolehlivost firmy. Přehledné služby, jasná cesta k poptávce a rychlé načítání.',
  },
  {
    label: 'Dashboard',
    body: 'Administrační dashboard na míru, který sjednotil celou interní agendu do jednoho přehledného prostředí. Konec roztříštěných tabulek.',
  },
  {
    label: 'AI aplikace',
    body: 'Nadstavbové AI aplikace, které automatizují opakující se úkony a zrychlují každodenní procesy týmu. Méně ruční práce, více času na zakázky.',
  },
] as const;

const DELIVERED = [
  'Firemní web',
  'UI/UX Design',
  'Dashboard na míru',
  'AI web aplikace',
  'SEO',
  'Průběžná optimalizace',
] as const;

const RESULTS = [
  { value: 'AI', label: 'aplikace, které zrychlily interní procesy' },
  { value: 'EU', label: 'důvěryhodná prezentace pro celou Evropu' },
  { value: '1', label: 'sjednocené prostředí pro celý interní provoz' },
] as const;

export default function DuopetCase() {
  return (
    <>
      {/* ── 1. HERO — reused, big image + clean layout ────── */}
      <section className="cs-hero">
        <div className="cs-hero-bg" aria-hidden="true">
          <Image
            src="/assets/reklama/duopetcz.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 32%' }}
          />
        </div>
        <div className="cs-hero-overlay" aria-hidden="true" />

        <div className="container cs-hero-inner">
          <div className="cs-hero-text">
            <h1 className="cs-hero-heading">
              DUOPET:<br />
              Web, dashboard<br />a <span className="accent">AI nástroje.</span>
            </h1>

            <p className="cs-hero-desc">
              DUOPET zpracovává a recykluje plasty pro průmysl v celé Evropě. Postavili
              jsme jim web, který přivádí nové zakázky, a k tomu dashboard a AI aplikace,
              které zrychlily jejich interní procesy.
            </p>
          </div>

          <div className="cs-hero-meta" role="list">
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Klient</span>
              <span className="cs-meta-value">DUOPET s.r.o.</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Rok</span>
              <span className="cs-meta-value">2024</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Odvětví</span>
              <span className="cs-meta-value">Recyklace · Průmysl</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Služby</span>
              <span className="cs-meta-value">{SERVICES.join(' · ')}</span>
            </div>
            <div className="cs-meta-col cs-meta-col--cta" role="listitem">
              <a
                href="https://duopet.cz"
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

      {/* ── 2. LEAD — s čím klient přišel ─────────────────── */}
      <section className="cs2-lead">
        <div className="container">
          <div className="cs2-lead-inner">
            <p className="cs-section-label reveal">S čím klient přišel</p>
            <h2 className="cs2-lead-statement reveal">
              Velká firma. Web, který to <span className="accent">neuměl říct.</span>
            </h2>
            <p className="cs2-lead-body reveal">
              DUOPET je certifikovaný zpracovatel plastů. Regranulace, drcení, laboratorní
              analýzy a dodávky materiálů pro průmysl napříč celou Evropou. Za firmou stojí
              roky zkušeností a norma ISO 9001:2015.
            </p>
            <p className="cs2-lead-body reveal" style={{ '--d': '0.08s' } as CSSProperties}>
              Jejich původní web ale působil menší a méně důvěryhodně, než jaká DUOPET ve
              skutečnosti je. Přišli za námi s jasným zadáním: web, který získává zakázky, a
              interní nástroje, které zrychlí každodenní provoz.
            </p>
            <div className="cs2-chips reveal" style={{ '--d': '0.16s' } as CSSProperties}>
              {CONTEXT_CHIPS.map((c) => (
                <span key={c} className="cs2-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM — co nefungovalo ───────────────────── */}
      <section className="cs2-problem">
        <div className="container">
          <div className="cs2-problem-head">
            <p className="cs-section-label reveal">Problémy, které jsme řešili</p>
            <h2 className="cs2-heading reveal">
              Web, který <span className="accent">nepracoval.</span>
            </h2>
          </div>
          <div className="cs2-prob-list">
            {PROBLEMS.map((p, i) => (
              <div
                key={p.num}
                className="cs2-prob-row reveal"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <span className="cs2-prob-num">{p.num}</span>
                <div>
                  <h3 className="cs2-prob-title">{p.title}</h3>
                  <p className="cs2-prob-body">{p.body}</p>
                </div>
                <div className="cs2-prob-impact">
                  <span className="cs2-prob-impact-label">Důsledek</span>
                  <span className="cs2-prob-impact-value">{p.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GOAL — co bylo cílem ───────────────────────── */}
      <section className="cs2-goal">
        <div className="container">
          <div className="cs2-goal-card reveal-scale">
            <p className="cs-section-label" style={{ marginBottom: 0 }}>Cíl</p>
            <div>
              <p className="cs2-goal-statement">
                Web, který <span className="hl">získává zakázky</span>, a systém, který
                <span className="hl"> šetří čas.</span>
              </p>
              <p className="cs2-goal-sub">
                Dvě věci najednou: důvěryhodná prezentace navenek a efektivní nástroje
                dovnitř firmy. Ne jen hezký web, ale skutečný nástroj na růst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. APPROACH — jak jsme to udělali ─────────────── */}
      <section className="cs2-approach">
        <div className="container cs2-approach-grid">
          <div>
            <p className="cs-section-label reveal">Řešení</p>
            <h2 className="cs2-approach-heading reveal">
              Design i vývoj<br />
              <span className="accent">pod jednou střechou.</span>
            </h2>
          </div>
          <div>
            <div className="cs2-steps">
              {STEPS.map((s, i) => (
                <div
                  key={s.label}
                  className="reveal"
                  style={{ '--d': `${i * 0.07}s` } as CSSProperties}
                >
                  <span className="cs2-step-label">{s.label}</span>
                  <p className="cs2-step-body">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="cs2-delivered reveal">
              <span className="cs2-delivered-label">Co jsme dodali</span>
              <div className="cs2-chips" style={{ marginTop: 0 }}>
                {DELIVERED.map((d) => (
                  <span key={d} className="cs2-chip">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RESULTS — hero metric + supporting ─────────── */}
      <section className="cs2-results">
        <div className="container">
          <div className="cs2-results-head">
            <p className="cs-section-label reveal">Výsledky</p>
            <h2 className="cs2-heading reveal">
              Čísla, <span className="accent">která mluví.</span>
            </h2>
          </div>

          <div className="cs2-result-hero reveal-scale">
            <div className="cs2-result-hero-value">2×</div>
            <div className="cs2-result-hero-label">
              vyšší organická návštěvnost už během tří měsíců od spuštění
            </div>
          </div>

          <div className="cs2-result-grid">
            {RESULTS.map((r, i) => (
              <div
                key={r.label}
                className="cs2-result reveal-scale"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <div className="cs2-result-value">{r.value}</div>
                <div className="cs2-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIAL — reused ───────────────────────── */}
      <section className="cs-testimonial">
        <div className="container cs-testimonial-inner">
          <p className="cs-section-label reveal">Reference</p>
          <blockquote className="cs-testimonial-quote reveal">
            „Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí
            nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila. Oceňuji, že
            neskončili spuštěním, ale průběžně optimalizují.“
          </blockquote>
          <div className="cs-testimonial-author reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            <Image
              className="cs-testimonial-avatar"
              src="/assets/testimonials/radek.jpg"
              alt="Radek Bareš"
              width={56}
              height={56}
            />
            <div>
              <span className="cs-testimonial-name">Radek Bareš</span>
              <span className="cs-testimonial-role">Majitel firmy, DUOPET</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. NEXT PROJECT — reused ──────────────────────── */}
      <section className="cs-next">
        <div className="container">
          <p className="cs-section-label">Další projekt</p>
          <a href="/projekty/reality-expo" className="cs-next-card reveal-scale">
            <div className="cs-next-media">
              <Image
                src="/assets/reklama/why-4.jpg"
                alt="Reality Expo"
                fill
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
            <div className="cs-next-info">
              <span className="cs-next-brand">Reality Expo · 2025</span>
              <h3 className="cs-next-title">
                Reality EXPO: Branding, Web a kampaň, které rozjely celý veletrh
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

      {/* ── 9. CTA — reused ───────────────────────────────── */}
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
