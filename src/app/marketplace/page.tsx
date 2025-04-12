'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/marketplace/SearchBar';
import CategoryGrid from '@/components/marketplace/CategoryGrid';
import AppCard from '@/components/marketplace/AppCard';
import { Skeleton } from '@/components/ui/skeleton';
import Navbar from '@/components/Navbar';

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
  {
    id: '3',
    name: 'DeFi Yield',
    description: 'Earn passive income through yield farming',
    logo: '/placeholder-logo.svg',
    category: 'defi',
    isVerified: true,
    rating: 4.6,
    easyConnect: true,
    url: '/apps/defi-yield',
    featured: false,
    createdAt: '2024-03-13'
  },
  {
    id: '4',
    name: 'Crypto Quest',
    description: 'Play-to-earn RPG adventure game',
    logo: '/placeholder-logo.svg',
    category: 'games',
    isVerified: false,
    rating: 4.2,
    easyConnect: true,
    url: '/apps/crypto-quest',
    featured: false,
    createdAt: '2024-03-12'
  },
  {
    id: '5',
    name: 'Trade Pro',
    description: 'Advanced trading platform with real-time analytics',
    logo: '/placeholder-logo.svg',
    category: 'trading',
    isVerified: true,
    rating: 4.7,
    easyConnect: false,
    url: '/apps/trade-pro',
    featured: false,
    createdAt: '2024-03-11'
  },
  {
    id: '6',
    name: 'Web3 Social',
    description: 'Decentralized social networking platform',
    logo: '/placeholder-logo.svg',
    category: 'social',
    isVerified: true,
    rating: 4.4,
    easyConnect: true,
    url: '/apps/web3-social',
    featured: false,
    createdAt: '2024-03-10'
  },
  {
    id: '7',
    name: 'GameFi Hub',
    description: 'Discover and play blockchain games',
    logo: '/placeholder-logo.svg',
    category: 'games',
    isVerified: true,
    rating: 4.3,
    easyConnect: true,
    url: '/apps/gamefi-hub',
    featured: false,
    createdAt: '2024-03-09'
  },
  {
    id: '8',
    name: 'DeFi Lend',
    description: 'Borrow and lend crypto assets',
    logo: '/placeholder-logo.svg',
    category: 'defi',
    isVerified: true,
    rating: 4.5,
    easyConnect: false,
    url: '/apps/defi-lend',
    featured: false,
    createdAt: '2024-03-08'
  }
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

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredApps = useMemo(() => {
    let filtered = [...dummyApps];

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(app => 
        app.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply search filter with improved relevance scoring
    if (debouncedSearch) {
      const searchTerms = debouncedSearch.toLowerCase().split(' ');
      filtered = filtered.filter(app => {
        const nameMatch = searchTerms.every(term =>
          app.name.toLowerCase().includes(term)
        );
        const descMatch = searchTerms.every(term =>
          app.description.toLowerCase().includes(term)
        );
        const categoryMatch = searchTerms.every(term =>
          app.category.toLowerCase().includes(term)
        );
        return nameMatch || descMatch || categoryMatch;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'featured':
        filtered.sort((a, b) => {
          if (a.featured === b.featured) {
            return b.rating - a.rating;
          }
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        });
        break;
    }

    return filtered;
  }, [dummyApps, selectedCategory, debouncedSearch, sortBy]);

  // Featured apps for the carousel
  const featuredApps = useMemo(() => {
    return dummyApps.filter(app => app.featured);
  }, [dummyApps]);

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white pb-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold">Web3 Shopping Mall</h1>
            <div className="flex items-center space-x-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onHelp={() => setShowHelp(true)}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-[#2A2A2A] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Featured Apps Carousel */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-[200px] rounded-xl bg-[#2A2A2A]" />
              ))}
            </div>
          ) : featuredApps.length > 0 && (
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4">Featured Apps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredApps.map(app => (
                  <AppCard key={app.id} app={app} featured />
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-[100px] rounded-xl bg-[#2A2A2A]" />
              ))}
            </div>
          ) : (
            <CategoryGrid
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          )}

          {/* App Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-[200px] rounded-xl bg-[#2A2A2A]" />
              ))}
            </div>
          ) : filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <svg
                className="w-16 h-16 text-gray-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-400">No apps found</h3>
              <p className="mt-2 text-gray-500 max-w-md">
                {selectedCategory
                  ? `No apps found in the "${selectedCategory}" category${
                      searchQuery ? ` matching "${searchQuery}"` : ''
                    }`
                  : searchQuery
                  ? `No apps found matching "${searchQuery}"`
                  : 'No apps available at the moment'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSortBy('featured');
                }}
                className="mt-4 px-4 py-2 bg-[#2A2A2A] text-[#FFC107] rounded-lg hover:bg-[#3A3A3A] transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="help-modal-title"
            >
              <h2 id="help-modal-title" className="text-2xl font-bold mb-4">Welcome to Web3! 🚀</h2>
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
    </main>
  );
} 