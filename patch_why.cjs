const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WhyChooseUs.tsx', 'utf8');

const newGlobe = `
            {/* Elliptical / Globe-like Benefits Composition */}
            <motion.div 
              variants={animationRegistry.staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-[600px] lg:h-[400px] rounded-[100px] lg:rounded-[50%] bg-gradient-to-br from-surface-elevated/40 via-background to-surface-elevated/20 shadow-[inset_0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_20px_50px_rgba(255,255,255,0.02)] border border-border/60 flex items-center justify-center p-6 sm:p-12 overflow-hidden group mt-4 clear-both perspective-1000"
            >
              {/* Decorative inner glow */}
              <div className="absolute inset-0 bg-accent/5 rounded-[100px] lg:rounded-[50%] blur-3xl scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
              
              <div className="relative z-10 w-full h-full flex flex-col lg:flex-row flex-wrap items-center justify-center content-center gap-3 md:gap-4 lg:gap-6">
                {points.map((point, idx) => {
                  // Mathematical organic variance for floating effect
                  const isEven = idx % 2 === 0;
                  const translateY = isEven ? 'lg:translate-y-4' : 'lg:-translate-y-4';
                  const translateX = isEven ? '-translate-x-2' : 'translate-x-2';
                  
                  return (
                    <motion.div 
                      key={idx} 
                      variants={animationRegistry.fadeUp}
                      className={\`px-4 py-2.5 sm:px-6 sm:py-3 bg-surface-elevated/80 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-[2rem] text-text-primary text-xs sm:text-sm md:text-base font-bold shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:border-accent/40 hover:-translate-y-1 hover:text-accent transition-all duration-300 cursor-default relative z-10 \${translateY} \${translateX}\`}
                    >
                      {point}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
`;

const startIdx = code.indexOf('{/* Elliptical / Globe-like Benefits Composition */}');
const endIdx = code.indexOf('</motion.div>', code.indexOf('</motion.div>', startIdx) + 13) + 13;

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newGlobe + code.substring(endIdx);
    fs.writeFileSync('src/components/sections/WhyChooseUs.tsx', code);
    console.log("Success");
} else {
    console.log("Failed to find indices");
}
