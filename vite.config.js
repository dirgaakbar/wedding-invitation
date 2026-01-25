import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Untuk GitHub Pages: ganti 'wedding-invitation' dengan nama repo Anda
export default defineConfig({
  plugins: [react()],
  base: '/wedding-invitation/',
})
