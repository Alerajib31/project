import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import EmailInquiryForm from '../components/ui/EmailInquiryForm';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your Nepal adventure? We're here to help you plan the perfect journey. 
            Reach out to our team of local experts.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">Contact Information</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
                    <MapPin className="text-accent-600 dark:text-accent-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-1">Office Location</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
                      Thamel, Kathmandu<br />
                      Nepal 44600
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
                    <Phone className="text-accent-600 dark:text-accent-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-1">Phone</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
                      +977 1 4123456<br />
                      +977 9841234567
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
                    <Mail className="text-accent-600 dark:text-accent-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-1">Email</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
                      info@aletours.com<br />
                      bookings@aletours.com
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
                    <Clock className="text-accent-600 dark:text-accent-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-1">Office Hours</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <motion.div 
              className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 sm:p-8 text-white"
              whileHover={{ scale: 1.02 }}
            >
              <MessageCircle className="mx-auto mb-4" size={48} />
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center font-playfair">WhatsApp Support</h3>
              <p className="text-green-100 mb-6 text-center text-sm sm:text-base">
                Get instant responses to your queries. Our team is available 24/7 for emergency support.
              </p>
              <motion.a
                href="https://wa.me/9779841234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Email Inquiry Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <EmailInquiryForm 
              title="Send us a Message"
              subtitle="Ready to start your Nepal adventure? Fill out the form below and our team of experts will get back to you within 2 hours."
            />
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-2 font-playfair">Find Our Office</h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
                Located in the heart of Thamel, Kathmandu's tourist district, our office is easily accessible 
                and close to major hotels and restaurants.
              </p>
            </div>
            <div className="h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.3094!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74aa1f23190a74aa!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ale Tours & Travels Office Location"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-12 sm:mt-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-6 sm:mb-8 text-center font-playfair">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-2 text-sm sm:text-base">How far in advance should I book?</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                We recommend booking 2-3 months in advance for peak seasons (March-May, September-November) 
                and 4-6 weeks for other times.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-2 text-sm sm:text-base">Do you offer custom itineraries?</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                Yes! We specialize in creating personalized experiences tailored to your interests, 
                budget, and schedule.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-2 text-sm sm:text-base">What's included in the tour prices?</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                Our tours typically include accommodation, meals, permits, guides, and transportation. 
                International flights and personal expenses are separate.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="font-semibold text-primary-800 dark:text-neutral-100 mb-2 text-sm sm:text-base">Do you provide travel insurance?</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                We strongly recommend travel insurance and can help connect you with trusted providers. 
                It's not included in our tour packages.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;