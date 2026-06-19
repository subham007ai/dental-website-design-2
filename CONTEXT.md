# Utkal Dental Care — Project Context & Build Plan
*Read this first. It contains everything needed to rebuild and ship this site in Next.js.*

---

## 0. TL;DR

A **portfolio concept redesign** of a real multi-speciality clinic (Utkal Dental Care, Bhubaneswar). The clinic never engaged us, so this is a **self-directed portfolio piece** — treat as a concept, keep the footer disclaimer, use stock/AI imagery and illustrative reviews.

There is already a **complete, working multi-page static site** in this folder (HTML + shared CSS + JS). **It is the source of truth for design and content.** The job in Claude Code is to **port it to Next.js**, preserve the design system exactly, add real SEO/medical schema, a working booking flow, and deploy — with clean git history (the repo is the portfolio proof).

**Stack:** Next.js (App Router, TypeScript, static export) + Tailwind.

---

## 1. The business (real facts — for content + schema)

- **Name / brand:** Utkal Dental Care — positioned as **"Utkal Dental Care · Dental · Skin · Hair"** (umbrella brand; the old site inconsistently flipped between "Dental Clinic" and "Dental Care" — use **"Utkal Dental Care"** everywhere).
- **Established:** 2004 (~21+ years).
- **Type:** **multi-speciality** — Dental + Dermatology/Skin + Hair restoration + Aesthetics. NOT just a dentist.
- **Lead doctor:** Dr. Satyajit Sahu — BDS, MDS; Associate Professor, Hi-Tech Dental College; ~17 yrs; oral & implant surgeon. Skin/hair handled by dermatology & aesthetic specialists.
- **Address:** Plot No. 166, Unit-6, Ganga Nagar / Ekamra Marg, near Maa Sakti Hospital, Bhubaneswar 751001, Odisha.
- **Phone:** 81447 99927 (use ONE consistent number; the old site had four, two fake).
- **Email:** utkaldentalcareodisha@gmail.com
- **Hours:** Mon–Sat 9 AM–9 PM · Sun 9 AM–1 PM *(old site/Practo disagree — confirm before real publish)*.
- **Reputation:** 4.9★ / 203 reviews (Justdial); also Practo, Lybrate, Facebook.
- **Stats (clinic's own claims — verify before real use):** 21+ years, 1 lakh+ patients, 7000+ implants, 70000+ root canals.

### Services (real, from the live site)
**Dental:** preventive/general, restorative, cosmetic (whitening, veneers, smile design), orthodontics (braces/aligners), pediatric, oral surgery, implants, root canal.
**Skin & Hair:** Hair — FUE/FUT transplant, PRP, hair-loss/scalp care. Skin — acne, pigmentation, eczema, psoriasis, fungal, vitiligo, allergies, skin-cancer screening. Aesthetics — laser (hair removal, rejuvenation, pigmentation, scar/tattoo), dermal fillers, deep chemical peels.

---

## 2. What already exists (port these — don't restart)

In this folder:
- `index.html` — Home
- `about.html` — About (story, what we offer, doctor, values)
- `services.html` — Services (Dental + Skin & Hair, alternating rows)
- `patient-education.html` — oral-care tips (6 cards)
- `contact.html` — contact cards + booking form + map
- `style.css` — shared design system (the **Evergreen & Ivory** theme — see §3)
- `app.js` — before/after slider, scroll reveals, animated counters, mobile menu

All copy is already corrected (right service descriptions, one brand, since 2004, one phone). **Convert these pages into Next.js routes and components, preserving design + content.**

---

## 3. Design system — "Evergreen & Ivory" (reproduce exactly)

### Colors
```
--cream:  #F8F4EC   /* page background (warm ivory) */
--white:  #FFFFFF   /* cards */
--mist:   #EEF2EC   /* soft green-tinted section */
--sand:   #F3EDE1   /* warm alt section */
--navy:   #13392E   /* deep forest — dark sections, headings, footer */
--ink:    #23332C   /* body text */
--slate:  #6B7A72   /* muted text */
--teal:   #1F6B57   /* PRIMARY accent (forest green) — dental + CTAs */
--teal-dk:#15513F   /* primary hover */
--sky:    #E3EDE6   /* green tint behind icons */
--rose:   #C8765A   /* SECONDARY accent (terracotta/clay) — skin & hair */
--rose-dk:#A85B43
--rose-tint:#F6E8E0
--gold:   #C39A45   /* premium accent — stars, timeline numbers, B/A handle */
--line:   #E7E5DA   /* warm hairline */
```
Note: CSS class names keep the old names (`--teal`, `.btn-teal`, `.pillar.skin`) but the *values* are the Evergreen palette. In the Next port, rename to semantic tokens (`green`, `clay`, `gold`) for clarity.

### Typography
- Headings: **Fraunces** (soft serif) — warm, premium, botanical against the green.
- Body/UI: **Inter**.
- Sentence case; no ALL-CAPS slabs.

### Icons
- Static site uses the **Tabler webfont via CDN** (needs internet). **In Next, switch to the `@tabler/icons-react` package** — no CDN dependency, no blank-icon risk. Same icon names (`ti-dental` → `IconDental`, etc.).

### Components (build as React components)
`Header/Nav` (sticky, logo lockup, mobile burger collapses ≤980px) · `Button` (green / clay / ghost) · `Eyebrow` · `Hero` · `Badges` strip · `StatsBand` (animated counters) · `Pillars` (two-speciality cards) · `DoctorCard` · `FeatureGrid` · `VisitTimeline` · `BeforeAfterSlider` · `Testimonial` · `BookingForm` · `LocationBlock` · `ContactCard` · `EduCard` · `ServiceRow` (alternating) · `FAQAccordion` · `Footer` (dark green) · `MobileBar` · `Frame` (placeholder) · `Reveal`.

### Header note (recently fixed)
Logo = green tile + "Utkal Dental Care" (Fraunces 19px) + tiny "Dental · Skin · Hair" sub. Keep it compact and `nowrap`; nav collapses to burger ≤980px. Don't reintroduce "Since 2004" into the header (it's in the footer).

