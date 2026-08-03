import React from 'react';
import { motion } from 'motion/react';
import { User, Building, Building2, Landmark, Store, Globe2 } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

const sectors = [
  { title: 'الأفراد', icon: User },
  { title: 'المؤسسات', icon: Building },
  { title: 'الشركات', icon: Building2 },
  { title: 'الجهات الحكومية', icon: Landmark },
  { title: 'المشاريع التجارية', icon: Store },
  { title: 'كافة القطاعات', icon: Globe2 },
];

export default function TargetSectors({ id, theme, className = '' }: SectionComponentProps) {
  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={animationRegistry.staggerCards}
      className={`py-16 border-y border-border bg-background-alt ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p variants={animationRegistry.fadeUp} className="text-sm font-bold text-text-muted uppercase tracking-widest mb-10">نخدم الجميع بلا استثناء</motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div key={idx} variants={animationRegistry.fadeUp} className="flex flex-col items-center gap-4 bg-surface p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-background-alt flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className="font-display font-bold text-sm md:text-base text-text-primary text-center">{sector.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
