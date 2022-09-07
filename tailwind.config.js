/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/images/weather.jpg')"
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
