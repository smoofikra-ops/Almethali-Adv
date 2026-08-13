const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

// The original prompt said "Replace ONLY this CTA with... in the existing Hero section". 
// But we renamed the translation key in locales from careersBtn to catalogBtn.
// Header.tsx and Footer.tsx might still be referencing `t.nav.careers`. Wait, let me check locales again.
// The key we renamed was `t.hero.careersBtn`, not `t.nav.careers`.
