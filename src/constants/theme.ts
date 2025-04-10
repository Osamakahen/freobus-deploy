export const colors = {
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
  text: {
    primary: '#FFFFFF',
    secondary: '#9CA3AF',
    dark: '#111827',
  },
} as const;

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  scaleOnHover: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.2 },
  },
} as const;

export const gradients = {
  heroBackground: `linear-gradient(180deg, ${colors.primary.greenMedium}20 0%, ${colors.neutral.dark} 100%)`,
  textGradient: `linear-gradient(135deg, ${colors.primary.greenLight} 0%, ${colors.accent.goldLight} 100%)`,
  buttonGradient: `linear-gradient(135deg, ${colors.primary.greenLight} 0%, ${colors.accent.yellow} 100%)`,
} as const; 