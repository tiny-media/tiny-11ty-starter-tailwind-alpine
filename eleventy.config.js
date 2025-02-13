import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import { vitePluginConfig } from './11ty_config/EleventyVitePlugin.js'

export default function (eleventyConfig) {

  // Directories
  eleventyConfig.setInputDirectory("11ty");
  eleventyConfig.setDataDirectory("_data");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setOutputDirectory("_site");

  // Vite configuration
  eleventyConfig.addPlugin(EleventyVitePlugin, vitePluginConfig)

  // Passthrough copies
  eleventyConfig.addPassthroughCopy('11ty/_css')
  eleventyConfig.addPassthroughCopy('11ty/_js')
  eleventyConfig.addPassthroughCopy('11ty/_components/svelte')

  // Ignores
  eleventyConfig.ignores.add('.DS_Store');

}
