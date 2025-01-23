/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#0A090C",
        primary: "#F0EDEE",
        background: "#F0EDEE",
        button: "#0A090C",
        hover: "#07393C",
      },
    },
  },
  plugins: [],
};
