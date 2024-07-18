/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#FF6F00", dark: "#CC5900" },
        secondary: "#2C1603",
        white: "#FFFFFF",
        blue: "#1D160D",
        gray: "#7E838B",
        black: "#000000",
        light: "#f3f3f3",
      },
      fontSize: {
        80: "80px",
      },

      fontFamily: {
        cursive: ["Island Moments", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        italianno: ["Italianno", "cursive"],
      },
    },
  },
  plugins: [],
};
