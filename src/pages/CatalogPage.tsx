import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, FileText, ArrowLeft, Phone, CheckCircle2, FileDown } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { useLanguage } from '../context/LanguageContext';
import { animationRegistry } from '../lib/animations';
import { images } from '../config/images';

// Centralized configuration for the Catalog
export const catalogConfig = {
  catalogPdfUrl: "", // Add official PDF URL here when available
};

export default function CatalogPage() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const t = {
    ar: {
      title: "كتالوج المثالي",
      subtitle: "اكتشف خدمات المثالي وحلولنا الإبداعية وأبرز ما نقدمه لنجاح مشروعك، في كتالوج واحد يمكنك استعراضه أو تحميله والرجوع إليه في أي وقت.",
      downloadBtn: "تحميل الكتالوج PDF",
      viewBtn: "استعرض الكتالوج",
      contentsTitle: "ماذا ستجد في الكتالوج؟",
      contents: [
        "نبذة عن المثالي",
        "خدماتنا",
        "حلول الدعاية والإعلان",
        "المعارض والفعاليات",
        "الاستاندات ووسائل العرض",
        "الهدايا الدعائية",
        "الطباعة والتنفيذ",
        "نماذج من أعمالنا"
      ],
      finalTitle: "وجدت ما يناسب مشروعك؟",
      finalSubtitle: "دعنا نحول فكرتك إلى تنفيذ يليق بعلامتك.",
      quoteBtn: "اطلب عرض سعر",
      whatsappBtn: "تواصل عبر واتساب",
      placeholderTitle: "الكتالوج قيد التجهيز",
      placeholderDesc: "سيتم إتاحة النسخة الرقمية من الكتالوج قريباً للاستعراض والتحميل.",
      closePreview: "إغلاق العرض"
    },
    en: {
      title: "Al-Mithali Catalog",
      subtitle: "Discover Al-Mithali's services, creative solutions, and our top offerings for your project's success in one catalog you can preview or download anytime.",
      downloadBtn: "Download PDF Catalog",
      viewBtn: "Preview Catalog",
      contentsTitle: "What's inside?",
      contents: [
        "About Al-Mithali",
        "Our Services",
        "Advertising Solutions",
        "Exhibitions & Events",
        "Display Stands",
        "Promotional Gifts",
        "Printing & Execution",
        "Work Samples"
      ],
      finalTitle: "Found what suits your project?",
      finalSubtitle: "Let's turn your idea into execution that fits your brand.",
      quoteBtn: "Request a Quote",
      whatsappBtn: "Contact via WhatsApp",
      placeholderTitle: "Catalog in Preparation",
      placeholderDesc: "The digital catalog will be available soon for preview and download.",
      closePreview: "Close Preview"
    }
  };

  const content = t[language];
  const { catalogPdfUrl } = catalogConfig;

  const handleDownload = () => {
    // Basic event tracking hook
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'catalog_download' });
    }
    
    if (catalogPdfUrl) {
      // Force download via a hidden link
      const link = document.createElement('a');
      link.href = catalogPdfUrl;
      link.download = 'Al-Mithali-Catalog.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handlePreview = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'catalog_preview' });
    }
    setIsPreviewOpen(true);
  };

  const handleQuoteClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'catalog_quote_request' });
    }
    window.location.hash = '#quote';
  };

  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'catalog_whatsapp_click' });
    }
    window.open(`https://wa.me/${contactConfig.whatsappNumber}`, '_blank');
  };

  // Track page view
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'catalog_page_view' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <Helmet>
        <title>{content.title} | {isRtl ? contactConfig.tradeNameAr : contactConfig.tradeNameEn}</title>
        <meta name="description" content={content.subtitle} />
        <meta property="og:title" content={`${content.title} | ${isRtl ? contactConfig.tradeNameAr : contactConfig.tradeNameEn}`} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://almthali.com${isRtl ? '/#/catalog' : '/#/en/catalog'}`} />
      </Helmet>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-corporate-navy/5 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-40 -left-40 w-80 h-80 bg-brand-teal-soft/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Catalog Hero */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={animationRegistry.fadeUp}
            className="w-full lg:w-1/2 text-center lg:text-start"
          >
            <div className="inline-flex items-center gap-2 bg-surface-elevated/80 backdrop-blur-md border border-border/60 rounded-full px-5 py-2 mb-6 shadow-sm">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-text-primary">{content.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              {content.title}
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4">
              <button 
                onClick={handleDownload}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-hover transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FileDown className="w-5 h-5 text-accent-soft" />
                {content.downloadBtn}
              </button>
              
              <button 
                onClick={handlePreview}
                className="w-full sm:w-auto bg-surface text-primary border border-border-strong px-8 py-4 rounded-xl font-bold text-base hover:border-accent hover:bg-surface-elevated transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5 text-accent" />
                {content.viewBtn}
              </button>
            </div>
          </motion.div>

          {/* Visual Preview / Cover */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md aspect-[1/1.414] bg-surface-elevated rounded-2xl shadow-2xl border border-border/50 relative overflow-hidden group cursor-pointer" onClick={handlePreview}>
              {/* Fallback Cover */}
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-navy to-brand-teal-deep flex flex-col items-center justify-center p-8 text-center text-white">
                 <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 bg-white/5 backdrop-blur-sm">
                   <img src={images.brand.logoFooterDark || images.brand.logoDark} alt="Al-Mithali" className="w-24 h-24 object-contain opacity-90" />
                 </div>
                 <h2 className="text-3xl font-display font-bold mb-4">{content.title}</h2>
                 <div className="w-12 h-1 bg-accent-soft rounded-full mb-6"></div>
                 <p className="text-white/80 text-sm max-w-[250px] leading-relaxed">
                   {isRtl ? 'الإصدار الرقمي الحصري' : 'Exclusive Digital Edition'}
                 </p>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-corporate-navy/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold">
                  <Eye className="w-5 h-5" />
                  {content.viewBtn}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Summary Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animationRegistry.fadeUp}
          className="bg-surface-elevated/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto shadow-sm relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{content.contentsTitle}</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {content.contents.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-border/40 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-text-primary font-bold text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animationRegistry.staggerCards}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            {content.finalTitle}
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            {content.finalSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <button 
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-accent-deep transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {content.quoteBtn}
              <ArrowLeft className={`w-5 h-5 ${!isRtl ? 'rotate-180' : ''}`} />
            </button>
            <button 
              onClick={handleWhatsappClick}
              className="w-full sm:w-auto bg-surface text-primary border border-border-strong px-8 py-4 rounded-xl font-bold text-base hover:border-accent hover:bg-surface-elevated transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-accent" />
              {content.whatsappBtn}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Inline Preview Modal (Lazy Loaded logically via state) */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-corporate-navy/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full h-full max-w-6xl bg-surface rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border border-white/10"
            >
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-border bg-surface-elevated/50">
                <h3 className="text-lg sm:text-xl font-bold font-display text-primary flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  {content.title}
                </h3>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleDownload}
                    className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary bg-accent/10 hover:bg-accent/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4 text-accent" />
                    {content.downloadBtn}
                  </button>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="w-10 h-10 rounded-full bg-border hover:bg-border-strong flex items-center justify-center text-text-primary transition-colors focus:outline-none"
                    aria-label={content.closePreview}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full bg-background/50 relative overflow-hidden">
                {catalogPdfUrl ? (
                  <iframe 
                    src={`${catalogPdfUrl}#toolbar=0`}
                    className="w-full h-full border-0"
                    title={content.title}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-surface">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                      <FileText className="w-12 h-12 text-accent opacity-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {content.placeholderTitle}
                    </h3>
                    <p className="text-text-secondary max-w-md mx-auto text-lg mb-8">
                      {content.placeholderDesc}
                    </p>
                    <button 
                      onClick={() => setIsPreviewOpen(false)}
                      className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-primary-hover transition-colors shadow-md"
                    >
                      {content.closePreview}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
