import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root path for local dev, but keep repo subpath for production deploys.
  base: command === 'serve' ? '/' : '/WebPortfolio/',
  // testing 
  test: {
    globals: true, 
    environment: 'jsdom',
    setupFiles: './src/test/setup.js', 
    css: false
  },
}))
