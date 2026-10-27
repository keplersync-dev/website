import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5180,
    strictPort: true,
    proxy: { "/v1": { target: "https://keplersync.app", changeOrigin: true } },
  },
});
