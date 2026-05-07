/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F3EE',
        bone: '#EDEAE2',
        ink: '#0A0A0A',
        graphite: '#1A1A1A',
        ash: '#2C2A28',
        smoke: '#5A5752',
        mist: '#9A968E',
        veil: 'rgba(10, 10, 10, 0.04)',
        gold: '#BF9930',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'mega': ['clamp(4rem, 14vw, 18rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'colossal': ['clamp(3rem, 10vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'editorial': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'eyebrow': ['0.7rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      letterSpacing: {
        wider: '0.18em',
        widest: '0.28em',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'editorial': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      maxWidth: {
        'reading': '68ch',
      },
      gridTemplateColumns: {
        'editorial': 'minmax(0, 1fr) minmax(0, 2fr)',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
