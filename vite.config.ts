import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslintPlugin({
      exclude: ["/@react-refresh", "**/*.css"]
    }),
    react(),
  ]
})
