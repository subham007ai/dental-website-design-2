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
    <header className="sticky top-0 z-[60] border-b border-line bg-cream/[.92] backdrop-blur-[10px]">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav className="ml-auto hidden items-center gap-[22px] text-sm font-medium min-[981px]:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 whitespace-nowrap hover:text-greenDk ${
                isActive(item.href)
                  ? 'text-greenDk after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:bg-green'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-[14px] min-[981px]:flex">
          <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold">
            <IconPhone size={17} className="text-greenDk" />
            {site.phone.display}
          </span>
          <Button href={bookHref} className="!px-5 !py-2.5">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-navy min-[981px]:hidden"
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-b border-line bg-white px-[26px] py-[22px] min-[981px]:hidden">
          <nav className="flex flex-col gap-[18px] text-[15px] font-medium">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? 'text-greenDk' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={bookHref} className="mt-5 w-full justify-center">
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
}
