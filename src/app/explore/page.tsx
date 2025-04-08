'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useWeb3 } from '@/context/Web3Context';
import debounce from 'lodash/debounce';
import { ErrorBoundary } from './components/ErrorBoundary';
import CategoryFilters from './components/CategoryFilters';

// Dynamically import heavy components
const CategoryFiltersComponent = dynamic(() => import('./components/CategoryFilters'), {
  loading: () => (
    <div className="h-10 w-full bg-gray-800 animate-pulse rounded-lg" />
  ),
  ssr: false
});

// Category data structure
const categories = [
  { id: 'shop', name: 'Shop', icon: '🛍️' },
  { id: 'earn', name: 'Earn', icon: '💰' },
  { id: 'play', name: 'Play', icon: '🎮' },
  { id: 'collect', name: 'Collect', icon: '🎨' }
];

// App interface
interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  rating?: number;
}

// API Response interface
interface ApiResponse {
  dApps: {
    id: string;
    name: string;
    description: string;
    category: string;
    avgRating: number;
  }[];
}

// Session interface
interface Session {
  address: string;
  chainId: number;
  timestamp: number;
}

// Sample app data for development and fallback
const sampleApps: App[] = [
  {
    id: '1',
    name: 'CryptoShop',
    description: 'One-stop shop for all your crypto needs. Buy, sell, and trade with ease.',
    category: 'ecommerce',
    rating: 4.8
  },
  {
    id: '2',
    name: 'YieldFarm',
    description: 'Earn passive income through yield farming and liquidity provision.',
    category: 'defi',
    rating: 4.5
  },
  {
    id: '3',
    name: 'CryptoQuest',
    description: 'Play-to-earn RPG game with NFT rewards and daily quests.',
    category: 'gaming',
    rating: 4.7
  },
  {
    id: '4',
    name: 'NFT Gallery',
    description: 'Curated marketplace for unique digital art and collectibles.',
    category: 'nfts',
    rating: 4.6
  },
  {
    id: '5',
    name: 'DeFi Dashboard',
    description: 'Track your DeFi investments and manage your portfolio.',
    category: 'defi',
    rating: 4.9
  },
  {
    id: '6',
    name: 'GameFi Arena',
    description: 'Competitive gaming platform with crypto rewards and tournaments.',
    category: 'gaming',
    rating: 4.4
  }
];

// API response transformation
const transformResponse = (data: ApiResponse): App[] => {
  return data.dApps.map((dapp) => ({
    id: dapp.id,
    name: dapp.name,
    description: dapp.description,
    category: dapp.category,
    rating: dapp.avgRating
  }));
};

// App connection function with session management
const connectToApp = async (appId: string, address: string, chainId: number) => {
  try {
    // Create session data
    const session: Session = {
      address,
      chainId,
      timestamp: Date.now()
    };

    // Store session in localStorage
    localStorage.setItem('freo-session', JSON.stringify(session));

    // TODO: Implement actual app connection logic
    console.log(`Connecting to app ${appId} with session:`, session);
  } catch (error) {
    console.error('Failed to connect to app:', error);
  }
};

// AppCard Component with proper mobile tap targets
const AppCard = ({ 
  app, 
  onConnect, 
  isConnected 
}: { 
  app: App; 
  onConnect: () => void;
  isConnected: boolean;
}) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="rounded-xl bg-gray-800 p-4 shadow-lg"
  >
    <div className="relative w-full h-40 mb-4">
      <Image
        src={`/apps/${app.id}.webp`}
        alt={app.name}
        fill
        className="rounded-lg object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <h3 className="font-bold">{app.name}</h3>
    <p className="text-sm text-gray-300">{app.description}</p>
    <div className="flex items-center justify-between mt-2">
      <span className="inline-block px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">
        {categories.find(c => c.id === app.category)?.name}
      </span>
      {app.rating && (
        <span className="text-yellow-400 text-sm">
          ⭐ {app.rating.toFixed(1)}
        </span>
      )}
    </div>
    <button 
      onClick={onConnect}
      disabled={!isConnected}
      className={`mt-3 w-full py-3 rounded-lg min-h-[48px] ${
        isConnected 
          ? 'bg-purple-600 hover:bg-purple-700' 
          : 'bg-gray-600 cursor-not-allowed'
      }`}
    >
      {isConnected ? 'Quick Access →' : 'Connect Wallet to Access'}
    </button>
  </motion.div>
);

export default function ExplorePage() {
  const { address, chainId, connect } = useWeb3();
  const [activeCategory, setActiveCategory] = useState('all');
  const [apps, setApps] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Auto-reconnect on revisit
  useEffect(() => {
    const session = localStorage.getItem('freo-session');
    if (session) {
      try {
        const parsedSession: Session = JSON.parse(session);
        // Check if session is still valid (e.g., less than 24 hours old)
        if (Date.now() - parsedSession.timestamp < 24 * 60 * 60 * 1000) {
          connect();
        } else {
          // Clear expired session
          localStorage.removeItem('freo-session');
        }
      } catch (error) {
        console.error('Failed to parse session:', error);
        localStorage.removeItem('freo-session');
      }
    }
  }, [connect]);

  // Fetch apps based on category
  useEffect(() => {
    const fetchApps = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // In development, use sample data
        if (process.env.NODE_ENV === 'development') {
          setApps(sampleApps);
          setIsLoading(false);
          return;
        }

        const response = await fetch(`/api/apps${activeCategory !== 'all' ? `?category=${activeCategory}` : ''}`);
        if (!response.ok) {
          throw new Error('Failed to fetch apps');
        }
        
        const data: ApiResponse = await response.json();
        const transformedApps = transformResponse(data);
        setApps(transformedApps);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        // Fallback to sample data in case of error
        setApps(sampleApps);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApps();
  }, [activeCategory]);

  // Debounced search handler with proper cleanup
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, 300),
    []
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Memoized filtered apps for better performance
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        app.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [apps, activeCategory, searchTerm]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-freobus-neutral-dark">
        {/* Header Section with new gradient */}
        <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-freobus-green-light to-freobus-neutral-light">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-freobus from-freobus-green-light to-freobus-gold bg-clip-text text-transparent"
            >
              Discover a New World of Apps, Effortlessly
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-freobus-text-secondary mb-8"
            >
              Explore exciting new applications without the usual Web3 hassles – powered by the intuitive FreoWallet.
            </motion.p>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64">
              <CategoryFilters
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </aside>

            <div className="flex-1">
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search apps..."
                    className="w-full px-4 py-3 bg-freobus-neutral-dark rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-freobus-green-medium text-freobus-text-primary"
                    onChange={(e) => debouncedSearch(e.target.value)}
                    aria-label="Search apps"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-freobus-text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-freobus-neutral-dark rounded-xl p-6 animate-pulse"
                    >
                      <div className="w-16 h-16 bg-freobus-neutral-medium rounded-lg mb-4" />
                      <div className="h-6 bg-freobus-neutral-medium rounded w-3/4 mb-2" />
                      <div className="h-4 bg-freobus-neutral-medium rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Error loading apps
                  </h3>
                  <p className="text-freobus-text-secondary">{error.message}</p>
                </div>
              ) : filteredApps.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-freobus-text-primary mb-2">
                    No apps found
                  </h3>
                  <p className="text-freobus-text-secondary">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredApps.map((app) => (
                    <AppCard 
                      key={app.id} 
                      app={app} 
                      onConnect={() => address && chainId && connectToApp(app.id, address, chainId)}
                      isConnected={!!address}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
} 