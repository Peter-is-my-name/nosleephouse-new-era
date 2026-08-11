import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { rich } from '@/lib/rich';
import './Services.css';

/* Imagery is locale-independent, so it stays here alongside the layout. */
const IMAGES = [
  '/assets/services/reality-expo.jpg',
  '/assets/services/realestate.jpg',
  '/assets/services/jun.jpg',
  '/assets/reklama/aparsia.png',
  '/assets/services/reality-expo.jpg',
];

/** The last card spans the full grid width. */
const WIDE_INDEX = 4;

export default function Services({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).services;

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2 className="services-heading reveal">{rich(t.heading)}</h2>

        <div className="services-grid">
          {t.items.map((s, i) => (
            <a
              href="#contact"
              key={i}
              className={`service-card reveal-scale${i === WIDE_INDEX ? ' service-card--wide' : ''}`}
              style={{ '--d': `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className="service-media">
                <Image
                  src={IMAGES[i]}
                  alt={s.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(tag => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
