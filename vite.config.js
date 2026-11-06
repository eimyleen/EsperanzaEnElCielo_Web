
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        id: '/',
        name: 'Esperanza en el Cielo - Wiki',
        short_name: 'Esperanza Wiki',

        description:
          'Wiki del videojuego Esperanza en el Cielo.',

        lang: 'es-MX',
        start_url: '/',
        scope: '/',

        display: 'standalone',
        theme_color: '#121628',
        background_color: '#121628',

        icons: [
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },

      workbox: {
        // Guardar la aplicación para leerla sin conexión
        globPatterns: [
          '**/*.{html,js,css}',
          'images/fondo-wiki.png',
          'images/logo-wiki.png'
        ],

        // No guardar previamente las ilustraciones
        // de personajes, niveles y objetos
        maximumFileSizeToCacheInBytes:
          10 * 1024 * 1024,

        cleanupOutdatedCaches: true,

        navigateFallback: 'index.html'
      }
    })
  ]
})
