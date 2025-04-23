'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import Logo from '@/components/Logo';

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
  { name: 'Certik', logo: '/certik-logo.png', alt: 'Certik Audited' },
  { name: 'Polygon', logo: '/polygon-logo.png', alt: 'Polygon Network' },
  { name: 'Arbitrum', logo: '/arbitrum-logo.png', alt: 'Arbitrum Network' }
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WalletPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo className="py-2" />
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm font-medium"
              >
                Back to Home
              </Link>
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#8FBC8F] bg-gradient-to-b from-[#98FB98]/90 to-[#1E1E1E]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
            >
              Welcome to FreoWallet
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            >
              Your gateway to the decentralized web. Secure, simple, and ready for the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-3 bg-[#FFC107] text-[#1E1E1E] font-medium rounded-lg hover:bg-[#FFD54F] transition-colors">
                Create New Wallet
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border border-[#FFC107] text-[#FFC107] font-medium rounded-lg hover:bg-[#FFC107]/10 transition-colors">
                Import Wallet
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 font-serif">
              Welcome to FreoWallet
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              Experience the future of digital finance with FreoWallet. Your secure, user-friendly gateway to the decentralized web.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="px-6 py-3 bg-[#FFC107] text-[#1E1E1E] font-medium rounded-lg hover:bg-[#FFD54F] transition-colors">
                Sign in with Password
              </button>
              <button className="px-6 py-3 border border-[#FFC107] text-[#FFC107] font-medium rounded-lg hover:bg-[#FFC107]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 