import Image from 'next/image';
import { ArrowRight } from './icons';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <h2 className="about-heading reveal">
            S weby
            <br />
            máme <span className="accent">přes 8 let</span>
            <br />
            zkušeností
          </h2>
          <p className="about-text reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
            U každého projektu klademe důraz hlavně na <strong>vztah s klientem</strong>. Za každou
            firmou totiž stojí lidé, jako jsme my. Jsme nosleephouse™, malý tým s velkými
            zkušenostmi.
          </p>
          <div className="reveal" style={{ '--d': '0.2s' } as React.CSSProperties}>
            <a href="#about" className="btn btn-outline">
              Zjistit více o nosleephouse
              <ArrowRight size={10} />
            </a>
          </div>
        </div>

        <div className="about-visual reveal-scale" style={{ '--d': '0.15s' } as React.CSSProperties}>
          <div className="about-photo">
            <Image
              src="/assets/about/team.jpg"
              alt="Tým nosleephouse"
              width={920}
              height={614}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
