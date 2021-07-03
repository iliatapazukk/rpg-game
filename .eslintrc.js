module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
      'quotes': 0,
      'no-nested-ternary': 0,
      'indent': 0,
      'default-case': 0,
      'no-unused-expressions': 0,
      'no-console': 0,
      'no-plusplus': 0,
  },
};
