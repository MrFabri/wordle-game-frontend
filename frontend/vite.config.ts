import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // ******** Proxy config for the backend (only for development) ********* \\
    proxy: {
      '/api': {
        target: 'http://localhost:5080/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/highscore': 'http://localhost:5080/highscore'
    }
  }
})
