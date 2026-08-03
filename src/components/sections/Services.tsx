import React, { useState } from 'react';
import { motion } from 'motion/react';
import { servicesConfig } from '../../config/services';
import { Palette, CheckCircle2, Grid, ArrowDown } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

export default function Services({ id, theme, className = '' }: SectionComponentProps) {
  const [showAll, setShowAll] = useState(false);

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
        <motion.div variants={animationRegistry.fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">خدماتنا الرئيسية</h2>
          <p className="text-lg text-text-secondary">نقدم منظومة متكاملة من الخدمات الإعلانية والطباعة لتلبية كافة احتياجاتك.</p>
        </motion.div>
        
        {/* Featured Services */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {servicesConfig.featured.map((service, idx) => (
              <motion.div key={idx} variants={animationRegistry.fadeUp} className="p-6 md:p-8 flex flex-col items-center text-center gap-3 md:gap-4 transition-colors bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-background-alt rounded-2xl flex items-center justify-center shrink-0">
                  <Grid className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm md:text-lg leading-tight mb-1 md:mb-2">{service.title}</h4>
                  <span className="text-xs md:text-sm text-text-muted">{service.en}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {!showAll && (
          <motion.div variants={animationRegistry.fadeUp} className="flex justify-center mb-10">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-transparent text-text-primary border border-border px-8 py-4 rounded-xl font-bold text-base hover:bg-surface transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              استعرض جميع الخدمات
              <ArrowDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Other Service Categories */}
        {showAll && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {servicesConfig.categories.map((category, idx) => {
              return (
                <div key={idx} className="p-6 md:p-8 flex flex-col bg-surface border border-border rounded-2xl shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-background-alt text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{category.arTitle}</h3>
                      <p className="text-sm text-text-muted font-mono">{category.title}</p>
                    </div>
                  </div>
                  
                  <ul className="flex flex-wrap gap-2 md:gap-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-sm font-bold text-text-secondary bg-background-alt px-3 py-2 rounded-lg border border-border">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
