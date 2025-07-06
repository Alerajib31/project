import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

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
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const touchStartTime = useRef(0);
  const isSwiping = useRef(false);
  const buttonAreaRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setDirection(1);
    setCurrentSlide(nextIndex);
  };
  
  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setDirection(-1);
    setCurrentSlide(prevIndex);
  };
  
  // Check if the touch/click is on a button or button area
  const isInteractingWithButtons = (e: React.TouchEvent | React.MouseEvent | TouchEvent | MouseEvent) => {
    // Check if we're interacting with the button area
    if (buttonAreaRef.current) {
      const buttonRect = buttonAreaRef.current.getBoundingClientRect();
      
      // Get the client coordinates based on event type
      let clientX, clientY;
      
      if ('touches' in e && e.touches.length > 0) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return false;
      }
      
      // Check if the coordinates are within the button area
      return (
        clientX >= buttonRect.left &&
        clientX <= buttonRect.right &&
        clientY >= buttonRect.top &&
        clientY <= buttonRect.bottom
      );
    }
    
    return false;
  };
  
  // Handle mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't process if we're interacting with buttons
    if (isInteractingWithButtons(e)) return;
    
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    touchStartTime.current = Date.now();
    isDragging.current = true;
    
    // Add event listeners for mouse move and up
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    
    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;
  };
  
  const handleMouseUp = (e: MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;
    
    // Only trigger if horizontal movement is greater than vertical
    // and the movement is significant enough (reduced threshold to 10px)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      if (deltaX > 0) {
        // Moved left, go to next slide
        nextSlide();
      } else {
        // Moved right, go to previous slide
        prevSlide();
      }
    }
    
    isDragging.current = false;
    
    // Remove event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  const handleDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    // Don't start dragging if we're interacting with buttons
    if (isInteractingWithButtons(e as any)) {
      return false; // Prevent drag from starting
    }
    isDragging.current = true;
    return true; // Allow drag to start
  };
  
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Only process drag if we're not interacting with buttons
    if (isInteractingWithButtons(e as any)) return;
    
    // More sensitive drag detection for desktop
    // Reduced threshold from 50px to 20px and velocity from 0.1 to 0.05
    if (Math.abs(info.offset.x) > 20) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    isDragging.current = false;
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't process touch if we're interacting with buttons
    if (isInteractingWithButtons(e)) return;
    
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    isSwiping.current = false; // Reset swiping state
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isInteractingWithButtons(e)) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    // Calculate distance moved
    const deltaX = Math.abs(currentX - touchStartX.current);
    const deltaY = Math.abs(currentY - touchStartY.current);
    
    // If horizontal movement is greater than vertical and exceeds threshold, mark as swiping
    // Reduced threshold from 10px to 5px for more sensitivity
    if (deltaX > deltaY && deltaX > 5) {
      isSwiping.current = true;
      // Prevent default to stop scrolling when swiping horizontally
      e.preventDefault();
    }
    
    touchEndX.current = currentX;
    touchEndY.current = currentY;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isInteractingWithButtons(e)) return;
    
    // Only process if we detected a swipe motion (not just a tap)
    if (!isSwiping.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;
    const timeElapsed = Date.now() - touchStartTime.current;
    
    // Calculate swipe velocity (pixels per millisecond)
    const velocity = Math.abs(deltaX) / timeElapsed;
    
    // More sensitive swipe detection for mobile
    // Reduced threshold from 50px to 30px and velocity from 0.2 to 0.1
    if (
      Math.abs(deltaX) > Math.abs(deltaY) && 
      Math.abs(deltaX) > 30
    ) {
      if (deltaX > 0) {
        // Swiped left, go to next slide
        nextSlide();
      } else {
        // Swiped right, go to previous slide
        prevSlide();
      }
    }
  };

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <div 
      ref={heroSectionRef}
      className="relative w-full h-[80vh] min-h-[400px] max-h-[900px] flex items-center overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      {/* Background Image with AnimatePresence for smooth transitions */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-center"
            draggable="false" // Prevent default image dragging
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </motion.div>
      </AnimatePresence>
      
      {/* Content Overlay with staggered animations */}
      <div className="relative z-20 w-full flex items-center justify-start px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl xl:max-w-5xl py-10 sm:py-16 md:py-20">
          {/* Subtitle */}
          <motion.div 
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key={`subtitle-${currentSlide}`}
            className="text-accent-400 font-medium mb-3 sm:mb-4 md:mb-6 tracking-wider uppercase text-xs sm:text-sm md:text-base lg:text-lg font-inter"
          >
            {slides[currentSlide].subtitle}
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key={`title-${currentSlide}`}
            className="text-white font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-playfair leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            custom={2}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key={`desc-${currentSlide}`}
            className="text-neutral-200 max-w-xl lg:max-w-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl font-inter"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* CTA Buttons with enhanced animations */}
          <motion.div 
            ref={buttonAreaRef}
            custom={3}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key={`cta-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Swipe indicator - subtle hint for users */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-white/70 text-sm font-inter">
        <motion.div 
          initial={{ opacity: 0.7 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
            x: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut", 
            repeat: 2,
            repeatDelay: 1
          }}
          className="flex items-center gap-2"
        >
          <span>Swipe to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlideshow;