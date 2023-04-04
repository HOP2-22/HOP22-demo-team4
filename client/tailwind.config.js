module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1830px",
    },
    extend: {
      spacing: {
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        0.1: "10%",
        0.2: "20%",
        0.3: "30%",
        0.4: "40%",
        0.5: "50%",
        0.6: "60%",
        0.7: "70%",
        0.8: "80%",
        0.9: "90%",
      },
      colors: {
        main: {},
      },
      rotate: {
        0: "0deg",
        30: "30deg",
        60: "60deg",
        120: "120deg",
        150: "150deg",
      },
      transitionDuration: {
        50: "50ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        900: "900ms",
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      scale: {
        180: "180",
        200: "200",
        250: "250",
      },
    },
  },
  plugins: [],
};
