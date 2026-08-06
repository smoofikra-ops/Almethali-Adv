import React from 'react';
import { motion } from 'motion/react';
import { portfolio } from '../../config/portfolio';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function Portfolio({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  if (portfolio.length === 0) {
    return null;
  }

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={animationRegistry.staggerCards}
      className={`py-24 bg-background text-text-primary ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={animationRegistry.fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">{t.portfolio.title}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isRtl ? "تصفح مجموعة من أعمالنا ومشاريعنا التي نفخر بها، والتي تعكس التزامنا بتقديم الأفضل لعملائنا." : "Browse a collection of our works and projects that we are proud of, reflecting our commitment to delivering the best for our clients."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={animationRegistry.fadeUp}
              className="group rounded-2xl overflow-hidden bg-surface shadow-sm hover:shadow-xl transition-all border border-border"
            >
              <div className="aspect-[4/3] bg-background-alt relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-bold text-sm">
                  {item.image.includes('cloudinary') ? 'CLOUDINARY_IMAGE' : 'IMAGE_PLACEHOLDER'}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                  {(item as any).categoryEn && !isRtl ? (item as any).categoryEn : item.category}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {(item as any).titleEn && !isRtl ? (item as any).titleEn : item.title}
                </h3>
                <p className="text-text-secondary line-clamp-2 text-start">
                  {(item as any).descriptionEn && !isRtl ? (item as any).descriptionEn : item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
