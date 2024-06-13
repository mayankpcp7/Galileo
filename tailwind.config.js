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
        white:"#F7F7F7",
        black:"#010101",
        grey:"#4B4B4B",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
