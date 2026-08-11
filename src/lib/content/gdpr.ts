/**
 * Privacy-policy copy, per locale. Server-only content.
 *
 * The `cs` version is the original legal text as published (written in Slovak,
 * since nosleephouse s.r.o. is a Slovak entity) and is kept verbatim — the
 * English version is a translation for readers, not a separate legal document.
 */

import type { Locale } from '../i18n'

export type GdprSection = {
  heading: string
  body?: string
  list?: string[]
  outro?: string
}

export type GdprContentData = {
  eyebrow: string
  title: string
  effectiveDate: string
  sections: GdprSection[]
  back: string
}

const CS: GdprContentData = {
  eyebrow: 'Právne informácie',
  title: 'Zásady ochrany [[osobných údajov]]',
  effectiveDate: 'Platné a účinné od 13.10.2025',
  back: '← Späť na hlavnú stránku',
  sections: [
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
  ],
}

const EN: GdprContentData = {
  eyebrow: 'Legal information',
  title: 'Personal data [[privacy policy]]',
  effectiveDate: 'Valid and effective from 13 October 2025',
  back: '← Back to homepage',
  sections: [
    {
      heading: '1. Introduction',
      body: 'Your privacy matters to us. This policy explains how we collect, use and protect your personal data in line with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and Act No. 18/2018 Coll. on the protection of personal data.',
    },
    {
      heading: '2. Data controller',
      body: 'The controller is:\nnosleephouse s.r.o.\nSokolovská 178/10, 040 11 Košice-Západ, Slovakia\nCompany ID: 57 202 443\nEmail: nosleephouse@gmail.com',
    },
    {
      heading: '3. What data do we process?',
      body: 'We process the following data, obtained through the forms on our website or through Facebook advertising:',
      list: [
        'First name and surname',
        'Email address',
        'Phone number',
        'Information about your preferred meeting time',
        'IP address and cookies (more below)',
        'Behavioural data from the site (via analytics tools such as Meta Pixel or Google Analytics)',
      ],
    },
    {
      heading: '4. What do we use the data for?',
      body: 'We use your data for the following purposes:',
      list: [
        'Processing your meeting booking',
        'Sending confirmation and information emails',
        'Email marketing (newsletters, special offers)',
        'Retargeting and personalised advertising through tools such as the Facebook Pixel – based on your cookie consent',
      ],
    },
    {
      heading: '5. Use of cookies and retargeting',
      body: 'We use cookies on our website, including cookies for analytics and marketing purposes (e.g. the Facebook Pixel). They help us:',
      list: [
        'Improve the functionality of the site',
        'Display relevant advertising on platforms such as Facebook and Instagram',
        'Analyse traffic',
      ],
      outro:
        'By using the site and confirming the cookie bar you consent to your data being processed for these purposes. You can change or withdraw your consent at any time through your browser settings or by clicking “Decline cookies” at the bottom of the page.',
    },
    {
      heading: '6. Legal basis for processing',
      list: [
        'Contractual relationship (e.g. booking a meeting)',
        'Consent (e.g. email marketing, cookies)',
        'Legitimate interest (e.g. basic analytics needed to run the site)',
      ],
    },
    {
      heading: '7. How long do we keep the data?',
      body: 'We keep your data for as long as it is needed to fulfil its purpose, but no longer than 7 years from the last contact or until you withdraw your consent.',
    },
    {
      heading: '8. Your rights',
      body: 'You have the right to:',
      list: [
        'Access your data',
        'Have inaccurate data corrected',
        'Have data erased (the right to be forgotten)',
        'Restrict processing',
        'Data portability',
        'Withdraw consent',
        'Lodge a complaint with the Slovak Office for Personal Data Protection',
      ],
    },
    {
      heading: '9. Contact',
      body: 'If you have questions or wish to exercise your rights, contact us at: nosleephouse@gmail.com',
    },
  ],
}

const GDPR: Record<Locale, GdprContentData> = { cs: CS, en: EN }

export const getGdprContent = (locale: Locale) => GDPR[locale]
