import React from 'react';
import { motion } from 'motion/react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

const brands = [
  { name: 'شاي استكان', nameEn: 'Estikan Tea' },
  { name: 'لوسيل', nameEn: 'Lusail' },
  { name: 'مسقط', nameEn: 'Muscat' },
];

export default function Clients({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={animationRegistry.staggerCards}
      className={`py-24 border-y border-white/5 bg-transparent relative z-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.p variants={animationRegistry.fadeUp} className="text-sm font-bold text-white/50 uppercase tracking-widest mb-16">{t.testimonials.title}</motion.p>
         
         <div className="flex flex-col gap-8 md:gap-12 items-center justify-center max-w-4xl mx-auto">
           {/* Row 1 */}
           <motion.div variants={animationRegistry.fadeUp} className="w-full md:w-1/2 flex justify-center">
             <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex items-center justify-center hover:bg-white/10 transition-colors shadow-2xl">
               <span className="text-2xl md:text-3xl font-display font-bold text-white">{isRtl ? brands[0].name : brands[0].nameEn}</span>
             </div>
           </motion.div>
           
           {/* Row 2 */}
           <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
             <motion.div variants={animationRegistry.fadeUp} className="w-full md:w-1/2 flex justify-center">
               <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex items-center justify-center hover:bg-white/10 transition-colors shadow-2xl">
                 <span className="text-2xl md:text-3xl font-display font-bold text-white">{isRtl ? brands[1].name : brands[1].nameEn}</span>
               </div>
             </motion.div>
             <motion.div variants={animationRegistry.fadeUp} className="w-full md:w-1/2 flex justify-center">
               <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex items-center justify-center hover:bg-white/10 transition-colors shadow-2xl">
                 <span className="text-2xl md:text-3xl font-display font-bold text-white">{isRtl ? brands[2].name : brands[2].nameEn}</span>
               </div>
             </motion.div>
           </div>
         </div>
      </div>
    </motion.section>
  );
}
