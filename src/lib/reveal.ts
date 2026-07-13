import { useEffect } from 'react';

/**
 * Global scroll-reveal. Observes every element carrying the `reveal` or
 * `reveal-scale` class and toggles `is-visible` once it enters the viewport.
 * Elements can set a `--d` custom property (inline style) for a stagger delay.
 * Respects prefers-reduced-motion (CSS forces them visible).
 */
export function useReveal(): void {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-scale, .reveal-img')
    ).filter((el) => !el.classList.contains('is-visible'));

    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    // Deterministic first pass: anything already within the viewport on load
    // is revealed immediately (avoids relying on the observer's async initial
    // delivery, which can be flaky). The observer then handles the rest on scroll.
    const revealInView = () => {
      const vh = window.innerHeight;
      for (const el of els) {
        if (el.classList.contains('is-visible')) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      }
    };
    requestAnimationFrame(revealInView);
    // second pass once web fonts settle & layout shifts
    const t = window.setTimeout(revealInView, 250);

    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}

/**
 * Lightweight parallax: translates elements with [data-parallax] on scroll.
 * The attribute value is the speed factor (e.g. -0.08).
 */
export function useParallax(): void {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    );
    if (nodes.length === 0) return;

    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      for (const el of nodes) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - vh / 2) / vh; // -1..1 through viewport
        const speed = parseFloat(el.dataset.parallax || '0');
        el.style.transform = `translate3d(0, ${offset * speed * 100}px, 0)`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
