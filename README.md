# Miora Love Stories

> A little place for your love story.

Miora Love Stories is the first mini-website product under **Miora Studio**: a mobile-first, minimal and elegant romantic mini-website that can later become a digital gift product for customers in Malaysia. For now it is a static portfolio/demo project (no backend, database, authentication, payments or customer dashboard).

## Status

**Phase 1 (design system and layout) complete.** Navigation, hero, footer and reusable UI foundations are built using fictional sample data. The love letter, timeline, gallery and closing message are temporary placeholder sections, built in later phases.

The hero photo is loaded from Unsplash (photo by Aurela Redenica, Unsplash License). A CSS fallback is shown if it fails to load. Fonts (Playfair Display, Inter) load from Google Fonts with system fallbacks.

## Technology stack

- React + TypeScript + Vite
- Plain CSS with reusable CSS variables (`src/styles/global.css`)
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
  components/   layout/ (Navigation, Footer) and ui/ (Button, SectionHeading)
  features/     one folder per page feature (hero now; letter, timeline, gallery later)
  hooks/        custom React hooks
  data/         static (fictional sample) story content
  types/        shared TypeScript types
  styles/       tokens.css (design tokens), global.css, responsive.css
  assets/       images and other static assets
  test/         test setup
```

## Planned features

- Romantic hero section
- Interactive love letter
- Relationship timeline
- Memory photo gallery with lightbox
- Closing message

## Privacy

Do not commit credentials, API keys, personal data or private photographs.
