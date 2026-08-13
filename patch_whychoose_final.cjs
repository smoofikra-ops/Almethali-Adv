const fs = require('fs');
const content = `import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Lightbulb, Users, MessageSquare, Eye, Truck, ShieldCheck } from 'lucide-react';
import { contentConfig } from '../../config/content';
import { images } from '../../config/images';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

const icons = [
  Target, Award, Lightbulb, Users, MessageSquare, Eye, Truck, ShieldCheck
];

export default function WhyChooseUs({ id, theme, className = '' }: SectionComponentProps) {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  
  const points = isRtl ? contentConfig.strengths.points : contentConfig.strengths.pointsEn;

  return (
    <section id={id} className={\`py-16 md:py-24 bg-background text-text-primary overflow-hidden relative \${className}\`}>
      
      {/* CSS Block for Sequential Animation */}
      <style>{\`
        .sequential-card-anim {
          --shadow-resting: 0 4px 12px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02);
          --shadow-active: 0 12px 30px rgba(2, 136, 166, 0.15), 0 4px 10px rgba(2, 136, 166, 0.08);
          --shadow-active-mobile: 0 8px 20px rgba(2, 136, 166, 0.12), 0 2px 6px rgba(2, 136, 166, 0.06);
          --border-resting: rgba(20, 20, 56, 0.06);
          --border-active: rgba(2, 136, 166, 0.3);
          
          border-width: 1px;
          border-style: solid;
          border-color: var(--border-resting);
          box-shadow: var(--shadow-resting);
        }
        
        .dark .sequential-card-anim {
          --shadow-resting: 0 4px 12px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1);
          --shadow-active: 0 12px 30px rgba(2, 136, 166, 0.25), 0 4px 10px rgba(2, 136, 166, 0.15);
          --shadow-active-mobile: 0 8px 20px rgba(2, 136, 166, 0.2), 0 2px 6px rgba(2, 136, 166, 0.1);
          --border-resting: rgba(255, 255, 255, 0.06);
          --border-active: rgba(102, 194, 179, 0.4);
        }

        @keyframes cardFocus {
          0%, 12%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: var(--shadow-resting);
            border-color: var(--border-resting);
          }
          4%, 8% {
            transform: translateY(-4px) scale(1.02);
            box-shadow: var(--shadow-active);
            border-color: var(--border-active);
          }
        }

        @media (max-width: 768px) {
          @keyframes cardFocus {
            0%, 12%, 100% {
              transform: translateY(0) scale(1);
              box-shadow: var(--shadow-resting);
              border-color: var(--border-resting);
            }
            4%, 8% {
              transform: translateY(-2px) scale(1.01);
              box-shadow: var(--shadow-active-mobile);
              border-color: var(--border-active);
            }
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .sequential-card-anim {
            animation: cardFocus 12s infinite ease-in-out;
          }
        }

        /* Hover state locks in the active appearance on pointer devices */
        @media (hover: hover) and (pointer: fine) {
          .sequential-card-anim:hover {
            animation-play-state: paused;
            transform: translateY(-4px) scale(1.02) !important;
            box-shadow: var(--shadow-active) !important;
            border-color: var(--border-active) !important;
          }
          @media (max-width: 768px) {
            .sequential-card-anim:hover {
              transform: translateY(-2px) scale(1.01) !important;
              box-shadow: var(--shadow-active-mobile) !important;
            }
          }
        }
      \`}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Composition: 2 Columns on Desktop, Stacked on Mobile */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Text (Primary Content) - rendered first, so it flows right on RTL */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={animationRegistry.fadeUp}
            className="w-full lg:w-[45%]"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 sm:mb-6 leading-tight">
              {isRtl ? contentConfig.strengths.title : contentConfig.strengths.titleEn}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {isRtl ? contentConfig.strengths.description : contentConfig.strengths.descriptionEn}
            </p>
          </motion.div>

          {/* Visual Area (Image) - rendered second, so it flows left on RTL */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={animationRegistry.heroReveal}
            className="w-full lg:w-[55%] relative"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
              <img
                src={images.home.about}
                alt={isRtl ? contentConfig.strengths.title : contentConfig.strengths.titleEn}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Refined overlays for depth and corporate feel */}
              <div className="absolute inset-0 bg-corporate-navy/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 dark:ring-white/10 rounded-3xl pointer-events-none"></div>
            </div>
            
            {/* Soft architectural atmospheric glows behind image */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-10 dark:opacity-20 pointer-events-none -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent rounded-full blur-[80px] opacity-10 dark:opacity-20 pointer-events-none -z-10"></div>
          </motion.div>

        </div>

        {/* Benefits Grid: 3 columns Desktop, 2 columns Mobile */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animationRegistry.staggerCards}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-24 relative"
        >
          {/* Subtle background glow for the grid area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-brand-teal-soft/5 dark:bg-brand-teal-soft/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          {points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx}
                variants={animationRegistry.fadeUp}
                className="w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <div 
                  className="sequential-card-anim relative h-full rounded-2xl sm:rounded-3xl bg-surface-elevated/80 dark:bg-surface-elevated/40 backdrop-blur-md p-4 sm:p-5 lg:p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-default"
                  style={{ animationDelay: \`\${idx * 1.2}s\` }}
                >
                  {/* Inner subtle highlight mimicking 3D sculpted edge */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/60 dark:border-white/10 pointer-events-none"></div>
                  
                  {/* Icon Container */}
                  <div className="relative w-10 h-10 min-[390px]:w-12 min-[390px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-surface shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-none dark:bg-surface-elevated border border-border/60 flex items-center justify-center text-accent mb-3 sm:mb-4 lg:mb-6 z-10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 min-[390px]:w-6 min-[390px]:h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display font-bold text-xs sm:text-sm lg:text-base text-text-primary leading-snug z-10">
                    {point}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/sections/WhyChooseUs.tsx', content);
console.log("Written successfully");
