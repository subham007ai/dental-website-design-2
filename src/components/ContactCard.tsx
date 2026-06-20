import type { ReactNode } from 'react';
import type { Icon as TablerIcon } from '@tabler/icons-react';

type ContactCardProps = {
  icon: TablerIcon;
  title: string;
  children: ReactNode;
};

export default function ContactCard({ icon: Icon, title, children }: ContactCardProps) {
  return (
    <div className="border-y border-line bg-white/55 p-7 text-left transition-all duration-200 hover:bg-white hover:shadow-soft-sm sm:p-8">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-chartreuse shadow-sm">
        <Icon size={26} />
      </div>
      <h3 className="mb-2 font-display text-[22px] font-medium tracking-[-.025em] text-navy">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-slate [&_a:hover]:text-navy [&_a]:font-semibold [&_a]:transition-colors [&_a:hover]:underline">
        {children}
      </div>
    </div>
  );
}
