import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea", // Bright Purple primary
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764",
          },
          beige: {
            50: "#fdfbf7", // ultra soft warm cream background
            100: "#f8f3eb",
            200: "#f2e8dc",
            300: "#e5d5c0",
            400: "#d4bc9e",
            500: "#c09f7a",
            600: "#a8815a",
            700: "#896443",
            800: "#6f5038",
            900: "#5a412f",
          },
          maroon: {
            50: "#fdf2f4",
            100: "#fce7eb",
            500: "#9e1c3f",
            600: "#8b1634",
            700: "#720d27",
            800: "#59071c",
            900: "#400413",
          }
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft-purple': '0 10px 30px -5px rgba(147, 51, 234, 0.15)',
        'soft-beige': '0 10px 30px -5px rgba(181, 148, 116, 0.15)',
        'luxury': '0 20px 40px -15px rgba(59, 7, 100, 0.08), 0 0 1px 1px rgba(147, 51, 234, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
