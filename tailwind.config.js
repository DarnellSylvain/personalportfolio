module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
