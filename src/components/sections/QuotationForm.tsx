import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, TrendingUp, FileUp } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { servicesConfig } from '../../config/services';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

const clientTypes = [
  'فرد', 'مؤسسة', 'شركة', 'جهة حكومية', 'شركة مقاولات', 
  'مطور عقاري', 'مكتب هندسي', 'مصنع', 'مطعم أو مقهى', 
  'متجر', 'وكالة دعاية وإعلان', 'معرض أو فعالية', 'جهة تعليمية', 'جهة صحية', 'أخرى'
];

const cities = [
  'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 
  'الخبر', 'الظهران', 'القصيم', 'الأحساء', 'الطائف', 
  'أبها', 'خميس مشيط', 'تبوك', 'الجبيل', 'ينبع', 'مدينة أخرى'
];

const executionTimes = [
  'عاجل خلال 48 ساعة', 'خلال أسبوع', 'خلال أسبوعين', 'خلال شهر', 'أكثر من شهر', 'الموعد غير محدد'
];

export default function QuotationForm({ id, theme, className }: SectionComponentProps) {
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
      let message = `مرحبًا ${contactConfig.tradeNameAr}،\n\nأرغب في طلب عرض سعر جديد.\n\n`;
      message += `الاسم: ${formData.name}\n`;
      message += `نوع العميل: ${formData.clientType}\n`;
      
      if (formData.clientType !== 'فرد' && formData.entityName) {
        message += `اسم الجهة أو الشركة: ${formData.entityName}\n`;
      }
      
      message += `رقم الجوال: ${formData.phone}\n`;
      
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
  const availableServices = selectedCategory ? selectedCategory.items : [];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text Side */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:sticky top-32">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">طلب عرض سعر</h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              قم بتعبئة النموذج وسنتواصل معك في أسرع وقت لتزويدك بعرض سعر مناسب واحترافي يخدم متطلبات مشروعك.
            </p>
            
            <div className="space-y-8 hidden md:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg">معايير أمان وخصوصية</h4>
                  <p className="text-text-secondary mt-1">نحن نلتزم بأعلى معايير السرية لبيانات مشاريع عملائنا.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg">رد سريع وعرض دقيق</h4>
                  <p className="text-text-secondary mt-1">نقوم بتحليل طلبك وإرسال عرض السعر في وقت قياسي.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-background p-6 md:p-10 rounded-3xl shadow-sm border border-border border-t-4 border-t-primary relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-background-alt -z-10 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: step === 1 ? '50%' : '100%' }}></div>
              
              <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-text-muted'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-background-alt text-text-secondary'}`}>1</div>
                <span className="text-xs font-bold hidden sm:block">المعلومات الأساسية</span>
              </div>
              
              <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-text-muted'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-background-alt text-text-secondary'}`}>2</div>
                <span className="text-xs font-bold hidden sm:block">تفاصيل المشروع</span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleFormSubmit}>
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">الاسم الكامل *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="اكتب اسمك الكامل" className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">نوع العميل *</label>
                      <select name="clientType" value={formData.clientType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required>
                        <option value="">اختر نوع العميل</option>
                        {clientTypes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {formData.clientType && formData.clientType !== 'فرد' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                      <label className="block text-sm font-bold text-text-primary mb-1.5 mt-2">اسم الجهة أو الشركة *</label>
                      <input type="text" name="entityName" value={formData.entityName} onChange={handleChange} placeholder="اكتب اسم الجهة أو الشركة" className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">رقم الجوال *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-left text-sm" dir="ltr" placeholder="05xxxxxxxx" required pattern="^(05)[0-9]{8}$" title="يجب أن يبدأ بـ 05 ويتكون من 10 أرقام" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">البريد الإلكتروني</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-left text-sm" dir="ltr" placeholder="example@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-1.5">المدينة *</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required>
                      <option value="">اختر المدينة</option>
                      {cities.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => {
                      if(!formData.name || !formData.clientType || !formData.phone || !formData.city) {
                        setStep1Error('يرجى تعبئة جميع الحقول الإلزامية للمتابعة.');
                        return;
                      }
                      if (formData.clientType !== 'فرد' && !formData.entityName) {
                        setStep1Error('يرجى كتابة اسم الجهة أو الشركة.');
                        return;
                      }
                      if (!formData.phone.match(/^(05)[0-9]{8}$/)) {
                        setStep1Error('يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05.');
                        return;
                      }
                      setStep1Error('');
                      setStep(2);
                    }} 
                    className="w-full bg-primary text-primary-foreground px-4 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-6"
                  >
                    التالي
                    <ArrowLeft className="w-5 h-5" />
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
                    <label className="block text-sm font-bold text-text-primary mb-1.5">القسم المطلوب *</label>
                    <select name="section" value={formData.section} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required>
                      <option value="">اختر القسم</option>
                      {servicesConfig.categories.map(opt => <option key={opt.arTitle} value={opt.arTitle}>{opt.arTitle}</option>)}
                      <option value="غير متأكد وأحتاج استشارة">غير متأكد وأحتاج استشارة</option>
                    </select>
                  </div>

                  {formData.section && formData.section !== 'غير متأكد وأحتاج استشارة' && availableServices.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                      <label className="block text-sm font-bold text-text-primary mb-2.5">الخدمة المطلوبة *</label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map(service => (
                          <label key={service} className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${formData.services.includes(service) ? 'bg-primary text-primary-foreground border-primary' : 'bg-surface text-text-secondary border-border hover:border-primary/50'}`}>
                            <input type="checkbox" className="hidden" checked={formData.services.includes(service)} onChange={() => handleServiceToggle(service)} />
                            {service}
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">الكمية المطلوبة</label>
                      <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="مثال: 10 قطع أو 200 متر" className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-1.5">موعد التنفيذ *</label>
                      <select name="executionTime" value={formData.executionTime} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all text-sm" required>
                        <option value="">اختر موعد التنفيذ</option>
                        {executionTimes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2.5">هل لديك تصميم جاهز؟ *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['نعم، لدي تصميم جاهز', 'لدي تصميم ويحتاج تعديلًا', 'لا، أحتاج التصميم منكم', 'غير متأكد'].map(opt => (
                        <label key={opt} className={`cursor-pointer px-2 py-2 rounded-lg border text-xs font-bold text-center transition-colors ${formData.hasDesign === opt ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-border text-text-secondary hover:border-border-strong'}`}>
                          <input type="radio" name="hasDesign" value={opt} onChange={handleChange} required className="hidden" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-1.5">تفاصيل الطلب *</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} rows={4} placeholder="اكتب المقاسات، الخامات، الكمية، موقع التركيب وأي تفاصيل تساعدنا في إعداد عرض السعر." className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary outline-none transition-all resize-none text-sm" required></textarea>
                  </div>

                  <div className="bg-background-alt border border-border rounded-xl p-4 flex gap-3 items-start">
                    <FileUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <strong className="text-text-primary">إرفاق الملفات:</strong> يمكنك إرسال التصاميم أو الملفات (JPG, PNG, PDF, AI) مباشرة إلى فريقنا عبر الواتساب بعد إرسال هذا الطلب.
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="w-1/3 bg-surface text-text-primary border border-border px-4 py-4 rounded-xl font-bold text-base hover:bg-background-alt transition-colors flex items-center justify-center gap-2"
                    >
                      السابق
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting || (formData.section && formData.section !== 'غير متأكد وأحتاج استشارة' && formData.services.length === 0)} 
                      className="w-2/3 bg-primary text-primary-foreground px-4 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'جارٍ تجهيز الطلب...' : 'إرسال طلب عرض السعر'}
                      {!isSubmitting && <ArrowLeft className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
