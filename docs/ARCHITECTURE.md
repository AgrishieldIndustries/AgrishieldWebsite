# Project Architecture

This framework follows a lightweight, component-driven client-side routing model optimized for static compilation.

## Tech Stack
* **Vite:** Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) and optimized rollup production bundles.
* **React:** Component model for descriptive interface layouts.
* **Wouter:** A minimalist routing library (~1.5KB) that replaces heavy routing wrappers, keeping routing fast and transparent.
* **Framer Motion:** High-performance transition animations and gesture triggers utilizing GPU-accelerated layers.
* **Tailwind CSS:** Utility-first CSS compiling styles directly on-demand.

## Code Hierarchy

```
[Entrypoint: index.html]
       │
[Main Wrapper: main.tsx]
       │
[App Container: App.tsx] ──> [State/Providers: QueryClientProvider, TooltipProvider]
       │
[Router Switch: App.tsx] ──> [Global Behaviors: ScrollToTop]
       │
[Layout Wrapper: Layout.tsx] ──> [Shared Frame: Navigation, Footer, WhatsApp Float]
       │
[Pages: Home, Products, Solutions, About, Contact, Social]
```

## Core Patterns

### 1. Scroll To Top on Route Change
To preserve standard multi-page browser behavior in an SPA, a global `<ScrollToTop />` observer listens to the active route location and resets scroll coordinates instantly:
```tsx
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}
```

### 2. Standard Layout HOC/Wrapper
All pages are wrapped inside `<Layout>` to guarantee consistency of navigation headers, footer details, floating communication triggers, and responsive margins:
```tsx
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```\n