/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#671222",
        },
        secondary: "#FFEED3",
      },
      fontFamily: {
        sans: ["--font-sans"],
        serif: ["--font-serif"],
      },
    },
  },
  plugins: [],
};
