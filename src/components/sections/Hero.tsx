import { motion } from 'motion/react';
import { contactConfig } from '../../config/contact';
import { videos } from '../../config/videos';
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
      className={`relative w-full overflow-hidden bg-background text-text-primary ${className || ''}`} 
      style={{ height: '100svh', minHeight: '620px', maxHeight: '1000px' }}
    >
      {/* Background Video or Decorative Elements */}
      {videos.hero.desktop ? (
        <div className="absolute inset-0 z-0 bg-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={videos.hero.poster}
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          >
            <source src={videos.hero.desktop} type="video/mp4" />
          </video>
          {/* Gradient to blend with background color */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
            <div className="w-[800px] h-[800px] bg-primary rounded-full blur-3xl opacity-5"></div>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center mt-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-text-primary">شريكك الإستراتيجي المعتمد منذ {contactConfig.established}</span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-text-primary mb-6 leading-tight tracking-tight"
          >
            حلول إعلانية تصنع <br/>
            حضورًا <span className="text-accent">يلفت الأنظار</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-2xl text-text-secondary leading-relaxed mx-auto mb-8 max-w-3xl"
          >
            من التصميم والطباعة إلى تصنيع اللوحات وتجهيز المشاريع والمعارض، نقدم حلولًا متكاملة تجمع بين الإبداع، الجودة ودقة التنفيذ.
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
             {['منذ 2018', 'تصميم وتصنيع وتركيب', 'حلول مخصصة', 'خدمة ما بعد البيع'].map((item, idx) => (
               <div key={idx} className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border shadow-sm">
                 <CheckCircle2 className="w-4 h-4 text-accent" />
                 <span className="text-sm font-bold text-text-secondary">{item}</span>
               </div>
             ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#quote" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              طلب عرض سعر
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/${contactConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-surface text-text-primary border border-border px-8 py-4 rounded-xl font-bold text-base hover:bg-background-alt transition-colors shadow-sm flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-success" />
              تواصل عبر واتساب
            </a>
            <a href="#portfolio" className="w-full sm:w-auto bg-transparent text-text-secondary font-bold text-base hover:text-text-primary transition-colors flex items-center justify-center gap-2 py-4">
              استعرض أعمالنا
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
