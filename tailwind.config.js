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
          light: "#1B6B93",
          DEFAULT: "#164B60",
        },
        'shopping-cart':{
          light:"#DDE6ED",
          DEFAULT: "#526D82",
        } ,
        'light-grey': "#9DB2BF"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
