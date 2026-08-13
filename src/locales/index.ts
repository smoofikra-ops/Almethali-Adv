export const translations = {
  ar: {
    nav: {
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      quote: "طلب عرض سعر",
      careers: "التوظيف",
    },
    hero: {
      trustLabel: "نحن شريكك الموثوق",
      solutions: "20 عام",
      words: [],
      presence: "الخبرات تختصر المسافات",
      desc: "",
      quoteBtn: "طلب عرض سعر",
      whatsappBtn: "تواصل عبر واتساب",
      catalogBtn: "استعرض الكتالوج",
      trustIndicators: []
    },
    about: {
      title: "من نحن",
      vision: "رؤيتنا",
      mission: "رسالتنا",
    },
    services: {
      title: "خدماتنا",
      desc: "كل ما يحتاجه مشروعك",
      moreSolutions: "+ المزيد من الحلول المتخصصة",
      exploreWork: "استعرض الأعمال",
    },
    targetSectors: {
      title: "نخدم الجميع بلا استثناء",
    },
    whyChooseUs: {
      title: "لماذا تختار المثالي؟",
    },
    portfolio: {
      title: "أعمالنا",
      all: "الكل",
    },
    quote: {
      title: "طلب عرض سعر",
      desc: "نحن هنا لتحويل أفكارك إلى واقع. املأ النموذج وسنتواصل معك.",
      step1: "البيانات الأساسية",
      step2: "تفاصيل الطلب",
      step3: "تأكيد الطلب",
      next: "التالي",
      prev: "السابق",
      submit: "تأكيد وإرسال",
      form: {
        name: "الاسم الكريم *",
        type: "نوع الجهة *",
        city: "المدينة *",
        phone: "رقم الجوال *",
        email: "البريد الإلكتروني",
        section: "القسم المطلوب *",
        service: "الخدمة المطلوبة *",
        details: "تفاصيل إضافية عن طلبك",
        attach: "إرفاق ملف (اختياري)",
      },
      notSure: "غير متأكد وأحتاج استشارة"
    },
    faq: {
      title: "الأسئلة الشائعة",
    },
    testimonials: {
      title: "شركاء النجاح",
    },
    footer: {
      quickLinks: "روابط سريعة",
      mainServices: "خدماتنا الرئيسية",
      policies: "السياسات",
      contact: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      usage: "سياسة الاستخدام",
      warranty: "الضمان",
      rights: "جميع الحقوق محفوظة",
      madeWith: "صُنع بحب بواسطة",
    }
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      quote: "Get a Quote",
      careers: "Careers",
    },
    hero: {
      trustLabel: "Your Trusted Partner",
      solutions: "20 Years",
      words: [],
      presence: "Experience Shortens Distances",
      desc: "",
      quoteBtn: "Get a Quote",
      whatsappBtn: "Contact via WhatsApp",
      catalogBtn: "View Catalog",
      trustIndicators: []
    },
    about: {
      title: "About Us",
      vision: "Our Vision",
      mission: "Our Mission",
    },
    services: {
      title: "Our Services",
      desc: "Everything your project needs",
      moreSolutions: "+ More specialized solutions",
      exploreWork: "Explore Our Work",
    },
    targetSectors: {
      title: "We Serve Everyone",
    },
    whyChooseUs: {
      title: "Why Choose Al-Mithali?",
    },
    portfolio: {
      title: "Our Work",
      all: "All",
    },
    quote: {
      title: "Request a Quote",
      desc: "We are here to turn your ideas into reality. Fill out the form and we will contact you.",
      step1: "Basic Details",
      step2: "Request Details",
      step3: "Confirm Request",
      next: "Next",
      prev: "Previous",
      submit: "Submit Request",
      form: {
        name: "Full Name *",
        type: "Entity Type *",
        city: "City *",
        phone: "Mobile Number *",
        email: "Email Address",
        section: "Required Section *",
        service: "Required Service *",
        details: "Additional Details",
        attach: "Attach File (Optional)",
      },
      notSure: "Not sure, I need consultation"
    },
    faq: {
      title: "Frequently Asked Questions",
    },
    testimonials: {
      title: "Success Partners",
    },
    footer: {
      quickLinks: "Quick Links",
      mainServices: "Main Services",
      policies: "Policies",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      usage: "Usage Policy",
      warranty: "Warranty",
      rights: "All rights reserved",
      madeWith: "Made with ❤ by",
    }
  }
};

export type Language = 'ar' | 'en';
export type TranslationKey = keyof typeof translations.ar;
