const fs = require('fs');

let headerCode = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

// The file has two identical img tags now due to the previous patch.
// Let's replace the second one, which corresponds to the mobile layout.
// Using a regex to match the mobile block

const targetStr = `        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center relative" style={{ height: 'var(--header-height)' }}>
          
          <div className="flex-1 flex justify-start">
            <button 
              className="p-2 text-text-primary -ml-2 rtl:-mr-2 rtl:-ml-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <a href="/" className="flex items-center transition-opacity hover:opacity-80">
              {logoSrc ? (
                 <img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ width: "108.8906px", height: "58px", paddingRight: "-1px", paddingLeft: "0px", paddingBottom: "0px", paddingTop: "0px", marginRight: "1px", marginLeft: "-2px", marginBottom: "0px", borderRadius: "7px", borderWidth: "-6px" }} />
              ) : (`;

const replaceStr = `        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center relative" style={{ height: 'var(--header-height)' }}>
          
          <div className="flex-1 flex justify-start">
            <button 
              className="p-2 text-text-primary -ml-2 rtl:-mr-2 rtl:-ml-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <a href="/" className="flex items-center transition-opacity hover:opacity-80">
              {logoSrc ? (
                 <img src={logoSrc} alt={contactConfig.tradeNameAr} className="object-contain" style={{ height: "60px", marginLeft: "-4px", marginRight: "-14px", paddingBottom: "6px", paddingTop: "4px", paddingLeft: "3px", marginTop: "-11px", marginBottom: "0px", borderWidth: "-1px", borderRadius: "8px", width: "108.8906px" }} />
              ) : (`;

headerCode = headerCode.replace(targetStr, replaceStr);

fs.writeFileSync('src/components/layout/Header.tsx', headerCode);
console.log("Mobile logo patched.");
