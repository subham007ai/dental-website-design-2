import Image from 'next/image';
import type { ReactNode } from 'react';

type FrameProps = {
  label?: string;
  icon?: ReactNode;
  tone?: 'green' | 'clay';
  className?: string;
  src?: string;
  arch?: boolean;
};

export default function Frame({
  label,
  icon,
  tone = 'green',
  className = '',
  src,
  arch = false,
}: FrameProps) {
  const toneBg =
    tone === 'clay'
      ? 'bg-[radial-gradient(120%_120%_at_30%_22%,#F6E8E0,#F0D9CD_55%,#E9CBBC)]'
      : 'bg-[radial-gradient(120%_120%_at_30%_22%,#E8EFE7,#DCE6DA_55%,#CFDED2)]';
  const labelColor = tone === 'clay' ? 'text-[#C3A192]' : 'text-[#9AB0A2]';
  const iconColor = tone === 'clay' ? 'text-[#C9A595]' : 'text-[#A6BCAE]';

  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden fine-grid ${
        src ? 'duotone' : ''
      } ${arch ? 'arch-frame' : 'rounded-[20px]'} ${className}`}
    >
      {src ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={src}
            alt={label || 'Clinic visual'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 920px) 100vw, 50vw"
            unoptimized
          />
        </div>
      ) : (
        <>
          <div className={`absolute inset-0 w-full h-full ${toneBg}`} />
          {label && (
            <span
              className={`absolute left-[15px] top-[15px] text-[11px] font-semibold uppercase tracking-[1px] ${labelColor}`}
            >
              {label}
            </span>
          )}
          {icon && <span className={`text-[40px] relative z-10 ${iconColor}`}>{icon}</span>}
        </>
      )}
    </div>
  );
}
