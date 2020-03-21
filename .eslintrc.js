module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
  settings: {},
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 'off',
    'prefer-template': 'off',
    'consistent-return': 'off',
  },
}
