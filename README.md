This is a Next.js blog for GitHub Pages (project site) for `dan323/ari-blog`.

## Quick start

- Install: `npm install`
- Dev: `npm run dev` → http://localhost:3000
- Build static site: `npm run build` → outputs `out/`
- Preview export: `npx serve -s out`

## Content

- Blog posts: add Markdown files to `content/posts/*.md`
- Reviews: add Markdown files to `content/reviews/*.md`
- Pages: `src/app/book`, `src/app/music`, `src/app/posts`, `src/app/reviews`

## Deployment (GitHub Pages)

1) Push to GitHub

```bash
git init
git add .
git commit -m "Initialize blog"
git branch -M main
git remote add origin git@github.com:dan323/ari-blog.git  # or https URL
git push -u origin main
```

2) Enable Pages via Actions

- In GitHub repo Settings → Pages → Build and deployment → Source: GitHub Actions.
- The included workflow `.github/workflows/deploy.yml` builds on every push to `main` and deploys `out/`.

### Project-site base path

- The workflow sets `BASE_PATH=/ari-blog` so the site works under `https://dan323.github.io/ari-blog/`.
- To run a custom base path locally: `BASE_PATH=/ari-blog npm run build`.

### Notes

- Static export is enabled via `next.config.ts` (`output: "export"`, `trailingSlash: true`).
- Images use `unoptimized: true` for export compatibility.
