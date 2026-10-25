# Miora Love Stories

> A little place for your love story.

Miora Love Stories is the first mini-website product under **Miora Studio**: a mobile-first, minimal and elegant romantic mini-website that can later become a digital gift product for customers in Malaysia. For now it is a static portfolio/demo project (no backend, database, authentication, payments or customer dashboard).

## Status

The site implements the approved Stitch UI/UX design: a hero, "The Sealed Letter", "The Chapters of Us" timeline, "Glimpses of Light" gallery with lightbox, and "To a Lifetime of Small Wonders" closing, with a desktop layout and a deliberate mobile layout (bottom tab bar). All content is fictional sample data for the couple Alya and Adam.

Edit `src/data/loveStory.ts` (typed by `src/types/loveStory.ts`) to change names, dates, the letter, chapters, plates, captions and the closing message. The design tokens live in `src/styles/tokens.css`.

### Temporary placeholder photography (replace before public deployment)

The approved design used generated images that are **not** reused here. The site currently uses free [Unsplash](https://unsplash.com) photos (Unsplash License) with matching crops. They are **placeholders**: verify their licences or replace them with real photography before a public portfolio deployment.

- All photo references live in one place: `src/data/images.ts` (one entry per photo, with the photographer credit). Swap an `id` there, or point `imageUrl` at local files, to replace a photo everywhere.
- Photographers: Luca Micheli (Tuscan road), Rafael Garcin (stone alley), Redd Francisco (picnic), Sixteen Miles Out (cafe cups), Duc Van (balcony coffee), Aurela Redenica (golden hands).
- Photos and the Google Fonts (Playfair Display, Inter) load over the network, with CSS fallbacks if they fail.

## Technology stack

- React + TypeScript + Vite
- Plain CSS with design tokens as CSS variables (`src/styles/tokens.css`)
- Vitest + React Testing Library
- ESLint (typescript-eslint)
- GitHub Actions CI
- Playwright for end-to-end tests: planned, added once there is UI to test

## Prerequisites

- Node.js 20.19+ or 22.12+ (developed on Node 22)
- npm 10+
- Git

## Installation

```bash
git clone https://github.com/muazramzii/miora-love-stories.git
cd miora-love-stories
npm install
```

## Development commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run the TypeScript compiler without emitting |
| `npm run lint` | Run ESLint |

## Testing

| Command | Description |
| --- | --- |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |

Before committing, run `npm run lint && npm run typecheck && npm test && npm run build`.

> Windows note: npm scripts can fail if the project path contains `&` (for example `love & couple`). Use a path without special characters.

## Project structure

```
src/
  app/          App shell and app-level CSS
  components/   layout/ (Navigation, BottomNav, Footer) and ui/ (Icon)
  features/     hero, love-letter, timeline, gallery (with Lightbox), closing
  hooks/        useActiveSection (scroll-spy for the navigation)
  data/         loveStory.ts (content), images.ts (placeholder photos), navigation.ts
  types/        loveStory.ts: content types
  styles/       tokens.css (design tokens) and global.css
  test/         test setup
```

## Features

- Editorial hero: 3-column collage on desktop, centred composition on mobile
- Sealed letter: closed envelope and opened letter states, with "Fold & Reseal"
- Chapters timeline: zig-zag around a central thread on desktop, left thread on mobile
- Gallery of framed plates with an accessible lightbox (Escape, arrow keys, swipe, focus trap and return, scroll lock)
- Closing inscription with a Return to Beginning link
- Scroll-spy header navigation and a mobile bottom tab bar

## Privacy

Do not commit credentials, API keys, personal data or private photographs.
