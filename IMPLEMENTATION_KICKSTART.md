# IMPLEMENTATION KICKSTART — Ironclad Performance Landing Page

A single-page, dark-themed, conversion-focused landing page for a 12-week performance
program aimed at busy professionals, plus a dedicated contact page. This document is the
source of truth for the build: it folds in every confirmed decision and defines the full
design token system, palette, typography, spacing, glass effects, and component architecture.

---

## 1. Product Summary

| Item | Decision |
| --- | --- |
| Type | New Next.js (App Router) project |
| Pages | `/` (landing), `/contact` (Contact Marcus) |
| Offer | 12-week performance program, single price ($297) |
| Primary CTA | "Get the Blueprint" — opens a **modal** (placeholder, **no email capture**) |
| CTA frequency | Reused **at least 3×** (header, hero, pricing, final banner, footer) |
| Secondary CTA | "Contact Marcus" → routes to `/contact` page |
| Back to top | Smooth scroll, no email capture |
| State management | None — placeholders only |
| Data | Placeholder stats, testimonials, FAQs (prototype; editable later) |
| Theme | Dark theme everywhere; Electric Emerald used **only** as accent |
| Layout | Full width |

---

## 2. Color Palette & Design Tokens

Dark theme is the base. **Electric Emerald is the single accent** — used for CTAs, key
highlights, stat numerals, active states, and checkmarks. Everything else stays neutral dark.
Contrast is **not yet verified**; the watchlist in §2.5 flags pairings to confirm live and
adjust if needed. Neon Lime is documented as a one-line swap alternative.

### 2.1 Accent

| Token | Value | Use |
| --- | --- | --- |
| `--accent` | `#10b981` (Electric Emerald) | CTA fills, links, stat numerals, icons, focus rings |
| `--accent-hover` | `#34d399` | Hover/active on accent surfaces |
| `--accent-soft` | `rgba(16,185,129,0.12)` | Tints, glows, badge backgrounds |
| `--accent-ring` | `rgba(16,185,129,0.45)` | Featured-card ring, focus outlines |
| _Alt (swap)_ | `#a3e635` (Neon Lime) | Documented alternative; single-value change |

### 2.2 Neutral Dark Scale

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#09090b` | Page background |
| `--surface-1` | `#18181b` | Cards, panels |
| `--surface-2` | `#27272a` | Raised elements, inputs |
| `--border` | `rgba(255,255,255,0.08)` | Hairline borders/dividers |

### 2.3 Text Tiers (adjusted for dark theme)

| Token | Value | Use |
| --- | --- | --- |
| `--text-primary` | `#fafafa` | Headings, key copy |
| `--text-muted` | `#a1a1aa` | Body / supporting copy |
| `--text-faint` | `#71717a` | Captions, footnotes, labels |

### 2.4 Glass Effect Recipe

All cards use a translucent glass treatment.

| Property | Value |
| --- | --- |
| Background | `rgba(255,255,255,0.05)` (light-on-dark frost) |
| Backdrop filter | `blur(14px)` |
| Border | `1px solid rgba(255,255,255,0.10)` |
| Shadow | `0 8px 32px rgba(0,0,0,0.35)` |
| Featured card | Add `--accent-ring` 1px ring + `--accent-soft` inner glow |

CSS utility classes: `.glass-light`, `.glass-medium`, `.glass-dark` (already scaffolded in
`globals.css`).

### 2.5 Contrast Watchlist (verify live, adjust later)

- White text on `--accent` fill (CTA buttons) — check ≥ 4.5:1.
- `--text-muted` on glass surfaces — check ≥ 4.5:1 for body copy.
- `--accent` text directly on `--background` — verify legibility at small sizes.

---

## 3. Typography

**Geist** for UI/headings, **Geist Mono** for numerals, labels, and eyebrow text.
Loaded via `next/font` (`geist/font/sans`, `geist/font/mono`) for zero-layout-shift and no
external request.

| Role | Font | Size (desktop → mobile) | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Display / H1 | Geist | 60px → 36px | 800 | -0.02em |
| H2 (section) | Geist | 40px → 28px | 700 | -0.01em |
| H3 (card) | Geist | 22px → 20px | 600 | normal |
| Body | Geist | 18px → 16px | 400 | normal |
| Small / caption | Geist | 14px | 400 | normal |
| Eyebrow / label | Geist Mono | 13px | 500 | 0.08em, uppercase |
| Stat numeral | Geist Mono | 48px → 36px | 700 | -0.01em |

Line-height: 1.1 for display, 1.2 for headings, 1.6 for body.

---

## 4. Spacing, Radius & Motion

