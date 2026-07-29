import Image from 'next/image';
import { ArrowRight } from './icons';
import './Portfolio.css';

type Project = { brand: string; brandCls?: string; title: string; img: string; pos?: string; href?: string };

const PROJECTS: Project[] = [
  {
    brand: 'Reality Expo',
    title: 'Reality EXPO: Branding, Web a kampaň, které rozjely celý veletrh',
    img: '/assets/reklama/why-4.jpg',
    pos: 'center 35%',
    href: '/projekty/reality-expo',
  },
  {
    brand: 'Aparsia',
    title: 'Aparsia: Vícejazyčný web, který otevírá realitní trh světu',
    img: '/assets/reklama/aparsia.png',
    href: '/projekty/aparsia',
  },
  {
    brand: 'DUOPET',
    title: 'DUOPET: Čistý web, který vyzdvihl recyklaci plastů',
    img: '/assets/reklama/duopetcz.jpeg',
    href: '/projekty/duopet',
  },
  {
    brand: 'JUN',
    title: 'JUN Matcha: Čistá vizuální identita, která od nuly postavila silnou značku prémiové matchy',
    img: '/assets/reklama/junmatcha.png',
    href: '/projekty/jun-matcha',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio-heading reveal">
          Vybrané projekty
          <br />
          z našeho <span className="accent">portfolia.</span>
        </h2>
        <p className="portfolio-lead reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
          Za sebou máme <strong>150+ projektů z různých odvětví</strong> a pořád nás to baví.
          Abyste tu nestrávili celý den, tady jsou ty nejnovější.
        </p>

        <div className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <a
              href={p.href ?? '#'}
              className="pf-card reveal-scale"
              key={i}
              style={{ '--d': `${(i % 2) * 0.1}s` } as React.CSSProperties}
            >
              <div className="pf-media">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  style={p.pos ? { objectPosition: p.pos } : undefined}
                />
                <span className={`pf-brand${p.brandCls ? ' ' + p.brandCls : ''}`}>{p.brand}</span>
                <span className="pf-badge">Případová studie</span>
              </div>
              <h4 className="pf-title">
                {p.title}
                <ArrowRight size={16} />
              </h4>
            </a>
          ))}
        </div>

        <div className="portfolio-cta reveal">
          <a href="#contact" className="btn btn-primary">
            Domluvit schůzku zdarma
            <ArrowRight size={10} />
          </a>
          <a href="/projekty" className="btn btn-outline">
            Zobrazit všechny projekty
          </a>
        </div>
      </div>
    </section>
  );
}
