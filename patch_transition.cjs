const fs = require('fs');
let code = fs.readFileSync('src/components/layout/SectionTransition.tsx', 'utf8');

const gradientOld = `    {withSeparator && (
      <div className={\`pointer-events-none opacity-40 md:opacity-60 \${isFromLight ? 'text-primary mix-blend-multiply' : 'text-accent-soft mix-blend-screen'}\`}>
        <svg width="180" height="12" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current w-32 md:w-48">
          <path d="M 3 8 C 45 10, 85 -2, 130 6 C 150 9.5, 170 4, 177 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    )}`;

const gradientNew = `    {withSeparator && (
      <div className="pointer-events-none opacity-40 md:opacity-60 text-primary dark:text-accent-soft mix-blend-multiply dark:mix-blend-screen drop-shadow-sm">
        <svg width="180" height="12" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current w-32 md:w-48">
          <path d="M 3 8 C 45 10, 85 -2, 130 6 C 150 9.5, 170 4, 177 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    )}`;

code = code.replace(gradientOld, gradientNew);

fs.writeFileSync('src/components/layout/SectionTransition.tsx', code);
console.log("Success");
