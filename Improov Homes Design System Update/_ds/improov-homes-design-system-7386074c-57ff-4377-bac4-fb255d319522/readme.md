# Improov Homes — Design System

> Brand & product design system for **Improov Homes**, a real-estate company
> moving into fintech — building homebuying tools and apps for first-time buyers.

The system packages Improov's brand foundations (color, type, logo, motifs),
reusable React UI primitives, and high-fidelity product recreations so any team
or agent can produce on-brand interfaces and marketing fast.

---

## Source materials

These were provided by the client and are stored under `uploads/`:

- **`Improov Homes Branding Guide (Repaired).docx`** — the official brand guide
  (extracted to `uploads/brand_guide_text.txt`; its embedded images to
  `uploads/media/`). It defines the palette, the type recommendation
  (League Spartan / Open Sans / Jenna Sue), logos, alternative logos, favicons,
  and social templates.
- **`improov_logo_new.png`** — primary wordmark (rainbow-roof "Improov Homes").
- **`Nexa Bold.otf` / `Nexa Light.otf`** — licensed product/UI typeface
  (Fontfabric). `FFF_EULA_license.pdf` is its license.

No codebase or Figma file was provided — components and product screens here are
**original interpretations** built from the brand guide, not recreations of an
existing app.

---

## Brand at a glance

Improov is **warm, encouraging, and practical**. The mark is a playful
rainbow-dot roof over a hand-lettered wordmark — optimism made literal. The
brand's job is to make homebuying feel *possible* for people who think it isn't.
White space leads; color punctuates.

---

## Content fundamentals

How Improov writes:

- **Voice:** warm coach, not a bank. Encouraging, plain-spoken, optimistic.
  Aspirational but never salesy.
- **Person:** speak to the reader as **"you"**; the company is **"we"**.
  ("*We teach you how to rework your mindset.*")
- **Casing:** sentence case everywhere — headlines, buttons, labels. The only
  all-caps is the small tracked eyebrow/overline.
- **Headlines:** short, declarative, motivational. Real examples from the brand:
  *"Own the home of your dreams."* · *"Good things come to those who hustle."* ·
  *"A positive mindset brings positive things."* · *"One day OR Day one — you
  decide."* · *"Think buying a home is not something you can afford now?"*
- **Body:** reassuring and concrete — name the worry, then remove it.
  *"Most people are just like you. There is no magic, just math."*
- **Punctuation:** light. A colon to set up a payoff ("Tip of the week:"),
  occasional em dash. Avoid exclamation overload — at most one.
- **Emoji:** **not used.** Warmth comes from the script font and color, not emoji.
- **Numbers:** friendly and rounded in marketing ("12k+ buyers", "$48M saved");
  precise in product ("$24,500", "724").
- **Highlight technique:** emphasize a single key word per line — set it in
  cherry, in the Jenna Sue script, or behind a yellow marker underline.

---

## Visual foundations

- **Color:** White is the dominant background. The four primaries — **Cherry
  `#CB0C4F`** (signature), **Blue `#158BCF`**, **Green `#1FB050`**, **Yellow
  `#FBB630`** — plus secondaries **Orange `#F17030`** and **Purple `#6562A8`**
  are used to highlight graphic elements and key words. Cherry is the primary
  action color. Neutrals are a cool grey ramp anchored to the logo's navy ink
  (`--neutral-700 #36404F`). Tokens: `tokens/colors.css`.
- **Type:** Display = **League Spartan** (tight, geometric, 700–900, letter-spacing
  −0.02em). Body = **Open Sans** (400–700, line-height 1.65). Script accent =
  **Jenna Sue** (the logo hand — highlights & signatures only, never body).
  Product/UI numerals = **Nexa** (licensed). Tokens: `tokens/typography.css`.
- **Backgrounds:** predominantly flat white or `--bg-subtle` grey. The signature
  texture is **Bauhaus-style geometric shapes** — circles, half-circles, quarter
  circles and bars in brand colors, often bleeding off an edge. No photographic
  or gradient-heavy backgrounds; gradients are avoided. Dark sections use
  `--neutral-800` with floating color blobs.
