import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

function vercelApiFallback() {
  return {
    name: 'vercel-api-fallback',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        try {
          const urlObj = new URL(req.url, 'http://localhost');
          const routePath = urlObj.pathname;
          
          const modulePath = `./api${routePath}.ts`;
          const module = await server.ssrLoadModule(modulePath).catch(() => null);
          
          if (module && module.default) {
            req.query = Object.fromEntries(urlObj.searchParams);
            
            res.status = (code) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            
            await module.default(req, res);
            return;
          }
        } catch (err) {
          console.error("API Mock Error:", err);
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), vercelApiFallback()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
