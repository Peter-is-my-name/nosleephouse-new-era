import { ArrowRight } from './icons';
import './WhyWeb.css';

const CARDS = [
  {
    title: (
      <>
        První <span className="accent">dojem</span>
        <br />
        prodává
      </>
    ),
    body: (
      <>
        Téměř <strong>40 %</strong> uživatelů opustí web, pokud se jim nelíbí jeho vizuální
        zpracování, a <strong>88 %</strong> se po špatné zkušenosti už nikdy nevrátí.
      </>
    ),
  },
  {
    title: (
      <>
        Web jako
        <br />
        <span className="accent">obchodník</span>
      </>
    ),
    body: (
      <>
        Až <strong>83 %</strong> nákupního rozhodnutí proběhne dříve, než vás klient kontaktuje.
        Správně postavený web dokáže zvýšit počet uzavřených obchodů o více než <strong>20 %.</strong>
      </>
    ),
  },
  {
    title: (
      <>
        Stroj na <span className="accent">důvěru</span>
      </>
    ),
    body: (
      <>
        <strong>75 %</strong> spotřebitelů posuzuje důvěryhodnost firmy podle vzhledu jejího webu a{' '}
        <strong>85 %</strong> z nich důvěřuje online recenzím stejně jako osobním doporučením.
      </>
    ),
  },
];

export default function WhyWeb() {
  return (
    <section className="whyweb">
      <div className="container">
        <h2 className="whyweb-heading reveal">
          Proč řešit <span className="accent">web?</span>
        </h2>

        <div className="whyweb-grid">
          {CARDS.map((c, i) => (
            <article
              className="why-card reveal-scale"
              key={i}
              style={{ '--d': `${i * 0.12}s` } as React.CSSProperties}
            >
              <h3 className="why-card-title">{c.title}</h3>
              <p className="why-card-body">{c.body}</p>
              <span className="why-card-corner" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="whyweb-cta reveal">
          <a href="#contact" className="btn btn-primary">
            Získat cenový návrh zdarma
            <ArrowRight size={10} />
          </a>
        </div>
      </div>
    </section>
  );
}
