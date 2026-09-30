# AGENTS.md — BondWeb

Angular 22 institutional landing page for Bond (single-page, Spanish). Single project `BondWeb`, no monorepo, no backend.

## Commands

- `npm start` → dev server at `http://localhost:4200/`
- `npm test` → unit tests (Vitest via `@angular/build:unit-test`). Only spec is `src/app/app.spec.ts`.
- `npm run build` → production build to `dist/` (default config is `production`); `npm run watch` for dev rebuilds.
- Deploy to GitHub Pages: `npx ng build --base-href /BondWeb/` then publish the **contents** of `dist/BondWeb/browser/` (+ `.nojekyll` file) to the `gh-pages` branch as a full replacement (old hashed bundles must be deleted, not just added). The `--base-href` is required — without it, asset URLs break under `/BondWeb/`.
- No lint, no e2e, no CI: `README.md` mentions `ng e2e` but no e2e builder is configured — ignore it.

## Architecture

- Entry: `src/main.ts` bootstraps `App` (`src/app/app.ts`) with `appConfig` (`src/app/app.config.ts`).
- `App` just composes 10 section components in `src/app/app.html`. Routing is stubbed (`app.routes.ts` is empty, anchor links like `#videos` only) despite `provideRouter`.
- All sections live in `src/app/components/*.ts` (flat folder: `header`, `hero`, `evidencias`, `versus`, `expedientes`, `arquitectura`, `casos`, `videos`, `quickstart`, `pie`). No subfolders, no services.
- Components are single-file: inline `template`, `standalone: true`, state via `signal()`, modern control flow (`@if`, `@for`). Follow this pattern for new sections; register in `App` imports + `app.html`.

## Rendering (SSG, no SSR)

- The production build **prerenders** to static HTML (`ng-server-context="ssg"` in `dist/` output). No Node server: deploy the `browser/` folder as-is to GitHub Pages.
- How it's wired: `angular.json` sets `"server": "src/main.server.ts"` + `"prerender"` with `routesFile: routes.txt` (`/` only). `src/main.server.ts` **must** accept `BootstrapContext` and pass it to `bootstrapApplication` (else build fails with `NG0401: Missing Platform`).
- `discoverRoutes: false` is intentional: `app.routes.ts` is empty (anchor-only SPA), so route discovery would find 0 routes.
- Client hydration: `app.config.ts` has `provideClientHydration(withEventReplay())`; server config is merged in `src/app/app.config.server.ts` via `provideServerRendering()`.
- Builder v22 quirks: setting `"outputMode"` explicitly makes the builder **ignore** `"prerender"` — don't set it. Prerendering needs both `@angular/platform-server` and `@angular/ssr` installed (matching Angular version).
- Keep components SSR-safe: no `window`/`document`/`localStorage` at render time (currently clean; only `new Date().getFullYear()` in footer year, harmless).

## Style gotchas

- **All CSS goes in `src/styles.scss`.** Component `styles: []` are intentionally empty to respect the `anyComponentStyle` budget (4 kB warn / 8 kB error; initial bundle 500 kB / 1 MB). See note in `src/app/app.scss`.
- `ng generate component` defaults to `scss` style (`angular.json` schematics) — for this repo prefer inline-template `.ts`-only components matching the existing ones; delete generated `.html`/`.scss`/`.spec.ts` if unused.
- Static assets live in `public/` and are served from root (e.g. `icon.svg`, `og-image.jpg`). `src/index.html` hardcodes canonical/OG URLs to `https://luisalejandrofigueredo.github.io/BondWeb/` — keep them in sync if the deploy URL changes.
- Strict TS flags are on (`noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, `noPropertyAccessFromIndexSignature`).
- Formatting: Prettier `printWidth: 100`, `singleQuote`, angular parser for HTML; 2-space indent (`.editorconfig`). No formatter/linter script — run `npx prettier --write` manually if needed.
