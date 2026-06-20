# Premium Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire Utkal Dental Care website to a high-end, premium Modern Minimalist & Clean Tech-Clinical aesthetic (Approach A) with full Indian-style photography, no blank placeholders, and three new pages (Gallery, Patient Info, Blog).

**Architecture:** Use App Router Next.js with static HTML export compatibility. Leverage `@tabler/icons-react` for premium iconography. Apply a fine-line 1px grid layout, arched containers, and a clinical mint-white theme.

**Tech Stack:** Next.js (App Router, static export), Tailwind CSS, TypeScript, `@tabler/icons-react`.

## Global Constraints
* No global `pip install` or arbitrary command execution outside the workspace.
* Keep the footer disclaimer intact: "Concept redesign for portfolio purposes — not affiliated with or endorsed by the clinic."
* Use `images: { unoptimized: true }` or pass `unoptimized` directly to Next.js `<Image>` components to satisfy static HTML export.
* Keep all routing strictly static.

---

### Task 1: Generate Additional Indian Clinical Image

**Files:**
* Create: `public/images/dental_checkup.png`

**Interfaces:**
* Produces: A PNG image representing a dental checkup to be consumed in general services and patient consult pages.

- [ ] **Step 1: Generate the dental checkup image**

Use the `generate_image` tool to create a clean, modern clinical scene.
Prompt: `A modern, premium dental checkup room, a professional male Indian dentist in medical scrubs consulting a smiling female Indian patient, clinical and hygienic aesthetic, bright lighting, high quality portrait, close-up shot, shallow depth of field`
ImageName: `dental_checkup`

- [ ] **Step 2: Verify the image exists**

Verify that the file `/images/dental_checkup.png` is generated and saved correctly under `public/images/dental_checkup.png`.

---

### Task 2: Design Tokens & Tailwind Configurations

**Files:**
* Modify: `tailwind.config.ts`
* Modify: `src/styles/globals.css`

**Interfaces:**
* Produces: Tailwind styles and utility classes for Approach A (Mint backgrounds, fine-line borders, geometric shapes).

- [ ] **Step 1: Update `tailwind.config.ts` with new color system and custom rounded classes**

