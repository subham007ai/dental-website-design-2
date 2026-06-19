import { IconCalendarPlus, IconStethoscope, IconHeartHandshake } from '@tabler/icons-react';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import Frame from '@/components/Frame';
import { site, bookHref } from '@/lib/site';

/**
 * Phase 1 placeholder home — demonstrates the Evergreen & Ivory base layout,
 * fonts, Button / Reveal / Frame primitives and the layout chrome.
 * The full home port (index.html) lands in Phase 2.
 */
export default function Home() {
  return (
    <section className="bg-[linear-gradient(180deg,theme(colors.mist),theme(colors.cream)_88%)]">
      <div className="wrap grid grid-cols-1 items-center gap-[54px] py-[68px] min-[921px]:grid-cols-[1.05fr_.95fr] min-[921px]:py-[78px]">
        <Reveal>
          <span className="eyebrow">
            One trusted clinic since {site.foundedYear} · Bhubaneswar
          </span>
          <h1 className="mt-[18px] text-[clamp(40px,5.6vw,68px)] font-semibold">
            Your <span className="text-greenDk">smile</span>,{' '}
            <span className="text-clayDk">skin</span> &amp;{' '}
            <span className="text-clayDk">hair</span> — in{' '}
            <em className="font-normal not-italic font-display italic">expert</em> hands.
          </h1>
          <p className="mt-6 mb-[30px] max-w-[48ch] text-[clamp(16px,1.8vw,19px)] text-slate">
            Dental care, dermatology and hair restoration under one roof — led by
            experienced specialists, with gentle, modern treatment right next to
            Maa Sakti Hospital.
          </p>
          <div className="flex flex-wrap gap-[13px]">
            <Button href={bookHref}>
              <IconCalendarPlus size={18} /> Book an Appointment
            </Button>
            <Button href="/services" variant="ghost">
              <IconStethoscope size={18} /> Our treatments
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-[10px] text-sm text-slate">
            <span className="text-gold">★★★★★</span>
            <span>
              <b className="text-navy">{site.rating.value}</b> from{' '}
              <b className="text-navy">{site.rating.count}</b> patient reviews
            </span>
          </div>
        </Reveal>

        <Reveal>
          <Frame
            label="Clinic / specialists photo"
            icon={<IconHeartHandshake size={40} />}
            className="aspect-[4/5] min-h-[440px] rounded-[24px] shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
}
