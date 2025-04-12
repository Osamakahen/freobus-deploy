'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { MotionButton } from './motion';

interface NavbarProps {
  onFreoBusClick?: () => void;
}

export default function Navbar({ onFreoBusClick }: NavbarProps) {
  const pathname = usePathname();
  const isMarketplace = pathname === '/marketplace';

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
          {!isMarketplace && (
            <div className="flex items-center space-x-6">
              <MotionButton
                onClick={onFreoBusClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2 text-sm font-bold text-[#1E1E1E] bg-gradient-to-r from-[#FFC107] to-[#FFD700] rounded-full shadow-lg hover:shadow-[#FFC107]/50 hover:from-[#FFD700] hover:to-[#FFE44D] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">What's FreoBus</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </MotionButton>
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
          )}
        </div>
      </div>
    </nav>
  );
} 