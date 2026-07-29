'use client'
import { ArrowRight, LinkedInIcon, InstagramIcon } from './icons';
import './Footer.css';

const COLS = [
  { head: 'Rozhlédněte se', links: ['Domů', 'O nás', 'Kontakt', 'Kariéra'] },
  {
    head: 'Služby',
    links: [
      'Tvorba webů & vývoj',
      'Grafický Design',
      'Vizuální Identita',
      'Marketing & Růst',
      'AI Automatizace & AI Kreativy',
    ],
  },
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
                    <a href={c.head === 'Služby' ? '#contact' : '#'}>{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-contact">
            <span className="footer-label">Kontakt</span>
            <a className="footer-email" href="mailto:info@nosleephouse.com">
              info@nosleephouse.com
            </a>
            <a className="footer-phone" href="tel:+420734565323">
              +420 734 565 323
            </a>
            <div className="footer-social">
              <a
                className="footer-linkedin"
                href="https://www.linkedin.com/company/nosleephouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
              <a
                className="footer-instagram"
                href="https://www.instagram.com/nosleephouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={20} />
                Instagram
              </a>
            </div>
            <a href="#contact" className="btn btn-primary footer-cta">
              Nacenění zdarma
              <ArrowRight size={10} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-brand" aria-hidden="true">
        <span>NOSLEEPHOUSE</span>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>Copyright © nosleephouse™ 2026</span>
          <a href="https://www.instagram.com/nosleephouse/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/nosleephouse" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581980980548"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
