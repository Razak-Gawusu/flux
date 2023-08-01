import react from '@vitejs/plugin-react';
import path from 'path';
import postcss from 'postcss';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss(),
    eslint(),
    svgr({
      exportAsDefault: false,
      svgrOptions: { icon: true },
      include: '**/*.svg',
    }),

    // Include your env variables in the array below using the name from the .env file by adding them as strings
    // always starting with 'VITE-REACT-APP-${YOUR STRING}' e.g EnvironmentPlugin(['VITE-REACT-APP-API-BASE-URL'])
    EnvironmentPlugin([]),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist/app',
  },
  server: {
    host: true,
    port: 5170,
  },
});
