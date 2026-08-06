export interface ServiceCategory {
  id: string;
  slug: string;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
  coverImage: string;
  altTextAr: string;
  altTextEn: string;
  internalServices: string[];
  gallery: string[];
  enabled: boolean;
  order: number;
}

export const servicesConfig = {
  categories: [
    {
      id: "digital-printing-signage",
      slug: "digital-printing-signage",
      arTitle: "الطباعة الرقمية واللافتات",
      enTitle: "Digital Printing & Signage",
      arDesc: "حلول طباعة رقمية متقدمة ولافتات عالية الجودة تضمن لعلامتك التجارية حضورًا استثنائيًا ومؤثرًا.",
      enDesc: "Advanced digital printing and high-quality signage solutions that ensure an exceptional and impactful presence for your brand.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Digital_Printing_Execution_xkx3df.png",
      altTextAr: "الطباعة الرقمية واللافتات",
      altTextEn: "Digital Printing & Signage",
      internalServices: [
        "الطباعة الرقمية",
        "البنرات والفلكس",
        "الاستيكرات",
        "اللوحات الإرشادية",
        "الرول أب والبوب أب"
      ],
      gallery: [],
      enabled: true,
      order: 1
    },
    {
      id: "billboards-displays",
      slug: "billboards-displays",
      arTitle: "اللوحات الإعلانية والشاشات",
      enTitle: "Billboards & Displays",
      arDesc: "لوحات إعلانية وشاشات عرض رقمية مصممة بأحدث التقنيات لجذب الانتباه في جميع الأوقات.",
      enDesc: "Billboards and digital displays designed with the latest technologies to attract attention at all times.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Outdoor_Signage_kbzm4z.png",
      altTextAr: "اللوحات الإعلانية والشاشات",
      altTextEn: "Billboards & Displays",
      internalServices: [
        "اللوحات الخارجية",
        "واجهات المحلات",
        "الشاشات الرقمية",
        "الحروف البارزة",
        "صناديق الإضاءة"
      ],
      gallery: [],
      enabled: true,
      order: 2
    },
    {
      id: "exhibitions-events",
      slug: "exhibitions-events",
      arTitle: "تجهيز المعارض والفعاليات",
      enTitle: "Exhibitions & Events",
      arDesc: "تصميم وتنفيذ متكامل لأجنحة المعارض والفعاليات لخلق تجربة فريدة لا تُنسى لزوارك.",
      enDesc: "Complete design and execution for exhibition stands and events to create a unique and unforgettable experience for your visitors.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Events_Conferences_jcex2w.webp",
      altTextAr: "تجهيز المعارض والفعاليات",
      altTextEn: "Exhibitions & Events",
      internalServices: [
        "تجهيز المعارض",
        "تنظيم الفعاليات",
        "أجنحة المعارض",
        "الباك دروب",
        "منصات الاستقبال"
      ],
      gallery: [],
      enabled: true,
      order: 3
    },
    {
      id: "awards-promotional-gifts",
      slug: "awards-promotional-gifts",
      arTitle: "الدروع والهدايا الترويجية",
      enTitle: "Awards & Promotional Gifts",
      arDesc: "هدايا ودروع تذكارية مخصصة تعكس هويتك وتترك أثرًا إيجابيًا ومستدامًا لدى عملائك.",
      enDesc: "Customized promotional gifts and awards that reflect your identity and leave a lasting positive impression on your clients.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974206/Promotional_Gifts_e61zqy.jpg",
      altTextAr: "الدروع والهدايا الترويجية",
      altTextEn: "Awards & Promotional Gifts",
      internalServices: [
        "الدروع التذكارية",
        "الهدايا الدعائية",
        "بوكسات الموظفين",
        "الملابس واليونيفورم",
        "المقتنيات النحاسية والخشبية"
      ],
      gallery: [],
      enabled: true,
      order: 4
    },
    {
      id: "paper-prints-packaging",
      slug: "paper-prints-packaging",
      arTitle: "المطبوعات الورقية والعلب",
      enTitle: "Paper Prints & Packaging",
      arDesc: "مطبوعات ورقية وحلول تغليف مبتكرة تعزز احترافية علامتك وتقدم منتجاتك بأبهى صورة.",
      enDesc: "Paper prints and innovative packaging solutions that enhance the professionalism of your brand and present your products perfectly.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Exhibition_Stands_Kiosks_qde6rw.jpg",
      altTextAr: "المطبوعات الورقية والعلب",
      altTextEn: "Paper Prints & Packaging",
      internalServices: [
        "علب التغليف",
        "البروشورات والكتيبات",
        "الكروت الشخصية",
        "الأكياس الورقية",
        "الفولدرات والملفات"
      ],
      gallery: [],
      enabled: true,
      order: 5
    },
    {
      id: "innovative-design-solutions",
      slug: "innovative-design-solutions",
      arTitle: "حلول التصميم المبتكرة",
      enTitle: "Innovative Design Solutions",
      arDesc: "خدمات تصميم إبداعية متكاملة تحول أفكارك إلى هوية بصرية قوية ومتميزة في السوق.",
      enDesc: "Comprehensive creative design services that transform your ideas into a strong and distinctive visual identity in the market.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Display_Stands_Display_Solutions_btjbf6.png",
      altTextAr: "حلول التصميم المبتكرة",
      altTextEn: "Innovative Design Solutions",
      internalServices: [
        "تصميم الهوية البصرية",
        "تصميم المطبوعات",
        "تصميم العبوات والتغليف",
        "التصميم الرقمي",
        "تصميم الحملات الإعلانية"
      ],
      gallery: [],
      enabled: true,
      order: 6
    }
  ] as ServiceCategory[]
};
