import type { WebCopy } from './types'

/** /reklama (web in 7 days), Slovak copy (nosleephouse.sk). */
export const webSk: WebCopy = {
  meta: {
    title: 'Získajte viac dopytov vďaka modernému webu za 7 dní',
    description:
      'Moderný web, ktorý privádza zákazníkov, od návrhu po spustenie za 7 dní. Rezervujte si nezáväznú konzultáciu zdarma. Odpovieme do 24 hodín.',
  },
  header: { badge: 'Návrh webu zdarma', cta: 'Chcem viac dopytov' },
  hero: {
    ratingOn: 'Hodnotenie na',
    ratingAria: 'Hodnotenie 5 z 5',
    title:
      'Získajte viac dopytov s moderným webom už [[za 7 dní]] vďaka nášmu efektívnemu procesu od návrhu po spustenie.',
    sub: 'Bez komplikácií a zbytočných starostí.',
    cta: 'Chcem viac dopytov',
    imgAlt: 'Tím nosleephouse na veľtrhu',
    badges: ['**150+** zrealizovaných projektov od roku 2019', '**8** skúsených odborníkov v tíme'],
  },
  why: {
    eyebrow: '8 skúsených odborníkov v tíme',
    heading: 'Prečo spolupracovať [[s nami?]]',
    items: [
      'Na moderných nástrojoch a vlastných procesoch vám postavíme funkčný web podľa vašich požiadaviek, ktorý vám ušetrí čas aj peniaze.',
      'Pomohli sme vytvoriť web a kampane pre Reality Expo, ktoré nám dôveruje už dva roky. Vďaka našim výstupom získalo viac ako 30 vystavovateľov a tisíce registrácií.',
      'Sledujeme trendy, testujeme nové technologické a marketingové riešenia a premieňame ich na výsledky, ktoré vám privedú zákazníkov.',
      'Budujeme dlhodobé partnerstvá a sprevádzame vás aj po spustení webu. Od optimalizácie až po reklamné kampane a ďalší rozvoj projektu.',
    ],
  },
  form: {
    badge: 'Voľné miesta tento mesiac',
    heading: 'Začnite získavať [[viac dopytov]]',
    sub: 'Vyplňte formulár a ozveme sa vám do 24 hodín. Konzultácia je zdarma a nezáväzná.',
    submit: 'Chcem viac dopytov',
    questions: [
      {
        label: 'Aký typ webu potrebujete? *',
        emailLabel: 'Typ webu',
        options: [
          'Prezentačný web',
          'Komplexnejší viacstránkový web',
          'Firemný web',
          'Reklamný web (jednostránkový web)',
          'E-shop',
          'Webovú stránku už mám, ale potrebujem ju vylepšiť.',
          'Chcem s vami prebrať niečo iné.',
        ],
        error: 'Vyberte typ webu.',
      },
      {
        label: 'S akým rozpočtom počítate? *',
        emailLabel: 'Rozpočet',
        options: [
          'Mám k dispozícii viac ako 2 000 € a chcem investovať do kompletného webu od návrhu po spustenie.',
          'Mám bokom aspoň 1 200 € a chcem ich investovať do nového webu.',
          'Mám bokom len 600 € a potrebujem z toho niečo vyčarovať.',
          'Žiaľ, teraz si nemôžem dovoliť investovať ďalšie peniaze do dokončenia a spustenia webu.',
        ],
        error: 'Vyberte rozpočet.',
      },
    ],
  },
  results: {
    heading: 'Bohaté [[skúsenosti.]]',
    trust: 'Dôverujú nám 2+ roky',
    title: 'Reality EXPO',
    text: 'Web a kampane, ktorým firma dôveruje už viac ako 2 roky. Viac ako 30 vystavovateľov, tisíce registrácií. Kompletné riešenie od prvého návrhu po bežiace reklamné kampane.',
    imgAlt: 'Reality EXPO, veľtrh plný návštevníkov',
    stats: [
      { value: '3+', label: 'roky spolupráce' },
      { value: '30+', label: 'vystavovateľov' },
      { value: '4200+', label: 'registrácií' },
    ],
    logosLabel: 'Firmy, ktoré nám dôverujú',
  },
  faq: {
    lead: 'Nenašli ste odpoveď? Napíšte nám, odpovieme do 24 hodín.',
    items: [
      {
        q: 'Koľko to stojí?',
        a: 'Každý projekt je iný. Po úvodnej konzultácii vám pripravíme konkrétnu cenovú ponuku. Cenu uvádzame vopred: žiadne skryté poplatky, žiadne nepríjemné prekvapenia.',
      },
      {
        q: 'Ako dlho to trvá?',
        a: 'Štandardné weby a landing pages spúšťame do 7 pracovných dní od schválenia podkladov a dizajnu. Väčšie projekty (e-shopy, komplexné aplikácie) trvajú primerane dlhšie. Harmonogram vždy upresníme vopred.',
      },
      {
        q: 'Web už mám. Môžete robiť len marketing?',
        a: 'Určite. Môžeme spravovať vaše Meta a Google reklamy, optimalizovať konverzie alebo robiť SEO aj na existujúcom webe. Často však zistíme, že stránka potrebuje drobné úpravy pre lepšie výsledky. Tieto návrhy s vami vždy konzultujeme.',
      },
      {
        q: 'Musím sa zaviazať na dlho?',
        a: 'Nie. Konzultácia je zdarma a nezáväzná. Projekty riešime jednorazovo alebo formou mesačného retaineru podľa vašich potrieb. Spoluprácu môžete kedykoľvek ukončiť, plná kontrola zostáva vo vašich rukách.',
      },
      {
        q: 'Robíte aj reklamu po spustení webu?',
        a: 'Áno, to je naša špecializácia. Navrhujeme kreatívy, spravujeme kampane na Meta (Facebook a Instagram) a Google a optimalizujeme rozpočty. S klientmi sme postupne prešli na mesačnú spoluprácu, pretože efektívne riešime aj ich reklamy a bannery.',
      },
    ],
  },
  final: {
    offer: 'Rezervujte si [[stretnutie zdarma]]',
    sub: 'Kliknite na tlačidlo a objednajte sa na nezáväznú konzultáciu.',
    cta: 'Chcem viac dopytov',
  },
}
