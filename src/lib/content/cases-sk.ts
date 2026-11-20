/**
 * Case-study copy, Slovak locale.
 *
 * Slovak translation of the `cs` entries in ./cases.ts, with identical
 * structure (same keys, array lengths, numbers). Server-only content.
 *
 * Strings may use `rich()` markup: `**bold**`, `[[accent]]`, `\n`.
 */

import type { StandardCase, DuopetCase } from './cases'

/* ── Reality EXPO ──────────────────────────────────────────── */

export const REALITY_EXPO_SK: StandardCase = {
  heroHeading: 'Reality EXPO:\nBranding, web\na [[kampaň.]]',
  heroDesc:
    'Organizátori Reality Expo nás oslovili s výzvou, ktorá spojila tri veci naraz: vizuálnu identitu podujatia, funkčný web a digitálnu kampaň, ktorá priniesla rekordnú návštevnosť. Všetko spustené za štyri týždne.',
  client: 'Reality Expo',
  year: '2025',
  industry: 'Nehnuteľnosti · Event',
  services: ['Branding', 'Web Design', 'Development', 'Kampaň'],
  briefHeading: 'Veľtrh, ktorý\npotreboval\n[[silný hlas.]]',
  briefBody: [
    'Reality Expo je realitné podujatie v srdci Bratislavy. V ikonickej Starej tržnici sa každoročne stretávajú tisíce ľudí, ktorí riešia bývanie, s poprednými realitnými odborníkmi. Organizátori nás oslovili s jasným zadaním: kompletná digitálna transformácia, od brand identity cez web až po výkonnostné kampane.',
    'Žiadne kompromisy. Žiadna generická šablóna. Identita, web aj kampane postavené na mieru pre podujatie, ktoré si to zaslúži.',
  ],
  challengeHeading: 'Tri problémy,\njedno [[riešenie.]]',
  challenges: [
    {
      num: '01',
      title: 'Generická značka',
      body: 'Vizuálna identita nekomunikovala prémiovosť ani dôveryhodnosť, ktorú podujatie takéhoto rozsahu potrebuje.',
    },
    {
      num: '02',
      title: 'Web bez konverzií',
      body: 'Návštevníci si web prezreli a odišli. Registrácia bola skrytá, cesta k nej nejasná a nič ich k nej neviedlo.',
    },
    {
      num: '03',
      title: 'Neefektívne kampane',
      body: 'PPC kampane bežali bez segmentácie publika, čo viedlo k vysokým nákladom na akvizíciu a nízkej návratnosti investícií.',
    },
  ],
  solutionHeading: 'Nie viac reklamy.\nSystém, ktorý\n[[fungoval.]]',
  solutionBody: [
    'Vytvorili sme vlastný typografický systém a ikonografiu, ktoré dali Reality EXPO jasnú vizuálnu identitu. Nový web sme postavili okolo jedného cieľa: registrácie. Každý prvok stránky viedol k akcii.',
    'PPC kampane sme prebudovali od základov s presnou segmentáciou publika, takže reklama cielila iba na ľudí so skutočným záujmom, nie na náhodné kliknutia.',
  ],
  gallery: ['Brand identita', 'Reality EXPO 2025 na mieste'],
  deliverables: [
    {
      num: '01',
      title: 'Brand Identity',
      body: 'Logo, farebný systém, typografia a grafický jazyk Reality EXPO. Profesionálna estetika, ktorá zaujme developerov, investorov aj kupujúcich.',
    },
    {
      num: '02',
      title: 'Webová stránka',
      body: 'Prehľadný web postavený okolo jedného cieľa: registrácie. Spustený za 4 týždne od briefu, bez jediného odkladu.',
    },
    {
      num: '03',
      title: 'PPC kampane',
      body: 'Segmentované kampane s presným cielením, teda menej plytvania rozpočtom a viac kvalifikovaných registrácií.',
    },
    {
      num: '04',
      title: 'Materiály na podujatie',
      body: 'Vizuály pre tlačoviny, signage a prezentáciu podujatia na mieste. Jednotný vizuálny jazyk od webu až po vstupnú bránu.',
    },
    {
      num: '05',
      title: 'Social Media',
      body: 'Obsahová stratégia a vizuály pre sociálne siete, ktoré držali publikum v obraze pred podujatím aj počas neho.',
    },
  ],
  results: [
    { value: '4200+', label: 'registrovaných účastníkov' },
    { value: '2,1×', label: 'vyšší konverzný pomer webu' },
    { value: '−38 %', label: 'nižšie náklady na registráciu' },
    { value: '12×', label: 'návratnosť investície' },
  ],
  testimonial: {
    quote:
      '„S Petrom a Martinom spolupracujeme už viac ako 2 roky. Prístup k projektu bol od začiatku profesionálny: jasná komunikácia a výsledky, ktoré prekonali očakávania. Web spustili presne v termíne a beží bezchybne. Odporúčam každému, kto hľadá agentúrne výsledky s ľudským prístupom.“',
    name: 'Jakub Haidari',
    role: 'Marketing nehnuteľností, Reality EXPO',
  },
}

