import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

type PullQuoteProps = {
  children: ReactNode;
  cite?: string;
  role?: string;
};

/** Full-bleed editorial "spread" — one oversized quote on the ink panel. */
export default function PullQuote({ children, cite, role }: PullQuoteProps) {
  return (
    <section className="ink-panel relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-clay/20" />
      <div className="wrap relative py-20 sm:py-28">
        <Reveal>
          <span className="font-display text-[80px] leading-[.5] text-clay sm:text-[120px]">
            “
          </span>
          <blockquote className="mt-2 max-w-[20ch] font-display text-[clamp(28px,5vw,64px)] font-medium italic leading-[1.06] tracking-[-.02em] text-cream">
            {children}
          </blockquote>
          {cite && (
            <figcaption className="mt-8 flex items-center gap-3 text-sm">
              <span className="h-px w-10 bg-clay" />
              <span className="font-semibold text-cream">{cite}</span>
              {role && (
                <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#9E978A]">
                  {role}
                </span>
              )}
            </figcaption>
          )}
        </Reveal>
      </div>
    </section>
  );
}
