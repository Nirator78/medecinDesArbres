// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        green: colors.lime,

      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
