# Design Specification: Bright Smiles style Redesign of Utkal Dental Care

This document outlines the design specification for the **Bright Smiles** inspired redesign of the Utkal Dental Care website. We are adopting a **Framed Canvas** layout (Approach A) using a vibrant **Lime-Chartreuse & Forest Green** color palette.

---

## 1. Visual Theme: The Framed Canvas

### 1.1 Global Layout & Outer Canvas
* **Charcoal Canvas**: The body background of the entire website viewport is styled with a premium dark charcoal (`#121413`).
* **Letterbox Frame**: The website content is wrapped inside a centered container with rounded edges, serving as a framed canvas:
  * Classes: `bg-white rounded-[32px] border border-[#2D3330] p-6 md:p-8 my-6 max-w-[1240px] mx-auto shadow-2xl relative min-h-[calc(100vh-3rem)]`
  * All pages, including the sticky header and footer, sit inside this white container.

### 1.2 Color Tokens
* `--canvas-bg`: `#121413` (Outer body viewport backdrop)
* `--container-bg`: `#FFFFFF` (Inner central canvas background)
* `--accent-chartreuse`: `#D2F53E` (Vibrant lime-yellow for CTA buttons, active state underlines, active pill backgrounds)
* `--navy`: `#13392E` (Deep forest-navy for dominant headings, text highlights, and footer backdrops)
* `--dark-badge`: `#1A2F25` (Forest green-black for the dark circular icon badges)
* `--border-line`: `#D5DFD9` (Fine-line borders)

---

## 2. Homepage Hero Layout & Overlays

The Homepage Hero section is transformed into a single unified visual block:
* **Background Portrait**: A full-bleed background image of a smiling Indian model (`/images/hero_portrait.png`) filling the container width.
* **Left Overlays**:
  * **SVG Dotted Curve**: A custom `<svg>` layout containing a thin curved dashed line.
  * **Circular Badges**: Three floating circle overlays (`rounded-full bg-[#1A2F25] text-[#D2F53E] border border-white/10 flex items-center justify-center shadow-md`) placed along the curve, holding icons for *Dental, Skin, and Hair*.
  * **Editorial Text Block**: A small, clean paragraph at the bottom left describing the friendly, patient-focused care philosophy.
* **Right Overlays**:
  * **Floating Glassmorphic Card**: A box styled with `backdrop-blur-md bg-white/80 p-8 rounded-[24px] border border-white/20 shadow-lg max-w-[420px]` containing:
    * Title: "Utkal Dental Care" (in deep navy `#13392E` bold sans-serif)
    * Button: Solid chartreuse `bg-[#D2F53E] text-[#13392E]` ("BOOK NOW") with a vertical separator and text: "There's always bright smile here for you".
  * **Patient Avatars Card**: Placed at the bottom right of the hero banner, displaying three overlapping circular avatars next to the tagline: *"What if going to the dentist was like catching up with an old friend?"*

---

## 3. Inner Pages & Component Adaptation

### 3.1 Button & Component Styling
* **Vibrant Buttons**: Standard buttons (`Button.tsx`) will be updated to support the new chartreuse token (`bg-[#D2F53E] text-[#13392E] hover:bg-[#C2E434]`).
* **Before/After Handle**: The slider handle inside `<BeforeAfterSlider>` is updated to use the vibrant chartreuse styling.
* **Specialist Profile**: Dr. Satyajit Sahu's profile page/card is updated to feature a deep forest green (`#13392E`) background with chartreuse borders and credentials.

### 3.2 Layout Wrapping
* **`layout.tsx`**: Updated to contain the HTML and body dark backdrop (`bg-[#121413]`), wrapping the header, page router, and footer inside the rounded white container.

---

## 4. Verification Plan

* **Visual Check**: Run Next.js dev server and inspect all pages (Home, About, Services, Gallery, Patient Info, Blog, Contact) to ensure proper border wrapping, colors, and overlays.
* **Static Export Build**: Execute `npm run build` to verify Next.js static page output compiles without errors.
