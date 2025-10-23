# Product Requirements Document (PRD)
## theDesigning Worlds Lab - DW-L Rolodex

**Version:** 1.0  
**Last Updated:** October 23, 2025  
**Project Status:** Production Ready

---

## Executive Summary

The DW-L Rolodex is a cinematic, interactive web experience that serves as the primary entry point to theDesigning Worlds Lab's portfolio of projects, research initiatives, and collaborative spaces. Built with Next.js 14, the site features an innovative card-based navigation system ("Rolodex") that presents six distinct "worlds" through an animated, fan-opening interface.

### Key Highlights
- **Cinematic Experience**: 3D-animated card stack with physics-based interactions
- **Dark/Light Mode**: Seamless theme switching with persistent user preferences
- **Mobile-First**: Fully responsive with touch-optimized gestures
- **Accessibility**: Reduced-motion fallback, keyboard navigation, ARIA labels
- **Performance**: Static site generation, optimized images, minimal dependencies

---

## Product Overview

### Vision
Create an elegant, memorable first impression that embodies DW-L's design philosophy: experiences that feel "inevitable in hindsight" — combining technical sophistication with intuitive interaction.

### Goals
1. **Showcase Portfolio**: Present 6 distinct worlds/projects in a visually compelling way
2. **Brand Identity**: Establish DW-L's aesthetic through motion, typography, and spatial design
3. **User Engagement**: Encourage exploration through playful, intuitive interactions
4. **Accessibility**: Ensure all content is accessible across devices and abilities
5. **Performance**: Deliver instant page loads and smooth animations

### Target Audience
- **Potential Collaborators**: Designers, technologists, cultural institutions
- **Clients**: Organizations seeking spatial computing and narrative design work
- **Community Members**: Makers, researchers, and creatives interested in joining initiatives
- **General Public**: Anyone curious about DW-L's work and philosophy

---

## Core Features

### 1. Cinematic Rolodex (Homepage)
**Description**: An animated card stack that opens into a fan of 6 cards, each representing a different "world."

**User Interactions**:
- **Auto-open**: Cards fan out automatically 150ms after page load
- **Keyboard Navigation**: Arrow keys (←/→) cycle through cards, ESC resets to first card
- **Mouse Wheel**: Scroll up/down to cycle through cards (throttled to 300ms)
- **Drag Gesture**: Horizontal drag to cycle cards (40px threshold)
- **Click/Tap**: 
  - Inactive card → becomes active (scales up)
  - Active card → navigates to detail page
- **Hover Effects**: Subtle scale on hover (desktop only)

**Visual Design**:
- **Card Styling**: Semi-transparent black background (40% opacity in light mode, 60% in dark), white text, backdrop blur
- **Animation**: Spring physics (stiffness: 140, damping: 18, mass: 0.6)
- **Angles**: 120° spread across 6 cards (-60°, -36°, -12°, 12°, 36°, 60°)
- **Z-Index**: Active card always on top, z-index based on distance from active
- **Responsive**: Adapts card size and spacing for mobile screens

**Reduced-Motion Fallback**:
- Detects `prefers-reduced-motion` system preference
- Falls back to a simple vertical list of clickable cards
- No animations, just clean layout with hover states

### 2. Six Worlds (Detail Pages)
Each world has a dedicated detail page with:
- **Back Link**: Returns to homepage Rolodex
- **Hero Section**: Large title, tagline, and description
- **Content Sections**: Organized with headings, paragraphs, and bullet lists
- **Consistent Layout**: Centered content, max-width constraints, generous whitespace

**The Six Worlds**:
1. **Benjamin Bourne** (`/worlds/benjamin-bourne`)
   - *Tagline*: Design director. Narrative systems.
   - *Focus*: Personal portfolio and design philosophy

2. **theOpen World Archives** (`/worlds/open-world-archives`)
   - *Tagline*: Living memory + spatial media.
   - *Focus*: Cultural memory preservation platform

3. **Field Trips** (`/worlds/field-trips`)
   - *Tagline*: Embodied learning in the wild.
   - *Focus*: Experiential education experiences

4. **LISA** (`/worlds/lisa`)
   - *Tagline*: Lightweight Intelligence for Spatial Art.
   - *Focus*: AI system for spatial art creation

5. **DW-L Research** (`/worlds/research`)
   - *Tagline*: Prototyping futures, responsibly.
   - *Focus*: Emerging technology research

6. **Maverys** (`/worlds/maverys`)
   - *Tagline*: Maverick guild for makers.
   - *Focus*: Creative collective and workspace

### 3. Dark/Light Mode
**Description**: System-wide theme toggle with persistent user preferences.

