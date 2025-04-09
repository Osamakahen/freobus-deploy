import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    }
  }
}

declare module 'framer-motion' {
  interface MotionStyle {
    opacity?: number | string | any
    scale?: number | string | any
  }
}

declare module 'next/link' {
  interface LinkProps extends ComponentProps<'a'> {
    href: string
    children: React.ReactNode
  }
}

export {} 