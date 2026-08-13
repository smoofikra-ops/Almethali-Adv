const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// 1. Update main card container classes
code = code.replace(
  'className={`group perspective-[2000px] h-[260px] md:h-[350px] lg:h-[450px] transition-transform duration-500 hover:-translate-y-2 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-3xl ${gridPlacementClass}`}',
  'className={`group perspective-[2000px] aspect-[4/5] md:aspect-auto md:h-[350px] lg:h-[450px] transition-transform duration-500 hover:-translate-y-2 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-2xl md:rounded-3xl ${gridPlacementClass}`}'
);

// 2. Update shadow container
code = code.replace(
  'rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.1)]',
  'rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.1)]'
);

// 3. Update Front Face
const frontFaceOld = `                                    {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-border/50 bg-corporate-navy relative z-10 before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:z-20">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={category.coverImage} 
                        alt={altText}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/95 via-corporate-navy/40 to-transparent"></div>
                    </div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-start rtl:text-right">
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-2xl text-white mb-1 leading-tight">{title}</h3>
                        <h4 className="font-display font-medium text-sm text-accent mb-3 uppercase tracking-wider">{subtitle}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 self-end rtl:self-start">
                        <LayoutGrid className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>`;

const frontFaceNew = `                                    {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 bg-corporate-navy relative z-10 before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl before:border before:border-white/10 before:z-20">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={category.coverImage} 
                        alt={altText}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/95 via-corporate-navy/40 to-black/10"></div>
                    </div>
                    
                    <div className="absolute inset-0 p-3 pb-4 sm:p-5 md:p-8 flex flex-col justify-end text-start rtl:text-right">
                      <div className="mb-2 md:mb-4">
                        <h3 className="font-display font-bold text-base sm:text-lg md:text-2xl text-white mb-1 leading-tight drop-shadow-md">{title}</h3>
                        <h4 className="hidden md:block font-display font-medium text-sm text-accent mb-3 uppercase tracking-wider">{subtitle}</h4>
                        <p className="hidden md:block text-white/80 text-sm leading-relaxed line-clamp-3">{desc}</p>
                      </div>
                      
                      {/* Mobile Interaction Cue */}
                      <div className="md:hidden flex items-center gap-1.5 self-start rtl:self-end bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
                        <span className="text-white text-[10px] sm:text-xs font-bold leading-none">{isRtl ? 'استعرض المزيد' : 'Explore'}</span>
                        <Pointer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent animate-pulse" />
                      </div>

                      {/* Desktop Interaction Cue */}
                      <div className="hidden md:flex w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20 self-end rtl:self-start">
                        <LayoutGrid className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>`;

code = code.replace(frontFaceOld, frontFaceNew);

// 4. Update Back Face
const backFaceOld = `                                    {/* Card Reverse */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-accent/30 bg-background/90 backdrop-blur-xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary mb-6 pb-4 border-b border-border">
                        {title}
                      </h3>
                      
                      <ul className="space-y-3 mb-4">
                        {topServices.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-sm text-text-primary font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCategory({ ...category, activeSubService: service });
                              }}
                              className="hover:text-accent transition-colors text-start"
                            >
                              {isRtl ? service.arName : service.enName}
                            </button>
                          </li>
                        ))}
                      </ul>
                      
                      {hasMoreServices && (
                        <p className="text-xs font-bold text-text-primary/50 mt-4 italic">
                          {moreText}
                        </p>
                      )}
                    </div>`;

const backFaceNew = `                                    {/* Card Reverse */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl md:rounded-3xl overflow-hidden border border-accent/30 bg-background/95 backdrop-blur-xl p-3 sm:p-5 md:p-8 flex flex-col justify-between">
                    <div className="overflow-y-auto scrollbar-hide">
                      <h3 className="font-display font-bold text-sm sm:text-base md:text-xl text-text-primary mb-2 sm:mb-4 md:mb-6 pb-2 md:pb-4 border-b border-border leading-tight">
                        {title}
                      </h3>
                      
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-2 md:mb-4">
                        {topServices.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-text-primary font-medium">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-accent shrink-0 mt-0.5" />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCategory({ ...category, activeSubService: service });
                              }}
                              className="hover:text-accent transition-colors text-start leading-tight"
                            >
                              {isRtl ? service.arName : service.enName}
                            </button>
                          </li>
                        ))}
                      </ul>
                      
                      {hasMoreServices && (
                        <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-text-primary/50 mt-2 md:mt-4 italic">
                          {moreText}
                        </p>
                      )}
                    </div>`;
                    
code = code.replace(backFaceOld, backFaceNew);

fs.writeFileSync('src/components/sections/Services.tsx', code);
console.log("Success");
