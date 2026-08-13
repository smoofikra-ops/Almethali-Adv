const fs = require('fs');
let code = fs.readFileSync('src/locales/index.ts', 'utf8');

code = code.replace(
  'careersBtn: "انضم إلينا الآن",',
  'catalogBtn: "استعرض الكتالوج",'
);

code = code.replace(
  'careersBtn: "Join Us Now",',
  'catalogBtn: "View Catalog",'
);

fs.writeFileSync('src/locales/index.ts', code);
console.log("Locales Patched");
