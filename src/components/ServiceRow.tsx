import type { ReactNode } from 'react';
import Link from 'next/link';
import { IconCircleCheck, IconCalendarPlus } from '@tabler/icons-react';
import Reveal from '@/components/Reveal';
import Frame from '@/components/Frame';
import Button from '@/components/Button';
import { bookHref } from '@/lib/site';

export type ServiceRowItem = string | { label: string; href: string };

export type ServiceRowData = {
  tag: string;
  title: string;
  desc: string;
  items: ServiceRowItem[];
  frameLabel: string;
  frameIcon: ReactNode;
  ctaLabel: string;
  slug?: string;
  src?: string;
};

export default function ServiceRow({
  data,
  tone = 'green',
  flip = false,
  index,
}: {
  data: ServiceRowData;
  tone?: 'green' | 'clay';
  flip?: boolean;
  index?: number;
}) {
  const accent = tone === 'green' ? 'text-greenDk' : 'text-clayDk';
  return (
    <Reveal
      className={`grid grid-cols-1 items-center gap-[46px] border-b border-line py-[56px] last:border-b-0 ${
        flip
          ? 'min-[921px]:grid-cols-[.95fr_1.05fr]'
          : 'min-[921px]:grid-cols-[1.05fr_.95fr]'
      }`}
    >
      <Frame
        label={data.frameLabel}
        icon={data.frameIcon}
        tone={tone}
        src={data.src}
        className={`aspect-[4/3] min-h-[300px] rounded-[20px] ${
          flip ? 'min-[921px]:order-2' : ''
        }`}
      />
      <div className="flex items-start gap-5 sm:gap-7">
        {typeof index === 'number' && (
          <span className="hidden shrink-0 font-display text-[clamp(44px,5vw,72px)] font-semibold leading-[.78] text-clay sm:block">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <div>
        <div
          className={`text-xs font-semibold uppercase tracking-[1px] ${accent}`}
        >
          {data.tag}
        </div>
        <h2 className="mb-3 mt-2 text-[clamp(28px,3.6vw,42px)] font-semibold">
          {data.title}
        </h2>
        <p className="mb-4 text-slate">{data.desc}</p>
        <ul className="mb-[22px] grid grid-cols-1 gap-x-4 gap-y-2.5 min-[481px]:grid-cols-2">
          {data.items.map((it) => {
            const isObj = typeof it === 'object';
            const label = isObj ? it.label : it;
            const href = isObj ? it.href : undefined;
            return (
              <li
                key={label}
                className="flex items-center gap-[9px] text-[14.5px] font-medium text-slate"
              >
                <IconCircleCheck size={17} className={`shrink-0 ${accent}`} />
                {href ? (
                  <Link href={href} className="hover:underline hover:text-navy transition-colors">
                    {label}
                  </Link>
                ) : (
                  label
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Button href={bookHref} variant={tone}>
            <IconCalendarPlus size={18} /> {data.ctaLabel}
          </Button>
          {data.slug && (
            <Button href={`/services/${data.slug}`} variant="ghost">
              Learn details &rarr;
            </Button>
          )}
        </div>
        </div>
      </div>
    </Reveal>
  );
}
