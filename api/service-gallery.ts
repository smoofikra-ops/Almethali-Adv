import type { VercelRequest, VercelResponse } from '@vercel/node';

import { servicesConfig } from '../src/config/services.js';

const ALLOWED_GALLERIES: Record<string, string> = {};
servicesConfig.categories.forEach((cat: any) => {
  cat.internalServices.forEach((sub: any) => {
    if (sub.id && sub.storagePath) {
      ALLOWED_GALLERIES[sub.id] = sub.storagePath;
    }
  });
});

const CDN_BASE_URL = "https://nmolabs-cdn.b-cdn.net";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers for testing/preview environments if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Discover Card Covers Endpoint
    if (req.query.discoverCovers === 'true') {
      const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
      const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
      const REGION = process.env.BUNNY_STORAGE_REGION || "";
      if (!API_KEY) return res.status(500).json({ error: "Missing BUNNY_STORAGE_API_KEY" });

      let hostname = "storage.bunnycdn.com";
      if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
        hostname = `${REGION}.storage.bunnycdn.com`;
      }

      const url = `https://${hostname}/${ZONE}/almithali-assets/02-website/Service-cardcovers/`;
      const r = await fetch(url, { headers: { "AccessKey": API_KEY, "Accept": "application/json" } });
      if (!r.ok) return res.status(r.status).json({ error: "Failed to fetch from Bunny" });
      
      const files = await r.json();
      const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
      const covers = files.filter((f: any) => !f.IsDirectory).filter((f: any) => {
        const ext = f.ObjectName.split('.').pop()?.toLowerCase();
        return ext && validExtensions.has(ext);
      }).map((f: any) => ({
        filename: f.ObjectName,
        url: `https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/${encodeURIComponent(f.ObjectName).replace(/%20/g, '%20')}`
      }));

      return res.status(200).json({ covers });
    }

    // Diagnostic Discovery Endpoint
    if (req.query.discover === 'true') {
      const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
      const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
      const REGION = process.env.BUNNY_STORAGE_REGION || "";
      
      if (!API_KEY) {
        return res.status(500).json({ error: "Missing BUNNY_STORAGE_API_KEY in environment" });
      }

      let hostname = "storage.bunnycdn.com";
      if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
        hostname = `${REGION}.storage.bunnycdn.com`;
      }

      const listDir = async (path: string) => {
        const url = `https://${hostname}/${ZONE}/${path}/`;
        const r = await fetch(url, { headers: { "AccessKey": API_KEY, "Accept": "application/json" } });
        if (!r.ok) return [];
        return await r.json();
      };

      const mainDirs = await listDir('almithali-assets/05-services');
      const result = [];

      for (const mainDir of mainDirs.filter((d: any) => d.IsDirectory)) {
        const subfolders = [];
        const subDirs = await listDir(`almithali-assets/05-services/${mainDir.ObjectName}`);
        
        for (const subDir of subDirs.filter((d: any) => d.IsDirectory)) {
          const files = await listDir(`almithali-assets/05-services/${mainDir.ObjectName}/${subDir.ObjectName}`);
          
          const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
          const imageCount = files.filter((file: any) => !file.IsDirectory).filter((file: any) => {
            const ext = file.ObjectName.split('.').pop()?.toLowerCase();
            return ext && validExtensions.has(ext);
          }).length;

          subfolders.push({
            name: subDir.ObjectName,
            path: `almithali-assets/05-services/${mainDir.ObjectName}/${subDir.ObjectName}`,
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
    }

    const storagePath = ALLOWED_GALLERIES[galleryId];
    const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
    const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
    const REGION = process.env.BUNNY_STORAGE_REGION || "";
    
    if (!API_KEY) {
      console.error("Missing BUNNY_STORAGE_API_KEY");
      return res.status(500).json({
        error: "Storage configuration error",
        galleryId: galleryId,
        storagePath: storagePath,
        env: {
          zone: process.env.BUNNY_STORAGE_ZONE ? "present" : "missing",
          region: process.env.BUNNY_STORAGE_REGION ? "present" : "missing",
          apiKey: process.env.BUNNY_STORAGE_API_KEY ? "present" : "missing"
        }
      });
    }

    // Determine hostname. Falkenstein (de) is the main endpoint usually, so no prefix.
    let hostname = "storage.bunnycdn.com";
    if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
      hostname = `${REGION}.storage.bunnycdn.com`;
    }

    // Bunny API requires a trailing slash for listing directories
    const apiUrl = `https://${hostname}/${ZONE}/${storagePath}/`;
    
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "AccessKey": API_KEY,
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      console.error(`Bunny API error: ${response.status} ${response.statusText} for ${apiUrl}`);
      return res.status(response.status).json({
        error: "Bunny Storage request failed",
        status: response.status,
        galleryId: galleryId,
        storagePath: storagePath,
        env: {
          zone: process.env.BUNNY_STORAGE_ZONE ? "present" : "missing",
          region: process.env.BUNNY_STORAGE_REGION ? "present" : "missing",
          apiKey: process.env.BUNNY_STORAGE_API_KEY ? "present" : "missing"
        }
      });
    }

    const files = await response.json();
    
    if (!Array.isArray(files)) {
      return res.status(500).json({ error: "Invalid response from storage" });
    }

    let heicCount = 0;
    const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);

    const images = files
      .filter((file: any) => !file.IsDirectory)
      .filter((file: any) => {
        const ext = file.ObjectName.split('.').pop()?.toLowerCase();
        if (ext === 'heic' || ext === 'heif') {
          heicCount++;
          return false;
        }
        return ext && validExtensions.has(ext);
      })
      .map((file: any) => {
        const ext = file.ObjectName.split('.').pop()?.toLowerCase();
        const url = `${CDN_BASE_URL}/${storagePath}/${encodeURIComponent(file.ObjectName).replace(/%20/g, '%20')}`;
        
        return {
          name: file.ObjectName,
          url,
          extension: ext
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

    if (heicCount > 0) {
      console.debug(`Skipped ${heicCount} HEIC/HEIF files in ${storagePath}`);
    }

    // Set Cache-Control header for Vercel edge/CDN cache (e.g. 15 minutes)
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=300');

    res.status(200).json({
      id: galleryId,
      count: images.length,
      images: images
    });
  } catch (err) {
    console.error("Error in service-gallery Vercel API:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
