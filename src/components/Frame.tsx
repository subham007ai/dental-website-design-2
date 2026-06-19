import type { ReactNode } from 'react';

type FrameProps = {
  /** Corner caption describing the eventual image. */
  label: string;
  /** Tabler icon element shown centred as a placeholder. */
  icon: ReactNode;
  /** Use the terracotta/clay tint instead of the green tint. */
  tone?: 'green' | 'clay';
  className?: string;
};

/**
 * Image placeholder used until real WebP photography lands (Phase 5).
 * Soft radial-gradient panel with a corner label and a faded centre icon.
 */
export default function Frame({
  label,
  icon,
  tone = 'green',
  className = '',
}: FrameProps) {
  const toneBg =
    tone === 'clay'
      ? 'bg-[radial-gradient(120%_120%_at_30%_22%,#F6E8E0,#F0D9CD_55%,#E9CBBC)]'
      : 'bg-[radial-gradient(120%_120%_at_30%_22%,#E8EFE7,#DCE6DA_55%,#CFDED2)]';
  const labelColor = tone === 'clay' ? 'text-[#C3A192]' : 'text-[#9AB0A2]';
  const iconColor = tone === 'clay' ? 'text-[#C9A595]' : 'text-[#A6BCAE]';

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line ${toneBg} ${className}`}
    >
      <span
        className={`absolute left-[15px] top-[15px] text-[11px] font-semibold uppercase tracking-[1px] ${labelColor}`}
      >
        {label}
      </span>
      <span className={`text-[40px] ${iconColor}`}>{icon}</span>
    </div>
  );
}
