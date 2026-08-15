const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

const startIndex = code.indexOf('<a');
const searchString = `href={
                        category.id === 'advertising-signage' ? 'https://drive.google.com`;

const actualStartIndex = code.indexOf(searchString);

if (actualStartIndex !== -1) {
  const aTagStart = code.lastIndexOf('<a', actualStartIndex);
  const aTagEnd = code.indexOf('</a>', actualStartIndex) + 4;
  
  const blockToReplace = code.substring(aTagStart, aTagEnd);
  
  const replacement = `<div className="w-full bg-surface-elevated/50 border border-border text-text-secondary px-1.5 py-2 sm:px-2 sm:py-2 md:px-4 md:py-3 rounded-md md:rounded-xl font-medium text-[9px] sm:text-[10px] md:text-sm flex items-center justify-center gap-2 mt-auto shrink-0 pointer-events-none">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-accent"
                        aria-hidden="true"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4"><path d="m18 15-6-6-6 6"/></svg>
                      </motion.div>
                      <span>{isRtl ? 'الرجاء اختيار القسم المطلوب' : 'Please select a service above'}</span>
                    </div>`;

  code = code.replace(blockToReplace, replacement);
  fs.writeFileSync('src/components/sections/Services.tsx', code);
  console.log("Patched Services.tsx");
} else {
  console.log("Could not find block");
}
