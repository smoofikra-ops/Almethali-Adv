const fs = require('fs');
let code = fs.readFileSync('src/components/gallery/ServiceGalleryStudio.tsx', 'utf8');

// Import createPortal and useScrollLock
code = code.replace(
  "import React, { useState, useEffect, useCallback } from 'react';",
  "import React, { useState, useEffect, useCallback } from 'react';\nimport { createPortal } from 'react-dom';\nimport { useScrollLock } from '../../hooks/useScrollLock';"
);

// Replace document.body.style.overflow
code = code.replace(
  /      document\.body\.style\.overflow = 'hidden';/g,
  ""
);
code = code.replace(
  /      document\.body\.style\.overflow = '';/g,
  ""
);
code = code.replace(
  /    return \(\) => \{ document\.body\.style\.overflow = ''; \};/g,
  ""
);

// Insert useScrollLock
code = code.replace(
  /  useEffect\(\(\) => \{\n    if \(isOpen\) \{\n      setCurrentIndex\(0\);/,
  "  useScrollLock(isOpen);\n\n  useEffect(() => {\n    if (isOpen) {\n      setCurrentIndex(0);"
);

// Fix return
code = code.replace(
  /  if \(!isOpen\) return null;\n\n  return \(\n    <AnimatePresence>\n      <motion\.div/,
  `  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
      <motion.div`
);

// Change z-index
code = code.replace(
  /className="fixed inset-0 z-\[100\] flex items-center justify-center bg-\[\#141438\]\/98 backdrop-blur-xl"/,
  'className="fixed inset-0 z-[9020] flex items-center justify-center bg-[#141438]/98 backdrop-blur-xl pointer-events-auto"'
);

// Close at the end
code = code.replace(
  /      <\/motion\.div>\n    <\/AnimatePresence>\n  \);\n\}/,
  `      </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}`
);

fs.writeFileSync('src/components/gallery/ServiceGalleryStudio.tsx', code);
console.log("Fixed ServiceGalleryStudio");
