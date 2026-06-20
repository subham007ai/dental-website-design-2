import type { ReactNode } from 'react';
import { IconCalendarPlus, IconPhone, IconStethoscope } from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import Button from '@/components/Button';
import { site, bookHref } from '@/lib/site';

type CTABandProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** secondary action: phone call (default) or a link to services. */
  secondary?: 'call' | 'services';
};

/** The recurring soft gradient "Book your visit" closing band. */
export default function CTABand({
  eyebrow,
  title,
  children,
  secondary = 'call',
}: CTABandProps) {
  return (
    <section className="section site-texture py-5 sm:py-7">
      <div className="wrap">
        <Reveal className="relative overflow-hidden bg-ink px-7 py-16 text-center text-white shadow-xl sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-chartreuse/20" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(228,87,46,.18),transparent_65%)]" />
          <div className="relative z-10 mx-auto mb-8 max-w-[700px]">
            <Eyebrow center tone="light">{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(34px,5vw,60px)] font-display font-medium leading-[.94] tracking-[-.045em] text-white">
              {title}
            </h2>
            {children && (
              <p className="mx-auto mt-5 max-w-[50ch] text-[15px] leading-relaxed text-[#9E978A]">
                {children}
              </p>
            )}
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-3.5">
            <Button href={bookHref} className="!rounded-md !bg-chartreuse !px-5 !py-3.5 !text-[11px] !uppercase !tracking-[.14em] !text-cream hover:!bg-clayDk">
              <IconCalendarPlus size={18} /> Book an Appointment
            </Button>
            {secondary === 'call' ? (
              <Button href={site.phone.tel} variant="ghost" className="!rounded-md !border-white/25 !bg-transparent !px-5 !py-3.5 !text-[11px] !uppercase !tracking-[.14em] !text-white hover:!bg-white/10">
                <IconPhone size={18} /> Call {site.phone.display}
              </Button>
            ) : (
              <Button href="/services" variant="ghost" className="!rounded-md !border-white/25 !bg-transparent !px-5 !py-3.5 !text-[11px] !uppercase !tracking-[.14em] !text-white hover:!bg-white/10">
                <IconStethoscope size={18} /> See all treatments
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
