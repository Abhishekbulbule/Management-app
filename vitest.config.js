import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: [
      "src/**/*.{test,spec}.{js,jsx,ts,tsx}",
      "__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    exclude: [
      "node_modules",
      "dist",
      "cypress",
      ".{idea,git,cache,output,temp}",
      "{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
    ],
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
