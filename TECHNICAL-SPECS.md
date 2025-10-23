# Technical Specifications
## DW-L Rolodex - Architecture & Implementation

**Version:** 1.0  
**Last Updated:** October 23, 2025  
**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion

---

## System Architecture

### Application Structure

```
dwl-rolodex/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with ThemeProvider, header, toggle
│   ├── page.tsx                 # Homepage (renders Rolodex)
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── modern-moguls/
│   │   └── page.tsx            # Modern Moguls page
│   └── worlds/                  # World detail pages
│       ├── benjamin-bourne/
│       ├── field-trips/
│       ├── lisa/
│       ├── maverys/
│       ├── open-world-archives/
│       └── research/
│
├── components/                   # Reusable React components
│   ├── Rolodex.tsx              # Main Rolodex animation component
│   ├── ThemeProvider.tsx        # Theme context provider
│   ├── ThemeToggle.tsx          # Dark/Light mode toggle button
│   └── LogoSwitcher.tsx         # Theme-aware logo component
│
├── data/
│   └── cards.ts                 # Rolodex card data (6 worlds)
│
├── public/                       # Static assets
│   ├── dwl_logo_black_transparent_3600w.png
│   ├── dwl_logo_white_transparent_3600w.png
│   └── ...
│
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── PRD.md                       # Product Requirements Document
└── TECHNICAL-SPECS.md           # This file
```

---

## Technology Stack

### Core Framework
**Next.js 14.2.18** (App Router)
- **Why**: Best-in-class React framework with SSG, routing, and optimization
- **Features Used**:
  - App Router (`app/` directory)
  - Server Components (default)
  - Client Components (`"use client"`)
  - Static Site Generation (SSG)
  - Image Optimization (`next/image`)
  - Metadata API
  - Dynamic routing

### UI Library
**React 18.3.1**
- **Features Used**:
  - Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`, `useContext`)
  - Context API (Theme management)
  - Server/Client component split

### Type System
**TypeScript 5.6.3**
- **Configuration**: Strict mode enabled
- **Features Used**:
  - Type inference
  - Interface definitions
  - Enum types
  - Generic components

### Styling
**Tailwind CSS 3.4.15**
- **Why**: Utility-first, highly optimized, excellent dark mode support
- **Configuration**:
  ```typescript
  // tailwind.config.ts
  darkMode: 'class',  // Enable class-based dark mode
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#000000", fg: "#ffffff" },
      boxShadow: { 'card': '0 10px 30px rgba(0,0,0,0.35)' }
    }
  }
  ```
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

### Animation Library
**Framer Motion 11.11.17**
- **Why**: Declarative, physics-based animations with great performance
- **Features Used**:
  - `motion` components (`motion.div`, `motion.button`)
  - `AnimatePresence` for enter/exit animations
  - `useReducedMotion` hook
  - Spring physics
  - Drag gestures
  - Hover/tap interactions

### Development Tools
- **ESLint 8.57.1**: Code linting with Next.js config
- **PostCSS 8.4.49**: CSS processing for Tailwind
- **Autoprefixer 10.4.20**: CSS vendor prefixes

---

## Component Architecture

### 1. Rolodex Component (`components/Rolodex.tsx`)

**Type**: Client Component (`"use client"`)

**Purpose**: Core interactive card stack with fan-open animation

**State Management**:
```typescript
const [open, setOpen] = useState(false);     // Tracks if cards are fanned out
const [index, setIndex] = useState(0);        // Active card index (0-5)
const wheelLock = useRef(0);                  // Throttle scroll events
```

**Key Functions**:
- `onWheel()`: Throttled scroll handler (300ms cooldown)
- `dragEnd()`: Drag gesture handler (40px threshold)
- `onKey()`: Keyboard navigation (←/→/ESC)
- `targets` (useMemo): Precomputed card positions/rotations

**Animation Constants**:
```typescript
const ANGLES = [-60, -36, -12, 12, 36, 60];    // Card rotation angles
const OPEN_DELAY = 150;                         // ms before opening
const SPRING = {                                // Spring physics config
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.6
};
```

**Responsive Behavior**:
- Desktop: Full interactions (scroll, drag, keyboard, hover)
- Mobile: Touch gestures (tap, swipe), reduced card spacing
- Reduced Motion: Fallback to simple clickable list

**Performance Optimizations**:
- `useMemo` for card target calculations
- `useCallback` for event handlers
- Conditional rendering for reduced-motion users
- Z-index calculation based on active card distance

### 2. Theme System

#### ThemeProvider (`components/ThemeProvider.tsx`)

**Type**: Client Component with Context API

**State**:
```typescript
type Theme = "dark" | "light";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;  // Prevents hydration mismatch
};
```

**Implementation**:
- `localStorage` persistence (key: `"theme"`)
- DOM manipulation (`document.documentElement.classList`)
- Hydration-safe with `mounted` flag
- Default theme: `"light"`

**Theme Application**:
```typescript
// Dark mode
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");

