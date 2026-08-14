import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesConfig } from '../../config/services';
import { ArrowLeft, CheckCircle2, LayoutGrid, Pointer} from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';
import PortfolioGrid from '../gallery/PortfolioGrid';


// Gallery Modal Component
function GalleryModal({ isOpen, onClose, category, isRtl, t }: any) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const [hintVisible, setHintVisible] = React.useState(true);

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
      setHintVisible(true);
      // Simulate opening the first image directly if we are in a subservice
      if (category && category.activeSubService) {
        setSelectedImage(0);
      }
    } else {
      document.body.style.overflow = '';
      setSelectedImage(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, category]);

  const images = React.useMemo(() => {
    if (!category) return [];
    if (category.activeSubService) {
      // Direct Drive image discovery is not supported natively without API.
      // We return an empty array to trigger the adapter required message.
      return [];
    }
    return category.gallery && category.gallery.length > 0 ? category.gallery : [category.coverImage];
  }, [category]);

  const navigateLightbox = (direction: number) => {
    if (selectedImage === null || images.length === 0) return;
    setHintVisible(false);
    const nextIdx = (selectedImage + direction + images.length) % images.length;
    setSelectedImage(nextIdx);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage !== null && !category?.activeSubService) setSelectedImage(null);
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
  }, [isOpen, selectedImage, isRtl, images.length, category]);

  // Swipe handling
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe || isRightSwipe) {
      setHintVisible(false);
    }

    if (isLeftSwipe) {
      navigateLightbox(isRtl ? -1 : 1);
    }
    if (isRightSwipe) {
      navigateLightbox(isRtl ? 1 : -1);
    }
  };

  if (!isOpen || !category) return null;

  const title = category.activeSubService 
    ? (isRtl ? category.activeSubService.arName : category.activeSubService.enName)
    : (isRtl ? category.arTitle : category.enTitle);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        className="absolute inset-0 bg-background/95 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: prefersReducedMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4, type: "spring", bounce: 0 }}
        className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl flex flex-col"
      >
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
        
        {selectedImage !== null || category.activeSubService ? (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-corporate-navy/98 backdrop-blur-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="absolute top-4 right-4 z-20 flex gap-4">
               {images.length > 0 && (
                 <div className="bg-corporate-navy/50 text-white px-3 py-1.5 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md flex items-center">
                   {selectedImage !== null ? selectedImage + 1 : 1} / {images.length}
                 </div>
               )}
               <button 
                onClick={() => {
                  if (category.activeSubService) onClose();
                  else setSelectedImage(null);
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            {images.length > 0 ? (
              <>
                {images.length > 1 && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateLightbox(isRtl ? 1 : -1); }}
                    className="absolute left-2 md:left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-10"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                )}
                
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  src={images[selectedImage!]} 
                  alt="" 
                  className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl" 
                />
                
                {images.length > 1 && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateLightbox(isRtl ? -1 : 1); }}
                    className="absolute right-2 md:right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md z-10"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                )}
                
                {hintVisible && images.length > 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pointer-events-none"
                  >
                    {isRtl ? "اسحب يمينًا أو يسارًا لاستعراض الصور" : "Swipe left or right to browse"}
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center text-white px-4 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                </div>
                <h4 className="text-xl font-bold mb-4">{isRtl ? 'مطلوب إعداد ربط مع Google Drive' : 'Google Drive API Integration Required'}</h4>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {isRtl 
                    ? `لعرض الصور الخاصة بخدمة "${title}" مباشرة، يجب إعداد أداة ربط (Media Adapter) لقراءة الملفات من المجلد.`
                    : `To display images for "${title}", a Media Adapter must be configured to read files from the folder.`
                  }
                </p>
                <p className="text-white/50 text-xs font-mono mb-8 p-3 bg-white/5 rounded-lg border border-white/10 break-all">
                  Folder ID: {category.activeSubService?.folderId}
                </p>
                <a 
                  href={category.activeSubService?.driveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-deep transition-colors"
                >
                  {isRtl ? 'عرض المجلد في Google Drive مؤقتاً' : 'View Folder in Google Drive Temporarily'}
                </a>
              </div>
            )}
          </div>
        ) : (
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-corporate-navy/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Ensure the ArrowLeft component is still imported if it was before, I'll use standard SVG for arrows above to avoid dependency issues just in case.
export default function Services({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const isCorporate = theme === 'corporate';
  const bgClass = isCorporate ? 'bg-primary text-primary-foreground' : 'bg-transparent text-text-primary';
  const titleClass = isCorporate ? 'text-white' : 'text-primary';
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);

  React.useEffect(() => {
    const handleHashChange = () => {
      setSelectedCategory(null);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {servicesConfig.categories.map((category, idx) => {
            if (!category.enabled) return null;
            
            const title = isRtl ? category.arTitle : category.enTitle;
            const subtitle = isRtl ? category.enTitle : category.arTitle; // Secondary title language
            const desc = isRtl ? category.arDesc : category.enDesc;
            const altText = isRtl ? category.altTextAr : category.altTextEn;
            
            const topServices = category.internalServices;
            const hasMoreServices = false;
            
            const moreText = t.services.moreSolutions;
            const ctaText = t.services.exploreWork;
            
            // Explicit desktop grid placement to guarantee visual order for the second row
            let gridPlacementClass = "";
            if (category.id === "display-stands") {
              // LEFT explicitly in Row 2
              gridPlacementClass = isRtl 
                ? "lg:col-start-3 lg:col-end-4 lg:row-start-2" 
                : "lg:col-start-1 lg:col-end-2 lg:row-start-2";
            } else if (category.id === "digital-printing-production") {
              // CENTER explicitly in Row 2
              gridPlacementClass = "lg:col-start-2 lg:col-end-3 lg:row-start-2";
            } else if (category.id === "promotional-gifts") {
              // RIGHT explicitly in Row 2
              gridPlacementClass = isRtl 
                ? "lg:col-start-1 lg:col-end-2 lg:row-start-2" 
                : "lg:col-start-3 lg:col-end-4 lg:row-start-2";
            }
            
            return (
              <motion.div 
                key={category.id} 
                variants={animationRegistry.fadeUp} 
                className={`group perspective-[2000px] aspect-[4/5] md:aspect-auto md:h-[350px] lg:h-[450px] transition-transform duration-500 hover:-translate-y-2 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-2xl md:rounded-3xl ${gridPlacementClass}`}
                tabIndex={0}
              >
                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 group-focus:rotate-y-180 rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.25)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.5)]">
                                    {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 bg-corporate-navy relative z-10 before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl before:border before:border-white/10 before:z-20">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={category.coverImage} 
                        alt={altText}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/90 via-corporate-navy/40 to-corporate-navy/10"></div>
                    </div>
                    
                    <div className="absolute inset-0 p-3 pb-4 sm:p-5 md:p-8 flex flex-col items-center justify-center text-center">
                      <div className="mb-2 md:mb-4 px-2">
                        <h3 className="font-display font-bold text-base sm:text-lg md:text-3xl text-white mb-1 md:mb-2 leading-tight drop-shadow-md">{title}</h3>
                        <h4 className="hidden md:block font-display font-medium text-sm lg:text-base text-accent mb-3 uppercase tracking-wider">{subtitle}</h4>
                        <p className="hidden md:block text-white/90 text-sm lg:text-base leading-relaxed line-clamp-3 max-w-sm mx-auto">{desc}</p>
                      </div>
                      
                      {/* Mobile Interaction Cue */}
                      <div className="md:hidden absolute bottom-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-white text-[10px] font-bold leading-none">{isRtl ? 'استعرض المزيد' : 'Explore'}</span>
                        <Pointer className="w-3 h-3 text-accent animate-pulse" />
                      </div>

                      {/* Desktop Interaction Cue */}
                      <div className="hidden md:flex absolute bottom-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20 hover:bg-white/30 transition-colors">
                        <LayoutGrid className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Reverse */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl md:rounded-3xl overflow-hidden border border-accent/30 bg-background/95 backdrop-blur-xl p-3 sm:p-4 md:p-8 flex flex-col justify-between">
                    <div className="overflow-hidden">
                      <h3 className="font-display font-bold text-xs sm:text-sm md:text-xl text-text-primary mb-1.5 sm:mb-2 md:mb-6 pb-1.5 sm:pb-2 md:pb-4 border-b border-border text-center md:text-start">
                        {title}
                      </h3>
                      
                      <ul className="space-y-0.5 sm:space-y-1 md:space-y-3 mb-1.5 sm:mb-2 md:mb-4">
                        {topServices.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1 sm:gap-1.5 md:gap-3 text-[9px] sm:text-[10px] md:text-sm text-text-primary font-medium leading-[1.15] md:leading-normal">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-accent shrink-0 mt-[1px] md:mt-0.5" />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCategory({ ...category, activeSubService: service });
                              }}
                              className="hover:text-accent transition-colors text-start line-clamp-2 md:line-clamp-none"
                            >
                              {isRtl ? service.arName : service.enName}
                            </button>
                          </li>
                        ))}
                      </ul>
                      
                      {hasMoreServices && (
                        <p className="text-[8px] md:text-xs font-bold text-text-primary/50 mt-1 md:mt-4 italic">
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
                      className="w-full bg-accent text-accent-foreground px-1.5 py-1.5 sm:px-2 sm:py-2 md:px-6 md:py-3 rounded-md md:rounded-xl font-bold text-[9px] sm:text-[10px] md:text-sm hover:bg-accent-deep transition-colors flex items-center justify-center gap-1 lg:gap-2 mt-auto shrink-0 shadow-sm hover:shadow-md"
                    >
                      {ctaText}
                      <ArrowLeft className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 ${!isRtl ? 'rotate-180' : ''}`} />
                    </a>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    
      <AnimatePresence>
        {selectedCategory && selectedCategory.activeSubService && (
          <PortfolioGrid
            isOpen={true}
            onClose={() => setSelectedCategory(null)}
            categoryTitle={isRtl ? selectedCategory.arTitle : selectedCategory.enTitle}
            subService={selectedCategory.activeSubService}
            isRtl={isRtl}
          />
        )}
        {selectedCategory && !selectedCategory.activeSubService && (
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
