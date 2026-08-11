'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from './icons';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { rich } from '@/lib/rich';
import { caseHref, contactHref, homeHref, CASE_SLUGS } from '@/lib/routes';
import { PROJECT_MEDIA } from '@/lib/content/projectMedia';
import './ProjectsPage.css';

export default function ProjectsPage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.projectsPage;
  const FILTERS = [t.filterAll, ...t.filters];
  const [active, setActive] = useState(t.filterAll);
  const gridRef = useRef<HTMLDivElement>(null);

  const items = CASE_SLUGS.map((slug) => ({
    slug,
    ...PROJECT_MEDIA[slug],
    ...d.projects[slug],
  }));
  const filtered =
    active === t.filterAll ? items : items.filter((p) => p.tags.includes(active));

  useEffect(() => {
    if (!gridRef.current) return;
    const els = gridRef.current.querySelectorAll<HTMLElement>('.prj-item');
    const vh = window.innerHeight;
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) el.classList.add('is-visible');
      });
    });
  }, [active]);

  const isFeatured = (i: number) => active === t.filterAll && i === 0;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="prj-hero">
        <div className="container">
          <p className="prj-label">{t.label}</p>
          <h1 className="prj-hero-heading">{rich(t.heading)}</h1>
          <p className="prj-hero-sub">{t.sub}</p>
        </div>
        <div className="prj-hero-rule" aria-hidden="true" />
      </section>

      {/* ── Filter bar ───────────────────────────────────── */}
      <div className="prj-filters" role="navigation" aria-label={t.filtersAria}>
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
            {filtered.length === 0 && <p className="prj-empty">{t.empty}</p>}

            {filtered.map((p, i) => {
              const feat = isFeatured(i);
              return (
                <div
                  key={`${active}-${p.slug}`}
                  className={`prj-item reveal-scale${feat ? ' is-featured' : ''}`}
                  style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}
                >
                  <a href={caseHref(locale, p.slug)} className="prj-card" aria-label={p.title}>
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
                            {p.tags.map((tag) => (
                              <span key={tag} className="prj-tag">{tag}</span>
                            ))}
                          </div>
                          <h2 className="prj-feat-title">{p.title}</h2>
                          <span className="prj-feat-cta" aria-hidden="true">
                            {d.common.caseStudy}
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
                          <span className="prj-badge">{d.common.caseStudy}</span>
                        </div>
                        <div className="prj-info">
                          <div className="prj-meta">
                            <span className="prj-brand">{p.brand}</span>
                            <span className="prj-year">{p.year}</span>
                          </div>
                          <div className="prj-tags">
                            {p.tags.map((tag) => (
                              <span key={tag} className="prj-tag">{tag}</span>
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
            <p className="prj-cta-label">{t.ctaLabel}</p>
            <h2 className="prj-cta-heading">{rich(t.ctaHeading)}</h2>
            <p className="prj-cta-sub">{t.ctaSub}</p>
          </div>
          <div className="prj-cta-actions">
            <Link href={contactHref(locale)} className="btn btn-primary">
              {d.common.bookCall}
              <ArrowRight size={10} />
            </Link>
            <Link href={homeHref(locale)} className="btn btn-outline">
              {d.common.backHome}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
