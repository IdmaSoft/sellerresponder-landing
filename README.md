# SellerResponder Landing

A landing page for **SellerResponder**, an Android-first app designed to help Facebook Marketplace sellers reply faster using automatic responses, reusable templates, and easy setup.

## What this project includes

- Responsive landing page layout with Hero, screenshot carousel, benefits, FAQ, and CTA sections.
- Tailwind CSS for styling and responsive breakpoints.
- Next.js App Router with optimized image support.
- Clean, professional mobile and desktop presentation.
- Developer attribution in the footer: `Developed by IdmaSoft`.

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Create a local `.env` from `.env.example` when you need environment variables. The example includes:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Project structure

- `app/page.tsx` — main landing page composition
- `components/` — reusable sections like `Hero`, `Benefits`, `Screenshots`, `FAQ`, `Footer`, and more
- `app/layout.tsx` — global metadata, fonts, and layout wrapper
- `app/globals.css` — Tailwind base styles and custom global CSS

## Notes

- The site is built as a marketing landing page and does not include a backend.
- The current footer is intentionally simple, with no external policy links added.

## Technology

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## License

This repository does not include a license file by default. Add one if you want to open source the project.
