/**
 * Privacy policy, per locale. Server-only content.
 *
 * The Slovak text (./gdpr-sk.ts) is the authoritative version: nosleephouse
 * s.r.o. is a Slovak company, so Slovak law applies (GDPR, zákon č. 18/2018
 * Z. z., § 109 ods. 8 zákona č. 452/2021 Z. z.). The Czech and English texts
 * below say the same thing; keep all three in sync and bump `effectiveDate`.
 */

import type { Locale } from '../i18n'
import { GDPR_SK } from './gdpr-sk'

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
  eyebrow: 'Právní informace',
  title: 'Zásady ochrany [[osobních údajů]]',
  effectiveDate: 'Platné a účinné od 12. 11. 2026',
  back: '← Zpět na hlavní stránku',
  sections: [
    {
      heading: '1. Čeho se tyto zásady týkají',
      body: 'Tyto zásady vysvětlují, jak společnost nosleephouse s.r.o. zpracovává osobní údaje návštěvníků webů nosleephouse.cz, nosleephouse.sk a nosleephouse.com (včetně reklamních podstránek), zájemců o naše služby a klientů.\nJsme slovenská společnost, a proto postupujeme podle nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů (dále „GDPR“), slovenského zákona č. 18/2018 Z. z., o ochraně osobních údajů, a u cookies podle § 109 odst. 8 slovenského zákona č. 452/2021 Z. z., o elektronických komunikacích. Závazné je slovenské znění těchto zásad.',
    },
    {
      heading: '2. Správce',
      body: 'Správcem vašich osobních údajů je:\nnosleephouse s.r.o.\nSokolovská 178/10, 040 11 Košice-Západ, Slovenská republika\nIČO: 57 202 443\nE-mail: info@nosleephouse.com',
      outro: 'Pověřence pro ochranu osobních údajů (DPO) jsme nejmenovali, protože nám to GDPR neukládá (čl. 37 GDPR). Se všemi dotazy k osobním údajům se obracejte na e-mail uvedený výše.',
    },
    {
      heading: '3. Jaké údaje zpracováváme',
      body: 'Údaje získáváme přímo od vás, když vyplníte formulář, rezervujete si schůzku nebo nás kontaktujete:',
      list: [
        'Kontaktní údaje z formulářů: jméno, příjmení, e-mail, telefonní číslo s předvolbou, text zprávy a odpovědi na doplňující otázky ve formuláři (například o jakou službu máte zájem a orientační rozpočet).',
        'E-mail z nedokončeného formuláře: pokud do formuláře napíšete e-mailovou adresu, uložíme si ji hned po vyplnění, i když formulář neodešlete (podrobnosti v bodě 4).',
        'Údaje o rezervaci schůzky: zvolený termín, jméno, e-mail a poznámky, které zadáte v rezervačním kalendáři Calendly.',
        'Údaje z komunikace: obsah e-mailů, zpráv, hovorů a schůzek s námi.',
        'Smluvní a fakturační údaje klientů: obchodní firma, sídlo, IČO, DIČ, DIČ k DPH, kontaktní osoba, údaje o objednávce a platbách.',
        'Technické údaje: IP adresa, typ prohlížeče a zařízení, čas přístupu a navštívená stránka (serverové záznamy) a údaje uložené ve vašem prohlížeči (cookies a podobné technologie, viz bod 8).',
        'Identifikátor kliknutí na reklamu (fbclid): pokud přijdete z naší reklamy na Facebooku nebo Instagramu, adresa stránky ho obsahuje a pomáhá nám zjistit, která reklama vás přivedla.',
      ],
      outro: 'Zvláštní kategorie údajů (například o zdraví) nepotřebujeme, proto je prosím do formulářů neuvádějte.',
    },
    {
      heading: '4. Účely a právní základy zpracování',
      list: [
        'Vyřízení poptávky a příprava nabídky (odpověď na formulář, e-mail nebo telefonát, potvrzovací e-mail, úvodní konzultace): opatření přijatá před uzavřením smlouvy na vaši žádost, čl. 6 odst. 1 písm. b) GDPR. Pokud nás kontaktujete jménem firmy, zpracováváme údaje jejího zástupce na základě oprávněného zájmu s ní komunikovat, čl. 6 odst. 1 písm. f) GDPR.',
        'Kontaktování při nedokončeném formuláři: oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR. Naším zájmem je ozvat se člověku, který o službu projevil zájem a sám nám napsal svůj e-mail. Pošleme vám nejvýše jednu zprávu, a pokud nereagujete, e-mail vymažeme. Proti tomu můžete kdykoli vznést námitku (bod 11).',
        'Rezervace schůzky přes Calendly: opatření přijatá před uzavřením smlouvy, čl. 6 odst. 1 písm. b) GDPR.',
        'Uzavření a plnění smlouvy s klientem: plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR.',
        'Účetnictví a daně: splnění právní povinnosti, čl. 6 odst. 1 písm. c) GDPR ve spojení se slovenským zákonem č. 431/2002 Z. z., o účetnictví, a zákonem č. 222/2004 Z. z., o dani z přidané hodnoty.',
        'Bezpečnost a provoz webu (serverové záznamy, ochrana před zneužitím formulářů): oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR.',
        'Měření a cílení reklamy přes Meta Pixel na reklamních podstránkách: váš souhlas s marketingovými cookies, čl. 6 odst. 1 písm. a) GDPR a § 109 odst. 8 zákona č. 452/2021 Z. z.',
        'Oznámení konverze společnosti Meta ze serveru (Conversions API) po odeslání formuláře na reklamní podstránce: oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR. Naším zájmem je vědět, která reklama přinesla poptávku, a investovat jen do reklamy, která funguje (podrobnosti v bodě 7).',
        'Uplatňování a obhajoba právních nároků: oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR.',
      ],
      outro: 'Newsletter ani jiná obchodní sdělení vám bez vašeho souhlasu neposíláme.',
    },
    {
      heading: '5. Je poskytnutí údajů povinné?',
      body: 'Poskytnutí údajů je dobrovolné. Bez jména, e-mailu a telefonu ale nedokážeme vyřídit vaši poptávku a bez smluvních a fakturačních údajů nemůžeme uzavřít smlouvu ani vystavit fakturu. Souhlas s cookies dát nemusíte, web vám bude fungovat i bez něj.',
    },
    {
      heading: '6. Komu údaje předáváme',
      body: 'Vaše údaje neprodáváme. Předáváme je jen v nezbytném rozsahu dodavatelům, kteří pro nás zajišťují provoz webu a komunikaci (zpracovatelé podle čl. 28 GDPR), a dalším příjemcům:',
      list: [
        'Vercel Inc. (USA): hosting webu a serverové záznamy.',
        'Resend (USA): odesílání e-mailů z formulářů.',
        'Google (Google Ireland Limited, Irsko, a Google LLC, USA): e-mailová schránka, do které nám přicházejí poptávky.',
        'Calendly LLC (USA): rezervační kalendář na stránce s poděkováním.',
        'Meta Platforms Ireland Limited (Irsko): měření a cílení reklamy (bod 7).',
        'Účetní kancelář, advokáti a další poradci vázaní mlčenlivostí a orgány veřejné moci, pokud nám to ukládá zákon.',
      ],
      outro: 'Někteří z těchto příjemců sídlí v USA nebo tam mohou údaje předávat. Předání je chráněno rozhodnutím Evropské komise o odpovídající ochraně pro certifikované společnosti (EU-US Data Privacy Framework), případně standardními smluvními doložkami schválenými Evropskou komisí (čl. 45 a 46 GDPR).',
    },
    {
      heading: '7. Meta Pixel a oznamování konverzí',
      body: 'Na reklamních podstránkách (například Reklama, AI kreativy a AI automatizace) používáme nástroj Meta Pixel od společnosti Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irsko. Pixel se spustí až poté, co v cookie liště povolíte marketingové cookies. Měří, zda návštěva z reklamy na Facebooku nebo Instagramu vedla k poptávce, a umožňuje zobrazovat reklamu lidem, kteří už náš web navštívili, případně lidem s podobnými zájmy.\nPři shromažďování těchto údajů a jejich předání společnosti Meta jsme s ní společnými správci (čl. 26 GDPR). Podle dodatku Meta pro správce (Controller Addendum) odpovídáme za informování a získání souhlasu my, za další zpracování odpovídá Meta. Svá práva můžete uplatnit u nás i přímo u společnosti Meta. Více v zásadách Mety na facebook.com/privacy/policy.\nPokud odešlete formulář na reklamní podstránce, oznámíme společnosti Meta události „Contact“ a „Lead“ i přímo z našeho serveru (Conversions API), a to i bez souhlasu s cookies. Předáváme jen zahašované (nečitelně zakódované) jméno, e-mail a telefon, identifikátor kliknutí na reklamu, IP adresu, typ prohlížeče a adresu stránky. Meta je porovná se svými uživateli a použije k vyhodnocení a zlepšení naší reklamy. Pokud s tím nesouhlasíte, napište nám a další údaje o vás společnosti Meta neodešleme.',
      outro: 'Jde o profilování pro reklamní účely, které vůči vám nemá právní účinky. Automatizované rozhodování podle čl. 22 GDPR neprovádíme.',
    },
    {
      heading: '8. Cookies a podobné technologie',
      body: 'Cookies jsou malé soubory, které web ukládá do vašeho prohlížeče. Nezbytné technologie používáme bez souhlasu, protože bez nich web nefunguje. Marketingové cookies ukládáme jen tehdy, když je povolíte v cookie liště. Svou volbu můžete kdykoli změnit nebo souhlas odvolat přes odkaz „Nastavení cookies“ v patičce webu, a to stejně snadno, jako jste ho udělili. Po odvolání cookies společnosti Meta z prohlížeče vymažeme.',
      list: [
        'nsh-cookies (úložiště prohlížeče, nezbytné): pamatuje si vaši volbu v cookie liště spolu s datem a verzí souhlasu. Platí do vymazání v prohlížeči.',
        'nsh_lead_event (úložiště relace, nezbytné): po odeslání formuláře přenese údaje na stránku s poděkováním, aby se poptávka započítala jen jednou. Vymaže se hned po načtení stránky, nejpozději zavřením okna.',
        '_fbp (Meta, marketingové, jen se souhlasem): rozpoznává prohlížeč pro měření a cílení reklamy. Platnost 90 dní.',
        '_fbc (Meta, marketingové, jen se souhlasem): uchovává identifikátor kliknutí na reklamu. Platnost 90 dní.',
        'Calendly (třetí strana): rezervační kalendář na stránce s poděkováním může ukládat vlastní cookies potřebné pro své fungování. Více na calendly.com/privacy.',
      ],
      outro: 'Statistické ani preferenční cookies v tuto chvíli nepoužíváme. Pokud je zavedeme, spustí se jen s vaším souhlasem a doplníme je do tohoto seznamu.',
    },
    {
      heading: '9. Jak dlouho údaje uchováváme',
      list: [
        'Poptávky, které nevedly ke spolupráci, a související komunikace: 2 roky od posledního kontaktu.',
        'E-mail z nedokončeného formuláře: nejvýše 6 měsíců; pokud na naši zprávu nereagujete, vymažeme ho dříve.',
        'Smlouvy a komunikace s klienty: po dobu trvání smlouvy a 4 roky po jejím skončení, což odpovídá obecné promlčecí době v obchodních vztazích podle slovenského obchodního zákoníku (§ 397).',
        'Účetní doklady a faktury: 10 let po skončení roku, kterého se týkají (§ 35 slovenského zákona č. 431/2002 Z. z., o účetnictví).',
        'Rezervace schůzek v Calendly: nejvýše 2 roky od schůzky.',
        'Serverové záznamy: podle nastavení poskytovatele hostingu, nejvýše 30 dní.',
        'Údaje zpracovávané na základě souhlasu: do odvolání souhlasu, cookies nejvýše po dobu uvedenou v bodě 8.',
      ],
      outro: 'Pokud probíhá spor nebo kontrola, můžeme údaje potřebné k uplatnění nebo obhajobě nároků uchovat až do jejich skončení.',
    },
    {
      heading: '10. Vaše práva',
      body: 'V souvislosti se zpracováním vašich osobních údajů máte právo:',
      list: [
        'na přístup k údajům a jejich kopii (čl. 15 GDPR),',
        'na opravu nepřesných nebo doplnění neúplných údajů (čl. 16 GDPR),',
        'na výmaz údajů, například pokud je už nepotřebujeme, odvolali jste souhlas nebo jste úspěšně vznesli námitku (čl. 17 GDPR),',
        'na omezení zpracování (čl. 18 GDPR),',
        'na přenositelnost údajů, které zpracováváme na základě souhlasu nebo smlouvy (čl. 20 GDPR),',
        'kdykoli odvolat souhlas, aniž by tím byla dotčena zákonnost zpracování před jeho odvoláním (čl. 7 odst. 3 GDPR); souhlas s cookies odvoláte přes „Nastavení cookies“ v patičce,',
        'podat stížnost u dozorového úřadu (čl. 77 GDPR). Naším vedoucím dozorovým úřadem je Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava 27, www.dataprotection.gov.sk. Pokud žijete v Česku, můžete se obrátit i na Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz.',
      ],
    },
    {
      heading: '11. Právo vznést námitku',
      body: 'Pokud údaje zpracováváme na základě oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR), máte právo z důvodů týkajících se vaší konkrétní situace kdykoli vznést námitku proti jejich zpracování (čl. 21 GDPR). Týká se to hlavně kontaktování při nedokončeném formuláři a oznamování konverzí společnosti Meta. Po námitce údaje dále nezpracováváme, pokud neprokážeme závažné oprávněné důvody, které převažují nad vašimi zájmy, právy a svobodami, nebo důvody pro uplatnění či obhajobu právních nároků.\nProti zpracování pro účely přímého marketingu můžete vznést námitku kdykoli a bez udání důvodu. Údaje pak pro tento účel už nepoužijeme.',
    },
    {
      heading: '12. Jak uplatnit svá práva',
      body: 'Napište nám na info@nosleephouse.com nebo poštou na adresu sídla. Odpovíme bez zbytečného odkladu, nejpozději do jednoho měsíce. U složitých nebo početných žádostí můžeme lhůtu prodloužit o další dva měsíce, o čemž vás předem informujeme (čl. 12 odst. 3 GDPR). Vyřízení žádosti je bezplatné. Pokud budeme mít pochybnosti o vaší totožnosti, můžeme vás požádat o její ověření.',
    },
    {
      heading: '13. Bezpečnost údajů',
      body: 'Údaje chráníme přiměřenými technickými a organizačními opatřeními: šifrovaným připojením (HTTPS), přístupem jen pro členy týmu, kteří údaje potřebují ke své práci, zabezpečením přístupů ke službám, které používáme, a smlouvami se zpracovateli, které je zavazují údaje chránit.',
    },
    {
      heading: '14. Děti',
      body: 'Naše služby jsou určeny firmám a podnikatelům. Údaje osob mladších 16 let vědomě nezpracováváme.',
    },
    {
      heading: '15. Změny zásad',
      body: 'Zásady aktualizujeme vždy, když se změní způsob zpracování, například když začneme používat nový nástroj. Aktuální znění s datem účinnosti najdete vždy na této stránce.',
    },
  ],
}

