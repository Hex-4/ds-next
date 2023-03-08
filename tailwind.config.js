/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#ffd11a",
        tertiary: "#22d3ee",
        accent: "#0284c7",
        box: "#1e293b",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontFamily: {
        'sans': ['Inter','inter', ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fbbf24",
        
"secondary": "#22d3ee",
        
"accent": "#0284c7",
        
"neutral": "#1c1917",
        
"base-100": "#1e293b",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  important: true,
}
