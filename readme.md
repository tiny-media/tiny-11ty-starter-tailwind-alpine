# 11ty Tailwind Vite Starter

This is a starter project that integrates Eleventy (11ty) with Tailwind CSS v4 and Vite using the official Eleventy Vite plugin.

## Project Structure

```
Project Root
├── package.json              
├── eleventy.config.js              
├── README.md 
└── 11ty_config                 
    ├── EleventyVitePlugin.js                
└── 11ty                     
    ├── about.liquid          
    ├── index.liquid      
    ├── _includes
    │   └── header.liquid       
    │   └── footer.liquid       
    ├── _layouts
    │   └── base.liquid      
    ├── _data
    │   └── site.json     
    ├── _css
    │   └── styles.css       
    └── _js
         └── main.js         
```


## Getting Started

Make sure you have Bun installed (as you're using Bun to run this project).

### Install Dependencies

From the project root, run:

```
bun install
```

*(If you're using Bun, it should work with the same command.)*

### Development

To start a local development server with Eleventy and Vite, run:

```
bun run dev
```

This will start the Eleventy server (with Vite as middleware) and watch for file changes.

### Build

To build the site for production, run:

```
bun run build
```

The generated site will be output in the `_site` directory.

## Tailwind CSS v4 Changes

In Tailwind CSS v4, you no longer need a configuration file if you don't have any customizations. The CSS file imports Tailwind using a simple `@import` statement.

## Eleventy & Vite Integration

The [@11ty/eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite) is used to integrate Vite with Eleventy, enabling fast HMR and modern asset bundling.

## License

MIT License
