/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F3864',
          50: '#E8ECF3',
          100: '#C5CEE0',
          200: '#8A9DBF',
          300: '#4F6C9F',
          400: '#2D4A7A',
          500: '#1F3864',
          600: '#192D4F',
          700: '#13223A',
          800: '#0D1726',
          900: '#070C13',
        },
        crimson: {
          DEFAULT: '#8B1A1A',
          50: '#F5E6E6',
          100: '#E0B8B8',
          200: '#C67070',
          300: '#A84040',
          400: '#8B1A1A',
          500: '#6E1414',
          600: '#510E0E',
          700: '#340909',
          800: '#1A0404',
          900: '#0D0202',
        },
        gold: {
          DEFAULT: '#7D5A00',
          50: '#F5EDD9',
          100: '#E8D4A8',
          200: '#D4A94F',
          300: '#B88A1A',
          400: '#9A7000',
          500: '#7D5A00',
          600: '#604500',
          700: '#433000',
          800: '#261B00',
          900: '#130D00',
        },
      },
      fontFamily: {
        garamond: ['Garamond', 'EB Garamond', 'Georgia', 'serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
