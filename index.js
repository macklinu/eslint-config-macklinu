module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    eqeqeq: 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'prettier/prettier': 'error',
  },
}
