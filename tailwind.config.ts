import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        display: ["Archivo Narrow", ...defaultTheme.fontFamily.sans],
        boldonse: ["Boldonse", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          cyan: "#00FFFF",
          magenta: "#FF00FF",
          green: "#ACFF2F",
        },
      },
      boxShadow: {
        crt: "inset 0 0 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.02)",
      },
    },
  },
  plugins: [],
} satisfies Config
