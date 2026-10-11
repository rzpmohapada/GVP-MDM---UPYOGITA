import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // GitHub Pages साठी Relative paths आवश्यक आहेत (Assets 404 होऊ नये म्हणून)
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
});
