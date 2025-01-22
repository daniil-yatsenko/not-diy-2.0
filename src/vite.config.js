// export default {
//   root: "src",
//   server: {
//     cors: "*",
//     hmr: {},
//   },
//   build: {
//     minify: true,
//     outDir: "../src/dist",
//     emptyOutDir: true,
//     rollupOptions: {
//       input: "/js/index.js",
//       output: {
//         format: "umd",
//         entryFileNames: "index.js",
//         compact: true,
//       },
//     },
//   },
//   envDir: "../",
// };

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  server: {
    cors: "*",
    hmr: {},
  },
  build: {
    minify: true,
    outDir: "../src/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "/js/index.js",
        test: "/js/test.js",
        test2: "/js/test2.js",
      },
      output: {
        format: "cjs",
        entryFileNames: "[name].js",
        compact: true,
        inlineDynamicImports: false,
      },
    },
  },
  envDir: "../",

  // Add alias for better path resolution
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias '@' maps to 'src'
      "@animations": path.resolve(__dirname, "src/js/animations"),
      "@components": path.resolve(__dirname, "src/js/components"),
      "@pages": path.resolve(__dirname, "src/js/pages"),
      "@utils": path.resolve(__dirname, "src/js/utils"),
    },
  },
});
