const fs = require('fs');

let headerCode = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

// Target the Desktop logo img element
const targetDesktopLogo = '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="h-10 w-auto object-contain" />';
const replacementDesktopLogo = '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="h-[58px] w-[109px] object-contain rounded-[7px] -ml-[2px] mr-[1px] -my-[6px]" style={{ padding: "0 0 0 0", width: "108.89px", height: "58px", borderRadius: "7px", marginLeft: "-2px", marginRight: "1px" }} />';

// Also replace the mobile logo just in case (the selector was non-specific to media query, but let's target desktop since it has the exact structure matching the query usually, but wait, let's just replace both to be safe or only the one that matches).
// Wait, the user specifically gave CSS dimensions, let's just apply it to BOTH to be safe, or just the one. The prompt gave a specific selector, let's apply a general class/style override to the img tags inside the Header.
// Let's replace ALL logo img tags with the style.

headerCode = headerCode.replace(
    '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="h-10 w-auto object-contain" />',
    '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ width: "108.8906px", height: "58px", paddingRight: "-1px", paddingLeft: "0px", paddingBottom: "0px", paddingTop: "0px", marginRight: "1px", marginLeft: "-2px", marginBottom: "0px", borderRadius: "7px", borderWidth: "-6px" }} />'
);

headerCode = headerCode.replace(
    '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="h-8 w-auto object-contain" />',
    '<img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ width: "108.8906px", height: "58px", paddingRight: "-1px", paddingLeft: "0px", paddingBottom: "0px", paddingTop: "0px", marginRight: "1px", marginLeft: "-2px", marginBottom: "0px", borderRadius: "7px", borderWidth: "-6px" }} />'
);

fs.writeFileSync('src/components/layout/Header.tsx', headerCode);
console.log("Header logo style patched.");

