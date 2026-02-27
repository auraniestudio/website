/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F1',
        sand: '#EDE9E2',
        stone: '#E5E0D8',
        gold: '#B8860B',
        amber: '#C9A227',
        'amber-light': '#D4AF37',
        charcoal: '#2C2C2C',
        ink: '#1A1A1A',
        dark: '#0a0a0b',
        'dark-surface': '#12121a',
        'dark-border': '#2a2a32',
        'light': '#f5f5f0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
