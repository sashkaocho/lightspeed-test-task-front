import * as path from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
