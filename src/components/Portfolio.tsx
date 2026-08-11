import Image from 'next/image';
import { ArrowRight } from './icons';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { rich } from '@/lib/rich';
import { caseHref, projectsHref, CASE_SLUGS } from '@/lib/routes';
import { PROJECT_MEDIA } from '@/lib/content/projectMedia';
import './Portfolio.css';

export default function Portfolio({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.portfolio;

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio-heading reveal">{rich(t.heading)}</h2>
        <p className="portfolio-lead reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
          {rich(t.lead)}
        </p>

        <div className="portfolio-grid">
          {CASE_SLUGS.map((slug, i) => {
            const p = d.projects[slug];
            const media = PROJECT_MEDIA[slug];
            return (
              <a
                href={caseHref(locale, slug)}
                className="pf-card reveal-scale"
                key={slug}
                style={{ '--d': `${(i % 2) * 0.1}s` } as React.CSSProperties}
              >
                <div className="pf-media">
                  <Image
                    src={media.img}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) 100vw, 50vw"
                    style={media.cardPos ? { objectPosition: media.cardPos } : undefined}
                  />
                  <span className="pf-brand">{p.brand}</span>
                  <span className="pf-badge">{d.common.caseStudy}</span>
                </div>
                <h4 className="pf-title">
                  {p.title}
                  <ArrowRight size={16} />
                </h4>
              </a>
            );
          })}
        </div>

        <div className="portfolio-cta reveal">
          <a href="#contact" className="btn btn-primary">
            {d.common.bookCall}
            <ArrowRight size={10} />
          </a>
          <a href={projectsHref(locale)} className="btn btn-outline">
            {t.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
