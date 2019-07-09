module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier/@typescript-eslint'],
  rules: {
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
