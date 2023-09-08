/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7e22ce",
        customBlue: "#007BFF",
        customGray: "#F5F5F5",
        customGrayForText: "#333333",
        charcoalGray: "#444444",
        staleGray: "#708090",
        hoverColor: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
