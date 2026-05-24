import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vitality-thriving-entity.ngrok-free.dev',
  trailingSlash: 'ignore',
  
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'vitality-thriving-entity.ngrok-free.dev',  // domain spesifik Anda
        '.ngrok-free.dev',                           // semua domain ngrok
        'localhost',
        '.localhost'
      ]
    }
  }
});