/* ── Aparsia ───────────────────────────────────────────────── */

export const APARSIA_SK: StandardCase = {
  heroHeading: 'Aparsia:\nWeb, admin\na [[CRM.]]',
  heroDesc:
    'Aparsia sprostredkúva investície do bulharských nehnuteľností. Potrebovali kompletné digitálne riešenie: reprezentatívny web pre investorov, admin portál a CRM pre interný tím. Všetko postavené na mieru a spustené za šesť týždňov.',
  client: 'Aparsia s.r.o.',
  year: '2025',
  industry: 'Nehnuteľnosti · Investície',
  services: ['UI/UX Design', 'Development', 'Admin Panel', 'SEO'],
  briefHeading: 'Platforma,\nktorej ľudia\nmusia [[veriť.]]',
  briefBody: [
    'Aparsia otvára Čechom a Slovákom dvere k nehnuteľnostiam v Bulharsku. Apartmány pri mori, horské byty aj investičné príležitosti, to všetko s právnym servisom a podporou v ich jazyku. Oslovili nás s jasným cieľom: kompletné digitálne riešenie od webu cez admin portál až po CRM.',
    'Web musel pôsobiť dôveryhodne na prvý pohľad a zároveň dať internému tímu nástroje na každodennú správu nehnuteľností a klientov. Žiadne kompromisy.',
  ],
  challengeHeading: 'Dva svety,\njeden [[systém.]]',
  challenges: [
    {
      num: '01',
      title: 'Dôvera na diaľku',
      body: 'Kúpa nehnuteľnosti v cudzej krajine si vyžaduje dôveru. Web ju musel vzbudiť hneď na prvý pohľad a previesť záujemcu celým procesom.',
    },
    {
      num: '02',
      title: 'Dva typy používateľov',
      body: 'Web slúžil investorom, ktorí hľadajú transparentnosť, aj internému tímu, ktorý potrebuje efektívne nástroje. Dva odlišné svety v jednom systéme.',
    },
    {
      num: '03',
      title: 'Medzinárodný dosah',
      body: 'Záujemcovia z Česka, Slovenska aj zo zahraničia. Jeden web musel fungovať vo viacerých jazykoch, bez kompromisov v obsahu a prehľadnosti.',
    },
  ],
  solutionHeading: 'Dve vrstvy,\njeden\n[[systém.]]',
  solutionBody: [
    'Navrhli sme dvojvrstvové riešenie: verejný web s dôrazom na konverziu a dôveru a súkromný admin portál s plnou kontrolou nad nehnuteľnosťami, klientmi aj dokumentáciou. Celý systém stojí na Next.js s vlastným backendom.',
    'Web sme lokalizovali do viacerých jazykov, aby oslovil investorov naprieč trhmi. Rýchly, prehľadný a postavený tak, aby z návštevy urobil skutočný dopyt.',
  ],
  gallery: ['Web Aparsia', 'Admin portál'],
  deliverables: [
    {
      num: '01',
      title: 'Firemný web',
      body: 'Reprezentatívny viacjazyčný web zameraný na konverziu a dôveru. Prehľadný katalóg nehnuteľností a jasná cesta k dopytu.',
    },
    {
      num: '02',
      title: 'Admin portál',
      body: 'Súkromné rozhranie s plnou kontrolou nad nehnuteľnosťami, klientmi a dokumentáciou. Efektívne nástroje na každodennú prevádzku.',
    },
    {
      num: '03',
      title: 'CRM integrácia',
      body: 'Prepojenie webu a admin portálu do jedného systému. Dopyty, klienti aj nehnuteľnosti prehľadne na jednom mieste.',
    },
    {
      num: '04',
      title: 'SEO optimalizácia',
      body: 'Technické aj obsahové SEO vo všetkých jazykových verziách. Web, ktorý vyhľadávače nájdu a odporučia správnym ľuďom.',
    },
    {
      num: '05',
      title: 'Mobilná responzivita',
      body: 'Plynulý zážitok na každom zariadení, od telefónu po desktop. Rýchle načítanie a čistý dizajn, ktorý nezdržiava.',
    },
  ],
  results: [
    { value: '3×', label: 'viac dopytov mesačne' },
    { value: '98', label: 'skóre Lighthouse' },
    { value: '4', label: 'jazykové verzie webu' },
    { value: '100 %', label: 'spokojnosť klienta' },
  ],
  testimonial: {
    quote:
      '„Martin bol skvelý od prvého kontaktu. Celý proces bol rýchly, komunikácia bezproblémová a výsledný web presne odráža môj štýl. Páčilo sa mi, že nevytvárali len pekný web. Rozmýšľali o tom, čo nám prinesie klientov. Výsledky to potvrdili.“',
    name: 'Dominika Donovalová',
    role: 'Podnikateľka, Aparsia',
  },
}

