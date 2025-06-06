/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/views/**/*.html"],
  theme: {
    extend: {
      colors: {
        darkblue: "#01374f",
        lightblue: "#e1f6ff",
        lighthover: "#0287c1"
      },
      fontFamily: {
        primary: ["Lato", "sans-serif"],
        lexend: ["Lexend", "sans-serif"]
      },
    },
  },
  plugins: [],
}