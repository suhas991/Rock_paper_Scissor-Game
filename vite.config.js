import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Rock_paper_Scissor-Game/",
  plugins: [react()],
})
