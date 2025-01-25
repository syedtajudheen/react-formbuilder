import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-formbuilder-headless': path.resolve(__dirname, '../../dist/react-formbuilder-headless.es.js'),
      "@": path.resolve(__dirname, "./src"),
    }
  },
  root: path.resolve(__dirname), // Set the root to the project root
})
