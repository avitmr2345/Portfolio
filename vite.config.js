import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "./client/src"),
    },
  },
  root: "./client",
  build: {
    outDir: "../public",
    emptyOutDir: true,
  },
});