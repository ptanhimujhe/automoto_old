import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogCTA from '../components/blog/BlogCTA';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
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

  // Convert markdown-style content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return `<h1 key="${index}" class="text-3xl font-bold text-gray-900 mb-6">${paragraph.slice(2)}</h1>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl font-semibold text-gray-900 mb-4 mt-8">${paragraph.slice(3)}</h2>`;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').map(item => 
            item.startsWith('- ') ? `<li class="mb-2">${item.slice(2)}</li>` : item
          ).join('');
          return `<ul key="${index}" class="list-disc ml-6 text-gray-600 mb-6">${items}</ul>`;
        }
        return `<p key="${index}" class="text-gray-600 leading-relaxed mb-6">${paragraph}</p>`;
      })
      .join('');
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Automoto Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://automoto360.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} - Automoto Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://automoto360.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - Automoto Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Automoto",
              "logo": {
                "@type": "ImageObject",
                "url": "https://automoto360.com/automoto_logo_crop.png"
              }
            },
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://automoto360.com/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <article className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <BlogCTA />

            {/* Related Posts */}
            <RelatedPosts posts={blogPosts} currentPostId={post.id} />
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;