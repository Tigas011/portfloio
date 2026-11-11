import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        graphite: {
          950: "#09090B", // Fundo primário (Canvas)
          900: "#121215", // Superfície de cards
          850: "#18181B", // Superfície elevada / Hover / Terminal
          800: "#27272A", // Elementos secundários
        },
        accent: {
          professional: "#10B981", // Esmeralda: Experiência profissional comprovada
          project: "#3B82F6",      // Azul técnico: Projetos próprios e experimentais
          academic: "#8B5CF6",     // Violeta sóbrio: Projetos acadêmicos
          study: "#F59E0B",        // Âmbar: Estudos e evolução técnica
        },
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.07)",
        hover: "rgba(255, 255, 255, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
