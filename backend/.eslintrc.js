module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es6: false,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'require-await': 'error',
    'prefer-const': 'error',
  },
};
