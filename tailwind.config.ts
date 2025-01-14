import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#286AFD',
        primary: '#FEAB4A',
        secondary: '#FF5453',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      padding: {
        'banner-clamp': "clamp(16px, 5vw, 100px)",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
