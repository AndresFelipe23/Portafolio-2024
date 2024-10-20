// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

// Configuración de Astro
export default defineConfig({
  integrations: [
    tailwind(),
    icon(), // No especificas "collections" aquí, lo manejarás en tu código
  ],
  adapter: vercel(),
  output: 'hybrid', // Puedes cambiarlo a 'static' o 'server' según tu preferencia
});
