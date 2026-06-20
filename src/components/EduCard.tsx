import { IconCircleCheck, IconAlertTriangle } from '@tabler/icons-react';
import Reveal from '@/components/Reveal';

export type EduItem = {
  n: number;
  title: string;
  points: string[];
  warn?: boolean;
};

export default function EduCard({ item }: { item: EduItem }) {
  const Bullet = item.warn ? IconAlertTriangle : IconCircleCheck;
  return (
    <Reveal className="border-t border-line bg-white/50 p-7 transition-all duration-200 hover:bg-white hover:shadow-soft-sm sm:p-8">
      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-chartreuse">
          {item.n}
        </span>
        <h3 className="font-display text-[22px] font-medium tracking-[-.025em] text-navy">
          {item.title}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {item.points.map((p) => (
          <li key={p} className="flex gap-3 text-[14.5px] text-slate leading-relaxed">
            <Bullet
              size={18}
              className={`mt-0.5 shrink-0 ${item.warn ? 'text-clay' : 'text-navy'}`}
            />
            {p}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
