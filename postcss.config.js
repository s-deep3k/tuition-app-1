module.exports = {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './components/**/*.js',
                './components/**/*.jsx',
                './components/**/**/*.jsx',
                './pages/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
          }
        : {})
    }
}