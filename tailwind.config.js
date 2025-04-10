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
          greenLight: '#A7D1EB',
          greenMedium: '#8FBC8F',
          dark: '#386641',
        },
        accent: {
          goldLight: '#FFD700',
          yellow: '#FFD700',
        },
        neutral: {
          dark: '#1E1E1E',
          medium: '#2A2A2A',
          light: '#F4F4F4',
        },
        background: {
          light: '#2A2A2A',
          DEFAULT: '#1E1E1E',
          dark: '#141414',
        },
        freobus: {
          'green-light': '#A7D1EB',
          'green-medium': '#8FBC8F',
          'green-dark': '#556B2F',
          'yellow-light': '#FFFACD',
          'yellow-medium': '#FFC107',
          'gold': '#FFD700',
          'neutral-light': '#F4F4F4',
          'neutral-medium': '#D3D3D3',
          'neutral-dark': '#2A2A2A',
          'text-primary': '#FFFFFF',
          'text-secondary': '#6B7280',
          'text-accent': '#FFC107',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, var(--primary-green-medium-20) 0%, var(--neutral-dark) 100%)',
        'text-gradient': 'linear-gradient(135deg, var(--primary-green-light) 0%, var(--accent-gold-light) 100%)',
        'button-gradient': 'linear-gradient(135deg, var(--primary-green-light) 0%, var(--accent-yellow) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-freobus': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'freobus-green': '0 0 20px rgba(143, 188, 143, 0.5)',
        'freobus-gold': '0 0 20px rgba(255, 193, 7, 0.5)',
      },
    },
  },
  plugins: [],
} 