/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
       
        footer: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      colors: {
        primary: "#A6CE37",
        secondary: "#363638",
        accent: "#e74c3c",
        background: "#000300",
        text: "#333",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};