import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../config/testimonials';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials({ id, theme, className = '' }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  if (testimonials.length === 0) {
    return null;
  }

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
        <motion.div variants={animationRegistry.fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">{t.testimonials.title}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isRtl ? "نفخر بالثقة التي يوليها لنا شركاؤنا، ونسعى دائماً لتجاوز توقعاتهم." : "We take pride in the trust our partners place in us, and we always strive to exceed their expectations."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              variants={animationRegistry.fadeUp}
              className="bg-surface p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-border/60 hover:border-accent/40 relative group transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className={`w-10 h-10 text-primary opacity-20 absolute top-6 start-6 group-hover:scale-110 transition-transform`} />
              <p className="text-text-secondary mb-8 relative z-10 leading-relaxed text-lg">
                "{(testimonial as any).contentEn && !isRtl ? (testimonial as any).contentEn : testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt border border-border flex items-center justify-center font-bold text-text-muted">
                  {((testimonial as any).nameEn && !isRtl ? (testimonial as any).nameEn : testimonial.name).charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{((testimonial as any).nameEn && !isRtl ? (testimonial as any).nameEn : testimonial.name)}</h4>
                  <p className="text-sm text-text-muted">
                    {((testimonial as any).roleEn && !isRtl ? (testimonial as any).roleEn : testimonial.role)} - {((testimonial as any).companyEn && !isRtl ? (testimonial as any).companyEn : testimonial.company)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
