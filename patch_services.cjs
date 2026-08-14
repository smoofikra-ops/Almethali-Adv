const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

code = code.replace(
  /        \{selectedCategory && selectedCategory\.activeSubService && \(\n          <PortfolioGrid\n            isOpen=\{true\}\n            onClose=\{\(\) => setSelectedCategory\(null\)\}\n            categoryTitle=\{isRtl \? selectedCategory\.arTitle \: selectedCategory\.enTitle\}\n            subService=\{selectedCategory\.activeSubService\}\n            isRtl=\{isRtl\}\n          \/>\n        \)\}/,
  `        <PortfolioGrid
          isOpen={!!(selectedCategory && selectedCategory.activeSubService)}
          onClose={() => setSelectedCategory(null)}
          categoryTitle={isRtl ? selectedCategory?.arTitle : selectedCategory?.enTitle}
          subService={selectedCategory?.activeSubService}
          isRtl={isRtl}
        />`
);

code = code.replace(
  /        \{selectedCategory && \!selectedCategory\.activeSubService && \(\n          <GalleryModal \n             isOpen=\{\!\!selectedCategory\}\n             onClose=\{\(\) => setSelectedCategory\(null\)\}\n             category=\{selectedCategory\}\n             isRtl=\{isRtl\}\n             t=\{t\}\n           \/>\n        \)\}/,
  `        {/* We assume GalleryModal was handled or will be handled similarly */}
        {selectedCategory && !selectedCategory.activeSubService && (
          <GalleryModal 
             isOpen={!!selectedCategory}
             onClose={() => setSelectedCategory(null)}
             category={selectedCategory}
             isRtl={isRtl}
             t={t}
           />
        )}`
);

fs.writeFileSync('src/components/sections/Services.tsx', code);
console.log("Patched Services");
