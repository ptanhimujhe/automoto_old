import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/blog/BlogCard';
import BlogSearch from '../components/blog/BlogSearch';
import CategoryFilter from '../components/blog/CategoryFilter';
import { blogPosts, blogCategories } from '../data/blogPosts';

const BlogHomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Automoto Blog - Car Care Tips & UAE Driving Guides</title>
        <meta 
          name="description" 
          content="Expert car care tips, garage guides, and driving insights for UAE car owners. Stay informed with Automoto's comprehensive automotive blog." 
        />
        <meta name="keywords" content="UAE car care, garage guides, auto services, driving tips, car maintenance, Dubai automotive" />
        <link rel="canonical" href="https://automoto360.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Automoto Blog - Car Care Tips & UAE Driving Guides" />
        <meta property="og:description" content="Expert car care tips, garage guides, and driving insights for UAE car owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automoto360.com/blog" />
        <meta property="og:image" content="https://automoto360.com/og-blog-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automoto Blog - Car Care Tips & UAE Driving Guides" />
        <meta name="twitter:description" content="Expert car care tips, garage guides, and driving insights for UAE car owners." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Automoto Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides, tips, and insights for UAE car owners. Stay informed about car care, 
              garage selection, and driving in the Emirates.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <BlogSearch 
              onSearch={setSearchQuery}
              placeholder="Search for car care tips, garage guides..."
            />
          </div>

          {/* Category Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <CategoryFilter
              categories={blogCategories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Results Info */}
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-gray-600">
              {searchQuery || selectedCategory ? (
                <>
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory && ` in ${blogCategories.find(cat => cat.slug === selectedCategory)?.name}`}
                </>
              ) : (
                `${filteredPosts.length} articles available`
              )}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors duration-300"
                  >
                    View All Articles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomePage;