'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconPhone, IconMenu2, IconX } from '@tabler/icons-react';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { nav, site, bookHref } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-cream/[.85] backdrop-blur-xl">
      <div className="wrap flex h-[78px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-1 text-[12px] font-semibold uppercase tracking-[.11em] min-[981px]:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative px-3 py-2 whitespace-nowrap transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:bg-chartreuse'
                  : 'link-underline text-slate hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 min-[981px]:flex">
          <a href={site.phone.tel} aria-label="Call Utkal Dental Care" className="flex items-center gap-1.5 whitespace-nowrap text-xs font-bold text-navy transition-colors hover:text-greenDk">
            <IconPhone size={17} className="text-greenDk" />
            {site.phone.display}
          </a>
          <Button href={bookHref} className="!rounded-md !px-4 !py-2.5 !text-xs !uppercase !tracking-[.12em]">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-line p-2 text-navy min-[981px]:hidden"
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-b border-line bg-cream px-5 py-5 shadow-soft-sm min-[981px]:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 text-[13px] font-semibold uppercase tracking-[.12em]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`border-b border-line py-3 transition-colors ${
                  isActive(item.href)
                    ? 'text-greenDk'
                    : 'text-navy hover:text-greenDk'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={bookHref} className="mt-5 w-full justify-center !rounded-md !uppercase !tracking-[.12em]">
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
}
