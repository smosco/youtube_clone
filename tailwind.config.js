/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff0000",
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
