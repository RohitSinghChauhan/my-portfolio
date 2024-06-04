/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      def: ["Exo", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        default: "#f7f6f2", //#f7f6f2 #faf9f5
        primary: "#262626",
        secondary: "#FFFFFF",
      },
    },
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
