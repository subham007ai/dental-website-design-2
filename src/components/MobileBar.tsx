import Link from 'next/link';
import {
  IconPhone,
  IconBrandWhatsapp,
  IconCalendarPlus,
} from '@tabler/icons-react';
import { site, bookHref } from '@/lib/site';

/** Fixed bottom action bar shown only on small screens. */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] flex border-t border-line bg-white sm:hidden">
      <a
        href={site.phone.tel}
        className="flex flex-1 items-center justify-center gap-[7px] py-[14px] text-sm font-semibold text-navy"
      >
        <IconPhone size={18} /> Call
      </a>
      <a
        href={site.phone.whatsapp}
        className="flex flex-1 items-center justify-center gap-[7px] bg-[#25D366] py-[14px] text-sm font-semibold text-white"
      >
        <IconBrandWhatsapp size={18} /> WhatsApp
      </a>
      <Link
        href={bookHref}
        className="flex flex-1 items-center justify-center gap-[7px] bg-green py-[14px] text-sm font-semibold text-white"
      >
        <IconCalendarPlus size={18} /> Book
      </Link>
    </div>
  );
}
