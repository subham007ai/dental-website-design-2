import type { ReactNode } from 'react';
import { IconUserCircle, IconArrowRight, type Icon as TablerIcon } from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import Frame from '@/components/Frame';
import Button from '@/components/Button';

type DoctorCardProps = {
  eyebrow: string;
  name: string;
  role: string;
  children: ReactNode;
  creds: Array<{ icon: TablerIcon; label: string }>;
  frameLabel?: string;
  cta?: { href: string; label: string };
  bg?: 'sand' | 'white';
  src?: string;
};

export default function DoctorCard({
  eyebrow,
  name,
  role,
  children,
  creds,
  frameLabel,
  cta,
  bg = 'white',
  src,
}: DoctorCardProps) {
  return (
    <section className="section bg-cream text-slate border-t border-line" id="doctor">
      <div className="wrap grid grid-cols-1 gap-[50px] min-[921px]:grid-cols-[0.8fr_1.2fr] items-center">
        <div>
          <Frame
            label={frameLabel || name}
            icon={<IconUserCircle size={40} />}
            arch
            className="aspect-[4/5] w-full max-w-[380px] mx-auto shadow-2xl border-2 border-clay/25"
            src={src}
          />
        </div>
        <div className="min-[921px]:pl-12 min-[921px]:border-l border-line py-4">
          <Eyebrow tone="green">{eyebrow}</Eyebrow>
          <h2 className="mb-2 mt-3 text-[clamp(30px,4.2vw,44px)] font-display font-medium text-ink leading-none">
            {name}
          </h2>
          <div className="mb-[20px] text-sm font-bold uppercase tracking-wider text-clay">
            {role}
          </div>
          <div className="space-y-4 text-slate text-[15px] leading-relaxed [&>p]:max-w-[54ch]">
            {children}
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line pt-6">
            {creds.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-2 bg-mist rounded-full text-clay">
                  <Icon size={18} />
                </div>
                <span className="text-[13px] font-semibold text-ink leading-tight">{label}</span>
              </div>
            ))}
          </div>

          {cta && (
            <Button href={cta.href} variant="clay" className="mt-[22px]">
              <IconArrowRight size={18} /> {cta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
