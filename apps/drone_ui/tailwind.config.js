const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'ai-green': '#39FF14',
        'ai-dark': '#0A0A0A',
        'ai-gray': '#1A1A1A',
        'ai-light': '#2A2A2A',
        'ai-accent': '#4ADE80',
        'ai-text': '#E5E5E5',
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        aiTheme: {
          "primary": "#39FF14",
          "secondary": "#4ADE80",
          "accent": "#1FB2A5",
          "neutral": "#1A1A1A",
          "base-100": "#0A0A0A",
          "base-200": "#1A1A1A",
          "base-300": "#2A2A2A",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
