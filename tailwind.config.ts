import type { Config } from 'tailwindcss';

/**
 * "Atelier" — Editorial × Exaggerated-Minimalism design system.
 * Warm bone paper, near-black warm ink, a single vermilion accent.
 * Token NAMES are kept stable so the whole component tree re-skins from here.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        cream: '#F3F0E9', // warm bone — page base
        paper: '#FBF9F3', // lifted paper for cards
        mist: '#ECE7DB', // alt section wash
        sand: '#E7E0D1', // deeper wash
        bone: '#F3F0E9',

        // Ink (warm near-black) — primary text + dark panels
        ink: '#15130F',
        navy: '#15130F', // remapped: "navy" now reads as ink
        green: '#15130F', // remapped: dark accents → ink
        greenDk: '#262019', // soft ink for tracked labels

        // Muted warm grey
        slate: '#5B544A',

        // Single vibrant accent — vermilion
        clay: '#E4572E',
        clayDk: '#C1441F',
        clayTint: '#F7E4DA',
        chartreuse: '#E4572E', // remapped accent everywhere
        gold: '#E4572E',
        sky: '#F7E4DA',

        // Hairlines
        line: '#DED7C7',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        brand: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(21,19,15,.12)',
        'soft-sm': '0 10px 30px rgba(21,19,15,.08)',
      },
      letterSpacing: {
        tightest: '-.06em',
      },
    },
  },
  plugins: [],
};

export default config;
