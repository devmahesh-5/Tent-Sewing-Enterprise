import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy : {
      '/api' :'https://my-backend-ikiz.onrender.com'
    }
  },
  plugins: [react()],
})
