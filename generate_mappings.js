const fs = require('fs');

const mainFolderMapping = {
  "advertising-signage": "1-advertising-signage",
  "digital-printing-production": "2-digital-printing-execution",
  "events-conferences": "3-events-conferences",
  "exhibitions-booths": "4-exhibitions-kiosks",
  "display-stands": "5-stands-display-solutions",
  "promotional-gifts": "6-corporate-promotional-gifts"
};

const kebabCase = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

let code = fs.readFileSync('src/config/services.ts', 'utf8');

// Simple regex replace to add id and storagePath
for (const [catId, mainFolder] of Object.entries(mainFolderMapping)) {
  const catRegex = new RegExp(`(id:\\s*"${catId}"[\\s\\S]*?internalServices:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
  code = code.replace(catRegex, (match, p1, p2, p3) => {
    let subservices = p2;
    // match each subservice object
    subservices = subservices.replace(/{\s*arName:\s*"([^"]+)",\s*enName:\s*"([^"]+)"(.*?)}/g, (m, arName, enName, rest) => {
      // If it already has an id, keep it
      if (rest.includes('id:')) return m;
      
      const subId = kebabCase(enName);
      const storagePath = `almithali-assets/05-services/${mainFolder}/${subId}`;
      return `{ id: "${subId}", storagePath: "${storagePath}", arName: "${arName}", enName: "${enName}"${rest}}`;
    });
    return p1 + subservices + p3;
  });
}

fs.writeFileSync('src/config/services.ts', code);
console.log("Updated services.ts with ids and storagePaths");
