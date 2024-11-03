/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        light:{
          primary: "#EDE8DC",
          secondary: "#B7B7A4"
        },
        dark:{
          primary: "#364135", //arkaplan
          secondary: "#C1B6A4" // ön kısımlar
        },
        button:{
          primary: "#4D4F4E"
        }
      }
    },
  },
  plugins: [],
}