import { faqs } from '@/lib/site';

/** Native <details> accordion — works without JS, keyboard-accessible. */
export default function FAQAccordion() {
  return (
    <div className="mx-auto max-w-[820px]">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          className="group border-b border-line transition-colors duration-200 open:bg-paper"
        >
          <summary className="flex cursor-pointer list-none items-start gap-4 py-[22px] pl-4 text-[clamp(16px,2.2vw,19px)] font-semibold text-navy transition-[border-color,padding] duration-200 [&::-webkit-details-marker]:hidden group-open:border-l-2 group-open:border-clay sm:gap-5 sm:pl-6">
            <span className="mt-1 font-display text-sm font-semibold text-clay">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1">{f.q}</span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[19px] leading-none text-chartreuse shadow-sm transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          {/* Grid-rows trick animates open/close height smoothly */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="max-w-[66ch] pb-[24px] pl-[42px] text-base leading-relaxed text-slate sm:pl-[54px]">
                {f.a}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
