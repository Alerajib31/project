import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
    title: 'Everest Base Camp Trek',
    subtitle: 'The Ultimate Himalayan Adventure',
    description: 'Journey to the foot of the world\'s highest peak through breathtaking Sherpa villages and ancient monasteries'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg',
    title: 'Annapurna Circuit Trek',
    subtitle: 'Diverse Landscapes & Rich Culture',
    description: 'Experience Nepal\'s most diverse trek from subtropical forests to high alpine deserts'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg',
    title: 'Cultural Heritage Tours',
    subtitle: 'Ancient Temples & Living Traditions',
    description: 'Discover UNESCO World Heritage sites and immerse in Nepal\'s rich cultural tapestry'
  }
];

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[80vh] min-h-[400px] max-h-[900px] flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 w-full flex items-center justify-start px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl xl:max-w-5xl py-10 sm:py-16 md:py-20">
          {/* Subtitle */}
          <div className="text-accent-400 font-medium mb-3 sm:mb-4 md:mb-6 tracking-wider uppercase text-xs sm:text-sm md:text-base lg:text-lg font-inter">
            {slides[currentSlide].subtitle}
          </div>
          
          {/* Main Title */}
          <h1 className="text-white font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-playfair leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {slides[currentSlide].title}
          </h1>
          
          {/* Description */}
          <p className="text-neutral-200 max-w-xl lg:max-w-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl font-inter">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full">
            <Link to="/tours" className="inline-block w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto bg-accent-600 hover:bg-accent-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl font-inter focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 transition-all duration-200 hover-shine"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px -5px rgba(234, 88, 12, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Discover Adventures</span>
              </motion.button>
            </Link>
            
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <motion.button 
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/50 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-inter focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Navigation Dots with enhanced animations */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 sm:space-x-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-colors duration-200 ${
              index === currentSlide
                ? 'bg-accent-500 border-accent-500'
                : 'bg-transparent border-white/50 hover:border-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;