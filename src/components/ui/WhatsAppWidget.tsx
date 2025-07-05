import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Clock, Mail, User, MessageSquare as MessageSquareIcon, Send } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailFormData, setEmailFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = '9779847228505';
  const defaultMessage = 'Hello! I\'m interested in learning more about your Nepal tours. Could you please provide more information?';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEmailFormData({
      ...emailFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Email inquiry submitted from widget:', emailFormData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setShowEmailForm(false);
      setEmailFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppWithFormData = () => {
    const message = `Hi! I'm interested in learning more about your Nepal tours.

My Details:
Name: ${emailFormData.name || 'Not provided'}
Email: ${emailFormData.email || 'Not provided'}
Phone: ${emailFormData.phone || 'Not provided'}
Subject: ${emailFormData.subject || 'General Inquiry'}

Message: ${emailFormData.message || 'I would like to know more about your tours and services.'}

Please provide more information about your Nepal tours and packages.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button - Fully Responsive */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-colors duration-200 relative touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ minHeight: '44px', minWidth: '44px' }} // Ensure minimum touch target
        >
          <MessageSquare size={20} className="sm:w-6 sm:h-6" />
          
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.div>
          
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Contact Widget - Fully Responsive */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
              {/* Header */}
              <div className="bg-green-500 text-white p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Roots & Routes Tours & Travels</h3>
                    <div className="flex items-center space-x-1 text-green-100 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 max-h-80 sm:max-h-96 overflow-y-auto custom-scrollbar">
                {!showEmailForm ? (
                  <>
                    {/* Welcome Message */}
                    <div className="flex space-x-2 mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={12} className="sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="bg-neutral-100 dark:bg-neutral-700 rounded-2xl rounded-tl-sm p-2 sm:p-3 max-w-xs">
                        <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
                          Hello! 👋 Welcome to Roots & Routes Tours & Travels. How can we help you plan your perfect Nepal adventure?
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                          Just now
                        </p>
                      </div>
                    </div>

                    {/* Contact Options */}
                    <div className="space-y-3 mb-4">
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">Choose how to contact us:</p>
                      
                      {/* WhatsApp Option */}
                      <motion.button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ minHeight: '44px' }}
                      >
                        <MessageSquare size={16} className="sm:w-5 sm:h-5" />
                        <span>Chat on WhatsApp</span>
                      </motion.button>

                      {/* Email Option */}
                      <motion.button
                        onClick={() => setShowEmailForm(true)}
                        className="w-full bg-accent-600 hover:bg-accent-700 text-white p-3 sm:p-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ minHeight: '44px' }}
                      >
                        <Mail className="text-white sm:w-5 sm:h-5" size={16} />
                        <span>Send Email Inquiry</span>
                      </motion.button>

                      {/* Quick Tour Options */}
                      <div className="space-y-2">
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Popular Tours:</p>
                        {[
                          '🏔️ Everest Base Camp Trek',
                          '🌸 Annapurna Circuit',
                          '🏛️ Cultural Tours',
                          '💎 Custom Itinerary'
                        ].map((option, index) => (
                          <button
                            key={index}
                            onClick={handleWhatsAppClick}
                            className="w-full text-left bg-neutral-50 dark:bg-neutral-700 hover:bg-accent-50 dark:hover:bg-accent-900/20 border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 sm:p-3 text-xs sm:text-sm transition-colors touch-manipulation"
                            style={{ minHeight: '44px' }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                        <Phone className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 sm:w-4 sm:h-4" size={14} />
                        <span>+977 9847228505</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        <Clock size={12} className="sm:w-3 sm:h-3" />
                        <span>Available 24/7</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Email Form */
                  <div className="space-y-3 sm:space-y-4">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-4 sm:py-6"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Mail className="text-white sm:w-5 sm:h-5" size={16} />
                        </div>
                        <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-2 text-sm sm:text-base">Email Sent!</h4>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                          We'll get back to you within 2 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <h4 className="font-semibold text-primary-800 dark:text-neutral-100 text-sm sm:text-base">Send Email Inquiry</h4>
                          <button
                            onClick={() => setShowEmailForm(false)}
                            className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-600"
                            style={{ minHeight: '44px', minWidth: '44px' }}
                          >
                            <X size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        </div>

                        <form onSubmit={handleEmailSubmit} className="space-y-2 sm:space-y-3">
                          <div className="relative">
                            <User className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 sm:w-4 sm:h-4" size={14} />
                            <input
                              type="text"
                              name="name"
                              value={emailFormData.name}
                              onChange={handleEmailFormChange}
                              placeholder="Your Name *"
                              required
                              className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-2 sm:py-3 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                              style={{ minHeight: '44px' }}
                            />
                          </div>

                          <div className="relative">
                            <Mail className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 sm:w-4 sm:h-4" size={14} />
                            <input
                              type="email"
                              name="email"
                              value={emailFormData.email}
                              onChange={handleEmailFormChange}
                              placeholder="Email Address *"
                              required
                              className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-2 sm:py-3 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                              style={{ minHeight: '44px' }}
                            />
                          </div>

                          <div className="relative">
                            <Phone className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 sm:w-4 sm:h-4" size={14} />
                            <input
                              type="tel"
                              name="phone"
                              value={emailFormData.phone}
                              onChange={handleEmailFormChange}
                              placeholder="Phone (Optional)"
                              className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-2 sm:py-3 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                              style={{ minHeight: '44px' }}
                            />
                          </div>

                          <select
                            name="subject"
                            value={emailFormData.subject}
                            onChange={handleEmailFormChange}
                            required
                            className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                            style={{ minHeight: '44px' }}
                          >
                            <option value="">Select Subject *</option>
                            <option value="tour-inquiry">Tour Inquiry</option>
                            <option value="booking">Booking Request</option>
                            <option value="custom-trip">Custom Trip</option>
                            <option value="pricing">Pricing Info</option>
                            <option value="other">Other</option>
                          </select>

                          <div className="relative">
                            <MessageSquareIcon className="absolute left-2 sm:left-3 top-3 text-neutral-400 sm:w-4 sm:h-4" size={14} />
                            <textarea
                              name="message"
                              value={emailFormData.message}
                              onChange={handleEmailFormChange}
                              placeholder="Your message..."
                              required
                              rows={3}
                              className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-2 sm:py-3 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                            />
                          </div>

                          <div className="flex gap-2">
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-2 sm:py-3 px-2 sm:px-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center text-xs sm:text-sm touch-manipulation"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ minHeight: '44px' }}
                            >
                              {isSubmitting ? (
                                <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white" />
                              ) : (
                                <>
                                  <Send size={12} className="sm:w-3 sm:h-3 mr-1" />
                                  Send
                                </>
                              )}
                            </motion.button>

                            <motion.button
                              type="button"
                              onClick={handleWhatsAppWithFormData}
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-2 sm:px-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center text-xs sm:text-sm touch-manipulation"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ minHeight: '44px' }}
                            >
                              <MessageSquare size={12} className="sm:w-3 sm:h-3 mr-1" />
                              WhatsApp
                            </motion.button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;