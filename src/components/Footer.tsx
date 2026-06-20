import Link from 'next/link';
import Logo from '@/components/Logo';
import { nav, site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ink-panel pb-8 pt-14 text-[#C9C2B4]">
      <div className="wrap">
        <div className="mb-9 flex flex-col justify-between gap-4 border-b border-white/[.14] pb-8 min-[721px]:flex-row min-[721px]:items-end">
          <div className="max-w-[520px]">
            <span className="display-kicker">Bhubaneswar · Since 2004</span>
            <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,40px)] font-medium leading-[1] tracking-[-.03em] text-cream">
              Care, written in plain language.
            </h2>
          </div>
          <a href={site.phone.tel} className="text-sm font-bold text-clay hover:text-cream">Call {site.phone.display} ↗</a>
        </div>
        <div className="grid grid-cols-1 gap-[30px] min-[721px]:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo variant="dark" className="mb-[14px]" />
            <p className="max-w-[38ch] text-sm leading-relaxed text-[#9E978A]">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="mb-[14px] text-[10px] font-bold uppercase tracking-[.2em] text-[#7C766B]">
              Explore
            </h4>
            {nav
              .filter((item) => item.href !== '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline mb-2 block w-fit text-sm text-[#9E978A] transition-colors hover:text-clay"
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <div>
            <h4 className="mb-[14px] text-[10px] font-bold uppercase tracking-[.2em] text-[#7C766B]">
              Visit
            </h4>
            <p className="mb-2 text-sm text-[#9E978A]">{site.address.short}</p>
            <p className="mb-2 text-sm text-[#9E978A]">{site.hours.full}</p>
            <a
              href={site.phone.tel}
              className="mb-2 block text-sm text-[#9E978A] hover:text-clay transition-colors"
            >
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-between gap-2 border-t border-white/[.12] pt-5 text-[11px] uppercase tracking-[.08em] text-[#7C766B]">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>
            Concept redesign for portfolio purposes — not affiliated with or
            endorsed by the clinic.
          </span>
        </div>
      </div>
    </footer>
  );
}
