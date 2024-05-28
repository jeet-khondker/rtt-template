/** @type {import('tailwindcss').Config} */
module.exports = {
  // Just-In-Time Node Configuration
  node: "jit",

  // Template Paths Configuration
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
