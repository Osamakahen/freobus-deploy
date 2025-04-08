'use client';

import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  return (
    <div className="space-y-2">
      <motion.button
        className={`w-full px-4 py-3 rounded-lg text-left flex items-center space-x-3 transition-colors ${
          activeCategory === 'all'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        onClick={() => onCategoryChange('all')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>🌐</span>
        <span>All Apps</span>
      </motion.button>

      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={`w-full px-4 py-3 rounded-lg text-left flex items-center space-x-3 transition-colors ${
            activeCategory === category.id
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
} 