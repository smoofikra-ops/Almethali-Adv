import React from 'react';
import { motion } from 'motion/react';
import { contentConfig } from '../../config/content';
import { images } from '../../config/images';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyChooseUs({ id, theme, className = '' }: SectionComponentProps) {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section id={id} className={`py-24 bg-background text-text-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Left (RTL) / Right (LTR) */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={animationRegistry.fadeUp}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-surface text-primary text-sm font-bold mb-6 border border-border shadow-sm">
              {isRtl ? "نقاط القوة" : "Our Strengths"}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">
              {isRtl ? contentConfig.strengths.title : contentConfig.strengths.titleEn}
            </h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-xl">
              {isRtl ? contentConfig.strengths.description : contentConfig.strengths.descriptionEn}
            </p>
            
            {/* Dynamic Pills Layout */}
            <motion.div 
              variants={animationRegistry.staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {(isRtl ? contentConfig.strengths.points : contentConfig.strengths.pointsEn).map((point, idx) => (
                <motion.div 
                  key={idx} 
                  variants={animationRegistry.fadeUp}
                  className="px-5 py-2.5 bg-surface border border-border rounded-xl text-text-primary font-medium shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-default"
                >
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Area */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={animationRegistry.heroReveal}
            className="w-full lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square bg-surface rounded-3xl overflow-hidden shadow-2xl border border-border relative group">
               {/* Image Placeholder */}
               <div className="absolute inset-0 bg-background-alt opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10" />
               <img src={images.home.about} alt={isRtl ? "نقاط القوة" : "Our Strengths"} className="w-full h-full object-cover relative z-0" />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-full -z-10 blur-[80px] opacity-20"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent rounded-full -z-10 blur-[80px] opacity-20"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
