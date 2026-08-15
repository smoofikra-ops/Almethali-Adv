const fs = require('fs');

let code = fs.readFileSync('src/components/gallery/ServiceGalleryStudio.tsx', 'utf8');
code = code.replace(
  '<p>{isRtl ? "لا توجد صور لعرضها" : "No images to display"}</p>',
  '<p>{isRtl ? "سيتم إضافة نماذج من أعمال هذا القسم قريبًا." : "Samples of this section\'s work will be added soon."}</p>'
);
fs.writeFileSync('src/components/gallery/ServiceGalleryStudio.tsx', code);
console.log("Patched ServiceGalleryStudio.tsx");
