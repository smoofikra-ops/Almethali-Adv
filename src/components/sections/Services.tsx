import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesConfig } from '../../config/services';
import { ArrowLeft, CheckCircle2, LayoutGrid } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';


// Gallery Modal Component
function GalleryModal({ isOpen, onClose, category, isRtl, t }: any) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSelectedImage(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage !== null) setSelectedImage(null);
        else onClose();
      }
      if (e.key === 'ArrowLeft' && selectedImage !== null) {
        navigateLightbox(isRtl ? 1 : -1);
      }
      if (e.key === 'ArrowRight' && selectedImage !== null) {
        navigateLightbox(isRtl ? -1 : 1);
      }
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedImage, isRtl]);

  if (!isOpen || !category) return null;

  // Use cover image as fallback if gallery is empty
  const images = category.gallery && category.gallery.length > 0 ? category.gallery : [category.coverImage];
  const title = isRtl ? category.arTitle : category.enTitle;

  const navigateLightbox = (direction: number) => {
    if (selectedImage === null) return;
    const nextIdx = (selectedImage + direction + images.length) % images.length;
    setSelectedImage(nextIdx);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        className="absolute inset-0 bg-background/95 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: prefersReducedMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4, type: "spring", bounce: 0 }}
        className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface/90 backdrop-blur-md z-20 border-b border-border p-4 md:p-6 flex items-center justify-between">
          <h3 className="font-display font-bold text-2xl text-text-primary">{title}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-elevated/50 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors border border-border"
            aria-label={isRtl ? "إغلاق" : "Close"}
          >
            <span className="sr-only">{isRtl ? "إغلاق" : "Close"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        
        {/* Grid */}
        <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img: string, idx: number) => (
            <div 
              key={idx} 
              className="aspect-square rounded-xl overflow-hidden cursor-pointer group bg-background-alt relative"
              onClick={() => setSelectedImage(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedImage(idx); } }}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transform border border-white/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8M3 3l6 6M3 3v4.8M3 3h4.8"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98 backdrop-blur-lg">
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-[70] flex gap-4">
            <div className="bg-black/50 text-white px-3 py-1.5 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md flex items-center">
              {selectedImage + 1} / {images.length}
            </div>
            <button 
              onClick={() => setSelectedImage(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md"
              aria-label={isRtl ? "إغلاق" : "Close"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <div className="relative w-full max-w-7xl px-4 md:px-16 flex items-center justify-center h-full">
            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); navigateLightbox(isRtl ? 1 : -1); }}
                className="absolute left-2 md:left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-10"
              >
                <ArrowLeft className={`w-6 h-6 ${!isRtl ? 'rotate-180' : ''}`} />
              </button>
            )}
            
            <motion.img 
              key={selectedImage}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              src={images[selectedImage]} 
              alt="" 
              className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl" 
            />
            
            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); navigateLightbox(isRtl ? -1 : 1); }}
                className="absolute right-2 md:right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-10"
              >
                <ArrowLeft className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Service Card Component
