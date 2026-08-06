import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2560'
];

export default function CinematicBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = Math.max(0, Math.min(1, scrollPosition / totalHeight));
      
      const newIndex = Math.min(
        images.length - 1,
        Math.floor(scrollPercentage * images.length)
      );
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex]} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/75"></div>
    </div>
  );
}
