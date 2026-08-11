import Image from 'next/image';
import { ArrowRight } from './icons';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { rich } from '@/lib/rich';
import './About.css';

export default function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <h2 className="about-heading reveal">{rich(t.heading)}</h2>
          <p className="about-text reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
            {rich(t.text)}
          </p>
          <div className="reveal" style={{ '--d': '0.2s' } as React.CSSProperties}>
            <a href="#about" className="btn btn-outline">
              {t.cta}
              <ArrowRight size={10} />
            </a>
          </div>
        </div>

        <div className="about-visual reveal-scale" style={{ '--d': '0.15s' } as React.CSSProperties}>
          <div className="about-photo">
            <Image
              src="/assets/about/team.jpg"
              alt={t.imageAlt}
              width={920}
              height={614}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
