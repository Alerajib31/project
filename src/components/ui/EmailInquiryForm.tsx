import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, CheckCircle, Phone, User, MessageSquare } from 'lucide-react';

interface EmailInquiryFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const EmailInquiryForm: React.FC<EmailInquiryFormProps> = ({ 
  title = "Get in Touch", 
  subtitle = "Have questions? We're here to help plan your perfect Nepal adventure.",
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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Email inquiry submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in learning more about your Nepal tours.

My Details:
Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

Message: ${formData.message || 'I would like to know more about your tours and services.'}

Please provide more information about your Nepal tours and packages.`;

    const whatsappUrl = `https://wa.me/9779847228505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 ${className}`}>
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-neutral-100 mb-3 sm:mb-4 font-playfair">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8 sm:py-12"
        >
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h4 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-3">Email Sent Successfully!</h4>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-4">
            Thank you for contacting us. We'll get back to you within 2 hours with detailed information about your inquiry.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-300 text-sm">
              📧 Confirmation email sent to: <strong>{formData.email}</strong>
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name *"
                required
                className="w-full pl-11 pr-4 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base transition-all duration-200"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address *"
                required
                className="w-full pl-11 pr-4 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base transition-all duration-200"
              />
            </div>
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number (Optional)"
              className="w-full pl-11 pr-4 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base transition-all duration-200"
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base transition-all duration-200"
          >
            <option value="">Select Subject *</option>
            <option value="tour-inquiry">Tour Inquiry</option>
            <option value="booking-request">Booking Request</option>
            <option value="custom-trip">Custom Trip Planning</option>
            <option value="group-booking">Group Booking</option>
            <option value="pricing-info">Pricing Information</option>
            <option value="travel-advice">Travel Advice</option>
            <option value="support">Customer Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="other">Other</option>
          </select>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-neutral-400" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your travel plans, preferred dates, group size, interests, or any specific questions you have..."
              required
              rows={5}
              className="w-full pl-11 pr-4 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-vertical bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 text-sm sm:text-base transition-all duration-200"
            />
          </div>

          {/* Action Buttons - Separate Email and WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Sending Email...
                </>
              ) : (
                <>
                  <Mail size={18} className="mr-2" />
                  Send Email Inquiry
                </>
              )}
            </motion.button>

            <motion.button
              type="button"
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} className="mr-2" />
              Contact via WhatsApp
            </motion.button>
          </div>

          {/* Contact Information */}
          <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4 sm:p-6 mt-6">
            <h4 className="font-semibold text-primary-800 dark:text-neutral-100 mb-3 text-sm sm:text-base">Quick Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center">
                <Phone size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                <span>+977 9847228505</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                <span>info@aletours.com</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-500">
              📞 Available 24/7 for emergency support | 📧 Email response within 2 hours
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center pt-4 border-t border-neutral-200 dark:border-neutral-600">
            By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry and provide relevant travel information.
          </div>
        </form>
      )}
    </div>
  );
};

export default EmailInquiryForm;