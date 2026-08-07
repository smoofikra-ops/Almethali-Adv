import React from 'react';
import { motion } from 'motion/react';
import { servicesConfig } from '../../config/services';
import { ArrowLeft, CheckCircle2, LayoutGrid } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function Services({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const isCorporate = theme === 'corporate';
  const bgClass = isCorporate ? 'bg-primary text-primary-foreground' : 'bg-transparent text-text-primary';
  const titleClass = isCorporate ? 'text-white' : 'text-primary';
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
    </motion.section>
  );
}
