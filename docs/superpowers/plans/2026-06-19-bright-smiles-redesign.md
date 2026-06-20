# Bright Smiles Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Bright Smiles inspired framed canvas redesign of Utkal Dental Care using a high-contrast Lime-Chartreuse & Forest Green color scheme, a full-bleed Indian model portrait background, floating glassmorphic cards, curved SVG layouts, and overlapping badges.

**Architecture:** Encapsulate the global layout in a central rounded white container against a dark canvas, and update Tailwind configurations and component styling site-wide.

**Tech Stack:** Next.js (App Router, static export), Tailwind CSS, TypeScript, `@tabler/icons-react`.

## Global Constraints
* Keep the footer disclaimer: "Concept redesign for portfolio purposes — not affiliated with or endorsed by the clinic."
* Use `images: { unoptimized: true }` and `unoptimized` on Next.js `<Image>` components to satisfy static HTML export.
* All routes must compile statically.

---

### Task 1: Generate Hero Portrait Image

**Files:**
* Create: `public/images/hero_portrait.png`

**Interfaces:**
* Produces: A high-resolution PNG image representing a stylish Indian model with glasses smiling to be used as the homepage hero backdrop.

- [ ] **Step 1: Generate the hero portrait image**

Use the `generate_image` tool to create a clean, modern clinical scene.
Prompt: `A vibrant close-up portrait of a smiling Indian woman wearing glasses and a bright lime green clinical scrub top, happy dental patient, clean studio background, studio lighting, highly premium photography`
ImageName: `hero_portrait`

