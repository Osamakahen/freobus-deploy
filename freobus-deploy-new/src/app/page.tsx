'use client';

import React from 'react';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import '@fontsource/inter';
import WalletSection from '../components/WalletSection';

export default function Page() {
  // State for managing active tab in the audience section with strict typing
  const [activeTab, setActiveTab] = useState<'users' | 'investors' | 'developers'>('users');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Handler for tab changes with proper type safety
  const handleTabChange = (tab: 'users' | 'investors' | 'developers') => {
    setActiveTab(tab);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cards = [
    {
      icon: "🔌",
      title: "One-Click Access",
      description: "FreoWallet connects you instantly—approve once, explore forever."
    },
    {
      icon: "🏆",
      title: "Curated Web3 Apps",
      description: "Only the best dApps, handpicked for you."
    },
    {
      icon: "🌐",
      title: "Web2 Familiarity",
      description: "Feels like your favorite app store."
    }
  ];

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-purple-900 to-gray-900"
      >
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">FreoBus</Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <Link href="/" className="hover:text-[#6F3AFF] transition-colors">Home</Link>
            <Link href="/discover" className="hover:text-[#6F3AFF] transition-colors">Discover Hub</Link>
            <Link href="/wallet" className="hover:text-[#6F3AFF] transition-colors">FreoWallet</Link>
          </motion.nav>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-20 left-0 w-full bg-[#2A2A2A] md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="hover:text-[#6F3AFF] transition-colors">Home</Link>
            <Link href="/discover" className="hover:text-[#6F3AFF] transition-colors">Discover Hub</Link>
            <Link href="/wallet" className="hover:text-[#6F3AFF] transition-colors">FreoWallet</Link>
          </div>
        </motion.div>
        
        <div className="text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]"
          >
            Your Gateway to Web3
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-purple-200 mb-8"
          >
            Discover, connect, and earn across dApps—no wallet pop-ups, no jargon.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/explore">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF] rounded-lg font-semibold transition-all duration-300"
              >
                Explore dApps
              </motion.button>
            </Link>
            <Link href="/how-it-works">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white rounded-lg font-semibold transition-all duration-300"
              >
                See How It Works
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Proposition Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(111, 58, 255, 0.2)" }}
              className="p-6 bg-[#2A2A2A] rounded-xl shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4 md:px-8 bg-[#2A2A2A]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]">
            Connect Your Wallet
          </h2>
          <WalletSection />
        </motion.div>
      </section>

      {/* Audience-Specific CTAs */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            {['users', 'investors', 'developers'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab as 'users' | 'investors' | 'developers')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 mx-2 transition-all duration-300 ${
                  activeTab === tab ? 'border-b-2 border-[#6F3AFF]' : 'hover:text-[#6F3AFF]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {activeTab === 'users' && (
              <>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]">
                  Ready to Explore?
                </h2>
                <Link href="/explore">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
                  >
                    Explore dApps
                  </motion.button>
                </Link>
              </>
            )}
            {activeTab === 'investors' && (
              <>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]">
                  FreoBus is onboarding the next 100M to Web3
                </h2>
                <Link href="/pitch-deck">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
                  >
                    View Pitch Deck
                  </motion.button>
                </Link>
              </>
            )}
            {activeTab === 'developers' && (
              <>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]">
                  Build With Us
                </h2>
                <Link href="/submit-app">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
                  >
                    Submit Your App
                  </motion.button>
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#2A2A2A] py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold mb-4">Users</h3>
              <ul className="space-y-2">
                <li><Link href="/wallet" className="hover:text-[#6F3AFF] transition-colors">Get FreoWallet</Link></li>
                <li><Link href="/tutorials" className="hover:text-[#6F3AFF] transition-colors">Tutorials</Link></li>
                <li><Link href="/support" className="hover:text-[#6F3AFF] transition-colors">Support</Link></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold mb-4">Investors</h3>
              <ul className="space-y-2">
                <li><Link href="/team" className="hover:text-[#6F3AFF] transition-colors">Team</Link></li>
                <li><Link href="/roadmap" className="hover:text-[#6F3AFF] transition-colors">Roadmap</Link></li>
                <li><Link href="/contact" className="hover:text-[#6F3AFF] transition-colors">Contact</Link></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><Link href="/api-docs" className="hover:text-[#6F3AFF] transition-colors">API Docs</Link></li>
                <li><Link href="/submit-app" className="hover:text-[#6F3AFF] transition-colors">Submit App</Link></li>
                <li><Link href="/github" className="hover:text-[#6F3AFF] transition-colors">GitHub</Link></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-bold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#6F3AFF] transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-4 py-2 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
              <div className="mt-4 flex items-center justify-center">
                <img src="/certik-badge.svg" alt="Audited by CertiK" className="h-8" />
              </div>
            </motion.div>
          </div>
          
          {/* Social Links */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com/freobus" target="_blank" rel="noopener noreferrer" className="hover:text-[#6F3AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/freobus" target="_blank" rel="noopener noreferrer" className="hover:text-[#6F3AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://discord.gg/freobus" target="_blank" rel="noopener noreferrer" className="hover:text-[#6F3AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
            <div className="text-center mt-4 text-sm text-gray-400">
              © 2024 FreoBus. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 