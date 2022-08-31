// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            strong: {
              color: theme("colors.black"),
            },
            h1: {
              color: theme("colors.gray.900"),
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h2: {
              color: theme("colors.gray.900"),
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h3: {
              color: theme("colors.gray.900"),
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h4: {
              color: theme("colors.gray.900"),
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            code: {
              color: "white",
              "background-color": theme("colors.gray.700"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.900"),
              "margin-top": "0",
              "margin-bottom": "1em",
            },

            "ul > li": {
              "&::before": {
                "background-color": theme("colors.gray.800"),
                "font-weight": "bold",
              },
            },
            "ol > li": {
              "&::before": {
                color: theme("colors.gray.800"),
                "font-weight": "bold",
              },
            },
          },
        },

        dark: {
          css: {
            color: "white",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            strong: {
              color: theme("colors.white"),
            },
            h1: {
              color: "white",
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h2: {
              color: "white",
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h3: {
              color: "white",
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            h4: {
              color: "white",
              "margin-top": "1em",
              "margin-bottom": "0.5em",
            },
            code: {
              color: theme("colors.gray.800"),
              "background-color": "white",
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: "white",
              "margin-top": "0",
              "margin-bottom": "1em",
            },
            "ul > li": {
              "&::before": {
                "background-color": "white",
                "font-weight": "bold",
              },
            },
            "ol > li": {
              "&::before": {
                color: "white",
                "font-weight": "bold",
              },
            },
          },
        },
      }),
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },

      colors: {
        blackish: "#151515",
        eerie: "#1B1B1B",
        beige: "#eae7dc",
        "light-blue": "#1ba9e1",
      },
      screens: {
        xs: { raw: "(max-height: 700px)" },
        // => @media (max-height: 700px) { ... }
      },
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
};
