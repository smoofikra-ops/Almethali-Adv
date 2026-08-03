import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowLeft, Moon, Globe } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  
  const navBackground = useTransform(scrollY, [0, 50], ["var(--background)", "var(--surface)"]);
  const navShadow = useTransform(scrollY, [0, 50], ["none", "0 1px 2px 0 var(--shadow)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["transparent", "var(--border)"]);

  // Set html attribute for theme
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'corporate' : 'light';
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <motion.nav 
      style={{
        backgroundColor: navBackground,
        boxShadow: navShadow,
        borderBottomColor: navBorder,
      }}
      className="sticky top-0 w-full z-40 border-b transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-2xl text-primary-foreground shadow-lg">
              م
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-text-primary tracking-tight leading-tight">{contactConfig.tradeNameAr}</span>
              <span className="text-xs text-text-secondary font-medium tracking-wide">{contactConfig.tradeNameEn}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <a href="#about" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">
              {language === 'ar' ? 'من نحن' : 'About'}
            </a>
            <a href="#portfolio" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">
              {language === 'ar' ? 'أعمالنا' : 'Portfolio'}
            </a>
            <a href="#quote" className="text-sm font-bold bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md hover:shadow-lg flex items-center gap-2">
              {language === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}
              <ArrowLeft className={`w-4 h-4 ${language === 'en' ? 'rotate-180' : ''}`} />
            </a>
            
            <div className="flex items-center gap-2 border-r border-border pr-4">
              <button onClick={toggleLanguage} className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors p-1" title="Language">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
              </button>
              <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary transition-colors p-1" title="Theme">
                <Moon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center h-20 relative">
          {/* Left Side: Theme & Lang (RTL: Left side of screen) */}
          <div className="flex items-center gap-3">
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-text-secondary hover:text-text-primary p-1">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary p-1">
              <Moon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Center: Logo */}
          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 rtl:translate-x-1/2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-xl text-primary-foreground shadow-sm">
              م
            </div>
            <span className="text-lg font-display font-bold text-text-primary tracking-tight">{contactConfig.tradeNameAr}</span>
          </div>

          {/* Right Side: Hamburger (RTL: Right side of screen) */}
          <button 
            className="p-2 text-text-primary -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 pt-2 pb-4 space-y-2 shadow-lg absolute w-full left-0 top-full">
          <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="block px-3 py-2 rounded-md text-base font-bold text-text-secondary hover:bg-background-alt hover:text-text-primary">{language === 'ar' ? 'الخدمات' : 'Services'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="block px-3 py-2 rounded-md text-base font-bold text-text-secondary hover:bg-background-alt hover:text-text-primary">{language === 'ar' ? 'من نحن' : 'About'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="block px-3 py-2 rounded-md text-base font-bold text-text-secondary hover:bg-background-alt hover:text-text-primary">{language === 'ar' ? 'أعمالنا' : 'Portfolio'}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#quote" className="block px-3 py-2 text-center mt-4 rounded-md text-base font-bold bg-primary text-primary-foreground hover:opacity-90">{language === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}</a>
        </div>
      )}
    </motion.nav>
  );
}
