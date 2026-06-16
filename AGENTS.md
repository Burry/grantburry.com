# AGENTS.md

Guidance for coding agents working on **grantburry.com** — Grant Burry's personal site. (`CLAUDE.md` is a symlink to this file.)

## Stack

- **Next.js 16 App Router** (`src/app/`) + **React 19** — static content renders as Server Components; the only Client Component is `PgpSection` (`'use client'`), the PGP Copy/Show widget.
- **Tailwind CSS v4** for styling (CSS-first; theme tokens + global element styles in `src/styles/globals.css`, PostCSS via `postcss.config.mjs`)
- **TypeScript** (strict) with path aliases `@/components/*`, `@/app/*`, `@/styles/*`
- **Bun** as the package manager and runtime
- **PWA** via **Serwist** (`@serwist/next`) — worker source at `src/sw.ts`, generated `public/sw.js` (gitignored)
- **FontAwesome Pro 7** icons. Installing requires `$FONTAWESOME_NPM_AUTH_TOKEN` (consumed by `bunfig.toml`).
- **Geist** font via `next/font` (`geist/font/sans`) — exposed as Tailwind's `font-sans`
- **oxlint** + **oxfmt** for linting/formatting (replaced ESLint + Prettier)
- **Bun's test runner** (happy-dom) + Testing Library for tests

## Commands

```bash
bun install           # install deps (needs the FontAwesome Pro token)
bun dev               # dev server → http://localhost:3000 (Turbopack; SW disabled in dev)
bun run build         # production build via webpack (Serwist generates the SW)
bun start             # serve the production build
bun run lint          # oxlint (strict)
bun run lint:fix      # oxlint --fix
bun run format        # oxfmt (writes in place)
bun run format:check  # oxfmt (check only)
bun run check         # lint + format check
bun test              # run the suite (Bun runner + happy-dom + Testing Library)
```

## Conventions

- Formatting is enforced by **oxfmt** (`.oxfmtrc.json`): no semicolons, single quotes, 2-space indent, 80-column width. Run `bun run format` before committing.
- Linting is **oxlint** under a strict ruleset (`.oxlintrc.json`); keep `bun run lint` clean.
- Routes live in `src/app/` (`layout.tsx`, `page.tsx`, `not-found.tsx`, `error.tsx`, `global-error.tsx`). Page metadata and the `viewport` export live in `layout.tsx` via the **Metadata API** — not `<Head>`.
- Page content is `src/components/Home/Home.tsx` (a Server Component). Social buttons are data-driven in `actions.ts`; the self-descriptors in `descriptors.ts`. The interactive PGP widget is `src/components/Home/PgpSection.tsx` (`'use client'`).
- **No CSS-in-JS and no inline styles** — styling is Tailwind utility classes only. Data-driven colours (per social button / icon) are stored as literal Tailwind class strings in `actions.ts`/`descriptors.ts` (e.g. `bg-[#0a66c2]`, `[--fa-primary-color:#fff]`) so Tailwind's scanner detects them. Never build class names dynamically from runtime values — Tailwind only generates classes it sees as literal source tokens.
- Tests (`__tests__/`) run on **Bun's test runner** — import from `bun:test`. happy-dom and the jest-dom matchers are wired via the `bunfig.toml` `[test]` preload (`test/`). They're behaviour/interaction tests (no snapshots), and are excluded from `tsc` (Bun transpiles and runs them).

## Notes

- The production build runs `next build --webpack` because `@serwist/next` is a webpack plugin and doesn't support Turbopack yet. `next dev` still uses Turbopack, with the SW disabled outside production. `public/sw.js` is generated, not committed.
- `next.config.mjs` wires both the bundle analyzer (`bun run analyze`) and Serwist.
- CI (`.github/workflows/ci.yml`) runs lint + format + typecheck + test + build on push/PR. It needs a `FONTAWESOME_NPM_AUTH_TOKEN` repository secret to install the Pro packages.
- Prefer the native `navigator.clipboard` API over third-party clipboard packages (see `PgpSection.tsx`).
