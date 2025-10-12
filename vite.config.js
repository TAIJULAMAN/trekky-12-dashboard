// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress", // or "gzip"
      ext: ".br", // output extension
      threshold: 1024, // only compress files >1KB
      deleteOriginFile: false, // keep uncompressed files too
    }),
  ],
});
