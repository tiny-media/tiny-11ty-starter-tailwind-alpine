import path from 'path'
import tailwindcss from '@tailwindcss/vite'

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
    plugins: [tailwindcss()],
    server: {
      middlewareMode: false,
      hmr: true
    },
    build: {
      emptyOutDir: true,
      rollupOptions: {
        input: [
          path.resolve('11ty/_css/styles.css'),
          path.resolve('11ty/_js/main.js')
        ]
      }
    }
  }
}