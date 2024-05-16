const plugin = require("tailwindcss/plugin");
const defaults = require("tailwindcss/defaultConfig");

const akselColors = {
  blue: {
    50: "rgba(230, 240, 255, 1)",
    100: "rgba(204, 225, 255, 1)",
    200: "rgba(153, 195, 255, 1)",
    300: "rgba(102, 165, 244, 1)",
    400: "rgba(51, 134, 224, 1)",
    500: "rgba(0, 103, 197, 1)",
    600: "rgba(0, 86, 180, 1)",
    700: "rgba(0, 69, 156, 1)",
    800: "rgba(0, 52, 125, 1)",
    900: "rgba(0, 34, 82, 1)",
  },
  deepblue: {
    50: "rgba(230, 241, 248, 1)",
    100: "rgba(204, 226, 240, 1)",
    200: "rgba(153, 196, 221, 1)",
    300: "rgba(102, 163, 196, 1)",
    400: "rgba(51, 128, 165, 1)",
    500: "rgba(0, 91, 130, 1)",
    600: "rgba(0, 80, 119, 1)",
    700: "rgba(0, 67, 103, 1)",
    800: "rgba(0, 52, 83, 1)",
    900: "rgba(0, 36, 58, 1)",
  },
  gray: {
    50: "rgba(247, 247, 247, 1)",
    100: "rgba(241, 241, 241, 1)",
    200: "rgba(229, 229, 229, 1)",
    300: "rgba(207, 207, 207, 1)",
    400: "rgba(176, 176, 176, 1)",
    500: "rgba(143, 143, 143, 1)",
    600: "rgba(112, 112, 112, 1)",
    700: "rgba(89, 89, 89, 1)",
    800: "rgba(64, 64, 64, 1)",
    900: "rgba(38, 38, 38, 1)",
  },
  green: {
    50: "rgba(243, 252, 245, 1)",
    100: "rgba(204, 241, 214, 1)",
    200: "rgba(153, 222, 173, 1)",
    300: "rgba(102, 199, 134, 1)",
    400: "rgba(51, 170, 95, 1)",
    500: "rgba(6, 137, 58, 1)",
    600: "rgba(0, 124, 46, 1)",
    700: "rgba(0, 106, 35, 1)",
    800: "rgba(0, 85, 25, 1)",
    900: "rgba(0, 59, 15, 1)",
  },
  lightblue: {
    50: "rgba(235, 252, 255, 1)",
    100: "rgba(216, 249, 255, 1)",
    200: "rgba(181, 241, 255, 1)",
    300: "rgba(151, 230, 255, 1)",
    400: "rgba(124, 218, 248, 1)",
    500: "rgba(102, 203, 236, 1)",
    600: "rgba(76, 173, 205, 1)",
    700: "rgba(54, 141, 168, 1)",
    800: "rgba(35, 107, 125, 1)",
    900: "rgba(19, 72, 82, 1)",
  },
  limegreen: {
    50: "rgba(253, 255, 230, 1)",
    100: "rgba(249, 252, 204, 1)",
    200: "rgba(236, 243, 153, 1)",
    300: "rgba(217, 227, 102, 1)",
    400: "rgba(193, 203, 51, 1)",
    500: "rgba(162, 173, 0, 1)",
    600: "rgba(147, 158, 0, 1)",
    700: "rgba(127, 137, 0, 1)",
    800: "rgba(102, 110, 0, 1)",
    900: "rgba(71, 78, 0, 1)",
  },
  "nav-red": "rgba(195, 0, 0, 1)",
  orange: {
    50: "rgba(255, 249, 240, 1)",
    100: "rgba(255, 236, 204, 1)",
    200: "rgba(255, 215, 153, 1)",
    300: "rgba(255, 193, 102, 1)",
    400: "rgba(255, 170, 51, 1)",
    500: "rgba(255, 145, 0, 1)",
    600: "rgba(212, 123, 0, 1)",
    700: "rgba(168, 100, 0, 1)",
    800: "rgba(125, 76, 0, 1)",
    900: "rgba(82, 51, 0, 1)",
  },
  purple: {
    50: "rgba(239, 236, 244, 1)",
    100: "rgba(224, 216, 233, 1)",
    200: "rgba(192, 178, 210, 1)",
    300: "rgba(161, 141, 187, 1)",
    400: "rgba(130, 105, 162, 1)",
    500: "rgba(99, 70, 137, 1)",
    600: "rgba(82, 56, 116, 1)",
    700: "rgba(65, 43, 93, 1)",
    800: "rgba(48, 31, 70, 1)",
    900: "rgba(31, 20, 47, 1)",
  },
  red: {
    50: "rgba(253, 232, 230, 1)",
    100: "rgba(249, 210, 204, 1)",
    200: "rgba(239, 168, 157, 1)",
    300: "rgba(225, 128, 113, 1)",
    400: "rgba(208, 92, 74, 1)",
    500: "rgba(186, 58, 38, 1)",
    600: "rgba(163, 42, 23, 1)",
    700: "rgba(136, 29, 12, 1)",
    800: "rgba(106, 18, 4, 1)",
    900: "rgba(72, 9, 0, 1)",
  },
  transparent: "rgba(255, 255, 255, 0)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(0, 0, 0, 1)",
};

