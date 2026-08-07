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
      id: "promotional-gifts",
      slug: "promotional-gifts",
      arTitle: "الهدايا الدعائية",
      enTitle: "Promotional Gifts",
      arDesc: "هدايا ودروع تذكارية مخصصة تعكس هويتك وتترك أثرًا إيجابيًا ومستدامًا لدى عملائك.",
      enDesc: "Customized promotional gifts and awards that reflect your identity and leave a lasting positive impression on your clients.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974206/Promotional_Gifts_e61zqy.jpg",
      altTextAr: "الهدايا الدعائية",
      altTextEn: "Promotional Gifts",
      internalServices: [
        "الدروع",
        "المنتجات الجلدية",
        "المنتجات النحاسية",
        "الريزين",
        "الهدايا الدعائية"
      ],
      gallery: [],
      enabled: true,
      order: 1
    },
    {
      id: "advertising-signage",
      slug: "advertising-signage",
      arTitle: "اللوحات الإعلانية",
      enTitle: "Advertising Signage",
      arDesc: "لوحات إعلانية وشاشات عرض رقمية مصممة بأحدث التقنيات لجذب الانتباه في جميع الأوقات.",
      enDesc: "Billboards and digital displays designed with the latest technologies to attract attention at all times.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Outdoor_Signage_kbzm4z.png",
      altTextAr: "اللوحات الإعلانية",
      altTextEn: "Advertising Signage",
      internalServices: [
        "أسوار المشاريع",
        "لوحات المشاريع",
        "الأكريليك",
        "اللوحات الداخلية",
        "اللوحات الخارجية",
        "الفوريكس",
        "الكانفس"
      ],
      gallery: [],
      enabled: true,
      order: 2
    },
    {
      id: "events-conferences",
      slug: "events-conferences",
      arTitle: "الفعاليات والمؤتمرات",
      enTitle: "Events & Conferences",
      arDesc: "تصميم وتنفيذ متكامل للفعاليات والمؤتمرات لخلق تجربة فريدة لا تُنسى لزوارك.",
      enDesc: "Complete design and execution for events and conferences to create a unique and unforgettable experience for your visitors.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Events_Conferences_jcex2w.webp",
      altTextAr: "الفعاليات والمؤتمرات",
      altTextEn: "Events & Conferences",
      internalServices: [
        "تجهيز وتنفيذ الفعاليات"
      ],
      gallery: [],
      enabled: true,
      order: 3
    },
    {
      id: "exhibitions-booths",
      slug: "exhibitions-booths",
      arTitle: "المعارض والأكشاك",
      enTitle: "Exhibitions & Booths",
      arDesc: "تصميم وتنفيذ متكامل لأجنحة المعارض والأكشاك لخلق تجربة فريدة.",
      enDesc: "Complete design and execution for exhibition stands and booths to create a unique experience.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Exhibition_Stands_Kiosks_qde6rw.jpg",
      altTextAr: "المعارض والأكشاك",
      altTextEn: "Exhibitions & Booths",
      internalServices: [
        "الأكشاك",
        "Pop-Up",
        "Booths"
      ],
      gallery: [],
      enabled: true,
      order: 4
    },
    {
      id: "display-stands",
      slug: "display-stands",
      arTitle: "الاستندات ووسائل العرض",
      enTitle: "Display Stands",
      arDesc: "استندات عرض مبتكرة تعزز احترافية علامتك وتقدم منتجاتك بأبهى صورة.",
      enDesc: "Innovative display stands that enhance the professionalism of your brand and present your products perfectly.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Display_Stands_Display_Solutions_btjbf6.png",
      altTextAr: "الاستندات ووسائل العرض",
      altTextEn: "Display Stands",
      internalServices: [
        "رول أب",
        "استندات المنتجات",
        "البوابات الترحيبية",
        "بوب أب",
        "طاولات ستاند",
        "لاما ستاند"
      ],
      gallery: [],
      enabled: true,
      order: 5
    },
    {
      id: "digital-printing-production",
      slug: "digital-printing-production",
      arTitle: "الطباعة الرقمية والتنفيذ",
      enTitle: "Digital Printing & Production",
      arDesc: "حلول طباعة رقمية متقدمة وتصنيع عالي الجودة.",
      enDesc: "Advanced digital printing and high-quality production solutions.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Digital_Printing_Execution_xkx3df.png",
      altTextAr: "الطباعة الرقمية والتنفيذ",
      altTextEn: "Digital Printing & Production",
      internalServices: [
        "استيكرات السيارات",
        "أعمال الاستيكر",
        "أعمال البنر",
        "سيفتي",
        "طباعة UV",
        "فابريك",
        "ميش",
        "وشاحات",
        "يونيفورم"
      ],
      gallery: [],
      enabled: true,
      order: 6
    }
  ] as ServiceCategory[]
};
