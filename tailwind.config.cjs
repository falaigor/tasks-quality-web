/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: "#ECF3FE",
        gray: {
          300: "#989EA3",
          500: "#353737",
        },
        blue: {
          300: "#79BFE7",
          500: "#003CBE",
          900: "#031C55",
        },
        green: {
          300: "#4CBC4A",
        },
        yellow: {
          300: "#F1B965",
        },
      },
    },
  },
  plugins: [],
};
