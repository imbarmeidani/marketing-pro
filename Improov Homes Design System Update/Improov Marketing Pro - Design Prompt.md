# Improov Marketing Pro — Design & Build Prompt

> Paste this into Claude Code as the design brief for **Improov Marketing Pro**.
> It defines the product, the Improov brand system every output must obey, the
> app's own UI, and a precise spec for each marketing artifact the app generates.
> Treat the brand rules as non-negotiable — the whole point is that anything the
> app produces looks unmistakably like Improov Homes.

---

## 1. What you're building

**Improov Marketing Pro** turns a property's photos and a few facts into a full
set of on-brand marketing assets in one pass. An agent uploads listing photos
and enters basic details (address, price, beds/baths, status), and the app
generates, in the Improov visual language:

- A written **property listing** (headline + description + feature bullets)
- A print **listing flyer** (8.5 × 11 in)
- **Instagram** posts — feed square + story
- **Facebook** post
- **Email** templates — new listing for sale, new rental, weekly rentals roundup
- (Optional) a **seminar / farming postcard** (7 × 5 in)

Everything is editable after generation and exports as print-ready PDF, PNG/JPG
(social), and HTML (email). The product's job: **make a busy real-estate agent
look like they have a full-time brand designer.**

Voice of the brand it serves: *warm coach, not a bank — encouraging,
plain-spoken, optimistic; never salesy.*

---

## 2. Core user flow

Design the app around this five-step flow. Keep it fast — an agent should go
from photos to exportable assets in under two minutes.

1. **Intake** — Upload photos (drag-and-drop, multi-select, reorderable). Enter
   listing details: address, city, price, `/mo` vs. sale, beds, baths, sqft/units,
   status (For Sale · For Rent · Rent to Own · Just Reduced · Open House), and a
   few optional feature checkboxes (newly renovated, off-street parking, near
   transit, finished basement, etc.).
2. **Choose outputs** — A grid of asset types with on/off toggles and live
   thumbnail previews (Flyer, IG post, IG story, FB post, Email — sale/rent/roundup,
   Postcard). "Select all" default on.
3. **Generate** — One button. The app writes the copy and lays out every selected
   asset using the brand system below. Show a friendly progress state (dots, not a
   spinner bar).
4. **Review & edit** — Per-asset editor: swap/crop photos, edit any text inline,
   recolor the status tag, pick which photo is the hero. Changes propagate the
   shared listing data across assets (edit the price once, it updates everywhere).
5. **Export & share** — Download PDF (flyer/postcard), PNG or JPG (social, at exact
   pixel sizes), and copy-ready HTML (email). Optional "copy caption" for social
   with suggested hashtags.

---

## 3. Brand system — bake this in

This is the single source of truth. Do not invent colors, fonts, or spacing.
Use CSS custom properties / design tokens throughout so every asset stays
consistent. The canonical reference is the **Improov Homes design system**
and the *Brand Extension Pack* already built for it — match those exactly.

### Color

White is the dominant background; color punctuates. Never use gradients.

| Token | Hex | Use |
|---|---|---|
| Cherry | `#CB0C4F` | Signature + primary action (buttons, key highlights) |
| Blue | `#158BCF` | Secondary accent, rentals |
| Green | `#1FB050` | "100% financing" badge, positive/success |
| Yellow | `#FBB630` | Motif, marker highlights |
| Orange | `#F17030` | Motif, secondary |
| Purple | `#6562A8` | Motif, secondary |
| Ink navy | `#36404F` | **Canonical** text ink & dark sections (`neutral-800 #232C39` for darkest). Standardize on this — do **not** use the legacy website navy `#3b4d65`. |
| Page / subtle | `#FFFFFF` / `#F6F7F9` | Backgrounds |

### Type

- **Display / headlines:** League Spartan, 700–900, letter-spacing −0.02em, tight
  leading (~0.98–1.05).
- **Body:** Open Sans, 400/700, line-height 1.65.
- **Script accent:** Jenna Sue — highlights & signatures only, one word per line,
  never body text.
- **UI numerals / prices:** Nexa (bold), letter-spacing +0.01em.
- **Highlight technique:** emphasize **one** key word per line — set it in cherry,
  in the Jenna Sue script, or behind a yellow marker underline.

