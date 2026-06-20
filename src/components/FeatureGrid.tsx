import type { Icon } from '@tabler/icons-react';

export type FeatureItem = {
  icon: Icon;
  title: string;
  text: string;
};

export default function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-1 border-y border-line min-[561px]:grid-cols-2 min-[921px]:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="border-b border-line px-0 py-7 last:border-b-0 min-[561px]:border-b-0 min-[561px]:px-7 min-[561px]:even:border-l min-[921px]:px-8 min-[921px]:first:pl-0 min-[921px]:border-l min-[921px]:first:border-l-0">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-chartreuse shadow-sm">
            <Icon size={24} stroke={2} />
          </div>
          <h3 className="mb-2 font-body text-[15px] font-bold tracking-normal text-navy">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate">{text}</p>
        </div>
      ))}
    </div>
  );
}
