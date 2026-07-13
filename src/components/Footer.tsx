import { ArrowRight, GoogleLogo, Star, LinkedInIcon } from './icons';
import './Footer.css';

const COLS = [
  { head: 'Rozhlédněte se', links: ['Domů', 'O nás', 'Kontakt'] },
  {
    head: 'Služby',
    links: [
      'Web na míru',
      'UX/UI design',
      'Vývoj webu',
      'Správa webu',
      'Optimalizace webu',
      'Prodejní weby',
      'E-commerce weby',
    ],
  },
  { head: 'Naše práce', links: ['Všechny projekty'] },
  { head: 'Zdroje', links: ['Potřebujete web?', 'Slovníček pojmů', 'Blog'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          {COLS.map((c) => (
            <nav className="footer-col" key={c.head} aria-label={c.head}>
              <span className="footer-col-head">{c.head}</span>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-mid">
          <div className="footer-contact">
            <span className="footer-label">Kontakt</span>
            <a className="footer-email" href="mailto:projekty@nosleephouse.com">
              projekty@nosleephouse.com
            </a>
            <a className="footer-phone" href="tel:+420734565323">
              +420 734 565 323
            </a>
            <a className="footer-linkedin" href="#">
              <LinkedInIcon size={20} />
              LinkedIn
            </a>
            <a href="#contact" className="btn btn-primary footer-cta">
              Nacenění zdarma
              <ArrowRight size={10} />
            </a>
          </div>

          <div className="footer-news">
            <span className="footer-label">Newsletter</span>
            <p className="footer-news-text">Získejte tipy, jak z webu vytěžit víc.</p>
            <form className="footer-news-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="nl-email" className="footer-news-label">
                Email
              </label>
              <div className="footer-news-row">
                <input id="nl-email" type="email" placeholder="@" />
                <button type="submit" className="btn btn-primary">
                  Odeslat
                  <ArrowRight size={10} />
                </button>
              </div>
            </form>

            <div className="footer-reviews">
              <div className="footer-reviews-left">
                <span className="partner">Partner at</span>
                <GoogleLogo height={24} white />
              </div>
              <div className="footer-reviews-right">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} />
                  ))}
                </div>
                <span className="reviews-count">13 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-brand" aria-hidden="true">
        <span>NOSLEEPHOUSE</span>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>Copyright © nosleephouse™ 2026</span>
          <a href="#">Instagram</a>
          <a href="#">Linkedin</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
