const fs = require('fs');
let code = fs.readFileSync('src/config/services.ts', 'utf8');

const replacements = [
  // 2-digital-printing-execution
  ['2-digital-printing-execution/fabric"', '2-digital-printing-execution/fabric-printing"'],
  ['2-digital-printing-execution/mics"', '2-digital-printing-execution/mica-boards"'],
  ['2-digital-printing-execution/safety"', '2-digital-printing-execution/safety-gear-printing"'],
  
  // 4-exhibitions-kiosks
  ['4-exhibitions-kiosks/pop-up"', '4-exhibitions-kiosks/pop-up-displays"'],
  
  // 5-stands-display-solutions
  ['5-stands-display-solutions/roll-up-stand"', '5-stands-display-solutions/roll-up-stands"'],
  ['5-stands-display-solutions/product-stands"', '5-stands-display-solutions/product-display-stands"'],
  ['5-stands-display-solutions/lama-stand"', '5-stands-display-solutions/totem-stands"'],
  ['5-stands-display-solutions/pop-up"', '5-stands-display-solutions/pop-up-displays"'],
  
  // 6-corporate-promotional-gifts
  ['6-corporate-promotional-gifts/awards-plaques"', '6-corporate-promotional-gifts/trophy-shields"'],
  ['6-corporate-promotional-gifts/national-events"', '6-corporate-promotional-gifts/national-occasions"'],
  ['6-corporate-promotional-gifts/copper-products"', '6-corporate-promotional-gifts/brass-products"'],
  ['6-corporate-promotional-gifts/resin"', '6-corporate-promotional-gifts/resin-crafts"']
];

for (const [oldStr, newStr] of replacements) {
  if (code.includes(oldStr)) {
    code = code.replace(oldStr, newStr);
    console.log(`Replaced ${oldStr} with ${newStr}`);
  } else {
    console.warn(`Could not find ${oldStr}`);
  }
}

fs.writeFileSync('src/config/services.ts', code);
console.log("Mappings applied.");
