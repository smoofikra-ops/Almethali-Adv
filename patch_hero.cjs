const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// replace careersBtn with catalogBtn, add BookOpen icon
code = code.replace(
  "import { Phone, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';",
  "import { Phone, ArrowLeft, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';"
);

code = code.replace(
  /href="#careers".*?\{t\.hero\.careersBtn\}/s,
  'href="#/catalog" className="w-full sm:w-auto bg-surface-elevated/10 backdrop-blur-md text-white border border-border px-8 py-4 rounded-xl font-bold text-base hover:border-accent hover:bg-accent/20 hover:text-white focus:text-white active:text-white transition-all shadow-sm flex items-center justify-center gap-2">\n              <BookOpen className="w-5 h-5 text-current" />\n              {t.hero.catalogBtn}'
);

fs.writeFileSync('src/components/sections/Hero.tsx', code);
console.log("Hero Patched");
