# Design System Spec

The Premium Business Website Framework enforces a high-end visual rhythm using standardized utility classes.

## 1. Color Palette

* **Primary:** Core branding hue (e.g., `#1f7a3a` - Emerald Green). Used for main CTAs, active states, key icons, and highlights.
* **Neutral Dark:** Charcoal text & layout borders (e.g., `#111827` - Gray 900). Ensures excellent visual contrast (exceeding 4.5:1 contrast ratio).
* **Neutral Medium:** Body text and secondary icons (e.g., `#6B7280` - Gray 500).
* **Neutral Light:** Off-white backgrounds and borders (e.g., `#F3F4F6` - Gray 100, `#F9FAFB` - Gray 50).
* **Accent:** Highlights (e.g., `#B45309` - Amber 700). Used for badges, reviews, or special items.

## 2. Spacing Scale

Based on standard multiplier layout spacing (4px base):
* `1.5` -> `6px`
* `2`   -> `8px`
* `3`   -> `12px`
* `4`   -> `16px`
* `5`   -> `20px`
* `6`   -> `24px`
* `8`   -> `32px`
* `10`  -> `40px`
* `12`  -> `48px`
* `14`  -> `56px`
* `16`  -> `64px`
* `24`  -> `96px`

## 3. Typography Scale

Enforces a premium geometric font stack (e.g., Inter, Outfit, or Helvetica Neue):
* **Display Bold:** `clamp(30px, 4.2vw, 58px)` - Leading `1.08`. Used for Hero titles.
* **H1 / Page Title:** `32px` to `44px` - Leading `1.1`. Used for main page headers.
* **H2 / Section Title:** `26px` to `32px` - Leading `tight`. Used for section headers.
* **Sub-header:** `18px` to `22px` - Leading `snug`.
* **Body text:** `14px` to `16px` - Leading `relaxed` (`1.65`).
* **Sub-text:** `11px` to `13px` - Leading `none`/`normal`.

## 4. Components & Borders

* **Containers:** Fixed viewport-capped container width: `max-w-[1280px] mx-auto px-4 md:px-6`.
* **Border Radius:**
  - Hero Panels & Primary Sections: `rounded-[24px]` / `rounded-[32px]`
  - Cards: `rounded-[16px]` / `rounded-[20px]`
  - Buttons / Badges: `rounded-full` (capsule style)
  - Inputs / Forms: `rounded-[8px]`

## 5. Shadows

* **Shadow SM:** `shadow-sm` (subtle border reinforcement for card grids).
* **Shadow MD:** `shadow-md` (raised active hover states).
* **Shadow XL:** `shadow-2xl` (modals and floating actions).

## 6. Motion & Timing

* **Page Transitions:** Fade-up with spring physics or duration-based ease-out curves:
  - Spring Profile: `type: "spring", duration: 0.45, bounce: 0.12` (modals).
  - Ease Profile: `ease: [0.22, 1, 0.36, 1], duration: 0.6` (page scroll sections).
* **Hover Duration:** Transition transition speed `duration-300` / `duration-500` for transformations (scale offsets).\n