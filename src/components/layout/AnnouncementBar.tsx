import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const announcementsAr = [
  "التنفيذ السريع والمتقن",
  "خامات ممتازة عالية الجودة",
  "تركيب احترافي بأحدث التقنيات",
  "تغطية شاملة لجميع مناطق المملكة",
  "خبراء الهوية المؤسسية والدعائية"
];

const announcementsEn = [
  "Fast & Precise Execution",
  "Premium High-Quality Materials",
  "Professional Technical Installation",
  "Comprehensive Coverage Across Saudi Arabia",
  "Corporate & Promotional Branding Specialists"
];

export default function AnnouncementBar() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const items = isRtl ? announcementsAr : announcementsEn;

  // Quadruple items to ensure completely seamless infinite scrolling on all screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="bg-background text-text-primary overflow-hidden flex whitespace-nowrap relative z-50 items-center border-b border-border select-none"
      style={{ height: 'var(--announcement-height)' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div
        className="flex gap-10 md:gap-16 px-4 items-center shrink-0"
        animate={{
          x: isRtl ? ["0%", "50%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {repeatedItems.map((text, i) => (
          <span
            key={i}
            className="text-xs md:text-sm font-medium flex items-center gap-2 tracking-wide text-text-secondary hover:text-text-primary transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
            <span>{text}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
