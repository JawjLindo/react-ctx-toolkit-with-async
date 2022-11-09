import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default () => {
  return defineConfig({
    plugins: [
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'lib', 'index.ts'),
        name: 'index',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['react'],
        output: {
          globals: {
            react: 'React',
          },
        },
      },
    },
  });
};
