'use client'
import { useEffect, useState } from 'react';
import './CookieDialog.css';

interface CookiePrefs {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export default function CookieDialog() {
  const [visible, setVisible]         = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [prefs, setPrefs]             = useState<CookiePrefs>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    if (localStorage.getItem('nsh-cookies')) return;
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!detailsOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDetailsOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [detailsOpen]);

  const save = (value: string) => {
    localStorage.setItem('nsh-cookies', value);
    setVisible(false);
    setDetailsOpen(false);
  };

  const acceptAll    = () => save(JSON.stringify({ necessary: true, preferences: true, statistics: true, marketing: true }));
  const declineAll   = () => save('declined');
  const acceptCustom = () => save(JSON.stringify(prefs));

  const toggle = (key: keyof Omit<CookiePrefs, 'necessary'>) =>
    setPrefs(p => ({ ...p, [key]: !p[key] }));

  return (
    <>
      <div className={`cookie${visible ? ' is-open' : ''}`} role="dialog" aria-label="Informace o cookies">
        <div className="cookie-inner">
          <div className="cookie-text">
            <h2>Informace o cookies</h2>
            <p>
              Pro co nejlepší služby používáme cookies k ukládání a přístupu k informacím o zařízení.
              Souhlasem umožníte zpracování údajů, jako je chování na webu.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-details-btn" onClick={() => setDetailsOpen(true)}>
              Zobrazit detaily
            </button>
            <button type="button" className="btn btn-outline cookie-decline" onClick={declineAll}>
              Odmítnout
            </button>
            <button type="button" className="btn btn-primary" onClick={acceptAll}>
              Přijmout vše
            </button>
          </div>
        </div>
      </div>

      {detailsOpen && (
        <div className="ck-overlay" onClick={() => setDetailsOpen(false)}>
          <div
            className="ck-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ck-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <div className="ck-modal-header">
              <h2 id="ck-modal-title">Nastavení cookies</h2>
              <button type="button" className="ck-close" onClick={() => setDetailsOpen(false)} aria-label="Zavřít">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="ck-modal-body">
              <p className="ck-intro">
                Cookies jsou malé textové soubory ukládané na vašem zařízení. Některé pomáhají webu fungovat, jiné nám umožní personalizovat obsah nebo pochopit, jak web používáte. Volba je na vás.
              </p>

              {([
                {
                  key: 'necessary' as const,
                  label: 'Nutné',
                  desc: 'Nutné cookies pomáhají, aby byla stránka použitelná tak, že umožní základní funkce jako navigace stránky. Webová stránka nemůže správně fungovat bez těchto cookies.',
                  locked: true,
                },
                {
                  key: 'preferences' as const,
                  label: 'Preferenční',
                  desc: 'Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk.',
                  locked: false,
                },
                {
                  key: 'statistics' as const,
                  label: 'Statistické',
                  desc: 'Statistické cookies nám pomáhají, abychom porozuměli, jak návštěvníci používají naše webové stránky. Anonymně sbírají a sdílují informace.',
                  locked: false,
                },
                {
                  key: 'marketing' as const,
                  label: 'Marketingové',
                  desc: 'Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele.',
                  locked: false,
                },
              ] as const).map(({ key, label, desc, locked }) => (
                <div className="ck-category" key={key}>
                  <div className="ck-category-header">
                    <div className="ck-category-text">
                      <div className="ck-category-name">{label}</div>
                      <div className="ck-category-desc">{desc}</div>
                    </div>
                    <label className={`ck-toggle${locked ? ' is-locked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={prefs[key]}
                        disabled={locked}
                        onChange={locked ? undefined : () => toggle(key as keyof Omit<CookiePrefs, 'necessary'>)}
                      />
                      <span className="ck-toggle-track" />
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="ck-modal-footer">
              <button type="button" className="ck-footer-ghost" onClick={declineAll}>Odmítnout</button>
              <button type="button" className="btn btn-outline" onClick={acceptCustom}>Povolit výběr</button>
              <button type="button" className="btn btn-primary" onClick={acceptAll}>Povolit vše</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
