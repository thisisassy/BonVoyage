// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bon-voyage-sooty.vercel.app",
  integrations: [sitemap()],
});
