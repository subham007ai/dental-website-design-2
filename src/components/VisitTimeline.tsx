import {
  IconCalendarCheck,
  IconClipboardText,
  IconListDetails,
  IconMoodHappy,
  type Icon as TablerIcon,
} from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';

type Step = { icon: TablerIcon; title: string; text: string };

const defaultSteps: Step[] = [
  {
    icon: IconCalendarCheck,
    title: 'Book & arrive',
    text: 'Pick a time online or by call. Arrive, relax — no long forms or waiting.',
  },
  {
    icon: IconClipboardText,
    title: 'Gentle consultation',
    text: 'The right specialist examines you and listens to your concerns, unhurried.',
  },
  {
    icon: IconListDetails,
    title: 'Clear plan & cost',
    text: 'You get a simple explanation and transparent pricing — decide at your pace.',
  },
  {
    icon: IconMoodHappy,
    title: 'Comfortable treatment',
    text: 'Careful, modern treatment and aftercare advice. That’s it.',
  },
];

export default function VisitTimeline({
  eyebrow = "Nervous? Here's what happens",
  title = 'Your first visit, step by step',
  intro = "No surprises — whether you're here for your teeth, skin or hair.",
  steps = defaultSteps,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  steps?: Step[];
}) {
  return (
    <section className="section bg-cream text-slate border-t border-line" id="timeline">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center>
            {intro}
          </SectionHead>
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-8 mt-12 min-[561px]:grid-cols-2 min-[921px]:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="paper-card relative rounded-[20px] p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="absolute -top-3 left-6 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-clay font-display text-xs font-semibold text-cream shadow-sm">
                {i + 1}
              </div>
              <s.icon size={26} className="mb-4 text-clay" />
              <h3 className="mb-2 font-body text-[17px] font-semibold tracking-normal text-ink">
                {s.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate">{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
