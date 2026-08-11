'use client'
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import './CookieDialog.css';

interface CookiePrefs {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const CATEGORY_KEYS = ['necessary', 'preferences', 'statistics', 'marketing'] as const;

export default function CookieDialog({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).cookies;
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
      <div className={`cookie${visible ? ' is-open' : ''}`} role="dialog" aria-label={t.dialogAria}>
        <div className="cookie-inner">
          <div className="cookie-text">
            <h2>{t.title}</h2>
            <p>{t.text}</p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-details-btn" onClick={() => setDetailsOpen(true)}>
              {t.details}
            </button>
            <button type="button" className="btn btn-outline cookie-decline" onClick={declineAll}>
              {t.decline}
            </button>
            <button type="button" className="btn btn-primary" onClick={acceptAll}>
              {t.acceptAll}
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
              <h2 id="ck-modal-title">{t.modalTitle}</h2>
              <button type="button" className="ck-close" onClick={() => setDetailsOpen(false)} aria-label={t.closeAria}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="ck-modal-body">
              <p className="ck-intro">{t.intro}</p>

              {CATEGORY_KEYS.map((key) => {
                const { label, desc } = t.categories[key];
                const locked = key === 'necessary';
                return (
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
                );
              })}
            </div>

            <div className="ck-modal-footer">
              <button type="button" className="ck-footer-ghost" onClick={declineAll}>{t.decline}</button>
              <button type="button" className="btn btn-outline" onClick={acceptCustom}>{t.allowSelection}</button>
              <button type="button" className="btn btn-primary" onClick={acceptAll}>{t.allowAll}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
