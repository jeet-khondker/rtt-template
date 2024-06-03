# Tailwind CSS Installation Setup & Guideline (`ReactJS Version`)

## Installation of Tailwind CSS & its Peer Dependencies

```sh
yarn add -D tailwindcss postcss autoprefixer
```

## Initialization of Tailwind CSS & Generation of `tailwind.config.js` & `postcss.config.js` File

```sh
npx tailwindcss init -p
```

## Reconfiguration of `tailwind.config.js` File

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  // Just-In-Time Mode Configuration
  node: "jit",
  
  //   Template Paths Configuration
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Addition of Tailwind CSS Directives for each of Tailwind CSS Layers in to CSS File `./src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> **Make sure the server is stopped**

## Start of Build Process by Restarting the Server Using `yarn` Package Manager

```sh
yarn start
```

## Using Tailwind CSS in ReactJS Project

```jsx
export const App = () => {
  return (
    <main className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Project</h1>
      </header>
    </main>
  );
}
```

> **Tailwind CSS has been successfully installed in the ReactJS Project.**