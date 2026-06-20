import {
  IconCalendarPlus,
  IconStethoscope,
  IconHeartHandshake,
  IconDroplet,
  IconFeather,
  IconMicroscope,
  IconMessageCircleHeart,
  IconCertificate,
  IconSchool,
  IconDental,
  IconStar,
  IconArrowDown,
  IconArrowUpRight,
} from '@tabler/icons-react';
import Image from 'next/image';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import Frame from '@/components/Frame';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import Stats from '@/components/Stats';
import Pillars from '@/components/Pillars';
import DoctorCard from '@/components/DoctorCard';
import FeatureGrid from '@/components/FeatureGrid';
import VisitTimeline from '@/components/VisitTimeline';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import HeroParallax from '@/components/HeroParallax';
import { site, stats, bookHref } from '@/lib/site';

const whyFeatures = [
  {
    icon: IconDroplet,
    title: 'Strict sterilisation',
    text: 'Hospital-grade hygiene and sterilised instruments for every single patient.',
  },
  {
    icon: IconFeather,
    title: 'Gentle & painless',
    text: 'Modern, minimally-painful techniques across dental, skin and hair treatments.',
  },
  {
    icon: IconMicroscope,
    title: 'Modern technology',
    text: 'Advanced equipment for accurate diagnosis and comfortable, precise treatment.',
  },
  {
    icon: IconMessageCircleHeart,
    title: 'Honest advice',
    text: 'Clear explanations and transparent pricing — no unnecessary treatments.',
  },
];

