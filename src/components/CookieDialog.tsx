import { useEffect, useState } from 'react';
import './CookieDialog.css';

export default function CookieDialog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('nsh-cookies')) return;
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const close = (choice: string) => {
    localStorage.setItem('nsh-cookies', choice);
    setVisible(false);
  };

  return (
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
          <button type="button" className="btn btn-outline cookie-decline" onClick={() => close('declined')}>
            Odmítnout
          </button>
          <button type="button" className="btn btn-primary" onClick={() => close('accepted')}>
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
}
