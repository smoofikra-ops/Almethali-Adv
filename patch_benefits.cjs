const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WhyChooseUs.tsx', 'utf8');

const newGlobe = `
            {/* Organic Implied Ellipse Composition */}
            <motion.div 
              variants={animationRegistry.staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full py-6 sm:py-10 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 group mt-4 clear-both perspective-1000"
            >
              {/* Subtle atmospheric glow - NOT a hard container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-brand-teal-soft/10 dark:bg-brand-teal-soft/15 blur-[60px] md:blur-[100px] rounded-[50%] -z-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-60"></div>
              
              {/* ROW 1: 1 Card */}
              <div className="flex flex-row justify-center w-full relative z-10">
                {points.slice(0, 1).map((point, idx) => (
                  <motion.div key={\`r1-\${idx}\`} variants={animationRegistry.fadeUp} className="benefit-card">
                    {point}
                  </motion.div>
                ))}
              </div>

              {/* ROW 2: 2 Cards */}
              <div className="flex flex-row justify-center items-center w-full gap-1.5 sm:gap-3 lg:gap-5 relative z-10">
                {points.slice(1, 3).map((point, idx) => (
                  <motion.div key={\`r2-\${idx}\`} variants={animationRegistry.fadeUp} className={\`benefit-card \${idx === 0 ? '-translate-y-0.5 sm:-translate-y-1' : 'translate-y-0.5 sm:translate-y-1'}\`}>
                    {point}
                  </motion.div>
                ))}
              </div>

              {/* ROW 3: 3 Cards */}
              <div className="flex flex-row justify-center items-center w-full gap-1 sm:gap-2.5 lg:gap-4 relative z-10 px-0.5">
                {points.slice(3, 6).map((point, idx) => (
                  <motion.div key={\`r3-\${idx}\`} variants={animationRegistry.fadeUp} className={\`benefit-card \${idx === 1 ? 'translate-y-1 sm:translate-y-2' : '-translate-y-1 sm:-translate-y-1'}\`}>
                    {point}
                  </motion.div>
                ))}
              </div>

              {/* ROW 4: 2 Cards */}
              <div className="flex flex-row justify-center items-center w-full gap-1.5 sm:gap-3 lg:gap-5 relative z-10">
                {points.slice(6, 8).map((point, idx) => (
                  <motion.div key={\`r4-\${idx}\`} variants={animationRegistry.fadeUp} className={\`benefit-card \${idx === 0 ? 'translate-y-0.5 sm:translate-y-1' : '-translate-y-0.5 sm:-translate-y-1'}\`}>
                    {point}
                  </motion.div>
                ))}
              </div>

              {/* ROW 5: 2 Cards */}
              <div className="flex flex-row justify-center items-center w-full gap-1.5 sm:gap-3 lg:gap-4 relative z-10">
                {points.slice(8, 10).map((point, idx) => (
                  <motion.div key={\`r5-\${idx}\`} variants={animationRegistry.fadeUp} className={\`benefit-card \${idx === 0 ? '-translate-y-0.5 sm:-translate-y-1 lg:-translate-x-2' : 'translate-y-0.5 sm:translate-y-1 lg:translate-x-2'}\`}>
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
`;

const benefitCardClass = 'const benefitCardClass = "px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-surface-elevated/95 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:border-accent/40 hover:text-accent active:scale-95 hover:-translate-y-1 text-text-primary text-[9px] min-[390px]:text-[10px] sm:text-xs md:text-sm lg:text-base font-bold font-display rounded-full transition-all duration-300 cursor-default text-center leading-snug whitespace-normal flex items-center justify-center";';

const startIdx = code.indexOf('{/* Elliptical / Globe-like Benefits Composition */}');
const endIdx = code.indexOf('</motion.div>', code.indexOf('</motion.div>', startIdx) + 13) + 13;

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newGlobe + code.substring(endIdx);
    code = code.replace(/className="benefit-card"/g, `className={benefitCardClass}`);
    code = code.replace(/className={\`benefit-card/g, `className={\`\${benefitCardClass}`);
    
    // insert benefitCardClass right before return (
    code = code.replace('return (', benefitCardClass + '\n\n  return (');

    fs.writeFileSync('src/components/sections/WhyChooseUs.tsx', code);
    console.log("Success");
} else {
    console.log("Failed to find indices");
}
