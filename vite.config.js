import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  build: {
    rolldownOptions: {
      checks: {
        // Tailwind's first-party Vite plugin is already the optimized CSS path.
        // On this small build, its required CSS work dominates the percentage
        // breakdown even though the total build remains fast.
        pluginTimings: false,
      },
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /\/node_modules\/(?:react|react-dom|react-router|react-router-dom)\//,
              priority: 40,
            },
            {
              name: 'motion-vendor',
              test: /\/node_modules\/framer-motion\//,
              priority: 30,
            },
            {
              name: 'icons-vendor',
              test: /\/node_modules\/lucide-react\//,
              priority: 20,
            },
            {
              name: 'translations',
              test: /\/src\/i18n\//,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});