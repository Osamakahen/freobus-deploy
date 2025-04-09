'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  const primaryGreenLight = '#A7D1EB';
  const primaryGreenMedium = '#8FBC8F';
  const accentGoldLight = '#FFD700';
  const darkGreen = '#386641'; // A darker shade for the wordmark
  const neutralLight = '#F4F4F4';
  const freoBusFont = 'Inter, sans-serif'; // Using Inter font from Next.js

  return (
    <div
      className={`flex items-center ${className}`}
      style={{
        // Consider adding responsive styling here or in your CSS
      }}
    >
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        style={{ marginRight: '16px' }}
        // Example subtle animation:
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        {/* Central Gold Area */}
        <motion.radialGradient
          id="goldGradient"
          cx="40"
          cy="40"
          r="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={accentGoldLight} />
          <stop offset="100%" stopColor="rgba(255, 215, 0, 0.5)" /> {/* Fading out gold */}
        </motion.radialGradient>
        <motion.circle
          cx="40"
          cy="40"
          r="30"
          fill="url(#goldGradient)"
          // Example subtle animation for gold:
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Emanating Green Pathways */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const radians = angle * (Math.PI / 180);
          const startX = 40 + 20 * Math.cos(radians);
          const startY = 40 + 20 * Math.sin(radians);
          const endX = 40 + 35 * Math.cos(radians);
          const endY = 40 + 35 * Math.sin(radians);
          const controlX1 = 40 + 25 * Math.cos(radians + 0.2);
          const controlY1 = 40 + 25 * Math.sin(radians + 0.2);
          const controlX2 = 40 + 30 * Math.cos(radians - 0.2);
          const controlY2 = 40 + 30 * Math.sin(radians - 0.2);

          return (
            <motion.path
              key={angle}
              d={`M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`}
              stroke={primaryGreenMedium}
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              // Example subtle animation on hover:
              whileHover={{ strokeWidth: 4 }}
              transition={{ duration: 0.2 }}
            />
          );
        })}

        {/* More subtle, thinner pathways */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => {
          const radians = angle * (Math.PI / 180);
          const startX = 40 + 15 * Math.cos(radians);
          const startY = 40 + 15 * Math.sin(radians);
          const endX = 40 + 38 * Math.cos(radians);
          const endY = 40 + 38 * Math.sin(radians);
          return (
            <motion.line
              key={angle}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={primaryGreenLight}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>
      <motion.h1
        style={{
          fontFamily: freoBusFont,
          fontSize: '2em',
          color: darkGreen,
          fontWeight: 'bold',
        }}
        // Example subtle animation on hover for text:
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        FreoBus
      </motion.h1>
    </div>
  );
};

export default Logo; 