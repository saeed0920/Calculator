/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./js/index.js"],
  theme: {
    extend: {
      scale: {
        500: "5",
      },
    },
  },
  plugins: [],
};
