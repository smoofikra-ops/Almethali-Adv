export interface SubService {
  arName: string;
  enName: string;
  driveUrl: string;
  folderId: string;
}

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
  internalServices: SubService[];
  gallery: string[];
  enabled: boolean;
  order: number;
}

export const servicesConfig = {
  categories: [
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
        { arName: "أسوار ولوحات المشاريع", enName: "Project Fences & Signage", driveUrl: "https://drive.google.com/open?id=1ovKk9iUaii-vdJGUid6_rLxyMKRFToxg&usp=drive_copy", folderId: "1ovKk9iUaii-vdJGUid6_rLxyMKRFToxg" },
        { arName: "أكريليك", enName: "Acrylic", driveUrl: "https://drive.google.com/open?id=1kpPuxSC_hrnsiVdqDDtT2mxgmToQ0HEj&usp=drive_copy", folderId: "1kpPuxSC_hrnsiVdqDDtT2mxgmToQ0HEj" },
        { arName: "اللوحات الداخلية والخارجية", enName: "Indoor & Outdoor Signage", driveUrl: "https://drive.google.com/open?id=1E_m83SLHrpXRhTHY9lFJ347MFp0r2Hhg&usp=drive_copy", folderId: "1E_m83SLHrpXRhTHY9lFJ347MFp0r2Hhg" },
        { arName: "فوركس", enName: "Forex", driveUrl: "https://drive.google.com/open?id=1KRHLDFG_ngvG5d30n68GP-E0t8g0SpDy&usp=drive_copy", folderId: "1KRHLDFG_ngvG5d30n68GP-E0t8g0SpDy" },
        { arName: "كانفاس", enName: "Canvas", driveUrl: "https://drive.google.com/open?id=15Rwfherb5IurfGtCxsNgZqY6kmT3WYvm&usp=drive_copy", folderId: "15Rwfherb5IurfGtCxsNgZqY6kmT3WYvm" }
      ],
      gallery: [],
      enabled: true,
      order: 1
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
        { arName: "التصوير والإنتاج الإعلامي", enName: "Photography & Media Production", driveUrl: "https://drive.google.com/open?id=1rm7rQc3QrUSQDH-8QoVP_Fcaabfb6KVd&usp=drive_copy", folderId: "1rm7rQc3QrUSQDH-8QoVP_Fcaabfb6KVd" },
        { arName: "الشاشات والإضاءات", enName: "Screens & Lighting", driveUrl: "https://drive.google.com/open?id=1bvdjVvonRD87fJ_5GDakfo6sjk9ozW9v&usp=drive_copy", folderId: "1bvdjVvonRD87fJ_5GDakfo6sjk9ozW9v" },
        { arName: "تجهيز وتنفيذ الفعاليات", enName: "Event Setup & Execution", driveUrl: "https://drive.google.com/open?id=1xx_8ICKGe5T4JcanudoW6ay79uLZNGsT&usp=drive_copy", folderId: "1xx_8ICKGe5T4JcanudoW6ay79uLZNGsT" }
      ],
      gallery: [],
      enabled: true,
      order: 2
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
        { arName: "أكشاك", enName: "Kiosks", driveUrl: "https://drive.google.com/open?id=1YwcjpmcSHRT728nxleI_MBF1aiNaVNGf&usp=drive_copy", folderId: "1YwcjpmcSHRT728nxleI_MBF1aiNaVNGf" },
        { arName: "بوب أب", enName: "Pop-Up", driveUrl: "https://drive.google.com/open?id=1czuBkQ_uG-ugfWr1NKCNVqmybl0GrKJk&usp=drive_copy", folderId: "1czuBkQ_uG-ugfWr1NKCNVqmybl0GrKJk" },
        { arName: "بوثات", enName: "Booths", driveUrl: "https://drive.google.com/open?id=1XQbqUGwRZSRpFG9ufbjxoL98-ID8lmH4&usp=drive_copy", folderId: "1XQbqUGwRZSRpFG9ufbjxoL98-ID8lmH4" }
      ],
      gallery: [],
      enabled: true,
      order: 3
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
        { arName: "استيكرات سيارات", enName: "Car Stickers", driveUrl: "https://drive.google.com/open?id=1q4xA3VSHPFhHmOL7KTfFM8GkRL16O6wF&usp=drive_copy", folderId: "1q4xA3VSHPFhHmOL7KTfFM8GkRL16O6wF" },
        { arName: "طباعة UV", enName: "UV Printing", driveUrl: "https://drive.google.com/open?id=1-pVLj1M-eUcZqFNtZ7I3sEng_9622jkA&usp=drive_copy", folderId: "1-pVLj1M-eUcZqFNtZ7I3sEng_9622jkA" },
        { arName: "أعلام", enName: "Flags", driveUrl: "https://drive.google.com/open?id=1rSWiz9Y1h8aHDbi_Htge9yjWD4__-QaQ&usp=drive_copy", folderId: "1rSWiz9Y1h8aHDbi_Htge9yjWD4__-QaQ" },
        { arName: "فابريك", enName: "Fabric", driveUrl: "https://drive.google.com/open?id=1T9wMrekfYvXv7IDRrXCJ1aPSJT99sRqI&usp=drive_copy", folderId: "1T9wMrekfYvXv7IDRrXCJ1aPSJT99sRqI" },
        { arName: "أعمال الاستيكر", enName: "Sticker Works", driveUrl: "https://drive.google.com/open?id=11vYMpPd6Pq-KnJ4RTOaPr0movpSwjm-7&usp=drive_copy", folderId: "11vYMpPd6Pq-KnJ4RTOaPr0movpSwjm-7" },
        { arName: "مايكات", enName: "Mics", driveUrl: "https://drive.google.com/open?id=1ppzeugX-sTgjSN8ukGgZ9pkhmt-e79Kw&usp=drive_copy", folderId: "1ppzeugX-sTgjSN8ukGgZ9pkhmt-e79Kw" },
        { arName: "أعمال البنر", enName: "Banner Works", driveUrl: "https://drive.google.com/open?id=1or_DA4vbsRWo5X6EP5PYu06qzp5Je9a8&usp=drive_copy", folderId: "1or_DA4vbsRWo5X6EP5PYu06qzp5Je9a8" },
        { arName: "وشاحات", enName: "Sashes", driveUrl: "https://drive.google.com/open?id=1Xc3F6NbcgqJeZxWxvNtmGAvHcxsk0xqT&usp=drive_copy", folderId: "1Xc3F6NbcgqJeZxWxvNtmGAvHcxsk0xqT" },
        { arName: "سيفتي", enName: "Safety", driveUrl: "https://drive.google.com/open?id=13CpIRP-KJkLecsmOh2_i7HkjF7IYODCy&usp=drive_copy", folderId: "13CpIRP-KJkLecsmOh2_i7HkjF7IYODCy" },
        { arName: "يونيفورم", enName: "Uniforms", driveUrl: "https://drive.google.com/open?id=1ZalBzmFngTNXVHa83Yok6mFnTkxMzYT8&usp=drive_copy", folderId: "1ZalBzmFngTNXVHa83Yok6mFnTkxMzYT8" }
      ],
      gallery: [],
      enabled: true,
      order: 4
    },
    {
      id: "display-stands",
      slug: "display-stands",
      arTitle: "الاستاندات ووسائل العرض",
      enTitle: "Display Stands",
      arDesc: "استندات عرض مبتكرة تعزز احترافية علامتك وتقدم منتجاتك بأبهى صورة.",
      enDesc: "Innovative display stands that enhance the professionalism of your brand and present your products perfectly.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Display_Stands_Display_Solutions_btjbf6.png",
      altTextAr: "الاستاندات ووسائل العرض",
      altTextEn: "Display Stands",
      internalServices: [
        { arName: "استاند رول أب", enName: "Roll Up Stand", driveUrl: "https://drive.google.com/open?id=11RxSVaCmzdk5OyBjL0_g_tBmAoawazmC&usp=drive_copy", folderId: "11RxSVaCmzdk5OyBjL0_g_tBmAoawazmC" },
        { arName: "لاما استاند", enName: "Lama Stand", driveUrl: "https://drive.google.com/open?id=194wI4iScgYoU3C00ASJ8mulY4O7t8Qno&usp=drive_copy", folderId: "194wI4iScgYoU3C00ASJ8mulY4O7t8Qno" },
        { arName: "استاندات منتجات", enName: "Product Stands", driveUrl: "https://drive.google.com/open?id=1SrvPrHQ9Y4KgKU4VhvIwGSf-RkDgymlW&usp=drive_copy", folderId: "1SrvPrHQ9Y4KgKU4VhvIwGSf-RkDgymlW" },
        { arName: "بوابات ترحيبية", enName: "Welcome Gates", driveUrl: "https://drive.google.com/open?id=1CUvizmoHJyZIZKUKFYeZgrJSNp1lcRRr&usp=drive_copy", folderId: "1CUvizmoHJyZIZKUKFYeZgrJSNp1lcRRr" },
        { arName: "بوب أب", enName: "Pop Up", driveUrl: "https://drive.google.com/open?id=1a_owwMn-_KtoOQMLlQDfql00OEWVT8iE&usp=drive_copy", folderId: "1a_owwMn-_KtoOQMLlQDfql00OEWVT8iE" },
        { arName: "طاولات استاند", enName: "Stand Tables", driveUrl: "https://drive.google.com/open?id=1wTIkK-g53UhF-B04D0gof7fJOoB6JvXq&usp=drive_copy", folderId: "1wTIkK-g53UhF-B04D0gof7fJOoB6JvXq" }
      ],
      gallery: [],
      enabled: true,
      order: 5
    },
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
        { arName: "هدايا الموظفين والشركات", enName: "Employee & Corporate Gifts", driveUrl: "https://drive.google.com/open?id=1YVGhCoLt9CeEH2V0Gl8A8B12eRBycXh3&usp=drive_copy", folderId: "1YVGhCoLt9CeEH2V0Gl8A8B12eRBycXh3" },
        { arName: "الدروع", enName: "Awards & Plaques", driveUrl: "https://drive.google.com/open?id=1_gf7ZLKrLh7w1xHFwmA_IQomzEM3XnIB&usp=drive_copy", folderId: "1_gf7ZLKrLh7w1xHFwmA_IQomzEM3XnIB" },
        { arName: "المناسبات الوطنية", enName: "National Events", driveUrl: "https://drive.google.com/open?id=1NcN83hRMQ2efHDn4-aZZa7QZOzlQyD9Y&usp=drive_copy", folderId: "1NcN83hRMQ2efHDn4-aZZa7QZOzlQyD9Y" },
        { arName: "المنتجات الجلدية", enName: "Leather Products", driveUrl: "https://drive.google.com/open?id=1l88CXlySSorPnkFRyT6jyavNiVfY9JcC&usp=drive_copy", folderId: "1l88CXlySSorPnkFRyT6jyavNiVfY9JcC" },
        { arName: "المنتجات النحاسية", enName: "Copper Products", driveUrl: "https://drive.google.com/open?id=1Teyd5TG8Htt0lqsQmoe3BVFZPctybEoQ&usp=drive_copy", folderId: "1Teyd5TG8Htt0lqsQmoe3BVFZPctybEoQ" },
        { arName: "ريزين", enName: "Resin", driveUrl: "https://drive.google.com/open?id=1wR0NfHw7hnUN79sh1bYhhAwNrE2CcwGb&usp=drive_copy", folderId: "1wR0NfHw7hnUN79sh1bYhhAwNrE2CcwGb" }
      ],
      gallery: [],
      enabled: true,
      order: 6
    }
  ] as ServiceCategory[]
};
