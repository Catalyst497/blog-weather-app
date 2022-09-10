/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': ""
      }
    },
    fontFamily: {
      'barlow':['san-serif', 'Barlow'],
      'barlow-condensed': ['san-serif', 'Barlow Condensed'],
      'bellefair' : ['serif', 'Bellefair'],
    }
  },
  plugins: [],
}
