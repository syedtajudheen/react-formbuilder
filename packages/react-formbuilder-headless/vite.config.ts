import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes: true,
    tsconfigPath: "./tsconfig.app.json"
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'ReactFormBuilder',
      fileName: (format) => `react-formbuilder-headless.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
