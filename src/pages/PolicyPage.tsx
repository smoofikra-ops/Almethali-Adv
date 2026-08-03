import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { animationRegistry } from '../lib/animations';
import { contactConfig } from '../config/contact';

const policiesContent: Record<string, { title: string, content: string }> = {
  privacy: {
    title: 'سياسة الخصوصية',
    content: `
      نحن في ${contactConfig.tradeNameAr} نلتزم بحماية خصوصية عملائنا. توضح هذه السياسة كيف نجمع بياناتك ونستخدمها ونحميها.
      
      1. جمع البيانات:
      نقوم بجمع المعلومات التي تقدمها لنا طواعية عند ملء نماذج التواصل أو طلب عرض سعر، مثل الاسم، البريد الإلكتروني، رقم الهاتف، واسم الشركة.

      2. استخدام البيانات:
      تُستخدم بياناتك لتقديم خدماتنا الإعلانية، التواصل معك بشأن مشاريعك، وتحسين تجربة المستخدم على موقعنا.

      3. حماية البيانات:
      نحن نطبق إجراءات أمنية صارمة لضمان عدم الوصول غير المصرح به إلى معلوماتك الشخصية. لا نقوم ببيع أو مشاركة بياناتك مع جهات خارجية دون موافقتك.

      للاستفسارات المتعلقة بخصوصيتك، يرجى التواصل معنا عبر ${contactConfig.email}.
    `
  },
  terms: {
    title: 'الشروط والأحكام',
    content: `
      مرحباً بكم في ${contactConfig.tradeNameAr}. باستخدامك لموقعنا أو خدماتنا الإعلانية والتسويقية، فإنك توافق على الشروط التالية:

      1. الخدمات:
      نقدم خدمات متنوعة تشمل تصميم الهويات، اللوحات الإعلانية، الطباعة، التسويق الرقمي، وتنظيم المعارض. تخضع كل خدمة لعقد وتفاصيل محددة.

      2. الملكية الفكرية:
      جميع التصاميم والأعمال التي ننتجها تبقى ملكاً لـ ${contactConfig.tradeNameAr} حتى يتم تسليمها بالكامل ودفع كافة المستحقات المتفق عليها.

      3. الدفع والأسعار:
      الأسعار تخضع لعروض الأسعار المعتمدة. يجب الالتزام بجدول الدفعات الموضح في العقود الفردية.

      4. إخلاء المسؤولية:
      نحن غير مسؤولين عن أي أضرار غير مباشرة قد تنشأ عن استخدام خدماتنا إذا تم تعديلها بواسطة جهة أخرى.
    `
  },
  warranty: {
    title: 'سياسة الضمان',
    content: `
      نفتخر بجودة أعمالنا في ${contactConfig.tradeNameAr}. لذلك نقدم ضمانات واضحة على خدماتنا ومنتجاتنا:

      1. اللوحات الإعلانية والتركيبات:
      نقدم ضماناً لمدة محددة (حسب العقد) على المواد والتركيبات ضد العيوب المصنعية وعيوب التركيب.

      2. استثناءات الضمان:
      لا يشمل الضمان التلف الناتج عن سوء الاستخدام، التخريب المتعمد، أو الكوارث الطبيعية والأحوال الجوية القاسية غير المتوقعة.

      3. المطالبة بالضمان:
      في حالة وجود أي خلل مشمول بالضمان، يرجى التواصل مع فريق الدعم الفني لدينا وسيتم اتخاذ الإجراءات اللازمة للصيانة أو الاستبدال.
    `
  },
  refund: {
    title: 'سياسة الاسترجاع',
    content: `
      رضا عملائنا هو أولويتنا في ${contactConfig.tradeNameAr}. نظراً لطبيعة خدماتنا المخصصة، تطبق الشروط التالية:

      1. الخدمات الاستشارية والتصاميم المخصصة:
      المبالغ المدفوعة مقابل الخدمات الإبداعية والتصاميم غير قابلة للاسترجاع بعد بدء العمل عليها واعتماد المسودات الأولية.

      2. المنتجات المطبوعة واللوحات:
      لا يمكن استرجاع المبالغ للمنتجات المطبوعة أو اللوحات المصنعة خصيصاً للعميل بعد بدء الإنتاج.

      3. الأخطاء المصنعية:
      في حال وجود خطأ في الإنتاج أو الطباعة من طرفنا يخالف المواصفات المعتمدة، نلتزم بإعادة العمل أو تصحيحه دون تكلفة إضافية على العميل.
    `
  },
  delivery: {
    title: 'سياسة التوصيل والتركيب',
    content: `
      نسعى في ${contactConfig.tradeNameAr} لضمان تسليم وتركيب مشاريعكم في الوقت المحدد وبأعلى معايير الجودة.

      1. المواعيد:
      يتم تحديد موعد التسليم والتركيب في عرض السعر أو العقد. نبذل قصارى جهدنا للالتزام بهذه المواعيد بدقة.

      2. متطلبات الموقع:
      يجب على العميل تجهيز موقع التركيب وتوفير التصاريح اللازمة (إذا لزم الأمر) قبل وصول فريق التركيب.

      3. تأخيرات غير متوقعة:
      في حال وجود تأخيرات ناجمة عن ظروف قاهرة، سيتم إشعار العميل فوراً وتحديد موعد بديل مناسب.
    `
  }
};

export default function PolicyPage({ policyId }: { policyId: string }) {
  const policy = policiesContent[policyId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [policyId]);

  if (!policy) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-text-primary mb-4">الصفحة غير موجودة</h1>
          <a href="#" className="text-primary hover:underline">العودة للرئيسية</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary mb-12">
          <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
          <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          <span>السياسات</span>
          <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          <span className="text-text-primary font-medium">{policy.title}</span>
        </nav>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationRegistry.fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-12 relative inline-block">
            {policy.title}
            <span className="absolute -bottom-4 right-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
            {policy.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
