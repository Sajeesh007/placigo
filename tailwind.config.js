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
        '76': '19rem',
        '84' : '21rem',
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
