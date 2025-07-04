import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Tag } from 'lucide-react';
import EmailInquiryForm from '../components/ui/EmailInquiryForm';

const BlogPost = () => {
  const { id } = useParams();

  // Enhanced blog post data with more comprehensive content
  const blogPosts = {
    1: {
      id: 1,
      title: 'The Ultimate Guide to Trekking in the Everest Region',
      content: `
        <div class="prose-content">
          <p class="lead-paragraph">The Everest region, also known as the Khumbu region, is home to the world's highest peak and offers some of the most spectacular trekking experiences on Earth. This comprehensive guide will help you prepare for and make the most of your journey to this legendary destination.</p>

          <h2>Why Choose the Everest Region?</h2>
          <p>The Everest region offers unparalleled mountain views, rich Sherpa culture, and a sense of adventure that few places on Earth can match. From the bustling markets of Namche Bazaar to the serene monasteries of Tengboche, every step of your journey will be filled with wonder and discovery.</p>

          <div class="highlight-box">
            <h3>🏔️ What Makes Everest Special</h3>
            <ul>
              <li><strong>World's Highest Peaks:</strong> Home to 4 of the world's 14 highest mountains</li>
              <li><strong>Sherpa Culture:</strong> Experience authentic mountain culture and hospitality</li>
              <li><strong>Buddhist Heritage:</strong> Ancient monasteries and spiritual traditions</li>
              <li><strong>Diverse Landscapes:</strong> From lush forests to high-altitude glaciers</li>
            </ul>
          </div>

          <h2>Best Time to Visit</h2>
          <p>The optimal times for trekking in the Everest region are during the pre-monsoon (March to May) and post-monsoon (September to November) seasons. During these periods, you'll enjoy clear mountain views, stable weather conditions, and comfortable temperatures for trekking.</p>

          <h3>🌸 Spring Season (March - May)</h3>
          <p>Spring is considered one of the best times to trek in the Everest region. The weather is generally stable, with clear skies offering spectacular mountain views. This is also when the famous rhododendrons bloom, painting the hillsides in vibrant colors of pink, red, and white.</p>

          <div class="weather-info">
            <h4>Spring Weather Conditions:</h4>
            <ul>
              <li>Temperature: 10-15°C during day, -5 to -10°C at night (at higher altitudes)</li>
              <li>Visibility: Excellent mountain views</li>
              <li>Trail Conditions: Dry and stable</li>
              <li>Crowds: Moderate to high</li>
            </ul>
          </div>

          <h3>🍂 Autumn Season (September - November)</h3>
          <p>Autumn offers the clearest mountain views of the year, with crisp air and excellent visibility. The weather is stable, and the temperatures are comfortable for trekking. This is the most popular season, so expect more crowds on the trails, but the trade-off is worth it for the spectacular views.</p>

          <h2>Essential Preparation</h2>
          <p>Proper preparation is crucial for a successful Everest region trek. Here are the key areas to focus on:</p>

          <h3>💪 Physical Fitness</h3>
          <p>Trekking in the Everest region requires good physical fitness. Start training at least 2-3 months before your trip with regular cardio exercises, hiking, and strength training. Focus on building endurance and leg strength.</p>

          <div class="training-plan">
            <h4>Recommended Training Schedule:</h4>
            <ul>
              <li><strong>Cardio:</strong> 45-60 minutes, 4-5 times per week</li>
              <li><strong>Hiking:</strong> Weekend hikes with a loaded backpack</li>
              <li><strong>Strength Training:</strong> Focus on legs, core, and back</li>
              <li><strong>Stair Climbing:</strong> Excellent preparation for uphill trekking</li>
            </ul>
          </div>

          <h3>🏔️ Altitude Acclimatization</h3>
          <p>The Everest region reaches high altitudes, with Everest Base Camp sitting at 5,364 meters (17,598 feet). Proper acclimatization is essential to prevent altitude sickness. Follow the golden rule: "climb high, sleep low" and take rest days as recommended by your itinerary.</p>

          <div class="altitude-guide">
            <h4>Altitude Sickness Prevention:</h4>
            <ul>
              <li>Ascend gradually - no more than 500m per day above 3,000m</li>
              <li>Stay hydrated - drink 3-4 liters of water daily</li>
              <li>Avoid alcohol and sleeping pills</li>
              <li>Recognize symptoms early: headache, nausea, fatigue</li>
              <li>Descend immediately if symptoms worsen</li>
            </ul>
          </div>

          <h2>Conclusion</h2>
          <p>Trekking in the Everest region is a life-changing experience that combines physical challenge, natural beauty, and cultural immersion. With proper preparation, respect for the environment and local culture, and a spirit of adventure, your journey to the roof of the world will create memories that last a lifetime.</p>

          <div class="call-to-action">
            <p><strong>Ready to embark on your Everest adventure?</strong> Contact our expert team to start planning your perfect trek to this legendary destination. We'll help you prepare, guide you safely, and ensure your journey exceeds all expectations.</p>
          </div>
        </div>
      `,
      author: 'Ale Sherpa',
      date: '2024-01-15',
      readTime: '12 min read',
      category: 'Trekking',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      tags: ['Everest', 'Trekking', 'Nepal', 'Himalayas', 'Adventure', 'Sherpa Culture'],
      likes: 156,
      comments: 23
    },
    2: {
      id: 2,
      title: 'Nepal\'s Hidden Cultural Gems: Beyond the Tourist Trail',
      content: `
        <div class="prose-content">
          <p class="lead-paragraph">While Nepal's towering peaks draw millions of visitors, the country's true treasures lie in its hidden cultural gems - ancient villages, forgotten temples, and living traditions that have remained unchanged for centuries.</p>

          <h2>Discovering Authentic Nepal</h2>
          <p>Beyond the well-trodden paths of Kathmandu and Pokhara lies a Nepal that few tourists ever experience. These hidden cultural gems offer intimate glimpses into traditional life, ancient practices, and the warm hospitality that defines the Nepali spirit.</p>

          <h3>🏘️ Bandipur: A Living Museum</h3>
          <p>Perched on a hilltop between Kathmandu and Pokhara, Bandipur is a perfectly preserved Newari town that feels frozen in time. Its cobblestone streets, traditional architecture, and panoramic mountain views make it a photographer's paradise.</p>

          <h3>🏛️ Gorkha: Birthplace of Modern Nepal</h3>
          <p>The historic town of Gorkha, birthplace of King Prithvi Narayan Shah who unified Nepal, offers stunning palace complexes and temples with incredible mountain views, including Manaslu and Ganesh Himal.</p>

          <h2>Living Traditions</h2>
          <p>Nepal's cultural diversity is reflected in its numerous ethnic groups, each with unique traditions, languages, and customs that have been passed down through generations.</p>

          <div class="cultural-highlight">
            <h4>Traditional Festivals to Experience:</h4>
            <ul>
              <li><strong>Indra Jatra:</strong> Kathmandu's most spectacular festival</li>
              <li><strong>Bisket Jatra:</strong> Bhaktapur's New Year celebration</li>
              <li><strong>Gai Jatra:</strong> Festival of cows in honor of the deceased</li>
              <li><strong>Teej:</strong> Women's festival celebrating marital bliss</li>
            </ul>
          </div>

          <p>Each festival offers unique insights into Nepal's rich cultural tapestry, from ancient rituals to community celebrations that bring entire villages together.</p>

          <div class="call-to-action">
            <p><strong>Experience Nepal's authentic culture</strong> with our expert local guides who will take you beyond the tourist trail to discover the real heart of this incredible country.</p>
          </div>
        </div>
      `,
      author: 'Priya Tamang',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg',
      tags: ['Culture', 'Heritage', 'Festivals', 'Traditional', 'Villages'],
      likes: 89,
      comments: 15
    }
    // Add more blog posts as needed
  };

  const blogPost = blogPosts[parseInt(id || '1')] || blogPosts[1];

  const relatedPosts = [
    {
      id: 2,
      title: 'Nepal\'s Hidden Cultural Gems: Beyond the Tourist Trail',
      image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg',
      category: 'Culture',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Sustainable Tourism: How Your Visit Can Help Nepal',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
      category: 'Sustainability',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'A Foodie\'s Guide to Nepali Cuisine',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
      category: 'Food & Culture',
      readTime: '7 min read'
    }
  ].filter(post => post.id !== blogPost.id);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 font-medium transition-colors duration-200 touch-manipulation"
            style={{ minHeight: '44px' }}
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12"
        >
          <div className="relative">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <button
              onClick={() => window.history.back()}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4">
                <span className="bg-accent-600 px-2 sm:px-3 py-1 rounded-full font-medium">
                  {blogPost.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={14} className="sm:w-4 sm:h-4 mr-1" />
                  {new Date(blogPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="sm:w-4 sm:h-4 mr-1" />
                  {blogPost.readTime}
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-playfair leading-tight">
                {blogPost.title}
              </h1>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
            {/* Author and Social */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-neutral-200 dark:border-neutral-700 gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <User className="text-accent-600 dark:text-accent-400 sm:w-5 sm:h-5" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-primary-800 dark:text-neutral-100 text-sm sm:text-base">{blogPost.author}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Travel Expert & Guide</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button className="flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors touch-manipulation" style={{ minHeight: '44px' }}>
                  <Heart size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{blogPost.likes}</span>
                </button>
                <button className="flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors touch-manipulation" style={{ minHeight: '44px' }}>
                  <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{blogPost.comments}</span>
                </button>
                <button className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 touch-manipulation" style={{ minHeight: '44px', minWidth: '44px' }}>
                  <Share2 size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="blog-content prose prose-sm sm:prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3 sm:mb-4">
                <Tag className="text-accent-600 dark:text-accent-400 mr-2 sm:w-5 sm:h-5" size={18} />
                <h4 className="font-semibold text-primary-800 dark:text-neutral-100 text-sm sm:text-base">Tags</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors cursor-pointer touch-manipulation"
                    style={{ minHeight: '32px' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-800 dark:text-neutral-100 mb-6 sm:mb-8 font-playfair">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white dark:bg-neutral-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group touch-manipulation"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-primary-800 dark:text-neutral-100">
                    {post.category}
                  </div>
                </div>
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-bold text-primary-800 dark:text-neutral-100 mb-2 line-clamp-2 font-playfair text-sm sm:text-base lg:text-lg">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Email Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <EmailInquiryForm 
            title="Have Questions About This Article?"
            subtitle="Our travel experts are here to help you plan your perfect Nepal adventure based on the insights from this article."
          />
        </motion.div>
      </div>

      <style jsx>{`
        .blog-content {
          color: rgb(64 64 64);
        }
        
        .dark .blog-content {
          color: rgb(212 212 212);
        }
        
        .blog-content .lead-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          color: rgb(82 82 82);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .blog-content .lead-paragraph {
            font-size: 1.125rem;
            line-height: 1.75;
            margin-bottom: 2rem;
          }
        }
        
        .dark .blog-content .lead-paragraph {
          color: rgb(163 163 163);
        }
        
        .blog-content h2 {
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 700;
          color: rgb(30 41 59);
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }
        
        @media (min-width: 640px) {
          .blog-content h2 {
            font-size: 1.875rem;
            line-height: 1.3;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
          }
        }
        
        .dark .blog-content h2 {
          color: rgb(245 245 245);
        }
        
        .blog-content h3 {
          font-size: 1.25rem;
          line-height: 1.4;
          font-weight: 700;
          color: rgb(30 41 59);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-family: 'Playfair Display', serif;
        }
        
        @media (min-width: 640px) {
          .blog-content h3 {
            font-size: 1.5rem;
            line-height: 1.3;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
        }
        
        .dark .blog-content h3 {
          color: rgb(245 245 245);
        }
        
        .blog-content h4 {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 700;
          color: rgb(30 41 59);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        
        @media (min-width: 640px) {
          .blog-content h4 {
            font-size: 1.125rem;
            line-height: 1.4;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
        }
        
        .dark .blog-content h4 {
          color: rgb(245 245 245);
        }
        
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
          font-size: 0.875rem;
        }
        
        @media (min-width: 640px) {
          .blog-content p {
            margin-bottom: 1.5rem;
            line-height: 1.75;
            font-size: 1rem;
          }
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1rem;
        }
        
        @media (min-width: 640px) {
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
        }
        
        .blog-content li {
          margin-bottom: 0.25rem;
          line-height: 1.6;
          font-size: 0.875rem;
        }
        
        @media (min-width: 640px) {
          .blog-content li {
            margin-bottom: 0.5rem;
            line-height: 1.75;
            font-size: 1rem;
          }
        }
        
        .blog-content strong {
          font-weight: 600;
          color: rgb(30 41 59);
        }
        
        .dark .blog-content strong {
          color: rgb(245 245 245);
        }
        
        .blog-content .highlight-box,
        .blog-content .weather-info,
        .blog-content .training-plan,
        .blog-content .altitude-guide,
        .blog-content .cultural-highlight {
          background-color: rgb(255 247 237);
          border: 1px solid rgb(254 215 170);
          border-radius: 0.75rem;
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        @media (min-width: 640px) {
          .blog-content .highlight-box,
          .blog-content .weather-info,
          .blog-content .training-plan,
          .blog-content .altitude-guide,
          .blog-content .cultural-highlight {
            padding: 1.5rem;
            margin: 2rem 0;
          }
        }
        
        .dark .blog-content .highlight-box,
        .dark .blog-content .weather-info,
        .dark .blog-content .training-plan,
        .dark .blog-content .altitude-guide,
        .dark .blog-content .cultural-highlight {
          background-color: rgba(234, 88, 12, 0.1);
          border-color: rgba(234, 88, 12, 0.3);
        }
        
        .blog-content .call-to-action {
          background: linear-gradient(135deg, rgb(234 88 12), rgb(194 65 12));
          color: white;
          border-radius: 0.75rem;
          padding: 1rem;
          margin: 1.5rem 0;
          box-shadow: 0 10px 25px rgba(234, 88, 12, 0.3);
        }
        
        @media (min-width: 640px) {
          .blog-content .call-to-action {
            padding: 1.5rem;
            margin: 2rem 0;
          }
        }
        
        .blog-content .call-to-action p {
          margin-bottom: 0;
          color: white;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;