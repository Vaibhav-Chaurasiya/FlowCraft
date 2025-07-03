/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-grid": "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
      backgroundSize: {
        "dotted-grid": "20px 20px",
      },
      animation: {
        "fade-in-down": "fade-in-down 0.6s ease-out both",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "typewriter": "typewriter 4s steps(30) 1s 1 normal both",
        "blink-caret": "blink-caret 0.75s step-end infinite",
        "glow": "glow 2.4s ease-in-out infinite", // ✅ Added glow animation
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#4f46e5" },
        },
        // ✅ Added glow keyframes
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(147, 51, 234, 0.6), 0 0 20px rgba(232, 121, 249, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(232, 121, 249, 0.8), 0 0 30px rgba(147, 51, 234, 0.6)",
          },
        },
      },
      colors: {
        gradientStart: "#facc15",
        gradientMid: "#f97316",
        gradientEnd: "#ec4899",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
