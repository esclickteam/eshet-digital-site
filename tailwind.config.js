/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      bg: "#0a0a0a",   // רקע כהה
      gold: "#d4af37", // זהב יוקרתי
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Playfair Display", "serif"],
    },
    boxShadow: {
      glow: "0 10px 30px rgba(0,0,0,.35)",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-out forwards",
    },
  },
},

  plugins: [],
}
