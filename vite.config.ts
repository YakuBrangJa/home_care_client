import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
})
