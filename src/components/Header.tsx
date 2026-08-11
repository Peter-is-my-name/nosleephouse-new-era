'use client'
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ArrowRight, ChevronDown, Logo } from './icons';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { homeAnchor, homeHref } from '@/lib/routes';
import './Header.css';

type NavKey = 'home' | 'projects' | 'services' | 'about' | 'blog';
type NavItem = { key: NavKey; hash: string; hide?: true; dropdown?: true };

// `hide: true` items are temporarily hidden — remove the flag to show them again.
const NAV: NavItem[] = [
  { key: 'home',     hash: '#top',       hide: true },
  { key: 'projects', hash: '#portfolio', hide: true },
  { key: 'services', hash: '#services',  dropdown: true },
  { key: 'about',    hash: '#about'      },
  { key: 'blog',     hash: '#'           },
];

export default function Header({
  locale,
  /** same page in the other locale — drives the language switcher */
  altHref,
}: {
  locale: Locale;
  altHref: string;
}) {
  const t = getDictionary(locale);
  const [scrolled, setScrolled]         = useState(false);
  const [open, setOpen]                 = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropLeft, setDropLeft]         = useState(0);
  const sluzbyRef                       = useRef<HTMLLIElement>(null);
  const hoverTimer                      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const home     = homeHref(locale);
  const isHome   = pathname === home;
  // On the homepage the nav scrolls to anchors; elsewhere it navigates home first.
  const nh = (item: NavItem) =>
    item.key === 'blog' ? '#' : isHome ? item.hash : homeAnchor(locale, item.hash.slice(1));
  const portfolioHref = isHome ? '#portfolio' : homeAnchor(locale, 'portfolio');
  const servicesLinkHref = isHome ? '#services' : homeAnchor(locale, 'services');

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const val = open ? 'hidden' : '';
    document.body.style.overflow = val;
    document.documentElement.style.overflow = val;
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  /* ESC key to close dropdown */
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setServicesOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [servicesOpen]);

  /* Measure the services li center to position dropdown precisely underneath */
  useEffect(() => {
    const calc = () => {
      if (sluzbyRef.current) {
        const r = sluzbyRef.current.getBoundingClientRect();
        setDropLeft(r.left + r.width / 2);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const openDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const mobileMenu = mounted && createPortal(
    <div className={`mobile-menu${open ? ' is-open' : ''}`}>
      <button
        className="mobile-menu-close"
        type="button"
        aria-label={t.header.closeMenuAria}
        onClick={() => setOpen(false)}
      >
        <span />
        <span />
      </button>
      <nav aria-label={t.header.mobileNavAria}>
        <ul>
          {NAV.filter((it) => !it.hide).map((item, i) => (
            <li key={item.key} style={{ '--i': i } as React.CSSProperties}>
              <a href={nh(item)} onClick={() => setOpen(false)}>
                {t.header.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-menu-actions">
        <a href={portfolioHref} className="btn btn-primary mobile-menu-cta" onClick={() => setOpen(false)}>
          {t.header.cta}
          <ArrowRight size={14} />
        </a>
        <a
          href={altHref}
          className="lang lang-mobile"
          hrefLang={locale === 'cs' ? 'en' : 'cs'}
          aria-label={t.langSwitch.label}
          onClick={() => setOpen(false)}
        >
          {t.langSwitch.to}
        </a>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <a href={isHome ? '#top' : home} className="logo" aria-label={t.header.homeAria}>
            <Logo height={44} />
          </a>

          <div className="nav-cluster">
            <nav className="nav-desktop" aria-label={t.header.mainNavAria}>
              <ul>
                {NAV.filter((i) => !i.hide).map((item) =>
                  item.dropdown ? (
                    <li
                      key={item.key}
                      ref={sluzbyRef}
                      className={`has-dropdown${servicesOpen ? ' is-open' : ''}`}
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <a href={nh(item)} aria-haspopup="true" aria-expanded={servicesOpen}>
                        <span>{t.header.nav[item.key]}</span>
                        <ChevronDown size={12} />
                      </a>
                    </li>
                  ) : (
                    <li key={item.key}>
                      <a href={nh(item)} onClick={() => setServicesOpen(false)}>
                        <span>{t.header.nav[item.key]}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <a
              href={altHref}
              className="lang"
              hrefLang={locale === 'cs' ? 'en' : 'cs'}
              aria-label={t.langSwitch.label}
              title={t.langSwitch.toName}
              onClick={() => setServicesOpen(false)}
            >
              {t.langSwitch.to}
            </a>
            <a href={portfolioHref} className="btn btn-primary header-cta" onClick={() => setServicesOpen(false)}>
              {t.header.cta}
              <ArrowRight size={9} />
            </a>
          </div>

          <button
            className={`burger${open ? ' is-open' : ''}`}
            type="button"
            aria-label={t.header.menuAria}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

        {/* ── Services mega-dropdown ── */}
        <div
          className={`nav-dropdown${servicesOpen ? ' is-open' : ''}`}
          style={{ left: `${dropLeft}px` }}
          aria-hidden={!servicesOpen}
          role="region"
          aria-label={t.header.dropdownAria}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="nav-dropdown-inner">
            {/* Left column — services */}
            <div className="nd-col">
              <p className="nd-eyebrow">{t.header.servicesEyebrow}</p>
              <div className="nd-services-list">
                {t.header.services.map((label, i) => (
                  <a
                    key={label}
                    href={servicesLinkHref}
                    className="nd-service-link"
                    style={{ '--nd-i': i } as React.CSSProperties}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>{label}</span>
                    <span className="nd-arrow"><ArrowRight size={14} /></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="nd-divider" aria-hidden="true" />

            {/* Right column — sectors */}
            <div className="nd-col nd-col--sectors">
              <p className="nd-eyebrow">{t.header.sectorsEyebrow}</p>
              <div className="nd-sectors-list">
                {t.header.sectors.map((s, i) => (
                  <div
                    key={s.label}
                    className="nd-sector-item"
                    style={{ '--nd-i': i } as React.CSSProperties}
                  >
                    <div className="nd-sector-name">{s.label}</div>
                    <div className="nd-sector-sub">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
