# Mafabi Hussein Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, React, Tailwind CSS, and Framer Motion.

The site is designed for recruiters, hiring managers, technical interviewers, and engineers. It presents fast project evidence on the homepage and deeper technical reasoning through the Engineering route.

## Routes

- `/` - homepage: identity, profile, capabilities, selected work, engineering gateway, contact
- `/work` - curated project inventory
- `/engineering` - architecture, decisions, constraints, trade-offs, and future improvements
- `/contact` - direct contact form and professional links
- `/api/contact` - server-side contact form endpoint

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

Run a production build before deployment.

## Environment Variables

Copy `.env.example` to `.env.local` and configure values as needed.

- `NEXT_PUBLIC_SITE_URL` - public site URL used for metadata and email context
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - optional Google Analytics measurement ID
- `RESEND_API_KEY` - required for contact form email delivery
- `CONTACT_FROM_EMAIL` - sender address, preferably a verified Resend domain
- `CONTACT_TO_EMAIL` - primary recipient for contact messages
- `CONTACT_BACKUP_EMAIL` - optional backup recipient
- `CONTACT_ALLOWED_ORIGIN` - optional comma-separated origin allowlist for contact submissions

Do not commit real secrets.

## Content Updates

Most portfolio content lives in `src/content/portfolio.ts`.

Update this file to change:

- profile details and professional links
- navigation labels
- proof signals
- professional profile copy
- capabilities and engineering approach
- featured projects
- supporting projects
- testimonials
- engineering case studies

Page and section components live in `src/components` and `src/app`.

## Deployment

Vercel is the preferred deployment target. Configure the environment variables in the Vercel project settings, then deploy from the GitHub repository or Vercel CLI.
