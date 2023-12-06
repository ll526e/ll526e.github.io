import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [
    react(),
    AutoImport({ dts: 'types/auto-import.d.ts', imports: ['react'] })
  ],
})
