# AI Generation Guide for PBWF

Use the following prompt format and rules when instructing an AI to instantiate a new corporate website using the Premium Business Website Framework (PBWF).

---

## 1. CORE SYSTEM DIRECTIVES

### Spacing and Aesthetics
* **Spaciousness:** Follow generous vertical spacing rules (`py-16 md:py-24`).
* **Visual Cards:** Ensure cards follow the uniform spacing standard with soft shadow borders and smooth hover zoom scales (`group-hover:scale-105 duration-500`).
* **Design Pillars:** Do not change spacing variables, typography scales, or border-radius values unless requested. Keep the premium Apple-inspired spacing style intact.

### Component Structure
* All page wrapper elements must use the global structural component:
  ```tsx
  <Layout>
    {/* Page Content */}
  </Layout>
  ```
* All pages must include the global scroll behavior component:
  ```tsx
  <ScrollToTop />
  ```
  integrated within the main router structure.

---

## 2. REBRANDING CONFIGURATION RULES

When transforming the template for a new company:

### Brand Replacement Map
1. **Name:** Update the legal name string to the new entity name (e.g. replace `"Agrishield Industries Pvt. Ltd."` with the target corporate name).
2. **Contact payload:** Re-map address, coordinates, email targets, and telephone lines inside [Footer.tsx](file:///Users/Sarthak/Desktop/AgrishieldWebsite/artifacts/agrishield/src/components/Footer.tsx).
3. **Primary Colors:** Swap primary coloring tokens in `src/index.css`.
4. **Data Arrays:** Update the mock catalog array on [Products.tsx](file:///Users/Sarthak/Desktop/AgrishieldWebsite/artifacts/agrishield/src/pages/Products.tsx) with the new inventory.\n