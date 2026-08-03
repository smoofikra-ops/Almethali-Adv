import { motion } from 'motion/react';
import { contentConfig } from '../../config/content';
import { Target, Lightbulb, ShieldCheck, HeartHandshake, Zap, Star } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

const valueIcons = [ShieldCheck, Zap, HeartHandshake, Star];

export default function AboutUs({ id, theme, className }: SectionComponentProps) {
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;

  const values = contentConfig.about.values;
  const mainValue = values[0]; // Or we can just use a general description for the big card
  const smallValues = values.slice(1, 4);

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`py-24 bg-background text-text-primary ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">{contentConfig.about.title}</h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{contentConfig.about.description}</p>
        </motion.div>
        
        {/* Row 1: Vision & Mission (Split Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8 mb-8">
          <motion.div variants={itemVariants} className="bg-surface p-4 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-border flex flex-col justify-center text-center md:text-right">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-background-alt rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-8 border border-border mx-auto md:mx-0">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-base md:text-2xl font-bold text-text-primary mb-2 md:mb-4">رؤيتنا</h3>
            <p className="text-xs md:text-lg text-text-secondary leading-relaxed">{contentConfig.about.vision}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface p-4 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-border flex flex-col justify-center text-center md:text-right">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-background-alt rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-8 border border-border mx-auto md:mx-0">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-base md:text-2xl font-bold text-text-primary mb-2 md:mb-4">رسالتنا</h3>
            <p className="text-xs md:text-lg text-text-secondary leading-relaxed">{contentConfig.about.mission}</p>
          </motion.div>
        </div>

        {/* Row 2: Large Featured Card "Our Values" */}
        <motion.div variants={itemVariants} className="bg-primary text-primary-foreground p-10 md:p-16 rounded-3xl shadow-lg mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">قيمنا المؤسسية</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-0">
              في المثالي، نؤمن بأن نجاحنا ينبع من التزامنا الراسخ بمجموعة من القيم الأساسية التي توجه كل تفاعل مع عملائنا وكل مشروع نقوم بتنفيذه.
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
            <Star className="w-96 h-96" />
          </div>
        </motion.div>

        {/* Row 3: Three smaller value cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {smallValues.map((val, idx) => {
            const Icon = valueIcons[idx + 1] || ShieldCheck;
            const isFirst = idx === 0;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className={`bg-surface p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow group flex flex-col items-center md:items-start text-center md:text-right ${isFirst ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-background-alt rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-accent group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="text-sm md:text-xl font-bold text-text-primary mb-2 md:mb-3">{val.title}</h4>
                <p className="text-xs md:text-base text-text-secondary leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
