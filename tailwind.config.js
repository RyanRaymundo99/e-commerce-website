/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '30rem',
      },
      maxWidth: {
        '23': '23rem',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}