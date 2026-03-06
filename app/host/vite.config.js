import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      remotes: {
        featureA: 'http://localhost:5001/assets/remoteEntry.js',
        featureB: 'http://localhost:5002/assets/remoteEntry.js',
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
    port: 5000,
    cors: true
  },
  preview: {
    port: 5000,
  }
});
