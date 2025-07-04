import React, { useState } from 'react';
import { Clock, MapPin, Users, Filter, Search, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TourModal from '../components/ui/TourModal';
import ContactForm from '../components/ui/ContactForm';

const ToursPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    activity: '',
    duration: '',
    priceRange: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      duration: '14 Days',
      price: '$2,299',
      location: 'Everest Region',
      groupSize: '8-12 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      description: 'The ultimate trekking adventure to the base of the world\'s highest peak.',
      highlights: ['Namche Bazaar', 'Tengboche Monastery', 'Kala Patthar', 'Sherpa Culture'],
      detailedDescription: 'Embark on the ultimate Himalayan adventure to Everest Base Camp. This iconic trek takes you through diverse landscapes, from lush rhododendron forests to high-altitude glacial valleys. Experience the warm hospitality of Sherpa communities, visit ancient monasteries, and witness breathtaking mountain vistas including Everest, Lhotse, and Ama Dablam.',
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
        'First aid kit and emergency evacuation insurance'
      ],
      excluded: [
        'International flights to/from Nepal',
        'Nepal visa fees',
        'Travel and rescue insurance',
        'Personal trekking equipment',
        'Tips for guides and porters',
        'Personal expenses (laundry, phone calls, etc.)',
        'Alcoholic beverages and soft drinks'
      ],
      permits: ['Sagarmatha National Park Entry Permit', 'TIMS Card'],
      equipment: ['Sleeping bag (-15°C rating)', 'Down jacket', 'Waterproof jacket', 'Trekking boots'],
      scenicHighlights: ['Mount Everest (8,848m)', 'Lhotse (8,516m)', 'Ama Dablam (6,812m)'],
      safetyMeasures: ['Experienced guides with first aid training', 'Proper acclimatization schedule', 'Emergency evacuation insurance'],
      sustainabilityPractices: ['Leave No Trace principles', 'Support for local communities', 'Eco-friendly practices']
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
      description: 'A diverse trek through rhododendron forests to high alpine passes.',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Poon Hill', 'Hot Springs'],
      detailedDescription: 'The Annapurna Circuit is one of Nepal\'s most diverse and rewarding treks, offering an incredible variety of landscapes, cultures, and experiences. Cross the challenging Thorong La Pass at 5,416m, visit the sacred Muktinath Temple, and enjoy stunning sunrise views from Poon Hill.',
      difficulty: 'Moderate to Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,416m (17,769ft) at Thorong La Pass',
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
      detailedDescription: 'The Gokyo Lakes Trek offers a spectacular alternative to the traditional Everest Base Camp route. This journey takes you to the pristine turquoise lakes of Gokyo, situated at over 4,700m altitude.',
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
      detailedDescription: 'The Manaslu Circuit Trek is a hidden gem that offers an authentic Himalayan experience away from the crowds. This challenging trek circumnavigates Mount Manaslu (8,163m), the eighth highest peak in the world.',
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
      detailedDescription: 'The Langtang Valley Trek, known as the "Valley of Glaciers," offers spectacular mountain scenery and rich cultural experiences through traditional Tamang villages.',
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
      detailedDescription: 'Upper Mustang, the "Last Forbidden Kingdom," offers a unique journey into ancient Tibetan culture and dramatic desert landscapes.',
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
      detailedDescription: 'The Annapurna Base Camp Trek takes you into the heart of the Annapurna Sanctuary, surrounded by towering peaks over 7,000m.',
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
      detailedDescription: 'The Everest Three Passes Trek is the ultimate challenge in the Everest region, crossing three high-altitude passes and including Everest Base Camp and Gokyo Lakes.',
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
      detailedDescription: 'Discover the rich cultural heritage of Kathmandu Valley through its UNESCO World Heritage Sites, including ancient palaces and sacred temples.',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      altitude: '1,400m (4,593ft)',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 10,
      title: 'Chitwan Wildlife Safari',
      duration: '3 Days',
      price: '$599',
      location: 'Chitwan National Park',
      groupSize: '6-12 people',
      activity: 'Wildlife',
      image: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg',
      description: 'Experience Nepal\'s wildlife in this UNESCO World Heritage national park.',
      highlights: ['Rhino Spotting', 'Elephant Safari', 'Bird Watching', 'Canoe Ride'],
      detailedDescription: 'Chitwan National Park offers an incredible wildlife experience with over 700 species of wildlife including one-horned rhinoceros and Bengal tigers.',
      difficulty: 'Easy',
      bestTime: 'October-March',
      altitude: '150m (492ft)',
      wildlifeSpotting: ['One-horned Rhinoceros', 'Bengal Tiger', 'Asian Elephant', 'Sloth Bear'],
      rating: 4.6,
      reviews: 73
    },
    {
      id: 11,
      title: 'Mardi Himal Trek',
      duration: '8 Days',
      price: '$1,199',
      location: 'Annapurna Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
      description: 'A hidden gem trek with spectacular views of Machapuchare and Annapurna South.',
      highlights: ['Mardi Himal Base Camp', 'Machapuchare Views', 'Rhododendron Forests', 'Less Crowded'],
      detailedDescription: 'The Mardi Himal Trek is a relatively new and less crowded route offering spectacular close-up views of Machapuchare (Fishtail) and Annapurna South.',
      difficulty: 'Moderate',
      bestTime: 'March-May, September-November',
      altitude: '4,500m (14,764ft) at Mardi Himal Base Camp',
      rating: 4.7,
      reviews: 89
    },
    {
      id: 12,
      title: 'Luxury Pokhara Retreat',
      duration: '7 Days',
      price: '$1,599',
      location: 'Pokhara',
      groupSize: '2-6 people',
      activity: 'Luxury',
      image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
      description: 'A luxury experience combining adventure with world-class amenities.',
      highlights: ['Phewa Lake', 'Sarangkot Sunrise', 'Luxury Resort', 'Spa Treatments'],
      detailedDescription: 'Experience the beauty of Pokhara in luxury with world-class accommodations, spa treatments, and adventure activities.',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      altitude: '822m (2,697ft)',
      rating: 4.9,
      reviews: 45
    },
    {
      id: 13,
      title: 'Tsum Valley Trek',
      duration: '14 Days',
      price: '$2,399',
      location: 'Manaslu Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
      description: 'Explore the hidden sacred valley with ancient Tibetan Buddhist culture.',
      highlights: ['Mu Gompa', 'Rachen Gompa', 'Tibetan Culture', 'Sacred Valley'],
      detailedDescription: 'The Tsum Valley Trek takes you to a sacred Himalayan pilgrimage valley with pristine mountain scenery and authentic Tibetan Buddhist culture.',
      difficulty: 'Challenging',
      bestTime: 'March-May, September-November',
      altitude: '3,700m (12,139ft) at Mu Gompa',
      rating: 4.8,
      reviews: 52
    },
    {
      id: 14,
      title: 'Dolpo Trek',
      duration: '21 Days',
      price: '$4,299',
      location: 'Dolpo Region',
      groupSize: '4-8 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      description: 'Journey to the remote trans-Himalayan region with unique Bon culture.',
      highlights: ['Phoksundo Lake', 'Shey Gompa', 'Bon Culture', 'Remote Wilderness'],
      detailedDescription: 'The Dolpo Trek ventures into one of Nepal\'s most remote regions, featuring the stunning Phoksundo Lake and ancient Bon monasteries.',
      difficulty: 'Very Challenging',
      bestTime: 'May-September',
      altitude: '5,115m (16,781ft) at Kang La Pass',
      rating: 4.9,
      reviews: 28
    },
    {
      id: 15,
      title: 'Kanchenjunga Base Camp Trek',
      duration: '20 Days',
      price: '$3,799',
      location: 'Kanchenjunga Region',
      groupSize: '6-10 people',
      activity: 'Hiking',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
      description: 'Trek to the base of the world\'s third highest mountain in pristine wilderness.',
      highlights: ['North & South Base Camps', 'Pristine Wilderness', 'Diverse Flora & Fauna', 'Remote Culture'],
      detailedDescription: 'The Kanchenjunga Base Camp Trek is one of Nepal\'s most remote adventures, taking you to both base camps of the world\'s third highest mountain.',
      difficulty: 'Very Challenging',
      bestTime: 'March-May, September-November',
      altitude: '5,143m (16,873ft) at North Base Camp',
      rating: 4.8,
      reviews: 34
    }
  ];

  const activities = ['All', 'Hiking', 'History', 'Wildlife', 'Luxury', 'Culinary'];
  const durations = ['All', '1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];
  const priceRanges = ['All', 'Under $1000', '$1000-$2000', 'Over $2000'];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesActivity = !selectedFilters.activity || selectedFilters.activity === 'All' || 
                           tour.activity === selectedFilters.activity;
    
    const matchesDuration = !selectedFilters.duration || selectedFilters.duration === 'All' ||
                           (selectedFilters.duration === '1-3 Days' && parseInt(tour.duration) <= 3) ||
                           (selectedFilters.duration === '4-7 Days' && parseInt(tour.duration) >= 4 && parseInt(tour.duration) <= 7) ||
                           (selectedFilters.duration === '8-14 Days' && parseInt(tour.duration) >= 8 && parseInt(tour.duration) <= 14) ||
                           (selectedFilters.duration === '15+ Days' && parseInt(tour.duration) >= 15);

    const matchesPrice = !selectedFilters.priceRange || selectedFilters.priceRange === 'All' ||
                        (selectedFilters.priceRange === 'Under $1000' && parseInt(tour.price.replace(/[$,]/g, '')) < 1000) ||
                        (selectedFilters.priceRange === '$1000-$2000' && parseInt(tour.price.replace(/[$,]/g, '')) >= 1000 && parseInt(tour.price.replace(/[$,]/g, '')) <= 2000) ||
                        (selectedFilters.priceRange === 'Over $2000' && parseInt(tour.price.replace(/[$,]/g, '')) > 2000);

    return matchesSearch && matchesActivity && matchesDuration && matchesPrice;
  });

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
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">
            Our Tours
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover Nepal through our carefully curated collection of authentic adventures, 
            from challenging treks to cultural immersions and luxury retreats.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-8 sm:pl-10 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
              />
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
            </div>

            {/* Activity Filter */}
            <select
              value={selectedFilters.activity}
              onChange={(e) => setSelectedFilters({...selectedFilters, activity: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Activity Type</option>
              {activities.map(activity => (
                <option key={activity} value={activity}>{activity}</option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={selectedFilters.duration}
              onChange={(e) => setSelectedFilters({...selectedFilters, duration: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Duration</option>
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedFilters.priceRange}
              onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white dark:bg-neutral-700 text-primary-800 dark:text-neutral-100 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Price Range</option>
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              Showing <span className="font-semibold text-accent-600">{filteredTours.length}</span> of <span className="font-semibold">{tours.length}</span> tours
            </p>
            <button
              onClick={() => {
                setSelectedFilters({ activity: '', duration: '', priceRange: '' });
                setSearchQuery('');
              }}
              className="text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        </motion.div>

        {/* Tours Grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-neutral-200 dark:border-neutral-700"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleTourSelect(tour)}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-accent-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    {tour.activity}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-primary-800 dark:text-neutral-100 shadow-lg">
                    {tour.duration}
                  </div>
                  {tour.rating && (
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
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
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <MapPin size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <Users size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.groupSize}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <Clock size={14} className="mr-2 text-accent-600 flex-shrink-0" />
                      {tour.duration}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded-lg text-xs">
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 3 && (
                        <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-2 py-1 rounded-lg text-xs">
                          +{tour.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">From</p>
                      <p className="text-xl sm:text-2xl font-bold text-accent-600">{tour.price}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">per person</p>
                    </div>
                    <motion.button 
                      className="bg-accent-600 hover:bg-accent-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredTours.length === 0 && (
          <motion.div 
            className="text-center py-12 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Filter className="mx-auto text-neutral-400 mb-4" size={48} />
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">No tours found</h3>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm sm:text-base">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <ContactForm 
            title="Can't Find Your Perfect Adventure?"
            subtitle="Let us create a custom itinerary tailored to your dreams and preferences. Our local experts are here to help."
          />
        </motion.div>
      </div>

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

export default ToursPage;