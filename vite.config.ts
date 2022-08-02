import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const pathSrc = path.resolve(__dirname, "./src");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/main";`,
      },
    },
  },
});
