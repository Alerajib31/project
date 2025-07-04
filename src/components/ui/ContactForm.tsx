import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Get in Touch", 
  subtitle = "Ready to start your Nepal adventure? Contact our team of experts.",
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in learning more about your Nepal tours. My details: Name: ${formData.name}, Email: ${formData.email}${formData.phone ? `, Phone: ${formData.phone}` : ''}${formData.message ? `, Message: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/9779841234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 ${className}`}>
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-4 font-playfair">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          {subtitle}
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8 sm:py-12"
        >
          <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
          <h4 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100 mb-2">Message Sent Successfully!</h4>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
            Thank you for contacting us. We'll get back to you within 2 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name *"
              required
              className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base"
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base"
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base"
          >
            <option value="">Select Subject *</option>
            <option value="tour-inquiry">Tour Inquiry</option>
            <option value="booking">New Booking</option>
            <option value="custom-trip">Custom Trip Planning</option>
            <option value="support">Customer Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message *"
            required
            rows={4}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-vertical bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base"
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>

            <motion.button
              type="button"
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </motion.button>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
            <div className="flex items-center justify-center space-x-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-accent-600" />
                <span>+977 984-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-accent-600" />
                <span>info@aletours.com</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;