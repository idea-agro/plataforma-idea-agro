import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), icon({
    iconDir: "src/assets/icons",
    include: {
      "fa6-solid": ["user", "cloud-arrow-up", "cloud-arrow-down", "plus", "trash", "sun", "moon"]
    }
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});