**Features**:
- **Toggle Button**: Fixed top-right corner, animated moon/sun icons
- **Default Theme**: Light mode (white background, black text)
- **Persistence**: Uses `localStorage` to remember user preference
- **FOUC Prevention**: Inline script checks `localStorage` before React hydration
- **Logo Switching**: Black logo in light mode, white logo in dark mode
- **Tailwind Integration**: Uses `dark:` classes with `darkMode: 'class'`

**Theme Values**:
- **Light Mode**: `bg-white`, `text-black`, `color-scheme: light`
- **Dark Mode**: `bg-black`, `text-white`, `color-scheme: dark`
- **Opacity Variants**: All text uses opacity (e.g., `text-black/90 dark:text-white/90`) for visual hierarchy

### 4. Header & Logo
**Description**: Fixed header with centered logo, links to homepage.

**Behavior**:
- **Fixed Position**: Always visible at top of screen
- **Logo Switcher**: Automatically shows correct logo based on theme
- **Clickable**: Logo returns to homepage from any page
- **Responsive**: Logo scales down on mobile (h-6 sm:h-7 md:h-8)
- **Z-Index**: `z-[9999]` to stay above all content

### 5. Static Pages
**About** (`/about`)
- Overview of DW-L's mission and philosophy
- Explanation of the "worlds" concept

**Contact** (`/contact`)
- Email address with monospace styling
- Placeholder for future contact form

**Modern Moguls** (`/modern-moguls`)
- Placeholder page for future video content
- Ready for embed integration

---

## Technical Requirements

### Framework & Dependencies
- **Next.js 14.2.18**: React framework with App Router
- **React 18.3.1**: UI library
- **TypeScript 5.6.3**: Type safety
- **Tailwind CSS 3.4.15**: Utility-first CSS
- **Framer Motion 11.11.17**: Animation library
- **ESLint 8.57.1**: Code linting

