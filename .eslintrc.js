module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals'
  ],
  ignorePatterns: ['eslintrc.js'],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'eol-last': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/semi': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'padded-blocks': 'off',
    'comma-dangle': ["error", "never"],
    'curly': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'off'
  }
}
