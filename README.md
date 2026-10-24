# Miora Love Stories

> A little place for your love story.

Miora Love Stories is the first mini-website product under **Miora Studio**: a mobile-first, minimal and elegant romantic mini-website that can later become a digital gift product for customers in Malaysia. For now it is a static portfolio/demo project (no backend, database, authentication, payments or customer dashboard).

## Status

**Phase 2 (core features) complete.** The site has a hero, an interactive love letter, a relationship timeline, a memory gallery with lightbox, and a closing message. All content is fictional sample data in `src/data/loveStory.ts` (names, dates, letter, timeline, gallery, closing message), typed by `src/types/loveStory.ts`. Edit that one file to change the story.

Fonts (Playfair Display, Inter) load from Google Fonts with system fallbacks. Photos load from Unsplash (Unsplash License); a CSS fallback is shown if one fails.

### Photo credits

Hero and gallery photos by Aurela Redenica, Aniki Photos, Eduardo Drapier, Sixteen Miles Out, Duc Van and Stefanie Jockschat, via [Unsplash](https://unsplash.com).

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
  features/     hero, love-letter, timeline, gallery (with Lightbox), closing
  hooks/        custom React hooks
  data/         loveStory.ts: all fictional sample content
  types/        loveStory.ts: content types
  utils/        small helpers (date formatting)
  styles/       tokens.css (design tokens), global.css, responsive.css
  assets/       images and other static assets
  test/         test setup
```

## Features

- Romantic hero section
- Interactive love letter
- Relationship timeline
- Memory photo gallery with accessible lightbox (Escape, arrow keys, focus return, scroll lock)
- Closing message with back-to-top link

## Privacy

Do not commit credentials, API keys, personal data or private photographs.
