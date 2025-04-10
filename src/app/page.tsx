'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { colors, animations, gradients } from '@/constants/theme';

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

export default function Page() {
  const [activeAudience, setActiveAudience] = useState<keyof typeof audienceContent>('users');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen bg-neutral-dark text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen" style={{ background: gradients.heroBackground }}>
        <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div {...animations.fadeInLeft}>
              <Link href="/" className="text-2xl font-bold">
                FreoBus
              </Link>
            </motion.div>
            <motion.div {...animations.fadeInRight} className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-accent-yellow transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </nav>

        <motion.div
          className="container mx-auto px-6 pt-32 text-center"
          style={{ opacity, scale }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{ background: gradients.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            {...animations.fadeIn}
          >
            Your Gateway to Web3
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            {...animations.fadeIn}
          >
            <strong>FreoWallet</strong> is your magic pass to the decentralized web.
            No more wallet pop-ups, no more jargon - just seamless access to Web3.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            {...animations.fadeIn}
          >
            <Link
              href="/explore"
              className="px-8 py-4 rounded-lg font-semibold text-white"
              style={{ background: gradients.buttonGradient }}
            >
              Explore dApps
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-colors"
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Value Props Section */}
      <section className="py-24 bg-neutral-medium">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                className="p-8 rounded-xl bg-neutral-dark"
                {...animations.fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  {...animations.scaleOnHover}
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
      <section className="py-24 bg-neutral-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ background: gradients.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            {...animations.fadeIn}
          >
            See FreoWallet in Action
          </motion.h2>
          <motion.div
            className="relative aspect-video max-w-4xl mx-auto bg-[#1E1E1E] rounded-xl overflow-hidden"
            {...animations.fadeIn}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl text-gray-400">Demo video coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Tabs Section */}
      <section className="py-24 bg-neutral-medium">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            {Object.keys(audienceContent).map((audience) => (
              <button
                key={audience}
                onClick={() => setActiveAudience(audience as keyof typeof audienceContent)}
                className={`px-6 py-2 border-b-2 ${
                  activeAudience === audience
                    ? 'border-accent-yellow text-accent-yellow'
                    : 'border-transparent hover:text-accent-yellow'
                } transition-colors`}
              >
                {audience.charAt(0).toUpperCase() + audience.slice(1)}
              </button>
            ))}
          </div>
          <motion.div
            key={activeAudience}
            className="text-center"
            {...animations.fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{audienceContent[activeAudience].title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{audienceContent[activeAudience].description}</p>
            <Link
              href={audienceContent[activeAudience].buttonHref}
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white"
              style={{ background: gradients.buttonGradient }}
            >
              {audienceContent[activeAudience].buttonText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-medium">
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
                        className="text-gray-400 hover:text-accent-yellow transition-colors"
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