import React, { useState } from 'react';
import { Globe2, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { servicesConfig } from '../../config/services';
import { useLanguage } from '../../context/LanguageContext';

const SocialIconWrapper = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-sm hover:shadow-md text-white hover:bg-white/10">
    {children}
  </a>
);

// Helper for Mobile Accordion
const FooterAccordion = ({ title, children, isOpen, onToggle }: { title: string, children: React.ReactNode, isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="border-b border-white/10 md:border-none md:pb-0 pb-3">
      <button 
        onClick={onToggle} 
        className="w-full flex items-center justify-between md:cursor-default py-3 md:py-0 rtl:text-right ltr:text-left focus:outline-none"
      >
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <ChevronDown className={`w-5 h-5 text-white/50 md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:max-h-none md:opacity-100 ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 md:mt-4'}`}>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('contact');
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  return (
    <footer className="relative z-10 text-white/70 bg-transparent border-t border-white/10">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0"></div>
      <div className="pt-16 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-16">
          
            {/* Brand Col */}
            <div className="lg:col-span-4 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center font-display font-bold text-xl text-white shadow-sm">
                  {isRtl ? "م" : "M"}
                </div>
                <span className="text-2xl font-display font-bold text-white">
                  {isRtl ? contactConfig.tradeNameAr : contactConfig.tradeNameEn}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-white/70">
                {isRtl ? contactConfig.description : contactConfig.descriptionEn || "Integrated advertising solutions."}
              </p>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <SocialIconWrapper href={contactConfig.socials?.facebook || "#"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialIconWrapper>
                <SocialIconWrapper href={contactConfig.socials?.instagram || "#"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                    <defs>
                      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fd5949" />
                        <stop offset="50%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </SocialIconWrapper>
                <SocialIconWrapper href={contactConfig.socials?.twitter || "#"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </SocialIconWrapper>
                <SocialIconWrapper href={`https://wa.me/${contactConfig.whatsappNumber}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#25D366" d="M12.012 2c5.506 0 9.99 4.475 9.99 9.972 0 2.753-1.121 5.342-3.064 7.288A9.92 9.92 0 0111.996 22c-1.745 0-3.46-.453-5.01-1.312L2 22l1.34-4.885A9.878 9.878 0 012.02 11.972c0-5.497 4.484-9.972 9.992-9.972zm0 1.66c-4.593 0-8.332 3.731-8.332 8.312 0 1.543.418 3.036 1.196 4.341l.24.404-.793 2.894 2.964-.777.394.234c1.28.761 2.775 1.163 4.316 1.163 4.594 0 8.332-3.73 8.332-8.312 0-2.22-.865-4.307-2.435-5.877-1.57-1.571-3.657-2.436-5.882-2.436v.054zm4.498 10.978c-.247-.123-1.46-.72-1.687-.803-.227-.083-.393-.123-.558.124-.165.247-.64 .802-.784.966-.145.164-.29.185-.536.061-.248-.123-1.043-.385-1.988-1.23-.736-.657-1.232-1.47-1.377-1.716-.144-.247-.015-.38.108-.503.111-.11.247-.287.371-.432.124-.144.165-.246.248-.411.082-.164.041-.308-.02-.431-.062-.123-.557-1.346-.763-1.84-.2-.482-.403-.418-.557-.425-.145-.008-.31-.01-.475-.01-.165 0-.433.061-.66.308-.227.246-.867.846-.867 2.062 0 1.216.888 2.392 1.011 2.556.124.164 1.745 2.664 4.225 3.735.59.255 1.05.408 1.408.523.593.188 1.134.162 1.56.098.476-.071 1.46-.597 1.666-1.173.206-.576.206-1.07.145-1.173-.062-.103-.227-.164-.474-.287z"/>
                  </svg>
                </SocialIconWrapper>
              </div>
            </div>

            {/* Quick Links Col */}
            <div className="lg:col-span-2">
              <FooterAccordion 
                title={t.footer.quickLinks}
                isOpen={openAccordion === 'links'}
                onToggle={() => toggleAccordion('links')}
              >
                <ul className="space-y-3 pt-2 md:pt-0">
                  <li><a href="#about" className="hover:text-white transition-colors text-sm">{t.nav.about}</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors text-sm">{t.nav.services}</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition-colors text-sm">{t.nav.portfolio}</a></li>
                  <li><a href="#quote" className="hover:text-white transition-colors text-sm">{t.nav.quote}</a></li>
                  <li><a href="#careers" className="hover:text-[#10B981] transition-colors text-sm font-bold">{t.nav.careers}</a></li>
                </ul>
              </FooterAccordion>
            </div>

            {/* Services Col */}
            <div className="lg:col-span-2">
              <FooterAccordion 
                title={t.footer.mainServices}
                isOpen={openAccordion === 'services'}
                onToggle={() => toggleAccordion('services')}
              >
                <ul className="space-y-3 pt-2 md:pt-0">
                  {servicesConfig.categories.slice(0, 4).map((cat, idx) => (
                    <li key={idx}>
                      <a href="#services" className="hover:text-white transition-colors text-sm">
                        {isRtl ? cat.arTitle : cat.enTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterAccordion>
            </div>

            {/* Policies Col */}
            <div className="lg:col-span-2">
              <FooterAccordion 
                title={t.footer.policies}
                isOpen={openAccordion === 'policies'}
                onToggle={() => toggleAccordion('policies')}
              >
                <ul className="space-y-3 pt-2 md:pt-0">
                  <li><a href="#/policies/privacy" className="hover:text-white transition-colors text-sm">{t.footer.privacy}</a></li>
                  <li><a href="#/policies/terms" className="hover:text-white transition-colors text-sm">{t.footer.terms}</a></li>
                  <li><a href="#/policies/usage" className="hover:text-white transition-colors text-sm">{t.footer.usage}</a></li>
                  <li><a href="#/policies/warranty" className="hover:text-white transition-colors text-sm">{t.footer.warranty}</a></li>
                </ul>
              </FooterAccordion>
            </div>

            {/* Contact Col */}
            <div className="lg:col-span-2">
              <FooterAccordion 
                title={t.footer.contact} 
                isOpen={openAccordion === 'contact'}
                onToggle={() => toggleAccordion('contact')}
              >
                <ul className="space-y-4 pt-2 md:pt-0">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-white/70">
                      {isRtl ? contactConfig.address : contactConfig.addressEn || contactConfig.address}<br/>
                      {isRtl ? contactConfig.city : contactConfig.cityEn || contactConfig.city}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#10B981] shrink-0" />
                    <a href={`tel:${contactConfig.phone}`} className="text-sm text-white/70 hover:text-white" dir="ltr">{contactConfig.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#10B981] shrink-0" />
                    <a href={`mailto:${contactConfig.email}`} className="text-sm text-white/70 hover:text-white">{contactConfig.email}</a>
                  </li>
                </ul>
              </FooterAccordion>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">{t.footer.rights} &copy; {new Date().getFullYear()} {isRtl ? contactConfig.tradeNameAr : contactConfig.tradeNameEn}.</p>
            
            <div className="flex gap-4 items-center">
               <a 
                 href="https://nmolabs.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
               >
                 {t.footer.madeWith} <span className="text-red-500/70">❤</span> NmoLabs
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