const EN: GdprContentData = {
  eyebrow: 'Legal information',
  title: 'Privacy [[policy]]',
  effectiveDate: 'Effective from 12 November 2026',
  back: '← Back to homepage',
  sections: [
    {
      heading: '1. What this policy covers',
      body: 'This policy explains how nosleephouse s.r.o. processes the personal data of visitors to nosleephouse.com, nosleephouse.sk and nosleephouse.cz (including our advertising landing pages), of people interested in our services and of our clients.\nWe are a Slovak company, so we follow Regulation (EU) 2016/679 on the protection of natural persons with regard to the processing of personal data (the "GDPR"), Slovak Act No. 18/2018 Coll. on the protection of personal data and, for cookies, Section 109(8) of Slovak Act No. 452/2021 Coll. on electronic communications. The Slovak version of this policy is legally binding; this English version is provided for convenience.',
    },
    {
      heading: '2. Controller',
      body: 'The controller of your personal data is:\nnosleephouse s.r.o.\nSokolovská 178/10, 040 11 Košice-Západ, Slovakia\nCompany ID: 57 202 443\nEmail: info@nosleephouse.com',
      outro: 'We have not appointed a data protection officer (DPO), as the GDPR does not require us to (Art. 37 GDPR). Please send any questions about your personal data to the email above.',
    },
    {
      heading: '3. What data we process',
      body: 'We collect data directly from you when you fill in a form, book a meeting or contact us:',
      list: [
        'Contact details from forms: first name, surname, email, phone number with country code, your message and your answers to the extra questions in the form (for example which service you are interested in and your approximate budget).',
        'Email from an unfinished form: if you type your email address into a form, we save it as soon as you enter it, even if you do not submit the form (see section 4).',
        'Meeting booking details: the time you choose, your name, email and any notes you enter in the Calendly booking calendar.',
        'Communication data: the content of emails, messages, calls and meetings with us.',
        'Client contract and billing details: company name, registered office, company and tax IDs, VAT number, contact person, order and payment details.',
        'Technical data: IP address, browser and device type, time of access and page visited (server logs), and data stored in your browser (cookies and similar technologies, see section 8).',
        'Ad click identifier (fbclid): if you arrive from one of our ads on Facebook or Instagram, the page address contains it and it helps us see which ad brought you to us.',
      ],
      outro: 'We do not need any special category data (for example about health), so please do not include it in the forms.',
    },
    {
      heading: '4. Purposes and legal bases',
      list: [
        'Handling your enquiry and preparing an offer (replying to your form, email or call, the confirmation email, the initial consultation): steps taken at your request before entering into a contract, Art. 6(1)(b) GDPR. If you contact us on behalf of a company, we process its representative\'s data on the basis of our legitimate interest in communicating with that company, Art. 6(1)(f) GDPR.',
        'Contacting you about an unfinished form: legitimate interest, Art. 6(1)(f) GDPR. Our interest is to get back to someone who showed interest in our services and typed in their own email. We send at most one message, and if you do not reply, we delete the email. You can object to this at any time (section 11).',
        'Booking a meeting through Calendly: steps taken before entering into a contract, Art. 6(1)(b) GDPR.',
        'Entering into and performing a contract with a client: performance of a contract, Art. 6(1)(b) GDPR.',
        'Accounting and tax: compliance with a legal obligation, Art. 6(1)(c) GDPR together with Slovak Act No. 431/2002 Coll. on accounting and Act No. 222/2004 Coll. on value added tax.',
        'Website security and operation (server logs, protection against form abuse): legitimate interest, Art. 6(1)(f) GDPR.',
        'Measuring and targeting advertising with the Meta Pixel on our landing pages: your consent to marketing cookies, Art. 6(1)(a) GDPR and Section 109(8) of Act No. 452/2021 Coll.',
        'Reporting a conversion to Meta from our server (Conversions API) after you submit a form on a landing page: legitimate interest, Art. 6(1)(f) GDPR. Our interest is to know which ad brought in an enquiry and to invest only in advertising that works (see section 7).',
        'Establishing, exercising and defending legal claims: legitimate interest, Art. 6(1)(f) GDPR.',
      ],
      outro: 'We do not send you newsletters or other marketing emails without your consent.',
    },
    {
      heading: '5. Do you have to provide your data?',
      body: 'Providing your data is voluntary. However, without your name, email and phone number we cannot handle your enquiry, and without contract and billing details we cannot sign a contract or issue an invoice. You do not have to consent to cookies; the website works without them.',
    },
    {
      heading: '6. Who we share data with',
      body: 'We never sell your data. We share it only to the extent necessary with suppliers who run our website and communication for us (processors under Art. 28 GDPR) and with other recipients:',
      list: [
        'Vercel Inc. (USA): website hosting and server logs.',
        'Resend (USA): sending emails from our forms.',
        'Google (Google Ireland Limited, Ireland, and Google LLC, USA): the email inbox that receives enquiries.',
        'Calendly LLC (USA): the booking calendar on the thank-you page.',
        'Meta Platforms Ireland Limited (Ireland): measuring and targeting advertising (section 7).',
        'Our accountants, lawyers and other advisers bound by confidentiality, and public authorities where the law requires it.',
      ],
      outro: 'Some of these recipients are based in the USA or may transfer data there. Such transfers are protected by the European Commission\'s adequacy decision for certified companies (EU-US Data Privacy Framework) or by standard contractual clauses approved by the European Commission (Art. 45 and 46 GDPR).',
    },
    {
      heading: '7. Meta Pixel and conversion reporting',
      body: 'On our advertising landing pages (for example Offer, AI creatives and AI automation) we use the Meta Pixel from Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland. The Pixel only starts after you allow marketing cookies in the cookie banner. It measures whether a visit from a Facebook or Instagram ad led to an enquiry, and lets us show ads to people who have already visited our site or to people with similar interests.\nFor collecting this data and passing it to Meta, we and Meta are joint controllers (Art. 26 GDPR). Under Meta\'s Controller Addendum, we are responsible for informing you and obtaining your consent, and Meta is responsible for its further processing. You can exercise your rights with us or directly with Meta. More in Meta\'s privacy policy at facebook.com/privacy/policy.\nIf you submit a form on a landing page, we also report the "Contact" and "Lead" events to Meta directly from our server (Conversions API), even without cookie consent. We share only your hashed (irreversibly encoded) name, email and phone number, the ad click identifier, your IP address, browser type and the page address. Meta matches them against its users and uses them to evaluate and improve our advertising. If you do not agree, write to us and we will not send Meta any further data about you.',
      outro: 'This is profiling for advertising purposes that has no legal effect on you. We do not carry out automated decision-making under Art. 22 GDPR.',
    },
    {
      heading: '8. Cookies and similar technologies',
      body: 'Cookies are small files a website stores in your browser. We use strictly necessary technologies without consent, because the site cannot work without them. We store marketing cookies only if you allow them in the cookie banner. You can change your choice or withdraw consent at any time through the "Cookie settings" link in the footer, just as easily as you gave it. When you withdraw consent, we delete Meta\'s cookies from your browser.',
      list: [
        'nsh-cookies (browser storage, strictly necessary): remembers your cookie choice with the date and version of your consent. Kept until you clear it in your browser.',
        'nsh_lead_event (session storage, strictly necessary): carries the submitted form data to the thank-you page so the enquiry is counted only once. Deleted as soon as that page loads, at the latest when you close the window.',
        '_fbp (Meta, marketing, only with consent): recognises the browser to measure and target advertising. Expires after 90 days.',
        '_fbc (Meta, marketing, only with consent): stores the ad click identifier. Expires after 90 days.',
        'Calendly (third party): the booking calendar on the thank-you page may store its own cookies needed for it to work. More at calendly.com/privacy.',
      ],
      outro: 'We do not currently use statistics or preference cookies. If we introduce them, they will only run with your consent and we will add them to this list.',
    },
    {
      heading: '9. How long we keep data',
      list: [
        'Enquiries that did not lead to working together, and related communication: 2 years from the last contact.',
        'Email from an unfinished form: no more than 6 months; if you do not reply to our message, we delete it sooner.',
        'Contracts and client communication: for the term of the contract and 4 years after it ends, in line with the general limitation period for commercial relationships under the Slovak Commercial Code (Section 397).',
        'Accounting records and invoices: 10 years after the end of the year they relate to (Section 35 of Slovak Act No. 431/2002 Coll. on accounting).',
        'Meeting bookings in Calendly: no more than 2 years after the meeting.',
        'Server logs: according to the hosting provider\'s settings, no more than 30 days.',
        'Data processed on the basis of consent: until you withdraw consent; cookies no longer than stated in section 8.',
      ],
      outro: 'If a dispute or an official inspection is in progress, we may keep the data needed to establish or defend claims until it ends.',
    },
    {
      heading: '10. Your rights',
      body: 'In connection with the processing of your personal data, you have the right:',
      list: [
        'of access to your data and to a copy of it (Art. 15 GDPR),',
        'to have inaccurate data corrected or incomplete data completed (Art. 16 GDPR),',
        'to erasure, for example if we no longer need the data, you have withdrawn consent or successfully objected (Art. 17 GDPR),',
        'to restriction of processing (Art. 18 GDPR),',
        'to data portability for data we process on the basis of consent or a contract (Art. 20 GDPR),',
        'to withdraw consent at any time, without affecting the lawfulness of processing before withdrawal (Art. 7(3) GDPR); you can withdraw cookie consent through "Cookie settings" in the footer,',
        'to lodge a complaint with a supervisory authority (Art. 77 GDPR). Our lead supervisory authority is the Office for Personal Data Protection of the Slovak Republic, Hraničná 12, 820 07 Bratislava 27, www.dataprotection.gov.sk. You can also complain to the authority in the EU country where you live or work.',
      ],
    },
    {
      heading: '11. Right to object',
      body: 'Where we process data on the basis of legitimate interest (Art. 6(1)(f) GDPR), you have the right to object at any time, on grounds relating to your particular situation (Art. 21 GDPR). This mainly concerns contacting you about an unfinished form and reporting conversions to Meta. After an objection we stop processing the data unless we demonstrate compelling legitimate grounds that override your interests, rights and freedoms, or the data is needed to establish, exercise or defend legal claims.\nYou can object to processing for direct marketing at any time and without giving a reason. We will then no longer use your data for that purpose.',
    },
    {
      heading: '12. How to exercise your rights',
      body: 'Write to us at info@nosleephouse.com or by post to our registered office. We will reply without undue delay and within one month at the latest. For complex or numerous requests we may extend this by two further months and will let you know in advance (Art. 12(3) GDPR). Handling your request is free of charge. If we have doubts about your identity, we may ask you to confirm it.',
    },
    {
      heading: '13. Data security',
      body: 'We protect data with appropriate technical and organisational measures: encrypted connections (HTTPS), access only for team members who need the data for their work, secured access to the services we use, and contracts with our processors that oblige them to protect the data.',
    },
    {
      heading: '14. Children',
      body: 'Our services are intended for companies and entrepreneurs. We do not knowingly process data of anyone under 16.',
    },
    {
      heading: '15. Changes to this policy',
      body: 'We update this policy whenever the way we process data changes, for example when we start using a new tool. The current version and its effective date are always on this page.',
    },
  ],
}

const GDPR: Record<Locale, GdprContentData> = { cs: CS, sk: GDPR_SK, en: EN }

export const getGdprContent = (locale: Locale) => GDPR[locale]
