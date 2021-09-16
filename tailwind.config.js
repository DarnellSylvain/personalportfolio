module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#36373b",
        header: "#2d2e32",
      },
      backgroundColor: {
        primary: "#36373b",
        header: "#2d2e32",
      },
      backgroundImage: {
        supercamp: "url('/supercamp.jpg')",
        maynooth: "url('/maynoothproject.png')",
        twitter: "url('/twitter-brands.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
