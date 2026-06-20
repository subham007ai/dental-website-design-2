'use client';

import { useEffect, useRef, useState } from 'react';

export type StatItem = {
  to?: number;
  suffix?: string;
  value?: string;
  star?: boolean;
  label: string;
};

function useCountUp(target: number, run: boolean, duration = 1100) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    // Honour reduced-motion: show the final figure immediately.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

function Stat({ item, run }: { item: StatItem; run: boolean }) {
  const counted = useCountUp(item.to ?? 0, run);
  return (
    <div className="paper-card rounded-[20px] p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="font-display text-[clamp(32px,5vw,52px)] font-semibold text-ink leading-none">
        {item.value ?? counted}
        {item.star && <span className="text-clay ml-1">★</span>}
        {item.suffix}
      </div>
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate">{item.label}</div>
    </div>
  );
}

export default function Stats({ items }: { items: readonly StatItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-cream text-ink border-y border-line">
      <div
        ref={ref}
        className="wrap grid grid-cols-2 gap-6 py-[52px] min-[921px]:grid-cols-4"
      >
        {items.map((item) => (
          <Stat key={item.label} item={item} run={run} />
        ))}
      </div>
    </div>
  );
}
