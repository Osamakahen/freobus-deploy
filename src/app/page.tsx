'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Feature, CTAItem } from '@/types';

const colors = {
  primary: '#6F3AFF',
  secondary: '#4F46E5',
  accent: '#00FF00',
  dark: '#1F2937',
  light: '#F3F4F6',
  hover: '#7d4fff',
  background: {
    dark: '#1E1E1E',
    light: '#2A2A2A'
  },
  text: {
    primary: '#111827',
    secondary: '#9CA3AF'
  }
} as const;

export default function Page() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features: Feature[] = [
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

  const ctaItems: CTAItem[] = [
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
    <main className="min-h-screen" style={{ backgroundColor: colors.background.light }}>
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center p-4"
        initial={{ opacity: 1, scale: 1 }}
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
            className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Try Demo
          </Link>
          <Link 
            href="/docs" 
            className="px-6 py-3 text-lg font-semibold text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
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
                key={`feature-${index}`}
                className="p-6 rounded-xl"
                style={{ backgroundColor: colors.background.dark }}
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

      <section className="py-20 px-4" style={{ backgroundColor: colors.background.dark }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ctaItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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