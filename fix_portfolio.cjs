const fs = require('fs');
let code = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');

// Find the start of the return statement
const returnStart = code.indexOf('  if (typeof document === \'undefined\') return null;\n\n  return createPortal(');
const beforeReturn = code.substring(0, returnStart);

const newReturn = `  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="portfolio-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9000] bg-[#f8fafc] dark:bg-background overflow-y-auto overscroll-contain"
          >
            <div className="min-h-screen p-4 sm:p-6 md:p-12 relative max-w-[1600px] mx-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-8 sm:mb-12 pt-4 sm:pt-0 sticky top-0 bg-[#f8fafc]/90 dark:bg-background/90 backdrop-blur-md z-10 pb-4">
                <div>
                  <p className="text-accent font-display text-sm uppercase tracking-wider mb-2">
                    {categoryTitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary">
                    {subTitle}
                  </h2>
                </div>
                
                <button
                  onClick={onClose}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-elevated/50 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors border border-border shrink-0"
                  aria-label={isRtl ? "إغلاق" : "Close"}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Content */}
              {loading ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-text-secondary gap-4">
                  <Loader2 className="w-8 h-8 animate-spin text-accent" />
                  <p className="text-sm font-medium">
                    {isRtl ? "جاري تحميل معرض الأعمال..." : "Loading portfolio..."}
                  </p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-text-secondary gap-6 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
                    <X className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {isRtl ? "عذرًا" : "Oops"}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6">
                      {isRtl 
                        ? "تعذر تحميل معرض الأعمال حاليًا. حاول مرة أخرى بعد قليل." 
                        : "The gallery could not be loaded right now. Please try again shortly."}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={fetchImages}
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent-deep transition-colors"
                    >
                      <RefreshCcw className="w-4 h-4" />
                      {isRtl ? "إعادة المحاولة" : "Try Again"}
                    </button>
                    <button
                      onClick={handleReturnToServices}
                      className="px-6 py-3 bg-surface text-text-primary rounded-xl font-medium hover:bg-surface-elevated transition-colors border border-border"
                    >
                      {isRtl ? "العودة إلى الخدمات" : "Back to Services"}
                    </button>
                    <button
                      onClick={handleReturnHome}
                      className="px-6 py-3 text-text-secondary hover:text-text-primary transition-colors font-medium"
                    >
                      {isRtl ? "الرئيسية" : "Home"}
                    </button>
                  </div>
                </div>
              ) : images.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-text-secondary gap-6 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center text-text-secondary">
                    <X className="w-8 h-8 opacity-50" />
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed mb-6 font-medium text-text-primary">
                      {isRtl ? "سيتم إضافة نماذج من أعمال هذا القسم قريبًا." : "Portfolio examples for this service will be added soon."}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReturnToServices}
                      className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent-deep transition-colors"
                    >
                      {isRtl ? "العودة إلى الخدمات" : "Back to Services"}
                    </button>
                    <button
                      onClick={handleReturnHome}
                      className="px-6 py-3 text-text-secondary hover:text-text-primary transition-colors font-medium border border-transparent hover:border-border rounded-xl"
                    >
                      {isRtl ? "الرئيسية" : "Home"}
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
                >
                  {images.map((url, idx) => (
                    <motion.div
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
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ServiceGalleryStudio
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        images={images}
        mainTitle={categoryTitle}
        subTitle={subTitle}
        isRtl={isRtl}
        initialIndex={selectedImageIndex ?? 0}
      />
    </>,
    document.body
  );
}
`;

fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', beforeReturn + newReturn);
console.log("Written PortfolioGrid");
