/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-grid": "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
      backgroundSize: {
        "dotted-grid": "20px 20px",
      },
      animation: {
        "fade-in-down": "fade-in-down 0.3s ease-out both",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        // Optional custom colors for gradient branding (used in FlowCraft)
        gradientStart: "#facc15", // yellow-400
        gradientMid: "#f97316",   // orange-500
        gradientEnd: "#ec4899",   // pink-500
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1f2937", // text-gray-800
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
