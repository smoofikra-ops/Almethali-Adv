import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { faqConfig } from '../../config/faq';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ({ id, theme, className }: SectionComponentProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // Open first one by default
  const [showAll, setShowAll] = useState(false);
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;

  // Show only 4 items initially
  const visibleFaqs = showAll ? faqConfig : faqConfig.slice(0, 4);

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`py-16 md:py-24 bg-background text-text-primary ${className || ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">{t.faq.title}</h2>
          <p className="text-lg text-text-secondary">{isRtl ? "إجابات وافية لأهم استفسارات عملائنا." : "Comprehensive answers to our clients' most important inquiries."}</p>
        </motion.div>
        
        <div className="space-y-3 md:space-y-4">
          {visibleFaqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`border rounded-2xl overflow-hidden bg-surface transition-colors ${activeFaq === idx ? 'border-primary shadow-sm' : 'border-border hover:border-border-strong shadow-sm'}`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-start px-5 py-4 md:px-6 md:py-5 flex items-center justify-between font-bold text-base md:text-lg text-text-primary focus:outline-none"
              >
                {isRtl ? faq.question : faq.questionEn}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === idx ? 'bg-primary text-primary-foreground' : 'bg-background-alt text-text-secondary'}`}>
                   <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div 
                className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-text-secondary leading-relaxed text-sm md:text-base text-start">
                  {isRtl ? faq.answer : faq.answerEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {faqConfig.length > 4 && !showAll && (
          <motion.div variants={itemVariants} className="mt-8 text-center">
             <button 
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text-primary font-bold hover:bg-background-alt transition-colors text-sm"
             >
                <Plus className="w-4 h-4" />
                {isRtl ? "عرض المزيد من الأسئلة" : "View More Questions"}
             </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
