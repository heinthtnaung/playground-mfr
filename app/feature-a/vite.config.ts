import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/playground-mfr/feature-a/' : '/',
    plugins: [
      react(),
      federation({
        name: 'featureA',
        filename: 'remoteEntry.js',
        exposes: {
          './TestComponentA': './src/App.tsx',
          './CatalogView': './src/CatalogView.tsx',
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
      port: 5001,
      cors: true
    },
    preview: {
      port: 5001,
    }
  };
});
