# ⚙️ Visual Studio Code IDE Front-End Environment Setup

The purpose of this file is to document the workflow of the frontend environment setup of this project in Visual Studio Code Integrated Development Environment (IDE).

It is recommended to use **ESLint** & **Prettier** for better development experience.

1. **Visual Studio Code Extension Installation for ESLint & Prettier** : Install the Visual Studio Code Extension for ESLint & Prettier

2. **Activation/Enabling of ESLint & Prettier Visual Studio Code Extension** : Enable the ESLint & Prettier Visual Studio Code Extension after installation

3. **Creation of a Execution Script for ESLint & Prettier in the `package.json` file of the project** : The script will install all the necessary development dependencies of ESLint & Prettier integrated with TypeScript & ReactJS.

```json
...
"scripts": {
    ...
    "lint": "yarn add prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks --dev"
  },
...
```

4. **Execution of the Created Script Using Yarn Package Manager**

```sh
yarn lint
```

5. **Creation of `.eslintrc` File in Project Directory**

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react", "react-hooks", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "no-console": "error",
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".ts", ".jsx", ".tsx"] }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

6. **Navigation to Visual Studio Code Settings** : Open Visual Studio Code Settings at the bottom left of VS Code IDE

![VS Code Settings](/documentation/images/vscode-settings.png)

7. **Selection of `Workspace` Tab** : Select `Workspace` Tab & select the icon marked in the image below. This will automatically create a blank JSON settings file named `settings.json` in the `.vscode` Directory of the project. These will be the local IDE settings of that particular project.

![VS Code Settings](/documentation/images/vscode-workspace.png)

8. **Setup of Local Settings of Visual Studio Code for ReactJS Project** : Local Settings of Visual Studio Code include the default formatter, tracing ESLint bugs & errors and enabling Emmet

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
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.tslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.enable": true,
  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

9. **Restart Visual Studio Code IDE** : Restart VS Code for taking the changes into effect