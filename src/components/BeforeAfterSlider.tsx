'use client';

import { useState } from 'react';
import { IconArrowsHorizontal } from '@tabler/icons-react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = '/images/skin_clinic.webp',
  afterSrc = '/images/skin_clinic.webp',
  beforeAlt = 'Before',
  afterAlt = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className={`relative w-full overflow-hidden border border-line shadow-soft bg-white ${className}`}>
      {/* AFTER (full) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none" />
      </div>

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none" />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 z-20 rounded-md bg-navy/80 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-white shadow-soft-sm">
        Before
      </span>
      <span className="absolute right-4 top-4 z-20 rounded-md bg-navy/80 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-white shadow-soft-sm">
        After
      </span>

      {/* Handle */}
      <div
        className="absolute inset-y-0 w-[2px] bg-chartreuse z-30 -translate-x-1/2 cursor-ew-resize"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-chartreuse text-navy shadow-soft">
          <IconArrowsHorizontal size={18} />
        </div>
      </div>

      {/* Slider Control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before and after slider"
        className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0 z-40"
      />
    </div>
  );
}
