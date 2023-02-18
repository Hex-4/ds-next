/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#ffd11a"
      },
      fontFamily: {
        sans: ["Inter"]
      }
    },
  },
  plugins: [],
  important: true,
}
