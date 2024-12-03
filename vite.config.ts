import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@old': fileURLToPath(new URL('./old', import.meta.url))
    },
  },
  build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          old: resolve(__dirname, 'old/index.html'),
        }
      }
  }
})
