# nosleephouse™ — Design System

## Color Tokens
```
--teal:       #1a2f2f   (primary bg — dark forest teal)
--ink:        #141414   (near-black alt bg)
--green:      #b2fb58   (lime accent — CTAs, hover states, badges)
--green-hover:#c4ff77
--white:      #ffffff
--cream:      #f7f5ee
--grey:       #6b7280
--shark:      #2c2f31
--card:       #ffffff
--line:       rgba(255,255,255,0.10)
--line-strong:rgba(255,255,255,0.16)
```

## Typography Scale
- **Display**: clamp(40px,6vw,80px) / Inter 400 / letter-spacing -0.04em
- **H1**: clamp(38px,4.6vw,64px) / Inter 400 / -0.04em
- **H2**: clamp(28px,3.6vw,48px) / Inter 400 / -0.03em
- **H3**: clamp(24px,2.4vw,36px) / Inter 400 / -0.02em
- **Label**: 11px / Inter 600 / 0.10em / UPPERCASE
- **Body**: clamp(16px,1.4vw,20px) / Helvetica Neue / line-height 1.65
- **Serif accent**: Instrument Serif italic, 1.1–1.16em relative, used sparingly in headings

## Elevation / Shadows
- Cards hover: `0 40px 80px -40px rgba(0,0,0,0.6)`
- Testimonial hover: `0 30px 60px -35px rgba(0,0,0,0.7)`

## Motion
- Ease curve: `cubic-bezier(0.16,1,0.3,1)` (ease-out-expo)
- Reveal: opacity+translateY(30px), 0.85s
- Reveal-scale: opacity+translateY(30px)+scale(0.97), 0.9s
- Image hover zoom: scale(1.05), 0.85s

## Layout
- Container: max-width 1232px, gutter clamp(20px,4.6vw,48px)
- Section padding: clamp(64px,8vw,112px) block

## Component Patterns
- **Cards**: white bg on dark teal/ink, border-radius 2px, overflow hidden
- **Buttons**: 
  - `.btn-primary`: --green bg, --teal text, no border
  - `.btn-outline`: transparent, --green border+text on dark; --ink-line border on light
- **Badges**: white bg, ink text, 10px caps, 2px radius — for "Případová studie"
- **Reveal**: `.reveal` (translateY), `.reveal-scale` (scale+translateY), `.reveal-img` (clip-path wipe)
- **Section sections**: alternate teal ↔ ink backgrounds

## Section Order (home page)
Header → Hero → LogosMarquee → Services → WhyWeb → Portfolio → Features → Testimonials → About → ContactCTA → Footer
