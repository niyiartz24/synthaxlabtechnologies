/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0B0D',
        navy: '#0D1321',
        charcoal: '#15171C',
        panel: '#1A1D24',
        line: '#262A33',
        purple: {
          DEFAULT: '#7C5CFC',
          soft: '#9D85FF',
          deep: '#5B3FE0',
        },
        electric: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
        },
        paper: '#F5F6F8',
        gray: {
          soft: '#B7BCC7',
          muted: '#7A8092',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #0A0B0D)',
      },
    },
  },
  plugins: [],
}
