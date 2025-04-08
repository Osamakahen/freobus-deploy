/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A7D1EB',
          medium: '#8FBC8F',
          dark: '#386641',
        },
        accent: {
          gold: '#FFD700',
        },
      },
    },
  },
  plugins: [],
} 