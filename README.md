# theDesigning Worlds Lab — Rolodex

A minimal Next.js 14 project featuring a cinematic Rolodex interface.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Features

- **Cinematic Rolodex**: Interactive card fan on the homepage with ~120° spread
- **Multiple controls**: Scroll, drag, arrow keys (←/→), and ESC to reset
- **Accessibility**: Reduced-motion fallback, ARIA labels, keyboard navigation
- **Responsive**: Works on mobile and desktop with touch/drag support
- **Static pages**: About, Contact, and Modern Moguls pages

## Project Structure

```
dwl-rolodex/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── modern-moguls/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Rolodex.tsx
├── data/
│   └── cards.ts
├── public/
│   └── (place logo.png here)
└── ...config files
```

## Customization

- **Edit worlds**: Modify `data/cards.ts` to add/remove Rolodex cards
- **Adjust animation**: Tweak `ANGLES` and `SPRING` constants in `components/Rolodex.tsx`
- **Colors**: Update theme in `tailwind.config.ts`

## Build

```bash
npm run build
npm start
```

## Notes

- The fan-open animation uses a ~120° spread
- `prefers-reduced-motion` falls back to a simple list for accessibility
- No navigation is rendered by default (minimal black canvas design)

