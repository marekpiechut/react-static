module.exports = {
  env: { es6: true, jest: true },
  settings: { react: { version: 'detect' } },
  extends: ['prettier'],
  rules: {
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
