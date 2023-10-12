/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C090D",
        secondary: "#E01A4F",
      },
      fontFamily: {
        NotoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
