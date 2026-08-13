const fs = require('fs');
let code = fs.readFileSync('src/config/content.ts', 'utf8');

const newPoints = `    points: [
      "تنفيذ يطابق توقعاتك",
      "جودة تليق بعلامتك",
      "حلول تناسب احتياجك",
      "فريق قريب منك",
      "تواصل واضح وسريع",
      "اهتمام بالتفاصيل",
      "متابعة حتى التسليم",
      "التزام حتى اكتمال التنفيذ"
    ],
    pointsEn: [
      "Execution matching your expectations",
      "Quality worthy of your brand",
      "Solutions tailored to your needs",
      "A dedicated team close to you",
      "Clear and fast communication",
      "Meticulous attention to detail",
      "Consistent follow-up until delivery",
      "Commitment until project completion"
    ]`;

const startIdx = code.indexOf('    points: [');
const endIdx = code.indexOf('  }\n};');

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newPoints + '\n  }\n};';
    fs.writeFileSync('src/config/content.ts', code);
    console.log("Success");
} else {
    console.log("Failed to find indices");
}