- [ ] **Step 2: Verify and copy the image to public/images/**

Copy the generated image to `public/images/hero_portrait.png`.

---

### Task 2: Global Layout Wrapper Redesign

**Files:**
* Modify: `src/app/layout.tsx`

**Interfaces:**
* Produces: A dark viewport frame (`bg-[#121413]`) wrapping a centered white rounded content canvas (`bg-white rounded-[32px] border border-[#2D3330]`).

- [ ] **Step 1: Update the layout wrapper structure**

Modify [src/app/layout.tsx](file:///d:/port-2/src/app/layout.tsx) to wrap the site header, children, and footer inside the framed container:

```typescript
// Replace body children structure in src/app/layout.tsx:
return (
  <html lang="en" className="h-full bg-[#121413]">
    <body className={`${fraunces.variable} ${inter.variable} h-full bg-[#121413] text-ink font-body p-4 md:p-6`}>
      <div className="bg-white rounded-[32px] border border-[#2D3330] shadow-2xl relative min-h-[calc(100vh-3rem)] flex flex-col justify-between overflow-hidden">
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </body>
  </html>
);
```

---

### Task 3: Color Tokens & Component Styling

**Files:**
* Modify: `tailwind.config.ts`
* Modify: `src/styles/globals.css`
* Modify: `src/components/Button.tsx`
* Modify: `src/components/BeforeAfterSlider.tsx`

**Interfaces:**
* Produces: Theme configurations and component visual tokens for chartreuse and dark forest green branding.

- [ ] **Step 1: Update `tailwind.config.ts` with new color names**

Modify [tailwind.config.ts](file:///d:/port-2/tailwind.config.ts) extend colors block:

```typescript
      colors: {
        cream: '#FFFFFF', // Page base is now pure white
        mist: '#F5F8F6',
        sand: '#EAEFEA',
        navy: '#13392E', // Deep forest green
        ink: '#1F2E27',
        slate: '#5A6E64',
        green: '#13392E', // Green matches forest green
        greenDk: '#113028',
        sky: '#D6E4DB',
        clay: '#C8765A',
        clayDk: '#A85B43',
        clayTint: '#F6E8E0',
        gold: '#D2F53E', // Gold matches chartreuse accent
        chartreuse: '#D2F53E', // New lime-yellow accent
        line: '#D5DFD9',
      },
```

- [ ] **Step 2: Update `Button.tsx` to map chartreuse colors**

Modify [src/components/Button.tsx](file:///d:/port-2/src/components/Button.tsx) to support chartreuse and deep forest green hover variants:
* Solid button gets `bg-chartreuse text-navy hover:bg-[#C2E434] transition-all font-semibold rounded-full`.
* Ghost/Outline button gets `border border-navy text-navy hover:bg-navy/5 rounded-full`.

- [ ] **Step 3: Update `BeforeAfterSlider.tsx` handle color**

Modify [src/components/BeforeAfterSlider.tsx](file:///d:/port-2/src/components/BeforeAfterSlider.tsx) handle background class from `bg-gold` to `bg-chartreuse` (or `#D2F53E`).

---

### Task 4: Homepage Hero Redesign

**Files:**
* Modify: `src/app/page.tsx`

**Interfaces:**
* Produces: Overlapping portrait layout with curved SVG lines and glassmorphic card overlays.

- [ ] **Step 1: Re-engineer Homepage Hero section**

Update [src/app/page.tsx](file:///d:/port-2/src/app/page.tsx) Hero section. Replace it with the full-bleed overlay layout:

```typescript
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-white p-2">
        <div className="relative aspect-[16/9] min-h-[580px] w-full rounded-[24px] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/hero_portrait.png" 
              alt="Utkal Dental Care Hero Portrait"
              fill
              unoptimized
              className="object-cover object-center"
            />
            {/* Subtle dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
          </div>

          {/* Left curved SVG line & circular badges */}
          <div className="absolute left-[8%] top-[15%] hidden md:block z-20">
            <svg className="w-[180px] h-[340px] text-white/40 absolute -left-8 -top-8 pointer-events-none" fill="none" viewBox="0 0 100 200">
              <path d="M10,10 Q90,90 10,190" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            <div className="flex flex-col gap-10 relative">
              {[
                { label: 'Dental', y: '0px' },
                { label: 'Skin', y: '10px' },
                { label: 'Hair', y: '0px' }
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  style={{ transform: `translateX(${badge.y})` }}
                  className="w-[52px] h-[52px] rounded-full bg-[#1A2F25] text-chartreuse border border-white/20 flex items-center justify-center shadow-lg font-bold text-xs uppercase tracking-wider"
                >
                  {badge.label[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-left paragraph */}
          <div className="absolute bottom-6 left-6 max-w-[340px] text-white z-20 hidden md:block">
            <p className="text-xs leading-relaxed opacity-90">
              When you come to Utkal Dental Care, we want you to feel like you're visiting a mate, someone who knows what you're about and cares about what you need.
            </p>
          </div>

          {/* Right Floating Glassmorphic Card */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-white/25 shadow-2xl p-8 rounded-[24px] max-w-[420px] z-20 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy px-3 py-1 bg-chartreuse rounded-full">
                Bhubaneswar Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-medium text-navy mt-4 leading-tight">
                Your Smile,<br />Skin &amp; Hair.
              </h1>
              <p className="text-slate text-sm mt-3 leading-relaxed">
                Complete multi-speciality clinical excellence in Odisha, led by senior oral surgeons and aesthetic dermatologists since 2004.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center gap-4">
              <Button href={bookHref} className="!bg-chartreuse !text-navy hover:!bg-[#C2E434]">
                Book Now
              </Button>
              <div className="h-8 w-[1px] bg-navy/20" />
              <p className="text-xs font-semibold text-navy leading-tight">
                There's always a bright smile here for you
              </p>
            </div>
          </div>

          {/* Bottom-Right overlapping avatars card */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-line p-3 rounded-[18px] flex items-center gap-3.5 z-20 max-w-[280px] shadow-lg">
            <div className="flex -space-x-2.5">
              {['/images/dr_sahu.png', '/images/hero_family.png', '/images/skin_clinic.png'].map((avatar, idx) => (
                <div key={idx} className="relative w-8 h-8 rounded-full border border-white overflow-hidden bg-slate/20">
                  <Image src={avatar} alt="patient" fill unoptimized className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[11px] font-semibold text-navy leading-tight">
              Catching up with an old friend
            </p>
          </div>
        </div>
      </section>
```

---

### Task 5: Specialist & Component Styling Updates

**Files:**
* Modify: `src/components/DoctorCard.tsx`
* Modify: `src/app/about/page.tsx`
* Modify: `src/app/services/page.tsx`

**Interfaces:**
* Produces: Accent mappings and dark panels for inner doctor/treatment blocks.

- [ ] **Step 1: Update DoctorCard background styling**

Modify [src/components/DoctorCard.tsx](file:///d:/port-2/src/components/DoctorCard.tsx) to use the deep forest green (`bg-navy text-white border-none`) backdrop with a chartreuse border on the inner card frame to look incredibly high-end.

---

### Task 6: Build Verification

**Files:**
* Modify: None (build verification command)

**Interfaces:**
* Produces: Clean compiled Next.js build.

- [ ] **Step 1: Run static compilation build**

Run: `npm run build`
Expected: Static build completes successfully.
