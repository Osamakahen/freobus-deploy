import { Theme } from '../types';

export const lightTheme: Theme = {
  primary: '#A7D1EB',
  secondary: '#8FBC8F',
  accent: '#FFD700',
  background: '#FFFFFF',
  text: '#333333'
};

export const darkTheme: Theme = {
  primary: '#4A90E2',
  secondary: '#50C878',
  accent: '#FFD700',
  background: '#1A1A1A',
  text: '#FFFFFF'
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem'
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Fira Code', 'monospace']
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  }
}; 