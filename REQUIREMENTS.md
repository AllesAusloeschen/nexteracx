# nexteracx.co — Requirements

## Overview

**nexteracx.co** is a professional consulting website for Mathias Dorr, a senior CX (Customer Experience) operations consultant specializing in DTC and SaaS brands.

**Core services:** CX audits, Gorgias/Zendesk optimization, automation workflows, QA frameworks, and scaling support operations.

**Positioning:** McKinsey-meets-DTC. Professional, authoritative, results-focused. Confident but not arrogant. No fluff.

**Key credibility signals:**
- 5+ years at Every Man Jack (DTC men's grooming): 40% ticket volume reduction, 99th percentile CSAT
- 4 years at B-Stock Solutions (dual-sided SaaS marketplace): Fortune 500 enterprise clients, international buyer base, online auction platform for overstock/returns
- MBA from Gonzaga University
- Cross-domain expertise spanning DTC, SaaS, and international/cross-border operations

---

## Pages

### 1. Homepage (`/`)

- **Hero section**
  - Headline: positioning as a CX operations strategist for growing DTC and SaaS brands
  - Subhead: measurable results (40% ticket reduction, 99th percentile CSAT)
- **Intro section:** brief narrative highlighting dual expertise — DTC scale at Every Man Jack and enterprise SaaS rigor at B-Stock Solutions
- **Services overview:** 3 cards
  - CX Audit
  - Ops Optimization
  - Team Scaling
- **Results section:** key metrics from past work (ticket reduction %, CSAT percentile, etc.)
- **About teaser:** short bio with photo placeholder
- **Primary CTA:** "Book a Strategy Call" linking to Calendly (**URL TBD**)

### 2. Services (`/services`)

Three core offerings, each with detailed description:

1. **CX Operations Audit**
   - Comprehensive review of current ops, tech stack, and workflows
   - Actionable recommendations report

2. **Systems Optimization**
   - Gorgias/Zendesk setup and configuration
   - Automation workflows
   - AI agent implementation
   - Knowledge management systems

3. **Team & Process Scaling**
   - Hiring frameworks
   - QA systems
   - Offshore team management
   - Escalation paths
   - International support operations

- **Pricing:** "Request a Quote" per service (no public pricing)
- **FAQ section:** common questions about engagement model, timelines, industries served

### 3. About (`/about`)

- Professional bio
- Every Man Jack experience: DTC scale, automation, CSAT excellence
- B-Stock Solutions experience: SaaS marketplace, Fortune 500 enterprise clients, international buyer base
- MBA from Gonzaga University
- Approach and philosophy: combining DTC agility with enterprise SaaS rigor
- **Photo placeholder (TBD)**

### 4. Contact (`/contact`)

- Calendly embed for strategy calls (**URL TBD**)
- Email contact form (Formspree or similar)
- LinkedIn link

---

## Design System

### Aesthetic
- Minimalist, professional, high-end consulting
- Generous whitespace
- No stock photos of fake diverse teams — clean and minimal imagery only

### Color Palette
| Role       | Color                |
|------------|----------------------|
| Primary    | Navy (`#1B2A4A`)     |
| Background | White (`#FFFFFF`)    |
| Text       | Charcoal (`#2D2D2D`)|
| Accent     | Teal or Gold (TBD — pick one and apply consistently) |

### Typography
- **Font family:** Inter (or similar clean sans-serif)
- Clear hierarchy: large headings, readable body text
- Consistent sizing scale via Tailwind

### Responsiveness
- Mobile-first responsive layout
- All pages fully functional on mobile, tablet, and desktop

---

## Tech Stack

| Layer         | Choice                          |
|---------------|----------------------------------|
| Framework     | Next.js (App Router)            |
| Language      | TypeScript                       |
| Styling       | Tailwind CSS                     |
| Contact form  | Formspree (or equivalent)        |
| Scheduling    | Calendly embed                   |
| Analytics     | Google Analytics 4 (gtag ready) |
| Hosting       | Vercel                           |

---

## SEO & Metadata

- Unique `<title>` and `<meta description>` per page
- Open Graph tags (title, description, image) for social sharing
- `schema.org` structured data: `ProfessionalService` or `ConsultingBusiness` type
- Canonical URLs
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- Sitemap and robots.txt via Next.js

---

## Deployment

- Deploy to **Vercel** connected to the project repo
- Domain: **nexteracx.co**
- HTTPS enforced (handled by Vercel)
- Environment variables for Formspree endpoint, GA4 measurement ID

---

## Open Questions

| Item                  | Status |
|-----------------------|--------|
| Calendly URL          | TBD    |
| Headshot / photo      | TBD    |
| Accent color (teal vs gold) | TBD — decide during design |
| Formspree endpoint    | TBD — create account and get form ID |
| GA4 measurement ID    | TBD    |
| LinkedIn profile URL  | TBD    |
| Domain DNS setup      | TBD — point nexteracx.co to Vercel |
