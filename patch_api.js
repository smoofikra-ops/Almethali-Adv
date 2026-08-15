const fs = require('fs');

let code = fs.readFileSync('api/service-gallery.ts', 'utf8');

const target = `const ALLOWED_GALLERIES: Record<string, string> = {
  "project-site-fences-signage": "almithali-assets/05-services/1-advertising-signage/project-site-fences-signage",
  "indoor-outdoor-signage": "almithali-assets/05-services/1-advertising-signage/indoor-outdoor-signage",
  "forex-board": "almithali-assets/05-services/1-advertising-signage/forex-board",
  "canvas": "almithali-assets/05-services/1-advertising-signage/canvas",
  "acrylic": "almithali-assets/05-services/1-advertising-signage/acrylic"
};`;

const replacement = `import { servicesConfig } from '../src/config/services';

const ALLOWED_GALLERIES: Record<string, string> = {};
servicesConfig.categories.forEach(cat => {
  cat.internalServices.forEach(sub => {
    if (sub.id && sub.storagePath) {
      ALLOWED_GALLERIES[sub.id] = sub.storagePath;
    }
  });
});`;

code = code.replace(target, replacement);
fs.writeFileSync('api/service-gallery.ts', code);
console.log("Patched api/service-gallery.ts to use servicesConfig");
