import type { Metadata } from 'next';
import {
  IconDental,
  IconDentalBroken,
  IconMoodSmile,
  IconUserHeart,
  IconRosette,
  IconFlare,
} from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ServiceRow, { type ServiceRowData } from '@/components/ServiceRow';
import VisitTimeline from '@/components/VisitTimeline';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Dental, Skin & Hair · Utkal Dental Care',
  description:
    'Dental implants, root canal, braces and cosmetic dentistry, plus hair transplant, skin treatment, laser, dermal fillers and chemical peels — at Utkal Dental Care, Bhubaneswar.',
  alternates: { canonical: '/services' },
};

const dentalRows: ServiceRowData[] = [
  {
    tag: 'Preventive & restorative',
    title: 'General Dentistry',
    desc: 'Keep your smile healthy with regular check-ups, cleanings, fillings and timely treatment that prevents most problems before they start.',
    items: [
      { label: 'Check-ups & cleanings', href: '/services/dental-health' },
      { label: 'Fluoride & preventive care', href: '/services/dental-health' },
      { label: 'Fillings & restorations', href: '/services/dental-health' },
      { label: 'Crowns & bridges', href: '/services/dental-health' },
    ],
    frameLabel: 'General dentistry',
    frameIcon: <IconDental size={40} />,
    ctaLabel: 'Book a check-up',
    slug: 'dental-health',
    src: '/images/dental_checkup.webp',
  },
  {
    tag: 'Specialist treatment',
    title: 'Implants, Root Canal & Surgery',
    desc: 'Advanced restorative and surgical dentistry — permanent implants for missing teeth, pain-relieving root canals, and expert oral surgery, all done comfortably.',
    items: [
      { label: 'Dental implants', href: '/services/dental-health' },
      { label: 'Root canal treatment', href: '/services/dental-health' },
      { label: 'Extractions & oral surgery', href: '/services/dental-health' },
      { label: 'Emergency dental care', href: '/services/dental-health' },
    ],
    frameLabel: 'Dental implants',
    frameIcon: <IconDentalBroken size={40} />,
    ctaLabel: 'Book a consultation',
    slug: 'dental-health',
    src: '/images/dental_implants.webp',
  },
  {
    tag: 'Cosmetic & orthodontics',
    title: 'Smile Design & Braces',
    desc: 'Boost your confidence with whitening, veneers and smile design, or straighten teeth with braces and clear aligners — for adults and children alike.',
    items: [
      { label: 'Teeth whitening', href: '/services/dental-health' },
      { label: 'Veneers & smile design', href: '/services/dental-health' },
      { label: 'Braces & aligners', href: '/services/dental-health' },
      { label: 'Pediatric dentistry', href: '/services/dental-health' },
    ],
    frameLabel: 'Cosmetic dentistry',
    frameIcon: <IconMoodSmile size={40} />,
    ctaLabel: 'Book a visit',
    slug: 'dental-health',
    src: '/images/dental_implants.webp',
  },
];

const skinRows: ServiceRowData[] = [
  {
    tag: 'Hair restoration',
    title: 'Hair Solution & Transplant',
    desc: 'Advanced, permanent solutions for hair fall and baldness. Healthy follicles from your own donor area are transplanted for natural-looking, lasting results.',
    items: [
      { label: 'FUE hair transplant', href: '/services/hair-solution' },
      { label: 'FUT hair transplant', href: '/services/hair-solution' },
      { label: 'PRP therapy', href: '/services/hair-solution' },
      { label: 'Hair-loss & scalp care', href: '/services/hair-solution' },
    ],
    frameLabel: 'Hair transplant',
    frameIcon: <IconUserHeart size={40} />,
    ctaLabel: 'Book hair consultation',
    slug: 'hair-solution',
    src: '/images/hair_transplant.webp',
  },
  {
    tag: 'Dermatology',
    title: 'Skin Disease Treatment',
    desc: 'Proper diagnosis and advanced treatment for a wide range of skin conditions — most problems can be effectively managed and cured.',
    items: [
      { label: 'Acne & pimples', href: '/services/skin-diseases' },
      { label: 'Eczema & psoriasis', href: '/services/skin-diseases' },
      { label: 'Pigmentation & vitiligo', href: '/services/skin-diseases' },
      { label: 'Fungal infections & allergies', href: '/services/skin-diseases' },
    ],
    frameLabel: 'Skin treatment',
    frameIcon: <IconRosette size={40} />,
    ctaLabel: 'Book skin consultation',
    slug: 'skin-diseases',
    src: '/images/skin_clinic.webp',
  },
  {
    tag: 'Laser & aesthetics',
    title: 'Laser, Fillers & Peels',
    desc: 'Modern, safe cosmetic procedures for smoother, clearer, younger-looking skin — performed with FDA-approved technology, tailored to your skin type.',
    items: [
      { label: 'Laser hair removal', href: '/services/laser-treatment' },
      { label: 'Skin rejuvenation & pigmentation', href: '/services/laser-treatment' },
      { label: 'Dermal fillers', href: '/services/dermal-fillers' },
      { label: 'Deep chemical peels', href: '/services/deep-peelings' },
    ],
    frameLabel: 'Laser & aesthetics',
    frameIcon: <IconFlare size={40} />,
    ctaLabel: 'Book aesthetic consult',
    src: '/images/skin_clinic.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={
          <>
            Dental, skin &amp; hair —<br />
            complete care, one clinic
          </>
        }
      >
        Everything to keep you healthy and confident, delivered by experienced
        specialists in each field.
      </PageHero>

      {/* Dental */}
      <section id="dental" className="section">
        <div className="wrap">
          <Reveal>
            <div className="mb-12 max-w-[640px]">
              <Eyebrow>Speciality 01 · Dental Care</Eyebrow>
              <h2 className="mt-3 text-[clamp(30px,4.6vw,50px)] font-semibold">
                Dentistry for the whole family
              </h2>
              <p className="mt-3.5 text-[17px] text-slate">
                Led by Dr. Satyajit Sahu (MDS, Oral &amp; Implant Surgeon).
              </p>
            </div>
          </Reveal>
          {dentalRows.map((row, i) => (
            <ServiceRow key={row.title} data={row} flip={i % 2 === 1} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Skin & Hair */}
      <section id="skin" className="section bg-mist">
        <div className="wrap">
          <Reveal>
            <div className="mb-12 max-w-[640px]">
              <Eyebrow tone="clay">Speciality 02 · Skin &amp; Hair</Eyebrow>
              <h2 className="mt-3 text-[clamp(30px,4.6vw,50px)] font-semibold">
                Dermatology, aesthetics &amp; hair
              </h2>
              <p className="mt-3.5 text-[17px] text-slate">
                Carried out by experienced dermatology and aesthetic
                specialists.
              </p>
            </div>
          </Reveal>
          {skinRows.map((row, i) => (
            <ServiceRow key={row.title} data={row} tone="clay" flip={i % 2 === 1} index={i + 1} />
          ))}
        </div>
      </section>

      <VisitTimeline
        eyebrow="How it works"
        title="Your first visit, step by step"
        intro="No surprises — whether you're here for your teeth, skin or hair."
      />

      <CTABand eyebrow="Not sure what you need?" title="Book a consultation">
        Tell us your concern and we’ll point you to the right specialist.
        Consultation just {site.consultationFee}.
      </CTABand>
    </>
  );
}
