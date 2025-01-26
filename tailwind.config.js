/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#2b2c34",
        background: "#fffffe",
        button: "#6246ea",
        cardBg: "#d1d1e9",
      },
    },
  },
  plugins: [],
};
