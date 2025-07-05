import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Image } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample gallery items - in a real application, these would come from a database or API
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'trekking',
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      alt: 'Everest Base Camp Trek',
      title: 'Everest Base Camp Trek',
      location: 'Everest Region, Nepal'
    },
    {
      id: 2,
      type: 'image',
      category: 'culture',
      src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      alt: 'Kathmandu Durbar Square',
      title: 'Kathmandu Durbar Square',
      location: 'Kathmandu, Nepal'
    },
    {
      id: 3,
      type: 'video',
      category: 'adventure',
      thumbnail: 'https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg',
      videoUrl: 'https://www.youtube.com/embed/dFLxa0VwY-E',
      title: 'Paragliding in Pokhara',
      location: 'Pokhara, Nepal'
    },
    {
      id: 4,
      type: 'image',
      category: 'trekking',
      src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
      alt: 'Annapurna Circuit',
      title: 'Annapurna Circuit',
      location: 'Annapurna Region, Nepal'
    },
    {
      id: 5,
      type: 'image',
      category: 'wildlife',
      src: 'https://images.pexels.com/photos/39629/tiger-tiger-baby-tigerfamile-young-39629.jpeg',
      alt: 'Bengal Tiger in Chitwan',
      title: 'Bengal Tiger',
      location: 'Chitwan National Park, Nepal'
    },
    {
      id: 6,
      type: 'video',
      category: 'culture',
      thumbnail: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
      videoUrl: 'https://www.youtube.com/embed/kcvT6Xbj5Ns',
      title: 'Nepali Cultural Dance',
      location: 'Kathmandu, Nepal'
    },
    {
      id: 7,
      type: 'image',
      category: 'landscape',
      src: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
      alt: 'Phewa Lake',
      title: 'Phewa Lake',
      location: 'Pokhara, Nepal'
    },
    {
      id: 8,
      type: 'image',
      category: 'trekking',
      src: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      alt: 'Langtang Valley',
      title: 'Langtang Valley Trek',
      location: 'Langtang Region, Nepal'
    },
    {
      id: 9,
      type: 'image',
      category: 'culture',
      src: 'https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg',
      alt: 'Boudhanath Stupa',
      title: 'Boudhanath Stupa',
      location: 'Kathmandu, Nepal'
    },
    {
      id: 10,
      type: 'video',
      category: 'adventure',
      thumbnail: 'https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg',
      videoUrl: 'https://www.youtube.com/embed/qREKP9oijWI',
      title: 'White Water Rafting',
      location: 'Trishuli River, Nepal'
    },
    {
      id: 11,
      type: 'image',
      category: 'landscape',
      src: 'https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg',
      alt: 'Himalayan Sunrise',
      title: 'Himalayan Sunrise',
      location: 'Nagarkot, Nepal'
    },
    {
      id: 12,
      type: 'image',
      category: 'wildlife',
      src: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg',
      alt: 'One-horned Rhinoceros',
      title: 'One-horned Rhinoceros',
      location: 'Chitwan National Park, Nepal'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'trekking', label: 'Trekking' },
    { id: 'culture', label: 'Culture' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'wildlife', label: 'Wildlife' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleImageClick = (item) => {
    if (item.type === 'image') {
      setSelectedImage(item);
    } else if (item.type === 'video') {
      setSelectedVideo(item);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-primary-700/50" />
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore the beauty of Nepal through our collection of stunning photos and videos
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 ${filter === category.id 
                  ? 'bg-accent-600 text-white shadow-lg' 
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleImageClick(item)}
              >
                <img 
                  src={item.type === 'image' ? item.src : item.thumbnail} 
                  alt={item.alt || item.title} 
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-accent-600/80 rounded-full p-3 sm:p-4 text-white">
                      <Play size={24} />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-200">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button 
            className="absolute top-4 right-4 text-white bg-neutral-800/50 hover:bg-neutral-700 p-2 rounded-full"
            onClick={closeModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
          <motion.div 
            className="max-w-5xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt || selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
            />
            <div className="bg-neutral-900 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-neutral-300">{selectedImage.location}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button 
            className="absolute top-4 right-4 text-white bg-neutral-800/50 hover:bg-neutral-700 p-2 rounded-full"
            onClick={closeModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
          <motion.div 
            className="max-w-5xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
              <iframe 
                src={selectedVideo.videoUrl} 
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-neutral-900 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-neutral-300">{selectedVideo.location}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;