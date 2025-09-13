import React from 'react';
import { BlogCategory } from '../../types/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categorySlug: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategorySelect(null)}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-primary text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Articles
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.slug)}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
            selectedCategory === category.slug
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
          <span className="ml-2 text-sm opacity-75">({category.postCount})</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;