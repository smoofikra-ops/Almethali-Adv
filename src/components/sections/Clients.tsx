import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clients } from '../../config/clients';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

export default function Clients({ id, theme, className = '' }: SectionComponentProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  if (clients.length === 0) {
    return null;
  }

  // Duplicating the clients array to create a seamless infinite marquee effect
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={animationRegistry.fadeUp}
      className={`py-12 border-y border-border bg-surface overflow-hidden relative ${className}`}
    >
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-surface to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-20">
         <p className="text-sm font-bold text-text-muted uppercase tracking-widest">شركاء النجاح</p>
      </div>

      <div 
        className="w-full flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="flex items-center gap-16 md:gap-24 pl-16 md:pl-24"
          animate={{ x: isPaused ? 0 : [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="w-32 h-16 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0"
            >
               <div className="text-lg font-bold text-text-secondary">{client.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
