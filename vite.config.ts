/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: 'dist', include: ["src/index.ts"], exclude: ["src/**/__tests__/**"] })],

  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './tests/setup.ts'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lvlup-components',
      formats: ['es', 'umd']
    }
  }
})

