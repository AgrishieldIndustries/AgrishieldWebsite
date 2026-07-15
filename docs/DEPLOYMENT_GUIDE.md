# Deployment Guide

PBWF compiles to static html/js assets, allowing fast deployment to standard CDNs.

## 1. Local Pre-check
Before initiating deployment, verify code validation:
```bash
# Verify no TypeScript compile-time issues
npm run typecheck

# Verify successful asset packaging
npm run build
```

## 2. Deploying to Vercel
1. Install Vercel CLI locally or connect your GitHub repository to your Vercel Dashboard.
2. Select the repository root folder.
3. Configure project settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. The deployment will initialize, providing a live preview url.

## 3. SPA Routing Fallbacks
Since PBWF uses client-side routing, page reloads on sub-pages (e.g. `/products`) will return `404 Not Found` if the server is not configured correctly.
* **Vercel Setup:** The provided `vercel.json` already contains rewrite routes to handle this:
  ```json
  {
    "cleanUrls": true,
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
* **Netlify Setup:** Create a `public/_redirects` file containing:
  ```
  /*    /index.html   200
  ```\n