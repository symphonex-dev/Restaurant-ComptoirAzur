import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite minimale : le plugin React suffit pour ce projet,
// pas besoin de complexifier avec des options qu'on n'utilisera pas.
export default defineConfig({
  plugins: [react()],
})