---

## 4. Site structure (Next.js routes)
- `/` Home · `/about` · `/services` (anchors `#dental`, `#skin`) · `/patient-education` · `/contact` (anchor `#book`).
- Optional later: a route per service (`/services/[slug]`) using the real per-service copy from the live site.

---

## 5. Stack & conventions

- **Next.js** (latest), **App Router**, **TypeScript**, **static export** (`output:'export'`, `images.unoptimized:true`).
- **Tailwind** — map §3 tokens into `tailwind.config`.
- **Fonts:** `next/font/google` for Fraunces + Inter (self-hosted).
- **Icons:** `@tabler/icons-react`.
- **Images:** `next/image` (pre-compressed WebP), lazy below the fold.
- **Booking:** WhatsApp deep-link (`https://wa.me/918144799927?text=...`) + Web3Forms/Formspree email fallback. No backend.
- **SEO:** Next Metadata API per page; `Dentist`/`MedicalClinic` JSON-LD with `aggregateRating`; `next-sitemap`; favicon + OG image.
- **Analytics:** Plausible or Vercel Analytics; track Book clicks.
- **Host:** Vercel/Netlify. Keep `utkaldentalcare.in` if it ever goes real (just repoint).
- Single source of truth for NAP/services/prices in `lib/site.ts`.

### Suggested structure
```
src/app/  (layout.tsx, page.tsx, about/, services/, patient-education/, contact/)
src/components/  (one per component in §3)
src/lib/site.ts  (NAP, hours, services, doctor, stats)
src/styles/globals.css  (tokens + Tailwind base)
public/  (favicon, og-image, robots.txt, /images)
```

---

## 6. Build plan (phased, each with acceptance criteria)

**Phase 1 — Scaffold + design system.** create-next-app, Tailwind, tokens, fonts, `@tabler/icons-react`. Build `Layout`, `Header`, `Footer`, `Button`, `Reveal`, `Frame`. *Done when:* dev server renders base layout with Evergreen theme, fonts, working nav + dark footer.

**Phase 2 — Port Home.** Convert `index.html` to `page.tsx` with components. Wire before/after slider, counters, reveals as client components. *Done when:* `/` matches the static page, interactions work, responsive at 360/768/1160.

**Phase 3 — Port About + Services.** `/about` and `/services` (with `#dental`/`#skin` anchors and `ServiceRow`). *Done when:* both match, cross-nav works.

**Phase 4 — Port Patient Education + Contact.** `EduCard` grid; contact cards + grouped `BookingForm` + map. *Done when:* form opens WhatsApp prefilled + emails via Web3Forms; map embed live.

**Phase 5 — Real-ish content & imagery.** Replace placeholder frames with sourced/AI WebP images; keep reviews clearly illustrative. *Done when:* no empty frames on key sections.

**Phase 6 — SEO & medical schema.** Per-page metadata; `Dentist`/`MedicalClinic` JSON-LD (see §7); sitemap, robots, favicon, OG. Consistent NAP from `site.ts`. *Done when:* Lighthouse SEO 100, structured data validates.

