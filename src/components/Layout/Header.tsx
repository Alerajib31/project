import React, { useState, useEffect } from 'react';
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

  const headerBg = isHomePage && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm border-b border-neutral-200/50 dark:border-neutral-700/50';

  const textColor = isHomePage && !isScrolled 
    ? 'text-white' 
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
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/1.jpeg" alt="Roots & Routes Logo" className="h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 rounded-full" />
              <span className={`font-bold text-base sm:text-xl font-playfair ${textColor} transition-colors duration-300 hidden xs:block`}>
                Roots & Routes Tours & Travels
              </span>
              <span className={`font-bold text-base font-playfair ${textColor} transition-colors duration-300 xs:hidden`}>
                Roots & Routes
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={link.to}
                  className={`font-medium transition-all duration-200 hover:text-accent-600 dark:hover:text-accent-400 relative group text-sm xl:text-base ${
                    location.pathname === link.to 
                      ? 'text-accent-600 dark:text-accent-400' 
                      : textColor
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 dark:bg-accent-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              </motion.div>
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
                  className="bg-accent-600 hover:bg-accent-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Book a Tour
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${textColor} transition-colors duration-300 p-1`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 shadow-lg"
          >
            <div className="px-4 py-4 space-y-4 max-w-7xl mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`block text-primary-800 dark:text-neutral-100 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-colors duration-200 py-2 ${
                      location.pathname === link.to ? 'text-accent-600 dark:text-accent-400' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <Link
                  to="/tours"
                  className="block bg-accent-600 hover:bg-accent-700 text-white px-4 py-3 rounded-full font-medium text-center transition-colors duration-200 shadow-lg"
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