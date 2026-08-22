import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowLeft, Moon, Sun, Globe } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { images } from '../../config/images';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };

  const isRtl = language === 'ar';
  
  const logoSrc = theme === 'dark' ? images.brand.logoHeaderDark : images.brand.logoHeaderLight;

  const navItems = [
    { id: 'hero', ar: 'الرئيسية', en: 'Home' },
    { id: 'about', ar: 'من نحن', en: 'About' },
    { id: 'services', ar: 'خدماتنا', en: 'Services' },
    { id: 'portfolio', ar: 'مشاريعنا', en: 'Projects' },
    { id: 'contact', ar: 'تواصل معنا', en: 'Contact' },
  ];

  return (
    <nav 
      className={`w-full z-40 transition-all duration-300 relative ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 items-center" style={{ height: 'var(--header-height)' }}>
          
          {/* Logo */}
          <div className="flex items-center justify-start">
            <a href="/" className="flex items-center transition-opacity hover:opacity-80">
              {logoSrc ? (
                 <img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ width: "108.8906px", height: "58px", paddingRight: "-1px", paddingLeft: "0px", paddingBottom: "0px", paddingTop: "0px", marginRight: "1px", marginLeft: "-2px", marginBottom: "0px", borderRadius: "7px", borderWidth: "-6px" }} />
              ) : (
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-surface-elevated/20 border border-border rounded-lg flex items-center justify-center font-display font-bold text-lg text-text-primary shadow-sm">م</div>
                   <span className="text-sm font-display font-bold text-text-primary tracking-tight leading-tight whitespace-nowrap">{contactConfig.tradeNameAr}</span>
                 </div>
              )}
            </a>
          </div>

          {/* Navigation (Mathematically Centered) */}
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="group relative text-sm font-bold text-text-secondary hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-surface-elevated/30 whitespace-nowrap"
              >
                <span className="relative z-10">{isRtl ? item.ar : item.en}</span>
                <span className="absolute inset-0 rounded-full border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="nav-item-highlight"></span>
              </a>
            ))}
          </div>
          
          {/* Controls (Left in RTL, Right in LTR) */}
          <div className="flex items-center gap-2 justify-end">
            <a href="#quote" className="text-sm font-bold bg-accent text-accent-foreground px-4 py-2 rounded-full hover:bg-accent-deep transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
              <ArrowLeft className={`w-4 h-4 ${!isRtl ? 'rotate-180' : ''}`} />
            </a>
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors bg-surface-elevated/10 hover:bg-surface-elevated/20 px-3 py-1.5 rounded-full border border-border" title="Language">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary transition-colors bg-surface-elevated/10 hover:bg-surface-elevated/20 p-2 rounded-full border border-border" title="Theme">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center relative" style={{ height: 'var(--header-height)' }}>
          
          <div className="flex-1 flex justify-start">
            <button 
              className="p-2 text-text-primary -ml-2 rtl:-mr-2 rtl:-ml-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <a href="/" className="flex items-center transition-opacity hover:opacity-80">
              {logoSrc ? (
                 <img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ width: "108.8906px", height: "58px", paddingRight: "-1px", paddingLeft: "0px", paddingBottom: "0px", paddingTop: "0px", marginRight: "1px", marginLeft: "-2px", marginBottom: "0px", borderRadius: "7px", borderWidth: "-6px" }} />
              ) : (
                 <div className="w-8 h-8 bg-surface-elevated/20 border border-border rounded-md flex items-center justify-center font-display font-bold text-lg text-text-primary shadow-sm">م</div>
              )}
            </a>
          </div>

          <div className="flex-1 flex items-center justify-end gap-1">
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-text-secondary hover:text-text-primary p-1">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary transition-colors p-1">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pt-2 pb-6 space-y-2 absolute w-full left-0 top-full shadow-2xl">
          {navItems.map((item) => (
            <a key={item.id} onClick={() => setIsMobileMenuOpen(false)} href={`#${item.id}`} className="block px-4 py-3 rounded-xl text-base font-bold text-text-secondary hover:bg-surface-elevated/20 hover:text-text-primary">
              {isRtl ? item.ar : item.en}
            </a>
          ))}
          <a onClick={() => setIsMobileMenuOpen(false)} href="#quote" className="block px-4 py-3 text-center mt-6 rounded-xl text-base font-bold bg-accent text-accent-foreground hover:bg-accent-deep">
            {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
          </a>
        </div>
      )}
    </nav>
  );
}
