import { text } from "stream/consumers";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#8E54E9", // Secondary brand color
        lightBlue: "#f0f4ff", // Light background blue used in sections
        darkBlue: "#16213E", // Darker accent color for headers or footers
        accent: "#A9CCE3", // Accent color for smaller elements
        grayBg: "#F5F7FB", // Light gray background for body
        textMain: "#252E48", // Main text color
        textHeader: "#545F7E", // Header text color
        textSubtle: "#666",
      },
      backgroundImage: {
        "gradient-primary":
          "radial-gradient(81.41% 207.84% at 17.81% 36.38%, #EFF8FF 0%, #B6DBFD 45.08%, #9ACEFF 61.89%, #6272FF 100%)", // Hero Section Gradient
        "gradient-secondary":
          "linear-gradient(135.78deg, #FFFFFF 33.22%, rgba(255, 255, 255, 0.24) 98.34%)",
      },
    },
  },
  plugins: []
};
export default config;
