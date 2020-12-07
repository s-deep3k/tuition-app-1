module.exports = {
  purge: [
    './components/**/*.{js,jsx}',
      './pages/**/*.{js,jsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily : {
      head : ['Nunito Sans'],
      body : ['Nunito']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'green-50' : '#ecf8ed',
      'green-100' : '#daf1db',
      'green-200' : '#b5e4b8',
      'green-300' : '#90d794',
      'green-400' : '#7dd083',
      'green-500' : '#6bca71',
      'green-600' : '#5cc35f',
      'green-700' : '#50A945'
     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
