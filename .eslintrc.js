module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  plugins: ['prettier', 'vue', 'html'],

  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
