import { Router } from 'express';

export const serviceGalleryRouter = Router();

const ALLOWED_GALLERIES: Record<string, string> = {
  "project-site-fences-signage": "almithali-assets/05-services/1-advertising-signage/project-site-fences-signage",
  "indoor-outdoor-signage": "almithali-assets/05-services/1-advertising-signage/indoor-outdoor-signage",
  "forex-board": "almithali-assets/05-services/1-advertising-signage/forex-board",
  "canvas": "almithali-assets/05-services/1-advertising-signage/canvas",
  "acrylic": "almithali-assets/05-services/1-advertising-signage/acrylic"
};

const CDN_BASE_URL = "https://nmolabs-cdn.b-cdn.net";

// Simple in-memory cache
interface CacheEntry {
  data: any;
  timestamp: number;
}
const cache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

serviceGalleryRouter.get('/', async (req, res) => {
  try {
    const subcategory = req.query.subcategory as string;
    
    if (!subcategory || !ALLOWED_GALLERIES[subcategory]) {
      return res.status(400).json({ error: "Invalid or missing subcategory ID" });
    }

    const storagePath = ALLOWED_GALLERIES[subcategory];

    // Check cache
    const cached = cache.get(subcategory);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return res.json(cached.data);
    }

    const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
    const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets"; // Fallback to assumed zone if not set
    let REGION = process.env.BUNNY_STORAGE_REGION || "";
    
    if (!API_KEY) {
      console.error("Missing BUNNY_STORAGE_API_KEY");
      return res.status(500).json({
        error: "Storage configuration error",
        galleryId: subcategory,
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
        galleryId: subcategory,
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
        // Construct the public CDN URL properly
        // Encode each path segment correctly, or just use encodeURIComponent on the filename
        const encodedName = encodeURIComponent(file.ObjectName).replace(/%20/g, '+');
        // Actually, bunny prefers standard url encoding. We'll use encodeURI on the whole path or encodeURIComponent on the filename
        const url = `${CDN_BASE_URL}/${storagePath}/${encodeURIComponent(file.ObjectName).replace(/%20/g, '%20')}`;
        
        return {
          name: file.ObjectName,
          url,
          extension: ext
        };
      })
      // Natural sort by filename
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

    if (heicCount > 0) {
      console.debug(`Skipped ${heicCount} HEIC/HEIF files in ${storagePath}`);
    }

    const result = {
      id: subcategory,
      count: images.length,
      images: images
    };

    cache.set(subcategory, {
      data: result,
      timestamp: Date.now()
    });

    res.json(result);
  } catch (err) {
    console.error("Error in service-gallery API:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
