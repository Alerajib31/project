import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-primary-900 dark:bg-neutral-900 text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img src="/images/logo.svg" alt="Roots & Routes Logo" className="h-10 w-10" />
              <span className="font-bold text-xl font-playfair">Roots & Routes Tours & Travels</span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Experience the true soul of Nepal with our curated adventures for discerning travelers.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/rootsnroutestourstravels?igsh=MWl0bWZ4MG52eHVkbA==', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/share/1MNaT4imhL/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: Send, href: 'https://www.tiktok.com/@rootsnroutes_travels?_t=ZS-8xktM0Tnl4M&_r=1', label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-neutral-300 hover:text-accent-500 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 font-playfair">Company</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/blog', label: 'Blog' },
                { to: '/faq', label: 'FAQs' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-neutral-300 hover:text-accent-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Tours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 font-playfair">Our Tours</h3>
            <ul className="space-y-3">
              {[
                'Trekking Adventures',
                'Cultural Experiences',
                'Luxury Escapes',
              ].map((tour) => (
                <li key={tour}>
                  <Link 
                    to="/tours" 
                    className="text-neutral-300 hover:text-accent-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 font-playfair">Stay Updated</h3>
            <p className="text-neutral-300 mb-4">
              Get the latest travel insights and exclusive offers.
            </p>
            
            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-600 text-white p-4 rounded-lg flex items-center space-x-2"
              >
                <CheckCircle size={20} />
                <span>Successfully subscribed!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-primary-800 dark:bg-neutral-800 text-neutral-100 placeholder-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-primary-800 dark:border-neutral-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Roots & Routes Tours & Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="/visitingcard.pdf" download className="text-neutral-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Download Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;