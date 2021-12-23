module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb_red: "#ff5a5f",
      },
      fontFamily: {
        "Nunito-Sans": ['"Nunito Sans", sans-serif'],
      },
      screens: {
        xs: "550px",
      },
    },
  },
  plugins: [],
};
