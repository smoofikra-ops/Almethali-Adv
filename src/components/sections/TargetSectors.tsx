import React from 'react';
import { motion } from 'motion/react';
import { User, Building, Building2, Landmark, Store, Globe2 } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

const sectors = [
  { title: 'الجهات الحكومية', titleEn: 'Government Entities', icon: Landmark },
  { title: 'الشركات', titleEn: 'Companies', icon: Building2 },
  { title: 'المشاريع التجارية', titleEn: 'Commercial Projects', icon: Store },
  { title: 'المؤسسات', titleEn: 'Institutions', icon: Building },
  { title: 'كافة القطاعات', titleEn: 'All Sectors', icon: Globe2 },
  { title: 'الأفراد', titleEn: 'Individuals', icon: User },
];

export default function TargetSectors({ id, theme, className = '' }: SectionComponentProps) {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={animationRegistry.staggerCards}
      className={`py-16 bg-transparent border-y border-border/20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p variants={animationRegistry.fadeUp} className="text-sm font-bold text-text-primary/50 uppercase tracking-widest mb-12">
          {isRtl ? 'نخدم الجميع بلا استثناء' : 'WE SERVE EVERYONE WITHOUT EXCEPTION'}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div 
                key={idx} 
                variants={animationRegistry.fadeUp} 
                className="flex flex-col items-center gap-4 bg-surface-elevated/10 backdrop-blur-md p-6 rounded-3xl border border-border shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:bg-surface-elevated/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent group-hover:scale-110 group-hover:text-text-primary transition-all duration-300 border border-border/20 shadow-inner">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="font-display font-bold text-sm md:text-base text-text-primary text-center drop-shadow-sm">
                  {isRtl ? sector.title : sector.titleEn}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
