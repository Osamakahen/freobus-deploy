'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const colors = {
  primary: '#6F3AFF',
  hover: '#7d4fff',
  background: {
    dark: '#1E1E1E',
    light: '#2A2A2A'
  },
  text: {
    primary: '#111827',
    secondary: '#9CA3AF'
  }
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features = [
    {
      title: 'Secure Transactions',
      description: 'End-to-end encrypted transactions ensure your money is always safe.',
      icon: '🔒'
    },
    {
      title: 'Instant Transfers',
      description: 'Send and receive money instantly, anywhere in the world.',
      icon: '⚡'
    },
    {
      title: 'Smart Analytics',
      description: 'Track your spending patterns and get insights to save more.',
      icon: '📊'
    }
  ];

  const ctaItems = [
    {
      title: 'For Investors',
      description: 'Join FreoBus in revolutionizing digital payments.',
      href: '/investors'
    },
    {
      title: 'For Users',
      description: 'Experience the future of digital payments with FreoWallet.',
      href: '/signup'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center p-4"
        style={{ opacity, scale }}
      >
        <div className="mb-8 relative w-32 h-32">
          <Image
            src="/logo.svg"
            alt="FreoBus Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: colors.text.primary }}>
          FreoWallet
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl" style={{ color: colors.text.secondary }}>
          The next generation digital wallet for secure, instant, and smart transactions.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/demo" 
            className={`px-8 py-4 text-white rounded-lg font-semibold transition-all`}
            style={{ backgroundColor: colors.primary, ':hover': { backgroundColor: colors.hover } }}
          >
            Try Demo
          </Link>
          <Link 
            href="/docs" 
            className="px-8 py-4 border-2 rounded-lg font-semibold transition-all"
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary,
              ':hover': { backgroundColor: `${colors.primary}10` }
            }}
          >
            Documentation
          </Link>
        </div>
      </motion.section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colors.text.primary }}>
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl"
                style={{ backgroundColor: colors.background.light }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.text.secondary }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: colors.background.light }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ctaItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="p-8 rounded-xl transition-all"
                style={{ 
                  backgroundColor: colors.background.dark,
                  ':hover': { backgroundColor: '#252525' }
                }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                <p style={{ color: colors.text.secondary }}>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4" style={{ backgroundColor: colors.background.dark }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: colors.text.secondary }}>
            © {new Date().getFullYear()} FreoBus. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 