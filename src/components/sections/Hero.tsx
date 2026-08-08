import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { images } from '../../config/images';
import { contactConfig } from '../../config/contact';
import { Phone, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

function TypewriterText({ words, isRtl }: { words: string[], isRtl: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting_to_type'>('typing');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Safe bounds check
  const safeIndex = wordIndex % words.length;
  const currentWord = words[safeIndex] || '';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // When language changes, start over
  useEffect(() => {
    setWordIndex(0);
    setText('');
    setPhase('typing');
  }, [words]);

  useEffect(() => {
    if (prefersReducedMotion || !currentWord) {
      setText(words[0] || '');
      return;
    }

    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 80); 
      } else {
        timeout = setTimeout(() => {
          setPhase('pausing');
        }, 150);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, 1500);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 40); 
      } else {
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase('waiting_to_type');
        }, 100);
      }
    } else if (phase === 'waiting_to_type') {
      timeout = setTimeout(() => {
        setPhase('typing');
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, currentWord, prefersReducedMotion, words]);

  const longestWord = [...words].sort((a, b) => b.length - a.length)[0] || '';

  return (
    <span className="inline-block relative text-accent">
      <span className="invisible whitespace-nowrap min-w-[3ch] block w-full text-start" dir={isRtl ? 'rtl' : 'ltr'}>
        {longestWord}
      </span>
      <span className={`absolute top-0 start-0 whitespace-nowrap`} dir={isRtl ? 'rtl' : 'ltr'}>
        {text}
        {!prefersReducedMotion && (
          <span className={`inline-block w-[3px] h-[0.9em] bg-accent align-baseline opacity-80 animate-pulse ms-1`}></span>
        )}
      </span>
    </span>
  );
}



function HeroBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = images.heroSlides || [];
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  
  const SLIDE_DURATION = 6000;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileQuery.matches);
    const mobileListener = (e) => setIsMobile(e.matches);
    mobileQuery.addEventListener('change', mobileListener);
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
      mobileQuery.removeEventListener('change', mobileListener);
    };
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION); 
    
    return () => clearInterval(interval);
  }, [prefersReducedMotion, slides.length, isPaused, currentSlide]);

  const paginate = (newDirection) => {
    const nextSlide = (currentSlide + newDirection + slides.length) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    const threshold = 50;
    if (swipe < -threshold) {
      paginate(isRtl ? -1 : 1);
    } else if (swipe > threshold) {
      paginate(isRtl ? 1 : -1);
    }
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : (isMobile ? 1.02 : 1.05) }}
          animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <picture className="w-full h-full block pointer-events-none">
            <source media="(max-width: 768px)" srcSet={slides[currentSlide].mobileSrc || slides[currentSlide].src} />
            <img 
              src={slides[currentSlide].src} 
              alt={isRtl ? slides[currentSlide].altAr : slides[currentSlide].altEn}
              className="w-full h-full object-cover"
              style={{
                objectPosition: isMobile ? slides[currentSlide].objectPositionMobile : slides[currentSlide].objectPositionDesktop
              }}
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
          </picture>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/50 transition-colors duration-1000 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-accent/20 dark:from-background/95 dark:via-background/80 dark:to-accent/20 transition-colors duration-1000 pointer-events-none"></div>
      
      {/* Slide Indicators & Progress */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 px-4 md:px-12 flex justify-center items-center z-20 pointer-events-none">
          <div className="flex gap-2 items-center pointer-events-auto">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="relative h-1.5 rounded-full overflow-hidden bg-text-primary/20 transition-all duration-300"
                style={{ width: currentSlide === idx ? '2rem' : '0.5rem' }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {currentSlide === idx && !isPaused && !prefersReducedMotion && (
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                )}
                {currentSlide === idx && (isPaused || prefersReducedMotion) && (
                  <div className="absolute top-0 left-0 bottom-0 bg-accent w-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero({ id, theme, className }: SectionComponentProps) {
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;
  const titleVariants = animationRegistry.heroReveal;
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section 
      id={id}
      className={`relative w-full overflow-hidden bg-transparent text-text-primary ${className || ''}`} 
      style={{ height: '100svh', minHeight: '620px', maxHeight: '1000px' }}
    >
      <HeroBackgroundSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center mt-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-surface-elevated/20 backdrop-blur-md border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-text-primary">{t.hero.trustLabel}</span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-text-primary mb-6 leading-tight tracking-tight drop-shadow-lg"
          >
            {t.hero.solutions} <TypewriterText words={t.hero.words} isRtl={isRtl} /> <br/>
            {t.hero.presence}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-2xl text-text-secondary leading-relaxed mx-auto mb-8 max-w-3xl drop-shadow"
          >
            {t.hero.desc}
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 mb-12 w-full max-w-5xl mx-auto relative px-2">
                          {t.hero.trustIndicators.map((item, idx) => (
               <React.Fragment key={idx}>
                 <motion.div 
                   animate={{
                     scale: [1, 1.1, 1, 1, 1],
                     boxShadow: [
                       "0px 0px 0px rgba(0,0,0,0)",
                       "0px 4px 20px rgba(0, 180, 216, 0.3)",
                       "0px 0px 0px rgba(0,0,0,0)",
                       "0px 0px 0px rgba(0,0,0,0)",
                       "0px 0px 0px rgba(0,0,0,0)"
                     ],
                     borderColor: [
                       "var(--border)",
                       "var(--accent)",
                       "var(--border)",
                       "var(--border)",
                       "var(--border)"
                     ]
                   }}
                   transition={{
                     duration: 6,
                     repeat: Infinity,
                     repeatDelay: 0,
                     times: [0, 0.05, 0.1, 0.15, 1],
                     delay: idx * 1.5
                   }}
                   className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 bg-surface-elevated/10 backdrop-blur-sm px-2 sm:px-4 py-2 rounded-lg border border-border shadow-sm relative z-10 min-w-[140px] sm:min-w-0"
                 >
                   <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent shrink-0" />
                   <span className="text-[11px] sm:text-sm font-bold text-text-primary whitespace-nowrap">{item}</span>
                 </motion.div>
                 
                 {idx < t.hero.trustIndicators.length - 1 && (
                   <div className="hidden sm:block w-4 md:w-12 h-[2px] bg-border relative shrink-0 overflow-hidden rounded-full">
                     <motion.div 
                       animate={{
                         opacity: [0, 1, 0, 0, 0],
                         scaleX: [0, 1, 0, 0, 0],
                         x: isRtl ? [20, 0, -20, -20, -20] : [-20, 0, 20, 20, 20]
                       }}
                       transition={{
                         duration: 6,
                         repeat: Infinity,
                         repeatDelay: 0,
                         times: [0.1, 0.15, 0.25, 0.3, 1],
                         delay: idx * 1.5
                       }}
                       className="absolute inset-0 bg-accent rounded-full"
                     />
                   </div>
                 )}
               </React.Fragment>
             ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="#quote" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              {t.hero.quoteBtn}
              <ArrowLeft className={`w-5 h-5 ${!isRtl ? 'rotate-180' : ''}`} />
            </a>
            <a href={`https://wa.me/${contactConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-surface-elevated/20 backdrop-blur-md text-text-primary border border-border px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-elevated/30 transition-colors shadow-sm flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              {t.hero.whatsappBtn}
            </a>
            <a href="#careers" className="w-full sm:w-auto bg-surface-elevated/10 backdrop-blur-md text-text-primary border border-border/50 px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-elevated/20 transition-colors shadow-sm flex items-center justify-center gap-2">
              {t.hero.careersBtn}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
