import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/contexts/ThemeContext';
import { AnimationProvider } from './components/contexts/AnimationContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import WhatsAppWidget from './components/ui/WhatsAppWidget';
import { AnimatePresence, motion } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[calc(100vh-80px)] pt-20 sm:pt-24"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

function App() {
  // Add font preloading
  useEffect(() => {
    // Preload fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
    ];
    
    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <ThemeProvider>
      <AnimationProvider>
        <Router>
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 font-inter transition-colors duration-300">
            <AppRoutes />
          </div>
        </Router>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
<Route path="/tours/:id" element={<TourDetails />} />