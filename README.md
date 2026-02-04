## Eminence — Herve Rwigema

Personal site for **Herve Rwigema**, built with **TanStack Start**, **React**, **TypeScript**, and **shadcn/ui**, styled with **Tailwind CSS v4** and powered by **Vite**.

The site pulls its content from the `src/content` directory (for example `site.ts` and `about.md`) and renders it through a small set of layout and UI components.

---

### Tech stack

- **Framework**: React + TanStack Start (`@tanstack/react-start`, `@tanstack/react-router`)
- **Styling**: Tailwind CSS v4 + `tw-animate-css`
- **UI components**: shadcn/ui-style primitives in `src/components/ui`
- **Tooling**: Vite, TypeScript, ESLint, Prettier, Vitest
- **Package manager / runtime**: Bun (see `bun.lock`)

---

### Project structure (high level)

- **`src/router.tsx`**: Router configuration and route registration
- **`src/routes`**: Route files for pages (home, about, projects, etc.)
- **`src/components`**: Layout and UI building blocks (e.g. `site-layout.tsx`, `ui/*`)
- **`src/content`**: Content data for the site (e.g. `site.ts`, `about.md`)
- **`src/styles.css`**: Global styles and Tailwind entrypoint

Most of the “site copy” and metadata live in `src/content/site.ts`, including:
- Name and tagline
- Values
- External links (X/Twitter, GitHub, Substack)
- Projects list and call-to-action content

---

### Getting started

#### Prerequisites

- **Bun** installed (`https://bun.sh`)
- **Node.js** 18+ recommended (for tooling compatibility)

#### Install dependencies

```bash
bun install
```

#### Run the dev server

```bash
bun dev
```

The app will start on `http://localhost:3000` (see `vite.config.ts` / dev script).

#### Build for production

```bash
bun run build
```

#### Preview production build

```bash
bun run preview
```

---

### Quality & tooling scripts

From `package.json`:

- **`bun test`** → `vitest run`
- **`bun run lint`** → `eslint`
- **`bun run format`** → `prettier`
- **`bun run check`** → `prettier --write . && eslint --fix`

Use `bun run check` for a quick all-in-one formatting and linting pass before committing.

---

### Editing content

- **About page text**: edit `src/content/about.md`
- **Site metadata, values, links, projects, CTA**: edit `src/content/site.ts`

Changes will be picked up automatically by the dev server; just refresh the browser if needed.

---

### Deployment

This is a standard Vite/TanStack Start app and can be deployed to platforms like **Vercel**, **Netlify**, or any static hosting / Node environment that supports a Vite build output.

At a high level:

1. Run `bun run build`
2. Deploy the build output according to your hosting provider’s Vite / SPA instructions