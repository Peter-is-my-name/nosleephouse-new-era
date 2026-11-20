import type { WebCopy } from './types'

/** /reklama (web in 7 days), Czech reference copy. */
export const webCs: WebCopy = {
  meta: {
    title: 'Získejte nárůst poptávek díky modernímu webu za 7 dní',
    description:
      'Moderní web, který přivádí zákazníky, od návrhu po spuštění za 7 dní. Rezervujte si nezávaznou konzultaci zdarma. Odpovíme do 24 hodin.',
  },
  header: { badge: 'Návrh webu zdarma', cta: 'Chci více poptávek' },
  hero: {
    ratingOn: 'Hodnocení na',
    ratingAria: 'Hodnocení 5 z 5',
    title:
      'Získejte nárůst poptávek s moderním webem již [[za 7 dní]] díky našemu efektivnímu procesu od návrhu po spuštění.',
    sub: 'Bez komplikací a zbytečných starostí.',
    cta: 'Chci více poptávek',
    imgAlt: 'Tým nosleephouse na veletrhu',
    badges: ['**150+** realizovaných projektů od roku 2019', '**8** seniorních odborníků v týmu'],
  },
  why: {
    eyebrow: '8 seniorních odborníků v týmu',
    heading: 'Proč spolupracovat [[s námi?]]',
    items: [
      'Na moderních nástrojích a s vlastními procesy pro vás postavíme funkční web podle vašich požadavků, který vám ušetří čas i peníze.',
      'Pomohli jsme vytvořit web a kampaně pro Reality Expo, které nám už dva roky důvěřuje. Díky našim výstupům získalo přes 30 vystavovatelů a tisíce registrací.',
      'Sledujeme trendy, testujeme nová technologická a marketingová řešení a proměňujeme je ve výsledky, které vám přivedou zákazníky.',
      'Budujeme dlouhodobá partnerství a provázíme vás i po spuštění webu. Od optimalizace až po reklamní kampaně a další rozvoj projektu.',
    ],
  },
  form: {
    badge: 'Volná místa tento měsíc',
    heading: 'Začněte získávat [[více poptávek]]',
    sub: 'Vyplňte formulář a ozveme se vám do 24 hodin. Konzultace je zdarma a nezávazná.',
    submit: 'Chci více poptávek',
    questions: [
      {
        label: 'Jaký typ webu potřebujete? *',
        emailLabel: 'Typ webu',
        options: [
          'Prezentační web',
          'Komplexnější vícestránkový web',
          'Firemní web',
          'Reklamní web (jednostránkový web)',
          'E-shop',
          'Už webovou stránku mám, ale potřebuji ji zlepšit.',
          'Chci s vámi probrat něco jiného.',
        ],
        error: 'Vyberte typ webu.',
      },
      {
        label: 'S jakým rozpočtem počítáte? *',
        emailLabel: 'Rozpočet',
        options: [
          'Mám k dispozici více než 50 000 Kč a chci investovat do komplexního dokončení a spuštění webu.',
          'Mám bokem alespoň 30 000 Kč a chci je investovat do nového webu.',
          'Mám bokem jen 15 000 Kč a potřebuji z toho něco vykouzlit.',
          'Bohužel si teď nemohu dovolit investovat další peníze do dokončení a spuštění webu.',
        ],
        error: 'Vyberte rozpočet.',
      },
    ],
  },
  results: {
    heading: 'Bohaté [[zkušenosti.]]',
    trust: 'Důvěřují nám 2+ roky',
    title: 'Reality EXPO',
    text: 'Web a kampaně, kterým firma důvěřuje přes 2 roky. Přes 30 vystavovatelů, tisíce registrací. Kompletní řešení od prvního návrhu po běžící reklamní kampaně.',
    imgAlt: 'Reality EXPO, veletrh plný návštěvníků',
    stats: [
      { value: '3+', label: 'roky spolupráce' },
      { value: '30+', label: 'vystavovatelů' },
      { value: '4200+', label: 'registrací' },
    ],
    logosLabel: 'Firmy, které nám důvěřují',
  },
  faq: {
    lead: 'Nenašli jste odpověď? Napište nám, odpovíme do 24 hodin.',
    items: [
      {
        q: 'Kolik to stojí?',
        a: 'Každý projekt je jiný. Po úvodní konzultaci vám připravíme konkrétní cenovou nabídku. Uvádíme cenu předem: žádné skryté poplatky, žádná nepříjemná překvapení.',
      },
      {
        q: 'Jak dlouho to trvá?',
        a: 'Standardní weby a landing pages spouštíme do 7 pracovních dnů od schválení podkladů a designu. Větší projekty (e-shopy, komplexní aplikace) trvají úměrně déle. Harmonogram vždy upřesníme předem.',
      },
      {
        q: 'Už web mám. Můžete jen marketing?',
        a: 'Rozhodně. Můžeme spravovat vaše Meta a Google reklamy, optimalizovat konverze nebo dělat SEO i na existujícím webu. Často ale zjistíme, že stránky potřebují drobné úpravy pro lepší výsledky. Tyto návrhy s vámi vždy konzultujeme.',
      },
      {
        q: 'Musím se zavázat na dlouho?',
        a: 'Ne. Konzultace je zdarma a nezávazná. Projekty řešíme na jednorázové bázi nebo formou měsíčního retaineru podle vašich potřeb. Spolupráci můžete kdykoli ukončit, kontrolu máte plně ve svých rukou.',
      },
      {
        q: 'Děláte i reklamu po spuštění webu?',
        a: 'Ano, to je naše specializace. Navrhujeme kreativy, spravujeme kampaně na Meta (Facebook a Instagram) a Google a optimalizujeme rozpočty. Postupně jsme přešli na měsíční spolupráci s klienty, protože efektivně řešíme i jejich reklamy a bannery.',
      },
    ],
  },
  final: {
    offer: 'Rezervujte si [[schůzku zdarma]]',
    sub: 'Klikněte na tlačítko a objednejte se na nezávaznou konzultaci.',
    cta: 'Chci více poptávek',
  },
}
