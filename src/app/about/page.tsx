import type { Metadata } from 'next';
import {
  IconBuildingHospital,
  IconCalendar,
  IconUsers,
  IconStar,
  IconDental,
  IconScissors,
  IconRosette,
  IconFlare,
  IconDropletHalf2,
  IconSparkles,
  IconStethoscope,
  IconDeviceDesktopAnalytics,
  IconShieldCheck,
  IconHeartHandshake,
  IconCertificate,
  IconSchool,
} from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Frame from '@/components/Frame';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import Stats from '@/components/Stats';
import FeatureGrid from '@/components/FeatureGrid';
import DoctorCard from '@/components/DoctorCard';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'About — Utkal Dental Care, Bhubaneswar',
  description:
    "Since 2004, Utkal Dental Care has been Bhubaneswar's trusted clinic for dental, skin, hair and aesthetic treatments — all under one roof, near Maa Sakti Hospital.",
  alternates: { canonical: '/about' },
};

const aboutStats = [
  { to: 21, suffix: '+', label: 'Years of experience' },
  { to: 1, suffix: ' Lakh+', label: 'Patients treated' },
  { to: 7000, suffix: '+', label: 'Implants placed' },
  { to: 70000, suffix: '+', label: 'Root canals done' },
];

const offer = [
  { icon: IconDental, title: 'Dental Treatment', text: 'Complete oral care — preventive, restorative, cosmetic and surgical dentistry.' },
  { icon: IconScissors, title: 'Hair Solution', text: 'Hair fall, dandruff, regrowth, PRP therapy and hair transplant.' },
  { icon: IconRosette, title: 'Skin Diseases', text: 'Acne, pigmentation, eczema, psoriasis, fungal infections and more.' },
  { icon: IconFlare, title: 'Laser Treatment', text: 'Hair removal, skin rejuvenation, pigmentation and scar reduction.' },
  { icon: IconDropletHalf2, title: 'Dermal Fillers', text: 'Non-surgical anti-aging to restore volume and smooth wrinkles.' },
  { icon: IconSparkles, title: 'Deep Peelings', text: 'Medical-grade peels to reduce scars, pigmentation and fine lines.' },
];

const whyChoose = [
  { icon: IconStethoscope, title: 'Experienced specialists', text: 'Qualified doctors and certified specialists across every department.' },
  { icon: IconDeviceDesktopAnalytics, title: 'Latest technology', text: 'Advanced techniques and modern equipment for better outcomes.' },
  { icon: IconShieldCheck, title: 'Safe & hygienic', text: 'A clean, patient-friendly environment you can trust.' },
  { icon: IconHeartHandshake, title: 'Personalised care', text: 'Treatment plans built around your needs, for natural, lasting results.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title={
          <>
            Complete health, beauty
            <br />
            &amp; wellness — since 2004
          </>
        }
      >
        Your trusted Bhubaneswar centre for dental, hair, skin and aesthetic
        treatments, all under one roof.
      </PageHero>

      {/* Who we are */}
      <section className="section bg-white">
        <div className="wrap grid grid-cols-1 items-center gap-[50px] min-[921px]:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <Frame
              label="Clinic interior"
              icon={<IconBuildingHospital size={40} />}
              arch
              src="/images/skin_clinic.webp"
              className="aspect-[4/5] min-h-[400px] shadow-soft"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mb-3 mt-2 text-[clamp(30px,4.2vw,46px)] font-semibold">
              One clinic, complete care
            </h2>
            <div className="space-y-4 text-slate [&>p]:max-w-[54ch]">
              <p className="dropcap">
                Welcome to Utkal Dental Care — your trusted centre for complete
                health, beauty and wellness. Since 2004, we’ve helped patients
                across Bhubaneswar look and feel their best through a wide range
                of dental, hair, skin and aesthetic treatments, all under one
                roof.
              </p>
              <p>
                We combine medical expertise with advanced technology to deliver
                safe, effective and long-lasting results. Our team of
                experienced doctors, specialists and therapists ensures every
                patient receives personalised care in a comfortable, friendly
                environment.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                { icon: IconCalendar, label: 'Established 2004' },
                { icon: IconUsers, label: '1 Lakh+ patients' },
                { icon: IconStar, label: '4.9 / 203 reviews' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-ink text-chartreuse px-4 py-2 text-[11px] font-bold uppercase tracking-wider shadow-sm"
                >
                  <Icon size={16} className="text-chartreuse" /> {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Stats items={aboutStats} />

      {/* What we offer */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="What we offer"
              title="A holistic range of treatments"
              center
            >
              Everything to enhance your health and confidence, delivered by the
              right specialist.
            </SectionHead>
          </Reveal>
          <Reveal>
            <FeatureGrid items={offer} />
          </Reveal>
        </div>
      </section>

      {/* Doctor */}
      <DoctorCard
        eyebrow="Meet our lead specialist"
        name="Dr. Satyajit Sahu"
        role="BDS, MDS · Associate Professor · Oral & Implant Surgeon"
        src="/images/dr_sahu.webp"
        creds={[
          { icon: IconCertificate, label: 'MDS, GITAM Dental College' },
          { icon: IconSchool, label: 'Associate Professor, Hi-Tech' },
          { icon: IconDental, label: 'Implants & Oral Surgery' },
        ]}
      >
        <p>
          With over 17 years of clinical experience and a teaching role at
          Hi-Tech Dental College, Dr. Sahu leads our dental department — known
          for a calm, unhurried manner and care that’s as painless as modern
          dentistry allows.
        </p>
        <p>
          Alongside him, experienced dermatology and aesthetic specialists
          handle skin, laser, fillers, peels and hair restoration — so every
          patient is in the hands of the right expert.
        </p>
      </DoctorCard>

      {/* Why choose us */}
      <section className="section bg-mist">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Why choose us"
              title="Good health is where beauty starts"
            >
              We believe true beauty starts with good health — and we’re here to
              guide you every step of the way.
            </SectionHead>
          </Reveal>
          <Reveal>
            <FeatureGrid items={whyChoose} />
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Our commitment"
        title={
          <>
            Your health &amp; confidence,
            <br />
            our priority
          </>
        }
        secondary="services"
      >
        Whether it’s restoring your smile, rejuvenating your skin or boosting
        your confidence, take the first step today.
      </CTABand>
    </>
  );
}
