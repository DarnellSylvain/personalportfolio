module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        darnellphoto: "url('/darnellpicture.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
