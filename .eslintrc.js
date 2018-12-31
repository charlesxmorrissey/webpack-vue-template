module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  globals: {
    expect: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/recommended', 'standard'],

  plugins: ['vue'],

  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 2,
      },
    ],
    'newline-after-var': [2, 'always'],
    'no-cond-assign': [2, 'always'],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'object-curly-spacing': [2, 'always'],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'quote-props': [2, 'consistent-as-needed'],
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
  },
}
