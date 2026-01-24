module.exports = {
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel-decorative)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8b0000", // Rojo oscuro
        },
        secondary: {
          DEFAULT: "#cca21c", // Dorado oscuro
        },
        "cinzel-silver": "#C0C0C0",
      },
    },
  },
};
