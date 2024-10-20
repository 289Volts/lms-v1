// /** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      white: "#fff",
      black: "#000",
      gray: {
        900: "#1D2026",
        800: "#363B47",
        700: "#4E5566",
        600: "#6E7485",
        500: "#8C94A3",
        400: "#A1A5B3",
        300: "#B7BAC7",
        200: "#CED1D9",
        100: "#E9EAF0",
        50: "#F5F7FA",
      },
      primary: {
        900: "#33140B",
        800: "#662916",
        700: "#993D20",
        600: "#CC522B",
        500: "#FF6636",
        400: "#FF855E",
        300: "#FFA386",
        200: "#FFDDD1",
        100: "#FFEEE8",
      },
      secondary: {
        900: "#111033",
        800: "#222065",
        700: "#342F98",
        600: "#453FCA",
        500: "#564FFD",
        400: "#7872FD",
        300: "#9A95FE",
        200: "#CDCBFE",
        100: "#EBEBFF",
      },
      success: {
        900: "#07260A",
        800: "#0E4C14",
        700: "#15711F",
        600: "#1C9729",
        500: "#23BD33",
        400: "#4FCA5C",
        300: "#7BD785",
        200: "#C3E5C6",
        100: "#E1F7E3",
      },
      warning: {
        900: "#331D06",
        800: "#65390C",
        700: "#985613",
        600: "#CC7319",
        500: "#FD8E1F",
        400: "#FDA44C",
        300: "#FEBB79",
        200: "#FED1A5",
        100: "#FFF2E5",
      },
      error: {
        900: "#2D0E0E",
        800: "#5B1B1B",
        700: "#882929",
        600: "#B63636",
        500: "#E34444",
        400: "#E96969",
        300: "#EE8F8F",
        200: "#F4C8C8",
        100: "#FFF0F0",
      },
    },
    ...defaultTheme,
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display1: [
          "5rem",
          {
            fontWeight: 600,
            lineHeight: "5rem",
            letterSpacing: "-2%",
          },
        ],
        display2: [
          "4.5rem",
          {
            fontWeight: 600,
            lineHeight: "4.625rem",
            letterSpacing: "-2%",
          },
        ],
        display3: [
          "4rem",
          {
            fontWeight: 600,
            lineHeight: "4.25rem",
            letterSpacing: "-2%",
          },
        ],
        heading1: [
          "3rem",
          {
            fontWeight: 600,
            lineHeight: "3.25rem",
            letterSpacing: "-2%",
          },
        ],
        heading2: [
          "2.5rem",
          {
            fontWeight: 600,
            lineHeight: "3rem",
            letterSpacing: "-2%",
          },
        ],
        heading3: [
          "2rem",
          {
            fontWeight: 600,
            lineHeight: "2.5rem",
            letterSpacing: "-1%",
          },
        ],
        heading4: [
          "1.5rem",
          {
            fontWeight: 600,
            lineHeight: "2rem",
            letterSpacing: "-1%",
          },
        ],
        buttonL: [
          "1.125rem",
          {
            fontWeight: 600,
            lineHeight: "3.5rem",
            letterSpacing: "-1%",
          },
        ],
        buttonM: [
          "1rem",
          {
            fontWeight: 600,
            lineHeight: "3rem",
            letterSpacing: "-1%",
          },
        ],
        buttonS: [
          "0.875rem",
          {
            fontWeight: 600,
            lineHeight: "2.5rem",
            letterSpacing: "-1%",
          },
        ],
        labelXXL: [
          "1.125rem",
          {
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0",
          },
        ],
        labelXL: [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0",
          },
        ],
        labelL: [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0",
          },
        ],
        labelM: [
          "0.75rem",
          {
            fontWeight: 500,
            lineHeight: "0.75rem",
            letterSpacing: "0",
          },
        ],
        labelS: [
          "0.625rem",
          {
            fontWeight: 500,
            lineHeight: "0.75rem",
            letterSpacing: "0",
          },
        ],
        bodyT600: [
          "0.625rem",
          {
            fontWeight: 600,
            lineHeight: "0.625rem",
            letterSpacing: "0",
          },
        ],
        bodyT500: [
          "0.625rem",
          {
            fontWeight: 500,
            lineHeight: "0.625rem",
            letterSpacing: "0",
          },
        ],
        bodyT400: [
          "0.625rem",
          {
            fontWeight: 400,
            lineHeight: "0.625rem",
            letterSpacing: "0",
          },
        ],
        bodyS600: [
          "0.75rem",
          {
            fontWeight: 600,
            lineHeight: "1rem",
            letterSpacing: "0",
          },
        ],
        bodyS500: [
          "0.75rem",
          {
            fontWeight: 500,
            lineHeight: "1rem",
            letterSpacing: "0",
          },
        ],
        bodyS400: [
          "0.75rem",
          {
            fontWeight: 400,
            lineHeight: "1rem",
            letterSpacing: "0",
          },
        ],
        bodyM600: [
          "0.875rem",
          {
            fontWeight: 600,
            lineHeight: "1.25rem",
            letterSpacing: "0",
          },
        ],
        bodyM500: [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "1.25rem",
            letterSpacing: "0",
          },
        ],
        bodyM400: [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "1.375rem",
            letterSpacing: "0",
          },
        ],
        bodyL600: [
          "1rem",
          {
            fontWeight: 600,
            lineHeight: "1.375rem",
            letterSpacing: "0",
          },
        ],
        bodyL500: [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "1.375rem",
            letterSpacing: "0",
          },
        ],
        bodyL400: [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
            letterSpacing: "0",
          },
        ],
        bodyXL600: [
          "1.125rem",
          {
            fontWeight: 600,
            lineHeight: "1.5rem",
            letterSpacing: "0",
          },
        ],
        bodyXL500: [
          "1.125rem",
          {
            fontWeight: 500,
            lineHeight: "1.5rem",
            letterSpacing: "0",
          },
        ],
        bodyXL400: [
          "1.125rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
            letterSpacing: "0",
          },
        ],
        bodyXXL600: [
          "1.25rem",
          {
            fontWeight: 600,
            lineHeight: "1.625rem",
            letterSpacing: "0",
          },
        ],
        bodyXXL500: [
          "1.25rem",
          {
            fontWeight: 500,
            lineHeight: "1.625rem",
            letterSpacing: "0",
          },
        ],
        bodyXXL400: [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.625rem",
            letterSpacing: "0",
          },
        ],
      },
    },
  },
  plugins: [],
};
