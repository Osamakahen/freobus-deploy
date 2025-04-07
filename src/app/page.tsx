'use client';

import React from 'react';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import '@fontsource/inter';

export default function Home() {
  const [activeTab, setActiveTab] = useState('users');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

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
          {[
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
          ].map((card, index) => (
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
            See FreoWallet Auto-Connect
          </h2>
          <div className="aspect-video bg-[#1E1E1E] rounded-xl overflow-hidden relative group">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/demo-poster.jpg"
            >
              <source src="/freowallet-demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-3 bg-[#6F3AFF] rounded-lg font-semibold"
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

      {/* Footer */}
      <footer className="bg-[#2A2A2A] py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
      </footer>
    </main>
  );
} 