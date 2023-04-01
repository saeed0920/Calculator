/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./js/index.js"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      scale: {
        500: "5",
      },
    },
  },
  plugins: [],
};
