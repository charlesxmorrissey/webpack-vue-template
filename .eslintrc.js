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

  plugins: ['vue', 'html'],

  rules: {
    'no-console': 0,
  },
}
