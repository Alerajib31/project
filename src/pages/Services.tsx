import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Plane, Map, Tent, Mountain, Briefcase, CreditCard, Users } from 'lucide-react';
import EmailInquiryForm from '../components/ui/EmailInquiryForm';

const ServicesPage = () => {
  const services = [
    {
      icon: <Mountain size={48} className="text-accent-600" />,
      title: 'Trekking',
      description: 'Experience Nepal\'s breathtaking landscapes on guided treks through the Himalayas, from easy walks to challenging high-altitude adventures.',
      features: [
        'Everest Base Camp Trek',
        'Annapurna Circuit',
        'Langtang Valley Trek',
        'Manaslu Circuit Trek',
        'Upper Mustang Trek',
        'Gokyo Lakes Trek'
      ]
    },
    {
      icon: <Compass size={48} className="text-accent-600" />,
      title: 'Hiking',
      description: 'Enjoy shorter, less demanding trails that showcase Nepal\'s natural beauty and cultural heritage, perfect for families and casual adventurers.',
      features: [
        'Day hikes around Kathmandu Valley',
        'Nagarkot Sunrise Hike',
        'Phulchowki Hill Hike',
        'Shivapuri National Park Trails',
        'Champadevi Hill Hike',
        'Kakani Forest Trails'
      ]
    },
    {
      icon: <Plane size={48} className="text-accent-600" />,
      title: 'Ticketing',
      description: 'Comprehensive travel booking services for domestic and international flights, buses, and other transportation needs throughout your journey.',
      features: [
        'International flight bookings',
        'Domestic flight reservations',
        'Tourist bus tickets',
        'Private vehicle arrangements',
        'Airport transfers',
        'Group transportation solutions'
      ]
    },
    {
      icon: <Map size={48} className="text-accent-600" />,
      title: 'Cultural Tours',
      description: 'Immerse yourself in Nepal\'s rich cultural heritage with guided tours to historic sites, temples, and traditional villages.',
      features: [
        'Kathmandu Valley UNESCO Sites',
        'Bhaktapur Ancient City Tour',
        'Patan Durbar Square Exploration',
        'Lumbini Buddhist Pilgrimage',
        'Bandipur Village Experience',
        'Traditional Newari Culture Tour'
      ]
    },
    {
      icon: <Tent size={48} className="text-accent-600" />,
      title: 'Adventure Activities',
      description: 'Get your adrenaline pumping with exciting adventure activities across Nepal\'s diverse landscapes.',
      features: [
        'White Water Rafting',
        'Paragliding in Pokhara',
        'Bungee Jumping',
        'Rock Climbing',
        'Mountain Biking',
        'Jungle Safari in Chitwan'
      ]
    },
    {
      icon: <Briefcase size={48} className="text-accent-600" />,
      title: 'Custom Packages',
      description: 'Tailor-made travel experiences designed to match your specific interests, timeframe, and preferences.',
      features: [
        'Personalized itinerary planning',
        'Special interest tours',
        'Honeymoon packages',
        'Family-friendly adventures',
        'Photography expeditions',
        'Wellness and yoga retreats'
      ]
    },
    {
      icon: <CreditCard size={48} className="text-accent-600" />,
      title: 'Visa Services',
      description: 'Hassle-free visa processing assistance for Nepal and neighboring countries to ensure smooth travel arrangements.',
      features: [
        'Nepal tourist visa assistance',
        'Tibet travel permit processing',
        'Bhutan visa arrangements',
        'India visa guidance',
        'Visa extension services',
        'Documentation support'
      ]
    },
    {
      icon: <Users size={48} className="text-accent-600" />,
      title: 'Group Tours',
      description: 'Join like-minded travelers on scheduled group departures to popular destinations with expert guides and fixed itineraries.',
      features: [
        'Fixed departure schedules',
        'Small group sizes (max 12)',
        'Experienced group leaders',
        'Social travel experience',
        'Cost-effective adventures',
        'International group options'
      ]
    }
  ];

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Comprehensive travel solutions for your perfect Nepal adventure
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">
              What We Offer
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              From thrilling mountain adventures to cultural immersions, we provide a wide range of services to make your Nepal experience unforgettable.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 sm:p-8">
                  <div className="bg-accent-100 dark:bg-accent-900/30 p-4 rounded-2xl inline-block mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-700 dark:text-neutral-200 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span className="text-neutral-600 dark:text-neutral-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary-800 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-playfair">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-neutral-200 text-lg mb-8 leading-relaxed">
                Contact our team of experts to customize your perfect Nepal experience. Whether you're looking for a challenging trek, cultural immersion, or relaxing getaway, we're here to make it happen.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="https://wa.me/9779847228505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden"
            >
              <EmailInquiryForm 
                title="Quick Inquiry"
                subtitle="Tell us what you're looking for and we'll get back to you promptly."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;