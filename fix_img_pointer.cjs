const fs = require('fs');

let gridCode = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');
gridCode = gridCode.replace(
    'className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"',
    'className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"'
);
fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', gridCode);

let studioCode = fs.readFileSync('src/components/gallery/ServiceGalleryStudio.tsx', 'utf8');
studioCode = studioCode.replace(
    'className={`max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg border border-white/10 transition-opacity duration-300 select-none pointer-events-none ${loadedImages.has(currentIndex) ? \'opacity-100\' : \'opacity-0\'}`}',
    'className={`max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg border border-white/10 transition-opacity duration-300 select-none ${loadedImages.has(currentIndex) ? \'opacity-100\' : \'opacity-0\'}`}'
);
fs.writeFileSync('src/components/gallery/ServiceGalleryStudio.tsx', studioCode);

console.log("Removed pointer-events-none from imgs");
