import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"

// Conversion of Plugin Configurations to Flat Configuration format
const tsConfig = tsPlugin.configs.recommended;
const reactConfig = reactPlugin.configs.recommended;
const prettierConfigRules = prettierConfig.rules;

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    ignores: ["**/*.config.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "prettier": prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...tsConfig.rules,
      ...reactConfig.rules,
      ...prettierConfigRules,
      "no-undef": "off",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "no-console": "warn",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".ts", ".jsx", ".tsx"] },
      ],
      "prettier/prettier": "error",
    },
  }
];
