import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion", "motion"],
          // DON'T include react-icons-gi here — tree-shake it or drop it
        },
      },
    },
    // Enable minification
    minify: "esbuild",
    terserOptions: {
      compress: { drop_console: true },
    },
  },
});