/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import rippleui from "rippleui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D21E1E",
        mediumblack: "#1A1A1A",
        semiblack: "#2A2A2A",
        secondary: "#ECB300",
        border: "#FA9E93",
      },
      fontFamily: {
        sans: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
        title: ['"Roboto Condensed"', ...defaultTheme.fontFamily.serif],
      },
      height: {
        84: "22rem",
        86: "24rem",
        88: "26rem",
        90: "28rem",
      },
      opacity: {
        85: "0.85",
      },
    },
  },
  plugins: [rippleui],
};
