// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://github.com/eliac-org/eliac-org.github.io/',
  base: '/',  //
  integrations: [svelte()],
  vite: {
    server: {
      allowedHosts: ['localhost', 'yolanda-posttoxic-noncontiguously.ngrok-free.dev']
    }
  }
});
