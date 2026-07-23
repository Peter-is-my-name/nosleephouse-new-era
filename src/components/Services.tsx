import Image from 'next/image';
import './Services.css';

type Service = {
  title: string;
  desc:  string;
  img:   string;
  tags:  string[];
  wide?: boolean;
};

const SERVICES: Service[] = [
  {
    title: 'Tvorba webů & vývoj',
    desc:  'Stavíme weby, které budují vaši autoritu a mění návštěvníky v platící klienty.',
    img:   '/assets/services/reality-expo.jpg',
    tags:  ['Firemní web', 'E-shop', 'Landing page'],
  },
  {
    title: 'Marketing & Růst',
    desc:  'Cílené kampaně zaměřené na stabilní přísun poptávek a maximalizaci zisku.',
    img:   '/assets/services/realestate.jpg',
    tags:  ['Google ADS', 'Meta ADS', 'SEO'],
  },
  {
    title: 'Grafický Design',
    desc:  'Ostrý vizuální obsah, díky kterému vaše značka okamžitě vystoupí z davu.',
    img:   '/assets/services/jun.jpg',
    tags:  ['Logo', 'Print', 'Prezentace'],
  },
  {
    title: 'Vizuální Identita & AI Kreativy',
    desc:  'Komplexní vizuální identita posílená AI nástroji pro rychlou a škálovatelnou produkci.',
    img:   '/assets/services/daramis.jpg',
    tags:  ['AI Kreativa', 'Brand Identity', 'Reklama'],
  },
  {
    title: 'AI Automatizace',
    desc:  'Propojíme vaše systémy a zbavíme vás rutiny, abyste se mohli soustředit na to, co vás baví.',
    img:   '/assets/services/reality-expo.jpg',
    tags:  ['Zapier', 'n8n', 'Make', 'CRM'],
    wide:  true,
  },
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
              key={i}
              className={`service-card reveal-scale${s.wide ? ' service-card--wide' : ''}`}
              style={{ '--d': `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className="service-media">
                <Image
                  src={s.img}
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
