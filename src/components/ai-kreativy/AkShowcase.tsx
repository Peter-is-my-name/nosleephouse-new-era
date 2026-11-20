'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import ToFormButton from '../funnel/ToFormButton'
import { PlayIcon, SoundIcon } from '../funnel/Icons'
import { VIDEOS, src, poster, type AiVideo } from './videos'
import { rich } from '@/lib/rich'
import type { Locale } from '@/lib/i18n'
import type { CreativesCopy } from '@/lib/funnel/types'
import './AkShowcase.css'

/**
 * Proof wall: real AI ads in phone frames. Videos load nothing until used
 * (preload="none" + poster), hover plays a muted preview on desktop, a click
 * plays with sound and pauses every other card, so only one ever has audio.
 */
type VideoText = CreativesCopy['showcase']['videos'][number]

function VideoCard({
  v,
  t,
  ui,
  locale,
  index,
  active,
  onActivate,
}: {
  v: AiVideo
  t: VideoText
  ui: CreativesCopy['showcase']
  locale: Locale
  index: number
  active: boolean
  onActivate: (i: number | null) => void
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [started, setStarted] = useState(false)

  const play = (withSound: boolean) => {
    const el = ref.current
    if (!el) return
    el.muted = !withSound
    setMuted(!withSound)
    setStarted(true)
    el.play().catch(() => {})
  }

  const onClick = () => {
    const el = ref.current
    if (!el) return
    if (active && !el.paused && !muted) {
      el.pause()
      onActivate(null)
      return
    }
    onActivate(index)
    play(true)
  }

  // When another card takes over, this one stops and goes back to muted.
  useEffect(() => {
    const el = ref.current
    if (!active && el && !el.paused && !el.muted) {
      el.pause()
      el.muted = true
      setMuted(true)
    }
  }, [active])

  const onEnter = () => {
    if (active) return
    if (window.matchMedia('(hover: hover)').matches) play(false)
  }
  const onLeave = () => {
    if (active) return
    const el = ref.current
    if (el && muted) {
      el.pause()
    }
  }

  return (
    <article
      className="ak-vcard reveal-scale"
      data-active={active || undefined}
      style={{ '--d': `${(index % 4) * 0.06}s` } as CSSProperties}
    >
      <button
        type="button"
        className="ak-vphone"
        onClick={onClick}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        aria-label={ui.playAria.replace('{brand}', v.brand).replace('{format}', t.format)}
      >
        <video
          ref={ref}
          src={src(v, locale)}
          poster={poster(v, locale)}
          preload="none"
          playsInline
          loop
          muted
        />
        {!(active && !muted) && (
          <span className={`ak-vplay${started ? ' is-small' : ''}`} aria-hidden="true">
            <PlayIcon size={started ? 14 : 20} />
            {!started && <span className="ak-vplay-label">{ui.play}</span>}
          </span>
        )}
        {active && !muted && (
          <span className="ak-vsound" aria-hidden="true">
            <SoundIcon muted={false} size={15} />
          </span>
        )}
        {v.demo && <span className="ak-vdemo">{ui.demoTag}</span>}
      </button>
      <div className="ak-vmeta">
        <span className="ak-vformat">{t.format}</span>
        <h3 className="ak-vbrand">{v.brand}</h3>
        <p className="ak-vhook">{t.hook}</p>
        <p className="ak-vtext">{t.text}</p>
      </div>
    </article>
  )
}

export default function AkShowcase({ c, locale }: { c: CreativesCopy['showcase']; locale: Locale }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section className="fn-section ak-showcase" id="ukazky">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />

        <div className="ak-vgrid">
          {VIDEOS.map((v, i) => (
            <VideoCard
              key={v.file}
              v={v}
              t={c.videos[i]}
              ui={c}
              locale={locale}
              index={i}
              active={active === i}
              onActivate={setActive}
            />
          ))}
        </div>

        <p className="ak-vnote reveal">
          {c.note}
        </p>

        <div className="fn-cta reveal">
          <ToFormButton label={c.cta} />
          <span className="fn-cta-note">{c.ctaNote}</span>
        </div>
      </div>
    </section>
  )
}
