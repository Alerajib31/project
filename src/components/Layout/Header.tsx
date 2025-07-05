// Update imports to add more icons
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links without dropdown support
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tours', label: 'Our Tours' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ];

  // Add a semi-transparent background when at top of homepage to improve visibility
  const headerBg = isHomePage && !isScrolled 
    ? 'bg-black/20 backdrop-blur-sm' 
    : 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm border-b border-neutral-200/50 dark:border-neutral-700/50';

  // Ensure text is visible in both light and dark modes
  const textColor = isHomePage && !isScrolled 
    ? 'text-white drop-shadow-md' 
    : 'text-primary-800 dark:text-neutral-100';

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16 sm:h-18' : 'h-20 sm:h-24'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/1.jpeg" alt="Roots & Routes Tours & Travels Logo" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-all duration-300 rounded-full shadow-md" />
              <div className="flex flex-col">
                <span className={`font-bold text-sm sm:text-base lg:text-xl font-playfair ${textColor} transition-colors duration-300 leading-tight`}>
                  Roots & Routes
                </span>
                <span className={`text-xs sm:text-sm font-medium ${textColor} transition-colors duration-300 opacity-90 leading-tight`}>
                  Tours & Travels
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.to 
                    ? 'text-accent-600 dark:text-accent-400 drop-shadow-md' 
                    : `${textColor} hover:text-accent-600 dark:hover:text-accent-400`}`}
                >
                  <span className="relative overflow-hidden group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-all duration-300">
                    <span className="relative inline-block transform transition-transform duration-300 group-hover:translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute top-0 left-0 inline-block transform -translate-y-full text-accent-600 dark:text-accent-400 transition-transform duration-300 group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </span>
                </Link>
                
                {/* Active Indicator */}
                {location.pathname === link.to && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
            
            {/* CTA Button */}
            <div className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/tours"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center gap-2"
                >
                  Book a Tour
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${textColor} transition-colors duration-300 p-2 rounded-full hover:bg-neutral-100/20 dark:hover:bg-neutral-800/40`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200/50 dark:border-neutral-700/50 shadow-xl rounded-b-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-2 font-medium transition-colors duration-300 ${location.pathname === link.to ? 'text-accent-600 dark:text-accent-400' : 'text-primary-800 dark:text-neutral-100 hover:text-accent-600 dark:hover:text-accent-400'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="relative overflow-hidden group">
                      <span className="relative inline-block transform transition-transform duration-300 group-hover:translate-y-full">
                        {link.label}
                      </span>
                      <span className="absolute top-0 left-0 inline-block transform -translate-y-full text-accent-600 dark:text-accent-400 transition-transform duration-300 group-hover:translate-y-0">
                        {link.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-neutral-200 dark:border-neutral-700 mt-4"
              >
                <Link
                  to="/tours"
                  className="block bg-accent-600 hover:bg-accent-700 text-white px-4 py-3 rounded-xl font-medium text-center transition-colors duration-200 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Tour
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;