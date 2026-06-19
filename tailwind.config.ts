import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        navy: "#0B0B0B",
        surface: "#0B0B0B",
        card: "#111111",
        "card-soft": "#171717",
        gold: "#C89B3C",
        "gold-soft": "#D4AF37",
        bronze: "#8A6426",
        silver: "#C8C8C8",
        mist: "#F5F5F5",
        steel: "#A8A8A8",
        graphite: "#171717",
        concrete: "#737373",
      },
      boxShadow: {
        premium: "0 26px 90px rgba(0, 0, 0, 0.48)",
        "gold-soft": "0 0 0 1px rgba(200, 155, 60, 0.28), 0 22px 64px rgba(0, 0, 0, 0.36)",
      },
    },
  },
  plugins: [],
};

export default config;
