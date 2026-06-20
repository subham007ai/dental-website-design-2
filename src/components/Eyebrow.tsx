import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  center?: boolean;
  /** green (default) for dental/neutral, clay for skin & hair, light for dark sections. */
  tone?: 'green' | 'clay' | 'light';
  className?: string;
};

const toneStyles: Record<NonNullable<EyebrowProps['tone']>, string> = {
  green: 'text-greenDk before:bg-green',
  clay: 'text-clayDk before:bg-clay',
  light: 'text-chartreuse before:bg-chartreuse',
};

export default function Eyebrow({
  children,
  center = false,
  tone = 'green',
  className = '',
}: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[2px] before:h-[1.5px] before:w-[22px] before:content-[''] ${
        toneStyles[tone]
      } ${center ? 'justify-center' : ''} ${className}`}
    >
      {children}
    </span>
  );
}
