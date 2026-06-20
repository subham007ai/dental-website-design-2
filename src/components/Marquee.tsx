const items = [
  'Dental Implants',
  'Root Canal',
  'Braces & Aligners',
  'Smile Design',
  'Hair Transplant',
  'PRP Therapy',
  'Skin & Acne',
  'Laser',
  'Dermal Fillers',
  'Chemical Peels',
];

/** Slow editorial ticker. Decorative, so hidden from assistive tech. */
export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="ink-panel marquee-mask relative overflow-hidden border-y border-white/10 py-4 sm:py-6"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {items.map((it, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-5 font-display text-[clamp(20px,3vw,38px)] font-normal italic text-cream sm:px-8">
                  {it}
                </span>
                <span className="text-[10px] text-clay sm:text-xs">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
