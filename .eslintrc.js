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
    'max-len': 0,
    quotes: 0,
    'camelcase': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    indent: 0,
    'default-case': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-commented-out-code': 0,
    'prefer-destructuring': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0, // включить в дальнейшем
    'no-restricted-syntax': 0, // включить в дальнейшем
    'guard-for-in': 0, // включить в дальнейшем
    'prefer-const': 0, // включить в дальнейшем
    'object-shorthand': 0, // включить в дальнейшем
    'func-names': 0, // включить в дальнейшем
    'object-curly-newline': 0, // включить в дальнейшем
  },
};
