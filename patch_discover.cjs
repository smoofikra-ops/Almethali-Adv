const fs = require('fs');
let code = fs.readFileSync('api/service-gallery.ts', 'utf8');

const target = `    const galleryId = req.query.id as string;
    
    if (!galleryId || !ALLOWED_GALLERIES[galleryId]) {
      return res.status(400).json({ error: "Invalid or missing gallery ID" });
    }`;

const replacement = `    // Diagnostic Discovery Endpoint
    if (req.query.discover === 'true') {
      const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
      const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
      const REGION = process.env.BUNNY_STORAGE_REGION || "";
      
      if (!API_KEY) {
        return res.status(500).json({ error: "Missing BUNNY_STORAGE_API_KEY in environment" });
      }

      let hostname = "storage.bunnycdn.com";
      if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
        hostname = \`\${REGION}.storage.bunnycdn.com\`;
      }

      const listDir = async (path: string) => {
        const url = \`https://\${hostname}/\${ZONE}/\${path}/\`;
        const r = await fetch(url, { headers: { "AccessKey": API_KEY, "Accept": "application/json" } });
        if (!r.ok) return [];
        return await r.json();
      };

      const mainDirs = await listDir('almithali-assets/05-services');
      const result = [];

      for (const mainDir of mainDirs.filter((d: any) => d.IsDirectory)) {
        const subfolders = [];
        const subDirs = await listDir(\`almithali-assets/05-services/\${mainDir.ObjectName}\`);
        
        for (const subDir of subDirs.filter((d: any) => d.IsDirectory)) {
          const files = await listDir(\`almithali-assets/05-services/\${mainDir.ObjectName}/\${subDir.ObjectName}\`);
          
          const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
          const imageCount = files.filter((file: any) => !file.IsDirectory).filter((file: any) => {
            const ext = file.ObjectName.split('.').pop()?.toLowerCase();
            return ext && validExtensions.has(ext);
          }).length;

          subfolders.push({
            name: subDir.ObjectName,
            path: \`almithali-assets/05-services/\${mainDir.ObjectName}/\${subDir.ObjectName}\`,
            supportedImageCount: imageCount
          });
        }
        
        result.push({
          mainFolder: mainDir.ObjectName,
          subfolders
        });
      }

      return res.status(200).json({ discovery: result });
    }

    const galleryId = req.query.id as string;
    
    if (!galleryId || !ALLOWED_GALLERIES[galleryId]) {
      return res.status(400).json({ error: "Invalid or missing gallery ID" });
    }`;

code = code.replace(target, replacement);
fs.writeFileSync('api/service-gallery.ts', code);
console.log("Patched api/service-gallery.ts");