// Light mode
document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
```

#### ThemeToggle (`components/ThemeToggle.tsx`)

**Type**: Client Component

**Features**:
- Animated toggle button (Framer Motion)
- SVG icons (moon for dark, sun for light)
- Fixed positioning (top-right corner)
- Touch-optimized tap targets
- `whileHover` and `whileTap` animations

#### LogoSwitcher (`components/LogoSwitcher.tsx`)

**Type**: Client Component

**Features**:
- Theme-aware logo selection
- SSR-safe with fallback logo
- Next.js Image optimization
- Priority loading
- Responsive sizing

### 3. Layout System (`app/layout.tsx`)

**Type**: Server Component (root layout)

**Key Features**:
- FOUC Prevention: Inline `<script>` checks `localStorage` before React hydration
- Fixed Header: Logo centered, always visible
- ThemeProvider: Wraps all children
- ThemeToggle: Fixed top-right
- Metadata API: SEO tags, Open Graph, viewport

**Anti-FOUC Script**:
```javascript
try {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
```

### 4. Page Components

#### Homepage (`app/page.tsx`)
- Simple wrapper that renders `<Rolodex />`
- Server Component

#### World Pages (`app/worlds/[world]/page.tsx`)
- Static pages with consistent layout
- Responsive typography and spacing
- "Back to Rolodex" link
- Bullet lists for features/focus areas

#### Static Pages (`about`, `contact`, `modern-moguls`)
- Minimal content pages
- Centered layouts
- Ready for future expansion

---

## Data Layer

### Card Data (`data/cards.ts`)

**Type Definition**:
```typescript
export type WorldCard = {
  id: string;      // Unique identifier (e.g., "bb", "owa")
  title: string;   // Display title
  tagline: string; // Short description
  url: string;     // Absolute path to detail page
};
```

**Data**:
```typescript
export const CARDS: WorldCard[] = [
  { id: "bb", title: "Benjamin Bourne", tagline: "Design director. Narrative systems.", url: "/worlds/benjamin-bourne" },
  // ... 5 more
];
```

**Usage**:
- Imported by `Rolodex.tsx` for rendering cards
- Single source of truth for all world data
- Easily extensible for future worlds

---

## Styling Architecture

### Global Styles (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Color scheme for native browser chrome */
:root { color-scheme: light; }
html.dark { color-scheme: dark; }

/* Base styles */
body {
  @apply bg-white text-black antialiased transition-colors duration-300;
}
html.dark body {
  @apply bg-black text-white;
}

/* Accessibility & UX */
* { -webkit-tap-highlight-color: transparent; }
::-webkit-scrollbar { display: none; }
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

### Tailwind Utilities

**Common Patterns**:
```tsx
// Responsive text sizing
className="text-xl sm:text-2xl md:text-3xl"

// Dark mode color variants
className="text-black/90 dark:text-white/90"

// Responsive spacing
className="px-4 sm:px-6 py-16 sm:py-20"

// Touch optimization
className="touch-manipulation"

// Layout utilities
className="min-h-dvh flex items-center justify-center"
```

**Mobile-First Approach**:
- Base styles target mobile (< 640px)
- `sm:` prefix for tablet/desktop (≥ 640px)
- `md:` prefix for larger screens (≥ 768px)

---

## Routing

### Next.js App Router

**Static Routes**:
```
/ → app/page.tsx (Homepage/Rolodex)
/about → app/about/page.tsx
/contact → app/contact/page.tsx
/modern-moguls → app/modern-moguls/page.tsx
/worlds/benjamin-bourne → app/worlds/benjamin-bourne/page.tsx
/worlds/open-world-archives → app/worlds/open-world-archives/page.tsx
/worlds/field-trips → app/worlds/field-trips/page.tsx
/worlds/lisa → app/worlds/lisa/page.tsx
/worlds/research → app/worlds/research/page.tsx
/worlds/maverys → app/worlds/maverys/page.tsx
```

**Navigation**:
- `next/link` for client-side transitions
- `useRouter` for programmatic navigation
- Logo click returns to homepage

---

## Build & Deployment

### Build Process

```bash
npm run build
```

**Output**:
- Static HTML for all pages (SSG)
- Optimized JavaScript bundles
- CSS extracted and minified
- Images optimized (WebP conversion)

**Build Steps**:
1. TypeScript compilation
2. Next.js optimization
3. Static page generation
4. Image optimization
5. Bundle analysis

### Environment Variables

**Required**: None (no API keys or secrets)

**Optional**:
```env
NEXT_PUBLIC_SITE_URL=https://thedesigningworlds.lab
```

### Deployment Platforms

**Recommended**: Vercel (zero-config)
- Automatic deployments from Git
- Edge network CDN
- Image optimization
- Analytics (optional)

**Alternatives**:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Self-hosted (Nginx + Node.js)

### Performance Optimizations

**Automatic**:
- Code splitting (per-page bundles)
- Tree shaking (unused code removal)
- Image optimization (responsive, WebP/AVIF)
- Font optimization (system fonts, no external loads)

**Manual**:
- `useMemo` for expensive calculations
- `useCallback` for stable function references
- Lazy loading (not needed for small site)
- `priority` prop on critical images (logo)

---

## Browser Compatibility

### Target Support

**Desktop**:
- Chrome 100+ ✅
- Firefox 100+ ✅
- Safari 15+ ✅
- Edge 100+ ✅

**Mobile**:
- iOS Safari 14+ ✅
- Chrome Mobile 100+ ✅
- Samsung Internet 16+ ✅

**Progressive Enhancement**:
- Core content accessible without JavaScript
- CSS animations degrade gracefully
- Reduced-motion fallback

### Polyfills

**Not Required** (modern browser targets):
- No IE11 support
- No legacy polyfills

---

## Accessibility Implementation

### WCAG 2.1 AA Compliance

**Keyboard Navigation**:
- All interactive elements focusable
- Logical tab order
- Skip links (not implemented, single-page app)
- Keyboard shortcuts (←/→/ESC)

**ARIA Labels**:
```tsx
<div role="listbox" aria-label="DW-L Rolodex" aria-activedescendant={CARDS[index].id}>
  <motion.button role="option" aria-selected={isActive} id={card.id}>
    ...
  </motion.button>
</div>

<button aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
  ...
</button>
```

**Color Contrast**:
- Body text: 4.5:1 minimum (black/90 on white, white/90 on black)
- Large text: 3:1 minimum (headings)
- Interactive elements: 3:1 minimum

**Motion**:
```tsx
const prefersReduced = useReducedMotion();

if (prefersReduced) {
  return <SimpleListFallback />;
}
```

**Focus Indicators**:
```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

---

## Testing Strategy

### Manual Testing Checklist

**Functionality**:
- [ ] Rolodex opens automatically
- [ ] All navigation methods work (keyboard, scroll, drag, click)
- [ ] Theme toggle switches correctly
- [ ] Theme persists across page loads
- [ ] All links navigate correctly
- [ ] Logo returns to homepage

**Responsive**:
- [ ] Test on iPhone SE (375px)
- [ ] Test on iPad (768px)
- [ ] Test on desktop (1920px)
- [ ] Test landscape/portrait orientations

**Accessibility**:
- [ ] Navigate site with keyboard only
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] Test with NVDA (Windows)
- [ ] Enable reduced-motion preference
- [ ] Check color contrast (DevTools)