### 4.1 Spacing scale (Tailwind scale-based, no arbitrary values)
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96` px. Section vertical padding: `py-24` desktop,
`py-16` mobile. Content max-width containers inside full-width sections: `max-w-6xl` with
`px-6`.

### 4.2 Radius
| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 8px | Inputs, badges |
| `--radius-md` | 12px | Buttons |
| `--radius-lg` | 20px | Cards |
| `--radius-xl` | 28px | Hero / pricing panels |

### 4.3 Motion tokens
| Token | Value |
| --- | --- |
| Duration (micro) | 150ms |
| Duration (reveal) | 500–600ms |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) |

Keyframes already scaffolded in `globals.css`: `fadeInUp`, `fadeIn`, `scaleIn`,
`slideInLeft`, `slideInRight`.

---

## 5. Animation & Scroll Behavior

Subtle motion across the whole page; all guarded by `prefers-reduced-motion`.

- **Scroll reveals**: sections/cards fade-in-up as they enter the viewport via a reusable
  `IntersectionObserver` hook (`useReveal`), staggered per grid item.
- **Header**: transitions from transparent to glass-blurred + hairline border on scroll.
- **Micro-interactions**: button hover lift + accent glow, card hover raise, link underlines.
- **Smooth scrolling**: `scroll-behavior: smooth` for anchor nav and Back to Top.
- **Reduced motion**: media query disables transforms/animations, content still fully visible.

---

## 6. Component Architecture

Componentized, robust for future updates. **Every file kept well under 600 LOC.** All copy,
stats, testimonials, and FAQs live in a single content module for easy editing.

```
app/
  layout.tsx                 # Geist fonts, metadata, JSON-LD injection
  page.tsx                   # Landing: composes section components
  globals.css                # Tokens, glass utilities, keyframes
  contact/
    page.tsx                 # Contact Marcus page (placeholder form, no submit)
  sitemap.ts                 # SEO
  robots.ts                  # SEO
components/
  site-header.tsx            # Sticky header, scroll-aware, desktop nav
  mobile-nav.tsx             # Burger button + slide-in drawer (mobile/tablet)
  cta-button.tsx             # Reusable accent CTA (opens modal via context/prop)
  cta-modal.tsx              # Placeholder modal (no email capture)
  hero.tsx                   # Headline, subhead, CTA, dashboard image
  stats-band.tsx             # 4-up metric grid (glass cards)
  program-section.tsx        # What's included / features grid
  coach-section.tsx          # Marcus bio + portrait
  testimonials.tsx           # 3 glass testimonial cards
  pricing.tsx                # Single featured glass pricing card + CTA
  faq.tsx                    # Accordion (accessible)
  final-cta.tsx              # Full-width closing banner + CTA
  site-footer.tsx            # Links, Privacy/Terms placeholders, back-to-top
  reveal.tsx                 # Wrapper applying scroll-reveal animation
hooks/
  use-reveal.ts              # IntersectionObserver reveal hook
lib/
  content.ts                 # All copy, stats, testimonials, FAQ data (placeholders)
  structured-data.ts         # JSON-LD builders (Organization, Product, FAQPage)
public/
  coach-portrait.png         # Generated placeholder (replaceable)
  dashboard-preview.png      # Generated placeholder (replaceable)
```

CTA reuse map (≥3): **site-header**, **hero**, **pricing**, **final-cta**, **site-footer**.

---

## 7. Landing Page Section Order

1. **Header** — logo, anchor nav, CTA (glass on scroll; burger + drawer on mobile/tablet).
2. **Hero** — headline, subhead, primary CTA, dashboard preview image.
3. **Stats band** — 4 metric glass cards (500+, 12.4 lbs, 98.2%, 4.9/5 — placeholders).
4. **Program** — what's included / feature grid.
5. **Coach** — Marcus bio + portrait.
6. **Testimonials** — 3 glass cards.
7. **Pricing** — single featured glass card ($297) + CTA.
8. **FAQ** — accessible accordion (placeholder Q&A).
9. **Final CTA** — full-width closing banner + CTA.
10. **Footer** — nav links, Privacy/Terms placeholders, Back to Top, contact link.

---

## 8. SEO Strategy

- `metadata` in `layout.tsx` and per-page: title, description, canonical, Open Graph, Twitter card.
- OG image (generated placeholder) sized 1200×630.
- JSON-LD: `Organization`, `Product` (with `Offer` price), `FAQPage`.
- `sitemap.ts` + `robots.ts`.
- Semantic HTML (`main`, `header`, `section`, `footer`), one `h1`, descriptive alt text.
- Baseline security response headers via `next.config` (`X-Content-Type-Options`,
  `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`).

---

## 9. Responsive Behavior

- Mobile-first; breakpoints tuned for **mobile and tablet** explicitly.
- **Burger menu + slide-in drawer** with accessible toggle, focus trap, and icons.
- Grids collapse: 4-up stats → 2-up tablet → 1-up mobile; 3 testimonials → 1-up mobile.
- Sticky header remains usable on mobile; CTA scales to fit.
- Pricing card stays prominent on small screens.
- Full keyboard navigation, visible focus states, `aria` on accordion and drawer.

---

## 10. Build Order

1. Tokens + globals (palette, glass utilities, keyframes) — _scaffolded_.
2. `lib/content.ts` + `lib/structured-data.ts` (placeholder data).
3. Layout: Geist fonts, metadata, JSON-LD, security headers.
4. Header + mobile drawer + reusable CTA button + CTA modal.
5. Landing sections in order (hero → footer) with reveal animations.
6. `/contact` page (placeholder form, no submit).
7. SEO files (`sitemap.ts`, `robots.ts`) + browser verification (desktop/tablet/mobile).

---

## 11. Deferred / Open Items (post-prototype)

- Real CTA/checkout destination (currently placeholder modal).
- Contact form submission target (currently non-submitting placeholder).
- Verification of real stats and testimonial identities before public use.
- Final accent decision: Electric Emerald vs Neon Lime (one-value swap).
- Legal content for Privacy Policy / Terms links.
- Replace generated placeholder images with real assets.
