import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tour {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

interface SearchBarProps {
  tours: Tour[];
  onTourSelect: (tour: Tour) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ tours, onTourSelect, className = '' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = tours.filter(tour =>
        tour.title.toLowerCase().includes(query.toLowerCase()) ||
        tour.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTours(filtered);
      setIsOpen(true);
    } else {
      setFilteredTours([]);
      setIsOpen(false);
    }
  }, [query, tours]);

  const handleTourSelect = (tour: Tour) => {
    setQuery('');
    setIsOpen(false);
    onTourSelect(tour);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for your perfect adventure..."
          className="w-full px-6 py-4 pl-12 pr-12 text-primary-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 rounded-full bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-lg shadow-lg border border-white/20 dark:border-neutral-700/50 transition-all duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400" size={20} />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && filteredTours.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50"
          >
            <div className="max-h-80 overflow-y-auto">
              {filteredTours.map((tour) => (
                <motion.button
                  key={tour.id}
                  onClick={() => handleTourSelect(tour)}
                  className="w-full p-4 flex items-center space-x-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-left"
                  whileHover={{ x: 4 }}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-800 dark:text-neutral-100">{tour.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{tour.location}</p>
                  </div>
                  <span className="text-accent-600 dark:text-accent-400 font-bold">{tour.price}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;