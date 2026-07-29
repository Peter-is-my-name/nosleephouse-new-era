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
  logo?: { src: string; alt: string };
};

const REVIEWS: Review[] = [
  {
    name: 'Dominika Donovalová',
    role: 'Majitelka realitní kanceláře,',
    company: 'aparsia.cz',
    companyUrl: 'https://aparsia.cz',
    avatar: '/assets/testimonials/dominika.jpg',
    logo: { src: '/assets/testimonials/aparsia-logo.png', alt: 'Aparsia' },
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
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden="true">
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
  const trackRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Bounded (non-looping) carousel. The first card lines up with the header's
  // left edge; cards bleed off the right and the track stops once the last card
  // is fully in view.
  const measure = useCallback(() => {
    const vp = viewportRef.current;
    const tr = trackRef.current;
    const hd = headRef.current;
    if (!vp || !tr || !hd || tr.children.length < 1) return;
    const vpW = vp.clientWidth;
    const inset = hd.getBoundingClientRect().left - vp.getBoundingClientRect().left;
    const c0 = tr.children[0] as HTMLElement;
    const cardW = c0.getBoundingClientRect().width;
    const step =
      tr.children.length > 1
        ? (tr.children[1] as HTMLElement).offsetLeft - c0.offsetLeft
        : cardW;
    const gap = step - cardW;
    const trackW = N * cardW + (N - 1) * gap;
    const maxT = inset;
    const minT = Math.min(inset, vpW - inset - trackW);
    const maxI = Math.max(0, Math.ceil((maxT - minT) / step));
    const idx = Math.min(index, maxI);
    setMaxIndex(maxI);
    setTranslate(Math.max(minT, maxT - idx * step));
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
          ref={trackRef}
          style={{
            transform: `translate3d(${translate}px, 0, 0)`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {REVIEWS.map((r, i) => (
            <article className="rvw-card" key={i}>
              <div className="rvw-card-body">
                {r.logo && (
                  <div className="rvw-logo">
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
                  width={64}
                  height={64}
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
