import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowLeft, Moon, Globe } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { images } from '../../config/images';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  
  const navBackground = useTransform(scrollY, [0, 50], ["rgba(0,0,0,0)", "rgba(0,0,0,0.4)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0)", "rgba(255,255,255,0.05)"]);
  const navBackdrop = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'corporate' : 'light';
    document.documentElement.setAttribute('data-theme', next);
  };

  const isRtl = language === 'ar';

  return (
    <motion.nav 
      style={{
        backgroundColor: navBackground,
        borderBottomColor: navBorder,
        backdropFilter: navBackdrop,
      }}
      className="w-full z-40 border-b transition-all duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center h-20 relative">
          
          {/* Logo (Right in RTL, Left in LTR) */}
          <div className="flex items-center gap-3 w-48 justify-start">
            {images.brand.logoMain ? (
               <img src={images.brand.logoMain} alt={contactConfig.tradeNameAr} className="h-10 w-auto" />
            ) : (
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center font-display font-bold text-xl text-white shadow-sm">م</div>
                 <span className="text-lg font-display font-bold text-white tracking-tight leading-tight">{contactConfig.tradeNameAr}</span>
               </div>
            )}
          </div>

          {/* Navigation (Mathematically Centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8 whitespace-nowrap">
            <a href="#services" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <a href="#about" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
              {language === 'ar' ? 'من نحن' : 'About'}
            </a>
            <a href="#portfolio" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
              {language === 'ar' ? 'أعمالنا' : 'Portfolio'}
            </a>
            <a href="#quote" className="text-sm font-bold bg-[#10B981] text-white px-6 py-2.5 rounded-full hover:bg-[#059669] transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
              {language === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}
              <ArrowLeft className={`w-4 h-4 ${!isRtl ? 'rotate-180' : ''}`} />
            </a>
          </div>
          
          {/* Controls (Left in RTL, Right in LTR) */}
          <div className="flex items-center gap-3 w-48 justify-end">
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10" title="Language">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={toggleTheme} className="text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10" title="Theme">
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center h-20 relative">
          
          <div className="flex items-center justify-start gap-2">
            {images.brand.logoMain ? (
               <img src={images.brand.logoMain} alt={contactConfig.tradeNameAr} className="h-8 w-auto" />
            ) : (
               <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-md flex items-center justify-center font-display font-bold text-lg text-white shadow-sm">م</div>
            )}
          </div>

          <div className="flex items-center justify-end gap-2">
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-white/80 hover:text-white p-1">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button 
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2 absolute w-full left-0 top-full shadow-2xl">
          <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="block px-4 py-3 rounded-xl text-base font-bold text-white/80 hover:bg-white/10 hover:text-white">{language === 'ar' ? 'الخدمات' : 'Services'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="block px-4 py-3 rounded-xl text-base font-bold text-white/80 hover:bg-white/10 hover:text-white">{language === 'ar' ? 'من نحن' : 'About'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="block px-4 py-3 rounded-xl text-base font-bold text-white/80 hover:bg-white/10 hover:text-white">{language === 'ar' ? 'أعمالنا' : 'Portfolio'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#quote" className="block px-4 py-3 text-center mt-6 rounded-xl text-base font-bold bg-[#10B981] text-white hover:bg-[#059669]">{language === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}</a>
        </div>
      )}
    </motion.nav>
  );
}
