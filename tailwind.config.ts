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
        primary: "#1C43FE",
        secondary: "#FE3F10",
        body: "#63667D",
        dark: "#000000",
        white: "#ffffff",
        black: "#131F34",
        paragraph: "#4B5563",
      },
      fontFamily: {
        main: ["Manrope", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

