'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/marketplace/SearchBar';
import CategoryGrid from '@/components/marketplace/CategoryGrid';
import AppCard from '@/components/marketplace/AppCard';

interface App {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  isVerified: boolean;
  rating: number;
  easyConnect: boolean;
  url: string;
  featured?: boolean;
  createdAt: string;
}

// Dummy apps data
const dummyApps: App[] = [
  {
    id: '1',
    name: 'CryptoSwap',
    description: 'Instant token swaps with the best rates',
    logo: '/placeholder-logo.svg',
    category: 'exchange',
    isVerified: true,
    rating: 4.5,
    easyConnect: true,
    url: '/apps/cryptoswap',
    featured: true,
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    name: 'NFT Marketplace',
    description: 'Buy and sell unique digital assets',
    logo: '/placeholder-logo.svg',
    category: 'marketplace',
    isVerified: true,
    rating: 4.8,
    easyConnect: false,
    url: '/apps/nft-marketplace',
    featured: true,
    createdAt: '2024-03-14'
  },
  // Add more dummy apps as needed
];

// Categories data with proper typing
interface Category {
  id: string;
  name: string;
  icon: 'games' | 'defi' | 'exchange' | 'trading' | 'marketplace' | 'social';
}

const categories: Category[] = [
  { id: 'games', name: 'Games', icon: 'games' },
  { id: 'defi', name: 'DeFi', icon: 'defi' },
  { id: 'exchange', name: 'Exchange', icon: 'exchange' },
  { id: 'trading', name: 'Trading', icon: 'trading' },
  { id: 'marketplace', name: 'Marketplace', icon: 'marketplace' },
  { id: 'social', name: 'Social', icon: 'social' },
];

type SortOption = 'rating' | 'featured' | 'newest';

export default function Web3ShoppingMallPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showHelp, setShowHelp] = useState(false);

  const filteredApps = useMemo(() => {
    let filtered = [...dummyApps];

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(app => app.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(app =>
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [dummyApps, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="relative mb-12 pb-6 border-b border-[#3A3A3A]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]">
                  Web3 Shopping Mall
                </h1>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-[#FFC107]"
                />
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover and connect with the best Web3 applications. From DeFi to Gaming, 
                find everything you need in one place.
              </p>
            </motion.div>
            <div className="absolute -bottom-px h-[2px] w-full bg-gradient-to-r from-[#FFC107] via-[#FFC107]/50 to-transparent" />
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for apps, categories, or features..."
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] text-gray-300 focus:outline-none focus:border-[#FFC107]"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Featured Apps Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Apps</h2>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#FFC107]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.filter(app => app.featured).map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
            <CategoryGrid
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </section>

          {/* All Apps Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {selectedCategory ? `${selectedCategory} Apps` : 'All Apps'}
              </h2>
              <span className="text-gray-400 bg-[#2A2A2A] px-4 py-2 rounded-full text-sm">
                {filteredApps.length} {filteredApps.length === 1 ? 'app' : 'apps'} found
              </span>
            </div>
            
            {filteredApps.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredApps.map(app => (
                  <motion.div
                    key={app.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <AppCard app={app} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-[#2A2A2A] rounded-lg">
                <p className="text-gray-400 mb-2">No apps found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setSortBy('featured');
                  }}
                  className="text-[#FFC107] hover:text-[#FFD700] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowHelp(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2A2A2A] rounded-xl p-6 max-w-lg w-full"
            >
              <h2 className="text-2xl font-bold mb-4">Welcome to Web3! 🚀</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>What is Web3?</strong><br />Web3 is the next generation of the internet, where users own their data and digital assets.</p>
                <p><strong>What is a dApp?</strong><br />A dApp (decentralized application) is an application that runs on a blockchain network.</p>
                <p><strong>How to get started?</strong><br />1. Connect your wallet<br />2. Browse our curated dApps<br />3. Look for the ⚡ Easy Connect badge for beginner-friendly apps</p>
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="mt-6 w-full px-4 py-2 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-medium hover:bg-[#FFD700] transition-colors"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 