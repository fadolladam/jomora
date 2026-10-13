import React from 'react';

interface BrandMarkProps {
  /** the background this sits on — `dark` puts the logo on a brand-blue chip */
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  /**
   * Render as a full-width band (edge-to-edge, square corners, logo centred)
   * instead of a self-hugging chip. Used for the admin sidebar header.
   */
  block?: boolean;
  className?: string;
}

const ICON_SIZE = { sm: 'w-6 h-6 text-xs', md: 'w-7 h-7 text-sm', lg: 'w-9 h-9 text-base' } as const;
const TEXT_SIZE = { sm: 'text-base', md: 'text-lg', lg: 'text-xl' } as const;
const CHIP_PAD = { sm: 'px-2.5 py-1.5', md: 'px-3 py-2', lg: 'px-4 py-2.5' } as const;
const BAND_PAD = { sm: 'py-3', md: 'py-4', lg: 'py-5' } as const;

/**
 * The Jomora brand lockup — modern mark and wordmark.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  theme = 'light',
  size = 'md',
  block = false,
  className = '',
}) => {
  const dark = theme === 'dark';

  const content = (
    <div className="flex items-center gap-2.5 shrink-0">
      <div
        className={`${ICON_SIZE[size]} rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white font-black shadow-sm select-none`}
      >
        J
      </div>
      <div className="flex flex-col leading-none text-left">
        <span
          className={`font-black ${TEXT_SIZE[size]} tracking-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Jomora
        </span>
        <span
          className={`text-[9px] font-semibold tracking-wider uppercase mt-0.5 ${
            dark ? 'text-indigo-300/80' : 'text-indigo-600/80'
          }`}
        >
          Events
        </span>
      </div>
    </div>
  );

  if (block) {
    return (
      <div
        className={`flex items-center justify-center w-full ${BAND_PAD[size]} ${
          dark ? 'bg-rhb-navy/40' : ''
        } ${className}`}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${
        dark ? `bg-white/5 rounded-xl border border-white/10 ${CHIP_PAD[size]}` : ''
      } ${className}`}
    >
      {content}
    </div>
  );
};
