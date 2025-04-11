'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-center ${className}`}
    >
      <Link href="/" className="flex items-center space-x-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
            fill="#FFC107"
          />
          <path
            d="M16 6c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
            fill="#1E1E1E"
          />
          <path
            d="M16 10c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"
            fill="#FFC107"
          />
        </svg>
        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFC107] to-[#FFD700] tracking-tight">
        FreoBus
        </span>
      </Link>
    </motion.div>
  );
} 