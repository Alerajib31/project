import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle, Send, MessageCircle, Minus, Plus, Clock, MapPin, Users } from 'lucide-react';

interface Tour {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  price: string;
  duration: string;
  location: string;
  image: string;
  activity: string;
  difficulty?: string;
  groupSize?: string;
  bestTime?: string;
  altitude?: string;
  accommodation?: string;
  meals?: string;
  physicalFitness?: string;
  culturalExperience?: string;
  rating?: number;
  reviews?: number;
  highlights: string[];
  itinerary?: string[];
  included?: string[];
  excluded?: string[];
  permits?: string[];
  equipment?: string[];
  scenicHighlights?: string[];
  safetyMeasures?: string[];
}

interface TourModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal = ({ tour, isOpen, onClose }: TourModalProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('about'); // New state for mobile tabs

  // Generate some fake available dates
  const availableDates = [
    '2023-11-15',
    '2023-11-22',
    '2023-12-05',
    '2023-12-19',
    '2024-01-10',
    '2024-01-24',
    '2024-02-07',
    '2024-02-21',
  ];

  // Calculate price
  const basePrice = tour ? parseInt(tour.price.replace(/[$,]/g, '')) : 0;
  const totalPrice = basePrice * numberOfPeople;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!selectedDate) {
      newErrors.date = 'Please select a departure date';
    }
    
    if (!bookingForm.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!bookingForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsBookingSubmitted(true);
      }, 1500);
    }
  };

  const handleWhatsAppBooking = () => {
    if (validateForm() && tour) {
      const message = `Hello, I'm interested in booking the ${tour.title} tour for ${numberOfPeople} people on ${selectedDate}. My name is ${bookingForm.name} and my email is ${bookingForm.email}. Please provide more information.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/9779847228505?text=${encodedMessage}`, '_blank');
    }
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedDate('');
      setNumberOfPeople(1);
      setBookingForm({ name: '', email: '' });
      setErrors({});
      setIsBookingSubmitted(false);
      setActiveTab('about'); // Reset active tab when modal closes
    }
  }, [isOpen]);

  if (!tour) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bg-white dark:bg-neutral-900 rounded-t-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl h-[90vh] sm:max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Header */}
            <div className="relative">
              <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 lg:p-8 w-full">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
                  <div>
                    <div className="flex items-center mb-1 sm:mb-2">
                      <span className="bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium mr-2">
                        {tour.activity}
                      </span>
                      <span className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-primary-800 dark:text-neutral-100 px-2 py-1 rounded-full text-xs font-medium">
                        {tour.duration}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 font-playfair">
                      {tour.title}
                    </h2>
                    <div className="flex items-center text-white/90 text-xs sm:text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                  <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">From</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-600">{tour.price}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">per person</p>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Tabs - Only visible on small screens */}
            <div className="flex border-b border-neutral-200 dark:border-neutral-700 overflow-x-auto sm:hidden">
              <button
                onClick={() => setActiveTab('about')}
                className={`flex-1 py-3 px-4 font-medium text-sm ${activeTab === 'about' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex-1 py-3 px-4 font-medium text-sm ${activeTab === 'itinerary' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`flex-1 py-3 px-4 font-medium text-sm ${activeTab === 'booking' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
              >
                Book Now
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* Left Column (Tour Details) - Hidden on mobile when not active */}
                  <div className={`lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8 ${(activeTab === 'about' || activeTab === 'itinerary') || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                    {/* About section */}
                    <div className={activeTab === 'about' || window.innerWidth >= 1024 ? 'block' : 'hidden'}>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-3 md:mb-4 font-playfair">About This Adventure</h3>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                        {tour.detailedDescription || tour.description}
                      </p>
                    
                      {/* Quick Facts */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {tour.difficulty && <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"><p className="text-xs text-neutral-500">Difficulty</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.difficulty}</p></div>}
                        {tour.groupSize && <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"><p className="text-xs text-neutral-500">Group Size</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.groupSize}</p></div>}
                        {tour.bestTime && <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"><p className="text-xs text-neutral-500">Best Time</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.bestTime}</p></div>}
                        {tour.altitude && <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"><p className="text-xs text-neutral-500">Max Altitude</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.altitude}</p></div>}
                        {tour.rating && <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"><p className="text-xs text-neutral-500">Rating</p><p className="font-semibold text-primary-800 dark:text-neutral-200 flex items-center"><Star size={14} className="mr-1 text-yellow-400 fill-current"/>{tour.rating}</p></div>}
                      </div>
                    </div>

                    {/* Itinerary section */}
                    {tour.itinerary && tour.itinerary.length > 0 && (
                      <div className={`border-t border-neutral-200 dark:border-neutral-700 pt-4 sm:pt-6 ${activeTab === 'itinerary' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                        <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 sm:mb-4 text-base sm:text-lg">Day-by-Day Itinerary</h4>
                        <div className="space-y-3 sm:space-y-4">
                          {tour.itinerary.map((day, index) => (
                            <div key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-14 sm:w-16">
                                <span className="inline-block px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded text-xs font-medium">
                                  Day {index + 1}
                                </span>
                              </div>
                              <div className="flex-1 ml-2 sm:ml-3">
                                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{day}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Inclusion/Exclusion section */}
                    {(tour.included && tour.included.length > 0 || tour.excluded && tour.excluded.length > 0) && (
                      <div className={`border-t border-neutral-200 dark:border-neutral-700 pt-4 sm:pt-6 ${activeTab === 'about' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                          {tour.included && tour.included.length > 0 && (
                            <div>
                              <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-3 text-base font-playfair">What's Included</h4>
                              <ul className="space-y-2">
                                {tour.included.map((item, index) => (
                                  <li key={index} className="flex items-start text-neutral-600 dark:text-neutral-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {tour.excluded && tour.excluded.length > 0 && (
                            <div>
                              <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-3 text-base font-playfair">What's Not Included</h4>
                              <ul className="space-y-2">
                                {tour.excluded.map((item, index) => (
                                  <li key={index} className="flex items-start text-neutral-600 dark:text-neutral-300 text-sm">
                                    <X className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Map section */}
                    <div className={`border-t border-neutral-200 dark:border-neutral-700 pt-4 sm:pt-6 ${activeTab === 'about' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                      <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-2 sm:mb-3 text-base font-playfair">Location & Map</h4>
                      <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <iframe
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          style={{ border: 0 }}
                          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(tour.location + ', Nepal')}`}
                          allowFullScreen
                        />
                      </div>
                    </div>

                    {/* Reviews section */}
                    {tour.rating && tour.reviews && (
                      <div className={`border-t border-neutral-200 dark:border-neutral-700 pt-4 sm:pt-6 ${activeTab === 'about' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <h4 className="font-bold text-primary-800 dark:text-neutral-100 text-base font-playfair">Customer Reviews</h4>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-medium text-primary-800 dark:text-neutral-100">{tour.rating}</span>
                            <span className="ml-1 text-neutral-600 dark:text-neutral-400 text-sm">({tour.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          {[...Array(3)].map((_, index) => (
                            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center text-accent-700 dark:text-accent-300 font-medium text-sm">
                                  {String.fromCharCode(65 + index)}
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium text-primary-800 dark:text-neutral-100">Happy Traveler {index + 1}</p>
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-3 h-3 ${i < 5 - index * 0.5 ? 'text-yellow-400 fill-current' : 'text-neutral-300 dark:text-neutral-600'}`} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Great experience! The guides were knowledgeable and the views were breathtaking.</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Booking Form) */}
                  <div className={`lg:col-span-1 ${activeTab === 'booking' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                    <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg lg:sticky lg:top-8">
                      {isBookingSubmitted ? (
                        <div className="text-center py-8 sm:py-12">
                          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                            <CheckCircle className="w-12 sm:w-16 h-12 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100">Booking Request Sent!</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 mt-2">Thank you! We've received your request and will get back to you within 24 hours.</p>
                          </motion.div>
                        </div>
                      ) : (
                        <form onSubmit={handleBookingSubmit} className="space-y-3 sm:space-y-4">
                          <div>
                            <label htmlFor="date-select" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Departure Date</label>
                            <select
                              id="date-select"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full p-2 sm:p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                            >
                              <option value="" disabled>Select a date</option>
                              {availableDates.map(date => (
                                <option key={date} value={date}>{new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</option>
                              ))}
                            </select>
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Number of Travelers</label>
                            <div className="flex items-center justify-between bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg p-2">
                              <button type="button" onClick={() => setNumberOfPeople(p => Math.max(1, p - 1))} className="p-1 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"><Minus size={16} /></button>
                              <span className="font-semibold text-lg w-12 text-center">{numberOfPeople}</span>
                              <button type="button" onClick={() => setNumberOfPeople(p => Math.min(10, p + 1))} className="p-1 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"><Plus size={16} /></button>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Full Name</label>
                            <input type="text" id="name" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} className="w-full p-2 sm:p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm" placeholder="e.g. John Doe" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Email Address</label>
                            <input type="email" id="email" value={bookingForm.email} onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})} className="w-full p-2 sm:p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm" placeholder="you@example.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>

                          <div className="bg-accent-50 dark:bg-neutral-700/50 p-3 rounded-lg space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-neutral-600 dark:text-neutral-400">Base Price</span>
                              <span className="text-primary-800 dark:text-neutral-200">${basePrice.toLocaleString()} / person</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-neutral-600 dark:text-neutral-400">Number of Travelers</span>
                              <span className="text-primary-800 dark:text-neutral-200">× {numberOfPeople}</span>
                            </div>
                            <div className="pt-2 mt-2 border-t border-neutral-200 dark:border-neutral-600">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-primary-800 dark:text-neutral-200">Total Amount</span>
                                <span className="text-lg font-bold text-accent-600">${totalPrice.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isSubmitting ? (
                                <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />Processing...</>
                              ) : (
                                <><Send size={18} className="mr-2" />Book This Tour</>
                              )}
                            </motion.button>

                            <motion.button
                              type="button"
                              onClick={handleWhatsAppBooking}
                              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <MessageCircle size={18} className="mr-2" />
                              Book via WhatsApp
                            </motion.button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
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