- **Imagery:** when photos appear they are warm and human (people, homes). This
  system ships **no stock photography** — product mocks use branded geometric
  placeholders; swap real photos in for production.
- **Corner radii:** friendly and rounded, echoing the dots — cards `--radius-lg
  (18px)`, buttons `--radius-md (12px)`, pills for tags/badges. Nothing sharp.
- **Cards:** white surface, `1px` subtle neutral border, **soft cool shadow**
  (`--shadow-sm`), generous padding. Optional 5px colored top accent strip.
  Interactive cards lift `-2px` and deepen to `--shadow-md` on hover.
- **Shadows:** soft, cool-neutral (`rgba(20,26,35,…)`), never harsh or black.
  A dedicated cherry-tinted `--shadow-brand` sits under primary buttons.
- **Borders:** hairline `1px` neutral-200 for structure; `2px` for inputs and
  selectable controls (the active state recolors the border, brand or blue).
- **Buttons:** bold, rounded, confident. Cherry primary (with brand shadow),
  blue secondary, outline, ghost, dark. **Hover** = darken ~7% (brightness);
  **press** = scale to 0.97. Font is Nexa/League Spartan, bold.
- **Motion:** quick and gentle. Standard ease `cubic-bezier(0.2,0.7,0.2,1)`,
  120–320ms. Toggles/checks use a soft-overshoot ease (`--ease-emphasis`) for a
  little bounce. Fades and small translateY; no large or looping animation.
- **Transparency & blur:** sticky headers and the app status bar use a white
  `rgba` fill + `backdrop-filter: blur`. Otherwise surfaces are opaque.
- **Focus:** 2px blue border + soft blue glow (`--shadow-focus`).

---

## Iconography

- **Set:** **Lucide** (MIT) — clean, rounded, 2px stroke. It matches the brand's
  friendly geometry. Used as inline SVG; the app kit ships a curated subset in
  `ui_kits/improov-app/icons.jsx` (`<Icon name=… />`), and cards/kits inline the
  paths directly. For a new surface, pull more Lucide glyphs (CDN or copy paths)
  at the same 2px weight — do **not** mix in a second icon style.
- **Logo / app marks:** the brand mark is a raster PNG (rainbow-dot roof). The
  **IH monogram** under the roof is the favicon / app-icon (`assets/logos/`).
- **Emoji:** never used as icons.
- **Unicode:** small UI affordances (chevrons, ▲▼ deltas, ×) use plain glyphs;
  everything substantive uses a Lucide icon.

---

## Repository index

**Foundations**
- `styles.css` — root entry (consumers link this one file; `@import`s only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `elevation.css`, `base.css`
- `guidelines/cards/` — foundation specimen cards (Design System tab)

**Components** (`window.ImproovHomesDesignSystem_738607.*`)
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Badge, Tag, ProgressBar, Toast
- `components/data/` — Card, StatCard, Avatar
- `components/navigation/` — Tabs
- `components/brand/` — Logo

**UI kits**
- `ui_kits/improov-app/` — homebuying fintech app (interactive mobile flow)
- `ui_kits/improov-web/` — marketing homepage

**Assets**
- `assets/logos/` — wordmark, logo variants, favicon / IH marks
- `assets/fonts/` — Nexa OTFs
- `assets/brand/` — color reference, social-template reference

**Other**
- `SKILL.md` — Agent-Skill manifest for downloading & reuse
- `uploads/` — original client source files

---

## Font note (action needed)

Real files were provided only for **Nexa**. **League Spartan**, **Open Sans**,
and **Jenna Sue** are loaded from **Google Fonts** as faithful matches to the
brand guide's named fonts. If you have licensed originals (or want them
self-hosted for offline/production use), upload them and we'll swap the
`@font-face` sources in `tokens/fonts.css`.
