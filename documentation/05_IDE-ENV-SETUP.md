# ⚙️ Visual Studio Code IDE Front-End Environment Setup

The purpose of this file is to document the workflow of the frontend environment setup of this project in Visual Studio Code Integrated Development Environment (IDE).

It is recommended to use **ESLint** & **Prettier** for better development experience.

1. **Visual Studio Code Extension Installation for ESLint & Prettier** : Install the Visual Studio Code Extension for ESLint & Prettier

2. **Activation/Enabling of ESLint & Prettier Visual Studio Code Extension** : Enable the ESLint & Prettier Visual Studio Code Extension after installation

In the Command-Line Interface / Terminal, navigate to the root folder where the `package.json` file is located.

3. **Execution of the following command** : This command is used to install the latest version of ESLint

Reference : [ESlint Documentation](https://eslint.org/docs/latest/use/getting-started)

> <b>N. B.</b> : Check the latest version of ESLint every time from the documentation before installation.

```sh
npm init @eslint/config@latest
```

Choose the following options as like below ;

![ESLint Installation Procedure](/documentation/images/ESLint-Installation.png)

A Configuration File of ESLint `eslint.config.mjs` will be created in the root folder of the project i.e. in the same place where `package.json` is located.

4. Installation of the Dependencies, the Development Dependencies and the necessary packages for the installation of ESLint & Prettier

```sh
yarn add eslint prettier typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier eslint-config-prettier @eslint/js @eslint/compat globals --save-dev
```

5. Update the contents inside ESlint Configuration File `eslint.config.mjs`

```mjs
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

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
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
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
  },
];
```

6. Make sure you have removed `eslintConfig` from `package.json` as this is no longer needed for the latest version of ESlint

```json
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
},
```

7. **Execution of ESLint** :

```sh
yarn eslint . --config eslint.config.mjs
```

8. **Navigation to Visual Studio Code Settings** : Open Visual Studio Code Settings at the bottom left of VS Code IDE

![VS Code Settings](/documentation/images/vscode-settings.png)

9. **Selection of `Workspace` Tab** : Select `Workspace` Tab & select the icon marked in the image below. This will automatically create a blank JSON settings file named `settings.json` in the `.vscode` Directory of the project. These will be the local IDE settings of that particular project.

![VS Code Settings](/documentation/images/vscode-workspace.png)

10. **Setup of Local Settings of Visual Studio Code for ReactJS Project** : Local Settings of Visual Studio Code include the default formatter, tracing ESLint bugs & errors and enabling Emmet

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.tslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.enable": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

11. **Restart Visual Studio Code IDE** : Restart VS Code for taking the changes into effect
