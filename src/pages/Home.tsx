import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Home, Star, ChevronRight, MapPin, Clock, Award, Shield, Globe, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import TourModal from '../components/ui/TourModal';
import HeroSlideshow from '../components/ui/HeroSlideshow';
import QuickInquiryForm from '../components/ui/QuickInquiryForm';
import WhatsAppWidget from '../components/ui/WhatsAppWidget';

const HomePage = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredTours = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      duration: '14 Days',
      price: '$2,299',
      location: 'Everest Region',
      groupSize: '8-12 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      description: 'Journey to the foot of the world\'s highest peak through stunning Himalayan landscapes.',
      highlights: ['Namche Bazaar', 'Tengboche Monastery', 'Kala Patthar', 'Sherpa Culture'],
      detailedDescription: 'Embark on the ultimate Himalayan adventure to Everest Base Camp. This iconic trek takes you through diverse landscapes, from lush rhododendron forests to high-altitude glacial valleys. Experience the warm hospitality of Sherpa communities, visit ancient monasteries, and witness breathtaking mountain vistas including Everest, Lhotse, and Ama Dablam. This carefully planned itinerary includes proper acclimatization days to ensure your safety and success.',
      difficulty: 'Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,364m (17,598ft)',
      accommodation: 'Tea houses and lodges with basic amenities',
      meals: 'All meals included during trek (breakfast, lunch, dinner)',
      physicalFitness: 'Good physical fitness required. Ability to walk 5-7 hours daily on mountain terrain. Previous trekking experience recommended.',
      culturalExperience: 'Immerse yourself in Sherpa culture, visit ancient Buddhist monasteries, participate in local festivals if timing permits, and learn about traditional mountain life.',
      rating: 4.9,
      reviews: 127,
      itinerary: [
        'Fly to Lukla (2,840m) and trek to Phakding (2,610m) - 3-4 hours',
        'Trek to Namche Bazaar (3,440m) - 5-6 hours through Sagarmatha National Park',
        'Acclimatization day in Namche - explore local markets and museums',
        'Trek to Tengboche (3,867m) - visit famous monastery with Everest views',
        'Continue to Dingboche (4,410m) - enter high alpine zone',
        'Acclimatization day in Dingboche - optional hike to Nagarjun Hill',
        'Trek to Lobuche (4,910m) - memorial site for climbers',
        'Everest Base Camp (5,364m) and return to Gorak Shep (5,164m)',
        'Climb Kala Patthar (5,545m) for sunrise views, descend to Pheriche',
        'Begin descent to Namche Bazaar via Tengboche',
        'Trek to Lukla via Phakding',
        'Fly back to Kathmandu',
        'Departure or extend your stay in Nepal'
      ],
      included: [
        'All meals during trek (breakfast, lunch, dinner)',
        'Accommodation in tea houses and lodges',
        'Professional English-speaking guide',
        'Porter service (1 porter for 2 trekkers)',
        'All necessary permits (National Park, TIMS)',
        'Domestic flights (Kathmandu-Lukla-Kathmandu)',
        'Airport transfers in Kathmandu',
        'First aid kit and emergency evacuation insurance',
        'Government taxes and service charges'
      ],
      excluded: [
        'International flights to/from Nepal',
        'Nepal visa fees',
        'Travel and rescue insurance',
        'Personal trekking equipment',
        'Tips for guides and porters',
        'Personal expenses (laundry, phone calls, etc.)',
        'Alcoholic beverages and soft drinks',
        'Emergency evacuation costs'
      ],
      permits: [
        'Sagarmatha National Park Entry Permit',
        'TIMS (Trekkers Information Management System) Card'
      ],
      equipment: [
        'Sleeping bag (-15°C rating)',
        'Down jacket',
        'Waterproof jacket and pants',
        'Trekking boots',
        'Warm layers',
        'Sun hat and warm hat',
        'Sunglasses',
        'Headlamp',
        'Trekking poles',
        'Personal first aid kit'
      ],
      scenicHighlights: [
        'Mount Everest (8,848m)',
        'Lhotse (8,516m)',
        'Nuptse (7,861m)',
        'Ama Dablam (6,812m)',
        'Thamserku (6,623m)',
        'Island Peak (6,189m)'
      ],
      safetyMeasures: [
        'Experienced guides with wilderness first aid training',
        'Proper acclimatization schedule',
        'Emergency evacuation insurance included',
        'Regular health checks during trek',
        'Satellite communication device carried by guide',
        'Weather monitoring and route adjustments as needed'
      ],
      sustainabilityPractices: [
        'Leave No Trace principles followed',
        'Support for local Sherpa communities',
        'Eco-friendly accommodation choices',
        'Waste management and recycling',
        'Carbon offset programs available',
        'Local guide and porter employment'
      ]
    },
    {
      id: 2,
      title: 'Annapurna Circuit Trek',
      duration: '12 Days',
      price: '$1,899',
      location: 'Annapurna Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
      description: 'Experience diverse landscapes from subtropical forests to high alpine terrain.',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Poon Hill', 'Hot Springs'],
      detailedDescription: 'The Annapurna Circuit is one of Nepal\'s most diverse and rewarding treks, offering an incredible variety of landscapes, cultures, and experiences. This classic route takes you through lush subtropical forests, terraced farmlands, alpine meadows, and high-altitude desert landscapes. Cross the challenging Thorong La Pass at 5,416m, visit the sacred Muktinath Temple, and enjoy stunning sunrise views from Poon Hill.',
      difficulty: 'Moderate to Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,416m (17,769ft) at Thorong La Pass',
      accommodation: 'Tea houses and lodges with varying amenities',
      meals: 'All meals included during trek',
      physicalFitness: 'Good physical fitness required. Ability to walk 6-8 hours daily. Some previous trekking experience helpful.',
      culturalExperience: 'Experience diverse ethnic communities including Gurung, Magar, and Thakali cultures. Visit ancient monasteries and temples.',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: 'Gokyo Lakes Trek',
      duration: '12 Days',
      price: '$2,199',
      location: 'Everest Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      description: 'Discover the pristine turquoise lakes and climb Gokyo Ri for spectacular mountain views.',
      highlights: ['Gokyo Lakes', 'Gokyo Ri Summit', 'Cho La Pass', 'Ngozumpa Glacier'],
      detailedDescription: 'The Gokyo Lakes Trek offers a spectacular alternative to the traditional Everest Base Camp route. This journey takes you to the pristine turquoise lakes of Gokyo, situated at over 4,700m altitude. Climb Gokyo Ri (5,357m) for panoramic views of four 8,000m peaks including Everest, Lhotse, Makalu, and Cho Oyu.',
      difficulty: 'Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,357m (17,575ft) at Gokyo Ri',
      rating: 4.8,
      reviews: 76
    },
    {
      id: 4,
      title: 'Manaslu Circuit Trek',
      duration: '16 Days',
      price: '$2,599',
      location: 'Manaslu Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
      description: 'Off-the-beaten-path adventure around the eighth highest mountain in the world.',
      highlights: ['Larkya La Pass', 'Manaslu Base Camp', 'Tibetan Culture', 'Remote Villages'],
      detailedDescription: 'The Manaslu Circuit Trek is a hidden gem that offers an authentic Himalayan experience away from the crowds. This challenging trek circumnavigates Mount Manaslu (8,163m), the eighth highest peak in the world, through remote villages, ancient monasteries, and pristine wilderness.',
      difficulty: 'Very Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,106m (16,752ft) at Larkya La Pass',
      rating: 4.8,
      reviews: 64
    },
    {
      id: 5,
      title: 'Langtang Valley Trek',
      duration: '10 Days',
      price: '$1,299',
      location: 'Langtang Region',
      groupSize: '6-12 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
      description: 'Discover the valley of glaciers with stunning mountain views and Tamang culture.',
      highlights: ['Kyanjin Gompa', 'Langtang Lirung', 'Tamang Heritage', 'Cheese Factory'],
      detailedDescription: 'The Langtang Valley Trek, known as the "Valley of Glaciers," offers spectacular mountain scenery and rich cultural experiences. This trek takes you through beautiful rhododendron forests, traditional Tamang villages, and up to the sacred Kyanjin Gompa monastery.',
      difficulty: 'Moderate',
      bestTime: 'March-May, September-November',
      altitude: '4,984m (16,352ft) at Kyanjin Ri',
      rating: 4.6,
      reviews: 98
    },
    {
      id: 6,
      title: 'Upper Mustang Trek',
      duration: '12 Days',
      price: '$2,199',
      location: 'Mustang Region',
      groupSize: '4-8 people',
      activity: 'History',
      image: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg',
      description: 'Journey to the forbidden kingdom with ancient Tibetan culture and landscapes.',
      highlights: ['Lo Manthang', 'Ancient Monasteries', 'Tibetan Culture', 'Desert Landscapes'],
      detailedDescription: 'Upper Mustang, the "Last Forbidden Kingdom," offers a unique journey into ancient Tibetan culture and dramatic desert landscapes. This restricted area trek takes you to the medieval walled city of Lo Manthang and ancient cave monasteries.',
      difficulty: 'Moderate',
      bestTime: 'March-November (including monsoon)',
      altitude: '3,840m (12,598ft) at Lo Manthang',
      rating: 4.9,
      
      reviews: 42
    },
    {
      id: 7,
      title: 'Annapurna Base Camp Trek',
      duration: '10 Days',
      price: '$1,599',
      location: 'Annapurna Region',
      groupSize: '8-12 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg',
      description: 'Trek to the sanctuary of the Annapurna massif with 360-degree mountain views.',
      highlights: ['Annapurna Base Camp', 'Machapuchare Base Camp', 'Rhododendron Forests', 'Gurung Culture'],
      detailedDescription: 'The Annapurna Base Camp Trek takes you into the heart of the Annapurna Sanctuary, surrounded by towering peaks over 7,000m. Experience diverse ecosystems from subtropical forests to alpine meadows.',
      difficulty: 'Moderate',
      bestTime: 'March-May, September-November',
      altitude: '4,130m (13,549ft) at Annapurna Base Camp',
      rating: 4.7,
      reviews: 134
    },
    {
      id: 8,
      title: 'Everest Three Passes Trek',
      duration: '18 Days',
      price: '$3,299',
      location: 'Everest Region',
      groupSize: '6-8 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
      description: 'The ultimate Everest region challenge crossing three high-altitude passes.',
      highlights: ['Renjo La Pass', 'Cho La Pass', 'Kongma La Pass', 'Island Peak Option'],
      detailedDescription: 'The Everest Three Passes Trek is the ultimate challenge in the Everest region, crossing three high-altitude passes: Renjo La (5,340m), Cho La (5,420m), and Kongma La (5,535m). This comprehensive trek includes Everest Base Camp, Gokyo Lakes, and optional Island Peak climbing.',
      difficulty: 'Very Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,535m (18,159ft) at Kongma La Pass',
      rating: 4.9,
      reviews: 38
    },
    {
      id: 9,
      title: 'Kathmandu Cultural Heritage',
      duration: '5 Days',
      price: '$799',
      location: 'Kathmandu Valley',
      groupSize: '4-8 people',
      activity: 'History',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      description: 'Explore ancient temples, palaces, and UNESCO World Heritage sites.',
      highlights: ['Durbar Square', 'Swayambhunath', 'Pashupatinath', 'Boudhanath'],
      detailedDescription: 'Discover the rich cultural heritage of Kathmandu Valley through its UNESCO World Heritage Sites. This comprehensive tour includes ancient palaces, sacred temples, and traditional architecture spanning over 2,000 years of history.',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      altitude: '1,400m (4,593ft)',
      rating: 4.7,
      reviews: 156
    }
  ];

  const destinations = [
    {
      name: 'Everest Region',
      description: 'Home to the world\'s highest peak and legendary Sherpa culture',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      tours: '15 Tours Available'
    },
    {
      name: 'Annapurna Region',
      description: 'Diverse landscapes from subtropical forests to high alpine terrain',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
      tours: '18 Tours Available'
    },
    {
      name: 'Langtang Region',
      description: 'Valley of glaciers with stunning mountain views and rich culture',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
      tours: '8 Tours Available'
    },
    {
      name: 'Manaslu Region',
      description: 'Off-the-beaten-path adventures around the eighth highest peak',
      image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
      tours: '6 Tours Available'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Ale Tours made our Nepal adventure unforgettable. The attention to detail and local expertise was exceptional.',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional guides, authentic experiences, and seamless organization. Highly recommend for serious travelers.',
      location: 'San Francisco, USA',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg'
    },
    {
      name: 'Emma Thompson',
      rating: 5,
      text: 'The perfect balance of adventure and comfort. Our guide\'s knowledge of Nepal\'s culture was extraordinary.',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg'
    }
  ];

  const handleTourSelect = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section with Full-Size Slideshow */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] max-h-[900px] w-full overflow-hidden flex items-center">
        <HeroSlideshow />
      </section>

      {/* Quick Inquiry Form Section */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">
                Plan Your Perfect Nepal Adventure
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                Get a personalized itinerary crafted by our local experts. Tell us your dreams, 
                and we'll make them reality in the heart of the Himalayas.
              </p>
              <div className="space-y-4">
                {[
                  'Free consultation with local experts',
                  'Customized itinerary based on your interests',
                  'Best price guarantee',
                  '24/7 support during your trip'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full" />
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <QuickInquiryForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Popular Destinations */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-900 transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-4 sm:mb-6 font-playfair">
              Popular Destinations
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Explore Nepal's most spectacular regions, each offering unique landscapes and cultural experiences
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{destination.tours}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100 mb-2 font-playfair">
                    {destination.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Tours */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-4 sm:mb-6 font-playfair">
              Featured Adventures
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular expeditions, carefully crafted for unforgettable experiences
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {featuredTours.slice(0, 9).map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleTourSelect(tour)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-primary-800 dark:text-neutral-100">
                    {tour.duration}
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-accent-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tour.activity}
                  </div>
                  {tour.rating && (
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-primary-800 dark:text-neutral-100">{tour.rating}</span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100 mb-2 font-playfair">
                    {tour.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm sm:text-base">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">From</p>
                      <p className="text-xl sm:text-2xl font-bold text-accent-600">{tour.price}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">per person</p>
                    </div>
                    <motion.button
                      className="bg-accent-600 hover:bg-accent-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2 shadow-lg text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Link
              to="/tours"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              <span>View All Tours</span>
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-900 transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-4 sm:mb-6 font-playfair">
              Why Choose Ale Tours & Travels
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              We go beyond typical tourism to create authentic, transformative experiences
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
            variants={containerVariants}
          >
            {[
              {
                icon: Users,
                title: 'Expert Local Guides',
                description: 'Our passionate local guides share deep cultural knowledge and hidden gems known only to locals.'
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Your safety is our priority with comprehensive insurance, emergency protocols, and experienced guides.'
              },
              {
                icon: Heart,
                title: 'Authentic Experiences',
                description: 'Immerse yourself in genuine local culture through carefully curated interactions and activities.'
              },
              {
                icon: Globe,
                title: 'Sustainable Tourism',
                description: 'We practice responsible tourism that benefits local communities and preserves natural heritage.'
              },
              {
                icon: Award,
                title: 'Award-Winning Service',
                description: 'Recognized for excellence in service and commitment to creating unforgettable experiences.'
              },
              {
                icon: Home,
                title: 'Boutique Accommodations',
                description: 'Stay in handpicked properties that reflect Nepal\'s heritage while providing modern comfort.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-accent-100 dark:bg-accent-900/30 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="text-accent-600 dark:text-accent-400" size={28} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-neutral-100 mb-3 sm:mb-4 font-playfair">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-4 sm:mb-6 font-playfair">
              What Our Travelers Say
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Real experiences from discerning travelers who've journeyed with us
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 italic text-base sm:text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-primary-800 dark:text-neutral-100 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Email Inquiry Form Section removed */}

      {/* Final CTA */}
      <motion.section 
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/85 z-10" />
          <img
            src="https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg"
            alt="Nepal Temple"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div 
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-playfair">
            Your Nepal Adventure Awaits
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-neutral-200 leading-relaxed max-w-3xl mx-auto">
            Join thousands of satisfied travelers who have discovered the magic of Nepal with us. 
            Let us create your perfect Himalayan adventure.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="/tours"
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 shadow-2xl hover:shadow-accent-600/25"
            >
              Explore All Tours
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-200"
            >
              Plan Custom Trip
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Tour Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTour(null);
        }}
      />
    </div>
  );
};

export default HomePage;