import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, TrendingUp, FileUp } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { servicesConfig } from '../../config/services';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';
import { useLanguage } from '../../context/LanguageContext';

const clientTypes = [
  { ar: 'فرد', en: 'Individual' },
  { ar: 'مؤسسة', en: 'Institution' },
  { ar: 'شركة', en: 'Company' },
  { ar: 'جهة حكومية', en: 'Government Entity' },
  { ar: 'شركة مقاولات', en: 'Contracting Company' },
  { ar: 'مطور عقاري', en: 'Real Estate Developer' },
  { ar: 'مكتب هندسي', en: 'Engineering Office' },
  { ar: 'مصنع', en: 'Factory' },
  { ar: 'مطعم أو مقهى', en: 'Restaurant or Cafe' },
  { ar: 'متجر', en: 'Store' },
  { ar: 'وكالة دعاية وإعلان', en: 'Advertising Agency' },
  { ar: 'معرض أو فعالية', en: 'Exhibition or Event' },
  { ar: 'جهة تعليمية', en: 'Educational Entity' },
  { ar: 'جهة صحية', en: 'Healthcare Entity' },
  { ar: 'أخرى', en: 'Other' }
];

const cities = [
  { ar: 'الرياض', en: 'Riyadh' },
  { ar: 'جدة', en: 'Jeddah' },
  { ar: 'مكة المكرمة', en: 'Makkah' },
  { ar: 'المدينة المنورة', en: 'Madinah' },
  { ar: 'الدمام', en: 'Dammam' },
  { ar: 'الخبر', en: 'Khobar' },
  { ar: 'الظهران', en: 'Dhahran' },
  { ar: 'القصيم', en: 'Qassim' },
  { ar: 'الأحساء', en: 'Al Ahsa' },
  { ar: 'الطائف', en: 'Taif' },
  { ar: 'أبها', en: 'Abha' },
  { ar: 'خميس مشيط', en: 'Khamis Mushait' },
  { ar: 'تبوك', en: 'Tabuk' },
  { ar: 'الجبيل', en: 'Jubail' },
  { ar: 'ينبع', en: 'Yanbu' },
  { ar: 'مدينة أخرى', en: 'Other City' }
];

const executionTimes = [
  { ar: 'عاجل خلال 48 ساعة', en: 'Urgent within 48 hours' },
  { ar: 'خلال أسبوع', en: 'Within a week' },
  { ar: 'خلال أسبوعين', en: 'Within two weeks' },
  { ar: 'خلال شهر', en: 'Within a month' },
  { ar: 'أكثر من شهر', en: 'More than a month' },
  { ar: 'الموعد غير محدد', en: 'Not determined' }
];

