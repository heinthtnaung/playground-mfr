import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'featureA',
      filename: 'remoteEntry.js',
      exposes: {
        './TestComponentA': './src/TestComponentA.js',
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
    port: 5001,
    cors: true
  },
  preview: {
    port: 5001,
  }
});
