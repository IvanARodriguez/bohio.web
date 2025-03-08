/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // Inter for sans-serif text
        serif: ["Merriweather", ...fontFamily.serif], // Change Merriweather to any serif font
      },
    },
  },
  plugins: [],
};
