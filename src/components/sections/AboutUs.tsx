import { motion } from 'motion/react';
import { contentConfig } from '../../config/content';
import { Target, Lightbulb, HeartHandshake, Star, Sparkles } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutUs({ id, theme, className }: SectionComponentProps) {
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  
  const values = contentConfig.about.values;
  const creativityValue = values.find(v => v.title.includes('الإبداع')) || values[1];
  const commitmentValue = values.find(v => v.title.includes('الالتزام')) || values[2];
  const satisfactionValue = values.find(v => v.title.includes('رضا')) || values[3];

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`py-24 bg-transparent text-text-primary ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 drop-shadow-md">
            {isRtl ? contentConfig.about.title : contentConfig.about.titleEn || t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed drop-shadow-sm">
            {isRtl ? contentConfig.about.description : contentConfig.about.descriptionEn}
          </p>
        </motion.div>
        
        {/* Row 1: Vision & Mission */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-8">
          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-sm border border-border overflow-hidden flex flex-col justify-center text-center min-h-[300px] md:min-h-[400px] group">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src="https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/06-card-covers/%D8%B1%D8%A4%D9%8A%D8%AA%D9%86%D8%A7.jpg.jpeg" 
                alt={t.about.vision} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            
            <div className="relative z-10 w-full p-5 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 mx-auto border border-white/20 text-white shadow-lg">
                <Target className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 md:mb-4 drop-shadow-md">{t.about.vision}</h3>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed drop-shadow">
                {isRtl ? contentConfig.about.vision : contentConfig.about.visionEn}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-sm border border-border overflow-hidden flex flex-col justify-center text-center min-h-[300px] md:min-h-[400px] group">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src="https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/06-card-covers/%D8%B1%D8%B3%D8%A7%D9%84%D8%AA%D9%86%D8%A7.jpg.jpeg" 
                alt={t.about.mission} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            
            <div className="relative z-10 w-full p-5 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 mx-auto border border-white/20 text-white shadow-lg">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 md:mb-4 drop-shadow-md">{t.about.mission}</h3>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed drop-shadow">
                {isRtl ? contentConfig.about.mission : contentConfig.about.missionEn}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: الإبداع والابتكار */}
        <motion.div variants={itemVariants} className="mb-3 md:mb-8">
          <div className="relative rounded-2xl md:rounded-3xl shadow-sm border border-border overflow-hidden flex flex-col items-center text-center min-h-[300px] md:min-h-[400px] justify-center group">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src="https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/06-card-covers/%D8%A7%D9%84%D8%A7%D8%A8%D8%AF%D8%A7%D8%B9%20%D9%88%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1.jpg.jpeg" 
                alt={isRtl ? creativityValue?.title : creativityValue?.titleEn} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            
            <div className="relative z-10 w-full p-6 md:p-12 flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/20 text-white shadow-lg">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 md:mb-4 drop-shadow-md">
                {isRtl ? creativityValue?.title : creativityValue?.titleEn}
              </h3>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow">
                {isRtl ? creativityValue?.desc : creativityValue?.descEn}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 3: الالتزام والمصداقية + رضا العميل */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          <motion.div variants={itemVariants} className="bg-surface-elevated/10 backdrop-blur-md p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-surface-elevated/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-border text-accent">
              <HeartHandshake className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h4 className="text-sm md:text-xl font-bold text-text-primary mb-2">
              {isRtl ? commitmentValue?.title : commitmentValue?.titleEn}
            </h4>
            <p className="text-[11px] md:text-base text-text-secondary leading-relaxed">
              {isRtl ? commitmentValue?.desc : commitmentValue?.descEn}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface-elevated/10 backdrop-blur-md p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-surface-elevated/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-border text-accent">
              <Star className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h4 className="text-sm md:text-xl font-bold text-text-primary mb-2">
              {isRtl ? satisfactionValue?.title : satisfactionValue?.titleEn}
            </h4>
            <p className="text-[11px] md:text-base text-text-secondary leading-relaxed">
              {isRtl ? satisfactionValue?.desc : satisfactionValue?.descEn}
            </p>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
