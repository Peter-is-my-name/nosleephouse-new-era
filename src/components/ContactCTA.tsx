'use client'
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Logo } from './icons';
import './ContactCTA.css';

const BUDGETS = ['Nevíme', 'Do 30 000 Kč', 'Do 100 000 Kč', 'Nad 100 000 Kč'];

const FOUNDERS = [
  {
    photo: '/assets/contact/martin.jpg',
    role: 'Zakladatel & prodejce',
    name: 'Martin Bujňák',
    reason: 'Kvůli stavu projektu a dalších otázek:',
    phone: '+420 734 565 323',
    email: 'martin@nosleephouse.com',
  },
  {
    photo: '/assets/contact/peter.jpg',
    role: 'Zakladatel & grafický dizajnér',
    name: 'Peter Hronec',
    reason: 'Kvůli grafickýmu dizajnu:',
    phone: '+421 948 332 118',
    email: 'peter.hronec@nosleephouse.com',
  },
];

export default function ContactCTA() {
  const [budget, setBudget] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-head reveal">
          <h2 className="contact-heading">
            Jste připraveni budovat
            <br />
            <span className="accent">důvěru</span> s novým webem?
          </h2>
          <span className="contact-logo">
            <Logo height={54} />
          </span>
        </div>

        <div className="contact-grid">
          <form
            className="contact-form reveal"
            style={{ '--d': '0.1s' } as React.CSSProperties}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="field">
              <label htmlFor="cf-name">Jméno a příjmení*</label>
              <input id="cf-name" type="text" placeholder="Vyplňte jméno a příjmení" required />
            </div>

            <div className="field">
              <label htmlFor="cf-email">E-mail*</label>
              <input id="cf-email" type="email" placeholder="Vyplňte e-mail" required />
            </div>

            <div className="field">
              <label>Jaký máte rozpočet?</label>
              <div className="budget" role="radiogroup" aria-label="Jaký máte rozpočet?">
                {BUDGETS.map((b, i) => (
                  <button
                    type="button"
                    key={b}
                    role="radio"
                    aria-checked={budget === i}
                    className={`budget-opt${budget === i ? ' active' : ''}`}
                    onClick={() => setBudget(i)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-msg">Chcete připojit další informace o projektu?</label>
              <textarea id="cf-msg" rows={3} placeholder="Potřebujeme nový web..." />
            </div>

            <p className="gdpr">
              Odesláním formuláře souhlasíte s <a href="#">GDPR</a>
            </p>

            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? 'Odesláno ✓' : 'Odeslat'}
              {!sent && <ArrowRight size={10} />}
            </button>
          </form>

          <div className="contact-side reveal" style={{ '--d': '0.2s' } as React.CSSProperties}>
            <p className="contact-side-title">Hoří to? Volejte nebo pište.</p>
            <div className="founders">
              {FOUNDERS.map((f) => (
                <div className="founder" key={f.name}>
                  <Image className="founder-photo" src={f.photo} alt={f.name} width={210} height={245} loading="lazy" />
                  <div className="founder-info">
                    <span className="founder-role">{f.role}</span>
                    <a className="founder-name" href="#">
                      {f.name}
                    </a>
                    <span className="founder-reason">{f.reason}</span>
                    <a className="founder-contact" href={`tel:${f.phone.replace(/\s/g, '')}`}>
                      {f.phone}
                    </a>
                    <a className="founder-contact" href={`mailto:${f.email}`}>
                      {f.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
