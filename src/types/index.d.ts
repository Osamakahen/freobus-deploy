import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

declare module 'framer-motion' {
  export interface MotionStyle {
    opacity?: number | string | any
    scale?: number | string | any
  }
}

declare module 'next/link' {
  export interface LinkProps extends ComponentProps<'a'> {
    href: string
    children: React.ReactNode
  }
}

export {} 