### Signature graphic elements (reuse across assets)

- **Rainbow dot cluster** — Bauhaus scatter of brand-color circles, larger dots
  clustered and trailing to smaller ones, echoing the logo roof. Bleeds off a
  corner (typically top-right).
- **Dot rule** — a short horizontal row of ~5–6 brand-color dots, used as a divider
  and in every footer/address bar.
- **Solid color circles with centered white League Spartan text** — the postcard's
  "Tired of paying rent?" device.
- **Green "100% financing available" badge** — pill or circle, used on hero imagery.
- **Dark sections** = `#232C39` with floating brand-color circles at low opacity.

### Corners, cards, shadows

- Radii: cards 18px, buttons 12px, tags/pills 999px. Nothing sharp.
- Cards: white, 1px `#DCE0E6` border, soft cool shadow `0 2px 6px rgba(20,26,35,.08)`,
  generous padding, optional 5px colored top-accent strip.
- Primary buttons carry a cherry-tinted shadow `0 10px 28px rgba(203,12,79,.28)`.

### Logo & imagery

- Use the rainbow-roof **Improov Homes** wordmark PNG. On dark backgrounds, place it
  on a small white rounded chip (its ink text is navy).
- Photos are the agent's uploads — warm, human, real homes. Always route user photos
  through a **fillable image slot with crop/reposition**; never stretch. Storefront /
  "before" imagery may be shown greyscale (postcard back treatment).

### Voice & copy rules (for the generator)

- Sentence case everywhere except the small tracked ALL-CAPS eyebrow.
- Headlines: short, declarative, motivational ("Own the home of your dreams.",
  "Your first home is our mission.").
- Body: name the worry, then remove it. Reassuring and concrete.
- Numbers: friendly/rounded in marketing, precise in listings ($499,000, $2,900/mo).
- Punctuation light; **at most one exclamation point**. **Never use emoji.**
- Always include the trust anchors where space allows: `973-743-9333`,
  `info@improovhomes.com`, `105 Floyd Avenue, Bloomfield, NJ 07003`,
  `www.improovhomes.com`, "Equal Housing Opportunity."

---

## 4. The app's own UI

Design the tool itself in the same system — it should feel like part of Improov.

- **Shell:** white app on `#F6F7F9`, rounded cards, cherry primary actions, ink-navy
  text. Sticky top bar with the wordmark, current listing address, and a cherry
  "Generate" / "Export" action.
- **Intake screen:** left = photo dropzone + reorderable thumbnail tray; right = a
  clean form (League Spartan section labels, 2px-border inputs that recolor to blue
  on focus, Nexa for the price field). A live "listing at a glance" card updates as
  they type.
- **Output picker:** responsive grid of asset cards, each with a toggle, a mini
  brand-accurate thumbnail, and its output size (e.g. "Instagram · 1080×1080").
- **Editor:** canvas-style preview of the selected asset with inline-editable text,
  a photo slot with double-click-to-reframe, and a right rail of quick controls
  (status tag color, hero photo, template variant). A left rail lists all generated
  assets so the agent can hop between them.
- **Empty / loading states:** use the dot cluster and dot-rule motifs, never generic
  spinners. Copy is encouraging ("Building your listing kit…").
- **Motion:** quick and gentle — 120–320ms, `cubic-bezier(0.2,0.7,0.2,1)`; a soft
  overshoot on toggles. Small fades and translateY only; nothing looping.
- Icons: **Lucide**, 2px stroke, inline SVG. Never mix icon sets. No emoji as icons.

---

## 5. Output template specs

Build each as a data-driven template fed by the shared listing object
`{ address, city, price, unit, status, statusColor, beds, baths, sqft, units,
features[], photos[], heroIndex, description, headline, agent, phone, email }`.
Every asset shares the header/footer/dot-rule system so a kit looks like a set.

### 5.1 Property listing (written)

Generate: a **headline** (League Spartan energy, one highlighted word), a
**2–3 sentence description** (worry→relief, warm coach voice), and **4–6 feature
bullets**. Keep MLS-safe, fair-housing-compliant language. This copy feeds every
other asset.

