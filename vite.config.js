
/* 14단계 GitHub Pages 배포 */ 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/admin-dashboard/", /* 14단계 */
})
