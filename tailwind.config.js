/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '70': '17.5rem',
        '76': '19rem',
        '84' : '21rem',
        '88' : '22rem',
      },
      fontFamily: {
        'roboto': ['Roboto'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
