const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

code = code.replace(
  '<div className="fixed inset-0 z-[9000] flex items-center justify-center pointer-events-auto">',
  '<div className="fixed inset-0 z-[9000] flex items-center justify-center pointer-events-auto" role="dialog" aria-modal="true">'
);

fs.writeFileSync('src/components/sections/Services.tsx', code);
console.log("Added aria to GalleryModal");
