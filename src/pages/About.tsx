import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Heart, Users, Target, Leaf, Mountain, Shield, Star } from 'lucide-react';
import EmailInquiryForm from '../components/ui/EmailInquiryForm';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="text-accent-600" size={40} />,
      title: 'Authentic Experiences',
      description: 'We believe in genuine connections with local communities and authentic cultural exchanges that respect and celebrate Nepal\'s rich traditions and heritage.'
    },
    {
      icon: <Leaf className="text-accent-600" size={40} />,
      title: 'Sustainable Tourism',
      description: 'Our unwavering commitment to responsible travel ensures that every adventure benefits local communities while preserving Nepal\'s pristine natural beauty for future generations.'
    },
    {
      icon: <Award className="text-accent-600" size={40} />,
      title: 'Expert Excellence',
      description: 'Our team of passionate local experts and internationally certified guides bring decades of experience and unmatched knowledge of Nepal\'s hidden gems and secret trails.'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Happy Travelers', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Mountain },
    { number: '85+', label: 'Unique Tours', icon: Globe },
    { number: '99.2%', label: 'Satisfaction Rate', icon: Star }
  ];

  const team = [
    {
      name: 'Prakash Gautam',
      position: 'Founder & Lead Guide',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      description: '1+ years guiding experience in the Himalayas. Certified mountaineering instructor, rescue specialist, and passionate advocate for sustainable tourism in Nepal.',
      specialties: ['High Altitude Trekking', 'Mountain Rescue', 'Cultural Tours']
    },
    {
      name: 'Priya Tamang',
      position: 'Cultural Heritage Specialist',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      description: 'Expert in Nepal\'s rich cultural traditions with a Master\'s degree in Anthropology from Tribhuvan University. Specializes in authentic cultural immersion experiences.',
      specialties: ['Cultural Tours', 'Heritage Sites', 'Local Communities']
    },
    {
      name: 'Arjun Ale',
      position: 'Manager',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
      description: '1+ years leading treks throughout Nepal. Wilderness first aid certified with extensive knowledge of flora, fauna, and local ecology of the Himalayas.',
      specialties: ['Wildlife Tours', 'Photography', 'Eco-Tourism']
    }
  ];

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
    <div className="min-h-screen pt-20 sm:pt-24 bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg"
            alt="Nepal Temple"
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
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            About Roots & Routes Tours & Travels
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Born from a passion for Nepal's extraordinary landscapes and rich culture, 
            we create transformative journeys for discerning travelers seeking authentic Himalayan experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-primary-800 dark:bg-neutral-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center text-white group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="bg-accent-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={28} />
                </motion.div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400 mb-2">{stat.number}</p>
                <p className="text-neutral-200 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-6 sm:mb-8 font-playfair">Our Story</h2>
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Founded by a team of passionate Nepali mountaineers with decades 
                  of experience in the Himalayas, Roots & Routes Tours & Travels emerged from a simple yet profound vision: to share 
                  the authentic soul of Nepal with travelers who seek more than just a vacation.
                </p>
                <p>
                  Having guided hundreds of international climbers and trekkers through Nepal's most 
                  challenging terrains, our founders recognized that many visitors were missing the deeper 
                  cultural richness that makes Nepal truly extraordinary. This inspired them to create 
                  a company that would bridge the gap between adventure and authentic cultural immersion.
                </p>
                <p>
                  Today, our team of passionate local experts continues this mission, crafting bespoke 
                  experiences that honor Nepal's ancient traditions while providing the comfort, safety, and 
                  personalized service that discerning travelers expect. Every journey with us is a story 
                  waiting to be told, a memory waiting to be made.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg"
                alt="Ale Sherpa - Founder"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-accent-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-bold text-lg sm:text-xl">Rajesh Gurung</p>
                <p className="text-accent-100 text-sm sm:text-base">Founder & Lead Guide</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-neutral-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make and every experience we create for our valued travelers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-white dark:bg-neutral-700 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-5xl mx-auto text-center" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-8 sm:mb-12 font-playfair">Our Mission & Vision</h2>
            <motion.blockquote 
              className="text-xl sm:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic border-l-4 border-accent-600 pl-6 sm:pl-8 mb-12 sm:mb-16"
              whileHover={{ scale: 1.02 }}
            >
              "To create transformative travel experiences that connect discerning travelers with the authentic 
              soul of Nepal, while supporting local communities and preserving the natural and cultural heritage 
              for future generations."
            </motion.blockquote>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <motion.div 
                className="bg-neutral-50 dark:bg-neutral-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Target className="text-accent-600 mx-auto mb-6" size={48} />
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">Our Vision</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  To be recognized as Nepal's premier boutique travel company, setting the global standard 
                  for authentic, sustainable, and transformative travel experiences in the Himalayas and beyond.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-neutral-50 dark:bg-neutral-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Shield className="text-accent-600 mx-auto mb-6" size={48} />
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-4 font-playfair">Our Commitment</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We pledge to operate with the highest ethical standards, ensuring that every journey 
                  contributes positively to Nepal's economy, environment, and local communities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-neutral-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-neutral-100 mb-6 font-playfair">Meet Our Expert Team</h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Our passionate team of local experts, certified guides, and travel specialists 
              are dedicated to making your Nepal adventure truly unforgettable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 object-cover shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-neutral-100 mb-2 font-playfair">{member.name}</h3>
                <p className="text-accent-600 dark:text-accent-400 mb-4 font-medium">{member.position}</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-3 py-1 rounded-full text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Email Inquiry Form Section */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-800 to-primary-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <EmailInquiryForm 
              title="Ready to Experience Nepal?"
              subtitle="Let us craft a personalized journey that will connect you with the authentic soul of Nepal. Every adventure begins with a conversation."
              className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;