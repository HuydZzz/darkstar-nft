/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Anton', 'sans-serif'],
        condiment: ['Condiment', 'cursive'],
      },
      colors: {
        base: '#FCF9F3',
        dark: '#2E2E2E',
        navy: '#21304E',
        gold: '#A08965',
        silver: '#CCCAC6',
      },
    },
  },
  plugins: [],
};

