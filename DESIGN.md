# Design

## Visual Theme

Editorial premium, light-dominant, warm and airy, with deliberate asymmetry and generous negative space. Two "drenched" charcoal sections (the Contrast block and the final CTA) provide drama against the ivory canvas. The mood is a high-end print studio: warm paper, confident serif headlines, restrained apricot accents. Explicitly NOT a dark agency template and NOT the cluttered multicolor predecessor.

Color strategy: **Committed.** Apricot (#fca46a) is the load-bearing signature accent; warm charcoal grounds; ivory breathes. Every neutral is tinted warm. No pure `#000` / `#fff`.

Theme rationale (scene): a course author, ~36, evaluating on a laptop in a bright, ordered office whether this studio is premium enough for her. The scene forces light + warm + airy, not dark.

## Color Palette (OKLCH)

| Token | OKLCH | Role |
|---|---|---|
| `--canvas` | `oklch(0.985 0.008 75)` | Ivory background (warm, from white) |
| `--surface` | `oklch(0.975 0.012 70)` | Cards / panels |
| `--peach-tint` | `oklch(0.95 0.03 60)` | Warm section background to isolate blocks |
| `--ink` | `oklch(0.27 0.012 350)` | Primary text (from brand #3b3335, not #000) |
| `--ink-soft` | `oklch(0.42 0.012 350)` | Secondary text |
| `--muted` | `oklch(0.58 0.010 350)` | Meta, eyebrows, labels |
| `--accent` | `oklch(0.79 0.12 57)` | Apricot #fca46a — signature, <12% of light surfaces |
| `--accent-strong` | `oklch(0.62 0.14 45)` | Terracotta — links / hover on light bg (AA-safe) |
| `--line` | `oklch(0.27 0.012 350 / 0.12)` | Hairline separators |
| `--charcoal-bg` | `oklch(0.24 0.012 350)` | Drenched sections |
| `--on-charcoal` | `oklch(0.96 0.01 75)` | Text on charcoal |

Source brand swatch: `#fca46a`, `#3b3335`, `#ffffff`, `#000000` (from brief). Apricot reserved for large type, accents, surfaces; never small body text on light.

## Typography

- **Display / headlines:** **Gloock** (Google Fonts, OFL). High-contrast editorial serif, feminine and premium, warm enough, distinctive. Used large only.
- **Body / UI / labels:** **Hanken Grotesk** (Google Fonts variable, OFL). Warm humanist sans, friendly-professional. Weights 400/500/600.
- Deliberately avoids reflex-reject defaults (Fraunces, Inter, Playfair, Cormorant, DM, Plus Jakarta) to stay off the AI-monoculture.
- Eyebrows: Hanken Grotesk, uppercase, `letter-spacing: 0.14em`, `--muted`.
- Scale: fluid `clamp()`, ratio ≥1.25. Body 18–19px, line-height 1.6, measure 60–72ch. Headlines on charcoal get +0.05 line-height.

## Components

- **Button** — primary (apricot fill, ink text) / on-charcoal (apricot fill) / secondary (ink outline). Magnetic hover, underline-grow on text links.
- **Eyebrow** — uppercase tracked label, optional leading hairline.
- **SectionHeading** — Gloock display + optional Hanken kicker.
- **Bullet** — fine apricot marker (no side-stripe borders).
- **PortfolioItem** — image with clip-path reveal, hover zoom + title overlay.
- **LogoMarquee** — continuous slow loop of client logos.
- **PackageCard** — 3 tiers, GROWTH elevated + "Recomandat" tag; old price struck discreetly. Not an identical card grid.
- **TestimonialCard** — styled like an authentic FB recommendation screenshot.
- **FAQItem** — minimal accordion, `grid-template-rows` transition.
- **VideoPlayer** — VSL placeholder (poster + custom play button) until the file is hosted/compressed.
- **CalendlyButton** — popup widget with `<a href>` fallback.

## Layout

- 12-col grid, max content ~1200px, but hero / portfolio / drenched sections go full-bleed. Don't wrap everything in a container.
- Asymmetric compositions; left-aligned editorial over centered stacks. Vary vertical rhythm (sections 96–160px desktop) via `clamp()`.
- Radius: 4px small, 16px medium, 24px media/video. Warm, diffuse, low-opacity shadows (never pure black).

## Motion

- Reveal on enter: opacity + translateY 16–24px, stagger 60–80ms, ease-out-expo. No bounce, no elastic.
- Never animate layout properties; use transform/opacity/clip-path.
- Signature: thin apricot arc/line motif between sections, drawn via `stroke-dashoffset` on scroll.
- Scroll-linked: contrast columns "ignite", process progress line draws, portfolio clip-path reveals, logo marquee loop.
- All motion gated by `prefers-reduced-motion: reduce`.
