/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import packageJson from './package.json';

export const viteConfig = defineConfig({
  //base parameter we could use to set the base url of the application//
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true,
    sourcemap: true,
  },
  root: __dirname,
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(packageJson.version),
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'src/**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/drone_ui',
      provider: 'v8',
    },
  },
  server: {
    fs: {
      allow: [
        join(__dirname, '..', '..'), // Pozwól na dostęp do całego repozytorium
      ],
    },
  },
});

export default viteConfig;
