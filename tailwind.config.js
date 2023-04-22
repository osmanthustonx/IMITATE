/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      green: {
        1: "#7ed2c7",
        2: "#418a80",
      },
      blue: "rgb(100, 125, 238)",
      white: '#fff',
      black: {
        1: "#1e1e2f",
        2: "#010613"
      }
    },
    extend: {
      backgroundImage: {
        "linear-primary": "linear-gradient(180deg,rgba(250,250,251),rgba(69,191,176) .01%,rgba(69,191,176,.34))",
      },
    },
  },
  plugins: [],
}