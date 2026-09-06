# Mohammed Alshaheri — Portfolio 2026

A clean rebuild of Mohammed Alshaheri's developer portfolio using modern Next.js, React and TypeScript.

## Why this version exists

The previous portfolio was originally built on Create React App and accumulated template code, outdated dependencies and old project data. This version starts from a small, maintainable codebase and focuses on current work.

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Plain CSS (no UI framework dependency)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run typecheck
npm run build
```

## Content editing

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update that file to change social links, skills, projects, experience, education and languages.

## Deployment

This project is ready for Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final production URL if it changes.

## Before final launch

- Replace the current CV link with the latest CV.
- Confirm all dates and wording in Experience / Education.
- Add real Abbod Delivery screenshots when ready.
- Add German localization as a follow-up enhancement.
