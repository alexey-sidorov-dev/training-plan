module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/webpack.*.{js,ts}",
          "**/*.test.{js,ts,jsx,tsx}",
          "**/*.setup.{js,ts,d.ts,jsx,tsx}",
          "**/*.stories.{js,ts,jsx,tsx}",
          "**/config/*.{ts,js}",
        ],
      },
    ],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    "no-console": "off",
    "no-alert": "off",
    "no-param-reassign": ["off"],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        ignoreTypeReferences: true,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
