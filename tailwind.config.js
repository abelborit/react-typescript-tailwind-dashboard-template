/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-primary": "#EE6C4D",
        "accent-secondary": "#f2d757",
        "primary-light": {
          500: "#e4e8e9",
          900: "#cad0d7",
        },
        "primary-dark": {
          700: "#313339",
          900: "#23242A",
        },
        "color-light": "#e4e8e9",
        "color-dark": "#23242A",
        success: "#32b550",
        danger: "#dc3545",
        info: "#17a2b8",
      },
      fontFamily: {
        OpenSans: ["OpenSans"],
        OpenSansItalic: ["OpenSansItalic"],
        Lato: ["Lato"],
        LatoItalic: ["LatoItalic"],
      },
    },
  },
  plugins: [],
};
