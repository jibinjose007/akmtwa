/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022c43",
        secondary: "#0089D0",
        secondary_light: "#5893d4",
        tertiary: "#f7b633",
        tertiary_light: "#FCD077",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
    },
  },
  plugins: [],
};
