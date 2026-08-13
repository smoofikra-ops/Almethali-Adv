const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WhyChooseUs.tsx', 'utf8');

// 1. Remove the floating mobile image
const oldFloatingImage = `            {/* Mobile Editorial Image (hidden on Desktop) */}
            <div className="lg:hidden w-[40%] max-w-[180px] float-end rtl:float-start ml-4 rtl:ml-0 rtl:mr-4 mb-4 rounded-2xl overflow-hidden shadow-md border border-border bg-surface">
              <img 
                 src={images.home.about} 
                 alt={isRtl ? contentConfig.strengths.title : contentConfig.strengths.titleEn} 
                 className="w-full h-auto aspect-square sm:aspect-[4/5] object-cover object-center" 
                 loading="lazy"
              />
            </div>`;
code = code.replace(oldFloatingImage, '');

// 2. Adjust heading responsive typography (one line if possible)
const oldHeading = `            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">`;
const newHeading = `            <h2 className="text-2xl min-[390px]:text-3xl md:text-5xl font-display font-bold text-text-primary mb-4 md:mb-6 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">`;
code = code.replace(oldHeading, newHeading);

// 3. Make the existing desktop ellipse hidden on mobile
const oldEllipse = `            {/* Organic Implied Ellipse Composition */}
            <motion.div 
              variants={animationRegistry.staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full py-6 sm:py-10 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 group mt-4 clear-both perspective-1000"
            >`;
const newEllipse = `            {/* Organic Implied Ellipse Composition (Desktop) */}
            <motion.div 
              variants={animationRegistry.staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden lg:flex relative w-full py-6 sm:py-10 flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 group mt-4 clear-both perspective-1000"
            >`;
code = code.replace(oldEllipse, newEllipse);

// 4. Insert the new mobile benefits canvas after the description and before the desktop ellipse
const descEnd = `            </p>`;
const mobileCanvas = `
            {/* Mobile Image + Benefits Canvas (Hidden on Desktop) */}
            <motion.div 
              className="lg:hidden relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mt-6 border border-border/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animationRegistry.fadeUp}
            >
              <img 
                src={images.home.about}
                alt={isRtl ? contentConfig.strengths.title : contentConfig.strengths.titleEn}
                className="absolute inset-0 w-full h-full object-cover object-left"
              />
              
              {/* Darkening gradient on the right side to make labels readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/80 mix-blend-multiply"></div>
              
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center items-end text-end gap-2 sm:gap-3 z-10" dir="ltr">
                {/* Force LTR container so 'items-end' aligns to the right side, but labels text respects RTL */}
                
                <div className="flex flex-row justify-end gap-1.5 w-full">
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[0]}</div>
                </div>
                
                <div className="flex flex-row justify-end gap-1.5 w-full">
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20 -translate-x-4\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[1]}</div>
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[2]}</div>
                </div>
                
                <div className="flex flex-row justify-end gap-1 w-full">
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20 -translate-x-6\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[3]}</div>
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20 -translate-x-2\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[4]}</div>
                </div>
                
                <div className="flex flex-row justify-end gap-1.5 w-full">
                   <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[5]}</div>
                   <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[6]}</div>
                </div>
                
                <div className="flex flex-row justify-end gap-1.5 w-full">
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20 -translate-x-8\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[7]}</div>
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20 -translate-x-2\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[8]}</div>
                </div>
                
                <div className="flex flex-row justify-end gap-1.5 w-full">
                  <div className={\`\${benefitCardClass} !shadow-lg !bg-background/90 !border-white/20\`} dir={isRtl ? 'rtl' : 'ltr'}>{points[9]}</div>
                </div>
              </div>
            </motion.div>
`;
code = code.replace(descEnd, descEnd + mobileCanvas);

// 5. Update text-justify to text-start for intro text
code = code.replace('text-justify md:text-start', 'text-start');

fs.writeFileSync('src/components/sections/WhyChooseUs.tsx', code);
console.log("Success");
