# Gurpreet Singh Sahni — Portfolio

A premium, animated personal portfolio for Gurpreet Singh Sahni, Cloud Architect, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP-ready structure, Lenis smooth scroll, and a three.js network-topology hero visual.

## Design system

- **Palette** — `#050505` base, glass panels at low-opacity white, violet `#7c5cff` → blue `#4c8dff` gradient accent, a sparing cyan `#63e6e2` for live-status accents.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels, data, timestamps — a nod to terminal output).
- **Signature element** — the hero background is a slowly rotating node/edge graph (`components/ui/NetworkField.tsx`), a literal cluster-topology visual since the subject is a Kubernetes/AWS architect, not a generic particle field.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens, glass/glow/noise/grid utilities
components/
  layout/            Navbar, Footer, Loader, ScrollProgress, CursorGlow, SmoothScroll (Lenis)
  sections/           Hero, About, Skills, Experience, Projects, Certifications, TechStack, Contact
  ui/                 GlowCard (3D tilt), MagneticButton, SectionHeading, AnimatedCounter, NetworkField
lib/
  data.ts             Single source of truth for all real content
  utils.ts            cn() class helper
```

## Before deploying

1. Drop a real headshot / OG image into `public/` if you want one (none is included — none was supplied).
2. Add `public/resume.pdf` — the "Download Resume" button links to `/resume.pdf`.
3. Update `profile.email`, `profile.linkedin`, and `profile.github` in `lib/data.ts` with real URLs.
4. Wire the contact form in `components/sections/Contact.tsx` to a real endpoint (e.g. Resend, Formspree, or an API route) — it currently simulates a send for demo purposes.
5. Swap `metadataBase` in `app/layout.tsx` to your real domain.

## Notes

- Respects `prefers-reduced-motion` throughout (loader, cursor glow, network field all short-circuit).
- All animation is scroll-triggered with `viewport={{ once: true }}` so it never re-fires disruptively.
- Lighthouse-friendly: fonts are self-hosted via `next/font`, heavy visuals (three.js network field) are dynamically imported client-side only.
