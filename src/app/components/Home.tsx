'use client';

import React from 'react';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import '@fontsource/inter'; // Consider replacing with your brand font
import { 
  MotionButton,
  MotionSection,
  MotionDiv,
  MotionNav,
  MotionH1,
  MotionH2,
  MotionP
} from '@/components/motion';

// Define your Green and Yellow/Gold color palette
const primaryGreenLight = '#A7D1EB';
const primaryGreenMedium = '#8FBC8F';
const accentGoldLight = '#FFD700';
const darkGreen = '#386641';
const neutralDark = '#1E1E1E';
const neutralMedium = '#2A2A2A';
const textSecondary = '#6B7280'; // Example secondary text color
const accentYellow = '#FFC107'; // Example accent yellow

export default function Home() {
  const [activeTab, setActiveTab] = useState('users');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white overflow-x-hidden">
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col"
      >
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Background elements */}
        </MotionDiv>
        <MotionNav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-4"
        >
          {/* Navigation content */}
        </MotionNav>
        
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mt-20"
        >
          {/* Title content */}
        </MotionH1>
        
        {/* ... Continue updating all motion components ... */}
      </MotionSection>
    </main>
  );
} 