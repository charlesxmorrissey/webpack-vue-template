module.exports = {
  plugins: {
    'postcss-normalize': {},
    'autoprefixer': {
      'flexbox': 'no-2009',
    },
    'postcss-pxtorem': {
      'propList': ['*'],
    },
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-custom-selectors': {},
    'postcss-font-family-system-ui': {},
  },
}
