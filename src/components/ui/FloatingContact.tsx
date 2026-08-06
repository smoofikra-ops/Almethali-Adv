import { MessageCircle, Phone } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { useLanguage } from '../../context/LanguageContext';

export default function FloatingContact() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  
  const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(isRtl ? contactConfig.whatsappMessages.ar : contactConfig.whatsappMessages.en)}`;
  
  return (
    <div className={`fixed bottom-6 left-6 z-50 flex flex-col gap-3 md:bottom-10 md:left-10`}>
      <a 
        href={`tel:${contactConfig.phoneLink}`}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-surface-elevated text-text-primary rounded-full shadow-lg shadow-black/10 border border-border transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        
        {/* Tooltip */}
        <div className={`absolute top-1/2 -translate-y-1/2 start-full ms-3 px-3 py-1.5 bg-text-primary text-background text-sm font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
          {isRtl ? 'اتصل بنا' : 'Call Us'}
        </div>
      </a>
      
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        
        {/* Tooltip */}
        <div className={`absolute top-1/2 -translate-y-1/2 start-full ms-3 px-3 py-1.5 bg-[#25D366] text-white text-sm font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
          {isRtl ? 'راسلنا واتساب' : 'WhatsApp Us'}
        </div>
      </a>
    </div>
  );
}
