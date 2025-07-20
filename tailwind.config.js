/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          lato: ["Lato", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
