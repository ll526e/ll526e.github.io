import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './core/assets'),
      '@style': resolve(__dirname, './core/styles'),
      '@components': resolve(__dirname, './core/components'),
      '@hooks': resolve(__dirname, './core/hooks'),
      '@pages': resolve(__dirname, './core/pages'),
      '@reducer': resolve(__dirname, './core/reducer'),
      '@utils': resolve(__dirname, './core/utils'),
    }
  },
  plugins: [
    react(),
    UnoCSS(),
    AutoImport({ dts: 'types/auto-import.d.ts', imports: ['react'], dirs: ['core/hooks'] })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./core/styles/root/theme.scss";`
      }
    }
  }
})
