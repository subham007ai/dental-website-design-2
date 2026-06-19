import Link from 'next/link';
import Logo from '@/components/Logo';
import { nav, site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-9 pt-16 text-[#C2D2C7]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-[34px] min-[921px]:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo variant="dark" className="mb-[14px]" />
            <p className="max-w-[38ch] text-sm text-[#A7BFB2]">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="mb-[14px] text-[13px] font-semibold uppercase tracking-[1px] text-[#8FA89B]">
              Explore
            </h4>
            {nav
              .filter((item) => item.href !== '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mb-2 block text-sm text-[#A7BFB2] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <div>
            <h4 className="mb-[14px] text-[13px] font-semibold uppercase tracking-[1px] text-[#8FA89B]">
              Visit
            </h4>
            <p className="mb-2 text-sm text-[#A7BFB2]">{site.address.short}</p>
            <p className="mb-2 text-sm text-[#A7BFB2]">{site.hours.full}</p>
            <a
              href={site.phone.tel}
              className="mb-2 block text-sm text-[#A7BFB2] hover:text-white"
            >
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-[42px] flex flex-wrap justify-between gap-2 border-t border-white/[.12] pt-5 text-[13px] text-[#8FA89B]">
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
