import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Set test environment to jsdom
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "/node_modules/",
        "src/StaticData.js",
        "postcss.config.js",
        "tailwind.config.js",
      ],
    },
  },
});
