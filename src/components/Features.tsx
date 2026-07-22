'use client'
import { useEffect, useRef } from 'react';
import './Features.css';

const FEATURES = [
  {
    icon: '/assets/features/icon-funkcnost.svg',
    title: 'Funkčnost',
    body: (
      <>
        Design je sice super, ale pokud web nefunguje, je to k ničemu. Stavíme weby, které jsou
        nejen dobře vypadají, ale také <strong>plní vaše firemní cíle.</strong>
      </>
    ),
  },
  {
    icon: '/assets/features/icon-zivotnost.svg',
    title: 'Životnost',
    body: (
      <>
        Náš web s vámi <strong>vydrží tak dlouho</strong>, jak budete potřebovat. Díky snadnosti
        úprav si ho můžete libovolně aktualizovat podle sebe. Se škálováním vám rádi poradíme.
      </>
    ),
  },
  {
    icon: '/assets/features/icon-podpora.svg',
    title: 'Podpora',
    body: (
      <>
        <p>
          Nový web vám nezabere stovky hodin, a přesto bude přesně{' '}
          <strong>podle vašich představ</strong>. My dodáme práci, vy feedback.
        </p>
        <p>
          Po spuštění webu <strong>nekončíme</strong>, postaráme se o úpravy a aktualizace a budeme
          tu pro vás, kdykoli ho budete chtít posunout dál.
        </p>
      </>
    ),
  },
];

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!headingRef.current) return;
      const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
      const headerH = siteHeader ? siteHeader.offsetHeight : 88;
      const h = headingRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-h', `${headerH}px`);
      document.documentElement.style.setProperty(
        '--feature-card-top',
        `${headerH + h}px`
      );
    };
    update();
    const ro = new ResizeObserver(update);
    if (headingRef.current) ro.observe(headingRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current;
    if (!heading || !cards) return;

    let releaseScrollY: number | null = null;

    const onScroll = () => {
      const lastCard = cards.lastElementChild as HTMLElement | null;
      if (!lastCard) return;
      const cardTop = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--feature-card-top') || '200'
      );

      if (lastCard.getBoundingClientRect().top <= cardTop + 2) {
        // Card 3 fully stacked — record release point once, then track scroll delta
        if (releaseScrollY === null) releaseScrollY = window.scrollY;
        const scrolled = window.scrollY - releaseScrollY;
        heading.style.transform = `translateY(${-scrolled}px)`;
      } else {
        // Scrolled back above — restore heading to its sticky position
        releaseScrollY = null;
        heading.style.transform = '';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="features">
      <div className="container">
        <div className="features-heading-wrap" ref={headingRef}>
          <h2 className="features-heading reveal">
            Naše weby a služby
            <br />
            mají tohle <span className="accent">společné</span>
          </h2>
        </div>

        <div className="features-cards" ref={cardsRef}>
          {FEATURES.map((f, i) => (
            <article
              className="feature-card"
              key={i}
            >
              <div className="feature-icon">
                <img src={f.icon} alt="" aria-hidden="true" />
              </div>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <div className="feature-body">{f.body}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
