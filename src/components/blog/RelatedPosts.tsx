import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, currentPostId }) => {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
              
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-2">
                {post.category}
              </span>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors duration-300">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              
              <Link
                to={`/blog/${post.slug}`}
                className="text-primary text-sm font-medium hover:text-primary-light transition-colors duration-300"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;