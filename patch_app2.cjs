const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldEffect = `  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);`;

const newEffect = `  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      // Scroll to top when navigating to standalone pages
      if (
        window.location.hash === '#/catalog' || 
        window.location.hash === '#/en/catalog' || 
        window.location.hash.startsWith('#/policies/')
      ) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll check for standalone pages on direct load
    if (
      window.location.hash === '#/catalog' || 
      window.location.hash === '#/en/catalog' || 
      window.location.hash.startsWith('#/policies/')
    ) {
      window.scrollTo(0, 0);
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);`;

code = code.replace(oldEffect, newEffect);
fs.writeFileSync('src/App.tsx', code);
console.log("App Patched Again");
