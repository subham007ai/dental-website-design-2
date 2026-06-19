import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4EC',
        mist: '#EEF2EC',
        sand: '#F3EDE1',
        navy: '#13392E',
        ink: '#23332C',
        slate: '#6B7A72',
        green: '#1F6B57',
        greenDk: '#15513F',
        sky: '#E3EDE6',
        clay: '#C8765A',
        clayDk: '#A85B43',
        clayTint: '#F6E8E0',
        gold: '#C39A45',
        line: '#E7E5DA',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1160px',
      },
      boxShadow: {
        soft: '0 18px 44px rgba(19,57,46,.10)',
        'soft-sm': '0 8px 22px rgba(19,57,46,.07)',
      },
      letterSpacing: {
        tightest: '-.5px',
      },
    },
  },
  plugins: [],
};

export default config;
