// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// Configuración de Astro
export default defineConfig({
  integrations: [
    tailwind(), 
    icon(),
  ],
  // Modo de salida híbrido para SSR y prerender
  output: 'hybrid', // Puedes cambiarlo a 'static' o 'server' según tu preferencia
});
