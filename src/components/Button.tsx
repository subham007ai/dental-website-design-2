import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'green' | 'clay' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-[9px] rounded-md border border-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[.12em] whitespace-nowrap cursor-pointer transition-[transform,background-color,border-color,color] duration-200 will-change-transform active:scale-[.97] active:translate-y-0';

const variants: Record<Variant, string> = {
  // Primary — editorial ink button
  green:
    'bg-ink text-cream hover:bg-[#2A2620] border-transparent hover:-translate-y-0.5 shadow-md',
  // Accent — vermilion
  clay: 'bg-clay text-white hover:bg-clayDk border-transparent hover:-translate-y-0.5 shadow-md',
  ghost:
    'bg-transparent border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream hover:-translate-y-0.5',
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<ComponentProps<typeof Link>, 'className' | 'children'> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ComponentProps<'button'>, 'className' | 'children'> & {
    href?: undefined;
  };

export default function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = 'green', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { variant: _v, className: _c, children: _ch, ...rest } = props;
    const external = /^(https?:|tel:|mailto:)/.test(props.href);
    if (external) {
      return (
        <a className={classes} {...(rest as ComponentProps<'a'>)}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
