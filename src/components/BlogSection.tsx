'use client'
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import './BlogSection.css';

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="var(--teal)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="11" height="20" viewBox="0 0 9 16" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M8 1 1 8l7 7' : 'M1 1l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const POSTS = getAllPosts();

export default function BlogSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [gap, setGap] = useState(24);
  const [cardW, setCardW] = useState(288);
  const [maxIndex, setMaxIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Bounded (non-looping) carousel: up to 4 cards visible, scrolls one at a time
  // and stops at both ends.
  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const w = vp.clientWidth;
    const visible = w >= 860 ? 4 : w >= 620 ? 3 : w >= 440 ? 2 : 1;
    const g = w >= 560 ? 24 : 16;
    const cw = visible === 1 ? Math.round(w * 0.86) : Math.round((w - (visible - 1) * g) / visible);
    const maxI = Math.max(0, POSTS.length - visible);
    const idx = Math.min(index, maxI);
    setGap(g);
    setCardW(cw);
    setMaxIndex(maxI);
    setTranslate(-idx * (cw + g));
    if (idx !== index) setIndex(idx);
    setReady(true);
  }, [index]);

  useEffect(() => { measure(); }, [measure]);
  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure]);

  const go = (dir: number) => setIndex((i) => Math.min(Math.max(0, i + dir), maxIndex));

  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  return (
    <section className="blog" aria-labelledby="blog-heading">
      <div className="container">
        <div className="blog-head">
          <h2 className="blog-title reveal" id="blog-heading">
            Přečtěte si náš <span className="accent">blog</span>
          </h2>
          <Link href="/blog" className="btn btn-outline blog-readall">
            Číst všechno
          </Link>
        </div>
      </div>

      <div className="container">
        <div className={`blog-viewport${ready ? ' is-ready' : ''}`} ref={viewportRef}>
          <div
            className="blog-track"
            style={{
              transform: `translate3d(${translate}px, 0, 0)`,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              gap: `${gap}px`,
            }}
          >
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                style={{ width: `${cardW}px` }}
              >
                <div className="blog-card-media">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 560px) 86vw, (max-width: 1100px) 40vw, 24vw"
                  />
                  <span className="blog-card-badge" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="blog-card-author">{post.author}</span>
                    <span className="blog-card-dot" aria-hidden="true" />
                    <time className="blog-card-date" dateTime={post.date}>
                      {post.dateLabel}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blog-nav">
          <button
            type="button"
            className="blog-arrow"
            onClick={() => go(-1)}
            disabled={atStart}
            aria-label="Předchozí články"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className="blog-arrow"
            onClick={() => go(1)}
            disabled={atEnd}
            aria-label="Další články"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