function ServiceCard({ category, isRtl, t, index, onOpenGallery }: any) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const title = isRtl ? category.arTitle : category.enTitle;
  const desc = isRtl ? category.arDesc : category.enDesc;
  const subtitle = isRtl ? category.arSubtitle : category.enSubtitle;
  const altText = isRtl ? category.altTextAr : category.altTextEn;
  const topServices = category.internalServices.slice(0, 5);
  const hasMoreServices = category.internalServices.length > 5;
  const moreText = t.services.moreSolutions;
  const ctaText = t.services.exploreWork;
  const hintText = isRtl ? "اضغط لاستكشاف الخدمات" : "Tap to Explore";

  const handleCardClick = () => {
    if (!isFlipped) setIsFlipped(true);
    else setIsFlipped(false); // background click on back returns to front
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent flip back
    onOpenGallery(category);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div 
      id={`service-${category.id}`}
      variants={animationRegistry.fadeUp}
      className="perspective-1000 h-[450px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl target:ring-4 target:ring-accent/50 target:ring-offset-8 target:ring-offset-background scroll-mt-32"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleCardClick}
      aria-expanded={isFlipped}
    >
      <div 
        className="relative w-full h-full transition-all duration-700 rounded-3xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped && !prefersReducedMotion ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Card Front */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-border bg-slate-900"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            opacity: isFlipped && prefersReducedMotion ? 0 : 1,
            transition: prefersReducedMotion ? 'opacity 0.3s' : 'none',
            zIndex: isFlipped ? 0 : 1
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={category.coverImage} 
              alt={altText}
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
          </div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-start rtl:text-right">
            <div className="mb-4 relative">
              <h3 className="font-display font-bold text-2xl text-white mb-1 leading-tight">{title}</h3>
              {subtitle && <h4 className="font-display font-medium text-sm text-accent mb-3 uppercase tracking-wider">{subtitle}</h4>}
              <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 text-white/90 text-xs font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M12 2v8"/><path d="m15.5 4.5-3.5 3.5"/></svg>
                {hintText}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <LayoutGrid className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Reverse */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-accent/30 bg-background/95 backdrop-blur-xl p-8 flex flex-col justify-between"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: prefersReducedMotion ? 'none' : 'rotateY(180deg)',
            opacity: !isFlipped && prefersReducedMotion ? 0 : 1,
            transition: prefersReducedMotion ? 'opacity 0.3s' : 'none',
            zIndex: isFlipped ? 1 : 0,
            pointerEvents: isFlipped ? 'auto' : 'none'
          }}
        >
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary mb-6 pb-4 border-b border-border flex items-center justify-between">
              {title}
              <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer border border-border">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </div>
            </h3>
            
            <ul className="space-y-3 mb-4">
              {topServices.map((service: string, sIdx: number) => (
                <li key={sIdx} className="flex items-start gap-3 text-sm text-text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            
            {hasMoreServices && (
              <p className="text-xs font-bold text-text-primary/50 mt-4 italic">
                {moreText}
              </p>
            )}
          </div>
          
          <button
            onClick={handleCtaClick}
            className="w-full bg-accent text-text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 mt-auto shadow-md"
            aria-label={ctaText}
          >
            {ctaText}
            <ArrowLeft className={`w-4 h-4 ${!isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const isCorporate = theme === 'corporate';
  const bgClass = isCorporate ? 'bg-primary text-primary-foreground' : 'bg-transparent text-text-primary';
  const titleClass = isCorporate ? 'text-white' : 'text-primary';
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);
  const descClass = isCorporate ? 'text-primary-foreground/80' : 'text-text-secondary';

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={animationRegistry.staggerCards}
      className={`py-24 relative z-10 ${bgClass} ${className}`}
    >
      {isCorporate && (
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/e0zb5lw9/image/upload/v1785982320/almethal_logo_with_trans_text_ws9dmz.png')] bg-fixed bg-center opacity-5 pointer-events-none mix-blend-overlay"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={animationRegistry.fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-6 drop-shadow-md leading-tight ${titleClass}`}>
            {t.services.title}
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed drop-shadow-sm ${descClass}`}>
            {t.services.desc}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesConfig.categories.map((category, idx) => {
            if (!category.enabled) return null;
            
            const title = isRtl ? category.arTitle : category.enTitle;
            const subtitle = isRtl ? category.enTitle : category.arTitle; // Secondary title language
            const desc = isRtl ? category.arDesc : category.enDesc;
            const altText = isRtl ? category.altTextAr : category.altTextEn;
            
            const topServices = category.internalServices.slice(0, 5);
            const hasMoreServices = category.internalServices.length > 5;
            
            const moreText = t.services.moreSolutions;
            const ctaText = t.services.exploreWork;
            
            return (
              <motion.div 
                key={category.id} 
                variants={animationRegistry.fadeUp} 
                className="group perspective-1000 h-[450px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-3xl"
                tabIndex={0}
              >
                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 group-focus:rotate-y-180 rounded-3xl shadow-xl shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40">
                                    {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-border bg-slate-900">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={category.coverImage} 
                        alt={altText}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
                    </div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-start rtl:text-right">
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-2xl text-white mb-1 leading-tight">{title}</h3>
                        <h4 className="font-display font-medium text-sm text-accent mb-3 uppercase tracking-wider">{subtitle}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 self-end rtl:self-start">
                        <LayoutGrid className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Reverse */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-accent/30 bg-background/90 backdrop-blur-xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary mb-6 pb-4 border-b border-border">
                        {title}
                      </h3>
                      
                      <ul className="space-y-3 mb-4">
                        {topServices.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-sm text-text-primary font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {hasMoreServices && (
                        <p className="text-xs font-bold text-text-primary/50 mt-4 italic">
                          {moreText}
                        </p>
                      )}
                    </div>
                    
                    <a 
                                                                  href={
                        category.id === 'advertising-signage' ? 'https://drive.google.com/drive/folders/1AsmFYrqHyZE1NcbVAZBIjMNypMSgwRjS?usp=sharing' :
                        category.id === 'digital-printing-production' ? 'https://drive.google.com/drive/folders/1uWnmw4dTDJZOpxpCeF3uD0I2F0vEKPaV?usp=sharing' :
                        category.id === 'events-conferences' ? 'https://drive.google.com/drive/folders/1ew2w_G32rjaRihaKk76BOIfrlhszJkAd?usp=sharing' :
                        category.id === 'exhibitions-booths' ? 'https://drive.google.com/drive/folders/1XOJeMosCeQjr42ruTLGKPPe24Km9A0E5?usp=sharing' :
                        category.id === 'display-stands' ? 'https://drive.google.com/drive/folders/1dW9H6DK_pA0qMGOW3xVSgvufD92rURUH?usp=sharing' :
                        category.id === 'promotional-gifts' ? 'https://drive.google.com/drive/folders/12qxT1XGQmsFd5ydi7RlWS6G_de_TOkC6?usp=sharing' :
                        '#portfolio'
                      }
                      target={['advertising-signage', 'digital-printing-production', 'events-conferences', 'exhibitions-booths', 'display-stands', 'promotional-gifts'].includes(category.id) ? '_blank' : undefined}
                      rel={['advertising-signage', 'digital-printing-production', 'events-conferences', 'exhibitions-booths', 'display-stands', 'promotional-gifts'].includes(category.id) ? 'noopener noreferrer' : undefined}
                      className="w-full bg-accent text-text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-accent transition-colors flex items-center justify-center gap-2 mt-auto"
                    >
                      {ctaText}
                      <ArrowLeft className={`w-4 h-4 ${!isRtl ? 'rotate-180' : ''}`} />
                    </a>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    
      <AnimatePresence>
        {selectedCategory && (
          <GalleryModal 
            isOpen={!!selectedCategory} 
            onClose={() => setSelectedCategory(null)} 
            category={selectedCategory} 
            isRtl={isRtl} 
            t={t} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
