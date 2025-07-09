import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Star, CheckCircle, X, Send, MessageCircle, Minus, Plus } from 'lucide-react';
import toursData from '../data/tours.json';

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

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

  useEffect(() => {
    // Find the tour by ID
    const foundTour = toursData.find(t => t.id.toString() === id);
    
    if (foundTour) {
      setTour(foundTour);
      setLoading(false);
    } else {
      // Tour not found, redirect to tours page
      navigate('/tours');
    }
  }, [id, navigate]);

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

  if (loading) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4">Tour Not Found</h2>
        <button 
          onClick={() => navigate('/tours')}
          className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Back to Tours
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-8 sm:mb-12">
          <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-2xl">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center mb-2 sm:mb-3">
                  <span className="bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium mr-2">
                    {tour.activity}
                  </span>
                  <span className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-primary-800 dark:text-neutral-100 px-2 py-1 rounded-full text-xs font-medium">
                    {tour.duration}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-playfair">
                  {tour.title}
                </h1>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin size={16} className="mr-1" />
                  <span>{tour.location}</span>
                </div>
              </div>
              <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-4 py-3 rounded-xl">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">From</p>
                <p className="text-2xl sm:text-3xl font-bold text-accent-600">{tour.price}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">per person</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column (Tour Details) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Tabs */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
              <div className="flex border-b border-neutral-200 dark:border-neutral-700 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`py-4 px-6 font-medium text-sm ${activeTab === 'about' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
                >
                  About
                </button>
                {tour.itinerary && tour.itinerary.length > 0 && (
                  <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`py-4 px-6 font-medium text-sm ${activeTab === 'itinerary' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
                  >
                    Itinerary
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`py-4 px-6 font-medium text-sm ${activeTab === 'inclusions' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
                >
                  Inclusions/Exclusions
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`py-4 px-6 font-medium text-sm ${activeTab === 'map' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
                >
                  Map
                </button>
                {tour.rating && tour.reviews && (
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-4 px-6 font-medium text-sm ${activeTab === 'reviews' ? 'text-accent-600 border-b-2 border-accent-600' : 'text-neutral-500'}`}
                  >
                    Reviews
                  </button>
                )}
              </div>

              <div className="p-6">
                {/* About Tab */}
                {activeTab === 'about' && (
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">About This Adventure</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {tour.detailedDescription || tour.description}
                    </p>
                  
                    {/* Quick Facts */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {tour.difficulty && <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"><p className="text-xs text-neutral-500">Difficulty</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.difficulty}</p></div>}
                      {tour.groupSize && <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"><p className="text-xs text-neutral-500">Group Size</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.groupSize}</p></div>}
                      {tour.bestTime && <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"><p className="text-xs text-neutral-500">Best Time</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.bestTime}</p></div>}
                      {tour.altitude && <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"><p className="text-xs text-neutral-500">Max Altitude</p><p className="font-semibold text-primary-800 dark:text-neutral-200">{tour.altitude}</p></div>}
                      {tour.rating && <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"><p className="text-xs text-neutral-500">Rating</p><p className="font-semibold text-primary-800 dark:text-neutral-200 flex items-center"><Star size={16} className="mr-1 text-yellow-400 fill-current"/>{tour.rating}</p></div>}
                    </div>

                    {/* Highlights */}
                    {tour.highlights && tour.highlights.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 text-lg">Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight: string, index: number) => (
                            <span key={index} className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-3 py-1 rounded-lg text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && tour.itinerary && (
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">Day-by-Day Itinerary</h3>
                    <div className="space-y-4">
                      {tour.itinerary.map((day: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-16">
                            <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded text-sm font-medium">
                              Day {index + 1}
                            </span>
                          </div>
                          <div className="flex-1 ml-4">
                            <p className="text-neutral-600 dark:text-neutral-300">{day}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions/Exclusions Tab */}
                {activeTab === 'inclusions' && (
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">What's Included & Excluded</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tour.included && tour.included.length > 0 && (
                        <div>
                          <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 text-lg font-playfair">What's Included</h4>
                          <ul className="space-y-2">
                            {tour.included.map((item: string, index: number) => (
                              <li key={index} className="flex items-start text-neutral-600 dark:text-neutral-300">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {tour.excluded && tour.excluded.length > 0 && (
                        <div>
                          <h4 className="font-bold text-primary-800 dark:text-neutral-100 mb-3 text-lg font-playfair">What's Not Included</h4>
                          <ul className="space-y-2">
                            {tour.excluded.map((item: string, index: number) => (
                              <li key={index} className="flex items-start text-neutral-600 dark:text-neutral-300">
                                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Map Tab */}
                {activeTab === 'map' && (
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">Location & Map</h3>
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
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && tour.rating && tour.reviews && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-neutral-100 font-playfair">Customer Reviews</h3>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium text-primary-800 dark:text-neutral-100">{tour.rating}</span>
                        <span className="ml-1 text-neutral-600 dark:text-neutral-400">({tour.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-sm border border-neutral-200 dark:border-neutral-700">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center text-accent-700 dark:text-accent-300 font-medium">
                              {String.fromCharCode(65 + index)}
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-primary-800 dark:text-neutral-100">Happy Traveler {index + 1}</p>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-4 h-4 ${i < 5 - index * 0.5 ? 'text-yellow-400 fill-current' : 'text-neutral-300 dark:text-neutral-600'}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-neutral-600 dark:text-neutral-300">Great experience! The guides were knowledgeable and the views were breathtaking. Would definitely recommend this tour to anyone visiting Nepal.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Booking Form) */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md sticky top-24 border border-neutral-200 dark:border-neutral-700">
              {isBookingSubmitted ? (
                <div className="text-center py-8">
                  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary-800 dark:text-neutral-100 mb-2">Booking Request Sent!</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Thank you! We've received your request and will get back to you within 24 hours.</p>
                  </motion.div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">Book This Tour</h3>
                  
                  <div>
                    <label htmlFor="date-select" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Departure Date</label>
                    <select
                      id="date-select"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
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
                      <button type="button" onClick={() => setNumberOfPeople(p => Math.max(1, p - 1))} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"><Minus size={16} /></button>
                      <span className="font-semibold text-lg w-12 text-center">{numberOfPeople}</span>
                      <button type="button" onClick={() => setNumberOfPeople(p => Math.min(10, p + 1))} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"><Plus size={16} /></button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={bookingForm.name} 
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} 
                      className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="e.g. John Doe" 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-800 dark:text-neutral-200 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={bookingForm.email} 
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})} 
                      className="w-full p-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="you@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="bg-accent-50 dark:bg-neutral-700/50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Base Price</span>
                      <span className="text-primary-800 dark:text-neutral-200">${basePrice.toLocaleString()} / person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Number of Travelers</span>
                      <span className="text-primary-800 dark:text-neutral-200">× {numberOfPeople}</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-neutral-200 dark:border-neutral-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-primary-800 dark:text-neutral-200">Total Amount</span>
                        <span className="text-xl font-bold text-accent-600">${totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
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
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
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
  );
};

export default TourDetails;