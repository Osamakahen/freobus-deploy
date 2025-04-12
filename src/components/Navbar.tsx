'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { MotionButton } from './motion';

interface NavbarProps {
  onFreoBusClick: () => void;
}

export default function Navbar({ onFreoBusClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="py-2" />
            </Link>
          </div>

          {/* Right side - Navigation Links and Connect Wallet */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onFreoBusClick}
              className="text-[#FFC107] hover:text-[#FFD700] transition-colors text-sm font-bold"
            >
              What's FreoBus
            </button>
            <Link
              href="/marketplace"
              className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm font-medium"
            >
              Web3 Shopping Mall
            </Link>
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-gradient-to-r from-[#FFC107] to-[#FFD700] text-[#1E1E1E] rounded-lg text-sm font-bold hover:from-[#FFD700] hover:to-[#FFE44D] transition-all"
            >
              Connect Your Wallet
            </MotionButton>
          </div>
        </div>
      </div>
    </nav>
  );
} 