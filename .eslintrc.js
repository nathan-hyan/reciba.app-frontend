module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts", ".js"] }],
    "object-curly-newline": 0,
    "no-use-before-define": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "comma-dangle": 0,
    "import/no-unresolved": [0, { caseSensitive: false }],
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    radix: 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "function-paren-newline": 0,
  },
};
