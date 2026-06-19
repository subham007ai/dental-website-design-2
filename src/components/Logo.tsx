import Link from 'next/link';
import { IconDental } from '@tabler/icons-react';
import { site } from '@/lib/site';

type LogoProps = {
  /** Dark footer variant uses lighter text on the navy background. */
  variant?: 'light' | 'dark';
  className?: string;
};

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const name = variant === 'dark' ? 'text-white' : 'text-navy';
  const sub = variant === 'dark' ? 'text-[#8FA89B]' : 'text-slate';

  return (
    <Link
      href="/"
      className={`flex items-center gap-[10px] shrink-0 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-green text-white">
        <IconDental size={21} stroke={1.75} />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display text-[19px] font-semibold leading-[1.05] whitespace-nowrap ${name}`}
        >
          {site.name}
        </span>
        <span
          className={`mt-[3px] text-[9.5px] font-semibold uppercase tracking-[2.5px] whitespace-nowrap ${sub}`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
