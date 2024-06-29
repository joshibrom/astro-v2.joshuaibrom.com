import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  image: { service: squooshImageService() } // TODO: Use sharp
});
