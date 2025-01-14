import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "TaskCard",
        short_name: "TaskCard",
        description: "an app to manage your life and work",
        start_url: '/',
        icons:
          [{
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: 'any maskable',
          }],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "minimal-ui",
        lang: 'en',
        scope: '/',
      }
    })
  ]
})
