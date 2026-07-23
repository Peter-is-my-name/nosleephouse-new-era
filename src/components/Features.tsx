'use client'
import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { ArrowRight } from './icons';
import './Features.css';

type Step = {
  num:     string;
  title:   string;
  heading: string;
  body:    ReactNode[];
};

const STEPS: Step[] = [
  {
    num:     '01',
    title:   'Strategický hovor',
    heading: 'Konzultace je prvním krokem k výsledkům',
    body: [
      <><strong>Probereme vaše podnikání, cíle a možnosti</strong> – a uvidíme, zda vám dokážeme reálně pomoci.</>,
      <>Vážíme si <strong>vašeho času stejně jako svého</strong>. Naše kapacity jsou omezené, proto si vybíráme projekty, kterým dokážeme doručit <strong>maximální hodnotu</strong> a <strong>výsledky</strong>.</>,
    ],
  },
  {
    num:     '02',
    title:   'Analýza a strategie',
    heading: 'Vytvořit předvídatelný systém pro získávání klientů není otázkou loterie',
    body: [
      <>Stabilní výsledky nejsou otázkou štěstí, ale <strong>strategie, znalostí</strong> a <strong>ověřeného systému</strong>.</>,
      <>Prostudujeme si vaši cílovou skupinu, zmapujeme konkurenci a odhalíme vzorce chování, které se opakují. Cíl není vytvořit jen hezký web, ale řešení, které vám spolehlivě zajistí výsledky.</>,
    ],
  },
  {
    num:     '03',
    title:   'Tvorba webu',
    heading: 'Cesta k ziskovému kliknutí',
    body: [
      <>Každá sekce i detail má svůj účel. Web netvoříme izolovaně, ale jako součást <strong>celkového systému vedoucího uživatele k akci</strong>.</>,
      <>Výsledkem je nejen reprezentativní design, ale předvídatelný nástroj pro <strong>získávání nových klientů</strong>.</>,
    ],
  },
  {
    num:     '04',
    title:   'Akvizice a výkon',
    heading: 'Cesta k návratnosti',
    body: [
      <>Proměníme váš web v předvídatelný ziskový systém pro získávání klientů – zajistíme, aby se vám <strong>investice do digitálního zázemí vrátila</strong>.</>,
      <>Díky tomuto přístupu držíme dlouhodobě <strong>maximální spokojenost našich partnerů</strong> a pomáháme jim ovládnout jejich trh.</>,
    ],
  },
  {
    num:     '05',
    title:   'Růst a optimalizace',
    heading: 'Váš růst je naše priorita',
    body: [
      <><strong>Pravidelně</strong> analyzujeme výsledky a implementujeme vylepšení, které zvyšují konverzní poměr webu a efektivitu kampaní.</>,
      <>Neřešíme jen „správu", ale aktivně navrhujeme <strong>nové cesty k získávání klientů</strong> a rozšiřování vašeho vlivu.</>,
    ],
  },
];

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!headingRef.current) return;
      const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
      const headerH = siteHeader ? siteHeader.offsetHeight : 88;
      const h = headingRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-h', `${headerH}px`);
      document.documentElement.style.setProperty(
        '--feature-card-top',
        `${headerH + h}px`
      );
    };
    update();
    const ro = new ResizeObserver(update);
    if (headingRef.current) ro.observe(headingRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    const cards   = cardsRef.current;
    if (!heading || !cards) return;

    let releaseScrollY: number | null = null;

    const onScroll = () => {
      const lastCard = cards.lastElementChild as HTMLElement | null;
      if (!lastCard) return;
      const cardTop = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--feature-card-top') || '200'
      );

      if (lastCard.getBoundingClientRect().top <= cardTop + 2) {
        if (releaseScrollY === null) releaseScrollY = window.scrollY;
        const scrolled = window.scrollY - releaseScrollY;
        heading.style.transform = `translateY(${-scrolled}px)`;
      } else {
        releaseScrollY = null;
        heading.style.transform = '';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="features">
      <div className="container">
        <div className="features-heading-wrap" ref={headingRef}>
          <div className="features-heading-grid">
            <h2 className="features-heading reveal">
              Jak probíhá
              <br />
              <span className="accent">spolupráce?</span>
            </h2>
            <div className="features-heading-desc reveal" style={{ '--d': '0.12s' } as CSSProperties}>
              <p>V roce 2026 vám web sám o sobě výsledky nezaručí. Naše řešení jen loni přivedla klientům <strong>stovky kvalifikovaných poptávek</strong> a <strong>klientů</strong>.</p>
              <p>Díky výsledkům a práci úzkého týmu specialistů nám vybudování funkčního akvizičního systému svěřilo již přes <strong>100+ klientů</strong> po celé ČR.</p>
            </div>
          </div>
        </div>

        <div className="features-cards" ref={cardsRef}>
          {/* ── Step cards ── */}
          {STEPS.map((s, i) => (
            <article className="feature-card" key={s.num}>
              <div className="feature-step-left">
                <span className="feature-num">{s.num}</span>
                <h3 className="feature-step-title">{s.title}</h3>
              </div>
              <div className="feature-sep" aria-hidden="true" />
              <div className="feature-step-right">
                <h4 className="feature-step-heading">{s.heading}</h4>
                {s.body.map((p, j) => (
                  <p key={j} className="feature-step-body">{p}</p>
                ))}
              </div>
            </article>
          ))}

          {/* ── CTA card (card 6) ── */}
          <article className="feature-card feature-card--cta">
            <div className="feature-cta-inner">
              <p className="feature-cta-label">Pojďme spolupracovat</p>
              <h3 className="feature-cta-heading">
                Máte projekt, který si zaslouží
                <br />
                <span className="accent">skutečné výsledky?</span>
              </h3>
              <a href="#contact" className="btn btn-primary feature-cta-btn">
                Domluvit bezplatný hovor
                <ArrowRight size={11} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
