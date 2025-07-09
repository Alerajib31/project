import React, { useState } from 'react';
import { Clock, MapPin, Users, Filter, Search, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TourModal from '../components/ui/TourModal';
import ContactForm from '../components/ui/ContactForm';
import toursData from '../data/tours.json';

const ToursPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    activity: '',
    duration: '',
    priceRange: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = toursData;

  const activities = ['All', 'Hiking', 'History', 'Wildlife', 'Luxury', 'Culinary'];
  const durations = ['All', '1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];
  const priceRanges = ['All', 'Under $1000', '$1000-$2000', 'Over $2000'];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesActivity = !selectedFilters.activity || selectedFilters.activity === 'All' || 
                           tour.activity === selectedFilters.activity;
    
    const matchesDuration = !selectedFilters.duration || selectedFilters.duration === 'All' ||
                           (selectedFilters.duration === '1-3 Days' && parseInt(tour.duration) <= 3) ||
                           (selectedFilters.duration === '4-7 Days' && parseInt(tour.duration) >= 4 && parseInt(tour.duration) <= 7) ||
                           (selectedFilters.duration === '8-14 Days' && parseInt(tour.duration) >= 8 && parseInt(tour.duration) <= 14) ||
                           (selectedFilters.duration === '15+ Days' && parseInt(tour.duration) >= 15);

    const matchesPrice = !selectedFilters.priceRange || selectedFilters.priceRange === 'All' ||
                        (selectedFilters.priceRange === 'Under $1000' && parseInt(tour.price.replace(/[$,]/g, '')) < 1000) ||
                        (selectedFilters.priceRange === '$1000-$2000' && parseInt(tour.price.replace(/[$,]/g, '')) >= 1000 && parseInt(tour.price.replace(/[$,]/g, '')) <= 2000) ||
                        (selectedFilters.priceRange === 'Over $2000' && parseInt(tour.price.replace(/[$,]/g, '')) > 2000);

    return matchesSearch && matchesActivity && matchesDuration && matchesPrice;
  });

  const handleTourSelect = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
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

        {/* Search and Filters */}
        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-8 sm:pl-10 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
              />
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
            </div>

            {/* Activity Filter */}
            <select
              value={selectedFilters.activity}
              onChange={(e) => setSelectedFilters({...selectedFilters, activity: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Activity Type</option>
              {activities.map(activity => (
                <option key={activity} value={activity}>{activity}</option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={selectedFilters.duration}
              onChange={(e) => setSelectedFilters({...selectedFilters, duration: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Duration</option>
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedFilters.priceRange}
              onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Price Range</option>
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              Showing <span className="font-semibold text-accent-600">{filteredTours.length}</span> of <span className="font-semibold">{tours.length}</span> tours
            </p>
            <button
              onClick={() => {
                setSelectedFilters({ activity: '', duration: '', priceRange: '' });
                setSearchQuery('');
              }}
              className="text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        </motion.div>

        {/* Tours Grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-neutral-200 dark:border-neutral-700"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleTourSelect(tour)}
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

        {filteredTours.length === 0 && (
          <motion.div 
            className="text-center py-12 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Filter className="mx-auto text-neutral-400 mb-4" size={48} />
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">No tours found</h3>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm sm:text-base">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}

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

      {/* Tour Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTour(null);
        }}
      />
    </div>
  );
};

export default ToursPage;