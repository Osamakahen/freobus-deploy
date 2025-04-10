import { ComponentProps } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
      ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
      li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    }
  }
}

declare module 'framer-motion' {
  interface MotionProps extends HTMLMotionProps<'section'> {
    style?: {
      opacity?: number;
      scale?: number;
      backgroundColor?: string;
      color?: string;
    };
  }

  interface MotionStyle {
    opacity?: number | string | any;
    scale?: number | string | any;
    backgroundColor?: string;
    color?: string;
  }
}

declare module 'next/link' {
  interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    legacyBehavior?: boolean;
    key?: string | number;
  }
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface CTAItem {
  title: string;
  description: string;
  href: string;
}

export {} 