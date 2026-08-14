const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Need to import createPortal in Services.tsx
if (!code.includes("import { createPortal } from 'react-dom';")) {
  code = code.replace(
    "import React from 'react';",
    "import React from 'react';\nimport { createPortal } from 'react-dom';"
  );
}
// Import useScrollLock in Services.tsx
if (!code.includes("import { useScrollLock }")) {
  code = code.replace(
    "import React from 'react';",
    "import React from 'react';\nimport { useScrollLock } from '../../hooks/useScrollLock';"
  );
}

// In GalleryModal, use useScrollLock
code = code.replace(
  /  React\.useEffect\(\(\) => \{\n    if \(isOpen\) \{\n      document\.body\.style\.overflow = 'hidden';\n      setHintVisible\(true\);\n      \/\/ Simulate opening the first image directly if we are in a subservice\n      if \(category && category\.activeSubService\) \{\n        setSelectedImage\(0\);\n      \}\n    \} else \{\n      document\.body\.style\.overflow = '';\n      setSelectedImage\(null\);\n    \}\n    return \(\) => \{ document\.body\.style\.overflow = ''; \};\n  \}, \[isOpen, category\]\);/,
  `  useScrollLock(isOpen);
  React.useEffect(() => {
    if (isOpen) {
      setHintVisible(true);
      if (category && category.activeSubService) {
        setSelectedImage(0);
      }
    } else {
      setSelectedImage(null);
    }
  }, [isOpen, category]);`
);

// Find the return of GalleryModal
const oldReturnStr = `  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div`;

const newReturnStr = `  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center pointer-events-auto">
          <motion.div`;

code = code.replace(oldReturnStr, newReturnStr);

// The end of GalleryModal is currently returning:
//       </motion.div>
//     </div>
//   );
// }
code = code.replace(
  /      <\/motion\.div>\n    <\/div>\n  \);\n\}/,
  `        </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}`
);

fs.writeFileSync('src/components/sections/Services.tsx', code);
console.log("Fixed GalleryModal");
