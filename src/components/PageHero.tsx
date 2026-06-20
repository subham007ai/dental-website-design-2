import Link from 'next/link';
import type { ReactNode } from 'react';

type PageHeroProps = {
  crumb: string;
  title: ReactNode;
  children?: ReactNode;
};

/** Editorial lead-in used across the interior pages. */
export default function PageHero({ crumb, title, children }: PageHeroProps) {
  return (
    <section className="site-texture relative overflow-hidden border-b border-line py-16 sm:py-24">
      <div className="wrap relative z-[2]">
        {/* Editorial issue line + breadcrumb */}
        <div className="mb-9 flex items-center justify-between border-b border-line pb-4 text-[10px] font-bold uppercase tracking-[.22em] text-slate">
          <div className="flex items-center gap-3">
            <Link href="/" className="transition-colors hover:text-clay">Home</Link>
            <span className="h-px w-5 bg-line" />
            <span className="text-ink">{crumb}</span>
          </div>
          <span className="hidden sm:block">Utkal Dental Care · Est. 2004</span>
        </div>
        <div className="grid gap-8 min-[821px]:grid-cols-[1.25fr_.75fr] min-[821px]:items-end">
          <h1 className="max-w-[14ch] text-[clamp(46px,7vw,94px)] font-medium leading-[.9] tracking-[-.05em] !text-ink">{title}</h1>
          {children && <p className="max-w-[46ch] border-l-2 border-clay pl-5 text-[15px] leading-relaxed text-slate">{children}</p>}
        </div>
      </div>
    </section>
  );
}
