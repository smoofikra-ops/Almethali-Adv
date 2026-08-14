import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation, PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface ServiceGalleryStudioProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  mainTitle: string;
  subTitle: string;
  isRtl: boolean;
  initialIndex?: number;
}

export default function ServiceGalleryStudio({
  isOpen,
  onClose,
  images,
  mainTitle,
  subTitle,
  isRtl,
  initialIndex = 0
}: ServiceGalleryStudioProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());
  const [hintVisible, setHintVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const controls = useAnimation();

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDirection(0);
      setHintVisible(true);
      document.body.style.overflow = 'hidden';
      // Basic event hook
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ 
          event: 'service_gallery_open',
          service: mainTitle,
          sub_service: subTitle
        });
      }
    } else {
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ 
          event: 'service_gallery_close',
          service: mainTitle,
          sub_service: subTitle
        });
      }
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, mainTitle, subTitle]);

  // Reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Preloading
  useEffect(() => {
    if (!isOpen || images.length === 0) return;
    
    const indicesToLoad = [
      currentIndex,
      (currentIndex + 1) % images.length,
      (currentIndex - 1 + images.length) % images.length
    ];

    indicesToLoad.forEach(idx => {
      if (!loadedImages.has(idx) && !errorImages.has(idx)) {
        const img = new Image();
        img.src = images[idx];
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(idx));
        };
        img.onerror = () => {
          console.warn(`Gallery: Failed to load image at index ${idx}: ${images[idx]}`);
          setErrorImages(prev => new Set(prev).add(idx));
        };
      }
    });
  }, [currentIndex, isOpen, images, loadedImages, errorImages]);

  const paginate = useCallback((newDirection: number, inputMethod: string = 'button') => {
    if (images.length <= 1) return;
    setHintVisible(false);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ 
        event: newDirection === 1 ? 'service_gallery_next' : 'service_gallery_previous',
        input_method: inputMethod
      });
    }
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        paginate(isRtl ? 1 : -1, 'keyboard');
      } else if (e.key === 'ArrowRight') {
        paginate(isRtl ? -1 : 1, 'keyboard');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isRtl, paginate, onClose]);

  // Drag handling
  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = offset.x;
    const swipeY = offset.y;
    
    // Vertical swipe to close
    if (swipeY > 100 || (swipeY < -100 && velocity.y < -500)) {
      onClose();
      return;
    }

    // Horizontal swipe to navigate
    if (images.length > 1) {
      const swipeThreshold = 50;
      if (swipe > swipeThreshold) {
        paginate(isRtl ? -1 : 1, 'swipe');
      } else if (swipe < -swipeThreshold) {
        paginate(isRtl ? 1 : -1, 'swipe');
      } else {
        // Snap back
        controls.start({ x: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } });
      }
    } else {
      controls.start({ x: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: prefersReducedMotion ? 0 : (direction > 0 ? 1000 : -1000),
      opacity: prefersReducedMotion ? 0 : 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: prefersReducedMotion ? 0 : (direction < 0 ? 1000 : -1000),
      opacity: prefersReducedMotion ? 0 : 0
    })
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141438]/98 backdrop-blur-xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${mainTitle} - ${subTitle}`}
      >
        {/* Header / Controls */}
        <div 
          className="absolute top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-start z-50 pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Titles */}
          <div className="flex flex-col gap-1 pointer-events-auto">
            <h2 className="text-white/70 font-display text-sm font-medium uppercase tracking-wider">{mainTitle}</h2>
            <h3 className="text-white font-display text-lg sm:text-xl md:text-2xl font-bold">{subTitle}</h3>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto z-[110]">
            {images.length > 0 && (
              <div className="bg-white/10 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20">
                <span dir="ltr">{currentIndex + 1} / {images.length}</span>
              </div>
            )}
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="flex items-center gap-2 px-3 sm:px-4 h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={isRtl ? "إغلاق" : "Close"}
              style={{ marginTop: 'max(0px, env(safe-area-inset-top))' }}
            >
              <span className="text-sm font-medium hidden sm:block">{isRtl ? "إغلاق" : "Close"}</span>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Area */}
        <div 
          className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-hidden outline-none pt-24"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length === 0 ? (
            <div className="text-white/50 text-lg flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <X className="w-8 h-8 opacity-50" />
              </div>
              <p>{isRtl ? "لا توجد صور لعرضها" : "No images to display"}</p>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  {!loadedImages.has(currentIndex) && !errorImages.has(currentIndex) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-white/20 border-t-accent rounded-full animate-spin"></div>
                    </div>
                  )}
                  {errorImages.has(currentIndex) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 gap-3">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <X className="w-8 h-8 opacity-50" />
                      </div>
                      <p className="text-sm">{isRtl ? "تعذر تحميل الصورة" : "Image failed to load"}</p>
                    </div>
                  )}
                  <img 
                    src={images[currentIndex]}
                    alt={`${subTitle} - Image ${currentIndex + 1}`}
                    className={`max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg border border-white/10 transition-opacity duration-300 ${loadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'}`}
                    draggable="false"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); paginate(isRtl ? 1 : -1, 'button'); }}
                className="absolute left-2 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-50 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); paginate(isRtl ? -1 : 1, 'button'); }}
                className="absolute right-2 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-50 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          {/* Swipe Hint */}
          <AnimatePresence>
            {hintVisible && images.length > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-md pointer-events-none flex items-center gap-2 border border-white/10 shadow-xl"
              >
                <ChevronLeft className="w-4 h-4 opacity-50" />
                {isRtl ? "اسحب يمينًا أو يسارًا لاستعراض الصور" : "Swipe left or right to browse"}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* ProgressBar */}
          {images.length > 1 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