### Performance Requirements
- **First Contentful Paint (FCP)**: < 1.5s
- **Time to Interactive (TTI)**: < 3s
- **Lighthouse Score**: > 90 (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Keep JavaScript bundle < 150KB (gzipped)
- **Static Generation**: All pages pre-rendered at build time

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile
- **Progressive Enhancement**: Core content accessible without JavaScript

### Accessibility Requirements (WCAG 2.1 AA)
- **Keyboard Navigation**: All interactive elements keyboard-accessible
- **Screen Readers**: ARIA labels on all interactive components
- **Color Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Motion**: `prefers-reduced-motion` support with fallback UI
- **Focus Indicators**: Visible focus rings on all focusable elements
- **Semantic HTML**: Proper heading hierarchy, landmarks, lists

### Responsive Design
**Breakpoints** (Tailwind defaults):
- **Mobile**: < 640px
- **Small (sm)**: ≥ 640px
- **Medium (md)**: ≥ 768px
- **Large (lg)**: ≥ 1024px
- **Extra Large (xl)**: ≥ 1280px

**Mobile Optimizations**:
- Touch-friendly targets (min 44x44px)
- Reduced font sizes and spacing on small screens
- Simplified navigation hints
- Touch gestures (swipe, tap)
- Viewport units (`dvh`) for mobile browser compatibility

---

## User Flows

### Primary Flow: Explore Worlds
1. User lands on homepage
2. Rolodex auto-opens (cards fan out)
3. User scrolls/drags/arrows to browse cards
4. User clicks active card to view details
5. User reads world details
6. User clicks "Back to Rolodex" or logo to return
7. Repeat from step 3

### Secondary Flow: Theme Toggle
1. User sees theme toggle in top-right corner
2. User clicks toggle
3. Site switches to opposite theme
4. Theme preference saved to `localStorage`
5. Theme persists across page navigations

### Tertiary Flow: Direct Navigation
1. User navigates directly to a world URL (via link/bookmark)
2. Page loads with correct theme (from `localStorage`)
3. User reads content
4. User clicks logo to return to homepage Rolodex

---

## Content Strategy

### Tone & Voice
- **Professional yet approachable**: Avoid jargon, explain concepts clearly
- **Confident without arrogance**: "We prototype experiences..." not "We're the best..."
- **Action-oriented**: Use active voice, focus on impact
- **Inclusive**: "We" and "you" language, invite collaboration

### Typography
- **Primary Font**: System font stack (default Next.js)
- **Headings**: Bold, large, high contrast
- **Body Text**: Medium opacity (80-90%) for hierarchy
- **Monospace**: Used for email addresses

### Writing Guidelines
- **Card Titles**: 2-3 words max, proper nouns
- **Card Taglines**: 3-6 words, descriptive and evocative
- **Page Headings**: Clear, concise, no preamble
- **Body Paragraphs**: 2-4 sentences, break up walls of text
- **Lists**: Use bullets for scannable content

---

## Design System

### Color Palette
**Light Mode**:
- Background: `#FFFFFF` (white)
- Text Primary: `rgba(0, 0, 0, 0.9)` (black/90)
- Text Secondary: `rgba(0, 0, 0, 0.7)` (black/70)
- Text Tertiary: `rgba(0, 0, 0, 0.5)` (black/50)

**Dark Mode**:
- Background: `#000000` (black)
- Text Primary: `rgba(255, 255, 255, 0.9)` (white/90)
- Text Secondary: `rgba(255, 255, 255, 0.7)` (white/70)
- Text Tertiary: `rgba(255, 255, 255, 0.5)` (white/50)

**Rolodex Cards**:
- Background Light: `rgba(0, 0, 0, 0.4)` (black/40)
- Background Dark: `rgba(0, 0, 0, 0.6)` (black/60)
- Text: `#FFFFFF` (always white)
- Border: `rgba(255, 255, 255, 0.2)` light, `rgba(255, 255, 255, 0.1)` dark

### Spacing Scale
- **Base Unit**: 4px (Tailwind's `0.25rem`)
- **Common Values**: 2, 3, 4, 6, 8, 12, 16, 20, 24 (in base units)
- **Responsive Gaps**: Use `sm:` prefix for larger spacing on desktop

### Typography Scale
**Headings**:
- H1: `text-3xl sm:text-4xl md:text-5xl` (30px → 36px → 48px)
- H2: `text-xl sm:text-2xl` (20px → 24px)

**Body**:
- Primary: `text-sm sm:text-base` (14px → 16px)
- Large: `text-lg sm:text-xl` (18px → 20px)
- Small: `text-xs sm:text-sm` (12px → 14px)

### Animation Principles
- **Purpose**: Every animation should have a clear purpose (feedback, delight, hierarchy)
- **Timing**: Fast enough to feel responsive (< 300ms), slow enough to be perceived
- **Easing**: Spring physics for natural feel, no linear animations
- **Reduced Motion**: Always provide static fallback

---

## Future Enhancements

### Phase 2 (Q1 2026)
- [ ] Search functionality across all worlds
- [ ] Filter/tag system for content organization
- [ ] Newsletter signup integration
- [ ] Analytics (privacy-respecting)

### Phase 3 (Q2 2026)
- [ ] Case studies with rich media (images, videos, interactive embeds)
- [ ] Team member profiles
- [ ] Blog/publication section
- [ ] Contact form with validation

### Phase 4 (Q3+ 2026)
- [ ] Multi-language support (i18n)
- [ ] RSS feeds for updates
- [ ] Open-source component library extraction
- [ ] Community contributions/submissions

---

## Success Metrics

### Primary KPIs
1. **Engagement Rate**: % of visitors who interact with Rolodex (target: > 60%)
2. **World Exploration**: Average number of worlds viewed per session (target: > 2)
3. **Bounce Rate**: % leaving after viewing only homepage (target: < 40%)
4. **Return Visitors**: % coming back within 30 days (target: > 20%)

### Secondary KPIs
1. **Page Load Time**: 95th percentile < 2 seconds
2. **Accessibility Score**: Lighthouse score > 95
3. **Mobile Traffic**: % of mobile visitors (expected: 50-60%)
4. **Theme Usage**: % using dark vs. light mode

### Qualitative Goals
- Memorable first impression (user testing)
- "Feels like DW-L" brand alignment
- Encourages curiosity and exploration
- Builds trust and credibility

---

## Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Animation performance on low-end devices | Medium | Medium | Reduced-motion fallback, optimize bundle size |
| Browser compatibility issues | Low | Low | Test on major browsers, progressive enhancement |
| Content becomes outdated | Medium | High | Set quarterly review schedule, easy CMS integration path |
| Accessibility gaps | High | Low | Regular WCAG audits, user testing with assistive tech |
| Mobile experience not smooth | High | Low | Extensive mobile testing, touch-optimized interactions |

---

## Appendix

### Glossary
- **World**: A distinct project, initiative, or area of focus within DW-L
- **Rolodex**: The animated card stack on the homepage
- **FOUC**: Flash of Unstyled Content (visual glitch during page load)
- **SSG**: Static Site Generation (pages built at compile time)
- **ARIA**: Accessible Rich Internet Applications (accessibility spec)

### References
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Document Owner**: DW-L Development Team  
**Stakeholders**: Benjamin Bourne (Creative Director), Development Team, UX Researchers  
**Review Cycle**: Quarterly or as needed for major updates

