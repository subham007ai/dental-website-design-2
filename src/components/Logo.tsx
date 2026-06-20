import Link from 'next/link';
import { site } from '@/lib/site';

type LogoProps = {
  /** Dark variant renders the lockup in cream for use on the ink footer. */
  variant?: 'light' | 'dark';
  className?: string;
};

/**
 * Utkal Dental Care wordmark — geometric Poppins lockup, rendered as live text
 * (transparent, infinitely scalable, theme-aware). The accent dot carries the
 * vermilion brand colour; a tracked sub-line spells out the specialities.
 */
export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const dark = variant === 'dark';
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex shrink-0 flex-col leading-none ${className}`}
    >
      <span
        className={`font-brand text-[23px] font-extrabold uppercase tracking-[-.045em] ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        Utkal<span className="text-clay">.</span>
      </span>
      <span
        className={`mt-[4px] text-[8px] font-bold uppercase tracking-[.36em] ${
          dark ? 'text-[#9E978A]' : 'text-slate'
        }`}
      >
        Dental · Skin · Hair
      </span>
    </Link>
  );
}
