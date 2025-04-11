'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/marketplace/SearchBar';
import CategoryGrid from '@/components/marketplace/CategoryGrid';
import AppCard from '@/components/marketplace/AppCard';

// Categories data
const categories = [
  { id: 1, name: 'All', icon: '🌐', description: 'All applications' },
  { id: 2, name: 'DeFi', icon: '💰', description: 'Decentralized Finance apps' },
  { id: 3, name: 'Gaming', icon: '🎮', description: 'Web3 games and gaming platforms' },
  { id: 4, name: 'Social', icon: '👥', description: 'Social networking apps' },
  { id: 5, name: 'NFT', icon: '🎨', description: 'NFT marketplaces and tools' },
  { id: 6, name: 'Tools', icon: '🛠️', description: 'Utility and development tools' },
];

// Expanded dummy apps data
const dummyApps = [
  {
    id: 1,
    name: 'DeFi Swap',
    description: 'Decentralized exchange with the best rates and lowest fees',
    logo: '/placeholder-logo.svg',
    category: 'DeFi',
    isVerified: true,
    rating: 4.8,
    easyConnect: true,
    url: '/apps/defi-swap',
    featured: true
  },
  {
    id: 2,
    name: 'NFT Marketplace',
    description: 'Buy, sell, and trade unique digital collectibles',
    logo: '/placeholder-logo.svg',
    category: 'NFT',
    isVerified: true,
    rating: 4.5,
    easyConnect: true,
    url: '/apps/nft-marketplace',
    featured: true
  },
  {
    id: 3,
    name: 'Crypto Quest',
    description: 'Play-to-earn RPG with blockchain integration',
    logo: '/placeholder-logo.svg',
    category: 'Gaming',
    isVerified: false,
    rating: 4.2,
    easyConnect: true,
    url: '/apps/crypto-quest',
    featured: false
  },
  // Add more dummy apps here...
  {
    id: 4,
    name: 'Web3 Social',
    description: 'Decentralized social networking platform',
    logo: '/placeholder-logo.svg',
    category: 'Social',
    isVerified: true,
    rating: 4.6,
    easyConnect: true,
    url: '/apps/web3-social',
    featured: true
  },
  {
    id: 5,
    name: 'Smart Contract Builder',
    description: 'Visual tool for creating and deploying smart contracts',
    logo: '/placeholder-logo.svg',
    category: 'Tools',
    isVerified: true,
    rating: 4.7,
    easyConnect: false,
    url: '/apps/contract-builder',
    featured: false
  },
  // Add 15 more dummy apps with varied categories and properties
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 6,
    name: `App ${i + 6}`,
    description: `Description for App ${i + 6}`,
    logo: '/placeholder-logo.svg',
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].name,
    isVerified: Math.random() > 0.5,
    rating: Math.floor(Math.random() * 2) + 3, // Random rating between 3-5
    easyConnect: Math.random() > 0.3,
    url: `/apps/app-${i + 6}`,
    featured: Math.random() > 0.8
  }))
];

export default function Web3ShoppingMallPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter apps based on search term and selected category
  const filteredApps = useMemo(() => {
    return dummyApps.filter(app => {
      const matchesSearch = searchTerm === '' || 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
        selectedCategory === 'All' || 
        app.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Get featured apps
  const featuredApps = useMemo(() => {
    return dummyApps.filter(app => app.featured);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Web3 Shopping Mall</h1>
          <p className="text-gray-400">Discover and connect with the best Web3 applications</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search for apps..."
          />
        </div>

        {/* Featured Apps Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Apps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Explore Categories</h2>
          <CategoryGrid
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        {/* All Apps Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              {selectedCategory ? `${selectedCategory} Apps` : 'All Apps'}
            </h2>
            <span className="text-gray-400">
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
            <div className="text-center py-12">
              <p className="text-gray-400">No apps found matching your criteria</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 