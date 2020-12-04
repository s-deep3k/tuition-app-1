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
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
