const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

const target1 = `                <h4 className="text-xl font-bold mb-4">{isRtl ? 'مطلوب إعداد ربط مع Google Drive' : 'Google Drive API Integration Required'}</h4>`;
const target2 = `                <p className="text-white/70 mb-4 leading-relaxed">
                  {isRtl 
                    ? \`لعرض الصور الخاصة بخدمة "\${title}" مباشرة، يجب إعداد أداة ربط (Media Adapter) لقراءة الملفات من المجلد.\`
                    : \`To display images for "\${title}", a Media Adapter must be configured to read files from the folder.\`
                  }
                </p>`;
const target3 = `                <p className="text-white/50 text-xs font-mono mb-8 p-3 bg-white/5 rounded-lg border border-white/10 break-all">
                  Folder ID: {category.activeSubService?.folderId}
                </p>`;

code = code.replace(target1, '');
code = code.replace(target2, '');
code = code.replace(target3, '');
fs.writeFileSync('src/components/sections/Services.tsx', code);
