import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import EmailInquiryForm from '../components/ui/EmailInquiryForm';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Trekking in the Everest Region',
      excerpt: 'Everything you need to know about preparing for and experiencing the world\'s most famous trekking destination.',
      author: 'Ale Sherpa',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Trekking',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Nepal\'s Hidden Cultural Gems: Beyond the Tourist Trail',
      excerpt: 'Discover authentic cultural experiences in lesser-known villages and communities throughout Nepal.',
      author: 'Priya Tamang',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg'
    },
    {
      id: 3,
      title: 'Sustainable Tourism: How Your Visit Can Help Nepal',
      excerpt: 'Learn about responsible travel practices and how tourism can positively impact local communities.',
      author: 'Rajesh Gurung',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg'
    },
    {
      id: 4,
      title: 'A Foodie\'s Guide to Nepali Cuisine',
      excerpt: 'Explore the rich flavors and diverse culinary traditions of Nepal, from street food to traditional feasts.',
      author: 'Priya Tamang',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Food & Culture',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg'
    },
    {
      id: 5,
      title: 'Wildlife Photography in Chitwan National Park',
      excerpt: 'Tips and techniques for capturing Nepal\'s incredible wildlife, from rhinos to exotic birds.',
      author: 'Rajesh Gurung',
      date: '2023-12-20',
      readTime: '4 min read',
      category: 'Wildlife',
      image: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg'
    },
    {
      id: 6,
      title: 'Monsoon Season in Nepal: When and Where to Visit',
      excerpt: 'Understanding Nepal\'s seasonal patterns and how to plan your visit for the best experience.',
      author: 'Ale Sherpa',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Travel Tips',
      image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg'
    },
    {
      id: 7,
      title: 'The Spiritual Side of Nepal: Temples and Monasteries',
      excerpt: 'A journey through Nepal\'s most sacred sites and their significance in local culture.',
      author: 'Priya Tamang',
      date: '2023-12-10',
      readTime: '9 min read',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg'
    },
    {
      id: 8,
      title: 'Essential Gear for High-Altitude Trekking',
      excerpt: 'A comprehensive guide to choosing the right equipment for your Himalayan adventure.',
      author: 'Rajesh Gurung',
      date: '2023-12-05',
      readTime: '10 min read',
      category: 'Trekking',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg'
    }
  ];

  const categories = ['All', 'Trekking', 'Culture', 'Wildlife', 'Food & Culture', 'Travel Tips', 'Sustainability'];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">
            Travel Stories & Insights
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover Nepal through our expert insights, travel tips, and authentic stories 
            from the heart of the Himalayas.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full">{featuredPost.category}</span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">{featuredPost.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-neutral-400" />
                      <span className="text-neutral-600 dark:text-neutral-300">{featuredPost.author}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <motion.button 
                        className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read Article
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-10 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-accent-600 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.id} 
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-primary-800 dark:text-neutral-100">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-800 dark:text-neutral-100 mb-3 line-clamp-2 font-playfair">{post.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <span className="text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 font-medium text-sm transition-colors duration-200">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Search className="mx-auto text-neutral-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">No articles found</h3>
            <p className="text-neutral-500 dark:text-neutral-500">Try adjusting your search terms or selected category.</p>
          </motion.div>
        )}

        {/* Email Inquiry Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <EmailInquiryForm 
            title="Stay Updated with Our Latest Stories"
            subtitle="Get exclusive travel insights, tips, and stories delivered directly to your inbox. Join our community of Nepal enthusiasts."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;