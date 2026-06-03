# SG Design — Landing Page

Landing page premium pentru **SG Design** (Georgiana Severin), studio de identitate vizuală nișat pe autori de cursuri. Obiectivul paginii: programarea unui apel de consultanță gratuit pe Calendly.

## Stack

- [Astro](https://astro.build) (output static)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens OKLCH în `src/styles/global.css`)
- Fonturi self-hosted: **Gloock** (display) + **Hanken Grotesk** (text)
- Imagini optimizate automat cu `astro:assets` (WebP/AVIF)

## Rulare

```bash
npm install
npm run dev      # server local pe http://localhost:4321
npm run build    # build static în dist/
npm run preview  # servește build-ul
```

## Structură

- `src/pages/index.astro` — pagina, asamblată din secțiuni
- `src/components/` — componente (Hero, Vsl, Portfolio, Testimonials, Marquee, InkDivider, Button, Eyebrow)
- `src/lib/site.ts` — **tot conținutul și linkurile într-un singur loc** (copy, pachete, Calendly, contact)
- `src/styles/global.css` — design tokens + animații
- `PRODUCT.md` / `DESIGN.md` — context strategic și sistemul de design

## De completat înainte de lansare

Editează `src/lib/site.ts`:

- `vsl.embedUrl` — link de embed pentru VSL (Vimeo / YouTube / Cloudflare Stream). Gol = se afișează placeholder-ul, iar butonul play deschide Calendly.
- `brand.email` — adresa de contact reală (acum e placeholder).
- `footer.legal` — paginile Termeni / Confidențialitate (stub-uri în `src/pages/`).

## Deploy

Build static, compatibil cu Vercel, Netlify sau Cloudflare Pages (fără backend).
