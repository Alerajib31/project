import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Users, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import toursData from '../data/tours.json';

const ToursPage = () => {
  const navigate = useNavigate();
  const tours = toursData;

  const handleTourSelect = (tourId: string | number) => {
    navigate(`/tours/${tourId}`);
  };

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
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">
            Our Tours
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover Nepal through our carefully curated collection of authentic adventures, 
            from challenging treks to cultural immersions and luxury retreats.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tours.map((tour, _index) => (
              <motion.div
                key={tour.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-neutral-200 dark:border-neutral-700"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleTourSelect(tour.id)}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-accent-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    {tour.activity}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-primary-800 dark:text-neutral-100 shadow-lg">
                    {tour.duration}
                  </div>
                  {tour.rating && (
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-primary-800 dark:text-neutral-100">{tour.rating}</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100 mb-2 font-playfair">
                    {tour.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm sm:text-base">
                    {tour.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <MapPin size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <Users size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.groupSize}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <Clock size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.duration}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded-lg text-xs">
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 3 && (
                        <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-2 py-1 rounded-lg text-xs">
                          +{tour.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">From</p>
                      <p className="text-xl sm:text-2xl font-bold text-accent-600">{tour.price}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">per person</p>
                    </div>
                    <motion.button 
                      className="bg-accent-600 hover:bg-accent-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <ContactForm 
            title="Can't Find Your Perfect Adventure?"
            subtitle="Let us create a custom itinerary tailored to your dreams and preferences. Our local experts are here to help."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ToursPage;