const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import PolicyPage from './pages/PolicyPage';",
  "import PolicyPage from './pages/PolicyPage';\nimport CatalogPage from './pages/CatalogPage';"
);

const renderContentOld = `  const renderContent = () => {
    if (currentHash.startsWith('#/policies/')) {
      const policyId = currentHash.replace('#/policies/', '');
      return <PolicyPage policyId={policyId} />;
    }
    return <SectionRenderer layout={homepageLayout} />;
  };`;

const renderContentNew = `  const renderContent = () => {
    if (currentHash === '#/catalog' || currentHash === '#/en/catalog') {
      return <CatalogPage />;
    }
    if (currentHash.startsWith('#/policies/')) {
      const policyId = currentHash.replace('#/policies/', '');
      return <PolicyPage policyId={policyId} />;
    }
    return <SectionRenderer layout={homepageLayout} />;
  };`;

code = code.replace(renderContentOld, renderContentNew);

fs.writeFileSync('src/App.tsx', code);
console.log("App Patched");
