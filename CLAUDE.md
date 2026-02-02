# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (pessini.me) consisting of **two React apps** deployed together to GitHub Pages:
- **Root app** (`/`): Single-page portfolio using React 18, no routing
- **New app** (`/new`): Enhanced multi-page portfolio using React 19 + React Router 7 (HashRouter)

## Commands

### Root app (from project root)
```bash
npm install        # Install dependencies
npm run dev        # Vite dev server at localhost:5173
npm run build      # Production build → /dist
npm run lint       # ESLint
npm run preview    # Preview production build
```

### New app (from /new directory)
```bash
cd new
npm install
npm run dev        # Vite dev server
npm run build      # Production build → /new/dist
npm run lint
npm run preview
```

Each app has its own `package.json` and `node_modules`. Both must be installed and built independently.

## Architecture

### Two-app deployment model
The CI/CD pipeline (`.github/workflows/deployment.yml`) builds both apps, then copies the new app's dist into the root app's dist (`cp -r new/dist dist/new`), deploying everything to GitHub Pages under the custom domain `pessini.me`.

### Root app structure
- `src/App.jsx` — Main component with dark mode toggle (CSS class on body), header grid layout, profile section
- `src/components/TechSkills.jsx` — Skills organized in 4 categories
- `src/components/TypingAnimation.jsx` — Animated typing text effect
- Styling via CSS custom properties in `src/index.css` with light/dark mode variables

### New app structure
- `src/App.jsx` — React Router (HashRouter) setup
- `src/components/` — Page components: Navbar, Sidebar, About, Experience, Projects, Contact, Footer, Loader
- Vite base path set to `/new/` in `vite.config.js`

### Key configuration
- Root app Vite base: `/`
- New app Vite base: `/new/`
- Custom domain configured via `CNAME` file (pessini.me)
- Google Analytics tag: G-40BQRZMQ0F in root `index.html`
- Fonts: Inter (body), Plus Jakarta Sans (headings) via Google Fonts

## Deployment

Push to `main` triggers GitHub Actions which builds both apps and deploys to GitHub Pages. No manual deployment needed.
