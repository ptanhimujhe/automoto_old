import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts, blogCategories } from '../data/blogPosts';

const BlogCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryInfo = blogCategories.find(cat => cat.slug === category);
  
  const filteredPosts = useMemo(() => {
    if (!category) return [];
    
    return blogPosts
      .filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === category)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [category]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{categoryInfo.name} Articles - Automoto Blog</title>
        <meta name="description" content={`${categoryInfo.description}. Browse ${categoryInfo.postCount} articles in the ${categoryInfo.name} category.`} />
        <link rel="canonical" href={`https://automoto360.com/blog/category/${category}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${categoryInfo.name} Articles - Automoto Blog`} />
        <meta property="og:description" content={categoryInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://automoto360.com/blog/category/${category}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Category Header */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {categoryInfo.description}
            </p>
            <p className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category
            </p>
          </div>

          {/* Posts Grid */}
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
                    No articles yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're working on adding more content to this category. Check back soon!
                  </p>
                  <Link
                    to="/blog"
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors duration-300"
                  >
                    Browse All Articles
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategoryPage;