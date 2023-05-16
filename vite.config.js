import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true // change it to false if you don't want to run the app in your network
  },
  base: "/todo-monster"
})
