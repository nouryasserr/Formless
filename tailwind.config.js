/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff6bf",
        secondary: "#fe682b",
        tertiary: "#43302e",
        quaternary: "#fef8f0",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
