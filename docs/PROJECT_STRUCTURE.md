# Project Structure

PBWF maps folders cleanly to separate routing configuration from logic, styles, and page layouts.

```
/
├── artifacts/              # Production output distributions
├── docs/                   # PBWF Framework documentation
├── public/                 # Static assets (images, PDFs, SVGs)
│   ├── community-photos/   # High-resolution community/field photos
│   └── product-photos/     # High-resolution transparent product renders
└── src/
    ├── components/         # Shared presentation elements
    │   ├── ui/             # Radix components (accordion, tooltip, toast)
    │   ├── Footer.tsx      # Global footer and communication contacts
    │   ├── Layout.tsx      # Global layout wrapper
    │   └── Navigation.tsx  # Header links & mobile dialog
    ├── hooks/              # Custom helper hooks
    ├── lib/                # Utility modules (tailwind class mergers)
    ├── pages/              # Routing page modules
    │   ├── About.tsx       # About page
    │   ├── Awards.tsx      # Compliance and PDF viewer page
    │   ├── Contact.tsx     # Contact & Web3Forms page
    │   ├── Home.tsx        # Homepage hero & search block
    │   ├── Products.tsx    # Filterable product grid
    │   ├── Solutions.tsx   # Services & crop management pages
    │   └── Social.tsx      # Field trials carousel and videos page
    ├── App.tsx             # Main routing registry
    ├── index.css           # Global design system styles and utilities
    └── main.tsx            # Application entry compiler
```

## Where to Customize
* **Branding and Metadata:** Modify `index.html`.
* **Shared Logic / Routing:** Modify `src/App.tsx`.
* **Global Styles:** Modify `src/index.css`.
* **Content/Mock Data:** Modify dataset arrays inside the individual page components in `src/pages/`.\n