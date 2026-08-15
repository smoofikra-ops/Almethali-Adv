const fs = require('fs');
let code = fs.readFileSync('src/config/images.ts', 'utf8');

const target = `  services: [
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/about/about-5.jpg.jpeg",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621844898625-2fbd65b262a6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?auto=format&fit=crop&q=80"
  ],`;

const replacement = `  services: [
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Advertising%20Signage.jpeg",
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Events%20Conferences.jpeg",
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Exhibitions%20Booths.jpeg",
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Digital%20Printing%20Execution.jpeg",
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Display%20Stands.jpeg",
    "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/Promotional%20Gifts.jpeg"
  ],`;

code = code.replace(target, replacement);
fs.writeFileSync('src/config/images.ts', code);
console.log("Patched src/config/images.ts with .jpeg extension");
