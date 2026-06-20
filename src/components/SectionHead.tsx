import type { ReactNode } from 'react';
import Eyebrow from '@/components/Eyebrow';

type SectionHeadProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  tone?: 'green' | 'clay' | 'light';
  /** Light heading/body for dark (navy) sections. */
  onDark?: boolean;
  /** Optional editorial index numeral, e.g. "01". */
  index?: string;
  className?: string;
};

export default function SectionHead({
  eyebrow,
  title,
  children,
  center = false,
  tone = 'green',
  onDark = false,
  index,
  className = '',
}: SectionHeadProps) {
  return (
    <div
      className={`mb-14 max-w-[700px] ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      <div className={`flex items-center gap-3.5 ${center ? 'justify-center' : ''}`}>
        {index && (
          <span className="font-display text-[26px] font-semibold leading-none text-clay">
            {index}
          </span>
        )}
        <Eyebrow center={false} tone={onDark ? 'light' : tone}>
          {eyebrow}
        </Eyebrow>
      </div>
      <h2
        className={`mt-4 text-[clamp(34px,4.8vw,58px)] font-medium leading-[.94] tracking-[-.045em] ${
          onDark ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 text-[16px] leading-relaxed ${onDark ? 'text-[#9E978A]' : 'text-slate'}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
