const path = require('path');
// eslint-disable-next-line no-unused-vars
const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
    snap: true,
  },
  parser: {
    '@typescript-eslint/parser': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'import/no-named-as-default': 0,
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: ['@material-ui/core', '@material-ui/icons', '@material-ui/lab'],
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/ignore': 'node_modules',
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
