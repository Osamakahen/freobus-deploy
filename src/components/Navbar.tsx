'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import { MotionButton } from './motion';

interface NavbarProps {
  onFreoBusClick?: () => void;
}

export default function Navbar({ onFreoBusClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isMarketplace = pathname === '/marketplace';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Back Button for marketplace */}
          <div className="flex items-center space-x-4">
            {isMarketplace && (
              <MotionButton
                onClick={() => router.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-colors"
                aria-label="Go back"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </MotionButton>
            )}
            <Link href="/">
              <Logo className="py-2" />
            </Link>
          </div>

          {/* Right side - Navigation Links and Connect Wallet (only for main page) */}
          {!isMarketplace && (
            <div className="flex items-center space-x-6">
              {/* What's FreoBus - Made distinct */}
              <MotionButton
                onClick={onFreoBusClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 text-sm font-bold text-[#1E1E1E] bg-gradient-to-r from-[#FFC107] via-[#FFD700] to-[#FFE44D] rounded-full shadow-lg hover:shadow-[#FFC107]/50 transition-all duration-300 overflow-hidden border-2 border-[#FFD700]"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">✨</span>
                  What's FreoBus
                </span>
              </MotionButton>

              {/* Web3 Shopping Mall */}
              <Link
                href="/marketplace"
                className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm font-medium px-4 py-2"
              >
                Web3 Shopping Mall
              </Link>

              {/* Connect Wallet */}
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