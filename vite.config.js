




import { defineConfig } from 'vite';
import html from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    html()
  ]
});