export default function Home() {
  return (
    <>
      {/* Editorial masthead */}
      <section className="site-texture relative overflow-hidden">
        <div className="wrap relative pb-12 pt-12 sm:pb-20 sm:pt-16">
          {/* Issue line */}
          <div className="mb-10 flex items-center justify-between border-b border-line pb-4 text-[10px] font-bold uppercase tracking-[.24em] text-slate sm:mb-14">
            <span>Utkal Dental Care</span>
            <span className="hidden sm:block">Vol. 21 · Est. 2004</span>
            <span>Bhubaneswar, Odisha</span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <p className="display-kicker mb-6">A kinder kind of clinical care</p>
              <h1 className="font-display text-[clamp(46px,8vw,116px)] font-medium leading-[.88] tracking-[-.05em] text-ink">
                <span className="hero-line block">
                  <span>Feel at home</span>
                </span>
                <span className="hero-line block">
                  <span>
                    in your{' '}
                    <em className="font-normal italic text-clay">own&nbsp;care.</em>
                  </span>
                </span>
              </h1>
              <div className="mt-9 grid max-w-[680px] gap-6 border-t border-line pt-6 sm:grid-cols-[1.1fr_.9fr] sm:items-end">
                <p className="dropcap max-w-[42ch] text-[15px] leading-relaxed text-slate">
                  Thoughtful dental, skin and hair treatments — delivered by the
                  right specialist, with the time and clarity you deserve.
                </p>
                <div className="flex flex-wrap gap-3 sm:justify-end">
                  <Button href={bookHref} variant="clay" className="!rounded-md !px-5 !py-3.5 !text-[11px] !uppercase !tracking-[.14em]">
                    Plan a visit <IconArrowUpRight size={16} />
                  </Button>
                  <a href="#care" className="inline-flex items-center gap-2 px-2 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-ink hover:text-clay">
                    Explore care <IconArrowDown size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Framed portrait */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-line bg-mist shadow-soft">
                <HeroParallax>
                  <Image
                    src="/images/hero_portrait.webp"
                    alt="A welcoming Utkal Dental Care consultation"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-[58%_center]"
                  />
                </HeroParallax>
              </div>
              <div className="absolute -left-3 bottom-5 hidden rounded-[2px] bg-cream px-4 py-3 shadow-soft-sm sm:block">
                <p className="font-display text-2xl font-semibold leading-none text-ink">4.9★</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.14em] text-slate">203 reviews</p>
              </div>
            </div>
          </div>

          {/* Numbered speciality index */}
          <div className="mt-12 grid grid-cols-1 border-t border-line sm:mt-16 sm:grid-cols-3">
            {[
              { n: '01', label: 'Dental', note: 'Implants · RCT · Braces' },
              { n: '02', label: 'Skin', note: 'Derma · Laser · Peels' },
              { n: '03', label: 'Hair', note: 'FUE/FUT · PRP' },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`flex items-baseline gap-4 py-6 ${i > 0 ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-7' : ''}`}
              >
                <span className="font-display text-2xl font-semibold text-clay">{s.n}</span>
                <div>
                  <p className="font-display text-2xl font-medium text-ink">{s.label}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[.14em] text-slate">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Stats items={stats} />

      {/* Pillars */}
      <section id="care" className="section site-texture">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="What we treat"
              title="Two specialities, one trusted clinic"
              center
              index="01"
              >
              Whether it’s your teeth, your skin or your hair — you’re in expert,
              caring hands, all in one place.
            </SectionHead>
          </Reveal>
          <Reveal from="left">
            <Pillars />
          </Reveal>
        </div>
      </section>

      {/* Doctor */}
      <DoctorCard
        eyebrow="Meet our specialists"
        name="Dr. Satyajit Sahu"
        role="BDS, MDS · Associate Professor · Oral & Implant Surgeon"
        creds={[
          { icon: IconCertificate, label: 'MDS, GITAM Dental College' },
          { icon: IconSchool, label: 'Associate Professor, Hi-Tech' },
          { icon: IconDental, label: 'Implants & Oral Surgery' },
          { icon: IconStar, label: '4.9 / 203 reviews' },
        ]}
        cta={{ href: '/about', label: 'More about the clinic' }}
        src="/images/dr_sahu.webp"
      >
        <p>
          With over 17 years of clinical experience and a teaching role at
          Hi-Tech Dental College, Dr. Sahu leads the dental side of the clinic —
          from routine check-ups to complex implants and oral surgery.
        </p>
        <p>
          Our skin and hair treatments are carried out by experienced
          dermatology and aesthetic specialists, so every patient is looked
          after by the right expert. It’s why the clinic has held a 4.9-star
          rating across 203 reviews.
        </p>
      </DoctorCard>

      {/* Why choose us */}
      <section className="section bg-mist">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Why patients choose us"
              title="Care that puts you at ease"
              index="02"
            />
          </Reveal>
          <Reveal from="right">
            <FeatureGrid items={whyFeatures} />
          </Reveal>
        </div>
      </section>

      <VisitTimeline />

      {/* Before / after */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Real results"
              title="Transformations that speak"
              center
              index="03"
            >
              Drag the slider. Real before/after cases — smiles, skin and hair —
              with consent, go here.
            </SectionHead>
          </Reveal>
          <Reveal from="left">
            <BeforeAfterSlider
              beforeSrc="/images/dental_checkup.webp"
              afterSrc="/images/dental_implants.webp"
              beforeAlt="Initial clinical consultation"
              afterAlt="Completed dental implants"
              className="aspect-[16/10] max-w-[760px] rounded-[24px] mx-auto"
            />
          </Reveal>
        </div>
      </section>

      {/* Testimonials — full-bleed horizontal marquee */}
      <section className="section bg-sand">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Patient stories"
              title="Loved by 200+ patients"
              center
              index="04"
            >
              A few words from real visits. (Illustrative — to be replaced with
              the clinic’s genuine Google reviews.)
            </SectionHead>
          </Reveal>
        </div>
        <Reveal from="right">
          <Testimonials />
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Everything you need to know"
              title="Frequently asked questions"
              center
              index="05"
            />
          </Reveal>
          <Reveal>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        title="Book your visit today"
      >
        Dental, skin or hair — tell us what you need and we’ll confirm by call or
        WhatsApp. Consultation just {site.consultationFee}.
      </CTABand>
    </>
  );
}
