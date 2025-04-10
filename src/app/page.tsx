'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/inter';

interface NavItem {
  label: string;
  href: string;
}

interface ValueProp {
  emoji: string;
  title: string;
  description: string;
}

interface AudienceContent {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Discover Hub', href: '/discover' },
  { label: 'FreoWallet', href: '/wallet' },
];

const valueProps: ValueProp[] = [
  {
    emoji: '🔒',
    title: 'Secure by Design',
    description: 'End-to-end encryption and advanced security protocols protect your assets.',
  },
  {
    emoji: '⚡',
    title: 'Lightning Fast',
    description: 'Instant transactions and seamless interactions with Web3 applications.',
  },
  {
    emoji: '🌐',
    title: 'Universal Access',
    description: 'One wallet for all your Web3 needs, no more switching between apps.',
  },
];

const audienceContent: Record<string, AudienceContent> = {
  users: {
    title: 'Ready to Explore the Free Web?',
    description: 'Start your Web3 journey with FreoWallet - no technical knowledge required.',
    buttonText: 'Explore dApps',
    buttonHref: '/explore',
  },
  investors: {
    title: 'FreoBus: Building the Open Web for the Next 100M',
    description: 'Join us in revolutionizing how people interact with Web3 technology.',
    buttonText: 'Learn About Investing',
    buttonHref: '/investors',
  },
  developers: {
    title: 'Empower the Future: Build on FreoBus',
    description: 'Create powerful dApps with our developer-friendly tools and SDKs.',
    buttonText: 'Developer Portal',
    buttonHref: '/developers',
  },
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export default function Page() {
  const [activeAudience, setActiveAudience] = useState<keyof typeof audienceContent>('users');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Navigation */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-[#FFC107]">
              FreoBus
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/marketplace" className="hover:text-[#FFC107] transition-colors">
                Web3 Shopping Mall
              </Link>
              <Link href="/learn/decentralization" className="hover:text-[#FFC107] transition-colors">
                What's Decentralization?
              </Link>
              <Link href="/connect-wallet" className="hover:text-[#FFC107] transition-colors">
                Connect your Wallet
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex items-center justify-center px-4 md:px-8 bg-[#8FBC8F] bg-gradient-to-b from-[#8FBC8F]/90 to-[#1E1E1E]"
      >
        <div className="text-center max-w-4xl">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
          >
            Unlock the World of Web3 with <span className="text-[#FFC107]">FreoBus</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            <span className="font-bold">FreoWallet</span> Magically Empowering you to Decentralization
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href="/marketplace">
              <motion.button
                {...scaleOnHover}
                className="px-8 py-4 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-colors"
              >
                Web3 Shopping Mall
              </motion.button>
            </Link>
            <Link href="/wallet/create">
              <motion.button
                {...scaleOnHover}
                className="px-8 py-4 border-2 border-[#FFC107] text-[#FFC107] rounded-lg font-bold text-lg hover:bg-[#FFC107] hover:text-[#1E1E1E] transition-all"
              >
                Get Your FreoWallet
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Props Section */}
      <section className="py-24 bg-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-[#1E1E1E]"
              >
                <motion.div
                  className="text-6xl mb-4"
                  {...scaleOnHover}
                >
                  {prop.emoji}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-gray-300">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-[#1E1E1E]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
          >
            See FreoWallet in Action
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-video max-w-4xl mx-auto bg-[#2A2A2A] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl text-gray-400">Demo video coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Tabs Section */}
      <section className="py-24 bg-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            {Object.keys(audienceContent).map((audience) => (
              <button
                key={audience}
                onClick={() => setActiveAudience(audience as keyof typeof audienceContent)}
                className={`px-6 py-2 border-b-2 ${
                  activeAudience === audience
                    ? 'border-[#FFC107] text-[#FFC107]'
                    : 'border-transparent hover:text-[#FFC107]'
                } transition-colors`}
              >
                {audience.charAt(0).toUpperCase() + audience.slice(1)}
              </button>
            ))}
          </div>
          <motion.div
            key={activeAudience}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{audienceContent[activeAudience].title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{audienceContent[activeAudience].description}</p>
            <Link href={audienceContent[activeAudience].buttonHref}>
              <motion.button
                {...scaleOnHover}
                className="px-8 py-4 bg-gradient-to-r from-[#A7D1EB] to-[#FFD700] text-[#1E1E1E] rounded-lg font-bold text-lg"
              >
                {audienceContent[activeAudience].buttonText}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {['Users', 'Resources', 'Company', 'Legal'].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-4">{section}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-[#FFC107] transition-colors"
                      >
                        {section} Link {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} FreoBus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 