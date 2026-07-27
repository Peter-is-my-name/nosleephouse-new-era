import './Gdpr.css'

type Section = {
  heading: string
  body?: string
  list?: string[]
  outro?: string
}

const EFFECTIVE_DATE = 'Platné a účinné od 13.10.2025'

const SECTIONS: Section[] = [
  {
    heading: '1. Úvod',
    body: 'Vaše súkromie je pre nás dôležité. Tieto zásady vysvetľujú, ako zhromažďujeme, používame a chránime vaše osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.',
  },
  {
    heading: '2. Prevádzkovateľ osobných údajov',
    body: 'Prevádzkovateľom je:\nnosleephouse s.r.o.\nSokolovská 178/10, 040 11 Košice-Západ\nIČO: 57 202 443\nE-mail: nosleephouse@gmail.com',
  },
  {
    heading: '3. Aké údaje spracúvame?',
    body: 'Spracúvame tieto údaje, ktoré získavame cez formuláre na našej webstránke alebo prostredníctvom Facebook reklamy:',
    list: [
      'Meno a priezvisko',
      'E-mailová adresa',
      'Telefónne číslo',
      'Informácie o požadovanom termíne stretnutia',
      'IP adresa a cookies (viac nižšie)',
      'Údaje o správaní sa na stránke (cez analytické nástroje ako Meta Pixel alebo Google Analytics)',
    ],
  },
  {
    heading: '4. Na aký účel údaje používame?',
    body: 'Vaše údaje používame na nasledovné účely:',
    list: [
      'Spracovanie rezervácie stretnutia',
      'Odosielanie potvrdzujúcich a informačných emailov',
      'E-mail marketing (newslettery, špeciálne ponuky)',
      'Retargeting a personalizovaná reklama cez nástroje ako Facebook Pixel – na základe súhlasu so súbormi cookies',
    ],
  },
  {
    heading: '5. Používanie cookies a retargeting',
    body: 'Na našej webstránke používame súbory cookies, vrátane tých, ktoré slúžia na analytické a marketingové účely (napr. Facebook Pixel). Pomáhajú nám:',
    list: [
      'Zlepšovať funkčionalitu stránky',
      'Zobrazovať relevantné reklamy na platformách ako Facebook/Instagram',
      'Analyzovať návštevnosť',
    ],
    outro:
      'Používaním stránky a potvrdením cookies lišty vyjadrujete súhlas so spracovaním údajov na tieto účely. Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať cez nastavenia prehliadača alebo kliknutím na „Odmietnuť cookies“ v spodnej časti stránky.',
  },
  {
    heading: '6. Právny základ spracovania',
    list: [
      'Zmluvný vzťah (napr. rezervácia stretnutia)',
      'Súhlas (napr. email marketing, cookies)',
      'Oprávnený záujem (napr. základná analytika pre chod stránky)',
    ],
  },
  {
    heading: '7. Ako dlho údaje uchovávame?',
    body: 'Vaše údaje uchovávame po dobu nevyhnutnú na splnenie účelu, maximálne však 7 rokov od posledného kontaktu alebo do odvolania súhlasu.',
  },
  {
    heading: '8. Vaše práva',
    body: 'Máte právo na:',
    list: [
      'Prístup k údajom',
      'Opravu nesprávnych údajov',
      'Vymazanie údajov (právo na zabudnutie)',
      'Obmedzenie spracovania',
      'Prenositeľnosť údajov',
      'Odvolanie súhlasu',
      'Podanie sťažnosti na Úrad na ochranu osobných údajov SR',
    ],
  },
  {
    heading: '9. Kontakt',
    body: 'V prípade otázok alebo uplatnenia práv nás kontaktujte na: nosleephouse@gmail.com',
  },
]

export default function GdprContent() {
  const year = new Date().getFullYear()
  return (
    <section className="gdpr">
      <div className="container gdpr-inner">
        <header className="gdpr-head">
          <span className="gdpr-eyebrow">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5 2.5 4v4.5c0 3 2.4 5.8 5.5 6.5 3.1-.7 5.5-3.5 5.5-6.5V4L8 1.5z" stroke="var(--green)" strokeWidth="1.4" />
              <path d="m5.5 8.5 2 1.8 3-3.6" stroke="var(--green)" strokeWidth="1.5" />
            </svg>
            Právne informácie
          </span>
          <h1 className="gdpr-title">
            Zásady ochrany <span className="accent">osobných údajov</span>
          </h1>
          <p className="gdpr-date">{EFFECTIVE_DATE}</p>
        </header>

        <div className="gdpr-sections">
          {SECTIONS.map((s) => (
            <article className="gdpr-section" key={s.heading}>
              <h2 className="gdpr-section-heading">{s.heading}</h2>
              {s.body && <p className="gdpr-body">{s.body}</p>}
              {s.list && (
                <ul className="gdpr-list">
                  {s.list.map((item) => (
                    <li key={item}>
                      <span className="gdpr-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.outro && <p className="gdpr-body">{s.outro}</p>}
            </article>
          ))}
        </div>

        <div className="gdpr-foot">
          <p>© {year} nosleephouse s.r.o. · IČO: 57 202 443</p>
          <a href="/" className="gdpr-back">← Späť na hlavnú stránku</a>
        </div>
      </div>
    </section>
  )
}
