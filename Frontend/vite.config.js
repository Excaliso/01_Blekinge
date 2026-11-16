import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  //Required to be able to see changes (locally)
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
})
