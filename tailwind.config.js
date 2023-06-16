/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkslategrey: "hsl(234, 29%, 20%)",
        charcoalgrey: "hsl(235, 18%, 26%)",
        maingrey: "hsl(231, 7%, 60%)",
        mainwhite: "hsl(0, 0%, 100%)",
        lightorange: "#FF6742",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
