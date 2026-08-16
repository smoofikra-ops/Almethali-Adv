const fs = require('fs');

// --- Patch PortfolioGrid.tsx ---
let gridCode = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');

const gridTarget = `                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="group relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-dark cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <img
                        src={url}
                        alt={\`\${subTitle} - \${idx + 1}\`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </motion.div>`;

const gridReplacement = `                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="group relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-dark cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImageIndex(idx)}
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <img
                        src={url}
                        alt={\`\${subTitle} - \${idx + 1}\`}
                        loading="lazy"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                      />
                      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-20 overflow-hidden opacity-[0.35]">
                        <div className="flex flex-col items-center justify-center -rotate-12 scale-110">
                          <span className="text-white font-display font-bold text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap select-none">المثالي للدعاية والإعلان</span>
                          <span className="text-white/90 font-display font-medium text-[10px] sm:text-[11px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-widest whitespace-nowrap mt-1 select-none" dir="ltr">almethaliadv.com</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-30 pointer-events-none" />
                    </motion.div>`;

if (gridCode.includes(gridTarget)) {
    gridCode = gridCode.replace(gridTarget, gridReplacement);
    fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', gridCode);
    console.log("PortfolioGrid patched.");
} else {
    console.error("Could not find target in PortfolioGrid");
}

// --- Patch ServiceGalleryStudio.tsx ---
let studioCode = fs.readFileSync('src/components/gallery/ServiceGalleryStudio.tsx', 'utf8');

const studioTarget = `                  <img 
                    src={images[currentIndex]}
                    alt={\`\${subTitle} - Image \${currentIndex + 1}\`}
                    className={\`max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg border border-white/10 transition-opacity duration-300 \${loadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'}\`}
                    draggable="false"
                  />`;

const studioReplacement = `                  <img 
                    src={images[currentIndex]}
                    alt={\`\${subTitle} - Image \${currentIndex + 1}\`}
                    className={\`max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg border border-white/10 transition-opacity duration-300 select-none pointer-events-none \${loadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'}\`}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                  />
                  <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-20 overflow-hidden opacity-[0.4]">
                    <div className="flex flex-col items-center justify-center -rotate-[15deg] scale-150">
                      <span className="text-white font-display font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] whitespace-nowrap select-none">المثالي للدعاية والإعلان</span>
                      <span className="text-white/90 font-display font-medium text-sm sm:text-base md:text-lg drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] tracking-[0.2em] whitespace-nowrap mt-2 select-none" dir="ltr">almethaliadv.com</span>
                    </div>
                  </div>`;

if (studioCode.includes(studioTarget)) {
    studioCode = studioCode.replace(studioTarget, studioReplacement);
    // Also attach onContextMenu preventDefault on motion wrapper
    studioCode = studioCode.replace(
      '                  <motion.div\n                    key={currentIndex}',
      '                  <motion.div\n                    key={currentIndex}\n                    onContextMenu={(e) => e.preventDefault()}'
    );
    fs.writeFileSync('src/components/gallery/ServiceGalleryStudio.tsx', studioCode);
    console.log("ServiceGalleryStudio patched.");
} else {
    console.error("Could not find target in ServiceGalleryStudio");
}