/* ── JUN Matcha ────────────────────────────────────────────── */

export const JUN_MATCHA_SK: StandardCase = {
  heroHeading: 'JUN:\nSilná značka\nod [[nuly.]]',
  heroDesc:
    'JUN je specialty matcha bar v centre Prahy, ktorý spája japonskú kultúru matchy s hravými receptúrami na český spôsob. Vytvorili sme kompletnú vizuálnu identitu, od loga cez obaly až po Instagram. Rovnako výraznú ako ich matcha.',
  client: 'JUN Matcha Bar',
  year: '2025',
  industry: 'Gastro · Kaviareň',
  services: ['Logo', 'Brand Identity', 'Visual System', 'Packaging'],
  briefHeading: 'Značka, ktorú\nsi ľudia\n[[zapamätajú.]]',
  briefBody: [
    'JUN vznikal v centre Prahy ako specialty matcha bar. Nová značka, žiadna história, žiadne povedomie. Zakladatelia prišli s jasnou víziou: autentická, moderná identita, ktorá bude rovnako silná v kaviarni, na obaloch aj na Instagrame.',
    'Matcha je dnes všade. Úlohou bolo vytvoriť značku, ktorá sa v preplnenej kategórii nestratí a na prvý pohľad povie: toto je prémiová, premyslená matcha.',
  ],
  challengeHeading: 'Tri problémy,\njedno [[riešenie.]]',
  challenges: [
    {
      num: '01',
      title: 'Preplnená kategória',
      body: 'Matcha bary dnes rastú ako huby po daždi. Väčšina vyzerá rovnako: generická zeleň a ázijské klišé. JUN musel na prvý pohľad vyčnievať.',
    },
    {
      num: '02',
      title: 'Značka od nuly',
      body: 'Žiadne logo, žiadna identita, žiadne povedomie. Všetko sa muselo postaviť od základov a hneď pôsobiť ako zavedená, sebavedomá značka.',
    },
    {
      num: '03',
      title: 'Musí fungovať všade',
      body: 'Identita musela sedieť na šálke, na obale, na tabuliach v podniku aj vo feede na Instagrame. Jeden systém, veľa miest a jediný dojem.',
    },
  ],
  solutionHeading: 'Minimalizmus\ns [[charakterom.]]',
  solutionBody: [
    'Navrhli sme minimalistický systém loga inšpirovaný japonskou kaligrafiou a geometriou. Farebná paleta spája zemité tóny s jemnou zeleňou matchy. Čisto, prémiovo a bez klišé.',
    'Celý vizuálny systém sme postavili tak, aby sa dal škálovať naprieč všetkými kanálmi. Od šálky po Instagram funguje ako jeden konzistentný celok.',
  ],
  gallery: ['Systém loga', 'Obaly a bar'],
  deliverables: [
    {
      num: '01',
      title: 'Systém loga',
      body: 'Minimalistické logo inšpirované japonskou kaligrafiou a geometriou. Rozpoznateľné na prvý pohľad a funkčné v akejkoľvek veľkosti.',
    },
    {
      num: '02',
      title: 'Brand Guidelines',
      body: 'Jasné pravidlá pre farby, typografiu a používanie značky. Aby JUN pôsobil konzistentne bez ohľadu na to, kto vizuál tvorí.',
    },
    {
      num: '03',
      title: 'Packaging Design',
      body: 'Obaly, poháriky a materiály, ktoré z každého drinku robia malý zážitok hodný zdieľania na sieťach.',
    },
    {
      num: '04',
      title: 'Šablóny pre sociálne siete',
      body: 'Sada šablón pre Instagram, vďaka ktorej je feed konzistentný a vizuálne silný bez práce navyše pri každom príspevku.',
    },
    {
      num: '05',
      title: 'Interiérové značenie',
      body: 'Tabule a vizuálne prvky do priestoru baru, ktoré plynule nadväzujú na celú identitu značky.',
    },
  ],
  results: [
    { value: '4,9★', label: 'hodnotenie na Google' },
    { value: '2800+', label: 'sledovateľov za prvý mesiac' },
    { value: '3 týždne', label: 'od briefu po finálnu identitu' },
    { value: '1×', label: 'ucelený vizuálny systém' },
  ],
}

