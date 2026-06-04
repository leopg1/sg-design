---
name: SG Design — Dark Studio
description: Identitate vizuală premium pentru autori de cursuri, în registru dark cu un singur accent roșu corporativ.
colors:
  accent: "oklch(0.605 0.215 26)"
  accent-soft: "oklch(0.66 0.2 28)"
  accent-strong: "oklch(0.72 0.185 30)"
  canvas: "oklch(0.155 0.004 285)"
  surface: "oklch(0.205 0.005 285)"
  surface-2: "oklch(0.245 0.006 285)"
  charcoal: "oklch(0.115 0.004 285)"
  charcoal-soft: "oklch(0.19 0.005 285)"
  ink: "oklch(0.97 0.002 285)"
  ink-soft: "oklch(0.78 0.004 285)"
  muted: "oklch(0.6 0.006 285)"
  line: "oklch(0.97 0.002 285 / 0.1)"
  line-strong: "oklch(0.97 0.002 285 / 0.2)"
typography:
  display:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.022em"
  title:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.12
  body:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "18px"
  media: "24px"
spacing:
  section: "clamp(2.75rem, 5.5vw, 5rem)"
  section-lg: "clamp(3.5rem, 7vw, 6.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-soft}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
  button-on-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
  card-featured:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
---

# Design System: SG Design — Dark Studio

## 1. Overview

**Creative North Star: "The Dark Studio"**

A premium design studio with the lights down and a single red lamp burning. The surface is neutral near-black; the only chroma on the entire page is one corporate red, used as signal, not decoration. The page itself is the portfolio, so every element must read as deliberate and confident: dense where it earns density, restrained everywhere else. The voice is technical, modern, and self-assured, an agency that knows its worth.

This system is a deliberate dark re-skin built on the structure of the Xable "dark digital agency" template, translated for an identity studio. Neutrals are kept genuinely neutral (a faint cool cast at hue 285, never warm/brown) so the red stays clean and never drifts toward maroon. Type is a single grotesk family carried by weight contrast, not a serif. Depth comes from near-black tonal layering plus a soft red glow under interactive elements.

It explicitly rejects: the warm-ivory editorial predecessor (apricot + Gloock serif), any brown or maroon cast in the neutrals, the cluttered multicolor Gamma site, generic gradient-on-white SaaS clichés, and AI-slop card grids. One accent, one job.

**Key Characteristics:**
- Neutral near-black canvas (cool, hue 285, chroma ≤ 0.006) — never warm or brown.
- One corporate red accent carries every signal: CTA, recommended price, markers, links.
- Single sans family (Hanken Grotesk), hierarchy through weight (800 vs 400) and scale.
- Tonal layering for depth; red glow for interactive lift.
- Tech-leaning radii (6px buttons, 10px cards), not soft-rounded.

## 2. Colors

A drenched dark palette: neutral near-black surfaces with a single saturated red as the lone voice.

### Primary
- **Signal Red** (`oklch(0.605 0.215 26)`): The load-bearing accent and the only chroma on the page. Used for primary CTA fills, the recommended (Growth) price card, eyebrow markers, list bullets, checkmarks, and the hero glow. Its scarcity against the black is the entire mechanic.
- **Signal Red Soft** (`oklch(0.66 0.2 28)`): Hover state for the primary button and the lighter stop of the featured-card gradient.
- **Signal Red Strong** (`oklch(0.72 0.185 30)`): The text-safe red. Used for links, link hover on text, and the eyebrow label, where a lighter, brighter red holds contrast on the near-black canvas.

### Neutral
- **Ink White** (`oklch(0.97 0.002 285)`): Primary text and the text/CTA color that sits on red surfaces. Near-white, faintly cool, never `#fff`.
- **Ink Soft** (`oklch(0.78 0.004 285)`): Secondary text, body paragraphs in supporting roles.
- **Muted** (`oklch(0.6 0.006 285)`): Meta, eyebrows fallback, captions, struck-through old prices.
- **Canvas Black** (`oklch(0.155 0.004 285)`): The dominant page background. Neutral near-black with a faint cool cast.
- **Surface** (`oklch(0.205 0.005 285)`): Default panels and the standard (non-featured) pricing cards, lifted one step off the canvas.
- **Surface 2** (`oklch(0.245 0.006 285)`): Highest tonal step for nested or hovered surfaces.
- **Charcoal / Charcoal Soft** (`oklch(0.115 / 0.19 ... 285)`): The "drenched" deepest blocks (marquee, contrast section, urgency, final CTA) that go darker than the canvas for drama.
- **Line / Line Strong** (`oklch(0.97 0.002 285 / 0.1 → 0.2)`): Hairline separators and stronger dividers, expressed as low-opacity white over the dark.

### Named Rules
**The One Lamp Rule.** Red is the only hue on the page. If a second chroma appears anywhere (a blue, a green, a warm brown drift in the neutrals), it is a bug. Neutrals stay at chroma ≤ 0.006, hue 285.

**The No-Maro Rule.** Neutrals are cool-neutral (hue 285), never warm (hue 22–75). A brown or maroon cast in the background is forbidden; it muddies the red and kills the Xable crispness.

## 3. Typography

