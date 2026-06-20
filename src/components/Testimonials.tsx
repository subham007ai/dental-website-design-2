const quotes = [
  {
    text: "I'm always nervous about the dentist, but Dr. Sahu was so patient and gentle. Didn't feel a thing during my root canal.",
    initials: 'AP',
    name: 'Ananya P.',
    role: 'Dental patient',
    tone: 'green' as const,
  },
  {
    text: "Had my PRP and hair treatment here. Professional team, clean clinic, and I'm already seeing a real difference.",
    initials: 'SR',
    name: 'Sourav R.',
    role: 'Hair patient',
    tone: 'clay' as const,
  },
  {
    text: 'Went for acne and pigmentation. The skin specialist explained everything and my skin has genuinely cleared up.',
    initials: 'MB',
    name: 'Madhusmita B.',
    role: 'Skin patient',
    tone: 'clay' as const,
  },
];

export default function Testimonials() {
  // Duplicate the set so the horizontal track loops seamlessly.
  const loop = [...quotes, ...quotes];
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="marquee-track-x flex w-max gap-5 px-5">
        {loop.map((q, i) => (
          <figure
            key={i}
            className="flex w-[296px] shrink-0 flex-col rounded-[3px] border border-line bg-paper p-7 shadow-soft-sm sm:w-[392px]"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-[26px] font-semibold leading-none text-clay">
                {String((i % quotes.length) + 1).padStart(2, '0')}
              </span>
              <span className="text-sm tracking-[.2em] text-clay">★★★★★</span>
            </div>
            <blockquote className="mt-5 font-display text-[19px] font-medium italic leading-[1.3] tracking-[-.01em] text-ink sm:text-[22px]">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 pt-1">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-bold text-clay">
                {q.initials}
              </span>
              <span>
                <b className="block font-body text-sm font-semibold text-ink">{q.name}</b>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[.14em] text-slate">
                  {q.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
