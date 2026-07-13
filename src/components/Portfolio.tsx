import Image from 'next/image';
import { ArrowRight } from './icons';
import './Portfolio.css';

type Project = { brand: string; brandCls?: string; title: string; img: string };

const PROJECTS: Project[] = [
  {
    brand: 'Weinhold Legal',
    title: 'Reality EXPO: Branding, Web a kampaň, které rozjely celý veletrh',
    img: '/assets/portfolio/reality-expo.jpg',
  },
  {
    brand: 'DARAMIS',
    brandCls: 'wide',
    title: 'Aparsia: Vícejazyčný web, který otevírá realitní trh světu',
    img: '/assets/portfolio/aparsia.jpg',
  },
  {
    brand: 'lumnio',
    title: 'DUOPET: Čistý web, který vyzdvihl recyklaci plastů',
    img: '/assets/portfolio/duopet.jpg',
  },
  {
    brand: 'LOXIA',
    brandCls: 'wide',
    title: 'JUN Matcha: Čistá vizuální identita, která od nuly postavila silnou značku prémiové matchy',
    img: '/assets/portfolio/jun.jpg',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio-heading reveal">
          Chcete vidět
          <br />
          <span className="accent">všechnu</span> naši práci?
          <br />
          Vemte si den volna.
        </h2>
        <p className="portfolio-lead reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
          Říkejte nám, jak chcete, pracanti nebo rychlíci, protože za sebou máme více než{' '}
          <strong>80 projektů z různých odvětví</strong>. Abyste tu nepromarnili mládí, mrkněte na
          ty nejnovější.
        </p>

        <h3 className="portfolio-sub reveal">
          Tyhle weby už <span className="accent">fungují.</span>
        </h3>

        <div className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <a
              href="#"
              className="pf-card reveal-scale"
              key={i}
              style={{ '--d': `${(i % 2) * 0.1}s` } as React.CSSProperties}
            >
              <div className="pf-media">
                <Image src={p.img} alt={p.title} fill loading="lazy" sizes="(max-width: 760px) 100vw, 50vw" />
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
          <a href="#" className="btn btn-outline">
            Zobrazit všechny projekty
          </a>
        </div>
      </div>
    </section>
  );
}
