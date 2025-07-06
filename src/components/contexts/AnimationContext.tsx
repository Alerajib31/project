import React, { createContext, useContext, useState, useEffect } from 'react';

type AnimationContextType = {
  prefersReducedMotion: boolean;
  enableAnimations: boolean;
  setEnableAnimations: (enable: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  enableAnimations: true,
  setEnableAnimations: () => {}
});

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // If user prefers reduced motion, disable animations by default
  useEffect(() => {
    if (prefersReducedMotion) {
      setEnableAnimations(false);
    }
  }, [prefersReducedMotion]);

  return (
    <AnimationContext.Provider value={{ 
      prefersReducedMotion, 
      enableAnimations, 
      setEnableAnimations 
    }}>
      {children}
    </AnimationContext.Provider>
  );
};