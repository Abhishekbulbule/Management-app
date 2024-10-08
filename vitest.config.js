import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    globals: true,
    setupFiles: "/src/setupTests.js",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/StaticData.js",
    "postcss.config.js",
    "tailwind.config.js",
  ],
});
