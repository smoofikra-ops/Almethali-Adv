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
      solutions: "حلول إعلانية",
      words: ['تصنع', 'تبرز', 'تعزز', 'تلهم', 'ترتقي بـ', 'تحول', 'تقود'],
      presence: "حضورًا يسبقك إلى جمهورك",
      desc: "من التصميم والطباعة إلى التصنيع والتركيب، نقدم حلولًا متكاملة تمنح علامتك حضورًا واضحًا ومؤثرًا.",
      quoteBtn: "طلب عرض سعر",
      whatsappBtn: "تواصل عبر واتساب",
      careersBtn: "انضم إلينا الآن",
      trustIndicators: ['منذ 2018', 'تصميم', 'تصنيع وتركيب', 'حلول مخصصة']
    },
    about: {
      title: "من نحن",
      vision: "رؤيتنا",
      mission: "رسالتنا",
    },
    services: {
      title: "كل ما يحتاجه مشروعك… في مكان واحد",
      desc: "اختر الحل الأقرب لاحتياجك، ودع فريق المثالي يتولى التصميم، التصنيع، التنفيذ والتركيب باحترافية متكاملة.",
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
      solutions: "Advertising Solutions",
      words: ['Create', 'Highlight', 'Enhance', 'Inspire', 'Elevate', 'Transform', 'Lead'],
      presence: "A presence that precedes you",
      desc: "From design and printing to manufacturing and installation, we provide integrated solutions that give your brand a clear and impactful presence.",
      quoteBtn: "Get a Quote",
      whatsappBtn: "Contact via WhatsApp",
      careersBtn: "Join Us Now",
      trustIndicators: ['Since 2018', 'Design, Produce & Install', 'Custom Solutions', 'After-Sales Service']
    },
    about: {
      title: "About Us",
      vision: "Our Vision",
      mission: "Our Mission",
    },
    services: {
      title: "Everything Your Project Needs, In One Place",
      desc: "Choose the solution that fits your project, and let Al-Mithali handle the design, production, execution and installation professionally.",
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
