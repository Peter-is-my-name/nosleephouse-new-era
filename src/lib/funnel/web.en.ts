import type { WebCopy } from './types'

/** /reklama (web in 7 days), English copy. */
export const webEn: WebCopy = {
  meta: {
    title: 'Get more leads with a modern website in 7 days',
    description:
      'A modern website that brings in customers, from design to launch in 7 days. Book a free, no-obligation consultation. We reply within 24 hours.',
  },
  header: { badge: 'Free website design', cta: 'I want more leads' },
  hero: {
    ratingOn: 'Rated on',
    ratingAria: 'Rated 5 out of 5',
    title:
      'Get more leads with a modern website, live [[in just 7 days]] thanks to our streamlined process from design to launch.',
    sub: 'No hassle. No headaches.',
    cta: 'I want more leads',
    imgAlt: 'The nosleephouse team at a trade fair',
    badges: ['**150+** projects delivered since 2019', '**8** senior specialists on the team'],
  },
  why: {
    eyebrow: '8 senior specialists on the team',
    heading: 'Why work [[with us?]]',
    items: [
      'We build a website that works, tailored to your needs, using modern tools and our own proven processes. It saves you both time and money.',
      'We built the website and campaigns for Reality Expo, who have trusted us for two years now. Our work helped them attract more than 30 exhibitors and thousands of registrations.',
      'We follow the trends, test new technology and marketing solutions, and turn them into results that bring you customers.',
      'We build long-term partnerships and stay with you after launch, from optimisation to ad campaigns and growing your project further.',
    ],
  },
  form: {
    badge: 'Spots available this month',
    heading: 'Start getting [[more leads]]',
    sub: "Fill in the form and we'll get back to you within 24 hours. The consultation is free, with no obligation.",
    submit: 'I want more leads',
    questions: [
      {
        label: 'What kind of website do you need? *',
        emailLabel: 'Website type',
        options: [
          'A simple showcase page',
          'A larger multi-page website',
          'A company website',
          'A landing page (one-page website)',
          'An online shop',
          'I already have a website, but it needs improving.',
          'I want to discuss something else with you.',
        ],
        error: 'Please choose a website type.',
      },
      {
        label: 'What budget do you have in mind? *',
        emailLabel: 'Budget',
        options: [
          'I have more than €2,000 and want to invest in a complete website, from design to launch.',
          'I have at least €1,200 set aside and want to invest in a new website.',
          'I only have €600 set aside and need you to work some magic with it.',
          "Unfortunately, I can't afford to invest more in finishing and launching a website right now.",
        ],
        error: 'Please choose a budget.',
      },
    ],
  },
  results: {
    heading: 'Proven [[experience.]]',
    trust: 'Trusted for 2+ years',
    title: 'Reality EXPO',
    text: 'A website and campaigns the company has trusted for over 2 years. Over 30 exhibitors, thousands of registrations. A complete solution, from the first design to live ad campaigns.',
    imgAlt: 'Reality EXPO, a trade fair full of visitors',
    stats: [
      { value: '3+', label: 'years working together' },
      { value: '30+', label: 'exhibitors' },
      { value: '4,200+', label: 'registrations' },
    ],
    logosLabel: 'Companies that trust us',
  },
  faq: {
    lead: "Didn't find your answer? Message us and we'll reply within 24 hours.",
    items: [
      {
        q: 'How much does it cost?',
        a: "Every project is different. After the initial consultation, we'll prepare a specific quote for you. You know the price up front: no hidden fees, no unpleasant surprises.",
      },
      {
        q: 'How long does it take?',
        a: 'We launch standard websites and landing pages within 7 working days of approving the content and design. Larger projects (online shops, complex applications) take proportionally longer. We always confirm the timeline in advance.',
      },
      {
        q: 'I already have a website. Can you just do the marketing?',
        a: 'Absolutely. We can manage your Meta and Google ads, optimise conversions or handle SEO on your existing website. Often, though, we find the site needs small tweaks to perform better. We always discuss these suggestions with you first.',
      },
      {
        q: 'Do I have to commit long term?',
        a: 'No. The consultation is free, with no obligation. We work on one-off projects or on a monthly retainer, depending on what you need. You can end the collaboration at any time. You stay fully in control.',
      },
      {
        q: 'Do you also run ads after the website launches?',
        a: "Yes, that's our speciality. We design creatives, manage campaigns on Meta (Facebook and Instagram) and Google, and optimise budgets. Over time, many of our clients have moved to a monthly partnership with us, because we handle their ads and banners just as effectively.",
      },
    ],
  },
  final: {
    offer: 'Book your [[free consultation]]',
    sub: 'Click the button and book a no-obligation consultation.',
    cta: 'I want more leads',
  },
}
