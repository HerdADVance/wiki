import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  root: fileURLToPath(new URL('./src/client', import.meta.url)),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/client', import.meta.url))
    }
  },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url))
  }

})