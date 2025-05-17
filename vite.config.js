import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Netflex-clone-2025/', // 👈 THIS IS CRITICAL

  plugins: [react()],
})
// vite.config.js