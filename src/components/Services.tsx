import { ArrowRight } from './icons';
import './Services.css';

type Service = { title: string; sub: string; img: string; span?: boolean };

const SERVICES: Service[] = [
  { title: 'Chci budovat značku firmy', sub: 'Potřebuji prezentační web', img: '/assets/services/reality-expo.jpg' },
  { title: 'Chci více klientů a poptávek', sub: 'Potřebuji prodejní web', img: '/assets/services/realestate.jpg' },
  { title: 'Chci prodávat produkty online', sub: 'Potřebuji e-shop', img: '/assets/services/jun.jpg' },
  { title: 'Chci web na míru', sub: 'Potřebuji kompletní web', img: '/assets/services/daramis.jpg' },
  { title: 'Chci lepší vizuální identitu svoji firmy', sub: 'Potřebuji e-shop', img: '/assets/services/jun.jpg' },
  { title: 'Chci grafický dizajn', sub: 'Potřebuji kompletní web', img: '/assets/services/daramis.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2 className="services-heading reveal">
          Vyberte si, co
          <br />
          <span className="accent">potřebujete</span>
        </h2>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <a
              href="#contact"
              className={`service-card reveal-scale${i % 2 === 1 ? ' offset' : ''}`}
              key={i}
              style={{ '--d': `${(i % 2) * 0.08 + Math.floor(i / 2) * 0.04}s` } as React.CSSProperties}
            >
              <div className="service-media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <span className="service-sub">{s.sub}</span>
              </div>
              <span className="service-arrow">
                <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="services-cta reveal">
          <a href="#services" className="btn btn-outline">
            Zobrazit všechny služby
          </a>
        </div>
      </div>
    </section>
  );
}
