/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      'agraham': ['agraham', 'sans-serif']
    },
  },
  plugins: [],
}