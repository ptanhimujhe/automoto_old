import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ 
  onSearch, 
  placeholder = "Search articles..." 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
};

export default BlogSearch;