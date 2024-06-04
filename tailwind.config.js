/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        subTitle: "hsl(var(--subTitle))",
        background: "hsl(var(--background))",
        layout: "hsl(var(--layout))",
        hoverColor: "hsl(var(--hoverColor))",
        seconBackground: "hsla(var(--seconBackground))",
      },
      fontFamily: {
        header: ["Playfair Display", "Poppins"],
        body: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