/* ── DUOPET (CaseStudyV2 layout) ───────────────────────────── */

export const DUOPET_SK: DuopetCase = {
  heroHeading: 'DUOPET:\nWeb, dashboard\na [[AI nástroje.]]',
  heroDesc:
    'DUOPET spracúva a recykluje plasty pre priemysel v celej Európe. Postavili sme im web, ktorý prináša nové zákazky, a k tomu dashboard a AI aplikácie, ktoré zrýchlili ich interné procesy.',
  client: 'DUOPET s.r.o.',
  year: '2024',
  industry: 'Recyklácia · Priemysel',
  services: ['Web Design', 'Development', 'Dashboard', 'AI Apps'],
  chips: ['ISO 9001:2015', 'Dodávky do celej Európy', 'PET · PP · PE · PS · ABS', 'B2B priemysel'],
  leadStatement: 'Veľká firma. Web, ktorý to [[nevedel povedať.]]',
  leadBody: [
    'DUOPET je certifikovaný spracovateľ plastov. Regranulácia, drvenie, laboratórne analýzy a dodávky materiálov pre priemysel naprieč celou Európou. Za firmou stoja roky skúseností a norma ISO 9001:2015.',
    'Ich pôvodný web však pôsobil ako web menšej a menej dôveryhodnej firmy, než akou DUOPET v skutočnosti je. Prišli za nami s jasným zadaním: web, ktorý získava zákazky, a interné nástroje, ktoré zrýchlia každodennú prevádzku.',
  ],
  problemsHeading: 'Web, ktorý [[nepracoval.]]',
  problems: [
    {
      num: '01',
      title: 'Web nezodpovedal veľkosti firmy',
      body: 'Prezentácia pôsobila ako malá dielňa, nie ako zavedený európsky dodávateľ. Seriózni zákazníci odchádzali ku konkurencii ešte pred prvým kontaktom.',
      impact: 'Stratená dôvera',
    },
    {
      num: '02',
      title: 'Žiadny stabilný prísun dopytov',
      body: 'Web nebol stavaný na konverziu ani na vyhľadávače. Potenciálni klienti firmu online jednoducho nenašli a dopyty neprichádzali.',
      impact: 'Málo zákaziek',
    },
    {
      num: '03',
      title: 'Manuálne a zdĺhavé procesy',
      body: 'Interná agenda bežala roztrieštene a mimo systému. Tím strácal čas opakujúcimi sa úkonmi, ktoré sa dali dávno zautomatizovať.',
      impact: 'Pomalá prevádzka',
    },
  ],
  goalStatement: 'Web, ktorý [[získava zákazky]], a systém, ktorý[[ šetrí čas.]]',
  goalSub:
    'Dve veci naraz: dôveryhodná prezentácia navonok a efektívne nástroje vo vnútri firmy. Nielen pekný web, ale skutočný nástroj na rast.',
  approachHeading: 'Dizajn aj vývoj\n[[pod jednou strechou.]]',
  steps: [
    {
      label: 'Stratégia',
      body: 'Začali sme analýzou. Kto sú zákazníci spoločnosti DUOPET, čo hľadajú a prečo si vyberú práve ju. Web sme postavili okolo reálnych zákaziek, nie okolo dojmu.',
    },
    {
      label: 'Web a dizajn',
      body: 'Čistý, sebavedomý web, ktorý na prvý pohľad ukáže rozsah a spoľahlivosť firmy. Prehľadné služby, jasná cesta k dopytu a rýchle načítanie.',
    },
    {
      label: 'Dashboard',
      body: 'Administračný dashboard na mieru, ktorý zjednotil celú internú agendu do jedného prehľadného prostredia. Koniec roztrieštených tabuliek.',
    },
    {
      label: 'AI aplikácie',
      body: 'Nadstavbové AI aplikácie, ktoré automatizujú opakujúce sa úkony a zrýchľujú každodenné procesy tímu. Menej manuálnej práce, viac času na zákazky.',
    },
  ],
  delivered: [
    'Firemný web',
    'UI/UX Design',
    'Dashboard na mieru',
    'AI webové aplikácie',
    'SEO',
    'Priebežná optimalizácia',
  ],
  resultsHeading: 'Čísla, [[ktoré hovoria.]]',
  heroResult: {
    value: '2×',
    label: 'vyššia organická návštevnosť už do troch mesiacov od spustenia',
  },
  results: [
    { value: 'AI', label: 'aplikácie, ktoré zrýchlili interné procesy' },
    { value: 'EU', label: 'dôveryhodná prezentácia pre celú Európu' },
    { value: '1', label: 'zjednotené prostredie pre celú internú prevádzku' },
  ],
  testimonial: {
    quote:
      '„Profesionálny prístup, rýchle spustenie a hlavne web, ktorý skutočne prináša nových klientov. Organická návštevnosť sa do 3 mesiacov zdvojnásobila. Oceňujem, že neskončili spustením, ale priebežne optimalizujú.“',
    name: 'Radek Bareš',
    role: 'Majiteľ firmy, DUOPET',
  },
}

