import { defineConfig } from "vite";
import path from "path";

const configs = {
  main: {
    minify: true,
    outDir: "../src/dist/main",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        compact: true,
        inlineDynamicImports: true,
      },
    },
  },
  test: {
    minify: true,
    outDir: "../src/dist/test",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/test.js",
      output: {
        format: "umd",
        entryFileNames: "test.js",
        compact: true,
        inlineDynamicImports: true,
      },
    },
  },
};

export default defineConfig({
  root: "src",
  server: {
    cors: "*",
    hmr: {},
  },
  build: configs.main, // toggle between "test" and "main" to build respective files
  envDir: "../",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias '@' maps to 'src'
      "@animations": path.resolve(__dirname, "src/js/animations"),
      "@components": path.resolve(__dirname, "src/js/components"),
      "@pages": path.resolve(__dirname, "src/js/pages"),
      "@utils": path.resolve(__dirname, "src/js/utils"),
      "@global": path.resolve(__dirname, "src/js/global"),
    },
  },
});
