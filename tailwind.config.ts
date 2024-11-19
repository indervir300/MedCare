import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1a202c',
          text: '#e2e8f0',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        'medical-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',      },
        'rotate-in': 'rotateIn 0.5s ease-in-out',
    },
    keyframes: {
      rotateIn: {
        '0%': { transform: 'rotate(0deg) scale(0.5)', opacity: '0' },
        '100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
      },
    },
  },
  plugins: [],
} satisfies Config;
