import React from 'react';
import { motion } from 'motion/react';
import { contactConfig } from '../../config/contact';
import { Phone, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

export default function Hero({ id, theme, className }: SectionComponentProps) {
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;
  const titleVariants = animationRegistry.heroReveal;

  return (
    <section 
      id={id}
      className={`relative w-full overflow-hidden bg-transparent text-white ${className || ''}`} 
      style={{ height: '100svh', minHeight: '620px', maxHeight: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center mt-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="text-sm font-bold text-white/90">نحن شريكك الموثوق</span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
          >
            حلول إعلانية تصنع <br/>
            حضورًا <span className="text-primary-light drop-shadow-md">يلفت الأنظار</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-2xl text-white/80 leading-relaxed mx-auto mb-8 max-w-3xl drop-shadow"
          >
            من التصميم والطباعة إلى تصنيع اللوحات وتجهيز المشاريع والمعارض، نقدم حلولًا متكاملة تجمع بين الإبداع، الجودة ودقة التنفيذ.
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
             {['منذ 2018', 'تصميم وتصنيع وتركيب', 'حلول مخصصة', 'خدمة ما بعد البيع'].map((item, idx) => (
               <div key={idx} className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm">
                 <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                 <span className="text-sm font-bold text-white/90">{item}</span>
               </div>
             ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="#quote" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              طلب عرض سعر
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/${contactConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-colors shadow-sm flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-[#10B981]" />
              تواصل عبر واتساب
            </a>
            <a href="#careers" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors shadow-sm flex items-center justify-center gap-2">
              انضم إلينا الآن
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
