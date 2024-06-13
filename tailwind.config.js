// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F7F7F7",
        offWhite: "#FEFEFE",
        black: "#010101",
        grey: "#4B4B4B",
        offGrey: "#DFDEDE",
        red: "#96151D",
        lightGrey: "#D2D2D2",
        pink: "#EB484C",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Inter: ["Inter"],
      },
      lineHeight: {
        sm: "120%",
        md: "150%",
      },
    },
  },
  plugins: [],
};
