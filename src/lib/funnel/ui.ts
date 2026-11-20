import type { Locale } from '../i18n'

/**
 * UI strings shared by every paid-traffic landing page (web, AI kreativy,
 * AI automatizace) in every locale: form labels, validation, thank-you page,
 * FAQ chrome, final CTA. Page-specific selling copy lives next to each funnel.
 * House rule: no em-dashes anywhere.
 */
export type FunnelUi = {
  form: {
    email: string
    emailPh: string
    firstName: string
    firstNamePh: string
    lastName: string
    lastNamePh: string
    phone: string
    phonePh: string
    prefixAria: string
    sending: string
    consent: string
    /** link text to the privacy policy, appended after `consent` */
    privacyLink: string
    proof: [strong: string, rest: string]
    errEmail: string
    errFirst: string
    errLast: string
    errPhone: string
    /** shown when the lead could not be delivered */
    errSend: string
  }
  /** default phone prefix shown first in the selector */
  prefix: '+420' | '+421'
  faq: { heading: [string, string]; ask: string }
  final: { eyebrow: string; firstStep: string; rating: string }
  footer: { madeBy: string }
  thanks: {
    /** short confirmation above the heading */
    received: string
    heading: string
    /** heading variant for the free-analysis funnel */
    headingAnalysis: string
    sub: string
    noSlot: string
    back: string
  }
}

export const FUNNEL_UI: Record<Locale, FunnelUi> = {
  cs: {
    form: {
      email: 'E-mail *',
      emailPh: 'vas@email.cz',
      firstName: 'Jméno *',
      firstNamePh: 'Honza',
      lastName: 'Příjmení *',
      lastNamePh: 'Novák',
      phone: 'Telefon *',
      phonePh: '608 123 456',
      prefixAria: 'Předvolba',
      sending: 'Odesílám…',
      consent: 'Údaje použijeme jen k vyřízení vaší poptávky. E-mail si uložíme hned po vyplnění, abychom se vám mohli ozvat, i když formulář nedokončíte. Podrobnosti najdete v',
      privacyLink: 'zásadách ochrany osobních údajů',
      proof: ['87+ klientů', 'nám důvěřuje'],
      errEmail: 'Zadejte platný e-mail.',
      errFirst: 'Vyplňte jméno.',
      errLast: 'Vyplňte příjmení.',
      errPhone: 'Zadejte platné telefonní číslo.',
      errSend: 'Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám rovnou zavolejte na +420 734 565 323.',
    },
    prefix: '+420',
    faq: { heading: ['Často kladené', 'otázky'], ask: 'Zeptat se přímo' },
    final: { eyebrow: 'Jen pár míst týdně', firstStep: 'První krok je nejdůležitější.', rating: '5,0/5' },
    footer: { madeBy: 'Vytvořilo' },
    thanks: {
      received: 'Děkujeme, poptávku jsme přijali.',
      heading: 'Rezervujte si svůj termín konzultace níže 👇',
      headingAnalysis: 'Rezervujte si termín bezplatné analýzy níže 👇',
      sub: 'Berte to prosím co nejvážněji. Každý den máme jen několik setkání a skutečně vám chceme předat hodnotu, takže si vyberte termín, kdy máte stoprocentně čas.',
      noSlot: 'Pokud vám žádný termín nevyhovuje, ozveme se vám sami.',
      back: '← Zpět na nabídku',
    },
  },
  sk: {
    form: {
      email: 'E-mail *',
      emailPh: 'vas@email.sk',
      firstName: 'Meno *',
      firstNamePh: 'Ján',
      lastName: 'Priezvisko *',
      lastNamePh: 'Novák',
      phone: 'Telefón *',
      phonePh: '903 123 456',
      prefixAria: 'Predvoľba',
      sending: 'Odosielam…',
      consent: 'Údaje použijeme len na vybavenie vášho dopytu. E-mail si uložíme hneď po vyplnení, aby sme sa vám mohli ozvať, aj keď formulár nedokončíte. Podrobnosti nájdete v',
      privacyLink: 'zásadách ochrany osobných údajov',
      proof: ['87+ klientov', 'nám dôveruje'],
      errEmail: 'Zadajte platný e-mail.',
      errFirst: 'Vyplňte meno.',
      errLast: 'Vyplňte priezvisko.',
      errPhone: 'Zadajte platné telefónne číslo.',
      errSend: 'Odoslanie sa nepodarilo. Skúste to, prosím, znova alebo nám rovno zavolajte na +421 944 971 113.',
    },
    prefix: '+421',
    faq: { heading: ['Často kladené', 'otázky'], ask: 'Opýtať sa priamo' },
    final: { eyebrow: 'Len pár miest týždenne', firstStep: 'Prvý krok je najdôležitejší.', rating: '5,0/5' },
    footer: { madeBy: 'Vytvorilo' },
    thanks: {
      received: 'Ďakujeme, dopyt sme prijali.',
      heading: 'Rezervujte si svoj termín konzultácie nižšie 👇',
      headingAnalysis: 'Rezervujte si termín bezplatnej analýzy nižšie 👇',
      sub: 'Berte to čo najvážnejšie. Každý deň máme len niekoľko stretnutí a naozaj vám chceme priniesť hodnotu, preto si vyberte termín, keď sa nám budete môcť na 100 % venovať.',
      noSlot: 'Ak vám žiadny termín nevyhovuje, ozveme sa vám sami.',
      back: '← Späť na ponuku',
    },
  },
  en: {
    form: {
      email: 'Email *',
      emailPh: 'you@company.com',
      firstName: 'First name *',
      firstNamePh: 'John',
      lastName: 'Last name *',
      lastNamePh: 'Smith',
      phone: 'Phone *',
      phonePh: '608 123 456',
      prefixAria: 'Country code',
      sending: 'Sending…',
      consent: 'We use your details only to handle your enquiry. We save your email as soon as you enter it, so we can get back to you even if you do not finish the form. Full details are in our',
      privacyLink: 'privacy policy',
      proof: ['87+ clients', 'trust us'],
      errEmail: 'Enter a valid email address.',
      errFirst: 'Enter your first name.',
      errLast: 'Enter your last name.',
      errPhone: 'Enter a valid phone number.',
      errSend: 'Sending failed. Please try again, or call us directly on +420 734 565 323.',
    },
    prefix: '+420',
    faq: { heading: ['Frequently asked', 'questions'], ask: 'Ask us directly' },
    final: { eyebrow: 'Only a few spots each week', firstStep: 'The first step matters most.', rating: '5.0/5' },
    footer: { madeBy: 'Made by' },
    thanks: {
      received: 'Thank you, we have received your enquiry.',
      heading: 'Book your consultation slot below 👇',
      headingAnalysis: 'Book your free analysis slot below 👇',
      sub: 'Please treat this booking as a firm commitment. We only have a few meetings each day and we genuinely want to bring you value, so pick a time when you can give it your full attention.',
      noSlot: "If none of these times suit you, we'll get in touch.",
      back: '← Back to the offer',
    },
  },
}
