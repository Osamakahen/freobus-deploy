import React from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
}

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onSelectCategory(category.name === 'All' ? null : category.name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex flex-col items-center justify-center p-4 rounded-lg border ${
            selectedCategory === category.name
              ? 'border-[#FFC107] bg-[#FFC107]/10'
              : 'border-[#3A3A3A] bg-[#2A2A2A] hover:border-[#FFC107]/50'
          } transition-all duration-200`}
        >
          <span className="text-2xl mb-2" role="img" aria-label={category.name}>
            {category.icon}
          </span>
          <span className="font-medium text-sm text-center">
            {category.name}
          </span>
          {selectedCategory === category.name && (
            <motion.div
              layoutId="categoryIndicator"
              className="absolute inset-0 border-2 border-[#FFC107] rounded-lg"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryGrid; 