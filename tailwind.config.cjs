const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "##F20F0F",
        gray: "#C0C0C0",
        yelow: "#F6AB39",
        darkgray: "#636363",
        green: "#11C801",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "Open Sans", "Sans-Serif"],
      },
      width: {
        672: "120rem",
        139: "8.6875rem",
      },
      height: {
        128: "48rem",
        421: "26.313rem",
        559: "34.9375rem",
        1440: "90rem",
        1023: "63.9375rem",
      },
      height: {
        128: "48rem",
      },
    },
  },
  plugins: [],
});
