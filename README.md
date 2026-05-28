# Abdelhamed Nada — Portfolio

Apple-grade glassmorphism portfolio built with React 19, TanStack Router, Vite 7, Tailwind CSS v4 and Framer Motion.

## Local development

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
bun run preview
```

Output is emitted to `dist/`.

## Deploy to Vercel

1. Import the repository on [vercel.com](https://vercel.com/new).
2. Framework preset: **Vite** (auto-detected).
3. Build command: `vite build` · Output directory: `dist`.
4. No environment variables are required — the site is fully static.

`vercel.json` already configures SPA fallback rewrites and long-term caching for hashed assets.

## Other static hosts

The same `dist/` build deploys cleanly to Netlify, Cloudflare Pages, or any static host. Make sure to configure SPA fallback so client routes resolve.
