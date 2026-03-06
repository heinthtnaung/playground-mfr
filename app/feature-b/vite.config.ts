import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/playground-mfr/feature-b/' : '/',
    plugins: [
      react(),
      federation({
        name: 'featureB',
        filename: 'remoteEntry.js',
        exposes: {
          './TestComponentB': './src/App.tsx',
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
      port: 5002,
      cors: true
    },
    preview: {
      port: 5002,
    }
  };
});
