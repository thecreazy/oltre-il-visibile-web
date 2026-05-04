# Oltre il Visibile

A static, SEO-first, award-level website for the travelling fine art nude exhibition **Oltre il Visibile** (Milan · Rome · London, 2026 — 2027).

White gallery × brutalist editorial. Static-first. Bilingual (Italian / English). Designed and engineered as a piece in itself.

---

## Stack

- **Astro 4** — static-first, zero-by-default JS, built-in View Transitions
- **TypeScript (strict)**
- **Tailwind CSS** with a hand-built editorial design system (Cormorant Garamond + Inter + JetBrains Mono)
- **Astro Content Collections** (zod-typed) for photographers, models, exhibitions
- **GSAP + ScrollTrigger** for scroll-triggered reveals, parallax, magnetic buttons
- **Astro View Transitions** for overlay-based page transitions
- **@astrojs/sitemap** with hreflang IT/EN
- **MDX** ready
- 100% static, no backend

---

## Getting started

```bash
# Node 18+ required
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
npm run preview  # serve the build
npm run check    # astro + typescript check
```

Default route is `/` which redirects to `/it`. The two language roots are `/it` and `/en`.

---

## Routes

```
/                                 root, redirects to /it
/it,  /en                         home
/it/manifesto,                  /en/manifesto
/it/exhibitions,                /en/exhibitions
/it/exhibitions/milano          /en/exhibitions/milan
/it/exhibitions/roma            /en/exhibitions/rome
/it/exhibitions/london          /en/exhibitions/london
/it/photographers               /en/photographers
/it/photographers/[slug]        /en/photographers/[slug]
/it/models                      /en/models
/it/models/[slug]               /en/models/[slug]
/it/partners                    /en/partners
/it/press                       /en/press
/it/contact                     /en/contact
```

The `<LanguageSwitcher>` and the `<Seo>` component compute the alternate-language URL for each page (including the IT/EN city slug map for exhibitions).

---

## Project layout

```
src/
├── components/         reusable + page-level Astro components
├── content/            content collections (zod-typed JSON)
│   ├── config.ts       schemas
│   ├── exhibitions/    milan.json, rome.json, london.json
│   ├── photographers/  elena-marchetti.json, thomas-keller.json
│   └── models/         aria-fontana.json, nikolas-veit.json
├── i18n/               UI strings + routing helpers
├── layouts/            BaseLayout
├── pages/
│   ├── index.astro     soft redirect to /it
│   ├── it/             italian routes (mirror of en/)
│   └── en/             english routes
├── styles/             global.css (design system + animations)
└── utils/
    ├── data.ts         partners, staff, manifesto, press kit
    ├── seo.ts          SEO builder with hreflang
    └── animations.client.ts  GSAP boot
```

---

## Reusable components

`BaseLayout`, `Seo`, `Header`, `Footer`, `LanguageSwitcher`, `PageTransition`, `AnimatedLink`, `MagneticButton`, `RevealText`, `ParallaxImage`, `NewsletterForm`, `ArtistCard`, `ModelCard`, `ExhibitionCard`, `GalleryGrid`, `ManifestoBlock`, `PressKitBlock`, `Marquee`.

Page-level components live next to the small route files that import them, so each language pair stays a thin shell:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import HomePage from '@components/HomePage.astro';
---
<BaseLayout lang="it" title="…" description="…">
  <HomePage lang="it" />
</BaseLayout>
```

---

## Content model

Content collections use bilingual `{ it, en }` shapes for any field that needs translation. Cities have separate `slug_it` / `slug_en` so URLs read naturally in both languages.

Adding a new exhibition: drop a JSON file in `src/content/exhibitions/`, then create the two route files at `src/pages/it/exhibitions/<slug_it>.astro` and `src/pages/en/exhibitions/<slug_en>.astro`.

Adding a photographer or model: just drop a JSON file. The `[slug].astro` dynamic routes pick it up automatically via `getStaticPaths()`.

---

## Design system

Colors:

- `paper`  `#F5F3EE` (default background)
- `bone`   `#EDEAE2` (alt background)
- `ink`    `#0A0A0A` (text, dark sections)
- `smoke`  `#5A5752` (secondary text)
- `mist`   `#9A968E` (tertiary)

Type:

- **Cormorant Garamond** for editorial titles (italic, extralight)
- **Inter** for body
- **JetBrains Mono** for eyebrows, metadata, UI

Layout: 12-column editorial grid with asymmetric placement, generous whitespace, hairline rules.

---

## Animations

All animations are gated on `prefers-reduced-motion: reduce`. With JS disabled, content remains fully visible (the reveal CSS only applies once `html.has-js` is set by JS).

- Page transitions via Astro's built-in View Transitions API + a 6-bar editorial overlay
- Scroll-triggered text reveal (`data-reveal`, `data-reveal-line`)
- Parallax images (`data-parallax`)
- Hover effects on cards (`tilecard`)
- Magnetic buttons (`data-magnetic`)
- Animated overlay menu on mobile/tablet
- Subtle custom cursor (only on `hover: hover` devices)

---

## SEO

- Per-page `<title>`, `<meta description>`, keywords
- Open Graph + Twitter cards with a 1200×630 SVG OG image
- `hreflang` IT/EN/x-default on every page
- Canonical URLs
- `@astrojs/sitemap` with locale config (generates `sitemap-index.xml` + `sitemap-0.xml`)
- `robots.txt`
- JSON-LD `EventSeries` per page
- Semantic HTML, alt text on imagery, proper heading order
- Clean, trailing-slash-free URLs

Italian keywords: *mostra fine art nude, mostra fotografica Milano, fotografia artistica corpo*.
English keywords: *fine art nude exhibition, fine art photography exhibition, nude photography London*.

---

## Performance notes

- Astro ships zero JS by default; the GSAP island is a single `<script>` tag in `BaseLayout`
- View-transitions reuses the GSAP boot across navigation (idempotent re-init)
- Fonts are loaded with `font-display: swap`
- The "image plates" used in the gallery are pure CSS / typographic — when real photographs are wired in, swap `<ParallaxImage>` for `<Image>` from `astro:assets` to get automatic optimization
- No external trackers, no third-party widgets

---

## Replacing placeholders with real photography

This site is delivered with a typographic placeholder for every image (a cover letter / number on a tinted plate), so it can be deployed before the photographs are public. To wire in real images:

1. Place WebP/AVIF assets in `src/assets/photographers/<slug>/...`
2. Replace `<ParallaxImage>` blocks in `GalleryGrid.astro` and `ArtistCard.astro` with Astro's `<Image>` component
3. Keep the parallax behaviour by adding `data-parallax="0.2"` on the image wrapper

---

## Credits

**Concept · Curation:** Sara Lamberti
**Production:** Léa Dubois
**Publishing & prints:** Marco Iervolino
**Website by:** [Riccardo Canella](https://riccardocanella.com)
