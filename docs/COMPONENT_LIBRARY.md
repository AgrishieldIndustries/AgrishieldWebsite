# Component Library Spec

This document details the interface components designed to be styled globally but customizable via props.

## 1. `<Navigation />`
Primary header navigation with responsive mobile menu overlay and active state trackers.

* **Props:** None (reads location state from router context).
* **Responsive Behavior:**
  - Screen width >= 768px: Inline bottom-aligned links, language toggle, action buttons.
  - Screen width < 768px: Mobile hamburger menu toggle that launches a full-screen drawer.
* **A11y Features:**
  - Full keyboard control with focus-visible indicators.
  - Active page designated using `aria-current="page"`.
  - Mobile menu contains `role="dialog"` and `aria-modal="true"`.

## 2. `<Footer />`
Responsive bottom footer outlining contact details, interactive map frame, email/call links, and social connections.

* **Props:** None.
* **Key Integrations:**
  - Embeddable responsive Google Maps iframe.
  - Social media icon grid with custom helper hover transitions.
  - Dynamic local clock/year parsing to prevent outdated copyright warnings.

## 3. `<Layout />`
Global layout wrapper establishing basic responsive spacing and containing the floating WhatsApp/communication CTA.

* **Props:**
  - `children` (React.ReactNode): Page elements to wrap.
* **A11y Features:**
  - Focus-visible borders on floating contact actions.
  - Semantic HTML markup (`<main>` content areas).

## 4. `<ProductCard />`
Visual card designed for catalog displays following the Airbnb layout style.

* **Props:**
  - `product` (Object): Custom name, categories, sizes, price tag, image path, and badges.
  - `onSelect` (Callback): Callback to fire detail modals.
* **Hover Effects:**
  - Card boundary border shifts from gray-100 to gray-200.
  - Product image undergoes a subtle scale transition (`scale-105`) over `duration-500`.\n