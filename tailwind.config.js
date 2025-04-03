module.exports = {
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
        blinkFast: "blink 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
