const fs = require('fs');
let code = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');

code = code.replace(
  "import React, { useState, useEffect } from 'react';",
  "import React, { useState, useEffect } from 'react';\nimport { createPortal } from 'react-dom';\nimport { useScrollLock } from '../../hooks/useScrollLock';"
);

// Remove manual overflow handling
code = code.replace(
  /  useEffect\(\(\) => \{\n    if \(isOpen\) \{\n      document\.body\.style\.overflow = 'hidden';\n      fetchImages\(\);\n    \} else \{\n      document\.body\.style\.overflow = '';\n      setSelectedImageIndex\(null\);\n    \}\n    return \(\) => \{\n      document\.body\.style\.overflow = '';\n    \};\n  \}, \[isOpen, subService\]\);/g,
  "  useScrollLock(isOpen);\n\n  useEffect(() => {\n    if (isOpen) {\n      fetchImages();\n    } else {\n      setSelectedImageIndex(null);\n    }\n  }, [isOpen, subService]);"
);

// Wrap the return statement with createPortal
const returnBlock = `  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div`;

const replacement = `  if (typeof document === 'undefined') return null;\n\n  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div`;

code = code.replace(
  /  if \(!isOpen\) return null;\n\n  return \(\n    <AnimatePresence>\n      <motion\.div/g,
  replacement
);

// Close the portal at the end of the file!
// The end of the component used to be:
//         </motion.div>
//       </AnimatePresence>
//     );
//   }

code = code.replace(
  /        <\/motion\.div>\n    <\/AnimatePresence>\n  \);\n\}/,
  "        </motion.div>\n      )}\n    </AnimatePresence>,\n    document.body\n  );\n}"
);

// Also change the ServiceGalleryStudio usage to pass isOpen appropriately
// It currently uses:
//       {selectedImageIndex !== null && (
//         <ServiceGalleryStudio
//           isOpen={true}
//           onClose={() => setSelectedImageIndex(null)}
//           images={images}
//           mainTitle={categoryTitle}
//           subTitle={subTitle}
//           isRtl={isRtl}
//           initialIndex={selectedImageIndex}
//         />
//       )}
code = code.replace(
  /      \{\/\* Fullscreen Studio Modal \*\/\}\n      \{selectedImageIndex !== null && \(\n        <ServiceGalleryStudio\n          isOpen=\{true\}/,
  "      {/* Fullscreen Studio Modal */}\n      <ServiceGalleryStudio\n        isOpen={selectedImageIndex !== null}"
);
code = code.replace(
  /          initialIndex=\{selectedImageIndex\}\n        \/>\n      \)\}/,
  "        initialIndex={selectedImageIndex ?? 0}\n      />"
);

// Replace fixed inset-0 z-[90] with z-[9000] (using centralized token concept)
code = code.replace(
  /className="fixed inset-0 z-\[90\] bg-\[\#f8fafc\] dark:bg-background overflow-y-auto"/,
  'className="fixed inset-0 z-[9000] bg-[#f8fafc] dark:bg-background overflow-y-auto overscroll-contain"'
);

fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', code);
console.log("Patched PortfolioGrid");
