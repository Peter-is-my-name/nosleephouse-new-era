'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ArrowRight, ChevronDown, Logo } from './icons';
import './Header.css';

type NavItem = { label: string; hash: string; page: string; dropdown?: true };
const NAV: NavItem[] = [
  { label: 'Domů',       hash: '#top',       page: '/'           },
  { label: 'Naše práce', hash: '#portfolio', page: '/#portfolio'  },
  { label: 'Služby',     hash: '#services',  page: '/#services',  dropdown: true },
  { label: 'O nás',      hash: '#about',     page: '/#about'      },
  { label: 'Blog',       hash: '#',          page: '#'            },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
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
          {NAV.map((item, i) => (
            <li key={item.label} style={{ '--i': i } as React.CSSProperties}>
              <a href={nh(item)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href={isHome ? '#portfolio' : '/#portfolio'} className="btn btn-primary mobile-menu-cta" onClick={() => setOpen(false)}>
        Naše práce
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
                {NAV.map((item) => (
                  <li key={item.label} className={item.dropdown ? 'has-dropdown' : ''}>
                    <a href={nh(item)}>
                      <span>{item.label}</span>
                      {item.dropdown && <ChevronDown size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href={isHome ? '#portfolio' : '/#portfolio'} className="btn btn-primary header-cta">
              Naše práce
              <ArrowRight size={9} />
            </a>
            <button className="lang" type="button">
              EN
            </button>
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
      </header>
      {mobileMenu}
    </>
  );
}
