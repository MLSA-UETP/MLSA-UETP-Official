/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: '#00A3EE',
      secondary: '#00A3EE',
      secondaryGray: '#727272',
      placeholderColor: '#718EBF',
      dark: '#b1b1b1',
      white: '#ffffff',
      black: colors.black,
      gray: colors.neutral,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
    },
    extend: {
    },
    variants: {

    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

