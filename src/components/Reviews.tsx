'use client'
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './Reviews.css';

type Review = {
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  avatar: string;
  quote: string;
  logo?: { src: string; alt: string; h?: number };
};

const REVIEWS: Review[] = [
  {
    name: 'Dominika Donovalová',
    role: 'Majitelka realitní kanceláře,',
    company: 'aparsia.cz',
    companyUrl: 'https://aparsia.cz',
    avatar: '/assets/testimonials/dominika.jpg',
    logo: { src: '/assets/testimonials/aparsia-logo.png', alt: 'Aparsia', h: 46 },
    quote:
      '„Martin byl skvělý od prvého kontaktu. Celý proces byl rychlý, komunikace bezproblémová a výsledný web přesně odráží můj styl. Líbilo se mi, že nevytvářeli jen hezký web. Přemýšleli nad tím, co nám přinese klienty. Výsledky to potvrdily.“',
  },
  {
    name: 'Jakub Haidari',
    role: 'Marketing nehnuteľností,',
    company: 'realityexpo.sk',
    companyUrl: 'https://realityexpo.sk',
    avatar: '/assets/testimonials/jakub.jpg',
    logo: { src: '/assets/testimonials/realityexpo-logo.svg', alt: 'Reality EXPO' },
    quote:
      '„S Petrem a Martinem spolupracujeme přes 2 roky. Přístup k projektu byl od začátku profesionální: jasná komunikace, výsledky, které překonaly očekávání. Web spustili přesně v termínu a běží bezchybně. Doporučuji každému, kdo hledá agenturní výsledky s lidským přístupem.“',
  },
  {
    name: 'Radek Bareš',
    role: 'Majitel recyklační firmy,',
    company: 'duopet.cz',
    companyUrl: 'https://duopet.cz',
    avatar: '/assets/testimonials/radek.jpg',
    logo: { src: '/assets/testimonials/duopet-logo.png', alt: 'DUOPET' },
    quote:
      '„Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila. Oceňuji, že neskončili spuštěním, ale průběžně optimalizují.“',
  },
  {
    name: 'Filip Polanský',
    role: 'Majitel firmy,',
    company: 'duopet.cz',
    companyUrl: 'https://duopet.cz',
    avatar: '/assets/testimonials/filip.jpg',
    logo: { src: '/assets/testimonials/duopet-logo.png', alt: 'DUOPET' },
    quote:
      '„Hledali jsme partu, která rozumí technologii i designu zároveň. nosleephouse je přesně to. Dodali komplexní design i vývoj dashboardu, včetně AI web appek pro urychlení našich procesů. Spolupráce byla efektivní a výsledek překvapil i naše investory.“',
  },
  {
    name: 'Jonathan Hill',
    role: 'Kuchař & podnikatel,',
    company: 'socarratcatering.com',
    companyUrl: 'https://socarratcatering.com',
    avatar: '/assets/testimonials/jonathan.jpg',
    logo: { src: '/assets/testimonials/socarrat-logo.svg', alt: 'Socarrat' },
    quote:
      '„Leo pro nás navrhl krásnou brand identitu, logo, menu i vizuály pro sociální sítě. Zákazníci si to pochvalují. Web krásně zpracovaný taky, kluky mohu jenom doporučit.“',
  },
];

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="11" height="20" viewBox="0 0 9 16" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M8 1 1 8l7 7' : 'M1 1l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const N = REVIEWS.length;

export default function Reviews() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [cardW, setCardW] = useState(374);
  const [gap, setGap] = useState(40);
  const [step, setStep] = useState(414);
  const [maxIndex, setMaxIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Bounded carousel with a guaranteed peek of the next card. The first card
  // lines up with the header; the card width is computed so ~3 cards fit plus a
  // visible sliver of the next, which signals there is more to scroll.
  const measure = useCallback(() => {
    const vp = viewportRef.current;
    const hd = headRef.current;
    if (!vp || !hd) return;
    const vpW = vp.clientWidth;
    const inset = hd.getBoundingClientRect().left - vp.getBoundingClientRect().left;
    const contentW = Math.max(0, vpW - 2 * inset);
    const visible = contentW >= 900 ? 3 : contentW >= 600 ? 2 : 1;
    const g = contentW >= 600 ? 40 : 20;
    const peek = visible > 1 ? 72 : 56; // px of the next card kept visible
    const cw = Math.max(240, Math.round((contentW - peek - (visible - 1) * g) / visible));
    const st = cw + g;
    const trackW = N * cw + (N - 1) * g;
    const maxT = inset;
    const minT = Math.min(inset, vpW - inset - trackW);
    const maxI = Math.max(0, Math.ceil((maxT - minT) / st));
    const idx = Math.min(index, maxI);
    setCardW(cw);
    setGap(g);
    setStep(st);
    setMaxIndex(maxI);
    setTranslate(Math.max(minT, maxT - idx * st));
    if (idx !== index) setIndex(idx);
    setReady(true);
  }, [index]);

  useEffect(() => { measure(); }, [measure]);
  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure]);

  const go = (dir: number) => setIndex((i) => Math.min(Math.max(0, i + dir), maxIndex));

  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  return (
    <section className="rvw" aria-label="Recenze klientů">
      <div className="container">
        <div className="rvw-head" ref={headRef}>
          <span className="rvw-label">Recenze</span>
          <h2 className="rvw-title reveal">
            Příběhy našich <span className="accent">klientů</span>
          </h2>
        </div>
      </div>

      <div className={`rvw-viewport${ready ? ' is-ready' : ''}`} ref={viewportRef}>
        <div
          className="rvw-track"
          style={{
            gap: `${gap}px`,
            transform: `translate3d(${translate}px, 0, 0)`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {REVIEWS.map((r, i) => (
            <article className="rvw-card" key={i} style={{ width: `${cardW}px` }}>
              <div className="rvw-card-body">
                {r.logo && (
                  <div
                    className="rvw-logo"
                    style={r.logo.h ? { height: `${r.logo.h}px` } : undefined}
                  >
                    <img src={r.logo.src} alt={r.logo.alt} draggable={false} />
                  </div>
                )}
                <blockquote className="rvw-quote">{r.quote}</blockquote>
              </div>
              <div className="rvw-author">
                <Image
                  className="rvw-avatar"
                  src={r.avatar}
                  alt={r.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  draggable={false}
                />
                <div className="rvw-meta">
                  <span className="rvw-name">{r.name}</span>
                  <span className="rvw-role">{r.role}</span>
                  <a
                    className="rvw-company"
                    href={r.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.company}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="rvw-nav">
          <button
            type="button"
            className="rvw-arrow"
            onClick={() => go(-1)}
            disabled={atStart}
            aria-label="Předchozí recenze"
          >
            <Chevron dir="left" />
          </button>

          <button
            type="button"
            className="rvw-arrow"
            onClick={() => go(1)}
            disabled={atEnd}
            aria-label="Další recenze"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
