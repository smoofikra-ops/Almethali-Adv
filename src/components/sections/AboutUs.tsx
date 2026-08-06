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
      className={`py-24 bg-transparent text-white ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-md">
            {isRtl ? contentConfig.about.title : contentConfig.about.titleEn || t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-sm">
            {isRtl ? contentConfig.about.description : contentConfig.about.descriptionEn}
          </p>
        </motion.div>
        
        {/* Row 1: Vision & Mission */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-8">
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-5 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-white/10 flex flex-col justify-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 mx-auto border border-white/10">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#10B981]" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4">{t.about.vision}</h3>
            <p className="text-[11px] md:text-lg text-white/70 leading-relaxed">
              {isRtl ? contentConfig.about.vision : contentConfig.about.visionEn}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-5 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-white/10 flex flex-col justify-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 mx-auto border border-white/10">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-[#10B981]" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4">{t.about.mission}</h3>
            <p className="text-[11px] md:text-lg text-white/70 leading-relaxed">
              {isRtl ? contentConfig.about.mission : contentConfig.about.missionEn}
            </p>
          </motion.div>
        </div>

        {/* Row 2: الإبداع والابتكار */}
        <motion.div variants={itemVariants} className="mb-3 md:mb-8">
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 text-[#10B981]">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4">
              {isRtl ? creativityValue?.title : creativityValue?.titleEn}
            </h3>
            <p className="text-xs md:text-lg text-white/70 leading-relaxed max-w-2xl">
              {isRtl ? creativityValue?.desc : creativityValue?.descEn}
            </p>
          </div>
        </motion.div>

        {/* Row 3: الالتزام والمصداقية + رضا العميل */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-white/10 flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 text-[#10B981]">
              <HeartHandshake className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h4 className="text-sm md:text-xl font-bold text-white mb-2">
              {isRtl ? commitmentValue?.title : commitmentValue?.titleEn}
            </h4>
            <p className="text-[11px] md:text-base text-white/70 leading-relaxed">
              {isRtl ? commitmentValue?.desc : commitmentValue?.descEn}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-white/10 flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 text-[#10B981]">
              <Star className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h4 className="text-sm md:text-xl font-bold text-white mb-2">
              {isRtl ? satisfactionValue?.title : satisfactionValue?.titleEn}
            </h4>
            <p className="text-[11px] md:text-base text-white/70 leading-relaxed">
              {isRtl ? satisfactionValue?.desc : satisfactionValue?.descEn}
            </p>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
