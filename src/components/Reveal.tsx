'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Run a one-shot callback the first time the element enters the viewport. */
  onReveal?: (el: HTMLElement) => void;
};

/**
 * Fades + slides its content in on scroll, once. Mirrors the static site's
 * IntersectionObserver behaviour. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  onReveal,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
            onReveal?.(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [onReveal]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
