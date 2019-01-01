module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  // plugins: ['vue', 'prettier'],
  plugins: ['vue', 'html'],

  rules: {
    // 'prettier/prettier': 'error',
    // indent: 0,
    // 'no-tabs': 0,
    // 'eol-last': 'off',
    // 'generator-star-spacing': 0,

    'no-console': 0,
  },
}
