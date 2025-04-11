import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AppCardProps {
  app: {
    id: number;
    name: string;
    description: string;
    logo: string;
    category: string;
    isVerified: boolean;
    rating: number;
    easyConnect: boolean;
    url: string;
    featured?: boolean;
  };
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative bg-[#2A2A2A] rounded-lg p-4 border ${
        app.featured
          ? 'border-[#FFC107]'
          : 'border-[#3A3A3A] hover:border-[#FFC107]/50'
      } transition-colors`}
    >
      {app.featured && (
        <div className="absolute -top-2 -right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FFC107] text-[#1E1E1E]">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start space-x-4">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#1E1E1E] flex-shrink-0">
          <Image
            src={app.logo}
            alt={`${app.name} logo`}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-white truncate">
              {app.name}
            </h3>
            {app.isVerified && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFC107]/10 text-[#FFC107]"
              >
                <svg
                  className="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </motion.span>
            )}
          </div>

          <p className="mt-1 text-sm text-gray-400 line-clamp-2">
            {app.description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(app.rating)
                      ? 'text-[#FFC107]'
                      : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-400">
                ({Math.floor(Math.random() * 100)})
              </span>
            </div>

            {app.easyConnect && (
              <span className="inline-flex items-center text-xs text-[#4CAF50]">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Easy Connect
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link href={app.url}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-semibold hover:bg-[#FFD700] transition-colors"
          >
            Go to App
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AppCard; 