module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'portreal-blue': {
          light: "#7B8FA1",
          DEFAULT: "#0A2647",
        },
        'shopping-cart':{
          light:"#A5D7E8",
          DEFAULT: "#1B6B93",
        } ,
        'sale-container':{
          text: "#C51605",
          DEFAULT: "#FCAEAE",
        },
        light_blue: "#3AA6B9",
        dark_blue: "#27374D",
        border_blue: "#27374D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
