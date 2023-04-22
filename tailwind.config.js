/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      purple: {
        1: "rgb(194, 141, 255)",
        2: "rgb(179, 113, 255)",
        3: "rgb(79, 37, 128)",
        4: "rgb(18, 3, 56)"
      },
      blue: "rgb(100, 125, 238)",
      white: '#fff',
      black: '#000'
    },
    extend: {
      backgroundImage: {
        "image": "url('https://www.copycat.finance/image/BG2.jpg')",
        "linear-primary": "linear-gradient(to right, rgb(127, 83, 172), rgb(100, 125, 238))",
      },
    },
  },
  plugins: [],
}