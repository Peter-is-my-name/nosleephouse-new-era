'use client'
import { ArrowRight, LinkedInIcon, InstagramIcon } from './icons';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { contactHref, gdprHref, homeAnchor, homeHref } from '@/lib/routes';
import { MARTIN_PHONE, telHref } from '@/lib/contact';
import CookieSettingsLink from './CookieSettingsLink';
import './Footer.css';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  // Explore column, by position: home, about, contact, careers (e-mail).
  const exploreHrefs = [
    homeHref(locale),
    homeAnchor(locale, 'about'),
    contactHref(locale),
    `mailto:info@nosleephouse.com?subject=${encodeURIComponent(t.footer.exploreLinks[3] ?? '')}`,
  ];
  const cols = [
    { head: t.footer.exploreHead, links: t.footer.exploreLinks, hrefs: exploreHrefs },
    // services lead to the contact form (works from every page, not only home)
    { head: t.footer.servicesHead, links: t.header.services, hrefs: t.header.services.map(() => contactHref(locale)) },
  ];
  const privacy = { cs: 'Ochrana osobních údajů', sk: 'Ochrana osobných údajov', en: 'Privacy policy' }[locale];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          {cols.map((c) => (
            <nav className="footer-col" key={c.head} aria-label={c.head}>
              <span className="footer-col-head">{c.head}</span>
              <ul>
                {c.links.map((l, i) => (
                  <li key={l}>
                    <a href={c.hrefs[i] ?? contactHref(locale)}>{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-contact">
            <span className="footer-label">{t.footer.contactLabel}</span>
            <a className="footer-email" href="mailto:info@nosleephouse.com">
              info@nosleephouse.com
            </a>
            <a className="footer-phone" href={telHref(MARTIN_PHONE[locale])}>
              {MARTIN_PHONE[locale]}
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
            <a href={contactHref(locale)} className="btn btn-primary footer-cta">
              {t.footer.cta}
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
          <span>{t.footer.copyright}</span>
          <a href={gdprHref(locale)}>{privacy}</a>
          <CookieSettingsLink locale={locale} />
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
