const fs = require('fs');
let code = fs.readFileSync('api/service-gallery.ts', 'utf8');

const target = `    // Diagnostic Discovery Endpoint
    if (req.query.discover === 'true') {`;

const replacement = `    // Discover Card Covers Endpoint
    if (req.query.discoverCovers === 'true') {
      const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
      const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
      const REGION = process.env.BUNNY_STORAGE_REGION || "";
      if (!API_KEY) return res.status(500).json({ error: "Missing BUNNY_STORAGE_API_KEY" });

      let hostname = "storage.bunnycdn.com";
      if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
        hostname = \`\${REGION}.storage.bunnycdn.com\`;
      }

      const url = \`https://\${hostname}/\${ZONE}/almithali-assets/02-website/Service-cardcovers/\`;
      const r = await fetch(url, { headers: { "AccessKey": API_KEY, "Accept": "application/json" } });
      if (!r.ok) return res.status(r.status).json({ error: "Failed to fetch from Bunny" });
      
      const files = await r.json();
      const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
      const covers = files.filter((f: any) => !f.IsDirectory).filter((f: any) => {
        const ext = f.ObjectName.split('.').pop()?.toLowerCase();
        return ext && validExtensions.has(ext);
      }).map((f: any) => ({
        filename: f.ObjectName,
        url: \`https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/\${encodeURIComponent(f.ObjectName).replace(/%20/g, '%20')}\`
      }));

      return res.status(200).json({ covers });
    }

    // Diagnostic Discovery Endpoint
    if (req.query.discover === 'true') {`;

code = code.replace(target, replacement);
fs.writeFileSync('api/service-gallery.ts', code);
console.log("Patched api/service-gallery.ts for covers");
