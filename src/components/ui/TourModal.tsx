import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Users, Calendar, Star, Minus, Plus, CheckCircle, Send, MessageCircle } from 'lucide-react';

interface Tour {
  id: number;
  title: string;
  duration: string;
  price: string;
  location: string;
  groupSize: string;
  activity: string;
  image: string;
  description: string;
  highlights: string[];
  detailedDescription?: string;
  rating?: number;
  reviews?: number;
  difficulty?: string;
  bestTime?: string;
  altitude?: string;
}

interface TourModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ tour, isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  if (!tour) return null;

  const basePrice = parseInt(tour.price.replace(/[$,]/g, ''));
  const totalPrice = basePrice * numberOfPeople;

  // Generate upcoming dates (next 6 months, weekly departures)
  const generateUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 7; i <= 180; i += 7) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };

  const availableDates = generateUpcomingDates();

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!bookingForm.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!bookingForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!selectedDate) {
      newErrors.date = 'Please select a departure date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const bookingData = {
      tour: tour.title,
      date: selectedDate,
      people: numberOfPeople,
      totalPrice: totalPrice,
      customerInfo: bookingForm,
      timestamp: new Date().toISOString()
    };
    
    try {
      // Simulate booking submission with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('✅ Booking submitted successfully:', bookingData);
      
      // Store booking in localStorage for demo purposes
      const existingBookings = JSON.parse(localStorage.getItem('tourBookings') || '[]');
      existingBookings.push(bookingData);
      localStorage.setItem('tourBookings', JSON.stringify(existingBookings));
      
      setIsBookingSubmitted(true);
      setIsSubmitting(false);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsBookingSubmitted(false);
        onClose();
        // Reset form
        setBookingForm({ name: '', email: '', phone: '', message: '' });
        setSelectedDate('');
        setNumberOfPeople(1);
        setErrors({});
      }, 5000);
    } catch (error) {
      console.error('Booking submission error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  const handleWhatsAppBooking = () => {
    if (!validateForm()) {
      return;
    }

    const message = `🏔️ TOUR BOOKING REQUEST

📋 TOUR DETAILS:
• Tour: ${tour.title}
• Duration: ${tour.duration}
• Location: ${tour.location}
• Travelers: ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}
• Departure Date: ${new Date(selectedDate).toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}
• Total Price: $${totalPrice.toLocaleString()}

👤 CUSTOMER INFORMATION:
• Name: ${bookingForm.name}
• Email: ${bookingForm.email}
• Phone: ${bookingForm.phone || 'Not provided'}

${bookingForm.message ? `💬 Special Requests:\n${bookingForm.message}` : ''}

✅ I would like to proceed with this booking. Please confirm availability and provide payment details.

Thank you!`;

    const whatsappUrl = `https://wa.me/9779847228505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl lg:rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-40 sm:h-48 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 font-playfair">
                  {tour.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="flex items-center bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <MapPin size={12} className="sm:w-3 sm:h-3 mr-1" />
                    {tour.location}
                  </div>
                  <div className="flex items-center bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <Clock size={12} className="sm:w-3 sm:h-3 mr-1" />
                    {tour.duration}
                  </div>
                  {tour.rating && (
                    <div className="flex items-center bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <Star size={12} className="sm:w-3 sm:h-3 mr-1 fill-current text-yellow-400" />
                      {tour.rating} ({tour.reviews || 0})
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row">
              {/* Main Content - Simplified for Mobile */}
              <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(95vh-10rem)] sm:max-h-[calc(95vh-12rem)] lg:max-h-[calc(95vh-16rem)]">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-3 sm:mb-4 font-playfair">About This Adventure</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                      {tour.detailedDescription || tour.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 text-sm sm:text-base">Quick Facts</h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600 dark:text-neutral-400">Duration:</span>
                          <span className="font-medium text-primary-800 dark:text-neutral-100">{tour.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600 dark:text-neutral-400">Group Size:</span>
                          <span className="font-medium text-primary-800 dark:text-neutral-100">{tour.groupSize}</span>
                        </div>
                        {tour.altitude && (
                          <div className="flex justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Max Altitude:</span>
                            <span className="font-medium text-primary-800 dark:text-neutral-100">{tour.altitude}</span>
                          </div>
                        )}
                        {tour.bestTime && (
                          <div className="flex justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Best Time:</span>
                            <span className="font-medium text-primary-800 dark:text-neutral-100">{tour.bestTime}</span>
                          </div>
                        )}
                        {tour.difficulty && (
                          <div className="flex justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Difficulty:</span>
                            <span className="font-medium text-primary-800 dark:text-neutral-100">{tour.difficulty}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 text-sm sm:text-base">Highlights</h4>
                      <div className="space-y-2">
                        {tour.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Panel - Fully Responsive */}
              <div className="xl:w-80 2xl:w-96 border-t xl:border-t-0 xl:border-l border-neutral-200 dark:border-neutral-700">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-3 sm:p-4 lg:p-6 h-full">
                  {isBookingSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-6 sm:py-8 lg:py-12"
                    >
                      <CheckCircle className="text-green-500 mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-3">Booking Request Sent!</h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm sm:text-base">
                        Thank you for your booking request. We'll contact you within 2 hours to confirm your adventure.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 sm:p-4">
                        <p className="text-green-800 dark:text-green-300 text-xs sm:text-sm">
                          📧 Confirmation sent to: <strong>{bookingForm.email}</strong>
                        </p>
                        <p className="text-green-700 dark:text-green-400 text-xs mt-2">
                          📱 You can also track your booking via WhatsApp
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="text-center mb-4 sm:mb-6">
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Starting from</p>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-600">${basePrice.toLocaleString()}</p>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">per person</p>
                      </div>

                      <form onSubmit={handleBookingSubmit} className="space-y-3 sm:space-y-4">
                        {/* Personal Information */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary-800 dark:text-neutral-100 text-sm sm:text-base">Your Information</h4>
                          
                          <div>
                            <input
                              type="text"
                              placeholder="Full Name *"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                              className={`w-full px-3 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 ${
                                errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                              }`}
                              style={{ minHeight: '44px' }}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          
                          <div>
                            <input
                              type="email"
                              placeholder="Email Address *"
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                              className={`w-full px-3 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 ${
                                errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                              }`}
                              style={{ minHeight: '44px' }}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                          
                          <input
                            type="tel"
                            placeholder="Phone Number (Optional)"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200"
                            style={{ minHeight: '44px' }}
                          />
                        </div>

                        {/* Date Selection */}
                        <div>
                          <label className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-2">
                            Select Departure Date *
                          </label>
                          <div>
                            <select
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className={`w-full px-3 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 ${
                                errors.date ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                              }`}
                              style={{ minHeight: '44px' }}
                            >
                              <option value="">Choose departure date</option>
                              {availableDates.slice(0, 12).map(date => (
                                <option key={date} value={date}>
                                  {new Date(date).toLocaleDateString('en-US', { 
                                    weekday: 'short', 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </option>
                              ))}
                            </select>
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                          </div>
                        </div>

                        {/* Number of People */}
                        <div>
                          <label className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-2">
                            Number of Travelers
                          </label>
                          <div className="flex items-center justify-between bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg p-2 sm:p-3">
                            <button
                              type="button"
                              onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                              className="text-accent-600 hover:text-accent-700 p-2 rounded-full hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors"
                              style={{ minHeight: '44px', minWidth: '44px' }}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-semibold text-primary-800 dark:text-neutral-100 text-base sm:text-lg">{numberOfPeople}</span>
                            <button
                              type="button"
                              onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                              className="text-accent-600 hover:text-accent-700 p-2 rounded-full hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors"
                              style={{ minHeight: '44px', minWidth: '44px' }}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Message */}
                        <textarea
                          placeholder="Special requests, dietary requirements, or questions..."
                          value={bookingForm.message}
                          onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 resize-vertical transition-all duration-200"
                        />

                        {/* Total Price */}
                        <div className="bg-white dark:bg-neutral-700 rounded-lg p-3 sm:p-4 border border-neutral-200 dark:border-neutral-600">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-800 dark:text-neutral-200 text-sm sm:text-base">Total Price:</span>
                            <span className="text-lg sm:text-xl font-bold text-accent-600">${totalPrice.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                            {numberOfPeople} {numberOfPeople === 1 ? 'traveler' : 'travelers'} × ${basePrice.toLocaleString()}
                          </p>
                          {selectedDate && (
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                              Departure: {new Date(selectedDate).toLocaleDateString()}
                            </p>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 sm:space-y-3">
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-3 sm:py-4 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ minHeight: '44px' }}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2" />
                                Processing Booking...
                              </>
                            ) : (
                              <>
                                <Send size={16} className="sm:w-5 sm:h-5 mr-2" />
                                Book This Tour Now
                              </>
                            )}
                          </motion.button>

                          <motion.button
                            type="button"
                            onClick={handleWhatsAppBooking}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ minHeight: '44px' }}
                          >
                            <MessageCircle size={16} className="sm:w-5 sm:h-5 mr-2" />
                            Book via WhatsApp
                          </motion.button>
                        </div>

                        <div className="text-center">
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            ✅ Free cancellation up to 48 hours before departure<br />
                            💳 Secure payment processing<br />
                            📞 24/7 customer support
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TourModal;