**Display Font:** Hanken Grotesk Variable (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk Variable (same family)
**Label Font:** Hanken Grotesk Variable (same family, uppercase tracked)

**Character:** A single warm-humanist grotesk doing all the work, leaning technical through heavy weights and tight tracking. No serif, no second family. The contrast that used to come from a display serif now comes entirely from weight (800 headings against 400 body) and scale.

### Hierarchy
- **Display** (800, `clamp(2rem, 4.6vw, 3.6rem)`, line-height 1.04, tracking -0.022em): Section headlines and the hero. Heavy and tight, the Xable signature.
- **Title** (800, `clamp(1.5rem, 3vw, 2.15rem)`, line-height 1.12): USP rows, card names, subsection heads.
- **Body** (400, 1.0625rem, line-height 1.65): Paragraphs and list copy. Measure capped at ~64ch (`.measure`).
- **Label** (700, 0.76rem, tracking 0.18em, uppercase): Eyebrows and meta labels, paired with a leading red dot.

### Named Rules
**The Weight-Not-Family Rule.** Hierarchy is built from weight and size inside one family, never from a second typeface. An 800 heading over 400 body is the contrast; do not reach for a serif.

## 4. Elevation

This system uses tonal layering as the primary depth cue, with shadows and a red glow reserved for interactive lift. Surfaces step up from Canvas Black (0.155) to Surface (0.205) to Surface 2 (0.245); the "drenched" charcoal blocks step down to 0.115 for drama. Shadows are neutral black (never tinted), and the one piece of color depth is the red glow under buttons and the featured card.

### Shadow Vocabulary
- **Warm-sm** (`0 2px 10px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.5)`): Resting lift on default cards and the scrolled header. (Name is legacy; the value is now neutral black.)
- **Warm** (`0 24px 60px -28px oklch(0 0 0 / 0.65), 0 6px 16px -10px oklch(0 0 0 / 0.5)`): Hover lift on cards and buttons.
- **Warm-lg** (`0 50px 110px -40px oklch(0 0 0 / 0.8)` + 1px inner white hairline): The VSL video frame and the featured card base.
- **Glow Accent** (`0 18px 50px -18px oklch(0.605 0.215 26 / 0.55)`): The signature red glow under primary buttons and the Growth card. The only colored shadow.

### Named Rules
**The Tonal-First Rule.** Depth comes from stepping lightness within hue 285, not from heavy shadows. Reserve the red glow for things you can click.

## 5. Components

### Buttons
- **Shape:** Tech radius, 6px (`{rounded.sm}`), not pill or soft-round.
- **Primary:** Signal Red fill, Ink White text, weight 700, with the red glow. The default CTA everywhere.
- **Hover / Focus:** Lifts 2px, background shifts to Signal Red Soft, glow plus a neutral hover shadow stack. Focus-visible: 2px Signal Red Strong outline, 3px offset.
- **Outline (secondary):** Transparent with a Line Strong border and Ink White text. Hover shifts the border to Signal Red and adds a 6% white wash; on drenched sections the border starts more visible and hover tints red.
- **On-Accent (CTA inside the red featured card):** Inverted, Ink White fill with Signal Red text, so it reads against the red drench.

### Cards / Containers
- **Corner Style:** 10px (`{rounded.md}`); media/video 24px.
- **Background:** Default cards use Surface; the featured (Growth) card is a Signal Red → Signal Red Soft gradient drench.
- **Shadow Strategy:** Default cards rest on Warm-sm; the featured card carries Glow Accent. Hover lifts 1.5px.
- **Border:** Default cards ring 1px in Line; hover ring shifts toward red (`hover:ring-accent/60`). No side-stripe borders.
- **Internal Padding:** 1.75rem (p-7).

### Pricing (signature)
Three tiers, the middle (Growth) elevated and red-drenched with a white "RECOMANDAT" badge, white checkmarks, and a white (On-Accent) CTA. Side cards stay on Surface with red checkmarks and outline CTAs. The red card is the visual climax of the page, the Xable highlight pattern.

### Navigation
Fixed transparent header that, once scrolled, gains an 85% canvas background, blur, a Line bottom border, and Warm-sm shadow. Links are Ink Soft, hover to Ink White. CTA is a compact primary (red) button. Mobile: full-screen blurred overlay menu, links scale up to display size.

### Eyebrow (signature)
Uppercase tracked label in Signal Red Strong, preceded by a small Signal Red dot with a soft red halo ring. Replaces the old apricot leading-hairline.

## 6. Do's and Don'ts

### Do:
- **Do** keep every neutral at hue 285, chroma ≤ 0.006. The background is cool near-black.
- **Do** use Signal Red as the only chroma, for CTA fills, the Growth card, markers, and links.
- **Do** put Ink White text on red surfaces and the white On-Accent button inside the red card.
- **Do** build heading hierarchy from weight (800) and scale within Hanken Grotesk.
- **Do** reserve the red glow (`Glow Accent`) for clickable elements only.
- **Do** use full borders and tonal layering; ring-shift to red on hover.

### Don't:
- **Don't** let the neutrals drift warm. No brown, no maroon, no apricot cast in the background (`oklch ... 22` / `... 60` / `... 75` on a surface is a bug). This is the No-Maro Rule.
- **Don't** reintroduce the warm-ivory predecessor: no apricot accent, no Gloock or other serif display.
- **Don't** add a second accent hue. One lamp only.
- **Don't** put dark `ink` text on a red fill (it was the old warm-ivory logic); red surfaces take Ink White.
- **Don't** use `#000` or `#fff`; the darkest black is `oklch(0.115 ... 285)`, the lightest white `oklch(0.97 ... 285)`.
- **Don't** use side-stripe borders, gradient text, or identical icon-heading-text card grids.
- **Don't** echo the cluttered multicolor Gamma site or generic gradient-on-white SaaS clichés.
