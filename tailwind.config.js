/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#002d41",
          "200": "rgba(53, 91, 73, 0.94)",
        },
        gray: {
          "100": "#081d26",
          "200": "rgba(255, 255, 255, 0.24)",
          "300": "rgba(0, 0, 0, 0.11)",
          "400": "rgba(8, 29, 38, 0.52)",
          "500": "rgba(255, 255, 255, 0.8)",
        },
        white: "#fff",
        black: "#000",
        steelblue: "#206888",
        dodgerblue: "#4183f3",
        yellowgreen: "#a6c307",
        darkorange: {
          "100": "#f8821f",
          "200": "#f38020",
        },
        deepskyblue: "rgba(50, 168, 214, 0.15)",
        sandybrown: "#f7c26f",
        cadetblue: "rgba(93, 130, 107, 0.01)",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        oswald: "Oswald",
        genos: "Genos",
        inherit: "inherit",
        elsie: "Elsie",
        petrona: "Petrona",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        smi: "13px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      mini: "0.938rem",
      xl: "1.25rem",
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      smi: "0.813rem",
      "31xl": "3.125rem",
      "5xs": "0.5rem",
      "81xl": "6.25rem",
      inherit: "inherit",
    },
    screens: {
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