**Performance**:
- [ ] Lighthouse audit (all 4 categories)
- [ ] Test on slow 3G network
- [ ] Check bundle sizes (< 150KB JS)

### Automated Testing (Future)

**Unit Tests** (Jest + React Testing Library):
- Component rendering
- Hook behavior
- User interactions

**E2E Tests** (Playwright):
- User flows
- Cross-browser testing
- Visual regression

**Linting**:
```bash
npm run lint  # ESLint + Next.js rules
```

---

## Security Considerations

### Content Security Policy (CSP)

**Recommended Headers**:
```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
```

*Note*: `'unsafe-inline'` and `'unsafe-eval'` required for Next.js dev mode

### Data Privacy

- No cookies used
- `localStorage` only for theme preference (non-sensitive)
- No analytics by default
- No third-party scripts

### Dependencies

**Regular Updates**:
```bash
npm audit          # Check for vulnerabilities
npm update         # Update to latest compatible versions
```

**Dependency Review**:
- Minimal dependencies (5 production)
- All from trusted sources (Vercel, Meta)
- No known vulnerabilities

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev  # http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

### Code Standards

**TypeScript**:
- Strict mode enabled
- No implicit `any`
- Explicit return types on exported functions

**React**:
- Functional components only
- Hooks over classes
- Server components by default, `"use client"` when needed

