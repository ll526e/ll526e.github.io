import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@style': resolve(__dirname, './core/styles'),
      '@components': resolve(__dirname, './core/components'),
      '@hooks': resolve(__dirname, './core/hooks'),
    }
  },
  plugins: [
    react(),
    AutoImport({ dts: 'types/auto-import.d.ts', imports: ['react'] })
  ],
})
