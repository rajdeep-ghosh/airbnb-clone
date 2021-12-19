module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb_red: "#e0565b",
      },
      fontFamily: {
        "Nunito-Sans": ['"Nunito Sans", sans-serif'],
      },
    },
  },
  plugins: [],
};
