import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite starts from the project root
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Add any missing dependencies
  },
});
