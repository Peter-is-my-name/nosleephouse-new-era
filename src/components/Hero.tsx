'use client'
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, GoogleLogo } from './icons';
import './Hero.css';

const heroVisual = '/assets/hero.jpg';

// Matches apadore.cz exactly — more words, same pool
const WORDS = [
  '\u00a0prodáva\u00a0',
  '\u00a0přitahuje\u00a0',
  '\u00a0funguje\u00a0',
  '\u00a0roste\u00a0',
  '\u00a0zaujme\u00a0',
  '\u00a0konvertuje\u00a0',
  '\u00a0vydělává\u00a0',
];
const SLIDE_MS = 600;  // apadore uses 0.6s
const HOLD_MS  = 3000; // apadore uses 3s

/* Figma Union shape (node 0:2167) — rounded rect with diagonal notch, 663.564 × 619.965 */
const HERO_SHAPE_PATH =
  'M663.564 608.831C663.564 614.98 658.58 619.965 652.431 619.965H11.1336C4.98467 619.965 0 614.98 0 608.831V452.149C0 448.074 2.22697 444.324 5.80567 442.373L376.708 240.231C380.287 238.28 382.514 234.53 382.514 230.455V151.681C382.514 147.599 384.747 143.845 388.334 141.897L647.118 1.36524C654.536 -2.66344 663.564 2.70734 663.564 11.1493V608.831Z';

/* Same path normalized to 0–1 (clipPathUnits="objectBoundingBox") */
const HERO_CLIP_PATH =
  'M1 0.98204C1 0.99196 0.99249 1 0.98322 1L0.01678 1C0.00751 1 0 0.99196 0 0.98204L0 0.72931C0 0.72274 0.00336 0.71669 0.00875 0.71354L0.56771 0.38749C0.5731 0.38434 0.57646 0.37829 0.57646 0.37172L0.57646 0.24466C0.57646 0.23808 0.57982 0.23202 0.58522 0.22888L0.97521 0.0022C0.98639 -0.0043 1 0.00437 1 0.01798L1 0.98204Z';

export default function Hero() {
  const trackRef = useRef<HTMLSpanElement>(null);
  const [idx, setIdx]         = useState(0);
  const [itemH, setItemH]     = useState(0);
  const [noTrans, setNoTrans] = useState(false);

  // Measure one item height on mount + resize (mirrors apadore's updateDimensions)
  useLayoutEffect(() => {
    const measure = () => {
      const first = trackRef.current?.children[0] as HTMLElement | undefined;
      if (first) setItemH(first.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Advance every HOLD_MS (timer resets after each idx change)
  useEffect(() => {
    const id = window.setTimeout(() => setIdx((i) => i + 1), HOLD_MS);
    return () => window.clearTimeout(id);
  }, [idx]);

  // When we reach the cloned first word (index N), snap back to 0
  const handleTransitionEnd = () => {
    if (idx >= WORDS.length) {
      setNoTrans(true);
      setIdx(0);
      // One frame later, re-enable transition so next slide animates
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTrans(false))
      );
    }
  };

  // All words + clone of first for seamless loop (apadore technique)
  const allWords = [...WORDS, WORDS[0]];
  const translateY = itemH ? -idx * itemH : 0;

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="reviews reveal" style={{ '--d': '0.05s' } as CSSProperties}>
            <div className="reviews-left">
              <span className="partner">Partner at</span>
              <GoogleLogo height={26} white />
            </div>
            <div className="reviews-right">
              <div className="stars" aria-label="Hodnocení 5 z 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} />
                ))}
              </div>
              <span className="reviews-count">13 reviews</span>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="line reveal" style={{ '--d': '0.15s' } as CSSProperties}>
              Získejte web,
            </span>
            <span
              className="line line-two reveal"
              style={{ '--d': '0.28s' } as CSSProperties}
            >
              který
              <span
                className="rotator"
                aria-live="polite"
                aria-label={WORDS[idx % WORDS.length].trim()}
              >
                {/* Invisible sizer keeps the max word width reserved */}
                <span className="rot-sizer" aria-hidden="true">{'\u00a0konvertuje\u00a0'}</span>
                {/* Clipping viewport — height = one word */}
                <span className="rot-viewport">
                  <span
                    className="rot-track"
                    ref={trackRef}
                    style={{
                      transform: `translateY(${translateY}px)`,
                      transition: noTrans
                        ? 'none'
                        : `transform ${SLIDE_MS}ms cubic-bezier(0.45,0,0.55,1)`,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                  >
                    {allWords.map((w, i) => (
                      <span key={i} className="rot-item accent">{w}</span>
                    ))}
                  </span>
                </span>
              </span>
            </span>
          </h1>

          <p className="hero-sub reveal" style={{ '--d': '0.42s' } as CSSProperties}>
            Stavíme <strong>důvěryhodné</strong> weby pro firmy na celém spektru trhu.
          </p>

          <div className="reveal" style={{ '--d': '0.54s' } as CSSProperties}>
            <a href="#contact" className="btn btn-primary hero-btn">
              Získat cenový návrh zdarma
              <ArrowRight size={10} />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-node-id="0:2148">
          <div className="hero-visual-inner">
            {/* Echo outlines above the diagonal edge (Figma 0:2149–0:2164) */}
            <svg
              className="hero-echoes"
              viewBox="0 0 663.564 619.965"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {[9, 21, 33, 45, 57, 69].map((o, i) => (
                <path
                  key={o}
                  d={HERO_SHAPE_PATH}
                  transform={`translate(0 ${-o})`}
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                  style={{ '--echo-i': i } as CSSProperties}
                />
              ))}
            </svg>
            {/* Notch-clipped shape */}
            <div className="hero-shape">
              <div className="hero-img-wrap">
                <Image
                  src={heroVisual}
                  alt="Tým nosleephouse na veletrhu"
                  fill
                  priority
                  className="hero-img"
                  sizes="(max-width: 980px) 100vw, 54vw"
                />
              </div>
            </div>
            {/* clip-path definition */}
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
              <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                  <path d={HERO_CLIP_PATH} />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span
            className="hero-badge badge-projects reveal"
            style={{ '--d': '0.7s' } as CSSProperties}
          >
            <strong>150+</strong>&nbsp;realizovaných projektů od roku 2019
          </span>
          <span
            className="hero-badge badge-team reveal"
            style={{ '--d': '0.8s' } as CSSProperties}
          >
            <strong>8</strong>&nbsp;seniorních odborníků v týmu
          </span>
        </div>
      </div>
    </section>
  );
}
