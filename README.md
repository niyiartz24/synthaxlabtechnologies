# SynthaxLab Technologies — Official Website

A frontend-only corporate website for SynthaxLab Technologies, built with React, Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React (icons)
- EmailJS (contact form, no backend required)

## Project Structure

```
src/
├── components/
│   ├── layout/     Navbar, mobile navigation, footer, page layout
│   ├── home/       Homepage sections (hero, services preview, process, etc.)
│   ├── about/      About page sections (team card, value card)
│   ├── services/   Service card and detail sections
│   ├── projects/   Project card, filter, and placeholder visuals
│   ├── contact/    Contact form
│   └── ui/         Shared building blocks (Button, SectionHeading, Toast, ...)
├── pages/          One file per route (Home, About, Services, Projects, Contact)
├── data/           Editable content: services.ts, projects.ts, team.ts
├── config/         Editable settings: company.ts, contact.ts
├── lib/            EmailJS integration
└── hooks/          ScrollToTop, useDocumentMeta
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The site runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
```

The production build is output to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Restart the dev server after editing `.env` — Vite only reads environment variables on startup.

## EmailJS Setup

The contact form (`/contact`) sends messages through [EmailJS](https://www.emailjs.com/) directly from the browser, with no backend required.

1. Create a free EmailJS account.
2. Create an **Email Service** (e.g. connect a Gmail account) — this gives you a Service ID.
3. Create an **Email Template** — this gives you a Template ID.
4. In the template, add the following variables so they map to the form fields:
   - `from_name`
   - `from_email`
   - `company`
   - `project_type`
   - `budget`
   - `message`
   - `reply_to`
5. Find your **Public Key** under Account → API Keys.
6. Add the Service ID, Template ID, and Public Key to your `.env` file.
7. Restart the development server.

Until these values are set, the form will show the standard error message if someone tries to submit it — it will not silently fail.

## Editable Content

Update these files as the business grows — no code changes required elsewhere:

- `src/data/services.ts` — the six services shown on the homepage and Services page
- `src/data/projects.ts` — the project portfolio shown on the homepage and Projects page
- `src/data/team.ts` — team member profiles shown on the About page
- `src/config/company.ts` — company name and business registration number (footer)
- `src/config/contact.ts` — contact email and WhatsApp number

The WhatsApp contact button only appears once `contactConfig.whatsapp` is set.

## Notes

- This is a frontend-only project: there is no backend, database, or authentication.
- No placeholder statistics, testimonials, or client logos are included, in line with the project brief — add these only once real data is available.
- Project cards use abstract placeholder visuals until real screenshots are added; replace them by rendering an `<img>` in `src/components/projects/ProjectCard.tsx` once images are available.
