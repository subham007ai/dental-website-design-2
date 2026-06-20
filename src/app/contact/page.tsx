import type { Metadata } from 'next';
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconClock,
  IconAmbulance,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import Button from '@/components/Button';
import ContactCard from '@/components/ContactCard';
import BookingForm from '@/components/BookingForm';
import PageHero from '@/components/PageHero';
import { site, mapEmbed } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Book — Utkal Dental Care, Bhubaneswar',
  description:
    'Book an appointment at Utkal Dental Care, near Maa Sakti Hospital, Unit-6, Bhubaneswar. Call 81447 99927 or request a dental, skin or hair visit online.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={
          <>
            Get in touch
            <br />
            &amp; book your visit
          </>
        }
      >
        We’re easy to reach in Unit-6, near Maa Sakti Hospital. Call, WhatsApp,
        or request an appointment online.
      </PageHero>

      {/* Contact cards */}
      <section className="section">
        <div className="wrap">
          <Reveal className="grid grid-cols-1 gap-5 min-[921px]:grid-cols-3">
            <ContactCard icon={IconPhone} title="Call us">
              <a href={site.phone.tel}>+91 {site.phone.display}</a>
              <p className="mt-1">{site.hours.full}</p>
            </ContactCard>
            <ContactCard icon={IconMapPin} title="Visit us">
              <p>
                Plot No. 166, Unit-6, Ganga Nagar / Ekamra Marg, near Maa Sakti
                Hospital, Bhubaneswar 751001
              </p>
            </ContactCard>
            <ContactCard icon={IconMail} title="Email us">
              <a href={`mailto:${site.email}`} className="break-all">
                {site.email}
              </a>
              <p className="mt-1">We reply within a day</p>
            </ContactCard>
          </Reveal>
        </div>
      </section>

      {/* Booking */}
      <section
        id="book"
        className="section scroll-mt-[86px] bg-[linear-gradient(180deg,theme(colors.cream),theme(colors.mist))] pt-0"
      >
        <div className="wrap grid grid-cols-1 items-center gap-[46px] min-[921px]:grid-cols-2">
          <Reveal>
            <Eyebrow>Book your visit</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(30px,4.4vw,48px)] font-semibold">
              Request an appointment
            </h2>
            <p className="mb-[22px] mt-4 text-[17px] text-slate">
              Tell us what you need — dental, skin or hair — and we’ll confirm
              your time by call or WhatsApp. Consultation just{' '}
              {site.consultationFee}.
            </p>
            {[
              {
                icon: IconClock,
                text: 'Mon–Sat: 9 AM–9 PM · Sunday: 9 AM–1 PM',
              },
              { icon: IconPhone, text: site.phone.display },
              {
                icon: IconMapPin,
                text: 'Near Maa Sakti Hospital, Unit-6, Bhubaneswar',
              },
              {
                icon: IconAmbulance,
                text: 'Dental emergency? Call us straight away.',
              },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3.5 py-[11px] text-[15px]"
              >
                <Icon size={20} className="text-greenDk" /> {text}
              </div>
            ))}
            <div className="mt-[22px] flex flex-wrap gap-3">
              <Button href={site.phone.tel}>
                <IconPhone size={18} /> Call now
              </Button>
              <Button href={site.phone.whatsapp} variant="ghost">
                <IconBrandWhatsapp size={18} /> WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="section pt-0">
        <div className="wrap">
          <Reveal>
            <iframe
              src={mapEmbed}
              title="Utkal Dental Care location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[330px] w-full rounded-[20px] border border-line"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
