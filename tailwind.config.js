// /** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      gray: {
        50: "#F5F7FA",
        100: "#E9EAF0",
        200: "#CED1D9",
        300: "#B7BAC7",
        400: "#A1A5B3",
        500: "#8C94A3",
        600: "#6E7485",
        700: "#4E5566",
        800: "#363B47",
        900: "#1D2026",
      },
      primary: {
        100: "#FFEEE8",
        200: "#FFDDD1",
        300: "#FFA386",
        400: "#FF855E",
        500: "#FF6636",
        600: "#CC522B",
        700: "#993D20",
        800: "#662916",
        900: "#33140B",
      },
      secondary: {
        100: "#EBEBFF",
        200: "#CDCBFE",
        300: "#9A95FE",
        400: "#7872FD",
        500: "#564FFD",
        600: "#453FCA",
        700: "#342F98",
        800: "#222065",
        900: "#111033",
      },
      success: {
        100: "#E1F7E3",
        200: "#C3E5C6",
        300: "#7BD785",
        400: "#4FCA5C",
        500: "#23BD33",
        600: "#1C9729",
        700: "#15711F",
        800: "#0E4C14",
        900: "#07260A",
      },
      warning: {
        100: "#FFF2E5",
        200: "#FED1A5",
        300: "#FEBB79",
        400: "#FDA44C",
        500: "#FD8E1F",
        600: "#CC7319",
        700: "#985613",
        800: "#65390C",
        900: "#331D06",
      },
      error: {
        100: "#FFF0F0",
        200: "#F4C8C8",
        300: "#EE8F8F",
        400: "#E96969",
        500: "#E34444",
        600: "#B63636",
        700: "#882929",
        800: "#5B1B1B",
        900: "#2D0E0E",
      },
    },
    // ...defaultTheme,
    extend: {
      boxShadow: {
        successToast: "0 4px 16px 0px rgba(7, 38, 10, 0.12)",
        errorToast: "0 4px 16px 0px rgba(45, 14, 14, 0.12)",
        warningToast: "0 4px 16px 0px rgba(51, 39, 6, 0.12)",
        infoToast: "0 4px 16px 0px rgba(29, 32, 38, 0.12)",
      },
      width: {
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        95: "95%",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
        bodyXXXL: [
          "1.5rem",
          {
            fontWeight: 400,
            lineHeight: "2rem",
            letterSpacing: "0",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
