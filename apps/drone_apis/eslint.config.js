module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
    '**/coverage/**',
    '**/*.config.js',
    '**/*.config.ts',
    '**/build/**'
  ],
  env: {
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2021
  }
};
