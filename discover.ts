import { loadEnvFile } from 'process';
import fetch from 'node-fetch';

loadEnvFile('.env');

const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
const ZONE = process.env.BUNNY_STORAGE_ZONE || "nmolabs-assets";
const REGION = process.env.BUNNY_STORAGE_REGION || "";

let hostname = "storage.bunnycdn.com";
if (REGION && REGION.toLowerCase() !== 'de' && REGION.toLowerCase() !== 'fs') {
  hostname = `${REGION}.storage.bunnycdn.com`;
}

async function listDir(path: string) {
  const apiUrl = `https://${hostname}/${ZONE}/${path}/`;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "AccessKey": API_KEY,
      "Accept": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to list ${path}: ${response.status}`);
  }
  return await response.json();
}

async function run() {
  try {
    const mainDirs = await listDir('almithali-assets/05-services');
    console.log("Main Dirs:", mainDirs.filter(d => d.IsDirectory).map(d => d.ObjectName));

    for (const mainDir of mainDirs.filter(d => d.IsDirectory)) {
      console.log(`\nExploring ${mainDir.ObjectName}...`);
      const subDirs = await listDir(`almithali-assets/05-services/${mainDir.ObjectName}`);
      for (const subDir of subDirs.filter(d => d.IsDirectory)) {
        const files = await listDir(`almithali-assets/05-services/${mainDir.ObjectName}/${subDir.ObjectName}`);
        
        const validExtensions = new Set(['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif']);
        const imageCount = files.filter(file => !file.IsDirectory).filter(file => {
          const ext = file.ObjectName.split('.').pop()?.toLowerCase();
          return ext && validExtensions.has(ext);
        }).length;

        console.log(`  - Subfolder: ${subDir.ObjectName}, Images: ${imageCount}, Path: almithali-assets/05-services/${mainDir.ObjectName}/${subDir.ObjectName}`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

run();
