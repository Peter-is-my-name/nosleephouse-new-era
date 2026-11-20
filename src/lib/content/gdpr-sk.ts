/**
 * Privacy policy, Slovak (the authoritative version: nosleephouse s.r.o. is a
 * Slovak company, so Slovak law applies: GDPR + zákon č. 18/2018 Z. z. +
 * § 109 ods. 8 zákona č. 452/2021 Z. z. for cookies).
 *
 * Describes what the site really does. When the site changes (a new tool,
 * cookie, form field or processor), update this text and its cs/en versions
 * in ./gdpr.ts, and bump `effectiveDate`.
 */

import type { GdprContentData } from './gdpr'

export const GDPR_SK: GdprContentData = {
  eyebrow: 'Právne informácie',
  title: 'Zásady ochrany [[osobných údajov]]',
  effectiveDate: 'Platné a účinné od 12. 11. 2026',
  back: '← Späť na hlavnú stránku',
  sections: [
    {
      heading: '1. Čoho sa tieto zásady týkajú',
      body: 'Tieto zásady vysvetľujú, ako spoločnosť nosleephouse s.r.o. spracúva osobné údaje návštevníkov webov nosleephouse.sk, nosleephouse.cz a nosleephouse.com (vrátane reklamných podstránok), záujemcov o naše služby a klientov.\nPostupujeme podľa nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov (ďalej „GDPR“), zákona č. 18/2018 Z. z. o ochrane osobných údajov a pri cookies podľa § 109 ods. 8 zákona č. 452/2021 Z. z. o elektronických komunikáciách.',
    },
    {
      heading: '2. Prevádzkovateľ',
      body: 'Prevádzkovateľom vašich osobných údajov je:\nnosleephouse s.r.o.\nSokolovská 178/10, 040 11 Košice-Západ, Slovenská republika\nIČO: 57 202 443\nE-mail: info@nosleephouse.com',
      outro: 'Zodpovednú osobu (DPO) sme nevymenovali, pretože nám to GDPR neukladá (čl. 37 GDPR). So všetkými otázkami o osobných údajoch sa obráťte na e-mail uvedený vyššie.',
    },
    {
      heading: '3. Aké údaje spracúvame',
      body: 'Údaje získavame priamo od vás, keď vyplníte formulár, rezervujete si stretnutie alebo nás kontaktujete:',
      list: [
        'Kontaktné údaje z formulárov: meno, priezvisko, e-mail, telefónne číslo s predvoľbou, text správy a odpovede na doplňujúce otázky vo formulári (napríklad o akú službu máte záujem a orientačný rozpočet).',
        'E-mail z nedokončeného formulára: ak do formulára napíšete e-mailovú adresu, uložíme si ju hneď po vyplnení, aj keď formulár neodošlete (podrobnosti v bode 4).',
        'Údaje o rezervácii stretnutia: zvolený termín, meno, e-mail a poznámky, ktoré zadáte v rezervačnom kalendári Calendly.',
        'Údaje z komunikácie: obsah e-mailov, správ, hovorov a stretnutí s nami.',
        'Zmluvné a fakturačné údaje klientov: obchodné meno, sídlo, IČO, DIČ, IČ DPH, kontaktná osoba, údaje o objednávke a platbách.',
        'Technické údaje: IP adresa, typ prehliadača a zariadenia, čas prístupu a navštívená stránka (serverové záznamy) a údaje uložené vo vašom prehliadači (cookies a podobné technológie, pozri bod 8).',
        'Identifikátor kliknutia na reklamu (fbclid): ak prídete z našej reklamy na Facebooku alebo Instagrame, adresa stránky ho obsahuje a pomáha nám zistiť, ktorá reklama vás priviedla.',
      ],
      outro: 'Osobitné kategórie údajov (napríklad o zdraví) nepotrebujeme, preto ich do formulárov prosím neuvádzajte.',
    },
    {
      heading: '4. Účely a právne základy spracúvania',
      list: [
        'Vybavenie dopytu a príprava ponuky (odpoveď na formulár, e-mail alebo telefonát, potvrdzovací e-mail, úvodná konzultácia): opatrenia pred uzavretím zmluvy na vašu žiadosť, čl. 6 ods. 1 písm. b) GDPR. Ak nás kontaktujete v mene firmy, spracúvame údaje jej zástupcu na základe oprávneného záujmu komunikovať s ňou, čl. 6 ods. 1 písm. f) GDPR.',
        'Kontaktovanie pri nedokončenom formulári: oprávnený záujem, čl. 6 ods. 1 písm. f) GDPR. Naším záujmom je ozvať sa človeku, ktorý o službu prejavil záujem a sám nám napísal svoj e-mail. Pošleme vám najviac jednu správu a ak nereagujete, e-mail vymažeme. Proti tomu môžete kedykoľvek namietať (bod 11).',
        'Rezervácia stretnutia cez Calendly: opatrenia pred uzavretím zmluvy, čl. 6 ods. 1 písm. b) GDPR.',
        'Uzavretie a plnenie zmluvy s klientom: plnenie zmluvy, čl. 6 ods. 1 písm. b) GDPR.',
        'Účtovníctvo a dane: splnenie zákonnej povinnosti, čl. 6 ods. 1 písm. c) GDPR v spojení so zákonom č. 431/2002 Z. z. o účtovníctve a zákonom č. 222/2004 Z. z. o dani z pridanej hodnoty.',
        'Bezpečnosť a prevádzka webu (serverové záznamy, ochrana pred zneužitím formulárov): oprávnený záujem, čl. 6 ods. 1 písm. f) GDPR.',
        'Meranie a cielenie reklamy cez Meta Pixel na reklamných podstránkach: váš súhlas s marketingovými cookies, čl. 6 ods. 1 písm. a) GDPR a § 109 ods. 8 zákona č. 452/2021 Z. z.',
        'Oznámenie konverzie Mete zo servera (Conversions API) po odoslaní formulára na reklamnej podstránke: oprávnený záujem, čl. 6 ods. 1 písm. f) GDPR. Naším záujmom je vedieť, ktorá reklama priniesla dopyt, a investovať len do reklamy, ktorá funguje (podrobnosti v bode 7).',
        'Uplatňovanie a obhajoba právnych nárokov: oprávnený záujem, čl. 6 ods. 1 písm. f) GDPR.',
      ],
      outro: 'Newsletter ani iné obchodné oznámenia vám bez vášho súhlasu neposielame.',
    },
    {
      heading: '5. Je poskytnutie údajov povinné?',
      body: 'Poskytnutie údajov je dobrovoľné. Bez mena, e-mailu a telefónu však nevieme vybaviť váš dopyt a bez zmluvných a fakturačných údajov nemôžeme uzavrieť zmluvu ani vystaviť faktúru. Súhlas s cookies dať nemusíte, web vám bude fungovať aj bez neho.',
    },
    {
      heading: '6. Komu údaje odovzdávame',
      body: 'Vaše údaje nepredávame. Odovzdávame ich len v nevyhnutnom rozsahu dodávateľom, ktorí pre nás zabezpečujú prevádzku webu a komunikáciu (sprostredkovatelia podľa čl. 28 GDPR), a ďalším príjemcom:',
      list: [
        'Vercel Inc. (USA): hosting webu a serverové záznamy.',
        'Resend (USA): odosielanie e-mailov z formulárov.',
        'Google (Google Ireland Limited, Írsko, a Google LLC, USA): e-mailová schránka, do ktorej nám prichádzajú dopyty.',
        'Calendly LLC (USA): rezervačný kalendár na stránke s poďakovaním.',
        'Meta Platforms Ireland Limited (Írsko): meranie a cielenie reklamy (bod 7).',
        'Účtovná kancelária, advokáti a ďalší poradcovia viazaní mlčanlivosťou a orgány verejnej moci, ak nám to ukladá zákon.',
      ],
      outro: 'Niektorí z týchto príjemcov sídlia v USA alebo tam môžu údaje prenášať. Prenos je chránený rozhodnutím Európskej komisie o primeranosti ochrany pre certifikované spoločnosti (EU-US Data Privacy Framework), prípadne štandardnými zmluvnými doložkami schválenými Európskou komisiou (čl. 45 a 46 GDPR).',
    },
    {
      heading: '7. Meta Pixel a oznamovanie konverzií',
      body: 'Na reklamných podstránkach (napríklad Reklama, AI kreatívy a AI automatizácie) používame nástroj Meta Pixel od spoločnosti Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Írsko. Pixel sa spustí až po tom, ako v cookie lište povolíte marketingové cookies. Meria, či návšteva z reklamy na Facebooku alebo Instagrame viedla k dopytu, a umožňuje zobrazovať reklamu ľuďom, ktorí už náš web navštívili, prípadne ľuďom s podobnými záujmami.\nPri zbere týchto údajov a ich odovzdaní Mete sme s Metou spoločnými prevádzkovateľmi (čl. 26 GDPR). Podľa dodatku Meta pre prevádzkovateľov (Controller Addendum) zodpovedáme za informovanie a získanie súhlasu my, za ďalšie spracúvanie zodpovedá Meta. Svoje práva môžete uplatniť u nás aj priamo u Mety. Viac v zásadách Mety na facebook.com/privacy/policy.\nAk odošlete formulár na reklamnej podstránke, oznámime Mete udalosti „Contact“ a „Lead“ aj priamo z nášho servera (Conversions API), a to aj bez súhlasu s cookies. Odovzdávame len zahašované (nečitateľne zakódované) meno, e-mail a telefón, identifikátor kliknutia na reklamu, IP adresu, typ prehliadača a adresu stránky. Meta ich porovná so svojimi používateľmi a použije na vyhodnotenie a zlepšenie našej reklamy. Ak s tým nesúhlasíte, napíšte nám a ďalšie údaje o vás Mete neodošleme.',
      outro: 'Ide o profilovanie na reklamné účely, ktoré nemá voči vám právne účinky. Automatizované rozhodovanie podľa čl. 22 GDPR nevykonávame.',
    },
    {
      heading: '8. Cookies a podobné technológie',
      body: 'Cookies sú malé súbory, ktoré web ukladá do vášho prehliadača. Nevyhnutné technológie používame bez súhlasu, pretože bez nich web nefunguje. Marketingové cookies ukladáme len vtedy, ak ich povolíte v cookie lište. Svoju voľbu môžete kedykoľvek zmeniť alebo súhlas odvolať cez odkaz „Nastavenia cookies“ v pätičke webu, a to rovnako jednoducho, ako ste ho udelili. Po odvolaní cookies Mety z prehliadača vymažeme.',
      list: [
        'nsh-cookies (úložisko prehliadača, nevyhnutné): pamätá si vašu voľbu v cookie lište spolu s dátumom a verziou súhlasu. Platí do vymazania v prehliadači.',
        'nsh_lead_event (úložisko relácie, nevyhnutné): po odoslaní formulára prenesie údaje na stránku s poďakovaním, aby sa dopyt započítal iba raz. Vymaže sa hneď po načítaní stránky, najneskôr zatvorením okna.',
        '_fbp (Meta, marketingové, len so súhlasom): rozpoznáva prehliadač na meranie a cielenie reklamy. Platnosť 90 dní.',
        '_fbc (Meta, marketingové, len so súhlasom): uchováva identifikátor kliknutia na reklamu. Platnosť 90 dní.',
        'Calendly (tretia strana): rezervačný kalendár na stránke s poďakovaním môže ukladať vlastné cookies potrebné na svoje fungovanie. Viac na calendly.com/privacy.',
      ],
      outro: 'Štatistické ani preferenčné cookies momentálne nepoužívame. Ak ich zavedieme, spustia sa len s vaším súhlasom a doplníme ich do tohto zoznamu.',
    },
    {
      heading: '9. Ako dlho údaje uchovávame',
      list: [
        'Dopyty, ktoré neviedli k spolupráci, a súvisiaca komunikácia: 2 roky od posledného kontaktu.',
        'E-mail z nedokončeného formulára: najviac 6 mesiacov; ak na našu správu nereagujete, vymažeme ho skôr.',
        'Zmluvy a komunikácia s klientmi: počas trvania zmluvy a 4 roky po jej skončení, čo zodpovedá všeobecnej premlčacej dobe v obchodných vzťahoch (§ 397 Obchodného zákonníka).',
        'Účtovné doklady a faktúry: 10 rokov po skončení roka, ktorého sa týkajú (§ 35 zákona č. 431/2002 Z. z. o účtovníctve).',
        'Rezervácie stretnutí v Calendly: najviac 2 roky od stretnutia.',
        'Serverové záznamy: podľa nastavenia poskytovateľa hostingu, najviac 30 dní.',
        'Údaje spracúvané na základe súhlasu: do odvolania súhlasu, cookies najviac počas doby uvedenej v bode 8.',
      ],
      outro: 'Ak prebieha spor alebo kontrola, môžeme údaje potrebné na uplatnenie alebo obhajobu nárokov uchovať až do ich skončenia.',
    },
    {
      heading: '10. Vaše práva',
      body: 'V súvislosti so spracúvaním vašich osobných údajov máte právo:',
      list: [
        'na prístup k údajom a ich kópiu (čl. 15 GDPR),',
        'na opravu nesprávnych alebo doplnenie neúplných údajov (čl. 16 GDPR),',
        'na vymazanie údajov, napríklad ak ich už nepotrebujeme, odvolali ste súhlas alebo ste úspešne namietali (čl. 17 GDPR),',
        'na obmedzenie spracúvania (čl. 18 GDPR),',
        'na prenosnosť údajov, ktoré spracúvame na základe súhlasu alebo zmluvy (čl. 20 GDPR),',
        'kedykoľvek odvolať súhlas, bez vplyvu na zákonnosť spracúvania pred jeho odvolaním (čl. 7 ods. 3 GDPR); súhlas s cookies odvoláte cez „Nastavenia cookies“ v pätičke,',
        'podať sťažnosť dozornému orgánu (čl. 77 GDPR), ktorým je Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava 27, www.dataprotection.gov.sk. Sťažnosť môžete podať aj v členskom štáte, v ktorom máte obvyklý pobyt alebo miesto výkonu práce.',
      ],
    },
    {
      heading: '11. Právo namietať',
      body: 'Ak údaje spracúvame na základe oprávneného záujmu (čl. 6 ods. 1 písm. f) GDPR), máte právo z dôvodov týkajúcich sa vašej konkrétnej situácie kedykoľvek namietať proti ich spracúvaniu (čl. 21 GDPR). Týka sa to najmä kontaktovania pri nedokončenom formulári a oznamovania konverzií Mete. Po námietke údaje ďalej nespracúvame, pokiaľ nepreukážeme nevyhnutné oprávnené dôvody, ktoré prevažujú nad vašimi záujmami, právami a slobodami, alebo dôvody na uplatnenie či obhajobu právnych nárokov.\nProti spracúvaniu na účely priameho marketingu môžete namietať kedykoľvek a bez udania dôvodu. Údaje potom na tento účel už nepoužijeme.',
    },
    {
      heading: '12. Ako uplatniť svoje práva',
      body: 'Napíšte nám na info@nosleephouse.com alebo poštou na adresu sídla. Odpovieme bez zbytočného odkladu, najneskôr do jedného mesiaca. Pri zložitých alebo početných žiadostiach môžeme lehotu predĺžiť o ďalšie dva mesiace, o čom vás vopred informujeme (čl. 12 ods. 3 GDPR). Vybavenie žiadosti je bezplatné. Ak budeme mať pochybnosti o vašej totožnosti, môžeme vás požiadať o jej overenie.',
    },
    {
      heading: '13. Bezpečnosť údajov',
      body: 'Údaje chránime primeranými technickými a organizačnými opatreniami: šifrovaným pripojením (HTTPS), prístupom len pre členov tímu, ktorí údaje potrebujú na svoju prácu, zabezpečením prístupov k službám, ktoré používame, a zmluvami so sprostredkovateľmi, ktoré ich zaväzujú chrániť údaje.',
    },
    {
      heading: '14. Deti',
      body: 'Naše služby sú určené firmám a podnikateľom. Údaje osôb mladších ako 16 rokov vedome nespracúvame.',
    },
    {
      heading: '15. Zmeny zásad',
      body: 'Zásady aktualizujeme vždy, keď sa zmení spôsob spracúvania, napríklad keď začneme používať nový nástroj. Aktuálne znenie s dátumom účinnosti nájdete vždy na tejto stránke.',
    },
  ],
}
