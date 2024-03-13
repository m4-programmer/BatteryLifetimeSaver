/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    './screens/**/*.{js,jsx,ts,tsx}', // Include JavaScript and TypeScript files in the 'app' directory
    './components/**/*.{js,jsx,ts,tsx}', // Include JavaScript and TypeScript files in the 'components' directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

