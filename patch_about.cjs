const fs = require('fs');
let code = fs.readFileSync('src/components/sections/AboutUs.tsx', 'utf8');

const newRows = `
        {/* Row 1: Vision & Mission (2 Cards) */}
        <div className="grid grid-cols-2 gap-2 md:gap-8 mb-2 md:mb-8">
          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_30px_rgb(0,0,0,0.3)] border border-border/40 overflow-hidden flex flex-col justify-center text-center min-h-[200px] md:min-h-[400px] group transition-transform duration-500 hover:-translate-y-1 bg-surface">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={images.aboutCovers.vision} 
                alt={t.about.vision} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/30 dark:bg-corporate-navy/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full p-3 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-center text-center h-full">
              <div className="w-8 h-8 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-6 mx-auto border border-white/20 text-white shadow-lg shrink-0">
                <Target className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[13px] md:text-3xl font-display font-bold text-white mb-1 md:mb-4 drop-shadow-md">{t.about.vision}</h3>
              <p className="text-[10px] md:text-lg text-white/90 leading-tight md:leading-relaxed drop-shadow max-w-[260px] md:max-w-md mx-auto hidden sm:block">
                {isRtl ? contentConfig.about.vision : contentConfig.about.visionEn}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_30px_rgb(0,0,0,0.3)] border border-border/40 overflow-hidden flex flex-col justify-center text-center min-h-[200px] md:min-h-[400px] group transition-transform duration-500 hover:-translate-y-1 bg-surface">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={images.aboutCovers.mission} 
                alt={t.about.mission} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/30 dark:bg-corporate-navy/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full p-3 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-center text-center h-full">
              <div className="w-8 h-8 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-6 mx-auto border border-white/20 text-white shadow-lg shrink-0">
                <Lightbulb className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[13px] md:text-3xl font-display font-bold text-white mb-1 md:mb-4 drop-shadow-md">{t.about.mission}</h3>
              <p className="text-[10px] md:text-lg text-white/90 leading-tight md:leading-relaxed drop-shadow max-w-[260px] md:max-w-md mx-auto hidden sm:block">
                {isRtl ? contentConfig.about.mission : contentConfig.about.missionEn}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Creativity, Commitment, Satisfaction (3 Cards) */}
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_30px_rgb(0,0,0,0.3)] border border-border/40 overflow-hidden flex flex-col items-center text-center min-h-[160px] md:min-h-[350px] justify-center group transition-transform duration-500 hover:-translate-y-1 bg-surface">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={images.aboutCovers.creativityInnovation} 
                alt={isRtl ? creativityValue?.title : creativityValue?.titleEn} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/30 dark:bg-corporate-navy/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full p-2 md:p-8 flex flex-col justify-end md:justify-center items-center text-center h-full">
              <div className="w-7 h-7 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mb-1.5 md:mb-5 border border-white/20 text-white shadow-lg shrink-0">
                <Sparkles className="w-3.5 h-3.5 md:w-7 md:h-7" />
              </div>
              <h3 className="text-[10px] md:text-2xl font-display font-bold text-white mb-1 md:mb-3 drop-shadow-md leading-tight">
                {isRtl ? creativityValue?.title : creativityValue?.titleEn}
              </h3>
              <p className="text-[9px] md:text-base text-white/90 leading-tight md:leading-relaxed max-w-[200px] md:max-w-xl drop-shadow mx-auto hidden sm:block">
                {isRtl ? creativityValue?.desc : creativityValue?.descEn}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_30px_rgb(0,0,0,0.3)] border border-border/40 overflow-hidden flex flex-col items-center text-center min-h-[160px] md:min-h-[350px] justify-center group transition-transform duration-500 hover:-translate-y-1 bg-surface">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={images.aboutCovers.commitmentCredibility} 
                alt={isRtl ? commitmentValue?.title : commitmentValue?.titleEn} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/30 dark:bg-corporate-navy/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full p-2 md:p-8 flex flex-col justify-end md:justify-center items-center text-center h-full">
              <div className="w-7 h-7 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mb-1.5 md:mb-5 border border-white/20 text-white shadow-lg shrink-0">
                <HeartHandshake className="w-3.5 h-3.5 md:w-7 md:h-7" />
              </div>
              <h4 className="text-[10px] md:text-2xl font-display font-bold text-white mb-1 md:mb-3 drop-shadow-md leading-tight">
                {isRtl ? commitmentValue?.title : commitmentValue?.titleEn}
              </h4>
              <p className="text-[9px] md:text-base text-white/90 leading-tight md:leading-relaxed max-w-[200px] md:max-w-md drop-shadow mx-auto hidden sm:block">
                {isRtl ? commitmentValue?.desc : commitmentValue?.descEn}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl md:rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_30px_rgb(0,0,0,0.3)] border border-border/40 overflow-hidden flex flex-col items-center text-center min-h-[160px] md:min-h-[350px] justify-center group transition-transform duration-500 hover:-translate-y-1 bg-surface">
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={images.aboutCovers.customerSatisfaction} 
                alt={isRtl ? satisfactionValue?.title : satisfactionValue?.titleEn} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-corporate-navy/30 dark:bg-corporate-navy/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full p-2 md:p-8 flex flex-col justify-end md:justify-center items-center text-center h-full">
              <div className="w-7 h-7 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-lg md:rounded-2xl flex items-center justify-center mb-1.5 md:mb-5 border border-white/20 text-white shadow-lg shrink-0">
                <Star className="w-3.5 h-3.5 md:w-7 md:h-7" />
              </div>
              <h4 className="text-[10px] md:text-2xl font-display font-bold text-white mb-1 md:mb-3 drop-shadow-md leading-tight">
                {isRtl ? satisfactionValue?.title : satisfactionValue?.titleEn}
              </h4>
              <p className="text-[9px] md:text-base text-white/90 leading-tight md:leading-relaxed max-w-[260px] md:max-w-md drop-shadow mx-auto hidden sm:block">
                {isRtl ? satisfactionValue?.desc : satisfactionValue?.descEn}
              </p>
            </div>
          </motion.div>
        </div>`;

const startIdx = code.indexOf('{/* Row 1: Vision & Mission */}');
const endIdx = code.indexOf('</motion.section>');

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newRows + '\n      ' + code.substring(endIdx);
    fs.writeFileSync('src/components/sections/AboutUs.tsx', code);
    console.log("Success");
} else {
    console.log("Failed to find indices");
}
