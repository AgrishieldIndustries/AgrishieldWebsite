# Theme Configuration Specification

To isolate branding data from UI code, future iterations should centralize site properties inside a single configuration schema. Here is the structure of the PBWF theme configuration spec:

```typescript
export interface CompanyConfig {
  legalName: string;            // e.g., "Agrishield Industries Pvt. Ltd."
  shortName: string;            // e.g., "Agrishield"
  tagline: string;
  establishmentYear: number;
  contactEmail: string;
  contactPhones: string[];
  address: {
    plot: string;
    street: string;
    highway: string;
    region: string;
    postalCode: string;
  };
  socials: {
    whatsappNumber: string;    // E.g., "919021342901"
    instagramUrl?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
  };
  colors: {
    primary: string;           // Hex value
    secondary: string;
    accent: string;
  };
}
```

### Implementing the Config File
Create a new file `src/theme.config.ts` containing your corporate parameters, and reference this object in your pages (e.g., `Footer.tsx`, `Navigation.tsx`, and `Contact.tsx`) to automate company rebranding.\n