**CSS**:
- Tailwind utilities preferred
- Custom CSS only in `globals.css`
- Mobile-first responsive design

**File Naming**:
- Components: PascalCase (`Rolodex.tsx`)
- Pages: lowercase (`page.tsx`)
- Data: camelCase (`cards.ts`)

### Git Workflow

**Branch Strategy**:
- `main`: Production-ready code
- Feature branches: `feature/new-world`, `fix/mobile-bug`

**Commit Messages**:
```
feat: Add new world page for LISA
fix: Correct theme toggle icon color in light mode
docs: Update README with deployment instructions
refactor: Optimize Rolodex animation performance
```

---

## Monitoring & Analytics (Future)

### Performance Monitoring

**Tools**:
- Vercel Analytics (built-in)
- Google Lighthouse CI
- WebPageTest

**Metrics**:
- Core Web Vitals (LCP, FID, CLS)
- Bundle size over time
- Build times

### User Analytics

**Privacy-Respecting Options**:
- Plausible Analytics
- Fathom Analytics
- Self-hosted Matomo

**Key Events**:
- Page views
- Rolodex interactions
- World page visits
- Theme toggle usage
- External link clicks

---

## Troubleshooting

### Common Issues

**Theme flashing on load**:
- Ensure inline script is in `<head>`
- Check `localStorage.getItem('theme')` timing
- Verify `document.documentElement.classList.add('dark')` executes before render

**Animations stuttering on mobile**:
- Check device performance
- Reduce animation complexity
- Ensure reduced-motion fallback works

**Images not loading**:
- Verify file paths in `/public` directory
- Check `next/image` props (width, height, priority)
- Ensure correct file extensions

**Build fails with ESLint errors**:
- Run `npm run lint` locally first
- Fix all errors before pushing
- Check for unescaped quotes/apostrophes

---

## Appendix

### Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Run production build locally
npm run lint             # Run ESLint

# Dependencies
npm install              # Install all dependencies
npm update               # Update dependencies
npm audit                # Check for vulnerabilities
npm outdated             # Check for outdated packages

# Git
git status               # Check current changes
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push                 # Push to remote
```

### Environment Setup

**Node.js Version**: 18.x or 20.x (LTS)
**Package Manager**: npm (comes with Node.js)
**Editor**: VS Code recommended

**VS Code Extensions**:
- ESLint
- Tailwind CSS IntelliSense
- TypeScript & JavaScript Language Features
- Prettier (optional)

---

**Document Owner**: DW-L Development Team  
**Last Review**: October 23, 2025  
**Next Review**: January 2026

