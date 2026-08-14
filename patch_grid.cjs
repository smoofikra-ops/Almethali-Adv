const fs = require('fs');
let code = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');

code = code.replace(
  'const response = await fetch(`/api/service-gallery?subcategory=${subService.id}`);',
  'const response = await fetch(`/api/service-gallery?id=${subService.id}`);'
);

fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', code);
console.log("Patched grid.");
