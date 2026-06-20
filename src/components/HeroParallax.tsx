'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Gentle scroll parallax for the hero portrait. The child fills this layer;
 * a slight base scale gives the drift room without exposing edges.
 * No-ops under prefers-reduced-motion.
 */
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (above viewport) → 1 (below), 0 when centred.
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const shift = Math.max(-1, Math.min(1, progress)) * -26;
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      {children}
    </div>
  );
}
