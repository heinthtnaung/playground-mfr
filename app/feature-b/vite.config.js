import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'featureB',
      filename: 'remoteEntry.js',
      exposes: {
        './TestComponentB': './src/TestComponentB.js',
      },
      shared: []
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
});
