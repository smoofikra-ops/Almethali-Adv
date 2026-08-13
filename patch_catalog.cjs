const fs = require('fs');
let code = fs.readFileSync('src/pages/CatalogPage.tsx', 'utf8');

code = code.replace(
  "import { animationRegistry } from '../lib/animations';",
  "import { animationRegistry } from '../lib/animations';\nimport { images } from '../config/images';"
);

code = code.replace(
  '<img src="/assets/logo.svg" alt="Al-Mithali" className="w-12 h-12 opacity-80 filter invert brightness-0" />',
  '<img src={images.brand.logoFooterDark || images.brand.logoDark} alt="Al-Mithali" className="w-24 h-24 object-contain opacity-90" />'
);

fs.writeFileSync('src/pages/CatalogPage.tsx', code);
console.log("Catalog Patched");
