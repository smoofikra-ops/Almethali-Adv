const { createServer } = require('vite');
(async () => {
  const server = await createServer({
    server: { middlewareMode: true }
  });
  try {
    const mod = await server.ssrLoadModule('./api/service-gallery.ts');
    console.log("Loaded successfully!");
  } catch(e) {
    console.error("Failed to load:", e);
  }
  process.exit(0);
})();
