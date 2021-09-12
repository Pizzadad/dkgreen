module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          375: '#798dad',
          350: '#99a8c0',
          325: '#b0bcd0'
        },
        green: {
          375: '#71c0bb',
          350: '#94D0CC',
          325: '#b7e0dd'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