/* ── page metadata per case study ──────────────────────────── */

export const CASE_METADATA_SK: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  'reality-expo': {
    title: 'Reality EXPO: Prípadová štúdia',
    description:
      'Branding, web a digitálna kampaň pre realitné podujatie Reality Expo v Bratislave. Reality Expo × nosleephouse™.',
    ogTitle: 'Reality EXPO: Prípadová štúdia | nosleephouse™',
    ogDescription:
      'Branding, web a digitálna kampaň, ktoré rozbehli celý veľtrh. Prečítajte si, ako sme to urobili.',
  },
  aparsia: {
    title: 'Aparsia: Prípadová štúdia',
    description:
      'Viacjazyčný web, admin portál a CRM pre sprostredkovateľa investícií do bulharských nehnuteľností. Aparsia × nosleephouse™.',
    ogTitle: 'Aparsia: Prípadová štúdia | nosleephouse™',
    ogDescription: 'Web, admin portál a CRM postavené na mieru. Prečítajte si, ako sme to urobili.',
  },
  duopet: {
    title: 'DUOPET: Prípadová štúdia',
    description:
      'Web, administračný dashboard a AI aplikácie pre európskeho spracovateľa plastov. DUOPET × nosleephouse™.',
    ogTitle: 'DUOPET: Prípadová štúdia | nosleephouse™',
    ogDescription:
      'Web, ktorý získava zákazky, a interné nástroje, ktoré šetria čas. Prečítajte si, ako sme to urobili.',
  },
  'jun-matcha': {
    title: 'JUN Matcha: Prípadová štúdia',
    description:
      'Kompletná vizuálna identita pre specialty matcha bar v centre Prahy, od loga cez obaly až po Instagram. JUN × nosleephouse™.',
    ogTitle: 'JUN Matcha: Prípadová štúdia | nosleephouse™',
    ogDescription:
      'Silná značka postavená od nuly. Prečítajte si, ako vznikla vizuálna identita JUN.',
  },
}
