'use client';

import React from 'react';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import '@fontsource/inter'; // Consider replacing with your brand font

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
    <main className={`min-h-screen bg-[${neutralDark}] text-white`}>
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className={`relative h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-[${primaryGreenMedium}] to-[${neutralDark}]`}
      >
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">FreoBus</Link>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <Link href="/" className={`hover:text-[${accentYellow}] transition-colors`}>Home</Link>
            <Link href="/discover" className={`hover:text-[${accentYellow}] transition-colors`}>Discover Hub</Link>
            <Link href="/wallet" className={`hover:text-[${accentYellow}] transition-colors`}>FreoWallet</Link>
          </motion.nav>
        </div>

        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[${primaryGreenLight}] to-[${accentGoldLight}]`}
          >
            Your Gateway to Web3
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl text-[${textSecondary}] mb-8`}
          >
            Discover, connect, and earn across dApps effortlessly with **FreoWallet**—your magic pass to Web3, eliminating wallet pop-ups and complex jargon.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/explore">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(${parseInt(accentYellow.slice(1, 3), 16)}, ${parseInt(accentYellow.slice(3, 5), 16)}, ${parseInt(accentYellow.slice(5, 7), 16)}, 0.5)` }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 bg-gradient-to-r from-[${primaryGreenLight}] to-[${accentYellow}] rounded-lg font-semibold transition-all duration-300`}
              >
                Explore dApps
              </motion.button>
            </Link>
            <Link href="/how-it-works">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(255, 255, 255, 0.3)` }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white rounded-lg font-semibold transition-all duration-300"
              >
                See How It Works
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Dedicated FreoWallet Section */}
      <section className="py-20 px-4 md:px-8 bg-white text-neutral-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold mb-8 text-[${darkGreen}]`}
          >
            Your Magic Pass to Web3: FreoWallet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-6"
          >
            Connect to a new world of decentralized applications with unparalleled ease using FreoWallet. Approve transactions once and explore freely without constant interruptions. Securely manage your digital assets in one intuitive place.
          </motion.p>
          <Link href="/wallet">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: accentYellow, color: neutralDark }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-[${primaryGreenLight}] text-[${darkGreen}]`}
            >
              Get FreoWallet
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔑",
              title: "One-Click Access with FreoWallet",
              description: "Connect your FreoWallet instantly—approve once, explore forever."
            },
            {
              icon: "✨",
              title: "Curated Web3 Apps",
              description: "Only the best dApps, handpicked for a seamless and trustworthy experience."
            },
            {
              icon: "🌱",
              title: "Intuitive Web3 Navigation",
              description: "Explore decentralized apps with an interface that feels familiar and easy to use."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: `0 10px 30px rgba(${parseInt(accentYellow.slice(1, 3), 16)}, ${parseInt(accentYellow.slice(3, 5), 16)}, ${parseInt(accentYellow.slice(5, 7), 16)}, 0.2)` }}
              className={`p-6 bg-[${neutralMedium}] rounded-xl shadow-lg transition-all duration-300`}
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
      <section className={`py-20 px-4 md:px-8 bg-[${neutralMedium}]`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[${primaryGreenLight}] to-[${accentYellow}]`}>
            See FreoWallet in Action
          </h2>
          <div className="aspect-video bg-[#1E1E1E] rounded-xl overflow-hidden relative group">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xl text-gray-400">Demo video coming soon</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-8 py-3 bg-[${accentYellow}] text-[${neutralDark}] rounded-lg font-semibold`}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
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
                onClick={() => handleTabChange(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 mx-2 transition-all duration-300 ${
                  activeTab === tab ? `border-b-2 border-[${accentYellow}]` : `hover:text-[${accentYellow}]`
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
                <h2 className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[${primaryGreenLight}] to-[${accentYellow}]`}>
                  Ready to Explore the Free Web?
                </h2>
                <Link href="/explore">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(${parseInt(accentYellow.slice(1, 3), 16)}, ${parseInt(accentYellow.slice(3, 5), 16)}, ${parseInt(accentYellow.slice(5, 7), 16)}, 0.5)` }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 bg-gradient-to-r from-[${primaryGreenLight}] to-[${accentYellow}] rounded-lg font-semibold transition-all duration-300`}
                  >
                    Explore dApps
                  </motion.button>
                </Link>
              </>
            )}
            {activeTab === 'investors' && (
              <>
                <h2 className={`text-3xl font-bold mb-4 text-[${accentGoldLight}]`}>
                  FreoBus: Building the Open Web for the Next 100M
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Discover our vision for a user-friendly Web3 and the opportunity to be part of its growth.
                </p>
                <Link href="/investors">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: accentYellow, color: neutralDark }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-[${primaryGreenLight}] text-[${darkGreen}]`}
                  >
                    Learn About Investing
                  </motion.button>
                </Link>
              </>
            )}
            {activeTab === 'developers' && (
              <>
                <h2 className={`text-3xl font-bold mb-4 text-[${primaryGreenLight}]`}>
                  Empower the Future: Build on FreoBus
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Join our ecosystem and help us create a seamless Web3 experience for everyone.
                </p>
                <Link href="/developers">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: accentYellow, color: neutralDark }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-[${primaryGreenLight}] text-[${darkGreen}]`}
                  >
                    Developer Portal
                  </motion.button>
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-[${neutralMedium}] py-12 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Users</h3>
            <ul className="space-y-2">
              <li><Link href="/wallet" className={`hover:text-[${accentYellow}] transition-colors`}>Get FreoWallet</Link></li>
              <li><Link href="/tutorials" className={`hover:text-[${accentYellow}] transition-colors`}>Tutorials</Link></li>
              <li><Link href="/support" className={`hover:text-[${accentYellow}] transition-colors`}>Support</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className={`hover:text-[${accentYellow}] transition-colors`}>Blog</Link></li>
              <li><Link href="/docs" className={`hover:text-[${accentYellow}] transition-colors`}>Documentation</Link></li>
              <li><Link href="/community" className={`hover:text-[${accentYellow}] transition-colors`}>Community</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className={`hover:text-[${accentYellow}] transition-colors`}>About</Link></li>
              <li><Link href="/careers" className={`hover:text-[${accentYellow}] transition-colors`}>Careers</Link></li>
              <li><Link href="/contact" className={`hover:text-[${accentYellow}] transition-colors`}>Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className={`hover:text-[${accentYellow}] transition-colors`}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={`hover:text-[${accentYellow}] transition-colors`}>Terms of Service</Link></li>
              <li><Link href="/cookies" className={`hover:text-[${accentYellow}] transition-colors`}>Cookie Policy</Link></li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FreoBus. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 