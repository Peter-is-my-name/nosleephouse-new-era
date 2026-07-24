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

const MOBILE_MAX = 800;

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lastStepCard = () =>
      cardsRef.current
        ? (Array.from(
            cardsRef.current.querySelectorAll<HTMLElement>(
              '.feature-card:not(.feature-card--cta)'
            )
          ).pop() ?? null)
        : null;

    const update = () => {
      const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
      const headerH = siteHeader ? siteHeader.offsetHeight : 88;
      // On phone the wrapper is display:contents (no box), and only the
      // headline pins — so the cards stop under the headline alone. On
      // desktop the whole wrapper (headline + secondary text) pins as before,
      // so the cards stop below both. Measuring the right element keeps each
      // breakpoint's stop point correct.
      const isMobile = window.innerWidth <= MOBILE_MAX;
      const headingEl = isMobile ? titleRef.current : headingRef.current;
      if (headingEl) {
        const h = headingEl.offsetHeight;
        document.documentElement.style.setProperty('--header-h', `${headerH}px`);
        document.documentElement.style.setProperty(
          '--feature-card-top',
          `${headerH + h}px`
        );
      }
      // Height of the last white step card, so the dark CTA can match it on
      // phone/small tablet (applied via Features.css <=900px). The CTA's own
      // height never feeds back into this — it's a different element — so
      // there's no measurement loop.
      const step = lastStepCard();
      if (step) {
        document.documentElement.style.setProperty('--last-step-h', `${step.offsetHeight}px`);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (headingRef.current) ro.observe(headingRef.current);
    if (titleRef.current) ro.observe(titleRef.current);
    const step = lastStepCard();
    if (step) ro.observe(step);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const onScroll = () => {
      const lastCard = cards.lastElementChild as HTMLElement | null;
      if (!lastCard) return;

      // The pinned element that flies off differs by breakpoint: on desktop
      // it's the whole wrapper, on phone just the headline (the wrapper is
      // display:contents there, so transforming it would do nothing).
      const isMobile = window.innerWidth <= MOBILE_MAX;
      const flyEl = isMobile ? titleRef.current : headingRef.current;
      const inactiveEl = isMobile ? headingRef.current : titleRef.current;
      // Clear any transform left on the other element after a breakpoint change.
      if (inactiveEl) inactiveEl.style.transform = '';
      if (!flyEl) return;

      let cardTop: number;
      if (isMobile) {
        // Phone only: recompute the stop point fresh each tick. The header
        // shrinks on scroll (its padding animates), and only the headline
        // pins here — so if the stop point didn't track the header exactly,
        // a gap would open under the header and the freely-scrolling
        // secondary text would peek through it.
        const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
        const headerH = siteHeader ? siteHeader.offsetHeight : 88;
        cardTop = headerH + flyEl.offsetHeight;
        document.documentElement.style.setProperty('--header-h', `${headerH}px`);
        document.documentElement.style.setProperty('--feature-card-top', `${cardTop}px`);
      } else {
        // Desktop: unchanged from the original — read the value set on
        // mount/resize (the whole wrapper is pinned + teal, so a small stale
        // header gap is invisible teal-on-teal and never showed content).
        cardTop = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--feature-card-top') || '200'
        );
      }

      // Self-correcting fly-off: derive the offset from how far the last card
      // has overshot its stuck position RIGHT NOW, not from a remembered scroll
      // baseline. This value is always >= 0, so the heading only ever moves UP
      // (never down over the next section), and it recovers instantly after a
      // reload/scroll-restore or a hash jump — the stateful version pushed the
      // heading down over Testimonials in those cases. During a normal
      // continuous scroll the value is identical, so the feel is unchanged.
      const overshoot = cardTop - lastCard.getBoundingClientRect().top;
      if (overshoot > 0) {
        // On phone the headline carries the .reveal entrance transition, which
        // would make this scroll-linked transform lag; disable it here (the
        // entrance has long finished by the time the fly-off engages). The
        // desktop wrapper has no such transition, so nothing to disable.
        if (isMobile) flyEl.style.transition = 'none';
        flyEl.style.transform = `translateY(${-overshoot}px)`;
      } else {
        flyEl.style.transform = '';
        if (isMobile) flyEl.style.transition = '';
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
            <h2 className="features-heading reveal" ref={titleRef}>
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
