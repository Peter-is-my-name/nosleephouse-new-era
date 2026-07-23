import Image from 'next/image';
import './Testimonials.css';

type T = {
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  avatar: string;
  logo: React.ReactNode;
  quote: string;
};

const ITEMS: T[] = [
  {
    name: 'Jakub Haidari',
    role: 'Marketing nehnuteľností,',
    company: 'realityexpo.sk',
    companyUrl: 'https://realityexpo.sk',
    avatar: '/assets/testimonials/jakub.jpg',
    logo: <img className="tm-logo-img re" src="/assets/testimonials/realityexpo-logo.svg" alt="Reality EXPO" />,
    quote:
      '"S Petrem a Martinem spolupracujeme přes 2 roky. Přístup k projektu byl od začátku profesionální: jasná komunikace, výsledky, které překonaly očekávání. Web spustili přesně v termínu a běží bezchybně. Doporučuji každému, kdo hledá agenturní výsledky s lidským přístupem."',
  },
  {
    name: 'Radek Bareš',
    role: 'Majitel firmy,',
    company: 'DUOPET.CZ',
    companyUrl: 'https://duopet.cz',
    avatar: '/assets/testimonials/radek.jpg',
    logo: <img className="tm-logo-img duopet" src="/assets/testimonials/duopet-logo.png" alt="DUOPET" />,
    quote:
      '„Profesionální přístup, rychlé spuštění a hlavně web, který skutečně přivádí nové klienty. Organická návštěvnost se do 3 měsíců zdvojnásobila. Oceňuji, že neskončili spuštěním, ale průběžně optimalizují."',
  },
  {
    name: 'Dominika Donovalová',
    role: 'Podnikateľka,',
    company: 'aparsia.cz',
    companyUrl: 'https://aparsia.cz',
    avatar: '/assets/testimonials/dominika.jpg',
    logo: <img className="tm-logo-img aparsia" src="/assets/testimonials/aparsia-logo.png" alt="Aparsia" />,
    quote:
      '„Martin byl skvělý od prvého kontaktu. Celý proces byl rychlý, komunikace bezproblémová a výsledný web přesně odráží můj styl. Líbilo se mi, že nevytvářeli jen hezký web. Přemýšleli nad tím, co nám přinese klienty. Výsledky to potvrdily."',
  },
  {
    name: 'Filip Polanský',
    role: 'Majitel firmy,',
    company: 'DUOPET.CZ',
    companyUrl: 'https://duopet.cz',
    avatar: '/assets/testimonials/filip.jpg',
    logo: null,
    quote:
      '„Hledali jsme partu, která rozumí technologii i designu zároveň. nosleephouse je přesně to. Dodali komplexní design i vývoj dashboardu, včetně AI web appek pro urychlení našich procesů. Spolupráce byla efektivní a výsledek překvapil i naše investory."',
  },
  {
    name: 'Jonathan Hill',
    role: 'Kuchař & podnikatel,',
    company: 'SOCARRATCATERING.COM',
    companyUrl: 'https://socarratcatering.com',
    avatar: '/assets/testimonials/jonathan.jpg',
    logo: <img className="tm-logo-img socarrat" src="/assets/testimonials/socarrat-logo.svg" alt="Socarrat" />,
    quote:
      '„Leo pro nás navrhl krásnou brand identitu logo, menu, vizuály pro sociální sítě. Zákazníci si to pochvalují. Web krásne spracovanej taky, kluky mohu jenom doporučit."',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container tm-grid">
        <div className="tm-head-col">
          <div className="tm-head-sticky">
            <h2 className="tm-heading reveal">
              Co se o nás <span className="accent">říká</span>
              <br />
              když nejsme
              <br />v místnosti
            </h2>
          </div>
        </div>

        <div className="tm-list">
          {ITEMS.map((t, i) => (
            <article
              className="tm-card"
              key={i}
            >
              <header className="tm-card-head">
                <div className="tm-person">
                  <Image className="tm-avatar" src={t.avatar} alt={t.name} width={48} height={48} loading="lazy" />
                  <div className="tm-meta">
                    <span className="tm-name">{t.name}</span>
                    <span className="tm-role">
                      {t.role} <a href={t.companyUrl} target="_blank" rel="noopener noreferrer">{t.company}</a>
                    </span>
                  </div>
                </div>
                {t.logo && <div className="tm-logo">{t.logo}</div>}
              </header>
              <blockquote className="tm-quote">{t.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