### 5.2 Listing flyer — 8.5 × 11 in (2550 × 3300 @ 300 dpi)

Top bar: wordmark left, cherry status pill right ("Just listed · For sale") →
full-width hero photo (≈380px tall) → price block (Nexa, ~52px) with address, and
a beds / baths / units / sqft stat row divided by hairlines → 2–3 sentence
description → two interior photo thumbnails → two-column feature list with green
check icons → dark ink-navy agent band (floating cherry circle) with "Presented by
[agent]", phone, email, address, and a dot rule. Print-ready PDF, 0.25in bleed.

### 5.3 Instagram feed post — 1080 × 1080

Square. Full-bleed hero photo with a bottom scrim; overlay: small cherry status
pill top-left, a **rainbow dot cluster** bleeding off the top-right corner, price
(Nexa, large) + address bottom-left in white, wordmark on a white chip bottom-right.
Provide a caption + hashtag suggestion (e.g. `#firsttimehomebuyer #newjerseyrealestate
#improovhomes`).

### 5.4 Instagram story — 1080 × 1920

Vertical. Hero photo top ~65%, ink-navy panel below with floating circles: headline,
price, beds/baths, and a "Swipe up / Link in bio" cherry pill. Leave the top 250px
and bottom 250px clear of key content (UI-safe zones). Optional green "100% financing"
badge.

### 5.5 Facebook post — 1200 × 630 (also offer 1080 × 1350 portrait)

Split layout: photo on one side, white panel on the other with status pill, price,
address, beds/baths, a one-line hook, and wordmark + dot rule. Comfortable margins so
nothing crops in-feed. Provide post copy.

### 5.6 Email templates — 600 px wide (table-based, email-client-safe)

Shared shell: centered wordmark header on a hairline border → content → light
`#F6F7F9` footer with dot rule, office address/phone, and an unsubscribe line.
Buttons are solid, rounded, full-width. Three variants:

- **New listing · for sale** — cherry eyebrow, hero photo, price/address, bd/ba/units,
  short blurb, **cherry** "View this home" button, "Warmly, Imbar & Roi" sign-off.
- **New rental · available now** — blue eyebrow, `$/mo`, **blue** "Schedule a tour"
  button, mentions no broker fee / rent-to-own path.
- **Weekly rentals roundup** — green eyebrow, "Fresh rentals in [area]" heading, 3
  stacked rows (thumbnail + price + address + bd/ba + outline "View" link), cherry
  "See all rentals" button.

Use inline styles and table layout for Outlook/Gmail compatibility; export as pasteable
HTML.

### 5.7 Seminar / farming postcard — 7 × 5 in (optional)

**Front:** wordmark + "The Joy of Becoming a Homeowner" tagline, League Spartan
headline with an orange underline bar, plus-circle bulleted questions, cherry RSVP
pill with phone, rainbow dot cluster top-right, green "100% financing available"
circle, footer dot rule + `www.improovhomes.com`. **Back:** greyscale storefront photo,
solid color circles with white text (pain-point questions + a large purple circle CTA),
white address bar with dot rules. Print-ready PDF.

---

## 6. Constraints & guardrails

- **Tokens, not hardcodes** — one shared token file drives every asset; changing the
  ink navy or a font updates everything.
- **Fonts:** League Spartan, Open Sans, Jenna Sue (Google Fonts) + Nexa (licensed OTF,
  self-hosted). Embed/subset for PDF export.
- **Exact export sizes** — social assets must render at the pixel dimensions above; do
  not letterbox or upscale user photos.
- **Photo handling** — crop/reposition per slot, never distort; keep faces and homes in
  frame; greyscale only where the template calls for it.
- **Fair housing & MLS** — generated copy must avoid protected-class language and
  unverifiable superlatives; include "Equal Housing Opportunity" on print pieces.
- **Never:** gradients, emoji, a second icon set, the legacy `#3b4d65` navy, more than
  one exclamation point, or stretched imagery.
- **Always:** white space leads, one highlighted word per headline, the dot-rule footer,
  and the Improov contact block.

---

*Reference build: see `Brand Extension Pack.dc.html` in the Improov design system
project for pixel-accurate examples of the flyer, emails, listing card, hero, footer,
and postcards this app should generate.*
