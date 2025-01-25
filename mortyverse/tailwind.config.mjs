/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portalGreen: "#00ffbf",
        skyBlue: "#00d4ff",
        darkPurple: "#2a0535",
        vividPink: "#ff0080",
        electricBlue: "#0096ff",
        darkGray: "#1c1c1e",
        neonGreen: "#39ff14",
      },
    },
  },
  plugins: [],
};