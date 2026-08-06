import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { contactConfig } from '../../config/contact';
import { Phone, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

function TypewriterText({ words, isRtl }: { words: string[], isRtl: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting_to_type'>('typing');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Reset text if words change (language change)
  useEffect(() => {
    setText('');
    setWordIndex(0);
    setPhase('typing');
  }, [words]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(words[0]);
      return;
    }

    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex] || words[0];

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 85); 
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, 1600);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, 55); 
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase('waiting_to_type');
      }
    } else if (phase === 'waiting_to_type') {
      timeout = setTimeout(() => {
        setPhase('typing');
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, prefersReducedMotion, words]);

  const longestWord = [...words].sort((a, b) => b.length - a.length)[0];

  return (
    <span className="inline-block relative text-accent">
      <span className="invisible whitespace-nowrap">{longestWord}</span>
      <span className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} whitespace-nowrap`} dir={isRtl ? 'rtl' : 'ltr'}>
        {text}
        {!prefersReducedMotion && (
          <span className={`inline-block w-[3px] h-[0.9em] bg-accent align-baseline opacity-80 animate-pulse ${isRtl ? 'mr-1' : 'ml-1'}`}></span>
        )}
      </span>
    </span>
  );
}

export default function Hero({ id, theme, className }: SectionComponentProps) {
  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;
  const titleVariants = animationRegistry.heroReveal;
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

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
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-white/90">{t.hero.trustLabel}</span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
          >
            {t.hero.solutions} <TypewriterText words={t.hero.words} isRtl={isRtl} /> <br/>
            {t.hero.presence}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-2xl text-white/80 leading-relaxed mx-auto mb-8 max-w-3xl drop-shadow"
          >
            {t.hero.desc}
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
             {t.hero.trustIndicators.map((item, idx) => (
               <div key={idx} className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm">
                 <CheckCircle2 className="w-4 h-4 text-accent" />
                 <span className="text-sm font-bold text-white/90">{item}</span>
               </div>
             ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="#quote" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              {t.hero.quoteBtn}
              <ArrowLeft className={`w-5 h-5 ${!isRtl ? 'rotate-180' : ''}`} />
            </a>
            <a href={`https://wa.me/${contactConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-colors shadow-sm flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              {t.hero.whatsappBtn}
            </a>
            <a href="#careers" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors shadow-sm flex items-center justify-center gap-2">
              {t.hero.careersBtn}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
