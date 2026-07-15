# Developer Guide

Follow this guide to spin up, configure, and customize a new business site using the framework.

## 1. Initial Setup
Clone the repository structure into your local working directory and install the packages:
```bash
npm install
```

## 2. Run the Development Server
Launch the development web server locally:
```bash
npm run dev
```

## 3. Renaming the Brand
Open `index.html` and customize the metadata:
1. Update `<title>` to match your corporate identity.
2. Replace meta tags for description, keywords, and author.
3. Configure your OpenGraph and Twitter meta cards.
4. Replace the logo placeholder in the `public/` directory (e.g. replace `logo.png` and `favicon.svg`).

## 4. Customizing Colors
Update the Tailwind configuration or global stylesheet (`src/index.css`) to swap color keys:
```css
/* Update your theme tokens inside index.css */
@theme {
  --color-primary: #1f7a3a; /* Replace with your primary brand color hex */
  --color-primary-hover: #165c2b; 
}
```

## 5. Connecting Contact Forms
We recommend using **Web3Forms** for form submissions, as it requires zero server setup.
1. Sign up at [Web3Forms](https://web3forms.com/) to get a free access token.
2. Open `src/pages/Contact.tsx` and replace the public access token key:
```typescript
object.access_key = "YOUR-ACCESS-TOKEN-HERE";
```
3. Update metadata subject lines in `Contact.tsx` to match the target company name.

## 6. Build for Production
Once branding and content configurations are complete, generate the optimized production build:
```bash
npm run build
```
The static files will be compiled inside the `/dist` directory, ready to be deployed.\n