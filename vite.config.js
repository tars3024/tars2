import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [], // Add plugins here as needed.
  server: {
    host: "0.0.0.0", // Ensures the server is accessible on all network interfaces.
    hmr: true, // Enable hot module replacement for development.
  },
  build: {
    outDir: "build", // Ensure the output directory matches the deployment platform's expectation.
    assetsDir: "assets", // Organize built assets under an "assets" folder.
    rollupOptions: {
      input: "index.html", // Ensure correct entry point for the build process.
    },
  },
});
