'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  rating?: number;
}

interface AppCardProps {
  app: App;
  onConnect: () => void;
  isConnected: boolean;
}

export default function AppCard({ app, onConnect, isConnected }: AppCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-freobus-neutral-dark rounded-xl p-6 shadow-freobus-green hover:shadow-freobus-gold transition-shadow duration-300"
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
      <h3 className="text-xl font-bold text-freobus-text-primary mb-2">{app.name}</h3>
      <p className="text-freobus-text-secondary mb-4">{app.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-freobus-green-medium/10 text-freobus-green-light rounded-full text-sm">
          {app.category}
        </span>
        {app.rating && (
          <span className="text-freobus-gold text-sm flex items-center">
            ⭐ {app.rating.toFixed(1)}
          </span>
        )}
      </div>
      <button
        onClick={onConnect}
        disabled={!isConnected}
        className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
          isConnected
            ? 'bg-gradient-freobus from-freobus-green-medium to-freobus-gold text-freobus-text-primary hover:opacity-90'
            : 'bg-freobus-neutral-medium text-freobus-text-secondary cursor-not-allowed'
        }`}
      >
        {isConnected ? 'Quick Access →' : 'Connect Wallet to Access'}
      </button>
    </motion.div>
  );
} 