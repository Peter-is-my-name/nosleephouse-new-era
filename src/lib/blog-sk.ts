/**
 * Slovak blog posts. Each post shares its `id` with the Czech and English
 * versions in ./blog.ts, which pairs the translations for hreflang and the
 * language switcher. Prices are converted from Kč to € for the Slovak market.
 */

import type { BlogPost } from './blog'

const AUTHOR = 'Lukáš Čičvák'
const AUTHOR_ROLE_SK = 'Zakladateľ & obchodník'
const AUTHOR_2 = 'Vratko Varga'
const AUTHOR_2_ROLE_SK = 'Zakladateľ & dizajnér'

export const POSTS_SK: BlogPost[] = [
  {
    id: 'reality-expo-2025',
    slug: 'reality-expo-2025-full-servis-marketing',
    title: 'Ako vyzerá skutočný full servis: Reality EXPO 2025',
    excerpt:
      'S Reality EXPO spolupracujeme už druhý rok. Čo začalo ako grafika, prerástlo do kompletného partnerstva od digitálu až po fyzickú produkciu.',
    seoDescription:
      'Prípadová štúdia Reality EXPO 2025: ako nosleephouse zabezpečilo kompletný servis od PPC kampaní cez web až po motion dizajn na obrazovkách v Bratislave.',
    keywords: [
      'Reality EXPO 2025',
      'full servis marketing',
      'PPC kampane',
      'event marketing',
      'nosleephouse',
      'digitálna agentúra',
      'marketingová agentúra Bratislava',
    ],
    cover: '/assets/reklama/reality-expo-event.webp',
    coverAlt: 'Tím nosleephouse na veľtrhu Reality EXPO 2025 v Bratislave',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_SK,
    date: '2026-07-24',
    dateLabel: '24. júla 2026',
    readingMinutes: 5,
    tags: ['Prípadová štúdia', 'Event marketing'],
    content: [
      {
        type: 'p',
        text: 'S tímom Reality EXPO spolupracujeme už druhý rok. Čo začalo ako spolupráca na grafike, postupne prerástlo do komplexného partnerstva, v ktorom pokrývame prakticky všetko, od digitálu až po fyzickú produkciu na mieste.',
      },
      {
        type: 'p',
        text: 'Reality EXPO je najväčšie realitné podujatie svojho druhu v Bratislave. V ikonickej Starej tržnici sa každoročne stretávajú tisíce ľudí, ktorí riešia bývanie, s poprednými realitnými odborníkmi. Na druhý ročník sme dostali jasné zadanie: postarať sa o celý digitálny aj vizuálny zážitok tak, aby dával zmysel ako jeden celok.',
      },
      { type: 'h2', text: 'Čo sme pre Reality EXPO 2025 zabezpečili' },
      {
        type: 'list',
        items: [
          'PPC kampane v Google Ads aj Meta Ads s presným cielením na návštevníkov.',
          'Priebežný vývoj a optimalizáciu webu počas celej prípravy.',
          'Všetky tlačoviny a grafické výstupy pre podujatie.',
          'Reklamu v magazíne Forbes.',
          'Kampaň s motion dizajnom na obrazovkách po celej Bratislave.',
        ],
      },
      {
        type: 'image',
        src: '/assets/reklama/why-4.jpg',
        alt: 'Vizuálna identita a branding Reality EXPO 2025',
        caption: 'Jednotný vizuálny jazyk od webu cez tlačoviny až po veľkoplošné obrazovky.',
      },
      {
        type: 'p',
        text: 'Presne takýto typ spolupráce máme najradšej. Keď klient zverí celý projekt jednému tímu, môžeme dodať výsledok, ktorý dáva zmysel ako celok, a nie ako kopa nesúvisiacich výstupov od piatich rôznych dodávateľov.',
      },
      {
        type: 'quote',
        text: 'Spolupracujeme už viac ako rok a musím veľmi pochváliť ich prístup aj komunikáciu. Kedykoľvek som napísal, často aj na poslednú chvíľu, dokázali všetko dodať. Odporúčam každému, kto chce zviditeľniť svoj projekt.',
        author: 'Jakub Haidari',
        role: 'Marketing nehnuteľností a organizátor Reality EXPO',
      },
      {
        type: 'p',
        text: 'Chcete aj vy výsledky, a nie iba sľuby? Napíšte nám a urobíme z vášho projektu niečo, o čom sa bude hovoriť.',
      },
    ],
  },

  {
    id: 'website-cost-2026',
    slug: 'kolko-stoji-web-na-mieru-2026',
    title: 'Koľko stojí web na mieru v roku 2026? Kompletný prehľad',
    excerpt:
      'Cena webu sa pohybuje od stoviek po tisíce eur a rozdiely sú obrovské. Vysvetlíme, čo cenu určuje, koľko reálne zaplatíte a ako spoznáte, že sa investícia vráti.',
    seoDescription:
      'Koľko stojí web na mieru v roku 2026? Prehľad cien podľa typu webu v eurách, čo ovplyvňuje cenu a ako spoznáte, že sa vám investícia do webu naozaj oplatí.',
    keywords: [
      'koľko stojí web',
      'koľko stojí webstránka',
      'cena webu',
      'web na mieru cena',
      'tvorba webstránok cena',
      'web pre firmu',
    ],
    cover: '/assets/reklama/aparsia.png',
    coverAlt: 'Moderný firemný web na notebooku',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_SK,
    date: '2026-07-28',
    dateLabel: '28. júla 2026',
    readingMinutes: 6,
    tags: ['Web', 'Sprievodca'],
    content: [
      {
        type: 'p',
        text: 'Koľko stojí web? Najčastejšia otázka, ktorú dostávame. A zároveň najzákernejšia, pretože úprimná odpoveď znie: záleží. Rozdiel medzi šablónou za pár stoviek eur a webom na mieru, ktorý firme reálne zarába, je priepastný. Poďme si to rozobrať na rovinu.',
      },
      { type: 'h2', text: 'Čo určuje cenu webu' },
      {
        type: 'list',
        items: [
          'Rozsah: koľko podstránok a sekcií web má.',
          'Na mieru, alebo šablóna: originálny dizajn a vlastný kód oproti hotovej šablóne.',
          'Funkcie: e-shop, rezervačný systém, prepojenie s CRM alebo AI nástrojmi.',
          'Obsah: copywriting, fotografie a grafické podklady.',
          'SEO a rýchlosť: príprava webu tak, aby ho našli ľudia aj vyhľadávače.',
          'Následná starostlivosť: úpravy, aktualizácie a priebežná optimalizácia.',
        ],
      },
      { type: 'h2', text: 'Orientačné ceny podľa typu webu' },
      {
        type: 'p',
        text: 'Nasledujúce čísla berte ako orientačné, nie ako pevný cenník. Každý projekt je iný, no zhruba takto vyzerá cenové rozpätie na slovenskom trhu.',
      },
      {
        type: 'list',
        items: [
          'Prezentačný jednostránkový web: približne od 620 €.',
          'Firemný viacstránkový web na mieru: zhruba 1 250 až 3 300 €.',
          'E-shop alebo web s pokročilými funkciami: od 3 300 € vyššie.',
        ],
      },
      { type: 'h2', text: 'Prečo je najlacnejšia možnosť často najdrahšia' },
      {
        type: 'p',
        text: 'Lacný web zo šablóny vás na prvý pohľad poteší cenou. Problém príde neskôr: pomalé načítavanie, mizerná pozícia vo vyhľadávačoch a dizajn, ktorý nikoho nepresvedčí. Web, ktorý neprivádza zákazníkov, nie je úspora. Je to náklad, ktorý sa nikdy nevráti.',
      },
      {
        type: 'p',
        text: 'Dobre postavený web sa naopak správa ako investícia. Pracuje pre vás nonstop, buduje dôveru a mení návštevníkov na dopyty. Otázka teda neznie, koľko web stojí, ale koľko vám zarobí.',
      },
      {
        type: 'quote',
        text: 'Profesionálny prístup, rýchle spustenie a hlavne web, ktorý skutočne privádza nových klientov. Organická návštevnosť sa do 3 mesiacov zdvojnásobila.',
        author: 'Radek Bareš',
        role: 'Majiteľ recyklačnej firmy, DUOPET',
      },
      {
        type: 'p',
        text: 'Chcete vedieť, koľko by stál web presne pre vás? Ozvite sa a pripravíme vám nezáväznú cenovú ponuku na mieru.',
      },
    ],
  },

  {
    id: 'losing-customers',
    slug: '7-znakov-ze-vas-web-straca-zakaznikov',
    title: '7 znakov, že váš web stráca zákazníkov (a ako to napraviť)',
    excerpt:
      'Web môže vyzerať pekne, a napriek tomu potichu odháňať zákazníkov. Tu je 7 varovných signálov, na ktoré si treba dať pozor, a ako každý z nich napraviť.',
    seoDescription:
      '7 znakov, že váš web stráca zákazníkov: pomalé načítanie, nejasná výzva na akciu, zlá mobilná verzia a ďalšie. Zistite, ako ich rýchlo a efektívne opraviť.',
    keywords: [
      'web stráca zákazníkov',
      'konverzie webu',
      'prečo web nefunguje',
      'optimalizácia webu',
      'výzva na akciu',
      'konverzný pomer webu',
    ],
    cover: '/assets/reklama/junmatcha.png',
    coverAlt: 'Zákazník si prezerá web na mobile',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_SK,
    date: '2026-07-21',
    dateLabel: '21. júla 2026',
    readingMinutes: 5,
    tags: ['Web', 'Konverzie'],
    content: [
      {
        type: 'p',
        text: 'Web môže na prvý pohľad vyzerať skvele, a napriek tomu deň čo deň potichu odháňať zákazníkov. Väčšina majiteľov firiem o tom ani nevie. Tu je sedem signálov, ktoré to prezradia.',
      },
      { type: 'h2', text: '1. Web sa načítava pomaly' },
      {
        type: 'p',
        text: 'Každá sekunda navyše stojí konverzie. Ak sa web načítava dlhšie ako tri sekundy, veľká časť ľudí odíde skôr, než vôbec niečo uvidí.',
      },
      { type: 'h2', text: '2. Nie je jasné, čo má návštevník urobiť' },
      {
        type: 'p',
        text: 'Dobrý web vedie k jednej akcii: poslať dopyt, kúpiť, zavolať. Keď je výziev päť alebo žiadna, návštevník sa stratí a odíde.',
      },
      { type: 'h2', text: '3. Na mobile sa nedá používať' },
      {
        type: 'p',
        text: 'Väčšina ľudí príde z telefónu. Ak sa na mobile rozpadáva text a tlačidlá sa zle stláčajú, prichádzate o väčšinu zákazníkov.',
      },
      { type: 'h2', text: '4. Web nebudí dôveru' },
      {
        type: 'p',
        text: 'Chýbajú referencie, čísla, reálne fotky alebo kontakt. Bez dôvery si u vás nikto nič neobjedná, nech je ponuka akokoľvek dobrá.',
      },
      { type: 'h2', text: '5. Texty hovoria o vás, nie o zákazníkovi' },
      {
        type: 'p',
        text: 'Návštevníka nezaujíma, akí ste skvelí. Zaujíma ho, čo z toho bude mať on. Otočte uhol pohľadu a konverzie porastú.',
      },
      { type: 'h2', text: '6. Web nikto nenájde' },
      {
        type: 'p',
        text: 'Krásny web bez SEO je bilbord v lese. Ak vás nepozná Google ani AI vyhľadávače, návštevnosť nepríde sama.',
      },
      { type: 'h2', text: '7. Roky sa s ním nič nerobilo' },
      {
        type: 'p',
        text: 'Web nie je socha. Trh sa mení, technológie sa menia a web, ktorý sa roky neupravoval, dnes skôr brzdí, než pomáha.',
      },
      {
        type: 'p',
        text: 'Spoznávate svoj web v dvoch alebo viacerých bodoch? Väčšina z nich sa dá opraviť rýchlejšie, než čakáte. Ozvite sa a prejdeme to spolu.',
      },
    ],
  },

  {
    id: 'website-in-7-days',
    slug: 'tvorba-webu-za-7-dni-nas-proces',
    title: 'Web za 7 dní: ako funguje náš proces od návrhu po spustenie',
    excerpt:
      'Spustiť web za sedem dní nie je kúzlo, ale disciplína. Ukazujeme náš proces krok za krokom, od prvého hovoru až po ostrý web, ktorý privádza dopyty.',
    seoDescription:
      'Ako spustíme web na mieru za 7 dní: náš proces krok za krokom od úvodnej konzultácie cez návrh a vývoj až po spustenie a priebežnú optimalizáciu webu.',
    keywords: [
      'web za 7 dní',
      'tvorba webu postup',
      'rýchla tvorba webu',
      'ako vzniká web',
      'spustenie webu',
      'tvorba webstránok',
    ],
    cover: '/assets/blog/web-proces.jpg',
    coverAlt: 'Pracovný stôl s notebookom počas tvorby webu',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_SK,
    date: '2026-07-14',
    dateLabel: '14. júla 2026',
    readingMinutes: 5,
    tags: ['Web', 'Proces'],
    content: [
      {
        type: 'p',
        text: 'Sedem dní od zadania po ostrý web znie ako marketingový sľub. U nás je to reálny proces, ktorý stojí na jasných krokoch, bez zbytočného čakania. Takto to prebieha.',
      },
      { type: 'h2', text: 'Deň 1: Konzultácia a cieľ' },
      {
        type: 'p',
        text: 'Začíname rozhovorom, nie dotazníkom. Potrebujeme pochopiť váš biznis, zákazníkov a jediný cieľ, ktorý má web splniť. Bez toho je aj krásny web na nič.',
      },
      { type: 'h2', text: 'Dni 2 až 3: Návrh a štruktúra' },
      {
        type: 'p',
        text: 'Pripravíme štruktúru a vizuálny návrh na mieru. Žiadna šablóna, žiadne kompromisy. Každá sekcia má svoju úlohu a vedie návštevníka k akcii.',
      },
      { type: 'h2', text: 'Dni 4 až 5: Vývoj' },
      {
        type: 'p',
        text: 'Z návrhu urobíme rýchly, čisto nakódovaný web. Kód píšeme sami, takže máme plnú kontrolu nad rýchlosťou aj výsledkom.',
      },
      { type: 'h2', text: 'Deň 6: Obsah a SEO' },
      {
        type: 'p',
        text: 'Doplníme texty, ktoré predávajú, a web pripravíme pre vyhľadávače. Rýchlosť, popisy, štruktúra. Aby vás našli ľudia aj AI.',
      },
      { type: 'h2', text: 'Deň 7: Spustenie' },
      {
        type: 'p',
        text: 'Web ide naostro. A tým to nekončí. Sledujeme čísla a web ďalej ladíme, pretože spustenie je začiatok, nie cieľ.',
      },
      {
        type: 'stats',
        items: [
          { value: '7', label: 'dní od zadania po spustenie' },
          { value: '0', label: 'šablón, všetko na mieru' },
          { value: '1', label: 'jasný cieľ každého webu' },
        ],
      },
      {
        type: 'p',
        text: 'Chcete web, ktorý nebude pol roka vo vývoji? Dohodnite si nezáväznú konzultáciu.',
      },
    ],
  },

  {
    id: 'seo-basics',
    slug: 'zaklady-seo-pre-majitelov-firiem',
    title: 'Základy SEO pre majiteľov firiem: ako vás nájdu na Google aj v AI',
    excerpt:
      'SEO nemusí byť veda. Základy vysvetlíme zrozumiteľne: čo rozhoduje o tom, či vás ľudia nájdu na Google a po novom aj v AI vyhľadávačoch.',
    seoDescription:
      'Základy SEO pre majiteľov firiem: ako funguje vyhľadávanie na Google aj v AI, čo ovplyvňuje pozície a ako začať, aby vás zákazníci na internete ľahko našli.',
    keywords: [
      'SEO pre firmy',
      'základy SEO',
      'optimalizácia pre vyhľadávače',
      'SEO optimalizácia webu',
      'AI vyhľadávanie',
      'ako byť prvý na Google',
    ],
    cover: '/assets/reklama/why-4.jpg',
    coverAlt: 'Vyhľadávanie a SEO pre firmy',
    author: AUTHOR,
    authorRole: AUTHOR_ROLE_SK,
    date: '2026-07-06',
    dateLabel: '6. júla 2026',
    readingMinutes: 6,
    tags: ['SEO', 'Sprievodca'],
    content: [
      {
        type: 'p',
        text: 'SEO znie ako odbor pre zasvätených. V skutočnosti ide o jednoduchú vec: pomôcť vyhľadávačom pochopiť, čomu sa venujete, a presvedčiť ich, že ste dôveryhodní. Tu sú základy bez balastu.',
      },
      { type: 'h2', text: 'Ako vyhľadávače rozmýšľajú' },
      {
        type: 'p',
        text: 'Google aj novšie AI vyhľadávače hľadajú najlepšiu odpoveď na otázku používateľa. Odmeňujú weby, ktoré sú rýchle, zrozumiteľné, dobre štruktúrované a majú obsah, ktorému sa dá veriť.',
      },
      { type: 'h2', text: 'Tri piliere, na ktorých to celé stojí' },
      {
        type: 'list',
        items: [
          'Technika: rýchlosť, mobilná verzia, čistý kód a správna štruktúra stránok.',
          'Obsah: texty, ktoré odpovedajú na to, čo ľudia reálne hľadajú.',
          'Autorita: odkazy, referencie a signály, že ste vo svojom odbore dôveryhodní.',
        ],
      },
      { type: 'h2', text: 'Nový hráč: AI vyhľadávanie' },
      {
        type: 'p',
        text: 'Zákazníci sa čoraz častejšie pýtajú priamo ChatGPT alebo Perplexity. Tie citujú weby, ktoré sú jasne napísané a majú štruktúrované dáta. Kto na to myslí už dnes, získava náskok.',
      },
      { type: 'h2', text: 'Čím začať' },
      {
        type: 'p',
        text: 'Nemusíte hneď riešiť všetko. Začnite rýchlosťou webu, jasnými popismi stránok a jedným kvalitným článkom na tému, ktorú vaši zákazníci hľadajú. Zvyšok sa dá budovať postupne.',
      },
      {
        type: 'p',
        text: 'Chcete web, ktorý vás vo vyhľadávaní posunie vyššie? Postavíme ho tak od základov. Ozvite sa.',
      },
    ],
  },

  {
    id: 'investment-not-cost',
    slug: 'web-nie-je-naklad-ale-investicia',
    title: 'Web nie je náklad, ale investícia. Prečo to zmení vaše rozhodovanie',
    excerpt:
      'Kým budete web brať ako nutný výdavok, budete šetriť na nesprávnom mieste. Ukazujeme, prečo sa oplatí zmeniť uhol pohľadu a čo to urobí s vaším biznisom.',
    seoDescription:
      'Prečo brať web ako investíciu, a nie ako náklad. Ako správne rozhodnutia o webe ovplyvnia rast vašej firmy, počet dopytov a návratnosť celej investície.',
    keywords: [
      'web ako investícia',
      'návratnosť webu',
      'hodnota webu',
      'web pre biznis',
      'investícia do webu',
      'oplatí sa nový web',
    ],
    cover: '/assets/reklama/duopetcz.jpeg',
    coverAlt: 'Web ako investícia do rastu firmy',
    author: AUTHOR_2,
    authorRole: AUTHOR_2_ROLE_SK,
    date: '2026-06-30',
    dateLabel: '30. júna 2026',
    readingMinutes: 4,
    tags: ['Biznis', 'Stratégia'],
    content: [
      {
        type: 'p',
        text: 'Opýtajte sa dvoch majiteľov firiem na web a dostanete dve odpovede. Jeden rieši, ako ho urobiť čo najlacnejšie. Druhý rieši, koľko mu web prinesie. Ten druhý takmer vždy vyhrá. Tu je dôvod.',
      },
      { type: 'h2', text: 'Náklad sa škrtá, investícia sa rozvíja' },
      {
        type: 'p',
        text: 'Keď web beriete ako náklad, hľadáte, kde ušetriť. Lacnejšia šablóna, žiadne SEO, žiadna starostlivosť. Výsledkom je web, ktorý nič nerobí. Keď ho beriete ako investíciu, pýtate sa, čo vám vráti, a rozhodujete sa úplne inak.',
      },
      { type: 'h2', text: 'Web pracuje, aj keď vy spíte' },
      {
        type: 'p',
        text: 'Dobrý web je najlepší obchodník vo firme. Nespí, nechodí na dovolenku a osloví človeka presne vo chvíli, keď vašu službu hľadá. Bežný náklad nič také nedokáže.',
      },
      {
        type: 'quote',
        text: 'Páčilo sa mi, že nevytvárali iba pekný web. Rozmýšľali o tom, čo nám prinesie klientov. Výsledky to potvrdili.',
        author: 'Dominika Donovalová',
        role: 'Majiteľka realitnej kancelárie, aparsia.cz',
      },
      { type: 'h2', text: 'Ako spoznať investíciu, ktorá dáva zmysel' },
      {
        type: 'p',
        text: 'Nejde o to minúť čo najviac. Ide o to investovať do vecí, ktoré privádzajú zákazníkov: rýchlosť, jasná cesta k dopytu, dôveryhodnosť a viditeľnosť vo vyhľadávaní. Zvyšok je pekný, ale druhoradý.',
      },
      {
        type: 'p',
        text: 'Chcete web, ktorý sa správa ako investícia, a nie ako položka v účtovníctve? Poďme sa o tom porozprávať.',
      },
    ],
  },
]