export default function QuotationForm({ id, theme, className }: SectionComponentProps) {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  
  const [step, setStep] = useState(1);
  const [step1Error, setStep1Error] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    clientType: '',
    entityName: '',
    phone: '',
    email: '',
    city: '',
    section: '',
    services: [] as string[],
    quantity: '',
    hasDesign: '',
    executionTime: '',
    details: ''
  });

  const containerVariants = animationRegistry.staggerCards;
  const itemVariants = animationRegistry.fadeUp;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      let message = isRtl 
        ? `مرحبًا ${contactConfig.tradeNameAr}،\n\nأرغب في طلب عرض سعر جديد.\n\n`
        : `Hello ${contactConfig.tradeNameEn} \n\nI would like to request a new quote.\n\n`;
      
      message += `${isRtl ? 'الاسم' : 'Name'}: ${formData.name}\n`;
      message += `${isRtl ? 'نوع العميل' : 'Client Type'}: ${formData.clientType}\n`;
      
      if (formData.clientType !== (isRtl ? 'فرد' : 'Individual') && formData.entityName) {
        message += `${isRtl ? 'اسم الجهة أو الشركة' : 'Entity Name'}: ${formData.entityName}\n`;
      }
      
      message += `${isRtl ? 'رقم الجوال' : 'Phone'}: ${formData.phone}\n`;
      
      if (formData.email) {
        message += `البريد الإلكتروني: ${formData.email}\n`;
      }
      
      message += `المدينة: ${formData.city}\n`;
      message += `القسم المطلوب: ${formData.section}\n`;
      message += `الخدمة المطلوبة: ${formData.services.join('، ')}\n`;
      
      if (formData.quantity) {
        message += `الكمية: ${formData.quantity}\n`;
      }
      
      message += `حالة التصميم: ${formData.hasDesign}\n`;
      message += `موعد التنفيذ: ${formData.executionTime}\n`;
      message += `تفاصيل الطلب: ${formData.details}\n\n`;
      message += `يرجى مراجعة الطلب وتزويدي بعرض السعر والتفاصيل.`;
      
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'section') {
      setFormData(prev => ({ ...prev, [name]: value, services: [] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const currentServices = [...prev.services];
      if (currentServices.includes(service)) {
        return { ...prev, services: currentServices.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...currentServices, service] };
      }
    });
  };

  const selectedCategory = servicesConfig.categories.find(c => c.arTitle === formData.section);
  const availableServices = selectedCategory ? selectedCategory.internalServices.map((s: any) => isRtl ? s.arName : s.enName) : [];

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`pt-24 pb-8 md:pb-16 bg-surface text-text-primary relative overflow-hidden ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">{t.quote.title}</h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {t.quote.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:sticky top-32">
            <div className="space-y-8 hidden md:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg">{isRtl ? 'معايير أمان وخصوصية' : 'Security & Privacy Standards'}</h4>
                  <p className="text-text-secondary mt-1">{isRtl ? 'نحن نلتزم بأعلى معايير السرية لبيانات مشاريع عملائنا.' : 'We adhere to the highest standards of confidentiality for our clients\' project data.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg">{isRtl ? 'رد سريع وعرض دقيق' : 'Fast Response & Accurate Quote'}</h4>
                  <p className="text-text-secondary mt-1">{isRtl ? 'نقوم بتحليل طلبك وإرسال عرض السعر في وقت قياسي.' : 'We analyze your request and send the quote in record time.'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-background p-6 md:p-10 rounded-3xl shadow-sm border border-border border-t-4 border-t-primary relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-background-alt -z-10 -translate-y-1/2"></div>
              <div className={`absolute top-1/2 ${isRtl ? 'right-0' : 'left-0'} h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-300`} style={{ width: step === 1 ? '50%' : '100%' }}></div>
              
              <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-text-muted'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-accent text-accent-foreground' : 'bg-background-alt text-text-secondary'}`}>1</div>
                <span className="text-xs font-bold hidden sm:block">{t.quote.step1}</span>
              </div>
              
              <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-text-muted'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-accent text-accent-foreground' : 'bg-background-alt text-text-secondary'}`}>2</div>
                <span className="text-xs font-bold hidden sm:block">{t.quote.step2}</span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleFormSubmit}>
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'الاسم الكامل *' : 'Full Name *'}</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={isRtl ? "اكتب اسمك الكامل" : "Enter your full name"} className={`w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm text-start`} required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'نوع العميل *' : 'Client Type *'}</label>
                      <select name="clientType" value={formData.clientType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm" required>
                        <option value="">{isRtl ? 'اختر نوع العميل' : 'Select Client Type'}</option>
                        {clientTypes.map(opt => <option key={opt.en} value={opt.ar}>{isRtl ? opt.ar : opt.en}</option>)}
                      </select>
                    </div>
                  </div>

                  {formData.clientType && formData.clientType !== 'فرد' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                      <label className="block text-sm font-bold text-text-primary mb-1.5 mt-2">{isRtl ? 'اسم الجهة أو الشركة *' : 'Entity or Company Name *'}</label>
                      <input type="text" name="entityName" value={formData.entityName} onChange={handleChange} placeholder={isRtl ? "اكتب اسم الجهة أو الشركة" : "Enter entity or company name"} className={`w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm text-start`} required />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'رقم الجوال *' : 'Phone Number *'}</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-start text-sm" dir="ltr" placeholder="05xxxxxxxx" required pattern="^(05)[0-9]{8}$" title={isRtl ? "يجب أن يبدأ بـ 05 ويتكون من 10 أرقام" : "Must start with 05 and contain 10 digits"} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'البريد الإلكتروني' : 'Email Address'}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-start text-sm" dir="ltr" placeholder="example@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'المدينة *' : 'City *'}</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm" required>
                      <option value="">{isRtl ? 'اختر المدينة' : 'Select City'}</option>
                      {cities.map(opt => <option key={opt.en} value={opt.ar}>{isRtl ? opt.ar : opt.en}</option>)}
                    </select>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => {
                      if(!formData.name || !formData.clientType || !formData.phone || !formData.city) {
                        setStep1Error(isRtl ? 'يرجى تعبئة جميع الحقول الإلزامية للمتابعة.' : 'Please fill in all required fields to continue.');
                        return;
                      }
                      if (formData.clientType !== (isRtl ? 'فرد' : 'Individual') && !formData.entityName) {
                        setStep1Error(isRtl ? 'يرجى كتابة اسم الجهة أو الشركة.' : 'Please enter the entity or company name.');
                        return;
                      }
                      if (!formData.phone.match(/^(05)[0-9]{8}$/)) {
                        setStep1Error(isRtl ? 'يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05.' : 'Please enter a valid Saudi mobile number starting with 05.');
                        return;
                      }
                      setStep1Error('');
                      setStep(2);
                    }} 
                    className="w-full bg-accent text-accent-foreground px-4 py-4 rounded-xl font-bold text-base hover:bg-accent-deep transition-opacity shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-6"
                  >
                    {isRtl ? 'التالي' : 'Next'}
                    <ArrowLeft className={`w-5 h-5 ${!isRtl ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {step1Error && (
                    <div className="text-destructive text-sm font-bold text-center mt-2">
                      {step1Error}
                    </div>
                  )}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'القسم المطلوب *' : 'Required Section *'}</label>
                    <select name="section" value={formData.section} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm" required>
                      <option value="">{isRtl ? 'اختر القسم' : 'Select Section'}</option>
                      {servicesConfig.categories.map(opt => <option key={opt.arTitle} value={opt.arTitle}>{isRtl ? opt.arTitle : opt.enTitle}</option>)}
                      <option value="غير متأكد وأحتاج استشارة">{isRtl ? 'غير متأكد وأحتاج استشارة' : 'Not sure, I need consultation'}</option>
                    </select>
                  </div>

                  {formData.section && formData.section !== 'غير متأكد وأحتاج استشارة' && availableServices.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                      <label className="block text-sm font-bold text-text-primary mb-2.5">{isRtl ? 'الخدمة المطلوبة *' : 'Required Service *'}</label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map(service => (
                          <label key={service} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${formData.services.includes(service) ? 'bg-accent text-accent-foreground border-accent' : 'bg-surface text-text-secondary border-border hover:border-accent/50'}`}>
                            <input type="checkbox" className="hidden" checked={formData.services.includes(service)} onChange={() => handleServiceToggle(service)} />
                            {service}
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'الكمية المطلوبة' : 'Required Quantity'}</label>
                      <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder={isRtl ? "مثال: 10 قطع أو 200 متر" : "Example: 10 pieces or 200 meters"} className={`w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm text-start`} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'موعد التنفيذ *' : 'Execution Time *'}</label>
                      <select name="executionTime" value={formData.executionTime} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all text-sm" required>
                        <option value="">{isRtl ? 'اختر موعد التنفيذ' : 'Select Execution Time'}</option>
                        {executionTimes.map(opt => <option key={opt.en} value={opt.ar}>{isRtl ? opt.ar : opt.en}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2.5">{isRtl ? 'هل لديك تصميم جاهز؟ *' : 'Do you have a ready design? *'}</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        { ar: 'نعم، لدي تصميم جاهز', en: 'Yes, I have a ready design' }, 
                        { ar: 'لدي تصميم ويحتاج تعديلًا', en: 'I have a design that needs editing' }, 
                        { ar: 'لا، أحتاج التصميم منكم', en: 'No, I need a design from you' }, 
                        { ar: 'غير متأكد', en: 'Not sure' }
                      ].map(opt => (
                        <label key={opt.en} className={`cursor-pointer px-2 py-2 rounded-lg border text-xs font-bold text-center transition-colors ${formData.hasDesign === opt.ar ? 'bg-accent/10 border-accent text-accent' : 'bg-surface border-border text-text-secondary hover:border-border-strong'}`}>
                          <input type="radio" name="hasDesign" value={opt.ar} onChange={handleChange} required className="hidden" />
                          {isRtl ? opt.ar : opt.en}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-1.5">{isRtl ? 'تفاصيل الطلب *' : 'Request Details *'}</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} rows={4} placeholder={isRtl ? "اكتب المقاسات، الخامات، الكمية، موقع التركيب وأي تفاصيل تساعدنا في إعداد عرض السعر." : "Write sizes, materials, quantity, installation location, and any details that help us prepare the quote."} className={`w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent outline-none transition-all resize-none text-sm text-start`} required></textarea>
                  </div>

                  <div className="bg-background-alt border border-border rounded-xl p-4 flex gap-3 items-start">
                    <FileUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary leading-relaxed text-start">
                      <strong className="text-text-primary">{isRtl ? 'إرفاق الملفات:' : 'Attach Files:'}</strong> {isRtl ? 'يمكنك إرسال التصاميم أو الملفات (JPG, PNG, PDF, AI) مباشرة إلى فريقنا عبر الواتساب بعد إرسال هذا الطلب.' : 'You can send designs or files (JPG, PNG, PDF, AI) directly to our team via WhatsApp after submitting this request.'}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="w-1/3 bg-surface text-text-primary border border-border px-4 py-4 rounded-xl font-bold text-base hover:bg-background-alt transition-colors flex items-center justify-center gap-2"
                    >
                      {isRtl ? 'السابق' : 'Previous'}
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting || (formData.section && formData.section !== 'غير متأكد وأحتاج استشارة' && formData.services.length === 0)} 
                      className="w-2/3 bg-accent text-accent-foreground px-4 py-4 rounded-xl font-bold text-base hover:bg-accent-deep transition-opacity shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (isRtl ? 'جارٍ تجهيز الطلب...' : 'Processing request...') : (isRtl ? 'إرسال طلب عرض السعر' : 'Submit Quote Request')}
                      {!isSubmitting && <ArrowLeft className={`w-5 h-5 ${!isRtl ? 'rotate-180' : ''}`} />}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

        {/* Location Map */}
        <motion.div variants={itemVariants} className="mt-16 bg-background rounded-3xl shadow-sm border border-border p-2 md:p-4 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4239.6488377682645!2d46.72762168500106!3d24.66187268414798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05cbc33d0c73%3A0x7fddbdda7082755b!2z2KfZhNmF2KvYp9mE2Yog2YTZhNiv2LnYp9mK2Kkg2YjYp9mE2KfYudmE2KfZhg!5e1!3m2!1sar!2ssa!4v1785977634361!5m2!1sar!2ssa" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}
