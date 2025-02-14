import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export const vitePluginConfig = {
  tempFolderName: ".11ty-vite",
  serverOptions: {
    module: "@11ty/eleventy-dev-server",
    domDiff: false,
    port: 4321
  },
  viteOptions: {
    clearScreen: false,
    appType: "mpa",
    plugins: [tailwindcss(), svelte()],
    optimizeDeps: {
      include: ['svelte']
    },
    server: {
      middlewareMode: true,
      hmr: true
    },
    build: {
      emptyOutDir: true,
      rollupOptions: {
        input: [
          path.resolve('11ty/_css/styles.css'),
          path.resolve('11ty/_js/main.js'),
          path.resolve('11ty/_js/svelte.js'),
        ]
      },
      copyPublicDir: true
    },
    publicDir: path.resolve('11ty/_rootFolder')
  }
}