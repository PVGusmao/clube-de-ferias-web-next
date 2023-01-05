const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
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
      },
      fontFamily: {
        'ubuntu': ['ubuntu', 'Open Sans', 'Sans-Serif'],
      },
      width: {
        128: "78.75rem",
      },
      height: {
        '128': '48rem',
      }
    },
  },
  plugins: [],
});
