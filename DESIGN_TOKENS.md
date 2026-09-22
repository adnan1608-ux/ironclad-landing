# Design Tokens — Vance Performance Systems

> Prototype token sheet. Electric Emerald is the **single accent**; everything
> else stays on a neutral dark scale. Contrast pairings are proposed but **not
> yet verified** — we'll validate/adjust after seeing them live.

## 1. Color Primitives

### Accent (the only chromatic color)
| Token | Hex | Usage |
| --- | --- | --- |
| `--accent-500` | `#10b981` | Primary CTA fill, key highlights, active states |
| `--accent-400` | `#34d399` | Hover state, glow, icon strokes on dark |
| `--accent-600` | `#059669` | Pressed/active CTA, borders |
| `--accent-300` | `#6ee7b7` | Small emphasis text, stat numerals |
| `--accent-glow` | `rgba(16,185,129,0.35)` | Box-shadow glow behind CTAs / cards |

> Neon Lime (`#84cc16`) is the documented alternative. Kept out of tokens for
> now — swap `--accent-*` values in one place to A/B it later.

### Neutrals (background → foreground)
| Token | Hex | Usage |
| --- | --- | --- |
| `--bg` | `#09090b` | Page background (pitch black) |
| `--bg-elevated` | `#0f0f12` | Section bands, subtle separation |
| `--surface` | `#18181b` | Card base (before glass overlay) |
| `--surface-2` | `#27272a` | Zinc borders, dividers, chips |
| `--border` | `rgba(255,255,255,0.10)` | Hairline borders on glass |
| `--text` | `#fafafa` | Primary text (near-white) |
| `--text-muted` | `#a1a1aa` | Body / secondary copy |
| `--text-faint` | `#71717a` | Captions, footnotes, disabled |

### Feedback (used sparingly, kept neutral-leaning)
| Token | Hex | Usage |
| --- | --- | --- |
| `--success` | `#10b981` | Reuses accent (guarantee, checkmarks) |
| `--warning` | `#f59e0b` | Reserved, not used on landing |
| `--danger` | `#ef4444` | Form validation on contact page only |

## 2. Glass Effect Recipe

Applied to feature cards, testimonial cards, pricing card, and the CTA modal.

| Token | Value |
| --- | --- |
| `--glass-bg` | `rgba(24,24,27,0.55)` |
| `--glass-border` | `rgba(255,255,255,0.10)` |
| `--glass-blur` | `blur(14px)` |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.45)` |
| `--glass-highlight` | inset `0 1px 0 rgba(255,255,255,0.06)` |

Pricing (featured) card adds an accent ring: `1px solid var(--accent-600)` +
`--accent-glow` shadow.

## 3. Typography — Geist

| Token | Family | Notes |
| --- | --- | --- |
| `--font-sans` | Geist | Body + UI, via `next/font/google` |
| `--font-mono` | Geist Mono | Stat numerals, kickers/eyebrows, badges |

Recommended approach: load **Geist** and **Geist Mono** through
`next/font/google` in `app/layout.tsx` (self-hosted, no layout shift, no
render-blocking `@import`). Expose them as CSS variables consumed by Tailwind.

### Type scale
| Role | Size (mobile → desktop) | Weight | Transform |
| --- | --- | --- | --- |
| Display / Hero H1 | `2.5rem → 4.5rem` | 800 | UPPERCASE, tight tracking |
| Section H2 | `1.875rem → 3rem` | 700 | UPPERCASE |
| Card H3 | `1.25rem → 1.5rem` | 600 | Normal case |
| Body | `1rem → 1.125rem` | 400 | Normal, `--text-muted` |
| Eyebrow / Kicker | `0.75rem` | 500 | UPPERCASE, mono, letter-spaced, accent |
| Stat numeral | `2.25rem → 3rem` | 700 | Mono, `--accent-300` |

## 4. Spacing, Radius, Motion

| Token | Value |
| --- | --- |
| Section vertical padding | `5rem` mobile → `8rem` desktop |
| Content max-width | full-width sections, inner container `max-w-6xl` |
| `--radius-card` | `1rem` |
| `--radius-pill` | `9999px` (CTA buttons) |
| Motion — duration | `150ms` micro, `600ms` reveal |
| Motion — easing | `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo) |
| Reveal pattern | fade-in-up on scroll (IntersectionObserver), staggered |
| Reduced motion | all reveals/animations disabled under `prefers-reduced-motion` |

## 5. Contrast Watchlist (verify live)

These pairings are the ones most likely to need adjustment:
- `--accent-500` (#10b981) **text** on `--bg` (#09090b) — thin/large only; avoid small body text in pure accent.
- **White text on accent CTA** — check against WCAG AA (accent is fairly light; may prefer `--bg` text on the button instead).
- `--text-muted` (#a1a1aa) on `--surface` glass — borderline for small text; bump to `--text` if it reads weak.