Replace the color mappings in [tailwind.config.ts](file:///d:/port-2/tailwind.config.ts) to define a soft mint background and fine border line colors:

```typescript
// Insert under extend.colors:
colors: {
  cream: '#F4F8F6', // Changing base cream to Mint-White
  mist: '#EAEFEA',
  sand: '#EDF3EE',
  navy: '#13392E',
  ink: '#23332C',
  slate: '#6B7A72',
  green: '#1F6B57',
  greenDk: '#15513F',
  sky: '#D6E4DB',
  clay: '#C8765A',
  clayDk: '#A85B43',
  clayTint: '#F6E8E0',
  gold: '#C39A45',
  line: '#D5DFD9', // Fine-line border color
}
```

- [ ] **Step 2: Add utility classes for grids and arched frames in `globals.css`**

Add class definitions for custom arched image shapes and layout borders in [globals.css](file:///d:/port-2/src/styles/globals.css):

```css
@layer utilities {
  .arch-frame {
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
    overflow: hidden;
    border: 1px solid #D5DFD9;
  }
  .fine-grid {
    border: 1px solid #D5DFD9;
  }
}
```

---

### Task 3: Premium Component Redesigns

**Files:**
* Modify: `src/components/Frame.tsx`
* Modify: `src/components/DoctorCard.tsx`
* Modify: `src/components/Header.tsx`
* Modify: `src/components/Footer.tsx`

**Interfaces:**
* Consumes: Theme variables, standard Next.js images, and icons from `@tabler/icons-react`.
* Produces: Upgraded React components with custom borders, responsive grid layouts, and archway images.

- [ ] **Step 1: Update `Frame.tsx` to support the fine-line border and optional arched look**

Modify [Frame.tsx](file:///d:/port-2/src/components/Frame.tsx) to accept an optional `arch` boolean parameter. When `arch` is true, render with the `arch-frame` class.

```typescript
// src/components/Frame.tsx
import Image from 'next/image';

interface FrameProps {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  src?: string;
  arch?: boolean;
}

export default function Frame({ label, icon, className = '', src, arch = false }: FrameProps) {
  return (
    <div className={`relative overflow-hidden bg-white fine-grid ${arch ? 'arch-frame' : 'rounded-[20px]'} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={label || 'Clinic visual'}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate/50 p-6 text-center">
          {icon && <div className="mb-3 text-green/60">{icon}</div>}
          {label && <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Update `DoctorCard.tsx` with a dual-column layout and arched doctor portrait**

Modify [DoctorCard.tsx](file:///d:/port-2/src/components/DoctorCard.tsx) to render a premium grid structure separated by a fine vertical line on desktop:

```typescript
// src/components/DoctorCard.tsx
import Frame from './Frame';
import Eyebrow from './Eyebrow';

interface DoctorCardProps {
  eyebrow: string;
  name: string;
  role: string;
  creds: Array<{ icon: any; label: string }>;
  src?: string;
  children: React.ReactNode;
}

export default function DoctorCard({ eyebrow, name, role, creds, src, children }: DoctorCardProps) {
  return (
    <section className="section bg-white border-y border-line" id="doctor">
      <div className="wrap grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <div>
          <Frame
            src={src || '/images/dr_sahu.png'}
            label={name}
            arch
            className="aspect-[4/5] w-full max-w-[380px] mx-auto shadow-soft"
          />
        </div>
        <div className="md:pl-8 md:border-l border-line py-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-4xl mt-3 font-display font-medium text-navy">{name}</h2>
          <p className="text-sm font-semibold text-green mt-1 tracking-wide">{role}</p>
          <div className="mt-6 space-y-4 text-slate text-[15px] leading-relaxed">
            {children}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line pt-6">
            {creds.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-2 bg-sky/50 rounded-full text-green">
                  <Icon size={18} />
                </div>
                <span className="text-[13px] font-semibold text-ink leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `Header.tsx` to include new page routes**

Add navigation links in [Header.tsx](file:///d:/port-2/src/components/Header.tsx) to link to `/gallery`, `/patient-info`, and `/blog`.

```typescript
// Update NAV_LINKS array in Header.tsx:
const NAV_LINKS = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/gallery/', label: 'Results' },
  { href: '/patient-info/', label: 'Patient Info' },
  { href: '/blog/', label: 'Care Blog' },
  { href: '/contact/', label: 'Contact & Book' },
];
```

---

### Task 4: Pages Layout Redesigns

**Files:**
* Modify: `src/app/page.tsx`
* Modify: `src/app/about/page.tsx`

**Interfaces:**
* Consumes: Image paths, redesigned components, and typography configurations.
* Produces: Fully redesigned Home and About routes adopting Approach A.

- [ ] **Step 1: Redesign the Homepage (`src/app/page.tsx`) Hero and Pillars**

Edit [page.tsx](file:///d:/port-2/src/app/page.tsx). Transform the Hero layout:
* Left side (60%): Clean typography grid wrapped in thin 1px outline box.
* Right side (40%): Large arched container holding `/images/hero_family.png`.
* Split Pillars with a central vertical divider.

- [ ] **Step 2: Update the About page (`src/app/about/page.tsx`)**

Edit [about/page.tsx](file:///d:/port-2/src/app/about/page.tsx):
* Pass `src="/images/skin_clinic.png"` and `arch={true}` to the first `<Frame>` component.
* Pass `src="/images/dr_sahu.png"` to the `<DoctorCard>` component.

---

### Task 5: Smile & Treatment Gallery Page (`/gallery`)

**Files:**
* Create: `src/app/gallery/page.tsx`

**Interfaces:**
* Produces: A multi-speciality results showcase page with dynamic interactive Before/After sliders.

- [ ] **Step 1: Write the gallery page code**

Create [gallery/page.tsx](file:///d:/port-2/src/app/gallery/page.tsx) with a responsive, filterable visual results layout:

```typescript
// src/app/gallery/page.tsx
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Smile & Treatment Gallery — Utkal Dental Care',
  description: 'See the real results of our dental, skin and hair treatments. Real patient smile makeovers, hair restorations, and aesthetic skin therapy.',
};

const cases = [
  {
    title: 'Full Smile Makeover',
    category: 'dental',
    before: '/images/hero_family.png', // Fallback/Procedure context
    after: '/images/dental_implants.png',
    doctor: 'Dr. Satyajit Sahu',
    details: 'Ceramic crowns and orthodontic alignment, completed in 4 sessions.',
    quote: '"My confidence has completely changed. Smiling feels natural now."',
  },
  {
    title: 'Hair Regrowth Treatment',
    category: 'hair',
    before: '/images/skin_clinic.png',
    after: '/images/hair_transplant.png',
    doctor: 'Clinical Trichologist',
    details: '6 sessions of advanced PRP therapy and topical scalp treatment.',
    quote: '"The hair thinning stopped within weeks and density has improved immensely."',
  }
];

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Results" title="Smile & Treatment Gallery">
        Compare actual before and after results of our dental, hair and skin procedures.
      </PageHero>
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((item, idx) => (
              <Reveal key={idx} className="fine-grid bg-[#F4F8F6] p-6 rounded-[24px]">
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                  beforeAlt={`${item.title} Before`}
                  afterAlt={`${item.title} After`}
                  className="aspect-[4/3] rounded-[16px] overflow-hidden"
                />
                <div className="mt-6 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-green px-2.5 py-1 bg-sky/50 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-display text-navy">{item.title}</h3>
                  <p className="text-slate text-sm">{item.details}</p>
                  <p className="text-xs text-greenDk font-semibold">Specialist: {item.doctor}</p>
                  <div className="border-t border-line pt-3 mt-3">
                    <p className="italic text-sm text-ink">{item.quote}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

### Task 6: Patient Info & Pricing Page (`/patient-info`)

**Files:**
* Create: `src/app/patient-info/page.tsx`

**Interfaces:**
* Produces: A page explaining first-visit timeline, pricing transparency lists, and autoclave safety protocols.

- [ ] **Step 1: Create `patient-info/page.tsx`**

Create [patient-info/page.tsx](file:///d:/port-2/src/app/patient-info/page.tsx):

```typescript
// src/app/patient-info/page.tsx
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import { IconShieldCheck, IconStethoscope, IconCoin, IconCalendar } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Patient Information & Pricing — Utkal Dental Care',
  description: 'First-visit expectations, diagnostic pricing transparency, and sterilisation safety guidelines at Utkal Dental Care, Bhubaneswar.',
};

export default function PatientInfoPage() {
  return (
    <>
      <PageHero crumb="Resources" title="Patient Information">
        Plan your visit with clear pricing brackets, sterilisation protocols, and diagnostic guides.
      </PageHero>

      {/* Sterilisation & Safety */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Safety First" title="Sterilisation Protocols" center>
              We maintain strict, medical-grade hygiene standards to protect our patients and clinical staff.
            </SectionHead>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { title: 'Autoclave Sterilisation', desc: 'All surgical and dental instruments undergo 100% autoclave steam sterilisation under high pressure.' },
              { title: 'Disposable Instruments', desc: 'Surgical needles, gloves, cups, and suction tips are disposed of immediately after a single clinical use.' },
              { title: 'Air & Surface Disinfection', desc: 'All clinical surfaces and dental chairs are disinfected with medical-grade sanitisers between sessions.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-cream rounded-[20px] fine-grid">
                <IconShieldCheck className="text-green mb-3" size={32} />
                <h3 className="text-xl font-display text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Transparency" title="Standard Treatment Pricing" center>
              Clear pricing guidance. Actual cost details depend on individual diagnostic complexity.
            </SectionHead>
          </Reveal>
          <div className="max-w-[700px] mx-auto mt-10 fine-grid bg-white p-8 rounded-[24px]">
            <div className="divide-y divide-line">
              {[
                { title: 'Clinical Consultation (Dental/Skin)', price: '₹300 - ₹500' },
                { title: 'Root Canal Treatment (RCT)', price: '₹2,500 - ₹5,000' },
                { title: 'Dental Implants (Single Unit)', price: '₹18,000 - ₹35,000' },
                { title: 'Skincare Chemical Peel', price: '₹1,500 - ₹3,000' },
                { title: 'PRP Hair Therapy (Per Session)', price: '₹3,500 - ₹6,000' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between py-4 text-sm font-medium">
                  <span className="text-navy">{item.title}</span>
                  <span className="text-green font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate mt-6 text-center">
              * Rates shown are standard averages and do not include laboratory customisations or special surgical additions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

### Task 7: Resource Hub & Blog Page (`/blog`)

**Files:**
* Create: `src/app/blog/page.tsx`

**Interfaces:**
* Produces: A premium blog listing containing medical educational topics for SEO and patient guidance.

- [ ] **Step 1: Create `blog/page.tsx`**

Create [blog/page.tsx](file:///d:/port-2/src/app/blog/page.tsx):

```typescript
// src/app/blog/page.tsx
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oral & Skincare Health Blog — Utkal Dental Care',
  description: 'Expert medical articles and tips on maintaining oral hygiene, hair growth, and clinical skin rejuvenation treatments.',
};

const posts = [
  {
    title: '5 Steps to Choose Between Braces and Clear Aligners',
    category: 'Dental',
    date: 'June 18, 2026',
    summary: 'A detailed comparative guide looking at comfort, treatment duration, visibility, and cost of modern orthodontic solutions.',
    src: '/images/dental_checkup.png',
  },
  {
    title: 'Understanding PRP Hair Restoration Therapy',
    category: 'Hair',
    date: 'June 10, 2026',
    summary: 'How platelet-rich plasma works to stimulate dormant hair follicles, what to expect, and session timeline details.',
    src: '/images/hair_transplant.png',
  },
  {
    title: 'Daily Skincare Routine: Tips from Dermatologists',
    category: 'Skin',
    date: 'May 28, 2026',
    summary: 'Cleanse, hydrate, protect. The simple three-step clinical guideline to prevent acne, pigmentation and early aging.',
    src: '/images/skin_clinic.png',
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero crumb="Care Blog" title="Oral & Skincare Resource Hub">
        Clinical tips and expert advice written by Utkal Dental Care specialists.
      </PageHero>
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Reveal key={idx} className="fine-grid bg-[#F4F8F6] rounded-[24px] overflow-hidden flex flex-col h-full hover:shadow-soft transition-shadow">
                <div className="relative aspect-[16/10] w-full bg-white">
                  <Image src={post.src} alt={post.title} fill unoptimized className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green px-2 py-0.5 bg-sky rounded">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-display text-navy leading-tight">{post.title}</h3>
                    <p className="text-slate text-xs">{post.date}</p>
                    <p className="text-ink text-sm leading-relaxed">{post.summary}</p>
                  </div>
                  <div className="border-t border-line pt-4 mt-6">
                    <Link href="/contact/" className="text-xs font-semibold text-green hover:text-greenDk flex items-center gap-1">
                      Consult a Specialist →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

### Task 8: Contact Page & Build Verification

**Files:**
* Modify: `src/app/contact/page.tsx`
* Modify: `src/app/page.tsx`

**Interfaces:**
* Produces: A polished contact booking page and a successful static compilation build.

- [ ] **Step 1: Inject the new `dental_checkup.png` into Services page/details placeholder mappings**

Modify [src/lib/services.ts](file:///d:/port-2/src/lib/services.ts) to map `dental_checkup.png` as the default photo for general/preventive dental services.

- [ ] **Step 2: Run verification build and inspect results**

Run: `npm run build`
Expected: Production build successfully compiles all 21 routes.

---

## Execution Handoff
Plan complete and saved to `docs/superpowers/plans/2026-06-19-premium-redesign.md`. Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach?