module.exports = {
  content: ["./src/**/*.{njk,md,json,js,svg}"],
  theme: {
    screens: {
      xs: "512px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1440px",
      fine: { raw: "(pointer: fine)" },
    },
    fontFamily: {
      sans: ['"Source Sans 3"', "Arial", "sans-serif"],
      serif: ['"Source Serif 4"', "serif"],
      recursive: ['"Recursive"', "sans-serif"],
      system: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "'Helvetica Neue'",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "'Liberation Mono'",
        "'Courier New'",
        "monospace",
      ],
    },
    fontSize: {
      "2xs": "var(--fluid-12-14)",
      xs: "var(--fluid-14-16)",
      sm: "var(--fluid-16-18)",
      base: "var(--fluid-18-20)",
      lg: "var(--fluid-22-24)",
      xl: "var(--fluid-24-28)",
      "2xl": "var(--fluid-32-36)",
      "3xl": "var(--fluid-36-48)",
    },
    extend: {
      animation: {
        openDrawer: "openDrawer 200ms cubic-bezier(0.3, 0.6, 0.25, 1) forwards",
        dropdown: "dropdown 200ms cubic-bezier(0.3, 0.6, 0.25, 1) forwards",
        enter: "enter 300ms cubic-bezier(0.3, 0.6, 0.25, 1.45) forwards",
        "fade-in": "fade-in 400ms cubic-bezier(0.3, 0.6, 0.25, 1) forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        border: "0 -1px 0 inset rgb(128 128 128 / 0.19)",
        menuActive: "0 -3px 0 inset rgb(0 103 197)",
        menuHover: "0 -3px 0 inset rgb(0 0 0 / 0.19)",
      },
      colors: {
        ...akselColors,
        current: "currentColor",
        transparent: "rgb(255 255 255 / 0%)",
        white: "rgb(255 255 255)",
        black: "rgb(0 0 0)",
      },
      flexBasis: {
        side: "min(100%, 36rem)",
        main: "min(100%, 48rem)",
      },
      flexShrink: {
        1: "1",
        5: "5",
      },
      fontWeight: {
        bold: "675",
      },
      fontSize: {
        squishy: "clamp(2rem, 10vw + 10%, 8rem)",
      },
      keyframes: {
        dropdown: {
          "0%": {
            transform: "translateY(-1rem)",
          },
          "0%, 10%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        openDrawer: {
          from: {
            transform: "translate3d(50%, 0, 0)",
            opacity: "0",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        enter: {
          to: { transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": {
          "0%, 20%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      maxWidth: {
        base: "65.25rem",
        prose: "68ch",
        wide: "75rem",
      },
      ringWidth: {
        12: "12px",
      },
      spacing: {
        edge: "clamp(0.75rem, -1.25rem + 10vi, 10rem)",
        page: "clamp(1rem, -5rem + 15vi, 10rem)",
      },
      textUnderlineOffset: {
        3: "3px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
