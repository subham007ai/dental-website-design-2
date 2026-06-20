import Link from 'next/link';
import { IconDental, IconSparkles, IconCircleCheck, IconArrowRight } from '@tabler/icons-react';
import Button from '@/components/Button';

interface PillarItem {
  label: string;
  href: string;
}

const dentalItems: PillarItem[] = [
  { label: 'General & preventive', href: '/services/dental-health' },
  { label: 'Dental implants', href: '/services/dental-health' },
  { label: 'Root canal', href: '/services/dental-health' },
  { label: 'Braces & aligners', href: '/services/dental-health' },
  { label: 'Cosmetic dentistry', href: '/services/dental-health' },
  { label: 'Kids & oral surgery', href: '/services/dental-health' },
];

const skinItems: PillarItem[] = [
  { label: 'Hair transplant (FUE/FUT)', href: '/services/hair-solution' },
  { label: 'PRP & hair loss', href: '/services/hair-solution' },
  { label: 'Skin & acne treatment', href: '/services/skin-diseases' },
  { label: 'Laser & pigmentation', href: '/services/laser-treatment' },
  { label: 'Dermal fillers', href: '/services/dermal-fillers' },
  { label: 'Deep chemical peels', href: '/services/deep-peelings' },
];

function CheckList({ items, tone }: { items: PillarItem[]; tone: 'green' | 'clay' }) {
  return (
    <ul className="mb-6 grid grid-cols-1 gap-x-4 gap-y-2.5 min-[481px]:grid-cols-2">
      {items.map((it) => (
        <li key={it.label} className="text-sm font-medium">
          <Link
            href={it.href}
            className="flex items-center gap-[9px] hover:text-navy transition-colors text-slate group"
          >
            <IconCircleCheck
              size={17}
              className={`shrink-0 ${tone === 'green' ? 'text-greenDk group-hover:text-green' : 'text-clayDk group-hover:text-clay'}`}
            />
            <span className="hover:underline">{it.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Pillars() {
  return (
    <div className="grid grid-cols-1 divide-y divide-line min-[921px]:grid-cols-2 min-[921px]:divide-y-0 min-[921px]:divide-x fine-grid bg-white rounded-[24px] overflow-hidden shadow-soft-sm">
      {/* Dental */}
      <div className="group p-8 md:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-cream/50">
        <div>
          <div className="mb-4 flex items-center gap-3.5">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-sky text-greenDk">
              <IconDental size={24} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-green">
                Speciality 01
              </div>
              <h3 className="text-2xl font-display font-medium text-navy">Dental Care</h3>
            </div>
          </div>
          <p className="mb-6 mt-3 text-[14.5px] leading-relaxed text-slate">
            Complete family dentistry led by Dr. Satyajit Sahu (MDS, Oral &amp;
            Implant Surgeon) — from routine check-ups to complex implants.
          </p>
          <CheckList items={dentalItems} tone="green" />
        </div>
        <div>
          <Button href="/services#dental" className="w-full sm:w-auto justify-center">
            <IconArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" /> Explore dental care
          </Button>
        </div>
      </div>

      {/* Skin & Hair */}
      <div className="group p-8 md:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-cream/50">
        <div>
          <div className="mb-4 flex items-center gap-3.5">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-clayTint text-clayDk">
              <IconSparkles size={24} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-clay">
                Speciality 02
              </div>
              <h3 className="text-2xl font-display font-medium text-navy">Skin &amp; Hair</h3>
            </div>
          </div>
          <p className="mb-6 mt-3 text-[14.5px] leading-relaxed text-slate">
            Dermatology, aesthetics and hair restoration with experienced
            specialists — safe, modern, natural-looking results.
          </p>
          <CheckList items={skinItems} tone="clay" />
        </div>
        <div>
          <Button href="/services#skin" variant="clay" className="w-full sm:w-auto justify-center">
            <IconArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" /> Explore skin &amp; hair
          </Button>
        </div>
      </div>
    </div>
  );
}
