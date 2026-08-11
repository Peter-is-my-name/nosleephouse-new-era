import type { Dictionary } from './cs'

/**
 * English UI dictionary. Typed against the Czech reference, so a missing or
 * misspelled key fails the build.
 */
export const en: Dictionary = {
  /* ── shared ─────────────────────────────────────────────── */
  common: {
    bookCall: 'Book a free call',
    caseStudy: 'Case study',
    viewCaseStudy: 'View case study',
    backToProjects: 'Back to projects',
    backHome: 'Back to homepage',
    ourProjects: 'Our work',
    letsWork: "Let's work together",
  },

  langSwitch: {
    label: 'Change language',
    to: 'CS',
    toName: 'Čeština',
  },

  /* ── header ─────────────────────────────────────────────── */
  header: {
    homeAria: 'nosleephouse — home',
    mainNavAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    menuAria: 'Menu',
    closeMenuAria: 'Close menu',
    cta: 'Our work',
    nav: {
      home: 'Home',
      projects: 'Our work',
      services: 'Services',
      about: 'About us',
      blog: 'Blog',
    },
    dropdownAria: 'Our services',
    servicesEyebrow: 'Our services',
    sectorsEyebrow: 'We specialise in',
    services: [
      'Web design & development',
      'Graphic design',
      'Visual identity',
      'Marketing & growth',
      'AI automation & AI creative',
    ],
    sectors: [
      {
        label: 'Real estate',
        sub: 'Websites for agents, agencies and property developments',
      },
      {
        label: 'Development projects',
        sub: 'Digital presentations for residential and commercial builds',
      },
      {
        label: 'Conferences, trade fairs & events',
        sub: 'Registration sites and digital identities for live events',
      },
    ],
  },

  /* ── hero ───────────────────────────────────────────────── */
  hero: {
    ratingOn: 'Rated on',
    ratingAria: 'Rated 5 out of 5',
    line1: 'Digital partner',
    line2: 'for [[business owners]]',
    sub: 'Custom websites that bring your company **real clients**.',
    cta: 'Get a free quote',
    imageAlt: 'The nosleephouse team at a trade fair',
    badgeProjects: '**150+** projects delivered since 2019',
    badgeTeam: '**8** senior specialists on the team',
  },

  /* ── logos marquee ──────────────────────────────────────── */
  logos: {
    ariaLabel: 'Partners and media',
  },

  /* ── services ───────────────────────────────────────────── */
  services: {
    heading: 'Services that\n[[work together]]',
    items: [
      {
        title: 'Web design & development',
        desc: 'We build websites that establish your authority and turn visitors into paying clients.',
        tags: ['Company website', 'E-commerce', 'Landing page'],
      },
      {
        title: 'Marketing & growth',
        desc: 'Targeted campaigns built for a steady flow of enquiries and maximum return.',
        tags: ['Google Ads', 'Meta Ads', 'SEO'],
      },
      {
        title: 'Graphic design',
        desc: 'Sharp visual content that makes your brand stand out from the crowd instantly.',
        tags: ['Logo', 'Print', 'Presentations'],
      },
      {
        title: 'Visual identity',
        desc: 'A complete visual identity that gives your brand a clear, consistent and memorable character.',
        tags: ['Brand identity', 'Visual style', 'Advertising'],
      },
      {
        title: 'AI automation & AI creative',
        desc: 'We connect your systems and take the busywork off your plate, so you can focus on what you enjoy.',
        tags: ['Zapier', 'n8n', 'Make', 'AI creative'],
      },
    ],
  },

  /* ── projects (shared brand + title copy) ───────────────── */
  projects: {
    'reality-expo': {
      brand: 'Reality Expo',
      title: 'Reality EXPO: the branding, website and campaign that carried the whole fair',
      category: 'Branding',
      tags: ['Branding', 'Web'],
    },
    aparsia: {
      brand: 'Aparsia',
      title: 'Aparsia: a multilingual website opening the property market to the world',
      category: 'Web',
      tags: ['Web', 'UX/UI'],
    },
    duopet: {
      brand: 'DUOPET',
      title: 'DUOPET: a clean website that put plastics recycling in the spotlight',
      category: 'Web',
      tags: ['Web'],
    },
    'jun-matcha': {
      brand: 'JUN',
      title:
        'JUN Matcha: a clean visual identity that built a strong premium matcha brand from zero',
      category: 'Identity',
      tags: ['Identity', 'Branding'],
    },
  },

  /* ── portfolio (homepage) ───────────────────────────────── */
  portfolio: {
    heading: 'Selected projects\nfrom our [[portfolio.]]',
    lead: 'We have **150+ projects across a range of industries** behind us and we still love it. So you do not spend all day here, these are the most recent ones.',
    viewAll: 'View all projects',
  },

  /* ── features / process ─────────────────────────────────── */
  features: {
    heading: 'How we\n[[work together]]',
    desc: [
      'In 2026 a website alone will not get you results. Last year our solutions brought clients **hundreds of qualified enquiries** and **new customers**.',
      'Thanks to those results and a tight team of specialists, **100+ clients** across the country have already trusted us to build their client-acquisition system.',
    ],
    steps: [
      {
        title: 'Strategy call',
        heading: 'The consultation is the first step towards results',
        body: [
          '**We go through your business, your goals and the options** – and see whether we can genuinely help you.',
          'We value **your time as much as our own**. Our capacity is limited, so we pick projects where we can deliver **maximum value** and **results**.',
        ],
      },
      {
        title: 'Analysis & strategy',
        heading: 'Building a predictable client-acquisition system is not a lottery',
        body: [
          'Consistent results are not down to luck, but to **strategy, know-how** and **a proven system**.',
          'We study your target audience, map the competition and uncover the behaviour patterns that keep repeating. The goal is not just a nice website, but a solution that reliably delivers results.',
        ],
      },
      {
        title: 'Building the website',
        heading: 'The path to a profitable click',
        body: [
          'Every section and every detail has a purpose. We never build a website in isolation, but as part of **a complete system that leads the user to act**.',
          'The result is not only a representative design, but a predictable tool for **winning new clients**.',
        ],
      },
      {
        title: 'Acquisition & performance',
        heading: 'The path to return on investment',
        body: [
          'We turn your website into a predictable, profitable client-acquisition system – making sure **your investment in digital pays for itself**.',
          'This approach is why we keep **our partners satisfied long term** and help them take over their market.',
        ],
      },
      {
        title: 'Growth & optimisation',
        heading: 'Your growth is our priority',
        body: [
          'We analyse the results **regularly** and roll out improvements that raise the conversion rate of the site and the efficiency of the campaigns.',
          'This is not just "maintenance" — we actively propose **new ways to win clients** and expand your reach.',
        ],
      },
    ],
    ctaLabel: "Let's work together",
    ctaHeading: 'Got a project that deserves\n[[real results?]]',
    ctaButton: 'Book a free call',
  },

  /* ── reviews carousel ───────────────────────────────────── */
  reviews: {
    sectionAria: 'Client reviews',
    label: 'Reviews',
    heading: 'Stories from our [[clients]]',
    prevAria: 'Previous review',
    nextAria: 'Next review',
    items: [
      {
        name: 'Dominika Donovalová',
        role: 'Owner of a real-estate agency,',
        quote:
          '“The guys were great from the very first contact. The whole process was fast, communication was effortless and the final website reflects my style exactly. What I liked most was that they were not just making a pretty website — they thought about what would actually bring us clients. The results proved them right.”',
      },
      {
        name: 'Jakub Haidari',
        role: 'Real-estate marketing,',
        quote:
          '“We have been working with Peter and Martin for over 2 years. Their approach was professional from day one: clear communication and results that exceeded expectations. They launched the site exactly on schedule and it runs flawlessly. I recommend them to anyone looking for agency results with a human touch.”',
      },
      {
        name: 'Radek Bareš',
        role: 'Owner of a recycling company,',
        quote:
          '“A professional approach, a fast launch and above all a website that genuinely brings in new clients. Organic traffic doubled within 3 months. I appreciate that they did not stop at launch but keep optimising.”',
      },
      {
        name: 'Filip Polanský',
        role: 'Company owner,',
        quote:
          '“We were looking for a team that understands technology and design at the same time. nosleephouse is exactly that. They delivered the full design and development of our dashboard, including AI web apps that sped up our processes. The collaboration was efficient and the result impressed even our investors.”',
      },
      {
        name: 'Jonathan Hill',
        role: 'Chef & entrepreneur,',
        quote:
          '“Leo designed a beautiful brand identity for us — logo, menu and social media visuals. Our customers love it. The website is beautifully done too. I can only recommend them.”',
      },
    ],
  },

  /* ── about ──────────────────────────────────────────────── */
  about: {
    heading: 'We have been a digital\npartner to businesses for\n[[over 7 years]]',
    text: 'Seven years taught us one thing: a good website comes out of **a good relationship with the client**, not out of a brief in a spreadsheet. That is why we talk to you directly — and why we have to understand your business, from the first meeting through to launch.',
    cta: 'Learn more about nosleephouse',
    imageAlt: 'The nosleephouse team',
  },

  /* ── contact form ───────────────────────────────────────── */
  contact: {
    heading: 'Start getting\n[[more enquiries]]',
    firstName: 'First name *',
    firstNamePlaceholder: 'John',
    lastName: 'Last name *',
    lastNamePlaceholder: 'Smith',
    email: 'Email *',
    emailPlaceholder: 'you@email.com',
    phone: 'Phone *',
    phonePlaceholder: '608 123 456',
    prefixAria: 'Dialling code',
    messageLabel: 'What can we help you with?',
    messagePlaceholder:
      'A few sentences about your project or goal is enough. We reply within 24 hours.',
    gdpr: 'By submitting you agree to your personal data being processed so we can get in touch.',
    submit: 'I want more enquiries',
    submitting: 'Sending…',
    errors: {
      firstName: 'Please enter your first name.',
      lastName: 'Please enter your last name.',
      email: 'Please enter a valid email.',
      phone: 'Please enter a valid number (9 digits).',
    },
    sideTitle: 'In a hurry? Call or write.',
    founders: [
      {
        role: 'Founder & sales',
        reason: 'For project status and other questions:',
      },
      {
        role: 'Founder & graphic designer',
        reason: 'For graphic design:',
      },
    ],
  },

  /* ── blog carousel on the homepage ──────────────────────── */
  blogSection: {
    heading: 'Read our [[blog]]',
    readAll: 'Read everything',
    prevAria: 'Previous articles',
    nextAria: 'Next articles',
  },

  /* ── footer ─────────────────────────────────────────────── */
  footer: {
    exploreHead: 'Explore',
    exploreLinks: ['Home', 'About us', 'Contact', 'Careers'],
    servicesHead: 'Services',
    contactLabel: 'Contact',
    cta: 'Free quote',
    copyright: 'Copyright © nosleephouse™ 2026',
  },

  /* ── cookie banner ──────────────────────────────────────── */
  cookies: {
    dialogAria: 'Cookie information',
    title: 'Cookie information',
    text: 'To provide the best possible service we use cookies to store and access device information. Your consent allows us to process data such as browsing behaviour on this site.',
    details: 'Show details',
    decline: 'Decline',
    acceptAll: 'Accept all',
    modalTitle: 'Cookie settings',
    closeAria: 'Close',
    intro:
      'Cookies are small text files stored on your device. Some help the website function, others let us personalise content or understand how you use the site. The choice is yours.',
    allowSelection: 'Allow selection',
    allowAll: 'Allow all',
    categories: {
      necessary: {
        label: 'Necessary',
        desc: 'Necessary cookies help make the site usable by enabling basic functions such as page navigation. The website cannot function properly without these cookies.',
      },
      preferences: {
        label: 'Preferences',
        desc: 'Preference cookies allow the website to remember information that changes how it behaves or looks — your preferred language, for example.',
      },
      statistics: {
        label: 'Statistics',
        desc: 'Statistics cookies help us understand how visitors use our website. They collect and share information anonymously.',
      },
      marketing: {
        label: 'Marketing',
        desc: 'Marketing cookies are used to track visitors across websites. The intention is to display advertising that is relevant and engaging for the individual user.',
      },
    },
  },

  /* ── projects listing page ──────────────────────────────── */
  projectsPage: {
    label: 'Our work',
    heading: 'Over 80 projects.\nEvery one with a [[story.]]',
    sub: 'From startups to established companies. Websites, e-shops, branding and visual identities that genuinely work.',
    filtersAria: 'Project filter',
    filterAll: 'All',
    filters: ['Web', 'Branding', 'Identity', 'UX/UI'],
    empty: 'No projects in this category.',
    ctaLabel: "Let's work together",
    ctaHeading: 'Got a project\nin [[mind?]]',
    ctaSub: 'Get in touch. We will talk about how to take your website to the next level.',
  },

  /* ── blog listing + article chrome ──────────────────────── */
  blog: {
    label: 'Blog',
    heading: 'News, tips and\n[[stories from practice]]',
    sub: 'How we build websites, run campaigns and help companies grow. No fluff, with real results from real clients.',
    readingSuffix: 'min read',
    crumbsAria: 'Breadcrumb',
    crumbHome: 'Home',
    ctaLabel: "Let's work together",
    ctaHeading: 'Want results too,\nnot just [[promises?]]',
    ctaSub: 'Write to us and we will turn your project into something people talk about.',
    relatedLabel: 'More from the blog',
    readArticle: 'Read article',
  },

  /* ── thank-you page ─────────────────────────────────────── */
  thankYou: {
    heading: 'Book your consultation slot below 👇',
    sub: 'Please take it as seriously as you can. We only hold a few meetings a day and we genuinely want to give you value, so pick a slot when you have 100 % time.',
    noSlot: 'If none of the slots suit you, we will reach out ourselves.',
    back: '← Back to homepage',
  },

  /* ── error states ───────────────────────────────────────── */
  notFound: {
    text: 'This page does not exist.',
    cta: 'Back home',
  },
  error: {
    heading: 'Something went wrong.',
    cta: 'Try again',
  },

  /* ── case-study section chrome (shared by all 4) ────────── */
  caseChrome: {
    client: 'Client',
    year: 'Year',
    industry: 'Industry',
    services: 'Services',
    viewLive: 'View the live site',
    viewInstagram: 'View on Instagram',
    brief: 'Brief',
    challenge: 'Challenge',
    solution: 'Solution',
    whatWeMade: 'What we made',
    results: 'Results',
    resultsHeading: 'Numbers\nthat [[speak.]]',
    testimonial: 'Testimonial',
    nextProject: 'Next project',
    ctaLabel: "Let's work together",
    ctaHeading: 'Got a similar\nproject [[coming up?]]',
    ctaSub: 'No obligation. No slide deck. Just a conversation about your goals.',
    placeholder: 'Placeholder',
    clientCameWith: 'What the client came with',
    problemsLabel: 'The problems we solved',
    consequence: 'Consequence',
    goal: 'Goal',
    whatWeDelivered: 'What we delivered',
  },

  /* ── page metadata ──────────────────────────────────────── */
  meta: {
    titleDefault: 'nosleephouse™ — Digital agency',
    titleTemplate: '%s | nosleephouse™',
    siteDescription:
      'A digital agency operating at the highest level. Custom code, original design, AI solutions and branding. Launched in 7 days.',
    siteDescriptionShort:
      'A digital agency operating at the highest level. Custom code, original design, AI solutions and branding.',
    ogImageAlt: 'nosleephouse™ — the team at a trade fair',
    projects: {
      title: 'Our work',
      description:
        'Over 80 projects across a range of industries — websites, e-shops, branding and visual identities. See what we can do.',
      ogTitle: 'Our work | nosleephouse™',
      ogDescription:
        'Over 80 projects across a range of industries — websites, e-shops, branding and visual identities.',
    },
    blog: {
      title: 'Blog',
      description:
        'News, tips and stories from practice at nosleephouse™. How we build websites, run campaigns and help companies grow, with real results from real clients.',
      ogTitle: 'Blog | nosleephouse™',
      ogDescription:
        'News, tips and stories from practice. How we build websites and run campaigns that deliver results.',
      blogName: 'nosleephouse™ blog',
      notFound: 'Article not found',
    },
    gdpr: {
      title: 'Privacy policy',
      description:
        'How nosleephouse s.r.o. collects, uses and protects your personal data in line with the GDPR and Act No. 18/2018 Coll.',
    },
    thankYou: {
      title: 'Thank you for your enquiry — book your consultation slot',
    },
  },
}
