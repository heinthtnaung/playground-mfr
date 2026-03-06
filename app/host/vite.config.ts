import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/playground-mfr/' : '/',
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          featureA: isProd ? '/playground-mfr/feature-a/assets/remoteEntry.js' : 'http://localhost:5001/assets/remoteEntry.js',
          featureB: isProd ? '/playground-mfr/feature-b/assets/remoteEntry.js' : 'http://localhost:5002/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom']
      })
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 5000,
      cors: true
    },
    preview: {
      port: 5000,
    }
  };
});
