/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090A0C',
        surface: '#111316',
        text: '#F5F2EA',
        'text-muted': 'rgba(245,242,234,0.65)',
        accent: '#D7C5A3',
        highlight: '#EEDBB4',
        'world-one-bg': '#1a1a16',
        'crossing-bg': '#0f1115',
        'world-two-bg': '#090A0C',
      },
      boxShadow: {
        soft: '0 40px 120px rgba(0, 0, 0, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(238,219,180,0.22), transparent 35%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
