import { useEffect, useRef } from 'react';
import './LogosMarquee.css';

type Logo = { src: string; alt: string; cls?: string };

const LOGOS: Logo[] = [
  { src: '/assets/logos/coex.svg',       alt: 'COex',            cls: 'logo-coex' },
  { src: '/assets/logos/forbes.svg',     alt: 'Forbes',          cls: 'logo-forbes' },
  { src: '/assets/logos/eldenea.svg',    alt: 'Eldenea',         cls: 'logo-eldenea' },
  { src: '/assets/logos/realityexpo.svg',alt: 'Reality EXPO',    cls: 'logo-realityexpo' },
  { src: '/assets/logos/nosto.svg',      alt: 'Nosto',           cls: 'logo-nosto' },
  { src: '/assets/logos/asteria.svg',    alt: 'Asteria',         cls: 'logo-asteria' },
  { src: '/assets/logos/denovo.svg',     alt: 'De Novo',         cls: 'logo-denovo' },
  { src: '/assets/logos/dd.svg',         alt: 'DD',              cls: 'logo-dd' },
  { src: '/assets/logos/dofe.png',       alt: 'DofE',            cls: 'logo-dofe' },
  { src: '/assets/logos/hastgroup.png',  alt: 'HastGroup',       cls: 'logo-hastgroup' },
  { src: '/assets/logos/atalian.png',    alt: 'Atalian',         cls: 'logo-atalian' },
  { src: '/assets/logos/abra.png',       alt: 'Abra',            cls: 'logo-abra' },
  { src: '/assets/logos/hopi.png',       alt: 'Hopi Logistics',  cls: 'logo-hopi' },
];

const BASE_SPEED = 60;   // px per second
const HOVER_FACTOR = 0.3; // slows to 30% on hover

export default function LogosMarquee() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const targetRef = useRef(1); // 1 = full speed, HOVER_FACTOR on hover

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let raf = 0;
    let x = 0;
    let speed = 1;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      // Smoothly ease current speed toward target (no jumps on hover)
      speed += (targetRef.current - speed) * Math.min(dt * 5, 1);
      x -= BASE_SPEED * speed * dt;
      const half = el.scrollWidth / 2;
      if (half > 0 && -x >= half) x += half;
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const loop = [...LOGOS, ...LOGOS];
  return (
    <section
      className="logos"
      aria-label="Partneři a média"
      onMouseEnter={() => { targetRef.current = HOVER_FACTOR; }}
      onMouseLeave={() => { targetRef.current = 1; }}
    >
      <div className="logos-fade logos-fade-left" />
      <div className="logos-fade logos-fade-right" />
      <div className="logos-track" ref={trackRef}>
        {loop.map((logo, i) => (
          <div className="logo-item" key={i} aria-hidden={i >= LOGOS.length}>
            <img src={logo.src} alt={i < LOGOS.length ? logo.alt : ''} className={logo.cls} />
          </div>
        ))}
      </div>
    </section>
  );
}
