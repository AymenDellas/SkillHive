/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#A594F9",
        primary: "#F5EFFF",
        background: "#E5D9F2",
        button: "#987D9A",
        hover: "#E7CCCC",
      },
    },
  },
  plugins: [],
};
