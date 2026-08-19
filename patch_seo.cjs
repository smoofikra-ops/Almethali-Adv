const fs = require('fs');

// Patch index.html
let html = fs.readFileSync('index.html', 'utf8');

const headEndIndex = html.indexOf('</head>');

const seoTags = `
    <title>المثالي للدعاية والإعلان | لوحات، طباعة، معارض وفعاليات</title>
    <meta name="description" content="المثالي للدعاية والإعلان يقدم حلول اللوحات الإعلانية، الطباعة الرقمية، تجهيز المعارض والأكشاك، الفعاليات والمؤتمرات، الاستاندات والهدايا الدعائية باحترافية وجودة عالية." />
    <link rel="canonical" href="https://almethaliadv.com/" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="المثالي للدعاية والإعلان" />
    <meta property="og:title" content="المثالي للدعاية والإعلان | لوحات، طباعة، معارض وفعاليات" />
    <meta property="og:description" content="المثالي للدعاية والإعلان يقدم حلول اللوحات الإعلانية، الطباعة الرقمية، تجهيز المعارض والأكشاك، الفعاليات والمؤتمرات، الاستاندات والهدايا الدعائية باحترافية وجودة عالية." />
    <meta property="og:url" content="https://almethaliadv.com/" />
    <meta property="og:image" content="https://nmolabs-cdn.b-cdn.net/almithali-assets/01-brand/01-logos/d%20without%20n.png" />
    <meta property="og:locale" content="ar_SA" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="المثالي للدعاية والإعلان | لوحات، طباعة، معارض وفعاليات" />
    <meta name="twitter:description" content="المثالي للدعاية والإعلان يقدم حلول اللوحات الإعلانية، الطباعة الرقمية، تجهيز المعارض والأكشاك، الفعاليات والمؤتمرات، الاستاندات والهدايا الدعائية باحترافية وجودة عالية." />
    <meta name="twitter:image" content="https://nmolabs-cdn.b-cdn.net/almithali-assets/01-brand/01-logos/d%20without%20n.png" />

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "المثالي للدعاية والإعلان",
      "url": "https://almethaliadv.com/",
      "logo": "https://nmolabs-cdn.b-cdn.net/almithali-assets/01-brand/01-logos/d%20without%20n.png",
      "sameAs": [
        "https://instagram.com/almithali",
        "https://x.com/almithali",
        "https://tiktok.com/@almithali",
        "https://linkedin.com/company/almithali",
        "https://snapchat.com/add/almithali",
        "https://facebook.com/almithali"
      ]
    }
    </script>
`;

html = html.replace('<title>My Google AI Studio App</title>', '');
html = html.slice(0, headEndIndex) + seoTags + html.slice(headEndIndex);
fs.writeFileSync('index.html', html);
console.log('index.html patched');

// Patch App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(
  '<link rel="canonical" href="https://almthali.com" />',
  '<link rel="canonical" href="https://almethaliadv.com/" />'
);
appCode = appCode.replace(
  '<title>{contactConfig.tradeNameAr} | شريكك الإستراتيجي</title>',
  '<title>المثالي للدعاية والإعلان | لوحات، طباعة، معارض وفعاليات</title>'
);
appCode = appCode.replace(
  '<meta name="description" content={contactConfig.description} />',
  '<meta name="description" content="المثالي للدعاية والإعلان يقدم حلول اللوحات الإعلانية، الطباعة الرقمية، تجهيز المعارض والأكشاك، الفعاليات والمؤتمرات، الاستاندات والهدايا الدعائية باحترافية وجودة عالية." />'
);
fs.writeFileSync('src/App.tsx', appCode);
console.log('App.tsx patched');

// Patch CatalogPage.tsx
let catalogCode = fs.readFileSync('src/pages/CatalogPage.tsx', 'utf8');
catalogCode = catalogCode.replace(
  '<link rel="canonical" href={`https://almthali.com${isRtl ? \'/#/catalog\' : \'/#/en/catalog\'}`} />',
  '<link rel="canonical" href={`https://almethaliadv.com${isRtl ? \'/#/catalog\' : \'/#/en/catalog\'}`} />'
);
fs.writeFileSync('src/pages/CatalogPage.tsx', catalogCode);
console.log('CatalogPage.tsx patched');