**Phase 7 — Performance & a11y.** WebP + lazy, preload fonts, `prefers-reduced-motion`, focus-visible, contrast, keyboard nav. *Done when:* Lighthouse Perf 95+, A11y 95+, Best Practices 100.

**Phase 8 — Deploy + case study.** Vercel/Netlify, analytics. Write the case study (the discovery: "a hidden multi-speciality clinic with an unfinished template — rebuilt with correct positioning"). *Done when:* live + case study drafted.

---

## 7. Drop-in references

### Tailwind theme
```js
theme:{extend:{
  colors:{
    cream:'#F8F4EC', mist:'#EEF2EC', sand:'#F3EDE1',
    navy:'#13392E', ink:'#23332C', slate:'#6B7A72',
    green:'#1F6B57', greenDk:'#15513F', sky:'#E3EDE6',
    clay:'#C8765A', clayDk:'#A85B43', clayTint:'#F6E8E0',
    gold:'#C39A45', line:'#E7E5DA',
  },
  fontFamily:{ display:['Fraunces','serif'], body:['Inter','sans-serif'] },
  maxWidth:{ site:'1160px' },
}}
```

### Dentist / MedicalClinic JSON-LD (fill domain on deploy)
```json
{
  "@context":"https://schema.org",
  "@type":["Dentist","MedicalClinic"],
  "name":"Utkal Dental Care",
  "description":"Multi-speciality clinic in Bhubaneswar since 2004 — dental care, dermatology, hair restoration and aesthetics.",
  "foundingDate":"2004",
  "address":{"@type":"PostalAddress","streetAddress":"Plot 166, Unit-6, Ganga Nagar, near Maa Sakti Hospital","addressLocality":"Bhubaneswar","addressRegion":"Odisha","postalCode":"751001","addressCountry":"IN"},
  "telephone":"+91-8144799927",
  "email":"utkaldentalcareodisha@gmail.com",
  "openingHours":["Mo-Sa 09:00-21:00","Su 09:00-13:00"],
  "priceRange":"₹₹",
  "url":"https://REPLACE-DOMAIN",
  "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"203"},
  "medicalSpecialty":["Dentistry","Dermatology"],
  "sameAs":["https://www.practo.com/bhubaneswar/clinic/utkal-dental-care-airport","https://www.facebook.com/UtkalDentalCare/"]
}
```

### Per-page titles
- Home: "Utkal Dental Care — Dental, Skin & Hair Clinic in Bhubaneswar"
- About: "About — Utkal Dental Care, Bhubaneswar"
- Services: "Services — Dental, Skin & Hair · Utkal Dental Care"
- Contact: "Contact & Book — Utkal Dental Care, Bhubaneswar"

### Image shot list (source stock/AI)
Clinic exterior/signage · reception & treatment rooms (hygiene) · Dr. Sahu portrait · dental procedure · hair-transplant/PRP · skin/laser treatment · happy patient portraits · before/after (smiles, hair, skin) with consent. One aspect ratio per group, WebP.

---

## 8. Things to preserve / not regress
- One brand name ("Utkal Dental Care"); since 2004; one phone (81447 99927).
- Correct service descriptions (don't reintroduce the live site's scrambled/glove-factory/lorem text).
- Multi-speciality two-pillar positioning (Dental + Skin & Hair).
- Evergreen & Ivory palette; Fraunces + Inter; compact header.
- Footer disclaimer: "Concept redesign for portfolio purposes — not affiliated with or endorsed by the clinic."

---

## 9. First prompt to give Claude Code

> Read `CONTEXT.md` in full, plus the existing static site here (`index.html`, `about.html`, `services.html`, `patient-education.html`, `contact.html`, `style.css`, `app.js`). This is a portfolio concept redesign of Utkal Dental Care — a multi-speciality clinic.
> Build it as a **Next.js** site (App Router, TypeScript, static export, Tailwind). The static files are the source of truth for design and content — preserve the "Evergreen & Ivory" design system (tokens in §3/§7), Fraunces + Inter fonts, and all corrected copy. Use `@tabler/icons-react` instead of the Tabler CDN webfont.
> Start with **Phase 1**: scaffold the project, configure Tailwind with the tokens, set up `next/font`, install `@tabler/icons-react`, and build `Layout`, `Header`, `Footer`, `Button`, `Reveal`, and `Frame`. Run the dev server and show me the base layout before porting Home. Commit at the end of the phase.
