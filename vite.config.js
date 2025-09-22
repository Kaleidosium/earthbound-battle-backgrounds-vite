import { defineConfig } from 'vite';
import arraybuffer from 'vite-plugin-arraybuffer';
import path from 'path';

export default defineConfig({
  plugins: [
    arraybuffer(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'EBB',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `earthbound-battle-backgrounds-rollup.${format}.js`,
    },
  },
});
