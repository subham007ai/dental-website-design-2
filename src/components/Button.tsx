import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'green' | 'clay' | 'ghost';

const base =
  'inline-flex items-center gap-[9px] font-semibold text-[15px] px-[26px] py-[14px] rounded-full cursor-pointer border-[1.5px] border-transparent whitespace-nowrap transition-[transform,background-color,border-color,color] duration-200 will-change-transform';

const variants: Record<Variant, string> = {
  green:
    'bg-green text-white shadow-[0_8px_20px_rgba(31,107,87,.26)] hover:bg-greenDk hover:-translate-y-0.5',
  clay: 'bg-clay text-white shadow-[0_8px_20px_rgba(200,118,90,.26)] hover:bg-clayDk hover:-translate-y-0.5',
  ghost:
    'bg-white border-line text-navy hover:border-green hover:text-greenDk',
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
