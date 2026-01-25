/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Soft Pastel & Gold & Earth Tone
        cream: {
          50: '#FFFDF8',
          100: '#FFF9ED',
          200: '#FFF3E0',
          300: '#F5E6D3',
          400: '#E8DCC8',
        },
        gold: {
          300: '#E8D4A8',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#B8860B',
          700: '#9A7B0A',
        },
        sage: {
          100: '#E8EDE4',
          200: '#D4DDCE',
          300: '#B8C4AC',
          400: '#9CAF8A',
          500: '#7D9268',
        },
        blush: {
          100: '#F5E6E8',
          200: '#E8D4D8',
          300: '#D4B8BE',
          400: '#C49CA4',
        },
        earth: {
          100: '#E8E4DC',
          200: '#D4CFC4',
          300: '#B8B0A0',
          400: '#8B8070',
          500: '#6B5D4D',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FFFDF8 0%, #F5E6D3 50%, #E8DCC8 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(255,253,248,0.95) 0%, rgba(245,230,211,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
