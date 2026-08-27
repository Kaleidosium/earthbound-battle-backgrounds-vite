import { defineConfig } from 'vite';
import arraybuffer from 'vite-plugin-arraybuffer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    arraybuffer(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'EBB',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `earthbound-battle-backgrounds-vite.${format}.js`,
    },
  },
});
