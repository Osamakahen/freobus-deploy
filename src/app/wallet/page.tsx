'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import Logo from '@/components/Logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const carouselItems = [
  {
    id: 1,
    title: 'Experience the Magic of FreoWallet',
    icon: '✨',
    description: 'Seamless Web3 experience at your fingertips'
  },
  {
    id: 2,
    title: 'Auto-Connect',
    icon: '🔗',
    description: 'One-click connection to all your favorite dApps'
  },
  {
    id: 3,
    title: 'Omni-Chain',
    icon: '⛓️',
    description: 'Access multiple blockchains with a single wallet'
  },
  {
    id: 4,
    title: 'Invisible Security',
    icon: '🛡️',
    description: 'Enterprise-grade security without the complexity'
  }
];

const trustBadges = [
  { name: 'Certik', logo: '/certik-logo.svg', alt: 'Certik Audited' },
  { name: 'Polygon', logo: '/polygon-logo.svg', alt: 'Polygon Network' },
  { name: 'Arbitrum', logo: '/arbitrum-logo.svg', alt: 'Arbitrum Network' }
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const carouselVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const logoVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function WalletPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - Promotional Banner */}
      <div className="relative h-screen bg-gradient-to-b from-[#8FBC8F] to-[#1E1E1E]">
        {/* Navigation */}
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="fixed w-full top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <motion.div
                  variants={logoVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center"
                >
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8FBC8F] to-[#FFC107] tracking-wider">
                    FreoWallet
                  </span>
                </motion.div>
              </div>
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors"
                  aria-label="Open menu"
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-[#1E1E1E] z-50 p-4"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-[#FFC107]"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div onClick={() => setIsMenuOpen(false)}>
                  <Link 
                    href="/learn" 
                    className="block text-gray-300 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <Link 
                    href="/faq" 
                    className="block text-gray-300 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    FAQ
                  </Link>
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <Link 
                    href="/" 
                    className="block text-gray-300 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Banner Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] font-montserrat"
          >
            Your Trusted and Easy-Going Web3 Mate
          </motion.h1>

          {/* Carousel */}
          <div className="relative w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.div 
                  className="text-6xl mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {carouselItems[currentSlide].icon}
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {carouselItems[currentSlide].title}
                </motion.h2>
                <motion.p 
                  className="text-gray-200 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {carouselItems[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#FFC107]' : 'bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Sign Up/Login */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 font-montserrat"
            >
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8FBC8F] to-[#FFC107]">FreoWallet</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
            >
              Experience the future of digital finance with FreoWallet. Your secure, user-friendly gateway to the decentralized web.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-[#1E1E1E] font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get FreoWallet Now
              </motion.button>
              <motion.button 
                className="px-6 py-3 border border-[#A3E4D7] text-[#1E1E1E] rounded-lg hover:bg-[#A3E4D7]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign in with Password
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 mt-12"
            >
              {trustBadges.map((badge) => (
                <motion.div 
                  key={badge.name} 
                  className="flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={badge.logo}
                    alt={badge.alt}
                    width={100}
                    height={40}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 