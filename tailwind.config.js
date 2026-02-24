/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          800: '#0d2240',
          700: '#102d50',
        },
        teal: {
          DEFAULT: '#0d7a6e',
          light: '#12a898',
          50: '#f0faf9',
          100: '#ccefec',
        },
        gold: {
          DEFAULT: '#c8a96e',
          light: '#d4ba8a',
        },
        cream: '#f8f5f0',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      }
    },
  },
  plugins: [],
};
