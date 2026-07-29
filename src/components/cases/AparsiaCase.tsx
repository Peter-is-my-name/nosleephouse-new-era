import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import './CaseStudy.css';

/* ─── data ─────────────────────────────────────────────────── */

const SERVICES = ['UI/UX Design', 'Development', 'Admin Panel', 'SEO'] as const;

const CHALLENGES = [
  {
    num: '01',
    title: 'Důvěra na dálku',
    body: 'Koupit nemovitost v cizí zemi vyžaduje důvěru. Web ji musel vzbudit hned na první pohled a provést zájemce celým procesem.',
  },
  {
    num: '02',
    title: 'Dva typy uživatelů',
    body: 'Web sloužil investorům hledajícím transparentnost i internímu týmu, který potřebuje efektivní nástroje. Dva odlišné světy v jednom systému.',
  },
  {
    num: '03',
    title: 'Mezinárodní dosah',
    body: 'Zájemci z Česka, Slovenska i zahraničí. Jeden web musel fungovat ve více jazycích, bez kompromisů v obsahu a přehlednosti.',
  },
] as const;

const DELIVERABLES = [
  {
    num: '01',
    title: 'Firemní web',
    body: 'Reprezentativní vícejazyčný web zaměřený na konverzi a důvěru. Přehledný katalog nemovitostí a jasná cesta k poptávce.',
  },
  {
    num: '02',
    title: 'Admin portál',
    body: 'Soukromé rozhraní s plnou kontrolou nad nemovitostmi, klienty a dokumentací. Efektivní nástroje pro každodenní provoz.',
  },
  {
    num: '03',
    title: 'CRM integrace',
    body: 'Propojení webu a admin portálu do jednoho systému. Poptávky, klienti i nemovitosti přehledně na jednom místě.',
  },
  {
    num: '04',
    title: 'SEO optimalizace',
    body: 'Technické i obsahové SEO ve všech jazykových verzích. Web, který vyhledávače najdou a doporučí správným lidem.',
  },
  {
    num: '05',
    title: 'Mobilní responzivita',
    body: 'Plynulý zážitek na každém zařízení, od telefonu po desktop. Rychlé načítání a čistý design, který nezdržuje.',
  },
] as const;

const RESULTS = [
  { value: '3×', label: 'více poptávek měsíčně' },
  { value: '98', label: 'Lighthouse skóre' },
  { value: '4', label: 'jazykové verze webu' },
  { value: '100 %', label: 'spokojenost klienta' },
] as const;

export default function AparsiaCase() {
  return (
    <>
      {/* ── 1. HERO — all project info lives here ────────── */}
      <section className="cs-hero">
        {/* full-bleed background image */}
        <div className="cs-hero-bg" aria-hidden="true">
          <Image
            src="/assets/reklama/aparsia.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="cs-hero-overlay" aria-hidden="true" />

        <div className="container cs-hero-inner">

          {/* main text block */}
          <div className="cs-hero-text">
            <h1 className="cs-hero-heading">
              Aparsia:<br />
              Web, admin<br />a <span className="accent">CRM.</span>
            </h1>

            <p className="cs-hero-desc">
              Aparsia zprostředkovává investice do bulharských nemovitostí. Potřebovali
              kompletní digitální řešení: reprezentativní web pro investory, admin portál
              a CRM pro interní tým. Vše postavené na míru a spuštěné za šest týdnů.
            </p>
          </div>

          {/* bottom meta bar, no dividing lines */}
          <div className="cs-hero-meta" role="list">
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Klient</span>
              <span className="cs-meta-value">Aparsia s.r.o.</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Rok</span>
              <span className="cs-meta-value">2025</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Odvětví</span>
              <span className="cs-meta-value">Nemovitosti · Investice</span>
            </div>
            <div className="cs-meta-col" role="listitem">
              <span className="cs-meta-label">Služby</span>
              <span className="cs-meta-value">{SERVICES.join(' · ')}</span>
            </div>
            <div className="cs-meta-col cs-meta-col--cta" role="listitem">
              <a
                href="https://aparsia.cz"
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
              Platforma,<br />
              které musí<br />
              <span className="accent">věřit.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              Aparsia otevírá Čechům a Slovákům dveře k nemovitostem v Bulharsku. Apartmány
              u moře, horské byty i investiční příležitosti, to vše s právním servisem a
              podporou v jejich jazyce. Oslovili nás s jasným cílem: kompletní digitální
              řešení od webu přes admin portál až po CRM.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Web musel působit důvěryhodně na první pohled a zároveň dát internímu týmu
              nástroje pro každodenní správu nemovitostí a klientů. Žádné kompromisy.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. CHALLENGE ──────────────────────────────────── */}
      <section className="cs-challenge">
        <div className="container">
          <p className="cs-section-label reveal">Výzva</p>
          <h2 className="cs-challenge-heading reveal">
            Dva světy,<br />jeden <span className="accent">systém.</span>
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
              Dvě vrstvy,<br />
              jeden<br />
              <span className="accent">systém.</span>
            </h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">
              Navrhli jsme dvouvrstvé řešení: veřejný web s důrazem na konverzi a důvěru,
              a soukromý admin portál s plnou kontrolou nad nemovitostmi, klienty i
              dokumentací. Celý systém stojí na Next.js s vlastním backendem.
            </p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              Web jsme lokalizovali do několika jazyků, aby oslovil investory napříč trhy.
              Rychlý, přehledný a postavený tak, aby proměnil návštěvníka v reálnou poptávku.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3c. GALLERY — placeholders, to be replaced with real assets ── */}
      <section className="cs-gallery">
        <div className="container cs-gallery-grid">
          <div className="cs-gallery-item reveal-scale">
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder: Web Aparsia</span>
            </div>
          </div>
          <div
            className="cs-gallery-item reveal-scale"
            style={{ '--d': '0.08s' } as CSSProperties}
          >
            <div className="cs-placeholder" aria-hidden="true">
              <span>Placeholder: Admin portál</span>
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
            „Martin byl skvělý od prvého kontaktu. Celý proces byl rychlý, komunikace
            bezproblémová a výsledný web přesně odráží můj styl. Líbilo se mi, že
            nevytvářeli jen hezký web. Přemýšleli nad tím, co nám přinese klienty.
            Výsledky to potvrdily.“
          </blockquote>
          <div className="cs-testimonial-author reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            <Image
              className="cs-testimonial-avatar"
              src="/assets/testimonials/dominika.jpg"
              alt="Dominika Donovalová"
              width={56}
              height={56}
            />
            <div>
              <span className="cs-testimonial-name">Dominika Donovalová</span>
              <span className="cs-testimonial-role">Podnikatelka, Aparsia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NEXT PROJECT ──────────────────────────────── */}
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
