const fs = require('fs');
let code = fs.readFileSync('/tmp/services.ts.backup', 'utf8');

// We want to safely remove driveUrl and folderId keys
// using regex that handles the commas gracefully.
code = code.replace(/,\s*driveUrl:\s*"https:\/\/drive\.google\.com[^"]*"/g, '');
code = code.replace(/driveUrl:\s*"https:\/\/drive\.google\.com[^"]*",\s*/g, '');
code = code.replace(/,\s*folderId:\s*"[^"]*"/g, '');
code = code.replace(/folderId:\s*"[^"]*",\s*/g, '');

// just to be sure we also make the types optional
code = code.replace(/driveUrl: string;/g, 'driveUrl?: string;');
code = code.replace(/folderId: string;/g, 'folderId?: string;');

fs.writeFileSync('src/config/services.ts', code);
console.log("Fixed services.ts");
