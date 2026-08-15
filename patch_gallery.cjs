const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

const oldA = `<a 
                  href={category.activeSubService?.driveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-deep transition-colors"
                >
                  {isRtl ? 'عرض المجلد في Google Drive مؤقتاً' : 'View Folder in Google Drive Temporarily'}
                </a>`;

code = code.replace(oldA, '');
fs.writeFileSync('src/components/sections/Services.tsx', code);
