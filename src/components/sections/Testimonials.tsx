import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../config/testimonials';
import { SectionComponentProps } from '../../types';
import { animationRegistry } from '../../lib/animations';

export default function Testimonials({ id, theme, className = '' }: SectionComponentProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <motion.section 
      id={id}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={animationRegistry.staggerCards}
      className={`py-24 bg-background text-text-primary ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={animationRegistry.fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">آراء عملائنا</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            نفخر بالثقة التي يوليها لنا شركاؤنا، ونسعى دائماً لتجاوز توقعاتهم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              variants={animationRegistry.fadeUp}
              className="bg-surface p-8 rounded-3xl shadow-sm border border-border relative group"
            >
              <Quote className="w-10 h-10 text-primary opacity-20 absolute top-6 right-6 group-hover:scale-110 transition-transform" />
              <p className="text-text-secondary mb-8 relative z-10 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background-alt border border-border flex items-center justify-center font-bold text-text-muted">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role} - {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
