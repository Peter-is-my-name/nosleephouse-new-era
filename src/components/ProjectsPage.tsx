'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from './icons';
import './ProjectsPage.css';

type Project = {
  id: string;
  brand: string;
  title: string;
  category: string;
  tags: string[];
  img: string;
  year: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: 'reality-expo',
    brand: 'Weinhold Legal',
    title: 'Reality EXPO: Branding, Web a kampaň, které rozjely celý veletrh',
    category: 'Branding',
    tags: ['Branding', 'Web'],
    img: '/assets/portfolio/reality-expo.jpg',
    year: '2024',
    href: '/projekty/reality-expo',
  },
  {
    id: 'aparsia',
    brand: 'DARAMIS',
    title: 'Aparsia: Vícejazyčný web, který otevírá realitní trh světu',
    category: 'Web',
    tags: ['Web', 'UX/UI'],
    img: '/assets/portfolio/aparsia.jpg',
    year: '2024',
  },
  {
    id: 'duopet',
    brand: 'lumnio',
    title: 'DUOPET: Čistý web, který vyzdvihl recyklaci plastů',
    category: 'Web',
    tags: ['Web'],
    img: '/assets/portfolio/duopet.jpg',
    year: '2023',
  },
  {
    id: 'jun-matcha',
    brand: 'LOXIA',
    title: 'JUN Matcha: Čistá vizuální identita, která od nuly postavila silnou značku prémiové matchy',
    category: 'Identita',
    tags: ['Identita', 'Branding'],
    img: '/assets/portfolio/jun.jpg',
    year: '2023',
  },
];

const FILTERS = ['Vše', 'Web', 'Branding', 'Identita', 'UX/UI'] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('Vše');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === 'Vše' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active));

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll<HTMLElement>('.prj-item');
    const vh = window.innerHeight;
    requestAnimationFrame(() => {
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) el.classList.add('is-visible');
      });
    });
  }, [active]);

  const isFeatured = (i: number) => active === 'Vše' && i === 0;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="prj-hero">
        <div className="container">
          <p className="prj-label">Naše projekty</p>
          <h1 className="prj-hero-heading">
            Přes 80 projektů.
            <br />
            Každý s{' '}
            <span className="accent">příběhem.</span>
          </h1>
          <p className="prj-hero-sub">
            Od startupů po etablované firmy. Weby, e-shopy, brandingy a vizuální identity,
            které skutečně fungují.
          </p>
        </div>
        <div className="prj-hero-rule" aria-hidden="true" />
      </section>

      {/* ── Filter bar ───────────────────────────────────── */}
      <div className="prj-filters" role="navigation" aria-label="Filtr projektů">
        <div className="container">
          <div className="prj-filters-inner">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`prj-filter-btn${active === f ? ' is-active' : ''}`}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects ─────────────────────────────────────── */}
      <section className="prj-body">
        <div className="container">
          <div className="prj-grid" ref={gridRef}>
            {filtered.length === 0 && (
              <p className="prj-empty">Žádné projekty v této kategorii.</p>
            )}

            {filtered.map((p, i) => {
              const feat = isFeatured(i);
              return (
                <div
                  key={`${active}-${p.id}`}
                  className={`prj-item reveal-scale${feat ? ' is-featured' : ''}`}
                  style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}
                >
                  <a href={p.href ?? '#contact'} className="prj-card" aria-label={p.title}>
                    {feat ? (
                      /* Featured: image left panel + info right panel */
                      <>
                        <div className="prj-feat-media">
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            priority
                            sizes="(max-width: 900px) 100vw, 60vw"
                          />
                        </div>
                        <div className="prj-feat-info">
                          <div className="prj-feat-meta">
                            <span className="prj-brand">{p.brand}</span>
                            <span className="prj-year">{p.year}</span>
                          </div>
                          <div className="prj-tags">
                            {p.tags.map((t) => (
                              <span key={t} className="prj-tag">{t}</span>
                            ))}
                          </div>
                          <h2 className="prj-feat-title">{p.title}</h2>
                          <span className="prj-feat-cta" aria-hidden="true">
                            Případová studie
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Regular card */
                      <>
                        <div className="prj-media">
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            loading="lazy"
                            sizes="(max-width: 760px) 100vw, 50vw"
                          />
                          <span className="prj-badge">Případová studie</span>
                        </div>
                        <div className="prj-info">
                          <div className="prj-meta">
                            <span className="prj-brand">{p.brand}</span>
                            <span className="prj-year">{p.year}</span>
                          </div>
                          <div className="prj-tags">
                            {p.tags.map((t) => (
                              <span key={t} className="prj-tag">{t}</span>
                            ))}
                          </div>
                          <p className="prj-title">
                            {p.title}
                            <ArrowRight size={16} />
                          </p>
                        </div>
                      </>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="prj-cta">
        <div className="container prj-cta-inner">
          <div className="prj-cta-text">
            <p className="prj-cta-label">Pojďme spolupracovat</p>
            <h2 className="prj-cta-heading">
              Máte projekt
              <br />
              na <span className="accent">mysli?</span>
            </h2>
            <p className="prj-cta-sub">
              Ozvěte se. Pobavíme se o tom, jak váš web posunout na další úroveň.
            </p>
          </div>
          <div className="prj-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Domluvit schůzku zdarma
              <ArrowRight size={10} />
            </Link>
            <Link href="/" className="btn btn-outline">
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
