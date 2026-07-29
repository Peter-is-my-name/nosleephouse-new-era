'use client'
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ArrowRight, ChevronDown, Logo } from './icons';
import './Header.css';

type NavItem = { label: string; hash: string; page: string; dropdown?: true; hide?: true };
// `hide: true` items are temporarily hidden — remove the flag to show them again.
const NAV: NavItem[] = [
  { label: 'Domů',       hash: '#top',       page: '/',           hide: true },
  { label: 'Naše projekty', hash: '#portfolio', page: '/#portfolio', hide: true },
  { label: 'Služby',     hash: '#services',  page: '/#services',  dropdown: true },
  { label: 'O nás',      hash: '#about',     page: '/#about'      },
  { label: 'Blog',       hash: '#',          page: '#'            },
];

const SERVICES = [
  { label: 'Tvorba webů & vývoj',           href: '/#services' },
  { label: 'Grafický Design',                href: '/#services' },
  { label: 'Vizuální Identita',              href: '/#services' },
  { label: 'Marketing & Růst',               href: '/#services' },
  { label: 'AI Automatizace & AI Kreativy',  href: '/#services' },
];

const SECTORS = [
  {
    label: 'Reality & Nemovitosti',
    sub:   'Weby pro makléře, realitní kanceláře a developerské projekty',
  },
  {
    label: 'Developerské projekty',
    sub:   'Digitální prezentace bytových i komerčních výstaveb',
  },
  {
    label: 'Konference, Veletrhy & Akce',
    sub:   'Registrační weby a digitální identity pro živé události',
  },
];

export default function Header() {
  const [scrolled, setScrolled]         = useState(false);
  const [open, setOpen]                 = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropLeft, setDropLeft]         = useState(0);
  const sluzbyRef                       = useRef<HTMLLIElement>(null);
  const hoverTimer                      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome   = pathname === '/';
  const nh = (item: NavItem) => isHome ? item.hash : item.page;

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

  /* Measure SLUŽBY li center to position dropdown precisely underneath */
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
        aria-label="Zavřít menu"
        onClick={() => setOpen(false)}
      >
        <span />
        <span />
      </button>
      <nav aria-label="Mobilní navigace">
        <ul>
          {NAV.filter((it) => !it.hide).map((item, i) => (
            <li key={item.label} style={{ '--i': i } as React.CSSProperties}>
              <a href={nh(item)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href={isHome ? '#portfolio' : '/#portfolio'} className="btn btn-primary mobile-menu-cta" onClick={() => setOpen(false)}>
        Naše projekty
        <ArrowRight size={14} />
      </a>
    </div>,
    document.body
  );

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <a href={isHome ? '#top' : '/'} className="logo" aria-label="nosleephouse — domů">
            <Logo height={44} />
          </a>

          <div className="nav-cluster">
            <nav className="nav-desktop" aria-label="Hlavní navigace">
              <ul>
                {NAV.filter((i) => !i.hide).map((item) =>
                  item.dropdown ? (
                    <li
                      key={item.label}
                      ref={sluzbyRef}
                      className={`has-dropdown${servicesOpen ? ' is-open' : ''}`}
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <a href={nh(item)} aria-haspopup="true" aria-expanded={servicesOpen}>
                        <span>{item.label}</span>
                        <ChevronDown size={12} />
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <a href={nh(item)} onClick={() => setServicesOpen(false)}>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <a href={isHome ? '#portfolio' : '/#portfolio'} className="btn btn-primary header-cta" onClick={() => setServicesOpen(false)}>
              Naše projekty
              <ArrowRight size={9} />
            </a>
          </div>

          <button
            className={`burger${open ? ' is-open' : ''}`}
            type="button"
            aria-label="Menu"
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
          aria-label="Naše služby"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="nav-dropdown-inner">
            {/* Left column — services */}
            <div className="nd-col">
              <p className="nd-eyebrow">Naše služby</p>
              <div className="nd-services-list">
                {SERVICES.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="nd-service-link"
                    style={{ '--nd-i': i } as React.CSSProperties}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>{s.label}</span>
                    <span className="nd-arrow"><ArrowRight size={14} /></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="nd-divider" aria-hidden="true" />

            {/* Right column — sectors */}
            <div className="nd-col nd-col--sectors">
              <p className="nd-eyebrow">Specializujeme se na</p>
              <div className="nd-sectors-list">
                {SECTORS.map((s, i) => (
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
