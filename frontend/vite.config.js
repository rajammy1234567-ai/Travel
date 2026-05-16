import { defineConfig } from 'vite'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
=======
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
