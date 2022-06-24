module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js","*.jsx"],
      "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"]
    }
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
