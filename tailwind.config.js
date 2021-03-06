const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
