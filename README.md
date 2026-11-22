# Lexora Advocates & Consultants website

Next.js 14 (App Router), plain CSS, no UI library. Mobile first.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy
1. Push to GitHub.
2. In Vercel: Add New Project, import the repo, framework auto-detects as Next.js, Deploy.
3. Optional: add `ENQUIRY_WEBHOOK_URL` (Zapier, Make, Slack or any webhook) under Project Settings, Environment Variables. Without it, enquiries are only written to the server log.

## Before going live
- `[confirm]` office hours placeholder: `lib/data.js`
- Brand, content and images come from the company profile PDF (navy #272A67, Montserrat, statues and courtroom photos extracted from it).
- Advocate photos are enlarged crops of office photos. Replace with high resolution portraits in `public/images/`.
- Logo is a low resolution crop. Replace with the SVG master.
- Know Your Law article titles, dates and excerpts are drafts for the advocates to review. Article pages are not built yet.
- Real Google Map embed on Home and Contact (currently an SVG placeholder).
- Disclaimer pop-up wording: have the advocates confirm it (Bar Council of India rules).
