import { motion } from 'motion/react';

const announcements = [
  "✓ التنفيذ السريع",
  "✓ خامات عالية الجودة",
  "✓ تركيب احترافي",
  "✓ تغطية شاملة لجميع مناطق المملكة",
  "✓ خبراء الهوية المؤسسية"
];

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden flex whitespace-nowrap relative z-50 h-10 items-center border-b border-white/10">
      <motion.div
        className="flex gap-12 px-4"
        animate={{
          x: ["0%", "50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...announcements, ...announcements, ...announcements, ...announcements].map((text, i) => (
          <span key={i} className="text-xs md:text-sm font-bold flex items-center gap-2 tracking-wide">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
