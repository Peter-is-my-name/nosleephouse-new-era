import type { Metadata } from 'next';
import { Logo, ArrowRight } from '../../src/components/icons';
import './coming-soon.css';

const CALENDLY = 'https://calendly.com/nosleephouse/30min';

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s | nosleephouse™" template.
  title: { absolute: 'nosleephouse™' },
  description: 'Pracujeme na nové verzi webu. Brzy jsme zpět.',
  // Holding page must never be indexed as the real homepage.
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="soon">
      <div className="soon-inner">
        <span className="soon-logo">
          <Logo height={52} />
        </span>

        <span className="soon-label">Brzy zpět</span>

        <h1 className="soon-title">
          Web se
          <br />
          <i>připravuje.</i>
        </h1>

        <p className="soon-sub">
          Pracujeme na nové verzi našeho webu. Mezitím nám můžete napsat nebo si rovnou
          domluvit nezávaznou schůzku. Rádi se s vámi pobavíme o vašem projektu.
        </p>

        <div className="soon-actions">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Domluvit schůzku zdarma
            <ArrowRight size={10} />
          </a>
        </div>

        <p className="soon-contact">
          Nebo nám napište na{' '}
          <a href="mailto:info@nosleephouse.cz">info@nosleephouse.cz</a>
        </p>
      </div>
    </main>
  );
}
