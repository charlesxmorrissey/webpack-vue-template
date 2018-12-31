module.exports = {
  plugins: {
    'postcss-normalize': {
      forceImport: true,
    },
    autoprefixer: {
      flexbox: 'no-2009',
    },
    'postcss-pxtorem': {
      propList: ['*'],
    },
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-custom-selectors': {},
    'postcss-font-family-system-ui': {},
  },
}
